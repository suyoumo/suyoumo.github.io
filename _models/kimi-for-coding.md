---
layout: model
model_id: kimi-for-coding
title: "Kimi K2.6(Kimi for Coding) on CodeAgentBench"
permalink: /code-agent-bench/models/kimi-for-coding/
analysis_date: 2026-06-18
rank: 5
model_name: "Kimi K2.6(Kimi for Coding)"
model_raw: "kimi-code/kimi-for-coding"
provider_label: "Moonshot"
agent_label: "Kimi"
agent_version: "kimi-cli 1.40.0"
subtitle: "A top-tier result with 54/151 tasks solved at least once and 32/151 solved in all three attempts; strongest around automation and configuration-management work plus large Python/Django application repairs."
subtitle_zh: "这是一个第一梯队结果：151 题中至少一次解出 54 题，三次都解出 32 题；强项主要落在自动化和配置管理类改动以及大型 Python/Django 应用修复。"
final_score: 35.45
solved_attempts: 126
solved_unique_tasks: 54
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "35.8%"
pass_3_rate_pct: "21.2%"
pass_3_count: 32
attempt_score_pct: "27.8%"
tldr:
  - en: "Kimi K2.6(Kimi for Coding) ranks #5 with a 35.45 Final Score. The headline is 54 reached tasks, but the stability number is 32 pass-in-all-three tasks."
    zh: "Kimi K2.6(Kimi for Coding) 排名 #5，Final Score 为 35.45。表面信号是 54 道题至少成功一次，稳定性信号是 32 道题三次都成功。"
  - en: "The strongest evidence clusters around automation and configuration-management work plus large Python/Django application repairs."
    zh: "最强证据集中在自动化和配置管理类改动以及大型 Python/Django 应用修复。"
  - en: "The failure shape is mostly Go product plumbing across configuration, storage, and service APIs plus large Python/Django application repairs."
    zh: "失败形态主要是横跨配置、存储和服务 API 的 Go 产品工程以及大型 Python/Django 应用修复。"
  - en: "The row should be read as the behavior of this model inside its specific coding-agent shell."
    zh: "这一行应读作该模型在特定 coding-agent shell 里的行为。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "35.45"
    note: "rank #5 of 32"
    note_zh: "32 个模型中排名 #5"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "32"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+22"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "27.8%"
    note: "126/453 solved attempts"
    note_zh: "453 次尝试中成功 126 次"
suite_profile:
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    label_zh: "vuls 漏洞扫描器 · release 012"
    repo: "future-architect/vuls"
    total: 4
    solved: 4
    rate: 100.0
    rate_pct: "100.0%"
    pass3: 3
    note: "Best visible cluster for this row: 4/4 tasks reached."
    note_zh: "这一行最明显的强项簇：4 题中解出 4 题。"
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 9
    rate: 90.0
    rate_pct: "90.0%"
    pass3: 5
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    label_zh: "vuls 漏洞扫描器 · release 010"
    repo: "future-architect/vuls"
    total: 10
    solved: 7
    rate: 70.0
    rate_pct: "70.0%"
    pass3: 3
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 7
    rate: 70.0
    rate_pct: "70.0%"
    pass3: 4
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 5
  - suite: release-zh-011-future-architect-vuls
    label: "vuls · release 011"
    label_zh: "vuls 漏洞扫描器 · release 011"
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
  harness_ok: 126
  reverified_ok: 126
  strict_rejected: 0
  accepted_pct: 100
  rejected_pct: 0
  score_before: "35.45"
  score_after: "35.45"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 126 of 126 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 126 次初始成功中的 126 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Forked output from ‘Display.display’ is unreliable and exposes shutdown deadlock risk"
    title_zh: "Forked output from ‘Display.display’ is unreliable and exposes shutdown deadlock risk"
    meta: "ansible/ansible · solved 3/3"
    meta_zh: "ansible/ansible · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-003-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-003-ansible-ansible。"
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
    title: "Predictable no_log sanitization for keys and strings"
    title_zh: "针对 keys 和 strings 的可预测 no_log sanitization"
    meta: "ansible/ansible · solved 1/3"
    meta_zh: "ansible/ansible · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-003-ansible-ansible."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-003-ansible-ansible。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Embedded function in RoleMixin prevents testing and reuse"
    title_zh: "RoleMixin 中的嵌入函数阻碍测试和复用"
    meta: "ansible/ansible · solved 0/3"
    meta_zh: "ansible/ansible · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-003-ansible-ansible."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-003-ansible-ansible。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "GPT 5.3 codex (xhigh)"
    note: "Rank #4 · 36.09 Final Score"
    note_zh: "排名 #4 · Final Score 36.09"
    url: /code-agent-bench/models/codex-gpt53-xhigh/
  - label: "One rank below"
    label_zh: "下一名"
    name: "MiniMax M3"
    note: "Rank #6 · 33.91 Final Score"
    note_zh: "排名 #6 · Final Score 33.91"
    url: /code-agent-bench/models/opencode-minimax-m3/
