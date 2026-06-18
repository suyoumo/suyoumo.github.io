---
layout: model
model_id: opencode-stepfun35
title: "Step 3.5 flash on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-stepfun35/
analysis_date: 2026-06-18
rank: 31
model_name: "Step 3.5 flash"
model_raw: "stepfun/step-3.5-flash"
provider_label: "StepFun"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A lower-table result with a few useful bright spots: 21/151 tasks solved at least once, 8/151 solved in all three attempts, with the clearest wins around automation and configuration-management work plus Go product plumbing across configuration, storage, and service APIs."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 21 题，三次都解出 8 题；强项主要落在自动化和配置管理类改动以及横跨配置、存储和服务 API 的 Go 产品工程。"
final_score: 17.04
solved_attempts: 42
solved_unique_tasks: 21
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "13.9%"
pass_3_rate_pct: "5.3%"
pass_3_count: 8
attempt_score_pct: "9.3%"
tldr:
  - en: "Step 3.5 flash ranks #31 with a 17.04 Final Score. The headline is 21 reached tasks, but the stability number is 8 pass-in-all-three tasks."
    zh: "Step 3.5 flash 排名 #31，Final Score 为 17.04。表面信号是 21 道题至少成功一次，稳定性信号是 8 道题三次都成功。"
  - en: "The strongest evidence clusters around automation and configuration-management work plus Go product plumbing across configuration, storage, and service APIs."
    zh: "最强证据集中在自动化和配置管理类改动以及横跨配置、存储和服务 API 的 Go 产品工程。"
  - en: "The failure shape is mostly Go product plumbing across configuration, storage, and service APIs plus large Python/Django application repairs."
    zh: "失败形态主要是横跨配置、存储和服务 API 的 Go 产品工程以及大型 Python/Django 应用修复。"
  - en: "The OpenCode run is more sensitive to the underlying model family: the same harness can look sharp or brittle depending on where the model puts its search budget."
    zh: "OpenCode 这组更能体现底层模型家族差异：同一套 harness 下，模型如何分配搜索预算会直接决定它显得锋利还是脆弱。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "17.04"
    note: "rank #31 of 32"
    note_zh: "32 个模型中排名 #31"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "8"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+13"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "9.3%"
    note: "42/453 solved attempts"
    note_zh: "453 次尝试中成功 42 次"
suite_profile:
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    label_zh: "vuls 漏洞扫描器 · release 012"
    repo: "future-architect/vuls"
    total: 4
    solved: 2
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 2
    note: "Best visible cluster for this row: 2/4 tasks reached."
    note_zh: "这一行最明显的强项簇：4 题中解出 2 题。"
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
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
    pass3: 0
  - suite: release-zh-007-flipt-io-flipt
    label: "Flipt · release 007"
    label_zh: "Flipt feature flag 服务 · release 007"
    repo: "flipt-io/flipt"
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
    solved: 3
    rate: 30.0
    rate_pct: "30.0%"
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
audit:
  harness_ok: 42
  reverified_ok: 39
  strict_rejected: 3
  accepted_pct: 93
  rejected_pct: 7
  score_before: "17.04"
  score_after: "17.04"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 39 of 42 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 42 次初始成功中的 39 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Password lookup plugin ignores key=value parameters such as seed, resulting in non-deterministic output"
    title_zh: "Password lookup plugin 忽略 seed 等 key=value 参数，导致输出非确定性"
    meta: "ansible/ansible · solved 3/3"
    meta_zh: "ansible/ansible · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-003-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-003-ansible-ansible。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "ansible/ansible-395e5e20fab9cad517243372fa3c3c5d9e09ab2a-v7eee2454f617569fd6889f2211f75bc02a35f9f8"
    title_zh: "ansible/ansible-395e5e20fab9cad517243372fa3c3c5d9e09ab2a-v7eee2454f617569fd6889f2211f75bc02a35f9f8"
    meta: "ansible/ansible · solved 2/3"
    meta_zh: "ansible/ansible · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-001-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-001-ansible-ansible。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Forked output from ‘Display.display’ is unreliable and exposes shutdown deadlock risk"
    title_zh: "Forked output from ‘Display.display’ is unreliable and exposes shutdown deadlock risk"
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
    name: "doubao seed 2.0 code"
    note: "Rank #30 · 19.42 Final Score"
    note_zh: "排名 #30 · Final Score 19.42"
    url: /code-agent-bench/models/opencode-doubao-2-code/
  - label: "One rank below"
    label_zh: "下一名"
    name: "DeepSeek v4 flash (max)"
    note: "Rank #32 · 16.22 Final Score"
    note_zh: "排名 #32 · Final Score 16.22"
    url: /code-agent-bench/models/deepseek-tui-v4-flash-max/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "Step 3.7 flash"
    note: "Rank #18 · 28.01 Final Score"
    note_zh: "排名 #18 · Final Score 28.01"
    url: /code-agent-bench/models/opencode-stepfun37-flash/
