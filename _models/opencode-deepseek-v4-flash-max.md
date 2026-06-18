---
layout: model
model_id: opencode-deepseek-v4-flash-max
title: "DeepSeek v4 pro (max) on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-deepseek-v4-flash-max/
analysis_date: 2026-06-18
rank: 7
model_name: "DeepSeek v4 pro (max)"
model_raw: "deepseek/deepseek-v4-pro#variant=max"
provider_label: "DeepSeek"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A competitive mid-table result with 48/151 tasks solved at least once and 28/151 solved in all three attempts; strongest around large Python/Django application repairs plus localized Go security-scanner changes."
subtitle_zh: "这是一个有竞争力的中游结果：151 题中至少一次解出 48 题，三次都解出 28 题；强项主要落在大型 Python/Django 应用修复以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 32.95
solved_attempts: 117
solved_unique_tasks: 48
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "31.8%"
pass_3_rate_pct: "18.5%"
pass_3_count: 28
attempt_score_pct: "25.8%"
tldr:
  - en: "DeepSeek v4 pro (max) is best read as moderately stable: rank #7, 48 reached tasks, 28 stable solves."
    zh: "DeepSeek v4 pro (max) 更适合读成中等稳定型：排名 #7，触达 48 题，稳定解出 28 题。"
  - en: "Best suite signal: Open Library · release 013 at 8/10 (80.0%)."
    zh: "最强 suite 信号：Open Library · release 013，8/10（80.0%）。"
  - en: "Weakest visible area: qutebrowser · release 018 at 0/9 (0.0%)."
    zh: "最弱可见区域：qutebrowser 浏览器 · release 018，0/9（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "32.95"
    note: "rank #7 of 32"
    note_zh: "32 个模型中排名 #7"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "28"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+20"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "25.8%"
    note: "117/453 solved attempts"
    note_zh: "453 次尝试中成功 117 次"
suite_profile:
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 8
    rate: 80.0
    rate_pct: "80.0%"
    pass3: 5
    note: "Best visible cluster for this row: 8/10 tasks reached."
    note_zh: "这一行最明显的强项簇：10 题中解出 8 题。"
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
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 3
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 2
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 3
  - suite: release-zh-007-flipt-io-flipt
    label: "Flipt · release 007"
    label_zh: "Flipt feature flag 服务 · release 007"
    repo: "flipt-io/flipt"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 2
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
  - suite: release-zh-006-flipt-io-flipt
    label: "Flipt · release 006"
    label_zh: "Flipt feature flag 服务 · release 006"
    repo: "flipt-io/flipt"
    total: 10
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 1
audit:
  harness_ok: 117
  reverified_ok: 117
  strict_rejected: 0
  accepted_pct: 100
  rejected_pct: 0
  score_before: "32.95"
  score_after: "32.95"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 117 of 117 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 117 次初始成功中的 117 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Add Reading-Log Counts to Solr Work Documents"
    title_zh: "向 Solr Work Documents 添加 Reading-Log Counts"
    meta: "internetarchive/openlibrary · solved 3/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-014-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-014-internetarchive-openlibrary。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Avoid double calculation of loops and delegate_to in TaskExecutor"
    title_zh: "避免在 TaskExecutor 中重复计算 loops 和 delegate_to"
    meta: "ansible/ansible · solved 2/3"
    meta_zh: "ansible/ansible · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-001-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-001-ansible-ansible。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "OFREP Bulk Evaluation Fails When flags Context Key Is Missing"
    title_zh: "当 flags 上下文键缺失时，OFREP 批量评估失败"
    meta: "flipt-io/flipt · solved 1/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 1 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-005-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-005-flipt-io-flipt。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Reversible Password Encryption in Navidrome"
    title_zh: "Navidrome 中的可逆密码加密"
    meta: "navidrome/navidrome · solved 0/3"
    meta_zh: "navidrome/navidrome · 3 次中成功 0 次"
    note: "Verifier pattern: blocked-suspicious-patch. Suite: release-zh-017-navidrome-navidrome."
    note_zh: "Verifier 信号：blocked-suspicious-patch。Suite：release-zh-017-navidrome-navidrome。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "MiniMax M3"
    note: "Rank #6 · 33.91 Final Score"
    note_zh: "排名 #6 · Final Score 33.91"
    url: /code-agent-bench/models/opencode-minimax-m3/
  - label: "One rank below"
    label_zh: "下一名"
    name: "GLM 5.1"
    note: "Rank #8 · 31.74 Final Score"
    note_zh: "排名 #8 · Final Score 31.74"
    url: /code-agent-bench/models/opencode-glm51/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "DeepSeek v4 flash (max)"
    note: "Rank #15 · 28.99 Final Score"
    note_zh: "排名 #15 · Final Score 28.99"
    url: /code-agent-bench/models/opencode-deepseek-v4-pro-max/
