---
layout: model
model_id: qoder-qwen35-plus-direct-20260612
title: "Qwen 3.5 plus (180k) on CodeAgentBench"
permalink: /code-agent-bench/models/qoder-qwen35-plus-direct-20260612/
analysis_date: 2026-06-18
rank: 21
model_name: "Qwen 3.5 plus (180k)"
model_raw: "qwen3.5-plus-cp#context-window=180000"
provider_label: "Qwen"
agent_label: "Qoder"
agent_version: "qodercli 1.0.14"
subtitle: "A lower-table result with a few useful bright spots: 41/151 tasks solved at least once, 14/151 solved in all three attempts, with the clearest wins around large Python/Django application repairs plus localized Go security-scanner changes."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 41 题，三次都解出 14 题；强项主要落在大型 Python/Django 应用修复以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 25.91
solved_attempts: 83
solved_unique_tasks: 41
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "27.2%"
pass_3_rate_pct: "9.3%"
pass_3_count: 14
attempt_score_pct: "18.3%"
tldr:
  - en: "Qwen 3.5 plus (180k) is best read as wide but retry-sensitive: rank #21, 41 reached tasks, 14 stable solves."
    zh: "Qwen 3.5 plus (180k) 更适合读成覆盖不窄但依赖重试：排名 #21，触达 41 题，稳定解出 14 题。"
  - en: "Best suite signal: Open Library · release 013 at 6/10 (60.0%)."
    zh: "最强 suite 信号：Open Library · release 013，6/10（60.0%）。"
  - en: "Weakest visible area: Flipt · release 006 at 0/10 (0.0%)."
    zh: "最弱可见区域：Flipt feature flag 服务 · release 006，0/10（0.0%）。"
  - en: "Qoder adds more workflow structure around the model, so its stable wins should be read as model-plus-shell behavior."
    zh: "Qoder 给模型外面加了更强的工作流结构，因此稳定胜利更适合读成 model-plus-shell 的组合效果。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "25.91"
    note: "rank #21 of 32"
    note_zh: "32 个模型中排名 #21"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "14"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+27"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "18.3%"
    note: "83/453 solved attempts"
    note_zh: "453 次尝试中成功 83 次"
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
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 2
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    label_zh: "vuls 漏洞扫描器 · release 010"
    repo: "future-architect/vuls"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 2
  - suite: release-zh-011-future-architect-vuls
    label: "vuls · release 011"
    label_zh: "vuls 漏洞扫描器 · release 011"
    repo: "future-architect/vuls"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 0
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 0
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
  - suite: release-zh-001-ansible-ansible
    label: "Ansible · release 001"
    label_zh: "Ansible 自动化 · release 001"
    repo: "ansible/ansible"
    total: 10
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 1
audit:
  harness_ok: 83
  reverified_ok: 55
  strict_rejected: 28
  accepted_pct: 66
  rejected_pct: 34
  score_before: "25.91"
  score_after: "25.91"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 55 of 83 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 83 次初始成功中的 55 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Feature Request: Add flag key to batch evaluation response"
    title_zh: "Feature Request: Add flag key to batch evaluation response"
    meta: "flipt-io/flipt · solved 3/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-007-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-007-flipt-io-flipt。"
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
    title: "Author Import System Cannot Utilize External Identifiers for Matching"
    title_zh: "作者导入系统无法利用外部标识符进行匹配"
    meta: "internetarchive/openlibrary · solved 1/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-013-internetarchive-openlibrary。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Scan summary omits OS End‑of‑Life (EOL) warnings; no EOL lookup or centralized version parsing."
    title_zh: "扫描摘要遗漏 OS End-of-Life（EOL）警告；缺少 EOL 查询和集中式版本解析。"
    meta: "future-architect/vuls · solved 0/3"
    meta_zh: "future-architect/vuls · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-010-future-architect-vuls."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-010-future-architect-vuls。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "MiMo v2.5"
    note: "Rank #20 · 27.04 Final Score"
    note_zh: "排名 #20 · Final Score 27.04"
    url: /code-agent-bench/models/claude-mimo25/
  - label: "One rank below"
    label_zh: "下一名"
    name: "Qwen 3.6 plus (180k)"
    note: "Rank #22 · 25.81 Final Score"
    note_zh: "排名 #22 · Final Score 25.81"
    url: /code-agent-bench/models/qoder-qwen36-plus-forward-20260610/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "Qwen 3.7 Max (1m)"
    note: "Rank #9 · 31.62 Final Score"
    note_zh: "排名 #9 · Final Score 31.62"
    url: /code-agent-bench/models/qodercli-qwen37max-direct-full453-10c-r1-20260613/
