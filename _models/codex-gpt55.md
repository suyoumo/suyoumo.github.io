---
layout: model
model_id: codex-gpt55
title: "GPT 5.5 (xhigh) on CodeAgentBench"
permalink: /code-agent-bench/models/codex-gpt55/
analysis_date: 2026-06-18
rank: 2
model_name: "GPT 5.5 (xhigh)"
model_raw: "gpt-5.5#effort=xhigh"
provider_label: "OpenAI"
agent_label: "Codex"
agent_version: "codex-cli 0.135.0"
subtitle: "A top-tier result with 51/151 tasks solved at least once and 40/151 solved in all three attempts; strongest around large Python/Django application repairs plus localized Go security-scanner changes."
subtitle_zh: "这是一个第一梯队结果：151 题中至少一次解出 51 题，三次都解出 40 题；强项主要落在大型 Python/Django 应用修复以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 36.88
solved_attempts: 136
solved_unique_tasks: 51
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "33.8%"
pass_3_rate_pct: "26.5%"
pass_3_count: 40
attempt_score_pct: "30.0%"
tldr:
  - en: "GPT 5.5 (xhigh) is best read as repeatability-first: rank #2, 51 reached tasks, 40 stable solves."
    zh: "GPT 5.5 (xhigh) 更适合读成稳定性优先：排名 #2，触达 51 题，稳定解出 40 题。"
  - en: "Best suite signal: Open Library · release 013 at 9/10 (90.0%)."
    zh: "最强 suite 信号：Open Library · release 013，9/10（90.0%）。"
  - en: "Weakest visible area: Flipt · release 008 at 0/10 (0.0%)."
    zh: "最弱可见区域：Flipt feature flag 服务 · release 008，0/10（0.0%）。"
  - en: "The Codex shell is doing what it should here: fewer lucky one-offs, more repeated verifier-backed patches."
    zh: "Codex shell 在这里体现出的不是偶然命中，而是更多可重复的 verifier-backed patch。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "36.88"
    note: "rank #2 of 32"
    note_zh: "32 个模型中排名 #2"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "40"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+11"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "30.0%"
    note: "136/453 solved attempts"
    note_zh: "453 次尝试中成功 136 次"
suite_profile:
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 9
    rate: 90.0
    rate_pct: "90.0%"
    pass3: 8
    note: "Best visible cluster for this row: 9/10 tasks reached."
    note_zh: "这一行最明显的强项簇：10 题中解出 9 题。"
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    label_zh: "vuls 漏洞扫描器 · release 012"
    repo: "future-architect/vuls"
    total: 4
    solved: 3
    rate: 75.0
    rate_pct: "75.0%"
    pass3: 3
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 7
    rate: 70.0
    rate_pct: "70.0%"
    pass3: 4
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 6
  - suite: release-zh-001-ansible-ansible
    label: "Ansible · release 001"
    label_zh: "Ansible 自动化 · release 001"
    repo: "ansible/ansible"
    total: 10
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 3
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 3
  - suite: release-zh-008-flipt-io-flipt
    label: "Flipt · release 008"
    label_zh: "Flipt feature flag 服务 · release 008"
    repo: "flipt-io/flipt"
    total: 10
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: Go product plumbing across configuration, storage, and service APIs resisted this model-agent pairing."
    note_zh: "弱项簇：横跨配置、存储和服务 API 的 Go 产品工程对这个模型-agent 组合不友好。"
  - suite: release-zh-018-qutebrowser-qutebrowser
    label: "qutebrowser · release 018"
    label_zh: "qutebrowser 浏览器 · release 018"
    repo: "qutebrowser/qutebrowser"
    total: 9
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: browser/runtime integration around QtWebEngine behavior resisted this model-agent pairing."
    note_zh: "弱项簇：围绕 QtWebEngine 行为的浏览器/runtime 集成对这个模型-agent 组合不友好。"
  - suite: release-zh-009-flipt-io-flipt
    label: "Flipt · release 009"
    label_zh: "Flipt feature flag 服务 · release 009"
    repo: "flipt-io/flipt"
    total: 5
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: Go product plumbing across configuration, storage, and service APIs resisted this model-agent pairing."
    note_zh: "弱项簇：横跨配置、存储和服务 API 的 Go 产品工程对这个模型-agent 组合不友好。"
  - suite: release-zh-017-navidrome-navidrome
    label: "Navidrome · release 017"
    label_zh: "Navidrome 音乐服务 · release 017"
    repo: "navidrome/navidrome"
    total: 5
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: Go service work with persistence and API behavior resisted this model-agent pairing."
    note_zh: "弱项簇：涉及持久化和 API 行为的 Go 服务改动对这个模型-agent 组合不友好。"
