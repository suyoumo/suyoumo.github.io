#!/usr/bin/env python3
"""Generate CodeAgentBench model article pages.

The output is intentionally prose-heavy enough to publish as a first pass, while
still keeping the per-model page editable. Hand-written pages are not
overwritten unless --force is supplied.
"""

from __future__ import annotations

import argparse
import json
import re
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[1]
WORKSPACE_ROOT = REPO_ROOT.parent
BENCH_DATA = REPO_ROOT / "_data" / "code_agent_bench.json"
TASK_DATA = REPO_ROOT / "_data" / "code_agent_tasks.json"
DEFAULT_OUTPUT = REPO_ROOT / "_models"

MODEL_DIR_OVERRIDES = {
    "opencode-glm52": Path(
        "/Volumes/apfs2tbxyh110/openclawcodebench-opencode-runs/"
        "full-suite-model-runs/"
        "swepro151-pass3-taskmajor-v30-r1-20260614-opencode-glm52-zh-pass3/"
        "opencode-glm52"
    ),
    "qodercli-qwen37plus-direct-full453-10c-r1-20260615": (
        REPO_ROOT / "SweResult" / "qodercli-qwen37plus-direct-full453-10c-r1-20260615"
    ),
    "qodercli-qwen37max-direct-full453-10c-r1-20260613": (
        REPO_ROOT / "SweResult" / "qodercli-qwen37max-direct-full453-10c-r1-20260613"
    ),
    "opencode-kat-coder-pro-v2-ps4-prepared-20260613": (
        REPO_ROOT / "SweResult" / "opencode-kat-coder-pro-v2-ps4-prepared-20260613"
    ),
}

HAND_WRITTEN_MODEL_IDS = {"opencode-glm52"}

REPO_LABELS = {
    "ansible/ansible": "Ansible",
    "flipt-io/flipt": "Flipt",
    "future-architect/vuls": "vuls",
    "internetarchive/openlibrary": "Open Library",
    "navidrome/navidrome": "Navidrome",
    "qutebrowser/qutebrowser": "qutebrowser",
}

REPO_LABELS_ZH = {
    "ansible/ansible": "Ansible 自动化",
    "flipt-io/flipt": "Flipt feature flag 服务",
    "future-architect/vuls": "vuls 漏洞扫描器",
    "internetarchive/openlibrary": "Open Library",
    "navidrome/navidrome": "Navidrome 音乐服务",
    "qutebrowser/qutebrowser": "qutebrowser 浏览器",
}

REPO_SHAPES = {
    "ansible/ansible": "automation and configuration-management work",
    "flipt-io/flipt": "Go product plumbing across configuration, storage, and service APIs",
    "future-architect/vuls": "localized Go security-scanner changes",
    "internetarchive/openlibrary": "large Python/Django application repairs",
    "navidrome/navidrome": "Go service work with persistence and API behavior",
    "qutebrowser/qutebrowser": "browser/runtime integration around QtWebEngine behavior",
}

REPO_SHAPES_ZH = {
    "ansible/ansible": "自动化和配置管理类改动",
    "flipt-io/flipt": "横跨配置、存储和服务 API 的 Go 产品工程",
    "future-architect/vuls": "边界相对清楚的 Go 漏洞扫描器改动",
    "internetarchive/openlibrary": "大型 Python/Django 应用修复",
    "navidrome/navidrome": "涉及持久化和 API 行为的 Go 服务改动",
    "qutebrowser/qutebrowser": "围绕 QtWebEngine 行为的浏览器/runtime 集成",
}

AGENT_NOTES = {
    "Codex": (
        "The Codex run is a useful reference point for what high-consistency, high-token search looks like in this suite.",
        "Codex 这一组很适合作为参照：它代表了高一致性、高 token 搜索在这个 suite 里的表现形状。",
    ),
    "OpenCode": (
        "The OpenCode run is more sensitive to the underlying model family: the same harness can look sharp or brittle depending on where the model puts its search budget.",
        "OpenCode 这组更能体现底层模型家族差异：同一套 harness 下，模型如何分配搜索预算会直接决定它显得锋利还是脆弱。",
    ),
    "Qwen": (
        "The Qwen CLI run is worth reading as a direct model behavior sample: it has less agent abstraction, so the suite pattern is often easier to attribute to the model.",
        "Qwen CLI 结果更像直接模型行为样本：agent 抽象更少，因此 suite pattern 往往更容易归因到模型本身。",
    ),
    "Qoder": (
        "The Qoder run shows the effect of a more opinionated coding shell around the model; stable wins and misses should be read as model-plus-tooling behavior.",
        "Qoder 结果反映的是更强约束 coding shell 加模型的组合；稳定胜利和失误都更适合读成 model-plus-tooling 行为。",
    ),
    "Claude Code": (
        "The Claude Code run is useful for comparing agent orchestration against OpenCode/Qoder-style shells on the same 151-task surface.",
        "Claude Code 结果适合拿来和 OpenCode、Qoder 这类 shell 在同一组 151 题上对比 agent 编排差异。",
    ),
    "deepseek-tui": (
        "The deepseek-tui row is an agent-shell stress test as much as a model test; low scores here often expose integration friction.",
        "deepseek-tui 这一行既是模型测试，也是 agent shell 压力测试；低分往往会暴露集成摩擦。",
    ),
}


