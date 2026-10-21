#!/usr/bin/env python3
"""Fill in the accurate release dates for the four models that shipped without one.

The dates come from the maintainer's release-date table; Atria Dawn's official
launch was corrected to 2026-10-19 (the paper announced it on 09-15, but the
official release landed on 10-19).

Usage: python3 scripts/apply_release_dates.py [--check]
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# model name -> release date
DATES = {
    "GPT-6 Sol": "2026-09-22",
    "MiniMax-M3.1-Flash": "2026-10-19",
    "Atria Dawn": "2026-10-19",
    "Atria Dawn Preview": "2026-09-11",
}

# (path, model-name pattern, released-value pattern)
TARGETS = [
    ("_data/llm_monthly_rankings.yml",
     re.compile(r'model:\s*"([^"]+)"'),
     re.compile(r'released:\s*""')),
    ("_data/llm_leaderboard.yml",
     re.compile(r"model:\s*([^\s'][^'\n]*?)\s*$"),
     re.compile(r"released:\s*''")),
]


def apply(path, model_re, released_re, check_only=False):
    text = path.read_text(encoding="utf-8")
    lines = text.split("\n")
    current = None
    changes = []

    def update(i, line, model):
        new_line = re.sub(r'released:\s*(?:""|\'\')',
                          'released: "%s"' % DATES[model], line)
        changes.append((i + 1, model, line.strip(), new_line.strip()))
        if not check_only:
            lines[i] = new_line

    for i, line in enumerate(lines):
        m = model_re.search(line)
        if m:
            current = m.group(1).strip()
            # flow mapping: model and released share one line
            if current in DATES and released_re.search(line):
                update(i, line, current)
            continue
        # block mapping: released sits on a later line
        if current in DATES and released_re.search(line):
            update(i, line, current)
            current = None
    if not check_only:
        path.write_text("\n".join(lines), encoding="utf-8")
    return changes


def main():
    check_only = "--check" in sys.argv
    total = 0
    for rel, model_re, released_re in TARGETS:
        path = ROOT / rel
        changes = apply(path, model_re, released_re, check_only)
        print("%s: %d %s" % (rel, len(changes), "would update" if check_only else "updated"))
        for lineno, model, old, new in changes:
            print("  L%-6d %-22s %s" % (lineno, model, new))
        total += len(changes)
    print("total: %d" % total)
    return 0


if __name__ == "__main__":
    sys.exit(main())
