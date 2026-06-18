---
layout: model
model_id: qwen-3-6plus
title: "Qwen 3.6 plus on CodeAgentBench"
permalink: /code-agent-bench/models/qwen-3-6plus/
analysis_date: 2026-06-18
rank: 17
model_name: "Qwen 3.6 plus"
model_raw: "qwen3.6-plus"
provider_label: "Qwen"
agent_label: "Qwen"
agent_version: "qwen-cli 0.14.5"
subtitle: "A lower-table result with a few useful bright spots: 44/151 tasks solved at least once, 18/151 solved in all three attempts, with the clearest wins around large Python/Django application repairs plus automation and configuration-management work."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 44 题，三次都解出 18 题；强项主要落在大型 Python/Django 应用修复以及自动化和配置管理类改动。"
final_score: 28.43
solved_attempts: 95
solved_unique_tasks: 44
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "29.1%"
pass_3_rate_pct: "11.9%"
pass_3_count: 18
attempt_score_pct: "21.0%"
tldr:
  - en: "Qwen 3.6 plus is best read as volatile explorer: rank #17, 44 reached tasks, 18 stable solves."
    zh: "Qwen 3.6 plus 更适合读成探索型但波动较大：排名 #17，触达 44 题，稳定解出 18 题。"
  - en: "Best suite signal: Open Library · release 015 at 7/10 (70.0%)."
    zh: "最强 suite 信号：Open Library · release 015，7/10（70.0%）。"
  - en: "Weakest visible area: Flipt · release 005 at 0/10 (0.0%)."
    zh: "最弱可见区域：Flipt feature flag 服务 · release 005，0/10（0.0%）。"
  - en: "The Qwen CLI setup is closer to a direct model readout: when it misses, the miss is less hidden behind orchestration."
    zh: "Qwen CLI 更接近直接读模型本身：它失败时，失败也较少被编排层遮住。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "28.43"
    note: "rank #17 of 32"
    note_zh: "32 个模型中排名 #17"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "18"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+26"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "21.0%"
    note: "95/453 solved attempts"
    note_zh: "453 次尝试中成功 95 次"
suite_profile:
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    label_zh: "vuls 漏洞扫描器 · release 012"
    repo: "future-architect/vuls"
    total: 4
    solved: 3
    rate: 75.0
    rate_pct: "75.0%"
    pass3: 3
    note: "Best visible cluster for this row: 3/4 tasks reached."
    note_zh: "这一行最明显的强项簇：4 题中解出 3 题。"
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 7
    rate: 70.0
    rate_pct: "70.0%"
    pass3: 1
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 2
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 4
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 0
  - suite: release-zh-016-internetarchive-openlibrary
    label: "Open Library · release 016"
    label_zh: "Open Library · release 016"
    repo: "internetarchive/openlibrary"
    total: 5
    solved: 2
    rate: 40.0
    rate_pct: "40.0%"
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
  - suite: release-zh-002-ansible-ansible
    label: "Ansible · release 002"
    label_zh: "Ansible 自动化 · release 002"
    repo: "ansible/ansible"
    total: 10
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 1
audit:
  harness_ok: 95
  reverified_ok: 95
  strict_rejected: 0
  accepted_pct: 100
  rejected_pct: 0
  score_before: "28.43"
  score_after: "28.43"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 95 of 95 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 95 次初始成功中的 95 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
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
    title: "Inconsistency in author identifier generation when comparing editions."
    title_zh: "比较 editions 时 author identifier 生成不一致。"
    meta: "internetarchive/openlibrary · solved 2/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-013-internetarchive-openlibrary。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Add per-package modularitylabel field for Red Hat–based systems"
    title_zh: "为 Red Hat-based systems 添加 per-package modularitylabel field"
    meta: "future-architect/vuls · solved 1/3"
    meta_zh: "future-architect/vuls · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-011-future-architect-vuls."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-011-future-architect-vuls。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Inefficient and Unstructured Storage of User-Specific Properties"
    title_zh: "用户特定属性的存储低效且缺少结构化"
    meta: "navidrome/navidrome · solved 0/3"
    meta_zh: "navidrome/navidrome · 3 次中成功 0 次"
    note: "Verifier pattern: blocked-suspicious-patch. Suite: release-zh-017-navidrome-navidrome."
    note_zh: "Verifier 信号：blocked-suspicious-patch。Suite：release-zh-017-navidrome-navidrome。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "GLM 5 turbo"
    note: "Rank #16 · 28.95 Final Score"
    note_zh: "排名 #16 · Final Score 28.95"
    url: /code-agent-bench/models/opencode-glm5turbo/
  - label: "One rank below"
    label_zh: "下一名"
    name: "Step 3.7 flash"
    note: "Rank #18 · 28.01 Final Score"
    note_zh: "排名 #18 · Final Score 28.01"
    url: /code-agent-bench/models/opencode-stepfun37-flash/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "Qwen 3.7 Max (1m)"
    note: "Rank #9 · 31.62 Final Score"
    note_zh: "排名 #9 · Final Score 31.62"
    url: /code-agent-bench/models/qodercli-qwen37max-direct-full453-10c-r1-20260613/
