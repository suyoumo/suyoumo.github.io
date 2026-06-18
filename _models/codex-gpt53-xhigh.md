---
layout: model
model_id: codex-gpt53-xhigh
title: "GPT 5.3 codex (xhigh) on CodeAgentBench"
permalink: /code-agent-bench/models/codex-gpt53-xhigh/
analysis_date: 2026-06-18
rank: 4
model_name: "GPT 5.3 codex (xhigh)"
model_raw: "gpt-5.3-codex#effort=xhigh"
provider_label: "OpenAI"
agent_label: "Codex"
agent_version: "codex-cli 0.135.0"
subtitle: "A top-tier result with 57/151 tasks solved at least once and 31/151 solved in all three attempts; strongest around large Python/Django application repairs plus automation and configuration-management work."
subtitle_zh: "这是一个第一梯队结果：151 题中至少一次解出 57 题，三次都解出 31 题；强项主要落在大型 Python/Django 应用修复以及自动化和配置管理类改动。"
final_score: 36.09
solved_attempts: 131
solved_unique_tasks: 57
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "37.7%"
pass_3_rate_pct: "20.5%"
pass_3_count: 31
attempt_score_pct: "28.9%"
tldr:
  - en: "GPT 5.3 codex (xhigh) ranks #4 with a 36.09 Final Score. The headline is 57 reached tasks, but the stability number is 31 pass-in-all-three tasks."
    zh: "GPT 5.3 codex (xhigh) 排名 #4，Final Score 为 36.09。表面信号是 57 道题至少成功一次，稳定性信号是 31 道题三次都成功。"
  - en: "The strongest evidence clusters around large Python/Django application repairs plus automation and configuration-management work."
    zh: "最强证据集中在大型 Python/Django 应用修复以及自动化和配置管理类改动。"
  - en: "The failure shape is mostly Go product plumbing across configuration, storage, and service APIs plus automation and configuration-management work."
    zh: "失败形态主要是横跨配置、存储和服务 API 的 Go 产品工程以及自动化和配置管理类改动。"
  - en: "The Codex run is a useful reference point for what high-consistency, high-token search looks like in this suite."
    zh: "Codex 这一组很适合作为参照：它代表了高一致性、高 token 搜索在这个 suite 里的表现形状。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "36.09"
    note: "rank #4 of 32"
    note_zh: "32 个模型中排名 #4"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "31"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+26"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "28.9%"
    note: "131/453 solved attempts"
    note_zh: "453 次尝试中成功 131 次"
suite_profile:
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 10
    rate: 100.0
    rate_pct: "100.0%"
    pass3: 7
    note: "Best visible cluster for this row: 10/10 tasks reached."
    note_zh: "这一行最明显的强项簇：10 题中解出 10 题。"
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 8
    rate: 80.0
    rate_pct: "80.0%"
    pass3: 5
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    label_zh: "vuls 漏洞扫描器 · release 012"
    repo: "future-architect/vuls"
    total: 4
    solved: 3
    rate: 75.0
    rate_pct: "75.0%"
    pass3: 2
  - suite: release-zh-004-ansible-ansible
    label: "Ansible · release 004"
    label_zh: "Ansible 自动化 · release 004"
    repo: "ansible/ansible"
    total: 3
    solved: 2
    rate: 66.7
    rate_pct: "66.7%"
    pass3: 1
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    label_zh: "vuls 漏洞扫描器 · release 010"
    repo: "future-architect/vuls"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 1
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 3
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
    solved: 2
    rate: 20.0
    rate_pct: "20.0%"
    pass3: 2
