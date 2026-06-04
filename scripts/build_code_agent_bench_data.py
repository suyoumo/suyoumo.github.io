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
    "deepseek": "DeepSeek",
    "opencode": "OpenCode",
    "qwen": "Qwen",
}

PROVIDER_LABELS = {
    "deepseek": "DeepSeek",
    "gpt": "OpenAI",
    "longcat": "LongCat",
    "minimax-cn-coding-plan": "MiniMax",
    "qwen": "Qwen",
    "sensenova": "SenseNova",
    "stepfun": "StepFun",
    "xiaomi": "Xiaomi",
    "xiaomi-token-plan-cn": "Xiaomi",
    "zai-coding-plan": "Zhipu GLM",
}

LOGOS = {
    "deepseek": "logo-deepseek.png",
    "gpt": "logo-openai.png",
    "longcat": "logo-longcat.png",
    "minimax-cn-coding-plan": "logo-minimax.jpeg",
    "qwen": "logo-qwen.png",
    "sensenova": "logo-shangtang.png",
    "stepfun": "logo-stepfun.png",
    "xiaomi": "logo-xiaomi.png",
    "xiaomi-token-plan-cn": "logo-xiaomi.png",
    "zai-coding-plan": "logo-glm.png",
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


def load_score_summary(source_root: Path, model_dir: str) -> dict:
    path = source_root / model_dir / "score_summary.json"
    if not path.exists():
        return {}
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def build_row(item: dict, source_root: Path, group: str) -> dict:
    score_summary = load_score_summary(source_root, item["model_dir"])
    agent = item.get("agent") or score_summary.get("agent") or "unknown"
    raw_model = item.get("model") or score_summary.get("model") or item["model_dir"]
    provider_key, provider_label, model_label = split_model(raw_model)
    attempts = int(item.get("planned_task_attempts") or score_summary.get("planned_task_attempts") or 0)
    tasks = int(score_summary.get("planned_unique_tasks") or score_summary.get("scoreable_unique_tasks") or 151)
    scoreable_attempts = int(item.get("scoreable_attempts") or score_summary.get("scoreable_attempts") or 0)
    pass_at_3_count = int(item.get("pass_at_k_count") or score_summary.get("pass_at_k_count") or 0)
    pass_3_count = int(item.get("pass^k_count") or item.get("pass_caret_k_count") or score_summary.get("pass^k_count") or score_summary.get("pass_caret_k_count") or 0)

    row = {
        "id": slugify(item["model_dir"]),
        "model_dir": item["model_dir"],
        "lane_key": item.get("lane_key") or score_summary.get("lane_key") or item["model_dir"],
        "agent": agent,
        "agent_label": AGENT_LABELS.get(agent, title_model_piece(agent)),
        "agent_slug": slugify(agent),
        "provider": provider_key,
        "provider_label": provider_label,
        "model_raw": raw_model,
        "model_name": model_label,
        "logo": LOGOS.get(provider_key, ""),
        "group": group,
        "status": item.get("score_coverage_status") or score_summary.get("score_coverage_status") or "",
        "strict_retryable_gate": bool(item.get("strict_retryable_gate")),
        "language_variant": score_summary.get("language_variant") or "",
        "attempts_per_task": int(score_summary.get("attempts") or 3),
        "task_count": tasks,
        "planned_task_attempts": attempts,
        "scoreable_attempts": scoreable_attempts,
        "scoreable_attempt_coverage": (scoreable_attempts / attempts) if attempts else 0,
        "non_scoreable_attempts": int(item.get("non_scoreable_attempts") or score_summary.get("non_scoreable_attempts") or 0),
        "tasks_missing_k_scoreable_attempts": int(item.get("tasks_missing_k_scoreable_attempts") or score_summary.get("tasks_missing_k_scoreable_attempts") or 0),
        "solved_attempts": int(score_summary.get("solved_attempts") or 0),
        "solved_unique_tasks": int(score_summary.get("solved_unique_tasks") or pass_at_3_count),
        "pass_at_3_count": pass_at_3_count,
        "pass_at_3_rate": float(item.get("pass_at_k_rate") or score_summary.get("pass_at_k_rate") or 0),
        "pass_3_count": pass_3_count,
        "pass_3_rate": float(item.get("pass^k_rate") or item.get("pass_caret_k_rate") or score_summary.get("pass^k_rate") or score_summary.get("pass_caret_k_rate") or 0),
        "attempt_score": float(item.get("attempt_score") or score_summary.get("attempt_score") or 0),
        "archive_size_mb": mb(item.get("archive_size_bytes")),
        "full_run_tree_size_mb": mb(item.get("full_run_tree_size_bytes")),
        "archive_member_count": int(score_summary.get("complete_run_logs_archive_member_count") or 0),
        "sha256": item.get("exported_full_suite_report_sha256") or score_summary.get("exported_full_suite_report_sha256") or "",
        "sha256_short": (item.get("exported_full_suite_report_sha256") or score_summary.get("exported_full_suite_report_sha256") or "")[:12],
        "job_name": score_summary.get("job_name") or "",
        "exported_at": score_summary.get("exported_at") or "",
        "relative_report_path": f"{item['model_dir']}/full_suite_model_run_report.json",
        "relative_summary_path": f"{item['model_dir']}/score_summary.json",
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
    manifest_path = source_root / "swepro151_pass3_completed_models_manifest.json"
    with manifest_path.open("r", encoding="utf-8") as handle:
        manifest = json.load(handle)

    rows = rank_rows([build_row(item, source_root, "strict") for item in manifest["exported_models"]])
    legacy_rows = rank_rows([
        build_row(item, source_root, "legacy")
        for item in manifest.get("legacy_or_pending_exports", [])
        if item.get("scoreable_attempts") is not None
    ])

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
            "suite": manifest.get("suite", "SWEPro 151 zh pass@3"),
            "language_variant": "zh",
            "task_count": 151,
            "attempts_per_task": 3,
            "total_attempts": 453,
            "rank_metric": "pass_at_3_rate",
            "strict_model_count": len(rows),
            "legacy_model_count": len(legacy_rows),
            "exported_at": manifest.get("exported_at", ""),
            "source_manifest": "SweResult/swepro151_pass3_completed_models_manifest.json",
        },
        "agents": agents,
        "rows": rows,
        "legacy_rows": legacy_rows,
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
    print(f"Wrote {output_path.relative_to(repo_root)} with {len(data['rows'])} strict rows.")


if __name__ == "__main__":
    main()
