---
layout: model
model_id: opencode-stepfun35-2603
title: "Step 3.5 flash 2603 on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-stepfun35-2603/
analysis_date: 2026-06-18
rank: 26
model_name: "Step 3.5 flash 2603"
model_raw: "stepfun/step-3.5-flash-2603"
provider_label: "StepFun"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A lower-table result with a few useful bright spots: 37/151 tasks solved at least once, 13/151 solved in all three attempts, with the clearest wins around large Python/Django application repairs plus automation and configuration-management work."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 37 题，三次都解出 13 题；强项主要落在大型 Python/Django 应用修复以及自动化和配置管理类改动。"
final_score: 24.21
solved_attempts: 73
solved_unique_tasks: 37
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "24.5%"
pass_3_rate_pct: "8.6%"
pass_3_count: 13
attempt_score_pct: "16.1%"
tldr:
  - en: "Step 3.5 flash 2603 is best read as wide but retry-sensitive: rank #26, 37 reached tasks, 13 stable solves."
    zh: "Step 3.5 flash 2603 更适合读成覆盖不窄但依赖重试：排名 #26，触达 37 题，稳定解出 13 题。"
  - en: "Best suite signal: Ansible · release 003 at 3/10 (30.0%)."
    zh: "最强 suite 信号：Ansible 自动化 · release 003，3/10（30.0%）。"
  - en: "Weakest visible area: Ansible · release 002 at 0/10 (0.0%)."
    zh: "最弱可见区域：Ansible 自动化 · release 002，0/10（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "24.21"
    note: "rank #26 of 32"
    note_zh: "32 个模型中排名 #26"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "13"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+24"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "16.1%"
    note: "73/453 solved attempts"
    note_zh: "453 次尝试中成功 73 次"
suite_profile:
  - suite: release-zh-016-internetarchive-openlibrary
    label: "Open Library · release 016"
    label_zh: "Open Library · release 016"
    repo: "internetarchive/openlibrary"
    total: 5
    solved: 2
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 0
    note: "Best visible cluster for this row: 2/5 tasks reached."
    note_zh: "这一行最明显的强项簇：5 题中解出 2 题。"
  - suite: release-zh-004-ansible-ansible
    label: "Ansible · release 004"
    label_zh: "Ansible 自动化 · release 004"
    repo: "ansible/ansible"
    total: 3
    solved: 1
    rate: 33.3
    rate_pct: "33.3%"
    pass3: 0
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 3
    rate: 30.0
    rate_pct: "30.0%"
    pass3: 1
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    label_zh: "vuls 漏洞扫描器 · release 010"
    repo: "future-architect/vuls"
    total: 10
    solved: 2
    rate: 20.0
    rate_pct: "20.0%"
    pass3: 1
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 2
    rate: 20.0
    rate_pct: "20.0%"
    pass3: 0
  - suite: release-zh-001-ansible-ansible
    label: "Ansible · release 001"
    label_zh: "Ansible 自动化 · release 001"
    repo: "ansible/ansible"
    total: 10
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 1
  - suite: release-zh-002-ansible-ansible
    label: "Ansible · release 002"
    label_zh: "Ansible 自动化 · release 002"
    repo: "ansible/ansible"
    total: 10
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: automation and configuration-management work resisted this model-agent pairing."
    note_zh: "弱项簇：自动化和配置管理类改动对这个模型-agent 组合不友好。"
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
audit:
  harness_ok: 73
  reverified_ok: 27
  strict_rejected: 46
  accepted_pct: 37
  rejected_pct: 63
  score_before: "24.21"
  score_after: "24.21"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 27 of 73 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 73 次初始成功中的 27 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
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
    title: "Consolidate ListMixin into List to Simplify List Model Structure and Maintenance"
    title_zh: "将 ListMixin 合并到 List 以简化 List 模型结构维护"
    meta: "internetarchive/openlibrary · solved 2/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-016-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-016-internetarchive-openlibrary。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Inconsistent return type of update_key in Solr updaters"
    title_zh: "Solr updaters 中 update_key 返回类型不一致"
    meta: "internetarchive/openlibrary · solved 1/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 1 次"
    note: "Verifier pattern: no-op-patch. Suite: release-zh-014-internetarchive-openlibrary."
    note_zh: "Verifier 信号：no-op-patch。Suite：release-zh-014-internetarchive-openlibrary。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Limited Extensibility and Standardization in Audit Log Sinking Mechanism"
    title_zh: "Audit log sink 机制的可扩展性和标准化不足"
    meta: "flipt-io/flipt · solved 0/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 0 次"
    note: "Verifier pattern: no-op-patch. Suite: release-zh-007-flipt-io-flipt."
    note_zh: "Verifier 信号：no-op-patch。Suite：release-zh-007-flipt-io-flipt。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "LongCat 2.0 Preview"
    note: "Rank #25 · 24.78 Final Score"
    note_zh: "排名 #25 · Final Score 24.78"
    url: /code-agent-bench/models/opencode-longcat/
  - label: "One rank below"
    label_zh: "下一名"
    name: "GLM 4.7"
    note: "Rank #27 · 24.03 Final Score"
    note_zh: "排名 #27 · Final Score 24.03"
    url: /code-agent-bench/models/opencode-glm47/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "Step 3.7 flash"
    note: "Rank #18 · 28.01 Final Score"
    note_zh: "排名 #18 · Final Score 28.01"
    url: /code-agent-bench/models/opencode-stepfun37-flash/