audit:
  harness_ok: 131
  reverified_ok: 98
  strict_rejected: 33
  accepted_pct: 75
  rejected_pct: 25
  score_before: "36.09"
  score_after: "36.09"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 98 of 131 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 131 次初始成功中的 98 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Changes to linux.py for setup module to return more relevant information for s390"
    title_zh: "修改 linux.py，使 setup module 在 s390 上返回更相关的信息"
    meta: "ansible/ansible · solved 3/3"
    meta_zh: "ansible/ansible · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-002-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-002-ansible-ansible。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "ansible/ansible-0fd88717c953b92ed8a50495d55e630eb5d59166-vba6da65a0f3baefda7a058ebbd0a8dcafb8512f5"
    title_zh: "ansible/ansible-0fd88717c953b92ed8a50495d55e630eb5d59166-vba6da65a0f3baefda7a058ebbd0a8dcafb8512f5"
    meta: "ansible/ansible · solved 2/3"
    meta_zh: "ansible/ansible · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-001-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-001-ansible-ansible。"
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
    title: "Embedded function in RoleMixin prevents testing and reuse"
    title_zh: "RoleMixin 中的嵌入函数阻碍测试和复用"
    meta: "ansible/ansible · solved 0/3"
    meta_zh: "ansible/ansible · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-003-ansible-ansible."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-003-ansible-ansible。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "GPT 5.4 (xhigh)"
    note: "Rank #3 · 36.79 Final Score"
    note_zh: "排名 #3 · Final Score 36.79"
    url: /code-agent-bench/models/codex-gpt54/
  - label: "One rank below"
    label_zh: "下一名"
    name: "Kimi K2.6(Kimi for Coding)"
    note: "Rank #5 · 35.45 Final Score"
    note_zh: "排名 #5 · Final Score 35.45"
    url: /code-agent-bench/models/kimi-for-coding/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "GPT 5.5 (xhigh)"
    note: "Rank #2 · 36.88 Final Score"
    note_zh: "排名 #2 · Final Score 36.88"
    url: /code-agent-bench/models/codex-gpt55/
---

<div class="bench-lang-en" markdown="1">

GPT 5.3 codex (xhigh) is best read through the gap between reach and repeatability. It reaches 57/151 tasks at least once, but 31/151 tasks survive all three attempts. That gap is the personality of the row: the model can find solutions across a fairly wide surface, but the dependable core is narrower than the headline Pass@3 number.

In leaderboard terms, rank #4 and a 36.09 Final Score put it in direct comparison with nearby models, but the more useful question is where the wins come from. In this run the strongest signal is large Python/Django application repairs plus automation and configuration-management work; the weak side is Go product plumbing across configuration, storage, and service APIs plus automation and configuration-management work. The Codex run is a useful reference point for what high-consistency, high-token search looks like in this suite.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The suite chart is the fastest way to read the model. High bars mean the agent repeatedly found the right subsystem and produced patches the verifier accepted at least once. Low bars are not just misses; they are hints about the task shape that made the model overfit a local edit, stop before the second-order consumer, or fail to keep a multi-package change coherent.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The case notes above keep the article grounded in individual SWE-Bench-Pro instances. A stable 3/3 solve means the task is inside the model's dependable operating region. A 1/3 solve means it can reach the idea, but the path is retry-sensitive. A 0/3 miss is more diagnostic: it marks a task shape where this model-agent pairing did not find a verifier-backed patch in three independent attempts.

The verifier audit block below is included because this row has re-verification data.

{% include model-audit-card.html %}

For practical use, I would treat GPT 5.3 codex (xhigh) as strongest when the task resembles the high-performing suites and weaker when it resembles the low-performing suites. The raw attempt score is 131/453; that is enough signal to compare it with neighboring rows, but not enough to assume the same behavior on every repository family.

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

读 GPT 5.3 codex (xhigh)，最有用的是看“覆盖能力”和“重复稳定性”的差距。它在 151 题中至少一次解出 57 题，但三次尝试都解出的只有 31 题。这个差距就是这一行的性格：模型能在相当宽的任务面上摸到解法，但真正可靠的核心比 Pass@3 的表面数字更窄。

从排行榜数字看，排名 #4、Final Score 36.09 让它可以和附近模型直接比较；但更重要的问题是胜利来自哪里。这次运行最强的信号在大型 Python/Django 应用修复以及自动化和配置管理类改动，弱侧则主要是横跨配置、存储和服务 API 的 Go 产品工程以及自动化和配置管理类改动。Codex 这一组很适合作为参照：它代表了高一致性、高 token 搜索在这个 suite 里的表现形状。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

suite 图是最快的读法。高柱子说明 agent 能反复找到正确子系统，并至少一次产出 verifier 接受的补丁。低柱子不只是失败列表，它们提示了让模型过拟合局部编辑、漏掉第二层消费者，或无法维持跨包改动一致性的任务形状。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

上面的案例把文章拉回到具体 SWE-Bench-Pro instance。3/3 稳定通过说明任务落在模型可靠区；1/3 说明它能摸到思路，但路径依赖重试；0/3 则更有诊断价值，表示这个模型-agent 组合三次独立尝试都没有找到 verifier-backed patch。

下面保留 verifier audit 模块，因为这一行有复核数据。

{% include model-audit-card.html %}

实际使用时，我会把 GPT 5.3 codex (xhigh) 用在更接近高分 suite 的任务上；如果任务形态接近低分 suite，就要更谨慎。它的单次尝试成功数是 131/453，足够用来和邻近模型比较，但不足以推断它在所有 repository family 上都会保持同样表现。

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
