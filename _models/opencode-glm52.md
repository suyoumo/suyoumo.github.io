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
strengths_label: Suites where GLM 5.2 excels (top 6 by pass rate)
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
weaknesses_label: Suites where GLM 5.2 struggles (bottom 6 by pass rate)
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
verifier_audit: Initial/original score (37.59) is computed from 140 harness-ok attempts across 151 tasks. After running a stricter reverifier pass, only 101 attempts survive as verifier-backed, dropping Final Score to 32.87 (-4.72, -39 attempts rejected). This 28% strict-reject rate is in line with other top agents and reflects the gap between agent-self-reported success and harness-backed verdicts.
summary: GLM 5.2 (Zhipu) currently sits at rank 1 on CodeAgentBench with a Final Score of 37.59, narrowly ahead of GPT 5.5 (xhigh) at 36.88. Its strengths are concentrated in security/vulnerability tooling (vuls), large Python codebases with rich test surfaces (internetarchive/openlibrary), and configuration/automation repos (ansible/ansible). The model is essentially blind on Go-based feature-flag and browser projects (qutebrowser 0/9, navidrome 0/5, flipt 1-2/10 across all suites), suggesting the planning and long-horizon editing for cross-language refactors is where GLM 5.2 still loses ground. Use GLM 5.2 when the target repo is Python/ops-heavy; reach for GPT 5.x or codex for Go, browser, and feature-flag heavy workloads.
---

GLM 5.2 (Zhipu's coding-plan flagship, served via `zai-coding-plan/glm-5.2`) achieves **rank 1** on the CodeAgentBench leaderboard with a **Final Score of 37.59** under the standard initial/original scoring rule. It solves 140/453 scoreable attempts (57 unique tasks, 36 of those solved in all three tries), giving a pass@3 rate of **37.7%** — about 0.7 points above GPT 5.5 (xhigh).

<hr>