---

<div class="bench-lang-en" markdown="1">

Qwen 3.5 plus (180k) is broad but volatile. It can touch 41/151 tasks, yet only 14 become 3/3 solves, so much of its value comes from retrying the same benchmark surface.

The closest family reference is Qwen 3.7 Max (1m) at rank #9. Compared with that row, this one is 5.71 points behind, with 6 fewer reached tasks and 11 fewer stable solves.

The result is easiest to understand as a three-point shape: volume at Open Library · release 013 at 6/10 (60.0%), efficiency at vuls · release 012 at 3/4 (75.0%), and resistance at Flipt · release 006 at 0/10 (0.0%). Qoder adds more workflow structure around the model, so its stable wins should be read as model-plus-shell behavior.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The bars say this row has search reach, not settled mastery. The model gets into the right repos often enough, but the repeatability line is still thin.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The useful contrast is between `Feature Request: Add flag key to batch evaluation response` (flipt-io/flipt · solved 3/3) and `Inconsistency in author identifier generation when comparing editions.` (internetarchive/openlibrary · solved 2/3). The model reaches both kinds of problems, but only one becomes dependable.

The audit trims 28 solved attempts from Qwen 3.5 plus (180k) but still keeps 66% of the solved set, so the suite shape remains useful even where individual wins are debatable.

{% include model-audit-card.html %}

Use it when breadth matters more than deterministic replay. It can find openings around Open Library · release 013 at 6/10 (60.0%), but the 27-task reach gap says a second or third run may tell a different story. The 83/453 attempt score is best read as exploration bandwidth: 41 tasks are reachable, but many need retry luck.

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

Qwen 3.5 plus (180k) 的特点是覆盖不窄但波动较大。它能至少一次摸到 41/151 题，但只有 14 题能做到 3/3，因此很大一部分价值来自重试。

最接近的同系参照是排名 #9 的 Qwen 3.7 Max (1m)。和它相比，这一行最终分低 5.71 分，触达题少 6 个，稳定题少 11 个。

这个结果最容易读成三点形状：数量在Open Library · release 013，6/10（60.0%），效率在vuls 漏洞扫描器 · release 012，3/4（75.0%），阻力在Flipt feature flag 服务 · release 006，0/10（0.0%）。Qoder 给模型外面加了更强的工作流结构，因此稳定胜利更适合读成 model-plus-shell 的组合效果。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这些柱子说明这一行有搜索触达，不等于已经掌握。模型经常能进入正确代码库，但可重复通过的线仍然偏细。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

最有用的对比是 `Feature Request: Add flag key to batch evaluation response`（flipt-io/flipt · 3 次中成功 3 次）和 `比较 editions 时 author identifier 生成不一致。`（internetarchive/openlibrary · 3 次中成功 2 次）：模型都能触达，但只有前者变成可靠结果。

复核从 Qwen 3.5 plus (180k) 中剔除了 28 次成功，但仍保留 66% 的成功集合，因此即便个别胜利有争议，suite 形状仍然有参考价值。

{% include model-audit-card.html %}

当你更看重覆盖面而不是确定复现时，它更合适。它能在Open Library · release 013，6/10（60.0%）附近找到入口，但 27 题的覆盖-稳定差说明第二、第三次运行可能给出不同结果。83/453 的单次尝试成功数更像探索带宽：41 道题能触达，但很多仍需要重试运气。

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
