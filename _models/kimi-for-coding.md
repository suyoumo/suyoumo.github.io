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
  - en: "Kimi K2.6(Kimi for Coding) is best read as front-runner with a balanced profile: rank #5, 54 reached tasks, 32 stable solves."
    zh: "Kimi K2.6(Kimi for Coding) 更适合读成第一梯队里的均衡型：排名 #5，触达 54 题，稳定解出 32 题。"
  - en: "Best suite signal: Ansible · release 003 at 9/10 (90.0%)."
    zh: "最强 suite 信号：Ansible 自动化 · release 003，9/10（90.0%）。"
  - en: "Weakest visible area: qutebrowser · release 018 at 0/9 (0.0%)."
    zh: "最弱可见区域：qutebrowser 浏览器 · release 018，0/9（0.0%）。"
  - en: "This row should be read as the behavior of the model inside its specific coding-agent shell."
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
    title: "Severity values from Debian Security Tracker differ between repeated scans"
    title_zh: "Debian Security Tracker 的 severity 值在重复扫描之间不同"
    meta: "future-architect/vuls · solved 3/3"
    meta_zh: "future-architect/vuls · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-012-future-architect-vuls."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-012-future-architect-vuls。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "vuls report fails to parse legacy scan results due to incompatible listenPorts field format"
    title_zh: "vuls report fails to parse legacy scan results due to incompatible listenPorts field format"
    meta: "future-architect/vuls · solved 2/3"
    meta_zh: "future-architect/vuls · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-011-future-architect-vuls."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-011-future-architect-vuls。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Book import may hang or timeout when processing cover images from unsupported hosts"
    title_zh: "处理来自不受支持主机的封面图片时，书籍导入可能挂起或超时"
    meta: "internetarchive/openlibrary · solved 1/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-014-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-014-internetarchive-openlibrary。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Startup blends release/update checks, '-rc' builds misclassified as proper releases"
    title_zh: "启动流程混合 release/update 检查，-rc 构建被错误分类为正式 release"
    meta: "flipt-io/flipt · solved 0/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-009-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-009-flipt-io-flipt。"
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

Kimi K2.6(Kimi for Coding) belongs in the leading cluster because it keeps both breadth and stability in play: 54 reached tasks, 32 stable solves, and a 35.45 Final Score.

With no close provider sibling on this board, the more useful comparison is against the neighboring ranks: the row is defined by 27.8% attempt-level accuracy rather than a single standout suite.

The suite split is asymmetric: Ansible · release 003 at 9/10 (90.0%) supplies the main body of wins, vuls · release 012 at 4/4 (100.0%) supplies the clean spike, and qutebrowser · release 018 at 0/9 (0.0%) is where that pattern stops. This row should be read as the behavior of the model inside its specific coding-agent shell.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

At the front of the board, the chart is a fingerprint. The score is close to peers, so the repo distribution says more than the rank delta.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The cases are useful because top rows can look similar in aggregate. `Severity values from Debian Security Tracker differ between repeated scans` shows the reliable core; `vuls report fails to parse legacy scan results due to incompatible listenPorts field format` shows the remaining edge of variance.

The verifier audit keeps 126/126 solved attempts for Kimi K2.6(Kimi for Coding), so the interesting question is not score inflation; it is where the model repeatedly finds the same kind of patch.

{% include model-audit-card.html %}

In practice, read it through the gap between Ansible · release 003 at 9/10 (90.0%) and qutebrowser · release 018 at 0/9 (0.0%). That gap is more actionable than the rank because it says which repo shape gets coherent patches. The 126/453 attempt score is the backdrop; the article above is about which parts of that score are repeatable enough to matter.

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

Kimi K2.6(Kimi for Coding) 能进入第一梯队，是因为覆盖和稳定性都没有掉队：至少一次解出 54 题，稳定解出 32 题，Final Score 35.45。

这个 provider 在榜单上没有特别近的同系兄弟，因此更适合和相邻排名比较：这一行的基本面是 27.8% 的单次尝试成功率，而不是某一个 suite 的孤立爆发。

suite 分布是不对称的：Ansible 自动化 · release 003，9/10（90.0%）贡献主要胜利，vuls 漏洞扫描器 · release 012，4/4（100.0%）贡献最干净高点，而qutebrowser 浏览器 · release 018，0/9（0.0%）标出这种模式停止的地方。这一行应读作该模型在特定 coding-agent shell 里的行为。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

在榜单前排，这张图更像指纹。分数和相邻模型很接近，因此代码库分布比分差更说明问题。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

前排模型在总分上容易看起来相似，所以案例很关键：`Debian Security Tracker 的 severity 值在重复扫描之间不同` 展示可靠核心，`vuls report fails to parse legacy scan results due to incompatible listenPorts field format` 展示剩余波动边界。

Kimi K2.6(Kimi for Coding) 的复核保留了 126 次成功中的 126 次，所以重点不是分数膨胀，而是模型在哪些地方能反复找到同类补丁。

{% include model-audit-card.html %}

实际选择时，更应该通过Ansible 自动化 · release 003，9/10（90.0%）和qutebrowser 浏览器 · release 018，0/9（0.0%）之间的落差来读它。这个落差比分数排名更可操作，因为它说明哪类代码库更容易得到连贯补丁。126/453 的单次尝试成功数只是背景；上面的文章重点是哪些部分足够可重复、值得当成能力看。

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