audit:
  harness_ok: 136
  reverified_ok: 136
  strict_rejected: 0
  accepted_pct: 100
  rejected_pct: 0
  score_before: "36.88"
  score_after: "36.88"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 136 of 136 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 136 次初始成功中的 136 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Inconsistent Edition Matching and Record Expansion"
    title_zh: "版本匹配不一致与记录扩展"
    meta: "internetarchive/openlibrary · solved 3/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-013-internetarchive-openlibrary。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Forked output from ‘Display.display’ is unreliable and exposes shutdown deadlock risk"
    title_zh: "\"# 从 fork 进程调用 Display.display 的输出不可靠，并暴露 shutdown 死锁风险"
    meta: "ansible/ansible · solved 2/3"
    meta_zh: "ansible/ansible · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-003-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-003-ansible-ansible。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Issue: Display an error for missing arch in OVAL DB for Oracle and Amazon Linux"
    title_zh: "问题：为 Oracle 与 Amazon Linux 的 OVAL DB 中缺失的 arch 显示错误"
    meta: "future-architect/vuls · solved 1/3"
    meta_zh: "future-architect/vuls · 3 次中成功 1 次"
    note: "Verifier pattern: apply-failed. Suite: release-zh-010-future-architect-vuls."
    note_zh: "Verifier 信号：apply-failed。Suite：release-zh-010-future-architect-vuls。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "PowerShell CLIXML output displays escaped sequences instead of actual characters"
    title_zh: "PowerShell CLIXML output 显示 escaped sequences，而不是实际字符"
    meta: "ansible/ansible · solved 0/3"
    meta_zh: "ansible/ansible · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-003-ansible-ansible."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-003-ansible-ansible。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "GLM 5.2"
    note: "Rank #1 · 37.59 Final Score"
    note_zh: "排名 #1 · Final Score 37.59"
    url: /code-agent-bench/models/opencode-glm52/
  - label: "One rank below"
    label_zh: "下一名"
    name: "GPT 5.4 (xhigh)"
    note: "Rank #3 · 36.79 Final Score"
    note_zh: "排名 #3 · Final Score 36.79"
    url: /code-agent-bench/models/codex-gpt54/
---

<div class="bench-lang-en" markdown="1">

GPT 5.5 (xhigh) stands out for repeatability. The reach number is 51/151, and 40 tasks survive all three attempts, giving it a 78% repeatability ratio among reached tasks.

The closest family reference is GPT 5.4 (xhigh) at rank #3. Compared with that row, this one is 0.09 points ahead, with 4 fewer reached tasks and 5 more stable solves.

Most of the positive signal concentrates in Open Library · release 013 at 9/10 (90.0%). The opposing read is Flipt · release 008 at 0/10 (0.0%), which keeps the row from looking like a generalist. The Codex shell is doing what it should here: fewer lucky one-offs, more repeated verifier-backed patches.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The chart matters here because it separates repeatable skill from accidental reach. Open Library · release 013 at 9/10 (90.0%) is not just a high bar; it is the area where this row most often turns a found fix into a repeatable one.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The examples reinforce the repeatability story: `Inconsistent Edition Matching and Record Expansion` is internetarchive/openlibrary · solved 3/3, while `Forked output from ‘Display.display’ is unreliable and exposes shutdown deadlock risk` shows the kind of task that still needs retry luck.

The verifier audit keeps 136/136 solved attempts for GPT 5.5 (xhigh), so the interesting question is not score inflation; it is where the model repeatedly finds the same kind of patch.

{% include model-audit-card.html %}

If you are choosing it for production-style agent work, the argument is consistency: start with tasks that resemble Open Library · release 013 at 9/10 (90.0%) and expect fewer lucky-only wins. The caution is Flipt · release 008 at 0/10 (0.0%), where even this stable profile does not transfer cleanly. Across 453 attempts, the important number is not only 136 successes; it is that 40 tasks repeat cleanly.

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
        {% for suite in page.suite_profile %}
        <tr>
          <td><code>{{ suite.suite }}</code></td>
          <td>{{ suite.repo }}</td>
          <td>{{ suite.solved }}/{{ suite.total }}</td>
          <td>{{ suite.pass3 }}</td>
          <td>{{ suite.rate_pct }}</td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
</details>

</div>

<div class="bench-lang-zh" markdown="1">

GPT 5.5 (xhigh) 最突出的地方是重复稳定性。它至少一次解出 51/151 题，其中 40 题三次都过，在已触达题目里的稳定比例约为 78%。

最接近的同系参照是排名 #3 的 GPT 5.4 (xhigh)。和它相比，这一行最终分高 0.09 分，触达题少 4 个，稳定题多 5 个。

正面信号大多集中在Open Library · release 013，9/10（90.0%）。反向读法是Flipt feature flag 服务 · release 008，0/10（0.0%），它让这一行看起来不像通用型。Codex shell 在这里体现出的不是偶然命中，而是更多可重复的 verifier-backed patch。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这里看图的重点不是谁最高，而是区分“稳定能力”和“偶然触达”。Open Library · release 013，9/10（90.0%） 不只是高柱子，它也是这一行最容易把解法变成稳定补丁的区域。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

案例进一步说明了稳定性：`版本匹配不一致与记录扩展` 是internetarchive/openlibrary · 3 次中成功 3 次，而 `"# 从 fork 进程调用 Display.display 的输出不可靠，并暴露 shutdown 死锁风险` 则代表仍然需要重试运气的任务。

GPT 5.5 (xhigh) 的复核保留了 136 次成功中的 136 次，所以重点不是分数膨胀，而是模型在哪些地方能反复找到同类补丁。

{% include model-audit-card.html %}

如果把它用于偏生产的 agent 工作，核心理由是稳定性：优先放在接近Open Library · release 013，9/10（90.0%）的任务上，不要只期待偶然命中。需要避开的参照是Flipt feature flag 服务 · release 008，0/10（0.0%），这里即使稳定型画像也不能顺利迁移。在 453 次尝试里，重要的不只是 136 次成功，而是有 40 道题可以稳定复现。

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
        {% for suite in page.suite_profile %}
        <tr>
          <td><code>{{ suite.suite }}</code></td>
          <td>{{ suite.repo }}</td>
          <td>{{ suite.solved }}/{{ suite.total }}</td>
          <td>{{ suite.pass3 }}</td>
          <td>{{ suite.rate_pct }}</td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
</details>

</div>