---

<div class="bench-lang-en" markdown="1">

Kimi K2.6(Kimi for Coding) is best read through the gap between reach and repeatability. It reaches 54/151 tasks at least once, but 32/151 tasks survive all three attempts. That gap is the personality of the row: the model can find solutions across a fairly wide surface, but the dependable core is narrower than the headline Pass@3 number.

In leaderboard terms, rank #5 and a 35.45 Final Score put it in direct comparison with nearby models, but the more useful question is where the wins come from. In this run the strongest signal is automation and configuration-management work plus large Python/Django application repairs; the weak side is Go product plumbing across configuration, storage, and service APIs plus large Python/Django application repairs. The row should be read as the behavior of this model inside its specific coding-agent shell.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The suite chart is the fastest way to read the model. High bars mean the agent repeatedly found the right subsystem and produced patches the verifier accepted at least once. Low bars are not just misses; they are hints about the task shape that made the model overfit a local edit, stop before the second-order consumer, or fail to keep a multi-package change coherent.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The case notes above keep the article grounded in individual SWE-Bench-Pro instances. A stable 3/3 solve means the task is inside the model's dependable operating region. A 1/3 solve means it can reach the idea, but the path is retry-sensitive. A 0/3 miss is more diagnostic: it marks a task shape where this model-agent pairing did not find a verifier-backed patch in three independent attempts.

The verifier audit block below is included because this row has re-verification data.

{% include model-audit-card.html %}

For practical use, I would treat Kimi K2.6(Kimi for Coding) as strongest when the task resembles the high-performing suites and weaker when it resembles the low-performing suites. The raw attempt score is 126/453; that is enough signal to compare it with neighboring rows, but not enough to assume the same behavior on every repository family.

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

读 Kimi K2.6(Kimi for Coding)，最有用的是看“覆盖能力”和“重复稳定性”的差距。它在 151 题中至少一次解出 54 题，但三次尝试都解出的只有 32 题。这个差距就是这一行的性格：模型能在相当宽的任务面上摸到解法，但真正可靠的核心比 Pass@3 的表面数字更窄。

从排行榜数字看，排名 #5、Final Score 35.45 让它可以和附近模型直接比较；但更重要的问题是胜利来自哪里。这次运行最强的信号在自动化和配置管理类改动以及大型 Python/Django 应用修复，弱侧则主要是横跨配置、存储和服务 API 的 Go 产品工程以及大型 Python/Django 应用修复。这一行应读作该模型在特定 coding-agent shell 里的行为。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

suite 图是最快的读法。高柱子说明 agent 能反复找到正确子系统，并至少一次产出 verifier 接受的补丁。低柱子不只是失败列表，它们提示了让模型过拟合局部编辑、漏掉第二层消费者，或无法维持跨包改动一致性的任务形状。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

上面的案例把文章拉回到具体 SWE-Bench-Pro instance。3/3 稳定通过说明任务落在模型可靠区；1/3 说明它能摸到思路，但路径依赖重试；0/3 则更有诊断价值，表示这个模型-agent 组合三次独立尝试都没有找到 verifier-backed patch。

下面保留 verifier audit 模块，因为这一行有复核数据。

{% include model-audit-card.html %}

实际使用时，我会把 Kimi K2.6(Kimi for Coding) 用在更接近高分 suite 的任务上；如果任务形态接近低分 suite，就要更谨慎。它的单次尝试成功数是 126/453，足够用来和邻近模型比较，但不足以推断它在所有 repository family 上都会保持同样表现。

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
