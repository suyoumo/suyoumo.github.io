---
layout: model
model_id: deepseek-tui-v4-flash-max
title: "DeepSeek v4 flash (max) on CodeAgentBench"
permalink: /code-agent-bench/models/deepseek-tui-v4-flash-max/
analysis_date: 2026-06-18
rank: 32
model_name: "DeepSeek v4 flash (max)"
model_raw: "deepseek-v4-flash#effort=max"
provider_label: "DeepSeek"
agent_label: "deepseek-tui"
agent_version: "deepseek-tui v0.8.39"
subtitle: "A lower-table result with a few useful bright spots: 15/151 tasks solved at least once, 11/151 solved in all three attempts, with the clearest wins around automation and configuration-management work plus Go product plumbing across configuration, storage, and service APIs."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 15 题，三次都解出 11 题；强项主要落在自动化和配置管理类改动以及横跨配置、存储和服务 API 的 Go 产品工程。"
final_score: 16.22
solved_attempts: 38
solved_unique_tasks: 15
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "9.9%"
pass_3_rate_pct: "7.3%"
pass_3_count: 11
attempt_score_pct: "8.4%"
tldr:
  - en: "DeepSeek v4 flash (max) is best read as narrow but repeatable: rank #32, 15 reached tasks, 11 stable solves."
    zh: "DeepSeek v4 flash (max) 更适合读成覆盖窄但命中后较稳定：排名 #32，触达 15 题，稳定解出 11 题。"
  - en: "Best suite signal: Ansible · release 003 at 4/10 (40.0%)."
    zh: "最强 suite 信号：Ansible 自动化 · release 003，4/10（40.0%）。"
  - en: "Weakest visible area: Flipt · release 005 at 0/10 (0.0%)."
    zh: "最弱可见区域：Flipt feature flag 服务 · release 005，0/10（0.0%）。"
  - en: "The deepseek-tui result is partly a shell-integration test; the low coverage matters as much as the model score itself."
    zh: "deepseek-tui 结果有一部分是在测试 shell 集成；低覆盖本身和模型分数一样值得注意。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "16.22"
    note: "rank #32 of 32"
    note_zh: "32 个模型中排名 #32"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "11"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+4"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "8.4%"
    note: "38/453 solved attempts"
    note_zh: "453 次尝试中成功 38 次"
suite_profile:
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 4
    note: "Best visible cluster for this row: 4/10 tasks reached."
    note_zh: "这一行最明显的强项簇：10 题中解出 4 题。"
  - suite: release-zh-007-flipt-io-flipt
    label: "Flipt · release 007"
    label_zh: "Flipt feature flag 服务 · release 007"
    repo: "flipt-io/flipt"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 2
    note: "Best visible cluster for this row: 4/10 tasks reached."
    note_zh: "这一行最明显的强项簇：10 题中解出 4 题。"
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
    solved: 2
    rate: 20.0
    rate_pct: "20.0%"
    pass3: 1
  - suite: release-zh-016-internetarchive-openlibrary
    label: "Open Library · release 016"
    label_zh: "Open Library · release 016"
    repo: "internetarchive/openlibrary"
    total: 5
    solved: 1
    rate: 20.0
    rate_pct: "20.0%"
    pass3: 1
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
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    label_zh: "vuls 漏洞扫描器 · release 010"
    repo: "future-architect/vuls"
    total: 10
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: localized Go security-scanner changes resisted this model-agent pairing."
    note_zh: "弱项簇：边界相对清楚的 Go 漏洞扫描器改动对这个模型-agent 组合不友好。"
  - suite: release-zh-011-future-architect-vuls
    label: "vuls · release 011"
    label_zh: "vuls 漏洞扫描器 · release 011"
    repo: "future-architect/vuls"
    total: 10
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: localized Go security-scanner changes resisted this model-agent pairing."
    note_zh: "弱项簇：边界相对清楚的 Go 漏洞扫描器改动对这个模型-agent 组合不友好。"
