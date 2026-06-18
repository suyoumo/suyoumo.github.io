---
layout: model
model_id: claude-mimo25
title: "MiMo v2.5 on CodeAgentBench"
permalink: /code-agent-bench/models/claude-mimo25/
analysis_date: 2026-06-18
rank: 20
model_name: "MiMo v2.5"
model_raw: "xiaomi/mimo-v2.5"
provider_label: "Xiaomi"
agent_label: "Claude Code"
agent_version: "claude-code 2.1.158"
subtitle: "A lower-table result with a few useful bright spots: 41/151 tasks solved at least once, 17/151 solved in all three attempts, with the clearest wins around large Python/Django application repairs plus localized Go security-scanner changes."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 41 题，三次都解出 17 题；强项主要落在大型 Python/Django 应用修复以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 27.04
solved_attempts: 86
solved_unique_tasks: 41
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "27.2%"
pass_3_rate_pct: "11.3%"
pass_3_count: 17
attempt_score_pct: "19.0%"
tldr:
  - en: "MiMo v2.5 is best read as volatile explorer: rank #20, 41 reached tasks, 17 stable solves."
    zh: "MiMo v2.5 更适合读成探索型但波动较大：排名 #20，触达 41 题，稳定解出 17 题。"
  - en: "Best suite signal: Open Library · release 013 at 7/10 (70.0%)."
    zh: "最强 suite 信号：Open Library · release 013，7/10（70.0%）。"
  - en: "Weakest visible area: qutebrowser · release 018 at 0/9 (0.0%)."
    zh: "最弱可见区域：qutebrowser 浏览器 · release 018，0/9（0.0%）。"
  - en: "Claude Code gives this row a different orchestration profile from OpenCode and Qoder, which is useful when comparing the same model family across shells."
    zh: "Claude Code 让这一行有别于 OpenCode 和 Qoder 的编排形态，适合观察同类模型跨 shell 的差异。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "27.04"
    note: "rank #20 of 32"
    note_zh: "32 个模型中排名 #20"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "17"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+24"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "19.0%"
    note: "86/453 solved attempts"
    note_zh: "453 次尝试中成功 86 次"
suite_profile:
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    label_zh: "vuls 漏洞扫描器 · release 012"
    repo: "future-architect/vuls"
    total: 4
    solved: 4
    rate: 100.0
    rate_pct: "100.0%"
    pass3: 1
    note: "Best visible cluster for this row: 4/4 tasks reached."
    note_zh: "这一行最明显的强项簇：4 题中解出 4 题。"
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 7
    rate: 70.0
    rate_pct: "70.0%"
    pass3: 3
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 0
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    label_zh: "vuls 漏洞扫描器 · release 010"
    repo: "future-architect/vuls"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 3
  - suite: release-zh-016-internetarchive-openlibrary
    label: "Open Library · release 016"
    label_zh: "Open Library · release 016"
    repo: "internetarchive/openlibrary"
    total: 5
    solved: 2
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 0
  - suite: release-zh-004-ansible-ansible
    label: "Ansible · release 004"
    label_zh: "Ansible 自动化 · release 004"
    repo: "ansible/ansible"
    total: 3
    solved: 1
    rate: 33.3
    rate_pct: "33.3%"
    pass3: 1
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
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 1
audit:
  harness_ok: 86
  reverified_ok: 69
  strict_rejected: 17
  accepted_pct: 80
  rejected_pct: 20
  score_before: "27.04"
  score_after: "27.04"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 69 of 86 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 86 次初始成功中的 69 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
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
    title: "Ensure constant-like configuration values are immutable where consumed by autocomplete and related logic"
    title_zh: "确保 autocomplete 和相关逻辑所消费的 constant-like configuration values 是 immutable 的"
    meta: "internetarchive/openlibrary · solved 2/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-015-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-015-internetarchive-openlibrary。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Python module shebang not honored; interpreter forced to /usr/bin/python"
    title_zh: "Python module shebang 未被遵守；interpreter 被强制为 /usr/bin/python"
    meta: "ansible/ansible · solved 1/3"
    meta_zh: "ansible/ansible · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-002-ansible-ansible."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-002-ansible-ansible。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "OCI Storage Backend: Configuration Parsing and Validation Issues"
    title_zh: "OCI Storage Backend：配置解析和校验问题"
    meta: "flipt-io/flipt · solved 0/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-005-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-005-flipt-io-flipt。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "KAT Coder Pro v2"
    note: "Rank #19 · 27.97 Final Score"
    note_zh: "排名 #19 · Final Score 27.97"
    url: /code-agent-bench/models/opencode-kat-coder-pro-v2-ps4-prepared-20260613/
  - label: "One rank below"
    label_zh: "下一名"
    name: "Qwen 3.5 plus (180k)"
    note: "Rank #21 · 25.91 Final Score"
    note_zh: "排名 #21 · Final Score 25.91"
    url: /code-agent-bench/models/qoder-qwen35-plus-direct-20260612/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "MiMo v2.5 pro"
    note: "Rank #12 · 30.69 Final Score"
    note_zh: "排名 #12 · Final Score 30.69"
    url: /code-agent-bench/models/claude-mimo25pro/
