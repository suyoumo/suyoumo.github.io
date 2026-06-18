---
layout: model
model_id: qwen-3-5plus
title: "Qwen 3.5 plus on CodeAgentBench"
permalink: /code-agent-bench/models/qwen-3-5plus/
analysis_date: 2026-06-18
rank: 10
model_name: "Qwen 3.5 plus"
model_raw: "qwen3.5-plus"
provider_label: "Qwen"
agent_label: "Qwen"
agent_version: "qwen-cli 0.14.5"
subtitle: "A competitive mid-table result with 51/151 tasks solved at least once and 22/151 solved in all three attempts; strongest around large Python/Django application repairs plus automation and configuration-management work."
subtitle_zh: "这是一个有竞争力的中游结果：151 题中至少一次解出 51 题，三次都解出 22 题；强项主要落在大型 Python/Django 应用修复以及自动化和配置管理类改动。"
final_score: 31.39
solved_attempts: 105
solved_unique_tasks: 51
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "33.8%"
pass_3_rate_pct: "14.6%"
pass_3_count: 22
attempt_score_pct: "23.2%"
tldr:
  - en: "Qwen 3.5 plus is best read as volatile explorer: rank #10, 51 reached tasks, 22 stable solves."
    zh: "Qwen 3.5 plus 更适合读成探索型但波动较大：排名 #10，触达 51 题，稳定解出 22 题。"
  - en: "Best suite signal: Open Library · release 013 at 8/10 (80.0%)."
    zh: "最强 suite 信号：Open Library · release 013，8/10（80.0%）。"
  - en: "Weakest visible area: qutebrowser · release 018 at 0/9 (0.0%)."
    zh: "最弱可见区域：qutebrowser 浏览器 · release 018，0/9（0.0%）。"
  - en: "The Qwen CLI setup is closer to a direct model readout: when it misses, the miss is less hidden behind orchestration."
    zh: "Qwen CLI 更接近直接读模型本身：它失败时，失败也较少被编排层遮住。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "31.39"
    note: "rank #10 of 32"
    note_zh: "32 个模型中排名 #10"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "22"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+29"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "23.2%"
    note: "105/453 solved attempts"
    note_zh: "453 次尝试中成功 105 次"
suite_profile:
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    label_zh: "vuls 漏洞扫描器 · release 012"
    repo: "future-architect/vuls"
    total: 4
    solved: 4
    rate: 100.0
    rate_pct: "100.0%"
    pass3: 2
    note: "Best visible cluster for this row: 4/4 tasks reached."
    note_zh: "这一行最明显的强项簇：4 题中解出 4 题。"
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 8
    rate: 80.0
    rate_pct: "80.0%"
    pass3: 3
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 2
  - suite: release-zh-001-ansible-ansible
    label: "Ansible · release 001"
    label_zh: "Ansible 自动化 · release 001"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 2
  - suite: release-zh-002-ansible-ansible
    label: "Ansible · release 002"
    label_zh: "Ansible 自动化 · release 002"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 2
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
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
    pass3: 1
  - suite: release-zh-006-flipt-io-flipt
    label: "Flipt · release 006"
    label_zh: "Flipt feature flag 服务 · release 006"
    repo: "flipt-io/flipt"
    total: 10
    solved: 2
    rate: 20.0
    rate_pct: "20.0%"
    pass3: 1
audit:
  harness_ok: 105
  reverified_ok: 60
  strict_rejected: 45
  accepted_pct: 57
  rejected_pct: 43
  score_before: "31.39"
  score_after: "31.39"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 60 of 105 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 105 次初始成功中的 60 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Avoid double calculation of loops and delegate_to in TaskExecutor"
    title_zh: "避免在 TaskExecutor 中重复计算 loops 和 delegate_to"
    meta: "ansible/ansible · solved 3/3"
    meta_zh: "ansible/ansible · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-001-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-001-ansible-ansible。"
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
    title: "Unify validation in add_book by removing override, with the sole exception of 'promise items'"
    title_zh: "在 add_book 中通过移除 override 来统一验证，唯一例外是 promise items"
    meta: "internetarchive/openlibrary · solved 1/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-016-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-016-internetarchive-openlibrary。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Configuration Logic for Qt Arguments and Environment Setup Is Overloaded and Hard to Maintain"
    title_zh: "Qt 参数和环境初始化配置逻辑过载且难以维护"
    meta: "qutebrowser/qutebrowser · solved 0/3"
    meta_zh: "qutebrowser/qutebrowser · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-018-qutebrowser-qutebrowser."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-018-qutebrowser-qutebrowser。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "Qwen 3.7 Max (1m)"
    note: "Rank #9 · 31.62 Final Score"
    note_zh: "排名 #9 · Final Score 31.62"
    url: /code-agent-bench/models/qodercli-qwen37max-direct-full453-10c-r1-20260613/
  - label: "One rank below"
    label_zh: "下一名"
    name: "Qwen 3.7 Plus (1m)"
    note: "Rank #11 · 31.21 Final Score"
    note_zh: "排名 #11 · Final Score 31.21"
    url: /code-agent-bench/models/qodercli-qwen37plus-direct-full453-10c-r1-20260615/
  - label: "Same agent"
    label_zh: "同 agent"
    name: "Qwen 3.6 plus"
    note: "Rank #17 · 28.43 Final Score"
    note_zh: "排名 #17 · Final Score 28.43"
    url: /code-agent-bench/models/qwen-3-6plus/