---

<div class="bench-lang-en" markdown="1">

Step 3.5 flash 2603 is broad but volatile. It can touch 37/151 tasks, yet only 13 become 3/3 solves, so much of its value comes from retrying the same benchmark surface.

The closest family reference is Step 3.7 flash at rank #18. Compared with that row, this one is 3.79 points behind, with 6 fewer reached tasks and 5 fewer stable solves.

The result is easiest to understand as a three-point shape: volume at Ansible · release 003 at 3/10 (30.0%), efficiency at Open Library · release 016 at 2/5 (40.0%), and resistance at Ansible · release 002 at 0/10 (0.0%). Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The bars say this row has search reach, not settled mastery. The model gets into the right repos often enough, but the repeatability line is still thin.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The useful contrast is between `Scan results miss Package URL (PURL) information in library output` (future-architect/vuls · solved 3/3) and `Consolidate ListMixin into List to Simplify List Model Structure and Maintenance` (internetarchive/openlibrary · solved 2/3). The model reaches both kinds of problems, but only one becomes dependable.

The audit changes how to read Step 3.5 flash 2603: only 37% of initial solved attempts survive, with 46 rejected attempts, while the exported score field stays flat. Treat the wins as leads that need stricter confirmation.

{% include model-audit-card.html %}

Use it when breadth matters more than deterministic replay. It can find openings around Ansible · release 003 at 3/10 (30.0%), but the 24-task reach gap says a second or third run may tell a different story. The 73/453 attempt score is best read as exploration bandwidth: 37 tasks are reachable, but many need retry luck.

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

Step 3.5 flash 2603 的特点是覆盖不窄但波动较大。它能至少一次摸到 37/151 题，但只有 13 题能做到 3/3，因此很大一部分价值来自重试。

最接近的同系参照是排名 #18 的 Step 3.7 flash。和它相比，这一行最终分低 3.79 分，触达题少 6 个，稳定题少 5 个。

这个结果最容易读成三点形状：数量在Ansible 自动化 · release 003，3/10（30.0%），效率在Open Library · release 016，2/5（40.0%），阻力在Ansible 自动化 · release 002，0/10（0.0%）。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这些柱子说明这一行有搜索触达，不等于已经掌握。模型经常能进入正确代码库，但可重复通过的线仍然偏细。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

最有用的对比是 `Library 输出中的扫描结果缺少 Package URL (PURL) 信息`（future-architect/vuls · 3 次中成功 3 次）和 `将 ListMixin 合并到 List 以简化 List 模型结构维护`（internetarchive/openlibrary · 3 次中成功 2 次）：模型都能触达，但只有前者变成可靠结果。

复核改变了 Step 3.5 flash 2603 的读法：初始成功只有 37% 保留下来，46 次被剔除，但当前导出的分数字段没有变化。原始胜利更适合作为线索，需要更严格确认。

{% include model-audit-card.html %}

当你更看重覆盖面而不是确定复现时，它更合适。它能在Ansible 自动化 · release 003，3/10（30.0%）附近找到入口，但 24 题的覆盖-稳定差说明第二、第三次运行可能给出不同结果。73/453 的单次尝试成功数更像探索带宽：37 道题能触达，但很多仍需要重试运气。

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