---

<div class="bench-lang-en" markdown="1">

Qwen 3.6 plus is broad but volatile. It can touch 44/151 tasks, yet only 18 become 3/3 solves, so much of its value comes from retrying the same benchmark surface.

The closest family reference is Qwen 3.7 Max (1m) at rank #9. Compared with that row, this one is 3.19 points behind, with 3 fewer reached tasks and 7 fewer stable solves.

The suite split is asymmetric: Open Library · release 015 at 7/10 (70.0%) supplies the main body of wins, vuls · release 012 at 3/4 (75.0%) supplies the clean spike, and Flipt · release 005 at 0/10 (0.0%) is where that pattern stops. The Qwen CLI setup is closer to a direct model readout: when it misses, the miss is less hidden behind orchestration.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

Read the bars as a volatility chart: Open Library · release 015 at 7/10 (70.0%) shows the upside, while the Pass^3 gap explains why the same row can feel much weaker on a single rerun.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The useful contrast is between `Password lookup plugin ignores key=value parameters such as seed, resulting in non-deterministic output` (ansible/ansible · solved 3/3) and `Inconsistency in author identifier generation when comparing editions.` (internetarchive/openlibrary · solved 2/3). The model reaches both kinds of problems, but only one becomes dependable.

The verifier audit keeps 95/95 solved attempts for Qwen 3.6 plus, so the interesting question is not score inflation; it is where the model repeatedly finds the same kind of patch.

{% include model-audit-card.html %}

Use it when breadth matters more than deterministic replay. It can find openings around Open Library · release 015 at 7/10 (70.0%), but the 26-task reach gap says a second or third run may tell a different story. The 95/453 attempt score is best read as exploration bandwidth: 44 tasks are reachable, but many need retry luck.

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

Qwen 3.6 plus 的特点是覆盖不窄但波动较大。它能至少一次摸到 44/151 题，但只有 18 题能做到 3/3，因此很大一部分价值来自重试。

最接近的同系参照是排名 #9 的 Qwen 3.7 Max (1m)。和它相比，这一行最终分低 3.19 分，触达题少 3 个，稳定题少 7 个。

suite 分布是不对称的：Open Library · release 015，7/10（70.0%）贡献主要胜利，vuls 漏洞扫描器 · release 012，3/4（75.0%）贡献最干净高点，而Flipt feature flag 服务 · release 005，0/10（0.0%）标出这种模式停止的地方。Qwen CLI 更接近直接读模型本身：它失败时，失败也较少被编排层遮住。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这张图更像波动率图：Open Library · release 015，7/10（70.0%）展示上限，而 Pass^3 落差解释了为什么单次重跑会显得弱很多。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

最有用的对比是 `Password lookup plugin 忽略 seed 等 key=value 参数，导致输出非确定性`（ansible/ansible · 3 次中成功 3 次）和 `比较 editions 时 author identifier 生成不一致。`（internetarchive/openlibrary · 3 次中成功 2 次）：模型都能触达，但只有前者变成可靠结果。

Qwen 3.6 plus 的复核保留了 95 次成功中的 95 次，所以重点不是分数膨胀，而是模型在哪些地方能反复找到同类补丁。

{% include model-audit-card.html %}

当你更看重覆盖面而不是确定复现时，它更合适。它能在Open Library · release 015，7/10（70.0%）附近找到入口，但 26 题的覆盖-稳定差说明第二、第三次运行可能给出不同结果。95/453 的单次尝试成功数更像探索带宽：44 道题能触达，但很多仍需要重试运气。

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
