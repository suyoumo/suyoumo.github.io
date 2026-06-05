#!/usr/bin/env python3
"""Build the CodeAgentBench data file from exported SWEPro results."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


AGENT_LABELS = {
    "claude-code": "Claude Code",
    "codex": "Codex",
    "deepseek": "deepseek-tui",
    "opencode": "OpenCode",
    "qwen": "Qwen",
}

PROVIDER_LABELS = {
    "deepseek": "DeepSeek",
    "deepseek-v4-flash": "DeepSeek",
    "gpt": "OpenAI",
    "longcat": "LongCat",
    "minimax-cn-coding-plan": "MiniMax",
    "qwen": "Qwen",
    "sensenova": "SenseNova",
    "stepfun": "StepFun",
    "volcengine-plan": "Volcengine",
    "xiaomi": "Xiaomi",
    "xiaomi-token-plan-cn": "Xiaomi",
    "zai-coding-plan": "Zhipu GLM",
}

LOGOS = {
    "deepseek": "logo-deepseek.png",
    "deepseek-v4-flash": "logo-deepseek.png",
    "gpt": "logo-openai.png",
    "longcat": "logo-longcat.png",
    "minimax-cn-coding-plan": "logo-minimax.jpeg",
    "qwen": "logo-qwen.png",
    "sensenova": "logo-shangtang.png",
    "stepfun": "logo-stepfun.png",
    "volcengine-plan": "logo-seed.png",
    "xiaomi": "logo-xiaomi.png",
    "xiaomi-token-plan-cn": "logo-xiaomi.png",
    "zai-coding-plan": "logo-glm.png",
}

MODEL_DISPLAY_OVERRIDES = {
    "opencode-deepseek-v4-flash-max": {
        "model_raw": "deepseek/deepseek-v4-pro#variant=max",
        "model_name": "DeepSeek v4 pro (max)",
    },
    "opencode-deepseek-v4-pro-max": {
        "model_raw": "deepseek/deepseek-v4-flash#variant=max",
        "model_name": "DeepSeek v4 flash (max)",
    },
}


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return slug or "item"


def title_model_piece(value: str) -> str:
    replacements = {
        "gpt-": "GPT-",
        "glm-": "GLM-",
        "mimo-": "MiMo-",
        "qwen": "Qwen ",
        "deepseek": "DeepSeek",
        "minimax": "MiniMax",
        "sensenova": "SenseNova",
        "step-": "Step-",
    }
    text = value
    for src, dst in replacements.items():
        text = re.sub(src, dst, text, flags=re.IGNORECASE)
    text = text.replace("-", " ")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def split_model(raw_model: str) -> tuple[str, str, str]:
    main, _, variant = raw_model.partition("#")
    parts = main.split("/")
    if len(parts) > 1:
        provider_key = parts[0].lower()
        model_key = parts[-1]
    else:
        lower_main = main.lower()
        if lower_main.startswith("gpt-"):
            provider_key = "gpt"
        elif lower_main.startswith("qwen"):
            provider_key = "qwen"
        else:
            provider_key = parts[0].lower()
        model_key = parts[-1]

    provider_label = PROVIDER_LABELS.get(provider_key, title_model_piece(provider_key))
    model_label = title_model_piece(model_key)
    if variant:
        variant_label = variant.replace("effort=", "").replace("variant=", "")
        model_label = f"{model_label} ({variant_label})"
    return provider_key, provider_label, model_label


def mb(value: int | float | None) -> float:
    return round((value or 0) / (1024 * 1024), 2)


def directory_size_bytes(path: Path) -> int:
    if not path.exists():
        return 0
    total = 0
    for child in path.rglob("*"):
        if child.is_file():
            try:
                total += child.stat().st_size
            except OSError:
                pass
    return total


def load_manifest_items(source_root: Path) -> dict[str, dict]:
    manifest_path = source_root / "swepro151_pass3_completed_models_manifest.json"
    if not manifest_path.exists():
        return {}
    with manifest_path.open("r", encoding="utf-8") as handle:
        manifest = json.load(handle)
    items = {}
    for item in manifest.get("exported_models", []) + manifest.get("legacy_or_pending_exports", []):
        model_dir = item.get("model_dir")
        if model_dir:
            items[model_dir] = item
    return items


def load_score_summary(source_root: Path, model_dir: str) -> dict:
    path = source_root / model_dir / "score_summary.json"
    if not path.exists():
        return {}
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def load_full_suite_report(source_root: Path, model_dir: str) -> dict:
    path = source_root / model_dir / "full_suite_model_run_report.json"
    if not path.exists():
        return {}
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def report_agent_version(report: dict, fallback: str) -> tuple[str, str]:
    versions = []
    for record in report.get("records", []):
        lane = (record.get("completion") or {}).get("lane") or {}
        version = lane.get("agent_version")
        if version and version not in versions:
            versions.append(str(version))

    if versions:
        return ", ".join(versions), "full_suite_model_run_report completion.lane.agent_version"

    lane_binding = report.get("lane_binding") or {}
    version = lane_binding.get("agent")
    if version:
        return str(version), "full_suite_model_run_report lane_binding.agent"

    return fallback, "not exported"


def local_archive_size_bytes(source_root: Path, model_dir: str) -> int:
    path = source_root / model_dir / "complete_run_logs.tar.gz"
    if path.exists():
        return path.stat().st_size
    return 0


def local_full_tree_size_bytes(source_root: Path, model_dir: str) -> int:
    return directory_size_bytes(source_root / model_dir / "full_run_tree")


def build_row(model_dir: str, source_root: Path, manifest_item: dict | None = None) -> dict:
    item = manifest_item or {}
    score_summary = load_score_summary(source_root, model_dir)
    full_suite_report = load_full_suite_report(source_root, model_dir)
    agent = score_summary.get("agent") or item.get("agent") or "unknown"
    raw_model = score_summary.get("model") or item.get("model") or model_dir
    provider_key, provider_label, model_label = split_model(raw_model)
    display_override = MODEL_DISPLAY_OVERRIDES.get(model_dir, {})
    display_raw_model = display_override.get("model_raw", raw_model)
    display_model_label = display_override.get("model_name", model_label)
    agent_label = AGENT_LABELS.get(agent, title_model_piece(agent))
    agent_version, agent_version_source = report_agent_version(full_suite_report, agent_label)
    attempts = int(score_summary.get("planned_task_attempts") or item.get("planned_task_attempts") or 0)
    tasks = int(score_summary.get("planned_unique_tasks") or score_summary.get("scoreable_unique_tasks") or 151)
    scoreable_attempts = int(score_summary.get("scoreable_attempts") or item.get("scoreable_attempts") or 0)
    pass_at_3_count = int(score_summary.get("pass_at_k_count") or item.get("pass_at_k_count") or 0)
    pass_3_count = int(score_summary.get("pass^k_count") or score_summary.get("pass_caret_k_count") or item.get("pass^k_count") or item.get("pass_caret_k_count") or 0)
    archive_size_bytes = (
        score_summary.get("complete_run_logs_archive_size_bytes")
        or item.get("archive_size_bytes")
        or local_archive_size_bytes(source_root, model_dir)
    )
    full_tree_size_bytes = item.get("full_run_tree_size_bytes")
    if full_tree_size_bytes is None:
        full_tree_size_bytes = local_full_tree_size_bytes(source_root, model_dir)

    row = {
        "id": slugify(model_dir),
        "model_dir": model_dir,
        "lane_key": score_summary.get("lane_key") or item.get("lane_key") or model_dir,
        "agent": agent,
        "agent_label": agent_label,
        "agent_slug": slugify(agent),
        "agent_version": agent_version,
        "agent_version_source": agent_version_source,
        "provider": provider_key,
        "provider_label": provider_label,
        "model_raw": display_raw_model,
        "model_name": display_model_label,
        "logo": LOGOS.get(provider_key, ""),
        "group": "completed_453",
        "status": score_summary.get("score_coverage_status") or item.get("score_coverage_status") or "",
        "strict_retryable_gate": bool(item.get("strict_retryable_gate")),
        "language_variant": score_summary.get("language_variant") or "",
        "attempts_per_task": int(score_summary.get("attempts") or 3),
        "task_count": tasks,
        "planned_task_attempts": attempts,
        "scoreable_attempts": scoreable_attempts,
        "scoreable_attempt_coverage": (scoreable_attempts / attempts) if attempts else 0,
        "non_scoreable_attempts": int(score_summary.get("non_scoreable_attempts") or item.get("non_scoreable_attempts") or 0),
        "tasks_missing_k_scoreable_attempts": int(score_summary.get("tasks_missing_k_scoreable_attempts") or item.get("tasks_missing_k_scoreable_attempts") or 0),
        "solved_attempts": int(score_summary.get("solved_attempts") or 0),
        "solved_unique_tasks": int(score_summary.get("solved_unique_tasks") or pass_at_3_count),
        "pass_at_3_count": pass_at_3_count,
        "pass_at_3_rate": float(score_summary.get("pass_at_k_rate") or item.get("pass_at_k_rate") or 0),
        "pass_3_count": pass_3_count,
        "pass_3_rate": float(score_summary.get("pass^k_rate") or score_summary.get("pass_caret_k_rate") or item.get("pass^k_rate") or item.get("pass_caret_k_rate") or 0),
        "attempt_score": float(score_summary.get("attempt_score") or item.get("attempt_score") or 0),
        "archive_size_mb": mb(archive_size_bytes),
        "full_run_tree_size_mb": mb(full_tree_size_bytes),
        "archive_member_count": int(score_summary.get("complete_run_logs_archive_member_count") or 0),
        "sha256": score_summary.get("exported_full_suite_report_sha256") or item.get("exported_full_suite_report_sha256") or "",
        "sha256_short": (score_summary.get("exported_full_suite_report_sha256") or item.get("exported_full_suite_report_sha256") or "")[:12],
        "job_name": score_summary.get("job_name") or "",
        "exported_at": score_summary.get("exported_at") or "",
        "relative_report_path": f"{model_dir}/full_suite_model_run_report.json",
        "relative_summary_path": f"{model_dir}/score_summary.json",
    }
    return row


def rank_rows(rows: list[dict]) -> list[dict]:
    ranked = sorted(
        rows,
        key=lambda row: (
            row["pass_at_3_rate"],
            row["attempt_score"],
            row["pass_3_rate"],
            row["solved_attempts"],
        ),
        reverse=True,
    )
    for index, row in enumerate(ranked, start=1):
        row["rank"] = index
    return ranked


def build_data(source_root: Path) -> dict:
    manifest_items = load_manifest_items(source_root)
    score_summaries = sorted(source_root.glob("*/score_summary.json"))
    rows = []
    excluded_rows = []

    for path in score_summaries:
        model_dir = path.parent.name
        score_summary = load_score_summary(source_root, model_dir)
        completed = int(score_summary.get("observed_completed_task_attempts") or 0)
        scoreable = int(score_summary.get("scoreable_attempts") or 0)
        planned = int(score_summary.get("planned_task_attempts") or 453)
        row = build_row(model_dir, source_root, manifest_items.get(model_dir))
        if completed == 453 and scoreable == 453 and planned == 453:
            rows.append(row)
        else:
            excluded_rows.append(row)

    rows = rank_rows(rows)
    excluded_rows = rank_rows(excluded_rows)

    agents = []
    for agent in sorted({row["agent"] for row in rows}):
        agent_rows = [row for row in rows if row["agent"] == agent]
        agents.append({
            "key": agent,
            "slug": slugify(agent),
            "label": AGENT_LABELS.get(agent, title_model_piece(agent)),
            "count": len(agent_rows),
            "best_pass_at_3_rate": max(row["pass_at_3_rate"] for row in agent_rows),
        })

    return {
        "metadata": {
            "schema_version": "code_agent_bench_data.v1",
            "benchmark": "SWE-Bench-Pro",
            "suite": "SWEPro 151 zh pass@3",
            "language_variant": "zh",
            "task_count": 151,
            "attempts_per_task": 3,
            "total_attempts": 453,
            "rank_metric": "pass_at_3_rate",
            "completed_model_count": len(rows),
            "excluded_model_count": len(excluded_rows),
            "exported_at": max((row["exported_at"] for row in rows if row["exported_at"]), default=""),
            "source_manifest": "SweResult/*/score_summary.json",
        },
        "agents": agents,
        "rows": rows,
        "excluded_rows": excluded_rows,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", default="../SweResult", help="Path to SweResult")
    parser.add_argument("--output", default="_data/code_agent_bench.json", help="Output data JSON")
    args = parser.parse_args()

    repo_root = Path(__file__).resolve().parents[1]
    source_root = (repo_root / args.source).resolve()
    output_path = (repo_root / args.output).resolve()

    data = build_data(source_root)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("w", encoding="utf-8") as handle:
        json.dump(data, handle, indent=2, ensure_ascii=False)
        handle.write("\n")
    print(f"Wrote {output_path.relative_to(repo_root)} with {len(data['rows'])} completed rows.")


if __name__ == "__main__":
    main()
