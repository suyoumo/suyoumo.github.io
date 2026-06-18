---
layout: model
model_id: opencode-doubao-2-code
title: "doubao seed 2.0 code on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-doubao-2-code/
analysis_date: 2026-06-18
rank: 30
model_name: "doubao seed 2.0 code"
model_raw: "volcengine-plan/doubao-seed-2.0-code"
provider_label: "Volcengine"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A lower-table result with a few useful bright spots: 27/151 tasks solved at least once, 9/151 solved in all three attempts, with the clearest wins around large Python/Django application repairs plus automation and configuration-management work."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 27 题，三次都解出 9 题；强项主要落在大型 Python/Django 应用修复以及自动化和配置管理类改动。"
final_score: 19.42
solved_attempts: 52
solved_unique_tasks: 27
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "17.9%"
pass_3_rate_pct: "6.0%"
pass_3_count: 9
attempt_score_pct: "11.5%"
tldr:
  - en: "doubao seed 2.0 code is best read as volatile explorer: rank #30, 27 reached tasks, 9 stable solves."
    zh: "doubao seed 2.0 code 更适合读成探索型但波动较大：排名 #30，触达 27 题，稳定解出 9 题。"
  - en: "Best suite signal: Open Library · release 013 at 7/10 (70.0%)."
    zh: "最强 suite 信号：Open Library · release 013，7/10（70.0%）。"
  - en: "Weakest visible area: Flipt · release 005 at 0/10 (0.0%)."
    zh: "最弱可见区域：Flipt feature flag 服务 · release 005，0/10（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "19.42"
    note: "rank #30 of 32"
    note_zh: "32 个模型中排名 #30"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "9"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+18"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "11.5%"
    note: "52/453 solved attempts"
    note_zh: "453 次尝试中成功 52 次"
suite_profile:
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 7
    rate: 70.0
    rate_pct: "70.0%"
    pass3: 3
    note: "Best visible cluster for this row: 7/10 tasks reached."
    note_zh: "这一行最明显的强项簇：10 题中解出 7 题。"
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 2
  - suite: release-zh-004-ansible-ansible
    label: "Ansible · release 004"
    label_zh: "Ansible 自动化 · release 004"
    repo: "ansible/ansible"
    total: 3
    solved: 1
    rate: 33.3
    rate_pct: "33.3%"
    pass3: 0
  - suite: release-zh-001-ansible-ansible
    label: "Ansible · release 001"
    label_zh: "Ansible 自动化 · release 001"
    repo: "ansible/ansible"
    total: 10
    solved: 3
    rate: 30.0
    rate_pct: "30.0%"
    pass3: 1
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 3
    rate: 30.0
    rate_pct: "30.0%"
    pass3: 0
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    label_zh: "vuls 漏洞扫描器 · release 012"
    repo: "future-architect/vuls"
    total: 4
    solved: 1
    rate: 25.0
    rate_pct: "25.0%"
    pass3: 0
  - suite: release-zh-005-flipt-io-flipt
    label: "Flipt · release 005"
    label_zh: "Flipt feature flag 服务 · release 005"
    repo: "flipt-io/flipt"
    total: 10
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: Go product plumbing across configuration, storage, and service APIs resisted this model-agent pairing."
    note_zh: "弱项簇：横跨配置、存储和服务 API 的 Go 产品工程对这个模型-agent 组合不友好。"
  - suite: release-zh-007-flipt-io-flipt
    label: "Flipt · release 007"
    label_zh: "Flipt feature flag 服务 · release 007"
    repo: "flipt-io/flipt"
    total: 10
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: Go product plumbing across configuration, storage, and service APIs resisted this model-agent pairing."
    note_zh: "弱项簇：横跨配置、存储和服务 API 的 Go 产品工程对这个模型-agent 组合不友好。"
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
audit:
  harness_ok: 52
  reverified_ok: 51
  strict_rejected: 1
  accepted_pct: 98
  rejected_pct: 2
  score_before: "19.42"
  score_after: "19.42"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 51 of 52 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 52 次初始成功中的 51 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Inconsistency in author identifier generation when comparing editions."
    title_zh: "比较 editions 时 author identifier 生成不一致。"
    meta: "internetarchive/openlibrary · solved 3/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-013-internetarchive-openlibrary。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Add Validation and Date Formatting Functions"
    title_zh: "添加验证和日期格式化函数"
    meta: "internetarchive/openlibrary · solved 2/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-013-internetarchive-openlibrary。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Work search emits over-escaped edition_key filters and does not expose raw user queries as parameters."
    title_zh: "Work search 发出过度转义的 edition_key 过滤器，且未将原始用户查询作为参数公开。"
    meta: "internetarchive/openlibrary · solved 1/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-013-internetarchive-openlibrary。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Function read_subjects() in get_subjects.py exceeds acceptable complexity thresholds and includes unused logic"
    title_zh: "get_subjects.py 中的函数 read_subjects() 超出可接受的复杂度阈值，并包含未使用逻辑"
    meta: "internetarchive/openlibrary · solved 0/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 0 次"
    note: "Verifier pattern: no-op-patch. Suite: release-zh-016-internetarchive-openlibrary."
    note_zh: "Verifier 信号：no-op-patch。Suite：release-zh-016-internetarchive-openlibrary。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "SenseNova 6.7 flash lite"
    note: "Rank #29 · 23.14 Final Score"
    note_zh: "排名 #29 · Final Score 23.14"
    url: /code-agent-bench/models/opencode-sensenova67-flash-lite/
  - label: "One rank below"
    label_zh: "下一名"
    name: "Step 3.5 flash"
    note: "Rank #31 · 17.04 Final Score"
    note_zh: "排名 #31 · Final Score 17.04"
    url: /code-agent-bench/models/opencode-stepfun35/
  - label: "Same agent"
    label_zh: "同 agent"
    name: "GLM 5.2"
    note: "Rank #1 · 37.59 Final Score"
    note_zh: "排名 #1 · Final Score 37.59"
    url: /code-agent-bench/models/opencode-glm52/