@dataclass
class TaskAttempt:
    task_id: str
    suite: str
    repo: str
    attempt_index: int
    solved: bool
    verifier_verdict: str
    wall_clock_seconds: float | None = None
    input_tokens: int | None = None
    output_tokens: int | None = None
    failure_mode: str | None = None


@dataclass
class InstanceStats:
    task_id: str
    suite: str
    repo: str
    solved_attempts: int = 0
    attempts: int = 0
    verdicts: Counter[str] = field(default_factory=Counter)
    failure_modes: Counter[str] = field(default_factory=Counter)

    @property
    def solved_once(self) -> bool:
        return self.solved_attempts > 0

    @property
    def pass3(self) -> bool:
        return self.attempts >= 3 and self.solved_attempts >= 3


def load_json(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def pct(value: float | int | None) -> str:
    return f"{float(value or 0) * 100:.1f}%"


def as_pct(value: float | int | None) -> str:
    return f"{float(value or 0):.1f}%"


def scalar(value: object) -> str:
    if value is None:
        return '""'
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        return str(round(value, 4) if isinstance(value, float) else value)
    text = str(value).replace("\\", "\\\\").replace('"', '\\"')
    return f'"{text}"'


def block_scalar(value: str, indent: int = 2) -> list[str]:
    pad = " " * indent
    if not value:
        return [f"{pad}|", f"{pad}  "]
    return [f"{pad}|", *[f"{pad}  {line}" for line in value.splitlines()]]


def repo_display(repo: str) -> str:
    return REPO_LABELS.get(repo, repo)


def repo_display_zh(repo: str) -> str:
    return REPO_LABELS_ZH.get(repo, repo)


def suite_label(suite: str, repo: str) -> str:
    match = re.search(r"release-zh-(\d+)-", suite)
    release = match.group(1) if match else suite
    return f"{repo_display(repo)} · release {release}"


def suite_label_zh(suite: str, repo: str) -> str:
    match = re.search(r"release-zh-(\d+)-", suite)
    release = match.group(1) if match else suite
    return f"{repo_display_zh(repo)} · release {release}"


def task_short(task_id: str) -> str:
    return task_id.replace("instance_", "").replace("__", "/")


def clean_title(value: str | None, fallback: str) -> str:
    text = (value or fallback or "").strip()
    text = re.sub(r"^#+\s*", "", text)
    text = re.sub(r"^(Title|标题)\s*[:：]\s*", "", text, flags=re.IGNORECASE)
    text = re.sub(r"^\*\*(.*)\*\*$", r"\1", text)
    text = re.sub(r"^__(.*)__$", r"\1", text)
    text = text.strip("`").strip()
    if text.strip().lower() in {"summary", "摘要", "title", "标题"}:
        text = fallback
    return text.strip() or fallback


def task_maps() -> dict[str, dict[str, Any]]:
    data = load_json(TASK_DATA)
    return {task["id"]: task for task in data.get("tasks", [])}


def model_run_dir(row: dict[str, Any], source_roots: list[Path]) -> Path | None:
    model_id = row["id"]
    candidates: list[Path] = []
    override = MODEL_DIR_OVERRIDES.get(model_id)
    if override:
        candidates.append(override)
    for root in source_roots:
        candidates.append(root / model_id)
        if row.get("model_dir"):
            candidates.append(root / str(row["model_dir"]))
    candidates.extend(
        [
            WORKSPACE_ROOT / "SweResult" / model_id,
            WORKSPACE_ROOT / "SweResult" / str(row.get("model_dir", "")),
            REPO_ROOT / "SweResult" / model_id,
            REPO_ROOT / "SweResult" / str(row.get("model_dir", "")),
        ]
    )
    for candidate in candidates:
        if candidate.exists() and any(candidate.rglob("run_summary.json")):
            return candidate
    return None


def candidate_roots(model_dir: Path) -> list[Path]:
    candidates = [model_dir]
    if (model_dir / "full_run_tree").exists():
        candidates.insert(0, model_dir / "full_run_tree")
    for child in model_dir.iterdir() if model_dir.exists() else []:
        if child.is_dir() and child.name.startswith("full-suite"):
            candidates.insert(0, child)
            for grandchild in child.iterdir():
                if grandchild.is_dir():
                    candidates.insert(0, grandchild)
    seen = set()
    unique = []
    for candidate in candidates:
        resolved = candidate.resolve()
        if resolved in seen:
            continue
        seen.add(resolved)
        unique.append(candidate)
    return unique


def count_summary_files(path: Path) -> int:
    return sum(1 for _ in path.rglob("run_summary.json"))


def best_result_root(model_dir: Path, expected: int = 453) -> Path:
    choices = [(candidate, count_summary_files(candidate)) for candidate in candidate_roots(model_dir)]
    choices = [item for item in choices if item[1] > 0]
    if not choices:
        return model_dir
    choices.sort(key=lambda item: (abs(item[1] - expected), -item[1], len(item[0].parts)))
    return choices[0][0]


def path_context(summary_path: Path, root: Path) -> tuple[int, str, str]:
    rel = summary_path.relative_to(root).parts
    attempt = 0
    suite = ""
    instance = ""
    for i, part in enumerate(rel):
        if part.startswith("attempt-"):
            try:
                attempt = int(part.split("-", 1)[1])
            except ValueError:
                attempt = 0
            if i + 2 < len(rel):
                suite = rel[i + 2]
            if i + 3 < len(rel):
                instance = rel[i + 3]
            break
    return attempt, suite, instance


def collect_attempts(root: Path) -> tuple[list[TaskAttempt], list[TaskAttempt]]:
    original: dict[tuple[str, int], TaskAttempt] = {}
    reverified: dict[tuple[str, int], TaskAttempt] = {}
    for summary_path in root.rglob("run_summary.json"):
        attempt, suite_from_path, instance_from_path = path_context(summary_path, root)
        data = load_json(summary_path)
        for task in data.get("tasks", []):
            meta = task.get("metadata") or {}
            task_id = task.get("task_id") or instance_from_path
            suite = suite_from_path or task.get("suite_id") or ""
            item = TaskAttempt(
                task_id=task_id,
                suite=suite,
                repo=meta.get("repo") or repo_from_suite(suite),
                attempt_index=int(task.get("attempt_index") or attempt or 0),
                solved=bool(task.get("solved")),
                verifier_verdict=str(task.get("verifier_verdict") or ""),
                wall_clock_seconds=task.get("wall_clock_seconds"),
                input_tokens=task.get("total_input_tokens"),
                output_tokens=task.get("total_output_tokens"),
                failure_mode=task.get("failure_mode"),
            )
            key = (item.task_id, item.attempt_index)
            if key not in original or item.solved:
                original[key] = item
    for summary_path in root.rglob("run_summary_reverified.json"):
        attempt, suite_from_path, instance_from_path = path_context(summary_path, root)
        data = load_json(summary_path)
        for task in data.get("tasks", []):
            meta = task.get("metadata") or {}
            task_id = task.get("task_id") or instance_from_path
            suite = suite_from_path or task.get("suite_id") or ""
            item = TaskAttempt(
                task_id=task_id,
                suite=suite,
                repo=meta.get("repo") or repo_from_suite(suite),
                attempt_index=int(task.get("attempt_index") or attempt or 0),
                solved=bool(task.get("solved")),
                verifier_verdict=str(task.get("verifier_verdict") or ""),
                wall_clock_seconds=task.get("wall_clock_seconds"),
                input_tokens=task.get("total_input_tokens"),
                output_tokens=task.get("total_output_tokens"),
                failure_mode=task.get("failure_mode"),
            )
            key = (item.task_id, item.attempt_index)
            if key not in reverified or item.solved:
                reverified[key] = item
    return (
        sorted(original.values(), key=lambda item: (item.suite, item.task_id, item.attempt_index)),
        sorted(reverified.values(), key=lambda item: (item.suite, item.task_id, item.attempt_index)),
    )


def repo_from_suite(suite: str) -> str:
    if not suite:
        return ""
    parts = suite.split("-")
    repo = "-".join(parts[3:])
    if repo == "internetarchive-openlibrary":
        return "internetarchive/openlibrary"
    if repo == "future-architect-vuls":
        return "future-architect/vuls"
    if repo == "flipt-io-flipt":
        return "flipt-io/flipt"
    if repo == "ansible-ansible":
        return "ansible/ansible"
    if repo == "navidrome-navidrome":
        return "navidrome/navidrome"
    if repo == "qutebrowser-qutebrowser":
        return "qutebrowser/qutebrowser"
    return repo.replace("-", "/", 1)


def instance_stats(attempts: list[TaskAttempt]) -> dict[str, InstanceStats]:
    stats: dict[str, InstanceStats] = {}
    for attempt in attempts:
        item = stats.setdefault(
            attempt.task_id,
            InstanceStats(task_id=attempt.task_id, suite=attempt.suite, repo=attempt.repo),
        )
        item.attempts += 1
        item.solved_attempts += int(attempt.solved)
        if attempt.verifier_verdict:
            item.verdicts[attempt.verifier_verdict] += 1
        if attempt.failure_mode:
            item.failure_modes[attempt.failure_mode] += 1
    return stats


def suite_profile(attempts: list[TaskAttempt], max_attempts: int = 3) -> list[dict[str, Any]]:
    by_suite: dict[str, dict[str, Any]] = defaultdict(
        lambda: {
            "repo": "",
            "instances": set(),
            "solved_instances": set(),
            "attempts": 0,
            "solved_attempts": 0,
            "pass3": defaultdict(list),
        }
    )
    for attempt in attempts:
        if not attempt.suite:
            continue
        bucket = by_suite[attempt.suite]
        bucket["repo"] = bucket["repo"] or attempt.repo or repo_from_suite(attempt.suite)
        bucket["instances"].add(attempt.task_id)
        bucket["attempts"] += 1
        bucket["solved_attempts"] += int(attempt.solved)
        bucket["pass3"][attempt.task_id].append(attempt.solved)
        if attempt.solved:
            bucket["solved_instances"].add(attempt.task_id)

    rows = []
    for suite, bucket in by_suite.items():
        total = len(bucket["instances"])
        if not total:
            continue
        solved = len(bucket["solved_instances"])
        pass3 = sum(
            1
            for values in bucket["pass3"].values()
            if len(values) >= max_attempts and all(values[:max_attempts])
        )
        rate = round((solved / total) * 100, 1)
        repo = bucket["repo"] or repo_from_suite(suite)
        rows.append(
            {
                "suite": suite,
                "label": suite_label(suite, repo),
                "label_zh": suite_label_zh(suite, repo),
                "repo": repo,
                "total": total,
                "solved": solved,
                "rate": rate,
                "rate_pct": f"{rate:.1f}%",
                "pass3": pass3,
                "solved_attempts": bucket["solved_attempts"],
                "attempts": bucket["attempts"],
            }
        )
    return sorted(rows, key=lambda item: (-item["rate"], -item["total"], item["suite"]))


def select_suite_profile(suites: list[dict[str, Any]], limit: int = 10) -> list[dict[str, Any]]:
    strong = [suite for suite in suites if suite["solved"] > 0]
    weak = [suite for suite in suites if suite["solved"] < suite["total"]]
    selected: list[dict[str, Any]] = []
    for suite in sorted(strong, key=lambda item: (-item["rate"], -item["total"], item["suite"]))[:6]:
        selected.append(suite)
    for suite in sorted(weak, key=lambda item: (item["rate"], -item["total"], item["suite"]))[:4]:
        if suite not in selected:
            selected.append(suite)
    return selected[:limit]


def top_repos(suites: list[dict[str, Any]], reverse: bool) -> list[str]:
    scores: Counter[str] = Counter()
    for suite in suites:
        if reverse:
            scores[suite["repo"]] += suite["solved"]
        else:
            scores[suite["repo"]] += suite["total"] - suite["solved"]
    return [repo for repo, _ in scores.most_common(2)]


def phrase_join(items: list[str]) -> str:
    if not items:
        return "mixed repository work"
    if len(items) == 1:
        return items[0]
    return f"{items[0]} plus {items[1]}"


def phrase_join_zh(items: list[str]) -> str:
    if not items:
        return "混合代码库任务"
    if len(items) == 1:
        return items[0]
    return f"{items[0]}以及{items[1]}"


def narrative(row: dict[str, Any], suites: list[dict[str, Any]], board_rows: list[dict[str, Any]]) -> dict[str, str]:
    strong_repos = top_repos(suites, reverse=True)
    weak_repos = top_repos(suites, reverse=False)
    strong_shapes = [REPO_SHAPES.get(repo, repo_display(repo)) for repo in strong_repos]
    weak_shapes = [REPO_SHAPES.get(repo, repo_display(repo)) for repo in weak_repos]
    strong_shapes_zh = [REPO_SHAPES_ZH.get(repo, repo_display_zh(repo)) for repo in strong_repos]
    weak_shapes_zh = [REPO_SHAPES_ZH.get(repo, repo_display_zh(repo)) for repo in weak_repos]
    score = float(row.get("final_score") or 0)
    rank = int(row.get("rank") or 0)
    pass3 = int(row.get("pass_3_count") or 0)
    reach = int(row.get("pass_at_3_count") or row.get("solved_unique_tasks") or 0)
    attempt_pct = pct(row.get("attempt_score"))
    stable_gap = reach - pass3
    agent_note_en, agent_note_zh = AGENT_NOTES.get(
        row.get("agent_label"),
        (
            "The row should be read as the behavior of this model inside its specific coding-agent shell.",
            "这一行应读作该模型在特定 coding-agent shell 里的行为。",
        ),
    )

    if rank <= 5:
        tier_en = "a top-tier result"
        tier_zh = "第一梯队结果"
    elif rank <= 15:
        tier_en = "a competitive mid-table result"
        tier_zh = "有竞争力的中游结果"
    else:
        tier_en = "a lower-table result with a few useful bright spots"
        tier_zh = "排名靠后但仍有局部亮点的结果"

    if rank > 15:
        subtitle = (
            f"{tier_en.capitalize()}: {reach}/151 tasks solved at least once, "
            f"{pass3}/151 solved in all three attempts, with the clearest wins around "
            f"{phrase_join(strong_shapes)}."
        )
    else:
        subtitle = (
            f"{tier_en.capitalize()} with {reach}/151 tasks solved at least once and "
            f"{pass3}/151 solved in all three attempts; strongest around "
            f"{phrase_join(strong_shapes)}."
        )
    subtitle_zh = (
        f"这是一个{tier_zh}：151 题中至少一次解出 {reach} 题，三次都解出 {pass3} 题；"
        f"强项主要落在{phrase_join_zh(strong_shapes_zh)}。"
    )
    tldr = [
        (
            f"{row['model_name']} ranks #{rank} with a {score:.2f} Final Score. "
            f"The headline is {reach} reached tasks, but the stability number is {pass3} pass-in-all-three tasks.",
            f"{row['model_name']} 排名 #{rank}，Final Score 为 {score:.2f}。表面信号是 {reach} 道题至少成功一次，稳定性信号是 {pass3} 道题三次都成功。",
        ),
        (
            f"The strongest evidence clusters around {phrase_join(strong_shapes)}.",
            f"最强证据集中在{phrase_join_zh(strong_shapes_zh)}。",
        ),
        (
            f"The failure shape is mostly {phrase_join(weak_shapes)}.",
            f"失败形态主要是{phrase_join_zh(weak_shapes_zh)}。",
        ),
        (
            f"{agent_note_en}",
            f"{agent_note_zh}",
        ),
    ]
    key_stats = [
        {
            "label": "Final Score",
            "label_zh": "最终分",
            "value": f"{score:.2f}",
            "note": f"rank #{rank} of {len(board_rows)}",
            "note_zh": f"{len(board_rows)} 个模型中排名 #{rank}",
        },
        {
            "label": "Stable solves",
            "label_zh": "稳定解题",
            "value": str(pass3),
            "note": "tasks solved in all 3 attempts",
            "note_zh": "三次尝试都解出的任务",
        },
        {
            "label": "Reach gap",
            "label_zh": "覆盖-稳定差",
            "value": f"+{stable_gap}",
            "note": "Pass@3 tasks minus Pass^3 tasks",
            "note_zh": "至少一次成功的题数减三次都成功的题数",
        },
        {
            "label": "Attempt score",
            "label_zh": "单次尝试",
            "value": attempt_pct,
            "note": f"{row.get('solved_attempts', 0)}/{row.get('scoreable_attempts', 453)} solved attempts",
            "note_zh": f"{row.get('scoreable_attempts', 453)} 次尝试中成功 {row.get('solved_attempts', 0)} 次",
        },
    ]
    return {
        "subtitle": subtitle,
        "subtitle_zh": subtitle_zh,
        "tldr": tldr,
        "key_stats": key_stats,
        "strong_shapes": phrase_join(strong_shapes),
        "weak_shapes": phrase_join(weak_shapes),
        "strong_shapes_zh": phrase_join_zh(strong_shapes_zh),
        "weak_shapes_zh": phrase_join_zh(weak_shapes_zh),
        "agent_note_en": agent_note_en,
        "agent_note_zh": agent_note_zh,
    }


def select_cases(stats: dict[str, InstanceStats], tasks: dict[str, dict[str, Any]]) -> list[dict[str, str]]:
    values = list(stats.values())
    stable = [item for item in values if item.pass3]
    one_off = [item for item in values if item.solved_attempts == 1 and item.attempts >= 3]
    misses = [item for item in values if item.solved_attempts == 0 and item.attempts >= 3]
    partial = [item for item in values if 1 < item.solved_attempts < 3 and item.attempts >= 3]

    def sort_key(item: InstanceStats) -> tuple:
        task = tasks.get(item.task_id, {})
        return (item.repo, task.get("title_en") or item.task_id)

    picked: list[tuple[str, str, InstanceStats]] = []
    if stable:
        picked.append(("Stable win", "win", sorted(stable, key=sort_key)[0]))
    if partial:
        picked.append(("Retry-sensitive", "neutral", sorted(partial, key=sort_key)[0]))
    if one_off:
        picked.append(("One-shot reach", "neutral", sorted(one_off, key=sort_key)[0]))
    if misses:
        picked.append(("Hard miss", "risk", sorted(misses, key=sort_key)[0]))
    if len(picked) < 4:
        for item in sorted(values, key=lambda x: (-x.solved_attempts, x.repo, x.task_id)):
            if all(existing.task_id != item.task_id for _, _, existing in picked):
                tone = "win" if item.solved_once else "risk"
                label = "Example win" if item.solved_once else "Example miss"
                picked.append((label, tone, item))
            if len(picked) >= 4:
                break

    label_zh = {
        "Stable win": "稳定胜利",
        "Retry-sensitive": "依赖重试",
        "One-shot reach": "一次命中",
        "Hard miss": "硬失误",
        "Example win": "成功案例",
        "Example miss": "失败案例",
    }
    cases = []
    for label, tone, item in picked[:4]:
        task = tasks.get(item.task_id, {})
        fallback = task_short(item.task_id)
        title_en = clean_title(task.get("title_en"), fallback)
        title_zh = clean_title(task.get("title_zh"), title_en)
        verdict = item.verdicts.most_common(1)[0][0] if item.verdicts else "mixed"
        cases.append(
            {
                "label": label,
                "label_zh": label_zh.get(label, label),
                "tone": tone,
                "title": title_en,
                "title_zh": title_zh,
                "meta": f"{item.repo} · solved {item.solved_attempts}/{item.attempts}",
                "meta_zh": f"{item.repo} · {item.attempts} 次中成功 {item.solved_attempts} 次",
                "note": f"Verifier pattern: {verdict}. Suite: {item.suite}.",
                "note_zh": f"Verifier 信号：{verdict}。Suite：{item.suite}。",
            }
        )
    return cases


def audit_summary(row: dict[str, Any], original: list[TaskAttempt], reverified: list[TaskAttempt]) -> dict[str, Any] | None:
    if not reverified:
        return None
    harness_ok = int(row.get("solved_attempts") or 0) or sum(1 for attempt in original if attempt.solved)
    re_ok = sum(1 for attempt in reverified if attempt.solved)
    if re_ok > harness_ok:
        harness_ok = re_ok
    rejected = max(harness_ok - re_ok, 0)
    accepted_pct = min(100, round((re_ok / harness_ok) * 100)) if harness_ok else 0
    rejected_pct = max(0, 100 - accepted_pct)
    score_before = row.get("initial_final_score") or row.get("final_score")
    score_after = row.get("reverified_final_score")
    if score_after is None:
        score_after = row.get("final_score")
    delta = float(score_after or 0) - float(score_before or 0)
    return {
        "harness_ok": harness_ok,
        "reverified_ok": re_ok,
        "strict_rejected": rejected,
        "accepted_pct": accepted_pct,
        "rejected_pct": rejected_pct,
        "score_before": f"{float(score_before or 0):.2f}",
        "score_after": f"{float(score_after or 0):.2f}",
        "delta": f"{delta:+.2f} points",
        "delta_zh": f"{delta:+.2f} 分",
        "note": "Original harness result vs verifier-backed audit sample",
        "note_zh": "原始 harness 结果 vs verifier-backed 复核样本",
        "summary": (
            f"The available audit keeps {re_ok} of {harness_ok} initial solved attempts. "
            "Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
        ),
        "summary_zh": (
            f"当前可用复核保留了 {harness_ok} 次初始成功中的 {re_ok} 次。"
            "这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
        ),
    }


def related_models(row: dict[str, Any], rows: list[dict[str, Any]]) -> list[dict[str, str]]:
    idx = rows.index(row)
    candidates = []
    if idx > 0:
        candidates.append(("One rank above", "上一名", rows[idx - 1]))
    if idx + 1 < len(rows):
        candidates.append(("One rank below", "下一名", rows[idx + 1]))
    same_provider = next(
        (
            other
            for other in rows
            if other is not row and other.get("provider_label") == row.get("provider_label")
        ),
        None,
    )
    if same_provider:
        candidates.append(("Same provider", "同 provider", same_provider))
    same_agent = next(
        (
            other
            for other in rows
            if other is not row and other.get("agent_label") == row.get("agent_label")
        ),
        None,
    )
    if same_agent and all(item[2] is not same_agent for item in candidates):
        candidates.append(("Same agent", "同 agent", same_agent))
    seen = set()
    cards = []
    for label, label_zh, other in candidates:
        if other["id"] in seen:
            continue
        seen.add(other["id"])
        cards.append(
            {
                "label": label,
                "label_zh": label_zh,
                "name": other["model_name"],
                "note": f"Rank #{other['rank']} · {float(other.get('final_score') or 0):.2f} Final Score",
                "note_zh": f"排名 #{other['rank']} · Final Score {float(other.get('final_score') or 0):.2f}",
                "url": f"/code-agent-bench/models/{other['id']}/",
            }
        )
        if len(cards) >= 3:
            break
    return cards


def write_frontmatter(
    row: dict[str, Any],
    suites: list[dict[str, Any]],
    cases: list[dict[str, str]],
    audit: dict[str, Any] | None,
    related: list[dict[str, str]],
    story: dict[str, Any],
    result_root: Path | None,
) -> str:
    lines = [
        "---",
        "layout: model",
        f"model_id: {row['id']}",
        f"title: {scalar(row['model_name'] + ' on CodeAgentBench')}",
        f"permalink: /code-agent-bench/models/{row['id']}/",
        "analysis_date: 2026-06-18",
        f"rank: {row.get('rank', '')}",
        f"model_name: {scalar(row.get('model_name'))}",
        f"model_raw: {scalar(row.get('model_raw'))}",
        f"provider_label: {scalar(row.get('provider_label'))}",
        f"agent_label: {scalar(row.get('agent_label'))}",
        f"agent_version: {scalar(row.get('agent_version'))}",
        f"subtitle: {scalar(story['subtitle'])}",
        f"subtitle_zh: {scalar(story['subtitle_zh'])}",
        f"final_score: {round(float(row.get('final_score') or 0), 2)}",
    ]
    if row.get("reverified_final_score") is not None:
        lines.append(f"reverified_final_score: {round(float(row.get('reverified_final_score') or 0), 2)}")
    lines.extend(
        [
            f"solved_attempts: {row.get('solved_attempts', 0)}",
            f"solved_unique_tasks: {row.get('solved_unique_tasks', row.get('pass_at_3_count', 0))}",
            f"task_count: {row.get('task_count', 151)}",
            f"scoreable_attempts: {row.get('scoreable_attempts', 453)}",
            f"pass_at_3_rate_pct: {scalar(pct(row.get('pass_at_3_rate')))}",
            f"pass_3_rate_pct: {scalar(pct(row.get('pass_3_rate')))}",
            f"pass_3_count: {row.get('pass_3_count', 0)}",
            f"attempt_score_pct: {scalar(pct(row.get('attempt_score')))}",
            "tldr:",
        ]
    )
    for en, zh in story["tldr"]:
        lines.append(f"  - en: {scalar(en)}")
        lines.append(f"    zh: {scalar(zh)}")
    lines.append("key_stats:")
    for stat in story["key_stats"]:
        lines.extend(
            [
                f"  - label: {scalar(stat['label'])}",
                f"    label_zh: {scalar(stat['label_zh'])}",
                f"    value: {scalar(stat['value'])}",
                f"    note: {scalar(stat['note'])}",
                f"    note_zh: {scalar(stat['note_zh'])}",
            ]
        )
    lines.append("suite_profile:")
    for suite in suites:
        lines.extend(
            [
                f"  - suite: {suite['suite']}",
                f"    label: {scalar(suite['label'])}",
                f"    label_zh: {scalar(suite['label_zh'])}",
                f"    repo: {scalar(suite['repo'])}",
                f"    total: {suite['total']}",
                f"    solved: {suite['solved']}",
                f"    rate: {suite['rate']}",
                f"    rate_pct: {scalar(suite['rate_pct'])}",
                f"    pass3: {suite['pass3']}",
            ]
        )
        if suite.get("note"):
            lines.append(f"    note: {scalar(suite['note'])}")
            lines.append(f"    note_zh: {scalar(suite.get('note_zh', suite['note']))}")
    if audit:
        lines.append("audit:")
        for key in [
            "harness_ok",
            "reverified_ok",
            "strict_rejected",
            "accepted_pct",
            "rejected_pct",
            "score_before",
            "score_after",
            "delta",
            "delta_zh",
            "note",
            "note_zh",
            "summary",
            "summary_zh",
        ]:
            lines.append(f"  {key}: {scalar(audit[key])}")
    lines.append("cases:")
    for case in cases:
        lines.extend(
            [
                f"  - label: {scalar(case['label'])}",
                f"    label_zh: {scalar(case['label_zh'])}",
                f"    tone: {case['tone']}",
                f"    title: {scalar(case['title'])}",
                f"    title_zh: {scalar(case['title_zh'])}",
                f"    meta: {scalar(case['meta'])}",
                f"    meta_zh: {scalar(case['meta_zh'])}",
                f"    note: {scalar(case['note'])}",
                f"    note_zh: {scalar(case['note_zh'])}",
            ]
        )
    lines.append("related_models:")
    for related in related:
        lines.extend(
            [
                f"  - label: {scalar(related['label'])}",
                f"    label_zh: {scalar(related['label_zh'])}",
                f"    name: {scalar(related['name'])}",
                f"    note: {scalar(related['note'])}",
                f"    note_zh: {scalar(related['note_zh'])}",
                f"    url: {related['url']}",
            ]
        )
    lines.append("---")
    return "\n".join(lines)


def body(row: dict[str, Any], story: dict[str, Any], audit: dict[str, Any] | None) -> str:
    name = row["model_name"]
    rank = row.get("rank")
    final_score = float(row.get("final_score") or 0)
    pass3 = row.get("pass_3_count", 0)
    reach = row.get("pass_at_3_count") or row.get("solved_unique_tasks", 0)
    solved_attempts = row.get("solved_attempts", 0)
    attempts = row.get("scoreable_attempts", 453)
    audit_line_en = (
        "The verifier audit block below is included because this row has re-verification data."
        if audit
        else "There is no separate strict re-verification block for this row in the current export, so the article leans on the original harness-backed run."
    )
    audit_line_zh = (
        "下面保留 verifier audit 模块，因为这一行有复核数据。"
        if audit
        else "当前导出中这一行没有单独的严格复核模块，所以本文主要依据原始 harness-backed 运行。"
    )
    en = f"""
<div class="bench-lang-en" markdown="1">

{name} is best read through the gap between reach and repeatability. It reaches {reach}/151 tasks at least once, but {pass3}/151 tasks survive all three attempts. That gap is the personality of the row: the model can find solutions across a fairly wide surface, but the dependable core is narrower than the headline Pass@3 number.

In leaderboard terms, rank #{rank} and a {final_score:.2f} Final Score put it in direct comparison with nearby models, but the more useful question is where the wins come from. In this run the strongest signal is {story['strong_shapes']}; the weak side is {story['weak_shapes']}. {story['agent_note_en']}

{{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}}

The suite chart is the fastest way to read the model. High bars mean the agent repeatedly found the right subsystem and produced patches the verifier accepted at least once. Low bars are not just misses; they are hints about the task shape that made the model overfit a local edit, stop before the second-order consumer, or fail to keep a multi-package change coherent.

{{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}}

The case notes above keep the article grounded in individual SWE-Bench-Pro instances. A stable 3/3 solve means the task is inside the model's dependable operating region. A 1/3 solve means it can reach the idea, but the path is retry-sensitive. A 0/3 miss is more diagnostic: it marks a task shape where this model-agent pairing did not find a verifier-backed patch in three independent attempts.

{audit_line_en}

{{% include model-audit-card.html %}}

For practical use, I would treat {name} as strongest when the task resembles the high-performing suites and weaker when it resembles the low-performing suites. The raw attempt score is {solved_attempts}/{attempts}; that is enough signal to compare it with neighboring rows, but not enough to assume the same behavior on every repository family.

<details class="model-evidence">
  <summary>Supporting suite table</summary>
  <div class="model-evidence-table-wrap">
    <table>
      <thead>
        <tr>
          <th>Suite</th>
          <th>Repo</th>
          <th>Solved</th>
          <th>Pass^3</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {{% for suite in page.suite_profile %}}
        <tr>
          <td><code>{{{{ suite.suite }}}}</code></td>
          <td>{{{{ suite.repo }}}}</td>
          <td>{{{{ suite.solved }}}}/{{{{ suite.total }}}}</td>
          <td>{{{{ suite.pass3 }}}}</td>
          <td>{{{{ suite.rate_pct }}}}</td>
        </tr>
        {{% endfor %}}
      </tbody>
    </table>
  </div>
</details>

</div>
""".strip()
    zh = f"""
<div class="bench-lang-zh" markdown="1">

读 {name}，最有用的是看“覆盖能力”和“重复稳定性”的差距。它在 151 题中至少一次解出 {reach} 题，但三次尝试都解出的只有 {pass3} 题。这个差距就是这一行的性格：模型能在相当宽的任务面上摸到解法，但真正可靠的核心比 Pass@3 的表面数字更窄。

从排行榜数字看，排名 #{rank}、Final Score {final_score:.2f} 让它可以和附近模型直接比较；但更重要的问题是胜利来自哪里。这次运行最强的信号在{story['strong_shapes_zh']}，弱侧则主要是{story['weak_shapes_zh']}。{story['agent_note_zh']}

{{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}}

suite 图是最快的读法。高柱子说明 agent 能反复找到正确子系统，并至少一次产出 verifier 接受的补丁。低柱子不只是失败列表，它们提示了让模型过拟合局部编辑、漏掉第二层消费者，或无法维持跨包改动一致性的任务形状。

{{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}}

上面的案例把文章拉回到具体 SWE-Bench-Pro instance。3/3 稳定通过说明任务落在模型可靠区；1/3 说明它能摸到思路，但路径依赖重试；0/3 则更有诊断价值，表示这个模型-agent 组合三次独立尝试都没有找到 verifier-backed patch。

{audit_line_zh}

{{% include model-audit-card.html %}}

实际使用时，我会把 {name} 用在更接近高分 suite 的任务上；如果任务形态接近低分 suite，就要更谨慎。它的单次尝试成功数是 {solved_attempts}/{attempts}，足够用来和邻近模型比较，但不足以推断它在所有 repository family 上都会保持同样表现。

<details class="model-evidence">
  <summary>支撑这个判断的 suite 表</summary>
  <div class="model-evidence-table-wrap">
    <table>
      <thead>
        <tr>
          <th>Suite</th>
          <th>Repo</th>
          <th>解出</th>
          <th>Pass^3</th>
          <th>通过率</th>
        </tr>
      </thead>
      <tbody>
        {{% for suite in page.suite_profile %}}
        <tr>
          <td><code>{{{{ suite.suite }}}}</code></td>
          <td>{{{{ suite.repo }}}}</td>
          <td>{{{{ suite.solved }}}}/{{{{ suite.total }}}}</td>
          <td>{{{{ suite.pass3 }}}}</td>
          <td>{{{{ suite.rate_pct }}}}</td>
        </tr>
        {{% endfor %}}
      </tbody>
    </table>
  </div>
</details>

</div>
""".strip()
    return en + "\n\n" + zh + "\n"


def annotate_suite_notes(suites: list[dict[str, Any]]) -> None:
    if not suites:
        return
    max_rate = max(suite["rate"] for suite in suites)
    min_rate = min(suite["rate"] for suite in suites)
    for suite in suites:
        repo = suite["repo"]
        if suite["rate"] == max_rate and suite["solved"] > 0:
            suite["note"] = f"Best visible cluster for this row: {suite['solved']}/{suite['total']} tasks reached."
            suite["note_zh"] = f"这一行最明显的强项簇：{suite['total']} 题中解出 {suite['solved']} 题。"
        elif suite["rate"] == min_rate:
            suite["note"] = f"Weak cluster: {REPO_SHAPES.get(repo, repo)} resisted this model-agent pairing."
            suite["note_zh"] = f"弱项簇：{REPO_SHAPES_ZH.get(repo, repo)}对这个模型-agent 组合不友好。"


def generate_page(
    row: dict[str, Any],
    rows: list[dict[str, Any]],
    tasks: dict[str, dict[str, Any]],
    source_roots: list[Path],
) -> tuple[str, Path | None]:
    model_dir = model_run_dir(row, source_roots)
    result_root = best_result_root(model_dir) if model_dir else None
    original: list[TaskAttempt] = []
    reverified: list[TaskAttempt] = []
    if result_root:
        original, reverified = collect_attempts(result_root)
    suites_all = suite_profile(original)
    selected_suites = select_suite_profile(suites_all)
    annotate_suite_notes(selected_suites)
    stats = instance_stats(original)
    story = narrative(row, suites_all or selected_suites, rows)
    cases = select_cases(stats, tasks)
    audit = audit_summary(row, original, reverified)
    related = related_models(row, rows)
    return (
        write_frontmatter(row, selected_suites, cases, audit, related, story, result_root)
        + "\n\n"
        + body(row, story, audit),
        result_root,
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--model-id", help="Generate one model page.")
    parser.add_argument("--source-root", action="append", type=Path, default=[])
    parser.add_argument("--output-dir", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--force", action="store_true", help="Overwrite existing markdown files.")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    data = load_json(BENCH_DATA)
    rows = data["rows"]
    if args.model_id:
        rows = [row for row in rows if row["id"] == args.model_id]
        if not rows:
            raise SystemExit(f"Unknown model id: {args.model_id}")
    all_rows = data["rows"]
    tasks = task_maps()
    source_roots = args.source_root or [WORKSPACE_ROOT / "SweResult", REPO_ROOT / "SweResult"]

    args.output_dir.mkdir(parents=True, exist_ok=True)
    for row in rows:
        target = args.output_dir / f"{row['id']}.md"
        if row["id"] in HAND_WRITTEN_MODEL_IDS and not args.model_id:
            print(f"skip hand-written {target}")
            continue
        if target.exists() and not args.force:
            print(f"skip existing {target}")
            continue
        text, result_root = generate_page(row, all_rows, tasks, source_roots)
        if args.dry_run:
            print(f"would write {target} from {result_root}")
            continue
        target.write_text(text, encoding="utf-8")
        print(f"wrote {target} from {result_root}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
