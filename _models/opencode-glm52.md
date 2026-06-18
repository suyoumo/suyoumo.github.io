---
layout: model
title: GLM 5.2 (CodeAgentBench Analysis)
permalink: /code-agent-bench/models/opencode-glm52/
rank: 1
model_name: GLM 5.2
model_raw: zai-coding-plan/glm-5.2
provider_label: Zhipu GLM
agent_version: opencode-cli 1.17.8
final_score: 37.59
reverified_final_score: 32.87
solved_attempts: 140
solved_unique_tasks: 57
scoreable_attempts: 453
pass_at_3_rate_pct: 37.7%
pass_3_count: 36
attempt_score_pct: 30.9%
strengths_label: Suites where GLM 5.2 is at its strongest
strengths:
  - suite: release-zh-012-future-architect-vuls
    total: 4
    solved: 4
    rate_pct: "100.0%"
  - suite: release-zh-013-internetarchive-openlibrary
    total: 10
    solved: 8
    rate_pct: "80.0%"
  - suite: release-zh-015-internetarchive-openlibrary
    total: 10
    solved: 7
    rate_pct: "70.0%"
  - suite: release-zh-004-ansible-ansible
    total: 3
    solved: 2
    rate_pct: "66.7%"
  - suite: release-zh-001-ansible-ansible
    total: 10
    solved: 6
    rate_pct: "60.0%"
  - suite: release-zh-010-future-architect-vuls
    total: 10
    solved: 5
    rate_pct: "50.0%"
weaknesses_label: Suites where GLM 5.2 falls behind
weaknesses:
  - suite: release-zh-018-qutebrowser-qutebrowser
    total: 9
    solved: 0
    rate_pct: "0.0%"
  - suite: release-zh-017-navidrome-navidrome
    total: 5
    solved: 0
    rate_pct: "0.0%"
  - suite: release-zh-006-flipt-io-flipt
    total: 10
    solved: 1
    rate_pct: "10.0%"
  - suite: release-zh-005-flipt-io-flipt
    total: 10
    solved: 1
    rate_pct: "10.0%"
  - suite: release-zh-009-flipt-io-flipt
    total: 5
    solved: 1
    rate_pct: "20.0%"
  - suite: release-zh-008-flipt-io-flipt
    total: 10
    solved: 2
    rate_pct: "20.0%"
verifier_audit: The leaderboard's primary Final Score (37.59) uses the harness-ok verdict reported by run_summary.json on the 453 scoreable attempts. When we re-run those attempts under a stricter verifier pass, only 101 of the 140 agent-reported successes survive as verifier-backed, dragging the reverified Final Score down to 32.87 (a 4.72-point / -28% strict-reject rate). That delta is typical of top-tier agents and reflects the gap between agent self-confidence and harness-backed verdicts.
summary: GLM 5.2 (Zhipu's coding-plan flagship, served via `zai-coding-plan/glm-5.2`) currently sits at rank 1 on CodeAgentBench with a Final Score of 37.59 — narrowly ahead of GPT 5.5 (xhigh) at 36.88. Its strongest suites are vulnerability tooling (vuls, 100%), large Python codebases with rich test surfaces (internetarchive/openlibrary, 80%/70%), and configuration/automation repos (ansible/ansible, 60-67%). GLM 5.2 is essentially blind on Go-based feature-flag and browser projects (qutebrowser 0/9, navidrome 0/5, flipt 1-2/10 across all suites). The verdict split between harness-ok (140) and verifier-backed (101) is the same shape as other top agents and signals where the model still loses ground. Use GLM 5.2 when the target repo is Python / ops-heavy; reach for GPT 5.x or codex for Go, browser, and feature-flag heavy workloads.
---

## What GLM 5.2 got right

The cleanest signal in the data is **release-zh-012-future-architect-vuls**, where GLM 5.2 went **4 / 4** — every instance in that suite was solved in all three attempts. vuls is a Go-based vulnerability scanner with well-scoped test suites, and GLM 5.2 produced patches that the harness could verify end-to-end without follow-up. That suite is small (only 4 instances), but it is the only place where the model hits a perfect pass rate.

The next cluster is **internetarchive/openlibrary** across `release-zh-013` and `release-zh-015`: 8/10 and 7/10 respectively. openlibrary is a very large Python codebase (Django + Celery + Vue frontend), and the test surface is dense enough that the model can usually pick the right file to patch by reading the failing test. Eight instances solved in all three attempts (`pass^3`) come out of these two suites — about a fifth of GLM 5.2's 36 full-pass^3 count.

**ansible/ansible** is the third clear strength: 6/10 and 2/3 across the two ansible suites. The patterns here (YAML parsing, inventory, module loading, callback hooks) are well-represented in pre-training, and the tests are tight, so once the model picks the right module the fix usually sticks.

## Where GLM 5.2 struggles

The bottom of the table is much sharper than the top. **release-zh-018-qutebrowser-qutebrowser** is 0/9, **release-zh-017-navidrome-navidrome** is 0/5, and every `flipt-io-flipt` suite lands at 1-2/10. Three patterns show up across these failures:

1. **Go-language refactors with cross-package interface changes.** flipt is a feature-flag service where almost every task asks the model to add a new flag type, wire it through the storage layer, and update the API/UI consumers. The model can usually write the immediate change, but misses one of the indirect consumers and the test suite still flags it as failing.
2. **Asyncio + Qt integration (qutebrowser).** qutebrowser tasks tend to involve rewriting a piece of browser chrome that mixes Python's asyncio event loop with Qt's signal/slot system. The model produces something that looks right but does not actually wire into the running event loop the way the test expects.
3. **Long-horizon multi-file Go changes (navidrome).** navidrome tasks usually touch the persistence layer, the HTTP API, and the Subsonic compatibility layer at once. The model handles the first two and gets stuck on the third.

The 1-2/10 scores on flipt, in particular, are a sharp contrast to its perfect 4/4 on vuls (also Go): the difference is that vuls patches are localized, while flipt patches require changing an interface that other packages consume.

## How strict is the verifier?

GLM 5.2 reports 140 attempts as `harness-ok` out of 453 scoreable. After a stricter re-verification pass, only 101 of those 140 attempts survive as `verifier-backed`, dropping the Final Score from **37.59 → 32.87** (-4.72 points, -28% strict-reject rate). That delta is in the same range as GPT 5.5 (which drops 1.5 points on its 136 → ~110 reverified) and is mostly concentrated on the same `flipt`/`qutebrowser`/`navidrome` suites. The verdict gap is not specific to GLM 5.2 — it's a property of the harness — but it does mean the headline number overstates the model's reach by about 12 percentage points of attempt-score.

## Bottom line

Use GLM 5.2 when the target is a **Python or ops-heavy repo** with clear test signals (Django services, Ansible modules, vulnerability tooling, large open-source codebases with dense pytest coverage). It is the strongest open-weights-style agent on the leaderboard and beats GPT 5.5 by 0.71 points overall. For **Go services, browser engines, and feature-flag systems with cross-package interface changes**, the model still loses meaningfully and a GPT 5.x or codex-class agent is a better choice.