---

<div class="bench-lang-en" markdown="1">

DeepSeek v4 pro (max) is a moderately stable row around the #7 slot. The useful reading is not just the 32.95 score, but the split between 48 reached tasks and 28 stable solves.

The closest family reference is DeepSeek v4 flash (max) at rank #15. Compared with that row, this one is 3.96 points ahead, with 4 more reached tasks and 8 more stable solves.

Most of the positive signal concentrates in Open Library · release 013 at 8/10 (80.0%). The opposing read is qutebrowser · release 018 at 0/9 (0.0%), which keeps the row from looking like a generalist. Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

For this row, the suite bars are a contrast tool. The distance between Open Library · release 013 at 8/10 (80.0%) and qutebrowser · release 018 at 0/9 (0.0%) is the model's practical boundary.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The examples keep the middle-band story honest: `Add Reading-Log Counts to Solr Work Documents` is the upside, `Reversible Password Encryption in Navidrome` is the failure surface, and the page should be read between those two poles.

The verifier audit keeps 117/117 solved attempts for DeepSeek v4 pro (max), so the interesting question is not score inflation; it is where the model repeatedly finds the same kind of patch.

{% include model-audit-card.html %}

In practice, read it through the gap between Open Library · release 013 at 8/10 (80.0%) and qutebrowser · release 018 at 0/9 (0.0%). That gap is more actionable than the rank because it says which repo shape gets coherent patches. The 117/453 attempt score is the backdrop; the article above is about which parts of that score are repeatable enough to matter.

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

DeepSeek v4 pro (max) 是一个排名 #7 附近的中等稳定型结果。它的重点不只是 32.95 分，而是 48 道触达题和 28 道稳定题之间的差距。

最接近的同系参照是排名 #15 的 DeepSeek v4 flash (max)。和它相比，这一行最终分高 3.96 分，触达题多 4 个，稳定题多 8 个。

正面信号大多集中在Open Library · release 013，8/10（80.0%）。反向读法是qutebrowser 浏览器 · release 018，0/9（0.0%），它让这一行看起来不像通用型。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

对这一行来说，suite 柱更像对比工具。Open Library · release 013，8/10（80.0%）和qutebrowser 浏览器 · release 018，0/9（0.0%）之间的距离，就是模型的实用边界。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

这些案例让中段模型画像更具体：`向 Solr Work Documents 添加 Reading-Log Counts` 是上限，`Navidrome 中的可逆密码加密` 是失败面，这页应该在两者之间读。

DeepSeek v4 pro (max) 的复核保留了 117 次成功中的 117 次，所以重点不是分数膨胀，而是模型在哪些地方能反复找到同类补丁。

{% include model-audit-card.html %}

实际选择时，更应该通过Open Library · release 013，8/10（80.0%）和qutebrowser 浏览器 · release 018，0/9（0.0%）之间的落差来读它。这个落差比分数排名更可操作，因为它说明哪类代码库更容易得到连贯补丁。117/453 的单次尝试成功数只是背景；上面的文章重点是哪些部分足够可重复、值得当成能力看。

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
