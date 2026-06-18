---
layout: model
model_id: opencode-sensenova67-flash-lite
title: "SenseNova 6.7 flash lite on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-sensenova67-flash-lite/
analysis_date: 2026-06-18
rank: 29
model_name: "SenseNova 6.7 flash lite"
model_raw: "sensenova/sensenova-6.7-flash-lite"
provider_label: "SenseNova"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A lower-table result with a few useful bright spots: 33/151 tasks solved at least once, 13/151 solved in all three attempts, with the clearest wins around automation and configuration-management work plus localized Go security-scanner changes."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 33 题，三次都解出 13 题；强项主要落在自动化和配置管理类改动以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 23.14
solved_attempts: 68
solved_unique_tasks: 33
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "21.9%"
pass_3_rate_pct: "8.6%"
pass_3_count: 13
attempt_score_pct: "15.0%"
tldr:
  - en: "SenseNova 6.7 flash lite is best read as volatile explorer: rank #29, 33 reached tasks, 13 stable solves."
    zh: "SenseNova 6.7 flash lite 更适合读成探索型但波动较大：排名 #29，触达 33 题，稳定解出 13 题。"
  - en: "Best suite signal: Ansible · release 002 at 7/10 (70.0%)."
    zh: "最强 suite 信号：Ansible 自动化 · release 002，7/10（70.0%）。"
  - en: "Weakest visible area: Open Library · release 014 at 0/10 (0.0%)."
    zh: "最弱可见区域：Open Library · release 014，0/10（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "23.14"
    note: "rank #29 of 32"
    note_zh: "32 个模型中排名 #29"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "13"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+20"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "15.0%"
    note: "68/453 solved attempts"
    note_zh: "453 次尝试中成功 68 次"
suite_profile:
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    label_zh: "vuls 漏洞扫描器 · release 012"
    repo: "future-architect/vuls"
    total: 4
    solved: 3
    rate: 75.0
    rate_pct: "75.0%"
    pass3: 2
    note: "Best visible cluster for this row: 3/4 tasks reached."
    note_zh: "这一行最明显的强项簇：4 题中解出 3 题。"
  - suite: release-zh-002-ansible-ansible
    label: "Ansible · release 002"
    label_zh: "Ansible 自动化 · release 002"
    repo: "ansible/ansible"
    total: 10
    solved: 7
    rate: 70.0
    rate_pct: "70.0%"
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
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    label_zh: "vuls 漏洞扫描器 · release 010"
    repo: "future-architect/vuls"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 1
  - suite: release-zh-004-ansible-ansible
    label: "Ansible · release 004"
    label_zh: "Ansible 自动化 · release 004"
    repo: "ansible/ansible"
    total: 3
    solved: 1
    rate: 33.3
    rate_pct: "33.3%"
    pass3: 1
  - suite: release-zh-001-ansible-ansible
    label: "Ansible · release 001"
    label_zh: "Ansible 自动化 · release 001"
    repo: "ansible/ansible"
    total: 10
    solved: 3
    rate: 30.0
    rate_pct: "30.0%"
    pass3: 1
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: large Python/Django application repairs resisted this model-agent pairing."
    note_zh: "弱项簇：大型 Python/Django 应用修复对这个模型-agent 组合不友好。"
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: large Python/Django application repairs resisted this model-agent pairing."
    note_zh: "弱项簇：大型 Python/Django 应用修复对这个模型-agent 组合不友好。"
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
  - suite: release-zh-016-internetarchive-openlibrary
    label: "Open Library · release 016"
    label_zh: "Open Library · release 016"
    repo: "internetarchive/openlibrary"
    total: 5
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: large Python/Django application repairs resisted this model-agent pairing."
    note_zh: "弱项簇：大型 Python/Django 应用修复对这个模型-agent 组合不友好。"
