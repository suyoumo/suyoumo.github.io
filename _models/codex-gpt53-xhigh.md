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
  - en: "GPT 5.3 codex (xhigh) is best read as front-runner with a balanced profile: rank #4, 57 reached tasks, 31 stable solves."
    zh: "GPT 5.3 codex (xhigh) 更适合读成第一梯队里的均衡型：排名 #4，触达 57 题，稳定解出 31 题。"
  - en: "Best suite signal: Open Library · release 013 at 10/10 (100.0%)."
    zh: "最强 suite 信号：Open Library · release 013，10/10（100.0%）。"
  - en: "Weakest visible area: Flipt · release 008 at 0/10 (0.0%)."
    zh: "最弱可见区域：Flipt feature flag 服务 · release 008，0/10（0.0%）。"
  - en: "This Codex row searches broadly, but the lower repeatability says several wins still depend on one successful trajectory."
    zh: "这一行 Codex 搜索面很宽，但较低的重复稳定性说明不少胜利仍依赖某一次成功轨迹。"
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
    title: "Work search emits over-escaped edition_key filters and does not expose raw user queries as parameters."
    title_zh: "Work search 发出过度转义的 edition_key 过滤器，且未将原始用户查询作为参数公开。"
    meta: "internetarchive/openlibrary · solved 3/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-013-internetarchive-openlibrary。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Author matching fails with different date formats and special characters in names"
    title_zh: "不同 date formats 和 name 中 special characters 会导致 author matching 失败"
    meta: "internetarchive/openlibrary · solved 2/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-015-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-015-internetarchive-openlibrary。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Failure integrating Red Hat OVAL data: invalid advisories and incorrect fix states."
    title_zh: "集成 Red Hat OVAL 数据失败：无效 advisory 和错误的 fix state。"
    meta: "future-architect/vuls · solved 1/3"
    meta_zh: "future-architect/vuls · 3 次中成功 1 次"
    note: "Verifier pattern: apply-failed. Suite: release-zh-011-future-architect-vuls."
    note_zh: "Verifier 信号：apply-failed。Suite：release-zh-011-future-architect-vuls。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Add support for webhook-based audit sink for external event forwarding"
    title_zh: "添加基于 webhook 的 audit sink，以便将外部事件转发出去"
    meta: "flipt-io/flipt · solved 0/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 0 次"
    note: "Verifier pattern: harness-mutated-workspace. Suite: release-zh-007-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-mutated-workspace。Suite：release-zh-007-flipt-io-flipt。"
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

GPT 5.3 codex (xhigh) belongs in the leading cluster because it keeps both breadth and stability in play: 57 reached tasks, 31 stable solves, and a 36.09 Final Score.

The closest family reference is GPT 5.5 (xhigh) at rank #2. Compared with that row, this one is 0.79 points behind, with 6 more reached tasks and 9 fewer stable solves.

Most of the positive signal concentrates in Open Library · release 013 at 10/10 (100.0%). The opposing read is Flipt · release 008 at 0/10 (0.0%), which keeps the row from looking like a generalist. This Codex row searches broadly, but the lower repeatability says several wins still depend on one successful trajectory.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The suite profile explains why this top-row score feels different from nearby rows: it shows whether the model wins by depth, breadth, or repository fit.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The cases are useful because top rows can look similar in aggregate. `Work search emits over-escaped edition_key filters and does not expose raw user queries as parameters.` shows the reliable core; `Author matching fails with different date formats and special characters in names` shows the remaining edge of variance.

The audit trims 33 solved attempts from GPT 5.3 codex (xhigh) but still keeps 75% of the solved set, so the suite shape remains useful even where individual wins are debatable.

{% include model-audit-card.html %}

In practice, read it through the gap between Open Library · release 013 at 10/10 (100.0%) and Flipt · release 008 at 0/10 (0.0%). That gap is more actionable than the rank because it says which repo shape gets coherent patches. The 131/453 attempt score is the backdrop; the article above is about which parts of that score are repeatable enough to matter.

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

GPT 5.3 codex (xhigh) 能进入第一梯队，是因为覆盖和稳定性都没有掉队：至少一次解出 57 题，稳定解出 31 题，Final Score 36.09。

最接近的同系参照是排名 #2 的 GPT 5.5 (xhigh)。和它相比，这一行最终分低 0.79 分，触达题多 6 个，稳定题少 9 个。

正面信号大多集中在Open Library · release 013，10/10（100.0%）。反向读法是Flipt feature flag 服务 · release 008，0/10（0.0%），它让这一行看起来不像通用型。这一行 Codex 搜索面很宽，但较低的重复稳定性说明不少胜利仍依赖某一次成功轨迹。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

suite 画像解释了为什么这一行的头部分数和邻近模型质感不同：它显示模型是靠深度、广度，还是代码库适配取胜。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

前排模型在总分上容易看起来相似，所以案例很关键：`Work search 发出过度转义的 edition_key 过滤器，且未将原始用户查询作为参数公开。` 展示可靠核心，`不同 date formats 和 name 中 special characters 会导致 author matching 失败` 展示剩余波动边界。

复核从 GPT 5.3 codex (xhigh) 中剔除了 33 次成功，但仍保留 75% 的成功集合，因此即便个别胜利有争议，suite 形状仍然有参考价值。

{% include model-audit-card.html %}

实际选择时，更应该通过Open Library · release 013，10/10（100.0%）和Flipt feature flag 服务 · release 008，0/10（0.0%）之间的落差来读它。这个落差比分数排名更可操作，因为它说明哪类代码库更容易得到连贯补丁。131/453 的单次尝试成功数只是背景；上面的文章重点是哪些部分足够可重复、值得当成能力看。

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
