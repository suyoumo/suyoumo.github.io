---
layout: model
model_id: opencode-minimax27
title: "MiniMax M2.7 highspeed on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-minimax27/
analysis_date: 2026-06-18
rank: 23
model_name: "MiniMax M2.7 highspeed"
model_raw: "minimax-cn-coding-plan/MiniMax-M2.7-highspeed"
provider_label: "MiniMax"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A lower-table result with a few useful bright spots: 38/151 tasks solved at least once, 15/151 solved in all three attempts, with the clearest wins around large Python/Django application repairs plus automation and configuration-management work."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 38 题，三次都解出 15 题；强项主要落在大型 Python/Django 应用修复以及自动化和配置管理类改动。"
final_score: 25.24
solved_attempts: 76
solved_unique_tasks: 38
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "25.2%"
pass_3_rate_pct: "9.9%"
pass_3_count: 15
attempt_score_pct: "16.8%"
tldr:
  - en: "MiniMax M2.7 highspeed is best read as wide but retry-sensitive: rank #23, 38 reached tasks, 15 stable solves."
    zh: "MiniMax M2.7 highspeed 更适合读成覆盖不窄但依赖重试：排名 #23，触达 38 题，稳定解出 15 题。"
  - en: "Best suite signal: Open Library · release 013 at 6/10 (60.0%)."
    zh: "最强 suite 信号：Open Library · release 013，6/10（60.0%）。"
  - en: "Weakest visible area: Flipt · release 006 at 0/10 (0.0%)."
    zh: "最弱可见区域：Flipt feature flag 服务 · release 006，0/10（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "25.24"
    note: "rank #23 of 32"
    note_zh: "32 个模型中排名 #23"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "15"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+23"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "16.8%"
    note: "76/453 solved attempts"
    note_zh: "453 次尝试中成功 76 次"
suite_profile:
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 5
    note: "Best visible cluster for this row: 6/10 tasks reached."
    note_zh: "这一行最明显的强项簇：10 题中解出 6 题。"
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    label_zh: "vuls 漏洞扫描器 · release 010"
    repo: "future-architect/vuls"
    total: 10
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 2
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 1
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 2
  - suite: release-zh-016-internetarchive-openlibrary
    label: "Open Library · release 016"
    label_zh: "Open Library · release 016"
    repo: "internetarchive/openlibrary"
    total: 5
    solved: 2
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
  - suite: release-zh-006-flipt-io-flipt
    label: "Flipt · release 006"
    label_zh: "Flipt feature flag 服务 · release 006"
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
  harness_ok: 76
  reverified_ok: 74
  strict_rejected: 2
  accepted_pct: 97
  rejected_pct: 3
  score_before: "25.24"
  score_after: "25.24"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 74 of 76 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 76 次初始成功中的 74 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Inconsistent return type of update_key in Solr updaters"
    title_zh: "Solr updaters 中 update_key 返回类型不一致"
    meta: "internetarchive/openlibrary · solved 3/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-014-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-014-internetarchive-openlibrary。"
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
    title: "Changes to linux.py for setup module to return more relevant information for s390"
    title_zh: "修改 linux.py，使 setup module 在 s390 上返回更相关的信息"
    meta: "ansible/ansible · solved 1/3"
    meta_zh: "ansible/ansible · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-002-ansible-ansible."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-002-ansible-ansible。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Enable Runtime Configuration and URL Pattern Support for Dark Mode Setting on QtWebEngine 6.7+"
    title_zh: "为 QtWebEngine 6.7+ 的暗色模式设置启用运行时配置和 URL pattern 支持"
    meta: "qutebrowser/qutebrowser · solved 0/3"
    meta_zh: "qutebrowser/qutebrowser · 3 次中成功 0 次"
    note: "Verifier pattern: no-op-patch. Suite: release-zh-018-qutebrowser-qutebrowser."
    note_zh: "Verifier 信号：no-op-patch。Suite：release-zh-018-qutebrowser-qutebrowser。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "Qwen 3.6 plus (180k)"
    note: "Rank #22 · 25.81 Final Score"
    note_zh: "排名 #22 · Final Score 25.81"
    url: /code-agent-bench/models/qoder-qwen36-plus-forward-20260610/
  - label: "One rank below"
    label_zh: "下一名"
    name: "MiMo v2.5"
    note: "Rank #24 · 25.24 Final Score"
    note_zh: "排名 #24 · Final Score 25.24"
    url: /code-agent-bench/models/opencode-mimo25-tokenplan-high-20260527/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "MiniMax M3"
    note: "Rank #6 · 33.91 Final Score"
    note_zh: "排名 #6 · Final Score 33.91"
    url: /code-agent-bench/models/opencode-minimax-m3/