---

<div class="bench-lang-en" markdown="1">

doubao seed 2.0 code is a volatile explorer row around the #30 slot. The useful reading is not just the 19.42 score, but the split between 27 reached tasks and 9 stable solves.

The closest family reference is SenseNova 6.7 flash lite at rank #29. Compared with that row, this one is 3.72 points behind, with 6 fewer reached tasks and 4 fewer stable solves.

Most of the positive signal concentrates in Open Library · release 013 at 7/10 (70.0%). The opposing read is Flipt · release 005 at 0/10 (0.0%), which keeps the row from looking like a generalist. Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

Do not read the chart as a small version of the top rows. It is a map of early failure surfaces with a few recoverable pockets.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

At this rank, `Function read_subjects() in get_subjects.py exceeds acceptable complexity thresholds and includes unused logic` matters as much as the wins. It shows the task shape where the model-agent loop fails before it can produce a meaningful verifier-backed patch.

The audit trims 1 solved attempt from doubao seed 2.0 code but still keeps 98% of the solved set, so the suite shape remains useful even where individual wins are debatable.

{% include model-audit-card.html %}

This row is more useful as a failure map than as a default choice. Look at Flipt · release 005 at 0/10 (0.0%) first: it shows the task shape where the loop loses traction. With 52/453 solved attempts, the page is most useful for seeing where the agent loop breaks before it becomes a dependable option.

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

doubao seed 2.0 code 是一个排名 #30 附近的探索型但波动较大结果。它的重点不只是 19.42 分，而是 27 道触达题和 9 道稳定题之间的差距。

最接近的同系参照是排名 #29 的 SenseNova 6.7 flash lite。和它相比，这一行最终分低 3.72 分，触达题少 6 个，稳定题少 4 个。

正面信号大多集中在Open Library · release 013，7/10（70.0%）。反向读法是Flipt feature flag 服务 · release 005，0/10（0.0%），它让这一行看起来不像通用型。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

不要把这张图读成头部模型的小号版本。它更像早期失败面的地图，中间夹着少数可恢复区域。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

在这个排名段，`get_subjects.py 中的函数 read_subjects() 超出可接受的复杂度阈值，并包含未使用逻辑` 和成功案例一样重要。它说明模型-agent 循环在哪种任务形态上还没形成有效 verifier-backed patch。

复核从 doubao seed 2.0 code 中剔除了 1 次成功，但仍保留 98% 的成功集合，因此即便个别胜利有争议，suite 形状仍然有参考价值。

{% include model-audit-card.html %}

这一行更适合作为失败地图，而不是默认选择。先看Flipt feature flag 服务 · release 005，0/10（0.0%）：它展示了模型-agent 循环最容易失去抓手的任务形态。在 453 次尝试中只成功 52 次时，这页最有价值的是看 agent loop 在哪里先断掉。

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
