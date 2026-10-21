#!/usr/bin/env python3
"""Render a real monthly export card headlessly so the PNG layout can be checked.

Builds a harness page that mirrors the monthly board markup (same data-* row
attributes and export bar as llm-leaderboard/monthly/index.html), drives the
real assets/js/llm-monthly-export.js, and reveals the generated canvas so
Chrome can screenshot it.

Usage: python3 scripts/render_export_preview.py [rows]
"""
import html
import json
import subprocess
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "tmp_export_preview"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"


def esc(value):
    return html.escape(str(value), quote=True)


def row_html(entry, domestic=False):
    released = entry.get("released") or ""
    attrs = [
        'data-rank="%s"' % entry["rank"],
        'data-model="%s"' % esc(entry["model"]),
        'data-company="%s"' % esc(entry["company"]),
        'data-score="%s"' % esc(entry["score"]),
    ]
    if released:
        attrs.append('data-released="%s"' % esc(released))
    if entry.get("training_label"):
        attrs.append('data-training-label="%s"' % esc(entry["training_label"]))
    if entry.get("new"):
        attrs.append('data-new="true"')
    if not released:
        attrs.append('data-nodate="true"')
    cells = [
        "<td><span class=\"llm-monthly-rank\">%s</span></td>" % entry["rank"],
        "<td class=\"llm-monthly-model-cell\">%s</td>" % esc(entry["model"]),
        "<td>%s</td>" % esc(entry["company"]),
        "<td class=\"llm-monthly-score\">%s</td>" % esc(entry["score"]),
    ]
    if domestic:
        cells.append("<td>#%s</td>" % entry.get("global_rank", ""))
    cells.append("<td class=\"llm-monthly-date\">%s</td>" % (released or "--"))
    return "        <tr %s>%s</tr>" % (" ".join(attrs), "".join(cells))


def build_harness(rows, domestic=False):
    head = (
        '<thead><tr><th>排名</th><th>模型</th><th>厂商</th><th>得分</th>'
        + ("<th>全球</th>" if domestic else "")
        + "<th>发布日期</th></tr></thead>"
    )
    body = "\n".join(row_html(e, domestic) for e in rows)
    board_label = "国产榜" if domestic else "全球榜"
    return """<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="utf-8"><title>export preview</title>
<style>
  body { margin:0; background:#fff; font-family:"PingFang SC",-apple-system,sans-serif; }
  /* the canvas is 2x; show it at logical 1080px so a viewport shot fits it */
  canvas { display:block; width:1080px; height:auto; }
  /* hide the harness markup so the card starts at the top of the shot */
  .llm-monthly-panel { display:none; }
</style>
</head><body>
<section data-monthly-panel="overall" class="llm-monthly-panel">
  <div class="llm-monthly-grid">
    <article class="llm-monthly-card">
      <div class="llm-monthly-table-wrap">
        <table class="llm-monthly-table">%s
          <tbody>
%s
          </tbody>
        </table>
      </div>
      <div class="llm-monthly-export" data-export-card
           data-cat-label="综合" data-board-label="%s"
           data-month-label="2026 年 10 月" data-as-of="2026-10-20">
        <span class="llm-monthly-export-title">导出分享图</span>
        <span class="llm-export-presets"><button type="button" data-range="1,10">1-10</button></span>
        <span class="llm-monthly-export-range">
          <input class="llm-export-start" type="number" min="1" value="1">
          <input class="llm-export-end" type="number" min="1" value="%d">
        </span>
        <button class="llm-export-btn" type="button">下载 PNG</button>
        <span class="llm-monthly-export-msg" aria-live="polite"></span>
      </div>
    </article>
  </div>
</section>
<script>
// reveal the generated canvas instead of downloading it
HTMLCanvasElement.prototype.toBlob = function (cb) {
  document.body.appendChild(this);
  this.id = 'exported-card';
  if (cb) cb(new Blob([], { type: 'image/png' }));
};
</script>
<script src="%s"></script>
<script>
window.addEventListener('load', function () {
  setTimeout(function () {
    document.querySelector('.llm-export-btn').click();
  }, 60);
});
</script>
</body></html>
""" % (head, body, board_label, len(rows), ROOT / "assets/js/llm-monthly-export.js")


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    flags = [a for a in sys.argv[1:] if a.startswith("--")]
    count = int(args[0]) if args else 10
    start = int(args[1]) if len(args) > 1 else 1
    domestic = "--domestic" in flags
    cat_key = None
    for f in flags:
        if f.startswith("--cat="):
            cat_key = f.split("=", 1)[1]
    data = yaml.safe_load((ROOT / "_data/llm_monthly_rankings.yml").read_text(encoding="utf-8"))
    category = data["categories"][0]
    if cat_key:
        category = next(c for c in data["categories"] if c["key"] == cat_key)
    source = category.get("domestic") if domestic else category.get("global")
    rows = source[start - 1:start - 1 + count]

    OUT.mkdir(exist_ok=True)
    harness = OUT / "harness.html"
    harness.write_text(build_harness(rows, domestic), encoding="utf-8")

    shot = OUT / "card.png"
    if shot.exists():
        shot.unlink()
    # card height follows the export layout (header 268 + rows * 92 + footer 168)
    card_h = 268 + len(rows) * 92 + 168
    subprocess.run([
        CHROME, "--headless=new", "--disable-gpu", "--no-sandbox",
        "--hide-scrollbars", "--force-device-scale-factor=1",
        "--virtual-time-budget=6000",
        "--window-size=1100,%d" % (card_h + 40),
        "--screenshot=%s" % shot,
        "--user-data-dir=%s" % (OUT / "chrome-profile"),
        harness.as_uri(),
    ], check=True, capture_output=True, timeout=120)

    print("rows rendered: %d (from %d, domestic=%s)" % (len(rows), start, domestic))
    print("png: %s (%d bytes)" % (shot, shot.stat().st_size))
    for e in rows:
        print("  %-3s %-30s %-12s %s %s" % (
            e["rank"], e["model"], e["score"], e.get("released") or "--",
            "NEW" if e.get("new") else ""))


if __name__ == "__main__":
    main()
