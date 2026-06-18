#!/usr/bin/env python3
"""Generate CodeAgentBench model page frontmatter drafts.

The script intentionally emits data-rich markdown drafts, not finished prose.
Each model page should still read like an article, so the generated body is a
small scaffold that an editor can rewrite per model.
"""

from __future__ import annotations

import argparse
import json
from collections import defaultdict
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
BENCH_DATA = REPO_ROOT / "_data" / "code_agent_bench.json"
DEFAULT_OUTPUT = REPO_ROOT / "_models"

MODEL_DIR_OVERRIDES = {
    "opencode-glm52": Path(
        "/Volumes/apfs2tbxyh110/openclawcodebench-opencode-runs/"
        "full-suite-model-runs/"
        "swepro151-pass3-taskmajor-v30-r1-20260614-opencode-glm52-zh-pass3/"
        "opencode-glm52"
    ),
}


def pct(value: float | int | None) -> str:
    return f"{float(value or 0) * 100:.1f}%"


def scalar(value: object) -> str:
    if value is None:
        return '""'
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        return str(round(value, 4) if isinstance(value, float) else value)
    text = str(value).replace('"', '\\"')
    return f'"{text}"'


def load_json(path: Path) -> dict:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def model_run_dir(row: dict, source_root: Path | None) -> Path | None:
    model_id = row["id"]
    if model_id in MODEL_DIR_OVERRIDES and MODEL_DIR_OVERRIDES[model_id].exists():
        return MODEL_DIR_OVERRIDES[model_id]
    candidates = []
    if source_root:
        candidates.append(source_root / model_id)
    candidates.append(REPO_ROOT / "SweResult" / model_id)
    for candidate in candidates:
        if candidate.exists():
            return candidate
    return None


def suite_profile(model_dir: Path, max_attempts: int = 3) -> list[dict]:
    by_suite: dict[str, dict] = defaultdict(
        lambda: {
            "instances": set(),
            "solved_instances": set(),
            "attempts": 0,
            "solved_attempts": 0,
            "pass3_instances": defaultdict(list),
        }
    )
    for attempt in range(1, max_attempts + 1):
        attempt_dir = model_dir / f"attempt-{attempt}"
        if not attempt_dir.exists():
            continue
        for summary_path in attempt_dir.rglob("run_summary.json"):
            parts = summary_path.relative_to(model_dir).parts
            if len(parts) < 4:
                continue
            suite = parts[2]
            instance = parts[3]
            summary = load_json(summary_path)
            for task in summary.get("tasks", []):
                solved = bool(task.get("solved"))
                bucket = by_suite[suite]
                bucket["instances"].add(instance)
                bucket["attempts"] += 1
                bucket["solved_attempts"] += int(solved)
                bucket["pass3_instances"][instance].append(solved)
                if solved:
                    bucket["solved_instances"].add(instance)

    rows = []
    for suite, bucket in by_suite.items():
        total = len(bucket["instances"])
        if not total:
            continue
        solved = len(bucket["solved_instances"])
        pass3 = sum(1 for values in bucket["pass3_instances"].values() if len(values) >= max_attempts and all(values[:max_attempts]))
        rate = round((solved / total) * 100, 1)
        repo = "-".join(suite.split("-")[3:])
        rows.append(
            {
                "suite": suite,
                "label": f"{repo} · {suite.split('-')[2]}",
                "repo": repo.replace("-", "/") if repo.count("-") == 1 else repo,
                "total": total,
                "solved": solved,
                "rate": rate,
                "rate_pct": f"{rate:.1f}%",
                "pass3": pass3,
                "solved_attempts": bucket["solved_attempts"],
                "attempts": bucket["attempts"],
            }
        )
    return sorted(rows, key=lambda item: (-item["rate"], item["suite"]))