---

<div class="bench-lang-en" markdown="1">

Step 3.5 flash is best read through the gap between reach and repeatability. It reaches 21/151 tasks at least once, but 8/151 tasks survive all three attempts. That gap is the personality of the row: the model can find solutions across a fairly wide surface, but the dependable core is narrower than the headline Pass@3 number.

In leaderboard terms, rank #31 and a 17.04 Final Score put it in direct comparison with nearby models, but the more useful question is where the wins come from. In this run the strongest signal is automation and configuration-management work plus Go product plumbing across configuration, storage, and service APIs; the weak side is Go product plumbing across configuration, storage, and service APIs plus large Python/Django application repairs. The OpenCode run is more sensitive to the underlying model family: the same harness can look sharp or brittle depending on where the model puts its search budget.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The suite chart is the fastest way to read the model. High bars mean the agent repeatedly found the right subsystem and produced patches the verifier accepted at least once. Low bars are not just misses; they are hints about the task shape that made the model overfit a local edit, stop before the second-order consumer, or fail to keep a multi-package change coherent.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The case notes above keep the article grounded in individual SWE-Bench-Pro instances. A stable 3/3 solve means the task is inside the model's dependable operating region. A 1/3 solve means it can reach the idea, but the path is retry-sensitive. A 0/3 miss is more diagnostic: it marks a task shape where this model-agent pairing did not find a verifier-backed patch in three independent attempts.

The verifier audit block below is included because this row has re-verification data.

{% include model-audit-card.html %}

For practical use, I would treat Step 3.5 flash as strongest when the task resembles the high-performing suites and weaker when it resembles the low-performing suites. The raw attempt score is 42/453; that is enough signal to compare it with neighboring rows, but not enough to assume the same behavior on every repository family.

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

读 Step 3.5 flash，最有用的是看“覆盖能力”和“重复稳定性”的差距。它在 151 题中至少一次解出 21 题，但三次尝试都解出的只有 8 题。这个差距就是这一行的性格：模型能在相当宽的任务面上摸到解法，但真正可靠的核心比 Pass@3 的表面数字更窄。

从排行榜数字看，排名 #31、Final Score 17.04 让它可以和附近模型直接比较；但更重要的问题是胜利来自哪里。这次运行最强的信号在自动化和配置管理类改动以及横跨配置、存储和服务 API 的 Go 产品工程，弱侧则主要是横跨配置、存储和服务 API 的 Go 产品工程以及大型 Python/Django 应用修复。OpenCode 这组更能体现底层模型家族差异：同一套 harness 下，模型如何分配搜索预算会直接决定它显得锋利还是脆弱。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

suite 图是最快的读法。高柱子说明 agent 能反复找到正确子系统，并至少一次产出 verifier 接受的补丁。低柱子不只是失败列表，它们提示了让模型过拟合局部编辑、漏掉第二层消费者，或无法维持跨包改动一致性的任务形状。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

上面的案例把文章拉回到具体 SWE-Bench-Pro instance。3/3 稳定通过说明任务落在模型可靠区；1/3 说明它能摸到思路，但路径依赖重试；0/3 则更有诊断价值，表示这个模型-agent 组合三次独立尝试都没有找到 verifier-backed patch。

下面保留 verifier audit 模块，因为这一行有复核数据。

{% include model-audit-card.html %}

实际使用时，我会把 Step 3.5 flash 用在更接近高分 suite 的任务上；如果任务形态接近低分 suite，就要更谨慎。它的单次尝试成功数是 42/453，足够用来和邻近模型比较，但不足以推断它在所有 repository family 上都会保持同样表现。

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