audit:
  harness_ok: 68
  reverified_ok: 68
  strict_rejected: 0
  accepted_pct: 100
  rejected_pct: 0
  score_before: "23.14"
  score_after: "23.14"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 68 of 68 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 68 次初始成功中的 68 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Image configuration does not properly handle digest values alongside tags"
    title_zh: "图像配置未能正确处理 digest 值与标签"
    meta: "future-architect/vuls · solved 3/3"
    meta_zh: "future-architect/vuls · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-012-future-architect-vuls."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-012-future-architect-vuls。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Identify CentOS Stream from CentOS to prevent incorrect EOL status and inaccurate vulnerability lookups"
    title_zh: "从 CentOS 中识别 CentOS Stream，以防止 EOL 状态错误和漏洞查询不准确"
    meta: "future-architect/vuls · solved 2/3"
    meta_zh: "future-architect/vuls · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-011-future-architect-vuls."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-011-future-architect-vuls。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Avoid double calculation of loops and delegate_to in TaskExecutor"
    title_zh: "避免在 TaskExecutor 中重复计算 loops 和 delegate_to"
    meta: "ansible/ansible · solved 1/3"
    meta_zh: "ansible/ansible · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-001-ansible-ansible."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-001-ansible-ansible。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Unify validation in add_book by removing override, with the sole exception of 'promise items'"
    title_zh: "在 add_book 中通过移除 override 来统一验证，唯一例外是 promise items"
    meta: "internetarchive/openlibrary · solved 0/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-016-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-016-internetarchive-openlibrary。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "KAT Coder Pro v2"
    note: "Rank #28 · 23.47 Final Score"
    note_zh: "排名 #28 · Final Score 23.47"
    url: /code-agent-bench/models/opencode-kat-coder-pro-v2-kat2/
  - label: "One rank below"
    label_zh: "下一名"
    name: "doubao seed 2.0 code"
    note: "Rank #30 · 19.42 Final Score"
    note_zh: "排名 #30 · Final Score 19.42"
    url: /code-agent-bench/models/opencode-doubao-2-code/
  - label: "Same agent"
    label_zh: "同 agent"
    name: "GLM 5.2"
    note: "Rank #1 · 37.59 Final Score"
    note_zh: "排名 #1 · Final Score 37.59"
    url: /code-agent-bench/models/opencode-glm52/
---

<div class="bench-lang-en" markdown="1">

SenseNova 6.7 flash lite is a volatile explorer row around the #29 slot. The useful reading is not just the 23.14 score, but the split between 33 reached tasks and 13 stable solves.

The closest family reference is KAT Coder Pro v2 at rank #28. Compared with that row, this one is 0.33 points behind, with 4 more reached tasks and 4 fewer stable solves.

The result is easiest to understand as a three-point shape: volume at Ansible · release 002 at 7/10 (70.0%), efficiency at vuls · release 012 at 3/4 (75.0%), and resistance at Open Library · release 014 at 0/10 (0.0%). Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

Do not read the chart as a small version of the top rows. It is a map of early failure surfaces with a few recoverable pockets.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

At this rank, `Unify validation in add_book by removing override, with the sole exception of 'promise items'` matters as much as the wins. It shows the task shape where the model-agent loop fails before it can produce a meaningful verifier-backed patch.

The verifier audit keeps 68/68 solved attempts for SenseNova 6.7 flash lite, so the interesting question is not score inflation; it is where the model repeatedly finds the same kind of patch.

{% include model-audit-card.html %}

This row is more useful as a failure map than as a default choice. Look at Open Library · release 014 at 0/10 (0.0%) first: it shows the task shape where the loop loses traction. With 68/453 solved attempts, the page is most useful for seeing where the agent loop breaks before it becomes a dependable option.

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

SenseNova 6.7 flash lite 是一个排名 #29 附近的探索型但波动较大结果。它的重点不只是 23.14 分，而是 33 道触达题和 13 道稳定题之间的差距。

最接近的同系参照是排名 #28 的 KAT Coder Pro v2。和它相比，这一行最终分低 0.33 分，触达题多 4 个，稳定题少 4 个。

这个结果最容易读成三点形状：数量在Ansible 自动化 · release 002，7/10（70.0%），效率在vuls 漏洞扫描器 · release 012，3/4（75.0%），阻力在Open Library · release 014，0/10（0.0%）。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

不要把这张图读成头部模型的小号版本。它更像早期失败面的地图，中间夹着少数可恢复区域。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

在这个排名段，`在 add_book 中通过移除 override 来统一验证，唯一例外是 promise items` 和成功案例一样重要。它说明模型-agent 循环在哪种任务形态上还没形成有效 verifier-backed patch。

SenseNova 6.7 flash lite 的复核保留了 68 次成功中的 68 次，所以重点不是分数膨胀，而是模型在哪些地方能反复找到同类补丁。

{% include model-audit-card.html %}

这一行更适合作为失败地图，而不是默认选择。先看Open Library · release 014，0/10（0.0%）：它展示了模型-agent 循环最容易失去抓手的任务形态。在 453 次尝试中只成功 68 次时，这页最有价值的是看 agent loop 在哪里先断掉。

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
