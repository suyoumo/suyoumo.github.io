---
layout: model
model_id: codex-gpt54
title: "GPT 5.4 (xhigh) on CodeAgentBench"
permalink: /code-agent-bench/models/codex-gpt54/
analysis_date: 2026-06-18
rank: 3
model_name: "GPT 5.4 (xhigh)"
model_raw: "gpt-5.4#effort=xhigh"
provider_label: "OpenAI"
agent_label: "Codex"
agent_version: "codex-cli 0.135.0"
subtitle: "A top-tier result with 55/151 tasks solved at least once and 35/151 solved in all three attempts; strongest around large Python/Django application repairs plus localized Go security-scanner changes."
subtitle_zh: "这是一个第一梯队结果：151 题中至少一次解出 55 题，三次都解出 35 题；强项主要落在大型 Python/Django 应用修复以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 36.79
solved_attempts: 136
solved_unique_tasks: 55
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "36.4%"
pass_3_rate_pct: "23.2%"
pass_3_count: 35
attempt_score_pct: "30.0%"
tldr:
  - en: "GPT 5.4 (xhigh) is best read as front-runner with a balanced profile: rank #3, 55 reached tasks, 35 stable solves."
    zh: "GPT 5.4 (xhigh) 更适合读成第一梯队里的均衡型：排名 #3，触达 55 题，稳定解出 35 题。"
  - en: "Best suite signal: Open Library · release 013 at 9/10 (90.0%)."
    zh: "最强 suite 信号：Open Library · release 013，9/10（90.0%）。"
  - en: "Weakest visible area: qutebrowser · release 018 at 0/9 (0.0%)."
    zh: "最弱可见区域：qutebrowser 浏览器 · release 018，0/9（0.0%）。"
  - en: "This Codex row searches broadly, but the lower repeatability says several wins still depend on one successful trajectory."
    zh: "这一行 Codex 搜索面很宽，但较低的重复稳定性说明不少胜利仍依赖某一次成功轨迹。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "36.79"
    note: "rank #3 of 32"
    note_zh: "32 个模型中排名 #3"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "35"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+20"
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
    pass3: 2
  - suite: release-zh-011-future-architect-vuls
    label: "vuls · release 011"
    label_zh: "vuls 漏洞扫描器 · release 011"
    repo: "future-architect/vuls"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 2
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 5
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 5
  - suite: release-zh-001-ansible-ansible
    label: "Ansible · release 001"
    label_zh: "Ansible 自动化 · release 001"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 1
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
  - suite: release-zh-005-flipt-io-flipt
    label: "Flipt · release 005"
    label_zh: "Flipt feature flag 服务 · release 005"
    repo: "flipt-io/flipt"
    total: 10
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 0
  - suite: release-zh-008-flipt-io-flipt
    label: "Flipt · release 008"
    label_zh: "Flipt feature flag 服务 · release 008"
    repo: "flipt-io/flipt"
    total: 10
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 0
audit:
  harness_ok: 136
  reverified_ok: 136
  strict_rejected: 0
  accepted_pct: 100
  rejected_pct: 0
  score_before: "36.79"
  score_after: "36.79"
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
    title: "Refactor build_marc() into expand_record() and relocate to catalog/utils for clarity and reuse"
    title_zh: "将 build_marc() 重构为 expand_record() 并迁移至 catalog/utils 以提升清晰度与复用性"
    meta: "internetarchive/openlibrary · solved 3/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-014-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-014-internetarchive-openlibrary。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Rollout audit logs lack necessary fields for segment information"
    title_zh: "Rollout 审计日志缺少表示 segment 信息所需的字段"
    meta: "flipt-io/flipt · solved 2/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-009-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-009-flipt-io-flipt。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Add per-package modularitylabel field for Red Hat–based systems"
    title_zh: "为 Red Hat-based systems 添加 per-package modularitylabel field"
    meta: "future-architect/vuls · solved 1/3"
    meta_zh: "future-architect/vuls · 3 次中成功 1 次"
    note: "Verifier pattern: apply-failed. Suite: release-zh-011-future-architect-vuls."
    note_zh: "Verifier 信号：apply-failed。Suite：release-zh-011-future-architect-vuls。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Incomplete and Inconsistent Extraction of Alternate Script (880) Fields and Related MARC Data"
    title_zh: "交替书写（880）字段及相关 MARC 数据提取不完整且不一致"
    meta: "internetarchive/openlibrary · solved 0/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-014-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-014-internetarchive-openlibrary。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "GPT 5.5 (xhigh)"
    note: "Rank #2 · 36.88 Final Score"
    note_zh: "排名 #2 · Final Score 36.88"
    url: /code-agent-bench/models/codex-gpt55/
  - label: "One rank below"
    label_zh: "下一名"
    name: "GPT 5.3 codex (xhigh)"
    note: "Rank #4 · 36.09 Final Score"
    note_zh: "排名 #4 · Final Score 36.09"
    url: /code-agent-bench/models/codex-gpt53-xhigh/