audit:
  harness_ok: 38
  reverified_ok: 24
  strict_rejected: 14
  accepted_pct: 63
  rejected_pct: 37
  score_before: "16.22"
  score_after: "16.22"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 24 of 38 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 38 次初始成功中的 24 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "TypeError combining VarsWithSources and dict in combine_vars"
    title_zh: "combine_vars 中组合 VarsWithSources 和 dict 时出现 TypeError"
    meta: "ansible/ansible · solved 3/3"
    meta_zh: "ansible/ansible · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-001-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-001-ansible-ansible。"
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
    title: "Namespace version is empty and ETag is not surfaced in filesystem snapshots"
    title_zh: "Namespace version 为空，并且文件系统快照中没有暴露 ETag"
    meta: "flipt-io/flipt · solved 1/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-007-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-007-flipt-io-flipt。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "iptables chain creation does not behave like the command"
    title_zh: "iptables chain creation 的行为与命令行 iptables -N 不一致"
    meta: "ansible/ansible · solved 0/3"
    meta_zh: "ansible/ansible · 3 次中成功 0 次"
    note: "Verifier pattern: no-op-patch. Suite: release-zh-003-ansible-ansible."
    note_zh: "Verifier 信号：no-op-patch。Suite：release-zh-003-ansible-ansible。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "Step 3.5 flash"
    note: "Rank #31 · 17.04 Final Score"
    note_zh: "排名 #31 · Final Score 17.04"
    url: /code-agent-bench/models/opencode-stepfun35/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "DeepSeek v4 pro (max)"
    note: "Rank #7 · 32.95 Final Score"
    note_zh: "排名 #7 · Final Score 32.95"
    url: /code-agent-bench/models/opencode-deepseek-v4-flash-max/
---

<div class="bench-lang-en" markdown="1">

DeepSeek v4 flash (max) is a narrow but repeatable result. It reaches only 15/151 tasks, but 11 of those are stable 3/3 solves, so the successes are less random than the rank suggests.

The closest family reference is DeepSeek v4 pro (max) at rank #7. Compared with that row, this one is 16.73 points behind, with 33 fewer reached tasks and 17 fewer stable solves.

Most of the positive signal concentrates in Ansible · release 003 at 4/10 (40.0%). The opposing read is Flipt · release 005 at 0/10 (0.0%), which keeps the row from looking like a generalist. The deepseek-tui result is partly a shell-integration test; the low coverage matters as much as the model score itself.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

Read the bars as a small island map. There are not many islands, but the ones that appear are less noisy than the rank alone suggests.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The case strip is small but revealing: `TypeError combining VarsWithSources and dict in combine_vars` is the kind of island this row can hold, while `iptables chain creation does not behave like the command` (ansible/ansible · solved 0/3) marks where the island ends.

The audit changes how to read DeepSeek v4 flash (max): only 63% of initial solved attempts survive, with 14 rejected attempts, while the exported score field stays flat. Treat the wins as leads that need stricter confirmation.

{% include model-audit-card.html %}

Treat it as a narrow specialist. The wins around Ansible · release 003 at 4/10 (40.0%) are real, but the page does not support extrapolating that behavior into Flipt · release 005 at 0/10 (0.0%). The 38/453 attempt score is low in absolute terms, but the stable subset is coherent enough to be worth separating from the misses.

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

DeepSeek v4 flash (max) 更像一个覆盖窄但命中后较稳定的结果。它只覆盖到 15/151 题，但其中 11 题是 3/3 稳定通过，所以成功并不完全是偶然命中。

最接近的同系参照是排名 #7 的 DeepSeek v4 pro (max)。和它相比，这一行最终分低 16.73 分，触达题少 33 个，稳定题少 17 个。

正面信号大多集中在Ansible 自动化 · release 003，4/10（40.0%）。反向读法是Flipt feature flag 服务 · release 005，0/10（0.0%），它让这一行看起来不像通用型。deepseek-tui 结果有一部分是在测试 shell 集成；低覆盖本身和模型分数一样值得注意。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这张图更像一张小岛地图：岛不多，但出现的那些并不只是随机噪声，不能只按低排名理解。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

案例条虽然窄，但很有信息量：`combine_vars 中组合 VarsWithSources 和 dict 时出现 TypeError` 是这一行守得住的小岛，而 `iptables chain creation 的行为与命令行 iptables -N 不一致`（ansible/ansible · 3 次中成功 0 次）标出了边界。

复核改变了 DeepSeek v4 flash (max) 的读法：初始成功只有 63% 保留下来，14 次被剔除，但当前导出的分数字段没有变化。原始胜利更适合作为线索，需要更严格确认。

{% include model-audit-card.html %}

更适合把它当窄域专门型。Ansible 自动化 · release 003，4/10（40.0%）附近的胜利是真实的，但这页并不支持把这种行为外推到Flipt feature flag 服务 · release 005，0/10（0.0%）。38/453 的单次尝试成功数绝对值不高，但稳定子集足够成形，值得和失败面分开看。

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