---

<div class="bench-lang-en" markdown="1">

Qwen 3.5 plus is a volatile explorer row around the #10 slot. The useful reading is not just the 31.39 score, but the split between 51 reached tasks and 22 stable solves.

The closest family reference is Qwen 3.7 Max (1m) at rank #9. Compared with that row, this one is 0.23 points behind, with 4 more reached tasks and 3 fewer stable solves.

The volume win is Open Library · release 013 at 8/10 (80.0%), while the cleanest pass-rate spike is vuls · release 012 at 4/4 (100.0%). The warning label is qutebrowser · release 018 at 0/9 (0.0%), so the contrast is not generic strength versus weakness; it is large Python/Django application repairs holding together better than browser/runtime integration around QtWebEngine behavior on this run. The Qwen CLI setup is closer to a direct model readout: when it misses, the miss is less hidden behind orchestration.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

Because this is the Qwen CLI row, the suite shape is unusually direct: strong and weak bars are closer to model behavior than to shell behavior.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

`Avoid double calculation of loops and delegate_to in TaskExecutor` is the clean read of what the model can do directly; `Configuration Logic for Qt Arguments and Environment Setup Is Overloaded and Hard to Maintain` is the corresponding negative read, with less agent machinery to hide the miss.

The audit changes how to read Qwen 3.5 plus: only 57% of initial solved attempts survive, with 45 rejected attempts, while the exported score field stays flat. Treat the wins as leads that need stricter confirmation.

{% include model-audit-card.html %}

As a direct CLI row, it is most valuable for reading the model itself: Open Library · release 013 at 8/10 (80.0%) is the positive sample, and qutebrowser · release 018 at 0/9 (0.0%) is the boundary. The 105/453 attempt score is useful because there is less shell behavior between the model and the verifier result.

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

Qwen 3.5 plus 是一个排名 #10 附近的探索型但波动较大结果。它的重点不只是 31.39 分，而是 51 道触达题和 22 道稳定题之间的差距。

最接近的同系参照是排名 #9 的 Qwen 3.7 Max (1m)。和它相比，这一行最终分低 0.23 分，触达题多 4 个，稳定题少 3 个。

从数量看，主要胜利来自Open Library · release 013，8/10（80.0%）；从通过率看，最干净的高点是vuls 漏洞扫描器 · release 012，4/4（100.0%）。需要警惕的是qutebrowser 浏览器 · release 018，0/9（0.0%），所以这里不是泛泛地说强弱项，而是大型 Python/Django 应用修复在这次运行中比围绕 QtWebEngine 行为的浏览器/runtime 集成更能闭环。Qwen CLI 更接近直接读模型本身：它失败时，失败也较少被编排层遮住。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

因为这是 Qwen CLI 行，suite 形状相对直接：高低柱更接近模型本身，而不是 shell 工作流的效果。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

`避免在 TaskExecutor 中重复计算 loops 和 delegate_to` 是模型直接能力的正面样本；`Qt 参数和环境初始化配置逻辑过载且难以维护` 是相应的反面样本，中间没有太多 agent 编排可以掩盖失败。

复核改变了 Qwen 3.5 plus 的读法：初始成功只有 57% 保留下来，45 次被剔除，但当前导出的分数字段没有变化。原始胜利更适合作为线索，需要更严格确认。

{% include model-audit-card.html %}

作为直接 CLI 行，它最有价值的是读模型本身：Open Library · release 013，8/10（80.0%）是正面样本，qutebrowser 浏览器 · release 018，0/9（0.0%）是边界。105/453 的单次尝试成功数有价值，是因为模型和 verifier 结果之间隔着的 shell 行为更少。

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