---

<div class="bench-lang-en" markdown="1">

GPT 5.4 (xhigh) belongs in the leading cluster because it keeps both breadth and stability in play: 55 reached tasks, 35 stable solves, and a 36.79 Final Score.

The closest family reference is GPT 5.5 (xhigh) at rank #2. Compared with that row, this one is 0.09 points behind, with 4 more reached tasks and 5 fewer stable solves.

The profile has one obvious anchor: Open Library · release 013 at 9/10 (90.0%). That anchor matters because qutebrowser · release 018 at 0/9 (0.0%) shows the score does not generalize evenly across the benchmark. This Codex row searches broadly, but the lower repeatability says several wins still depend on one successful trajectory.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

At the front of the board, the chart is a fingerprint. The score is close to peers, so the repo distribution says more than the rank delta.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The cases are useful because top rows can look similar in aggregate. `Refactor build_marc() into expand_record() and relocate to catalog/utils for clarity and reuse` shows the reliable core; `Rollout audit logs lack necessary fields for segment information` shows the remaining edge of variance.

The verifier audit keeps 136/136 solved attempts for GPT 5.4 (xhigh), so the interesting question is not score inflation; it is where the model repeatedly finds the same kind of patch.

{% include model-audit-card.html %}

In practice, read it through the gap between Open Library · release 013 at 9/10 (90.0%) and qutebrowser · release 018 at 0/9 (0.0%). That gap is more actionable than the rank because it says which repo shape gets coherent patches. The 136/453 attempt score is the backdrop; the article above is about which parts of that score are repeatable enough to matter.

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

GPT 5.4 (xhigh) 能进入第一梯队，是因为覆盖和稳定性都没有掉队：至少一次解出 55 题，稳定解出 35 题，Final Score 36.79。

最接近的同系参照是排名 #2 的 GPT 5.5 (xhigh)。和它相比，这一行最终分低 0.09 分，触达题多 4 个，稳定题少 5 个。

这组画像有一个明显锚点：Open Library · release 013，9/10（90.0%）。这个锚点重要，是因为qutebrowser 浏览器 · release 018，0/9（0.0%）说明分数没有均匀迁移到整套 benchmark。这一行 Codex 搜索面很宽，但较低的重复稳定性说明不少胜利仍依赖某一次成功轨迹。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

在榜单前排，这张图更像指纹。分数和相邻模型很接近，因此代码库分布比分差更说明问题。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

前排模型在总分上容易看起来相似，所以案例很关键：`将 build_marc() 重构为 expand_record() 并迁移至 catalog/utils 以提升清晰度与复用性` 展示可靠核心，`Rollout 审计日志缺少表示 segment 信息所需的字段` 展示剩余波动边界。

GPT 5.4 (xhigh) 的复核保留了 136 次成功中的 136 次，所以重点不是分数膨胀，而是模型在哪些地方能反复找到同类补丁。

{% include model-audit-card.html %}

实际选择时，更应该通过Open Library · release 013，9/10（90.0%）和qutebrowser 浏览器 · release 018，0/9（0.0%）之间的落差来读它。这个落差比分数排名更可操作，因为它说明哪类代码库更容易得到连贯补丁。136/453 的单次尝试成功数只是背景；上面的文章重点是哪些部分足够可重复、值得当成能力看。

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
