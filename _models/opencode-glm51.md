---
layout: model
model_id: opencode-glm51
title: "GLM 5.1 on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-glm51/
analysis_date: 2026-06-18
rank: 8
model_name: "GLM 5.1"
model_raw: "zai-coding-plan/glm-5.1"
provider_label: "Zhipu GLM"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A competitive mid-table result with 45/151 tasks solved at least once and 27/151 solved in all three attempts; strongest around large Python/Django application repairs plus localized Go security-scanner changes."
subtitle_zh: "这是一个有竞争力的中游结果：151 题中至少一次解出 45 题，三次都解出 27 题；强项主要落在大型 Python/Django 应用修复以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 31.74
solved_attempts: 110
solved_unique_tasks: 45
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "29.8%"
pass_3_rate_pct: "17.9%"
pass_3_count: 27
attempt_score_pct: "24.3%"
tldr:
  - en: "GLM 5.1 is best read as moderately stable: rank #8, 45 reached tasks, 27 stable solves."
    zh: "GLM 5.1 更适合读成中等稳定型：排名 #8，触达 45 题，稳定解出 27 题。"
  - en: "Best suite signal: Open Library · release 013 at 8/10 (80.0%)."
    zh: "最强 suite 信号：Open Library · release 013，8/10（80.0%）。"
  - en: "Weakest visible area: qutebrowser · release 018 at 0/9 (0.0%)."
    zh: "最弱可见区域：qutebrowser 浏览器 · release 018，0/9（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "31.74"
    note: "rank #8 of 32"
    note_zh: "32 个模型中排名 #8"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "27"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+18"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "24.3%"
    note: "110/453 solved attempts"
    note_zh: "453 次尝试中成功 110 次"
suite_profile:
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 8
    rate: 80.0
    rate_pct: "80.0%"
    pass3: 6
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
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 2
  - suite: release-zh-007-flipt-io-flipt
    label: "Flipt · release 007"
    label_zh: "Flipt feature flag 服务 · release 007"
    repo: "flipt-io/flipt"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 3
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    label_zh: "vuls 漏洞扫描器 · release 010"
    repo: "future-architect/vuls"
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
  - suite: release-zh-002-ansible-ansible
    label: "Ansible · release 002"
    label_zh: "Ansible 自动化 · release 002"
    repo: "ansible/ansible"
    total: 10
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 1
  - suite: release-zh-005-flipt-io-flipt
    label: "Flipt · release 005"
    label_zh: "Flipt feature flag 服务 · release 005"
    repo: "flipt-io/flipt"
    total: 10
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 0
audit:
  harness_ok: 110
  reverified_ok: 110
  strict_rejected: 0
  accepted_pct: 100
  rejected_pct: 0
  score_before: "31.74"
  score_after: "31.74"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 110 of 110 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 110 次初始成功中的 110 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Feature Request: Add caching support for evaluation rollouts"
    title_zh: "Feature Request：为 evaluation rollouts 添加缓存支持"
    meta: "flipt-io/flipt · solved 3/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-006-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-006-flipt-io-flipt。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Internet Archive metadata imports do not correctly handle publisher and ISBN fields in Open Library records"
    title_zh: "Internet Archive 元数据导入未正确处理 Open Library 记录中的 publisher 和 ISBN 字段"
    meta: "internetarchive/openlibrary · solved 2/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-015-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-015-internetarchive-openlibrary。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Work search emits over-escaped edition_key filters and does not expose raw user queries as parameters."
    title_zh: "Work search 发出过度转义的 edition_key 过滤器，且未将原始用户查询作为参数公开。"
    meta: "internetarchive/openlibrary · solved 1/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 1 次"
    note: "Verifier pattern: blocked-suspicious-patch. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：blocked-suspicious-patch。Suite：release-zh-013-internetarchive-openlibrary。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Python module shebang not honored; interpreter forced to /usr/bin/python"
    title_zh: "Python module shebang 未被遵守；interpreter 被强制为 /usr/bin/python"
    meta: "ansible/ansible · solved 0/3"
    meta_zh: "ansible/ansible · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-002-ansible-ansible."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-002-ansible-ansible。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "DeepSeek v4 pro (max)"
    note: "Rank #7 · 32.95 Final Score"
    note_zh: "排名 #7 · Final Score 32.95"
    url: /code-agent-bench/models/opencode-deepseek-v4-flash-max/
  - label: "One rank below"
    label_zh: "下一名"
    name: "Qwen 3.7 Max (1m)"
    note: "Rank #9 · 31.62 Final Score"
    note_zh: "排名 #9 · Final Score 31.62"
    url: /code-agent-bench/models/qodercli-qwen37max-direct-full453-10c-r1-20260613/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "GLM 5.2"
    note: "Rank #1 · 37.59 Final Score"
    note_zh: "排名 #1 · Final Score 37.59"
    url: /code-agent-bench/models/opencode-glm52/
