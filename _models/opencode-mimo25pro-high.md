---
layout: model
model_id: opencode-mimo25pro-high
title: "MiMo v2.5 pro (high) on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-mimo25pro-high/
analysis_date: 2026-06-18
rank: 13
model_name: "MiMo v2.5 pro (high)"
model_raw: "xiaomi-token-plan-cn/mimo-v2.5-pro#variant=high"
provider_label: "Xiaomi"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A competitive mid-table result with 46/151 tasks solved at least once and 22/151 solved in all three attempts; strongest around large Python/Django application repairs plus automation and configuration-management work."
subtitle_zh: "这是一个有竞争力的中游结果：151 题中至少一次解出 46 题，三次都解出 22 题；强项主要落在大型 Python/Django 应用修复以及自动化和配置管理类改动。"
final_score: 30.3
solved_attempts: 102
solved_unique_tasks: 46
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "30.5%"
pass_3_rate_pct: "14.6%"
pass_3_count: 22
attempt_score_pct: "22.5%"
tldr:
  - en: "MiMo v2.5 pro (high) is best read as volatile explorer: rank #13, 46 reached tasks, 22 stable solves."
    zh: "MiMo v2.5 pro (high) 更适合读成探索型但波动较大：排名 #13，触达 46 题，稳定解出 22 题。"
  - en: "Best suite signal: Open Library · release 013 at 8/10 (80.0%)."
    zh: "最强 suite 信号：Open Library · release 013，8/10（80.0%）。"
  - en: "Weakest visible area: Flipt · release 005 at 0/10 (0.0%)."
    zh: "最弱可见区域：Flipt feature flag 服务 · release 005，0/10（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "30.30"
    note: "rank #13 of 32"
    note_zh: "32 个模型中排名 #13"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "22"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+24"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "22.5%"
    note: "102/453 solved attempts"
    note_zh: "453 次尝试中成功 102 次"
suite_profile:
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 8
    rate: 80.0
    rate_pct: "80.0%"
    pass3: 2
    note: "Best visible cluster for this row: 8/10 tasks reached."
    note_zh: "这一行最明显的强项簇：10 题中解出 8 题。"
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    label_zh: "vuls 漏洞扫描器 · release 012"
    repo: "future-architect/vuls"
    total: 4
    solved: 3
    rate: 75.0
    rate_pct: "75.0%"
    pass3: 3
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 4
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 3
  - suite: release-zh-007-flipt-io-flipt
    label: "Flipt · release 007"
    label_zh: "Flipt feature flag 服务 · release 007"
    repo: "flipt-io/flipt"
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
  harness_ok: 102
  reverified_ok: 98
  strict_rejected: 4
  accepted_pct: 96
  rejected_pct: 4
  score_before: "30.30"
  score_after: "30.30"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 98 of 102 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 102 次初始成功中的 98 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "oval.major(\"\") must return an empty string for empty input"
    title_zh: "oval.major(\"\") 对空输入必须返回空字符串"
    meta: "future-architect/vuls · solved 3/3"
    meta_zh: "future-architect/vuls · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-012-future-architect-vuls."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-012-future-architect-vuls。"
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
    title: "Enhance Kernel Version Handling for Debian Scans in Docker, or when the kernel version cannot be obtained"
    title_zh: "增强 Docker 中 Debian 扫描的 Kernel 版本处理，或在无法获取 kernel 版本时"
    meta: "future-architect/vuls · solved 1/3"
    meta_zh: "future-architect/vuls · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-010-future-architect-vuls."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-010-future-architect-vuls。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Required message's improvements for process"
    title_zh: "改进进程相关提示消息"
    meta: "qutebrowser/qutebrowser · solved 0/3"
    meta_zh: "qutebrowser/qutebrowser · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-018-qutebrowser-qutebrowser."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-018-qutebrowser-qutebrowser。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "MiMo v2.5 pro"
    note: "Rank #12 · 30.69 Final Score"
    note_zh: "排名 #12 · Final Score 30.69"
    url: /code-agent-bench/models/claude-mimo25pro/
  - label: "One rank below"
    label_zh: "下一名"
    name: "MiniMax M2.5 highspeed"
    note: "Rank #14 · 30.30 Final Score"
    note_zh: "排名 #14 · Final Score 30.30"
    url: /code-agent-bench/models/opencode-minimax25-highspeed/
  - label: "Same agent"
    label_zh: "同 agent"
    name: "GLM 5.2"
    note: "Rank #1 · 37.59 Final Score"
    note_zh: "排名 #1 · Final Score 37.59"
    url: /code-agent-bench/models/opencode-glm52/
---

<div class="bench-lang-en" markdown="1">

MiMo v2.5 pro (high) is a volatile explorer row around the #13 slot. The useful reading is not just the 30.30 score, but the split between 46 reached tasks and 22 stable solves.

The closest family reference is MiMo v2.5 pro at rank #12. Compared with that row, this one is 0.39 points behind, with 2 more reached tasks and 3 fewer stable solves.

Most of the positive signal concentrates in Open Library · release 013 at 8/10 (80.0%). The opposing read is Flipt · release 005 at 0/10 (0.0%), which keeps the row from looking like a generalist. Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

For this row, the suite bars are a contrast tool. The distance between Open Library · release 013 at 8/10 (80.0%) and Flipt · release 005 at 0/10 (0.0%) is the model's practical boundary.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The examples keep the middle-band story honest: `oval.major("") must return an empty string for empty input` is the upside, `Required message's improvements for process` is the failure surface, and the page should be read between those two poles.

The audit trims 4 solved attempts from MiMo v2.5 pro (high) but still keeps 96% of the solved set, so the suite shape remains useful even where individual wins are debatable.

{% include model-audit-card.html %}

In practice, read it through the gap between Open Library · release 013 at 8/10 (80.0%) and Flipt · release 005 at 0/10 (0.0%). That gap is more actionable than the rank because it says which repo shape gets coherent patches. The 102/453 attempt score is the backdrop; the article above is about which parts of that score are repeatable enough to matter.

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

MiMo v2.5 pro (high) 是一个排名 #13 附近的探索型但波动较大结果。它的重点不只是 30.30 分，而是 46 道触达题和 22 道稳定题之间的差距。

最接近的同系参照是排名 #12 的 MiMo v2.5 pro。和它相比，这一行最终分低 0.39 分，触达题多 2 个，稳定题少 3 个。

正面信号大多集中在Open Library · release 013，8/10（80.0%）。反向读法是Flipt feature flag 服务 · release 005，0/10（0.0%），它让这一行看起来不像通用型。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

对这一行来说，suite 柱更像对比工具。Open Library · release 013，8/10（80.0%）和Flipt feature flag 服务 · release 005，0/10（0.0%）之间的距离，就是模型的实用边界。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

这些案例让中段模型画像更具体：`oval.major("") 对空输入必须返回空字符串` 是上限，`改进进程相关提示消息` 是失败面，这页应该在两者之间读。

复核从 MiMo v2.5 pro (high) 中剔除了 4 次成功，但仍保留 96% 的成功集合，因此即便个别胜利有争议，suite 形状仍然有参考价值。

{% include model-audit-card.html %}

实际选择时，更应该通过Open Library · release 013，8/10（80.0%）和Flipt feature flag 服务 · release 005，0/10（0.0%）之间的落差来读它。这个落差比分数排名更可操作，因为它说明哪类代码库更容易得到连贯补丁。102/453 的单次尝试成功数只是背景；上面的文章重点是哪些部分足够可重复、值得当成能力看。

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