---

<div class="bench-lang-en" markdown="1">

MiMo v2.5 is broad but volatile. It can touch 41/151 tasks, yet only 17 become 3/3 solves, so much of its value comes from retrying the same benchmark surface.

The closest family reference is MiMo v2.5 pro at rank #12. Compared with that row, this one is 3.65 points behind, with 3 fewer reached tasks and 8 fewer stable solves.

The suite split is asymmetric: Open Library · release 013 at 7/10 (70.0%) supplies the main body of wins, vuls · release 012 at 4/4 (100.0%) supplies the clean spike, and qutebrowser · release 018 at 0/9 (0.0%) is where that pattern stops. Claude Code gives this row a different orchestration profile from OpenCode and Qoder, which is useful when comparing the same model family across shells.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

Read the bars as a volatility chart: Open Library · release 013 at 7/10 (70.0%) shows the upside, while the Pass^3 gap explains why the same row can feel much weaker on a single rerun.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The useful contrast is between `Scan results miss Package URL (PURL) information in library output` (future-architect/vuls · solved 3/3) and `Ensure constant-like configuration values are immutable where consumed by autocomplete and related logic` (internetarchive/openlibrary · solved 2/3). The model reaches both kinds of problems, but only one becomes dependable.

The audit trims 17 solved attempts from MiMo v2.5 but still keeps 80% of the solved set, so the suite shape remains useful even where individual wins are debatable.

{% include model-audit-card.html %}

Use it when breadth matters more than deterministic replay. It can find openings around Open Library · release 013 at 7/10 (70.0%), but the 24-task reach gap says a second or third run may tell a different story. The 86/453 attempt score is best read as exploration bandwidth: 41 tasks are reachable, but many need retry luck.

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

MiMo v2.5 的特点是覆盖不窄但波动较大。它能至少一次摸到 41/151 题，但只有 17 题能做到 3/3，因此很大一部分价值来自重试。

最接近的同系参照是排名 #12 的 MiMo v2.5 pro。和它相比，这一行最终分低 3.65 分，触达题少 3 个，稳定题少 8 个。

suite 分布是不对称的：Open Library · release 013，7/10（70.0%）贡献主要胜利，vuls 漏洞扫描器 · release 012，4/4（100.0%）贡献最干净高点，而qutebrowser 浏览器 · release 018，0/9（0.0%）标出这种模式停止的地方。Claude Code 让这一行有别于 OpenCode 和 Qoder 的编排形态，适合观察同类模型跨 shell 的差异。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这张图更像波动率图：Open Library · release 013，7/10（70.0%）展示上限，而 Pass^3 落差解释了为什么单次重跑会显得弱很多。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

最有用的对比是 `Library 输出中的扫描结果缺少 Package URL (PURL) 信息`（future-architect/vuls · 3 次中成功 3 次）和 `确保 autocomplete 和相关逻辑所消费的 constant-like configuration values 是 immutable 的`（internetarchive/openlibrary · 3 次中成功 2 次）：模型都能触达，但只有前者变成可靠结果。

复核从 MiMo v2.5 中剔除了 17 次成功，但仍保留 80% 的成功集合，因此即便个别胜利有争议，suite 形状仍然有参考价值。

{% include model-audit-card.html %}

当你更看重覆盖面而不是确定复现时，它更合适。它能在Open Library · release 013，7/10（70.0%）附近找到入口，但 24 题的覆盖-稳定差说明第二、第三次运行可能给出不同结果。86/453 的单次尝试成功数更像探索带宽：41 道题能触达，但很多仍需要重试运气。

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