---

<div class="bench-lang-en" markdown="1">

GLM 5.1 is a moderately stable row around the #8 slot. The useful reading is not just the 31.74 score, but the split between 45 reached tasks and 27 stable solves.

The closest family reference is GLM 5.2 at rank #1. Compared with that row, this one is 5.85 points behind, with 12 fewer reached tasks and 9 fewer stable solves.

The profile has one obvious anchor: Open Library · release 013 at 8/10 (80.0%). That anchor matters because qutebrowser · release 018 at 0/9 (0.0%) shows the score does not generalize evenly across the benchmark. Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The chart is not trying to crown a single strength; it shows how quickly the row falls from Open Library · release 013 at 8/10 (80.0%) to qutebrowser · release 018 at 0/9 (0.0%).

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The examples keep the middle-band story honest: `Feature Request: Add caching support for evaluation rollouts` is the upside, `Python module shebang not honored; interpreter forced to /usr/bin/python` is the failure surface, and the page should be read between those two poles.

The verifier audit keeps 110/110 solved attempts for GLM 5.1, so the interesting question is not score inflation; it is where the model repeatedly finds the same kind of patch.

{% include model-audit-card.html %}

In practice, read it through the gap between Open Library · release 013 at 8/10 (80.0%) and qutebrowser · release 018 at 0/9 (0.0%). That gap is more actionable than the rank because it says which repo shape gets coherent patches. The 110/453 attempt score is the backdrop; the article above is about which parts of that score are repeatable enough to matter.

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

GLM 5.1 是一个排名 #8 附近的中等稳定型结果。它的重点不只是 31.74 分，而是 45 道触达题和 27 道稳定题之间的差距。

最接近的同系参照是排名 #1 的 GLM 5.2。和它相比，这一行最终分低 5.85 分，触达题少 12 个，稳定题少 9 个。

这组画像有一个明显锚点：Open Library · release 013，8/10（80.0%）。这个锚点重要，是因为qutebrowser 浏览器 · release 018，0/9（0.0%）说明分数没有均匀迁移到整套 benchmark。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这张图不是为了给单一强项加冕，而是展示这一行从Open Library · release 013，8/10（80.0%）滑到qutebrowser 浏览器 · release 018，0/9（0.0%）有多快。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

这些案例让中段模型画像更具体：`Feature Request：为 evaluation rollouts 添加缓存支持` 是上限，`Python module shebang 未被遵守；interpreter 被强制为 /usr/bin/python` 是失败面，这页应该在两者之间读。

GLM 5.1 的复核保留了 110 次成功中的 110 次，所以重点不是分数膨胀，而是模型在哪些地方能反复找到同类补丁。

{% include model-audit-card.html %}

实际选择时，更应该通过Open Library · release 013，8/10（80.0%）和qutebrowser 浏览器 · release 018，0/9（0.0%）之间的落差来读它。这个落差比分数排名更可操作，因为它说明哪类代码库更容易得到连贯补丁。110/453 的单次尝试成功数只是背景；上面的文章重点是哪些部分足够可重复、值得当成能力看。

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