def frontmatter(row: dict, suites: list[dict]) -> str:
    lines = [
        "---",
        "layout: model",
        f"model_id: {row['id']}",
        f"title: {scalar(row['model_name'] + ' on CodeAgentBench')}",
        f"permalink: /code-agent-bench/models/{row['id']}/",
        f"rank: {row.get('rank', '')}",
        f"model_name: {scalar(row.get('model_name'))}",
        f"model_raw: {scalar(row.get('model_raw'))}",
        f"provider_label: {scalar(row.get('provider_label'))}",
        f"agent_label: {scalar(row.get('agent_label'))}",
        f"agent_version: {scalar(row.get('agent_version'))}",
        'subtitle: "Draft model analysis. Replace this with the article thesis for this model."',
        f"final_score: {round(float(row.get('final_score') or 0), 2)}",
        f"solved_attempts: {row.get('solved_attempts', 0)}",
        f"solved_unique_tasks: {row.get('solved_unique_tasks', 0)}",
        f"task_count: {row.get('task_count', 151)}",
        f"scoreable_attempts: {row.get('scoreable_attempts', 453)}",
        f"pass_at_3_rate_pct: {scalar(pct(row.get('pass_at_3_rate')))}",
        f"pass_3_rate_pct: {scalar(pct(row.get('pass_3_rate')))}",
        f"pass_3_count: {row.get('pass_3_count', 0)}",
        f"attempt_score_pct: {scalar(pct(row.get('attempt_score')))}",
        "tldr:",
        '  - "Draft: write the one-sentence reason this model matters."',
        '  - "Draft: describe the strongest task shape."',
        '  - "Draft: describe the failure shape."',
        "suite_profile:",
    ]
    for suite in suites[:10]:
        lines.extend(
            [
                f"  - suite: {suite['suite']}",
                f"    label: {scalar(suite['label'])}",
                f"    repo: {scalar(suite['repo'])}",
                f"    total: {suite['total']}",
                f"    solved: {suite['solved']}",
                f"    rate: {suite['rate']}",
                f"    rate_pct: {scalar(suite['rate_pct'])}",
                f"    pass3: {suite['pass3']}",
            ]
        )
    lines.append("---")
    return "\n".join(lines)


def draft_body(row: dict) -> str:
    return f"""

Write this as an essay, not as a generated report. Start with the main read on **{row['model_name']}**, then use the visual blocks only where they help the story.

{{% include model-suite-bars.html title="Suite profile" note="Generated data scaffold; edit the selection before publishing." %}}

## What stands out

Draft the model-specific narrative here.

## Where it breaks

Use concrete suites or instance examples, but avoid listing every task.

<details class="model-evidence">
  <summary>Supporting suite table</summary>
  <div class="model-evidence-table-wrap">
    <table>
      <thead><tr><th>Suite</th><th>Repo</th><th>Solved</th><th>Pass^3</th><th>Rate</th></tr></thead>
      <tbody>
        {{% for suite in page.suite_profile %}}
        <tr><td><code>{{{{ suite.suite }}}}</code></td><td>{{{{ suite.repo }}}}</td><td>{{{{ suite.solved }}}}/{{{{ suite.total }}}}</td><td>{{{{ suite.pass3 }}}}</td><td>{{{{ suite.rate_pct }}}}</td></tr>
        {{% endfor %}}
      </tbody>
    </table>
  </div>
</details>
""".lstrip()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--model-id", help="Generate one model page draft.")
    parser.add_argument("--source-root", type=Path, help="Directory containing per-model result folders.")
    parser.add_argument("--output-dir", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--force", action="store_true", help="Overwrite existing markdown files.")
    args = parser.parse_args()

    data = load_json(BENCH_DATA)
    rows = data["rows"]
    if args.model_id:
        rows = [row for row in rows if row["id"] == args.model_id]
        if not rows:
            raise SystemExit(f"Unknown model id: {args.model_id}")

    args.output_dir.mkdir(parents=True, exist_ok=True)
    for row in rows:
        target = args.output_dir / f"{row['id']}.md"
        if target.exists() and not args.force:
            print(f"skip existing {target}")
            continue
        run_dir = model_run_dir(row, args.source_root)
        suites = suite_profile(run_dir) if run_dir and run_dir.exists() else []
        target.write_text(frontmatter(row, suites) + "\n" + draft_body(row), encoding="utf-8")
        print(f"wrote {target}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
