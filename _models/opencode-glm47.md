---
layout: model
model_id: opencode-glm47
title: "GLM 4.7 on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-glm47/
analysis_date: 2026-06-18
rank: 27
model_name: "GLM 4.7"
model_raw: "zai-coding-plan/glm-4.7"
provider_label: "Zhipu GLM"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A lower-table result with a few useful bright spots: 36/151 tasks solved at least once, 13/151 solved in all three attempts, with the clearest wins around large Python/Django application repairs plus automation and configuration-management work."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 36 题，三次都解出 13 题；强项主要落在大型 Python/Django 应用修复以及自动化和配置管理类改动。"
final_score: 24.03
solved_attempts: 73
solved_unique_tasks: 36
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "23.8%"
pass_3_rate_pct: "8.6%"
pass_3_count: 13
attempt_score_pct: "16.1%"
tldr:
  - en: "GLM 4.7 is best read as wide but retry-sensitive: rank #27, 36 reached tasks, 13 stable solves."
    zh: "GLM 4.7 更适合读成覆盖不窄但依赖重试：排名 #27，触达 36 题，稳定解出 13 题。"
  - en: "Best suite signal: Open Library · release 013 at 6/10 (60.0%)."
    zh: "最强 suite 信号：Open Library · release 013，6/10（60.0%）。"
  - en: "Weakest visible area: Flipt · release 005 at 0/10 (0.0%)."
    zh: "最弱可见区域：Flipt feature flag 服务 · release 005，0/10（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "24.03"
    note: "rank #27 of 32"
    note_zh: "32 个模型中排名 #27"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "13"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+23"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "16.1%"
    note: "73/453 solved attempts"
    note_zh: "453 次尝试中成功 73 次"
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
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 1
  - suite: release-zh-002-ansible-ansible
    label: "Ansible · release 002"
    label_zh: "Ansible 自动化 · release 002"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 1
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
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
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 3
    rate: 30.0
    rate_pct: "30.0%"
    pass3: 1
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
  harness_ok: 73
  reverified_ok: 62
  strict_rejected: 11
  accepted_pct: 85
  rejected_pct: 15
  score_before: "24.03"
  score_after: "24.03"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 62 of 73 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 73 次初始成功中的 62 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Scan results miss Package URL (PURL) information in library output"
    title_zh: "Library 输出中的扫描结果缺少 Package URL (PURL) 信息"
    meta: "future-architect/vuls · solved 3/3"
    meta_zh: "future-architect/vuls · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-010-future-architect-vuls."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-010-future-architect-vuls。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Deprecation of UnsafeProxy causes inconsistency in variable wrapping"
    title_zh: "UnsafeProxy 的弃用导致变量 unsafe 包装不一致"
    meta: "ansible/ansible · solved 2/3"
    meta_zh: "ansible/ansible · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-003-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-003-ansible-ansible。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "PrioritizedISBN Class Limited to ISBN Values and Lacks Proper Equality/Serialization"
    title_zh: "PrioritizedISBN 类仅限于 ISBN 值且缺乏正确的相等性/序列化"
    meta: "internetarchive/openlibrary · solved 1/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-013-internetarchive-openlibrary。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Add preview option to import endpoints and clarify import validation behavior"
    title_zh: "为 import endpoints 添加 preview 选项，并明确 import validation 行为"
    meta: "internetarchive/openlibrary · solved 0/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-014-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-014-internetarchive-openlibrary。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "Step 3.5 flash 2603"
    note: "Rank #26 · 24.21 Final Score"
    note_zh: "排名 #26 · Final Score 24.21"
    url: /code-agent-bench/models/opencode-stepfun35-2603/
  - label: "One rank below"
    label_zh: "下一名"
    name: "KAT Coder Pro v2"
    note: "Rank #28 · 23.47 Final Score"
    note_zh: "排名 #28 · Final Score 23.47"
    url: /code-agent-bench/models/opencode-kat-coder-pro-v2-kat2/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "GLM 5.2"
    note: "Rank #1 · 37.59 Final Score"
    note_zh: "排名 #1 · Final Score 37.59"
    url: /code-agent-bench/models/opencode-glm52/
---

<div class="bench-lang-en" markdown="1">

GLM 4.7 is broad but volatile. It can touch 36/151 tasks, yet only 13 become 3/3 solves, so much of its value comes from retrying the same benchmark surface.

The closest family reference is GLM 5.2 at rank #1. Compared with that row, this one is 13.56 points behind, with 21 fewer reached tasks and 23 fewer stable solves.

The volume win is Open Library · release 013 at 6/10 (60.0%), while the cleanest pass-rate spike is vuls · release 012 at 3/4 (75.0%). The warning label is Flipt · release 005 at 0/10 (0.0%), so the contrast is not generic strength versus weakness; it is large Python/Django application repairs holding together better than Go product plumbing across configuration, storage, and service APIs on this run. Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The important visual cue is the gap between high-reach suites and low Pass^3 counts. This model can often locate the neighborhood of the fix, but many patches do not survive three independent runs.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The useful contrast is between `Scan results miss Package URL (PURL) information in library output` (future-architect/vuls · solved 3/3) and `Deprecation of UnsafeProxy causes inconsistency in variable wrapping` (ansible/ansible · solved 2/3). The model reaches both kinds of problems, but only one becomes dependable.

The audit trims 11 solved attempts from GLM 4.7 but still keeps 85% of the solved set, so the suite shape remains useful even where individual wins are debatable.

{% include model-audit-card.html %}

Use it when breadth matters more than deterministic replay. It can find openings around Open Library · release 013 at 6/10 (60.0%), but the 23-task reach gap says a second or third run may tell a different story. The 73/453 attempt score is best read as exploration bandwidth: 36 tasks are reachable, but many need retry luck.

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

GLM 4.7 的特点是覆盖不窄但波动较大。它能至少一次摸到 36/151 题，但只有 13 题能做到 3/3，因此很大一部分价值来自重试。

最接近的同系参照是排名 #1 的 GLM 5.2。和它相比，这一行最终分低 13.56 分，触达题少 21 个，稳定题少 23 个。

从数量看，主要胜利来自Open Library · release 013，6/10（60.0%）；从通过率看，最干净的高点是vuls 漏洞扫描器 · release 012，3/4（75.0%）。需要警惕的是Flipt feature flag 服务 · release 005，0/10（0.0%），所以这里不是泛泛地说强弱项，而是大型 Python/Django 应用修复在这次运行中比横跨配置、存储和服务 API 的 Go 产品工程更能闭环。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这张图最重要的信号，是高触达 suite 和较低 Pass^3 之间的落差。模型经常能找到修复附近的位置，但很多补丁不能在三次独立运行中稳定复现。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

最有用的对比是 `Library 输出中的扫描结果缺少 Package URL (PURL) 信息`（future-architect/vuls · 3 次中成功 3 次）和 `UnsafeProxy 的弃用导致变量 unsafe 包装不一致`（ansible/ansible · 3 次中成功 2 次）：模型都能触达，但只有前者变成可靠结果。

复核从 GLM 4.7 中剔除了 11 次成功，但仍保留 85% 的成功集合，因此即便个别胜利有争议，suite 形状仍然有参考价值。

{% include model-audit-card.html %}

当你更看重覆盖面而不是确定复现时，它更合适。它能在Open Library · release 013，6/10（60.0%）附近找到入口，但 23 题的覆盖-稳定差说明第二、第三次运行可能给出不同结果。73/453 的单次尝试成功数更像探索带宽：36 道题能触达，但很多仍需要重试运气。

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