---

<div class="bench-lang-en" markdown="1">

MiniMax M2.7 highspeed is broad but volatile. It can touch 38/151 tasks, yet only 15 become 3/3 solves, so much of its value comes from retrying the same benchmark surface.

The closest family reference is MiniMax M3 at rank #6. Compared with that row, this one is 8.67 points behind, with 18 fewer reached tasks and 10 fewer stable solves.

The profile has one obvious anchor: Open Library · release 013 at 6/10 (60.0%). That anchor matters because Flipt · release 006 at 0/10 (0.0%) shows the score does not generalize evenly across the benchmark. Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

Read the bars as a volatility chart: Open Library · release 013 at 6/10 (60.0%) shows the upside, while the Pass^3 gap explains why the same row can feel much weaker on a single rerun.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The useful contrast is between `Inconsistent return type of update_key in Solr updaters` (internetarchive/openlibrary · solved 3/3) and `Identify CentOS Stream from CentOS to prevent incorrect EOL status and inaccurate vulnerability lookups` (future-architect/vuls · solved 2/3). The model reaches both kinds of problems, but only one becomes dependable.

The audit trims 2 solved attempts from MiniMax M2.7 highspeed but still keeps 97% of the solved set, so the suite shape remains useful even where individual wins are debatable.

{% include model-audit-card.html %}

Use it when breadth matters more than deterministic replay. It can find openings around Open Library · release 013 at 6/10 (60.0%), but the 23-task reach gap says a second or third run may tell a different story. The 76/453 attempt score is best read as exploration bandwidth: 38 tasks are reachable, but many need retry luck.

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

MiniMax M2.7 highspeed 的特点是覆盖不窄但波动较大。它能至少一次摸到 38/151 题，但只有 15 题能做到 3/3，因此很大一部分价值来自重试。

最接近的同系参照是排名 #6 的 MiniMax M3。和它相比，这一行最终分低 8.67 分，触达题少 18 个，稳定题少 10 个。

这组画像有一个明显锚点：Open Library · release 013，6/10（60.0%）。这个锚点重要，是因为Flipt feature flag 服务 · release 006，0/10（0.0%）说明分数没有均匀迁移到整套 benchmark。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这张图更像波动率图：Open Library · release 013，6/10（60.0%）展示上限，而 Pass^3 落差解释了为什么单次重跑会显得弱很多。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

最有用的对比是 `Solr updaters 中 update_key 返回类型不一致`（internetarchive/openlibrary · 3 次中成功 3 次）和 `从 CentOS 中识别 CentOS Stream，以防止 EOL 状态错误和漏洞查询不准确`（future-architect/vuls · 3 次中成功 2 次）：模型都能触达，但只有前者变成可靠结果。

复核从 MiniMax M2.7 highspeed 中剔除了 2 次成功，但仍保留 97% 的成功集合，因此即便个别胜利有争议，suite 形状仍然有参考价值。

{% include model-audit-card.html %}

当你更看重覆盖面而不是确定复现时，它更合适。它能在Open Library · release 013，6/10（60.0%）附近找到入口，但 23 题的覆盖-稳定差说明第二、第三次运行可能给出不同结果。76/453 的单次尝试成功数更像探索带宽：38 道题能触达，但很多仍需要重试运气。

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
