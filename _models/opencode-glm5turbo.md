---
layout: model
model_id: opencode-glm5turbo
title: "GLM 5 turbo on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-glm5turbo/
analysis_date: 2026-06-18
rank: 16
model_name: "GLM 5 turbo"
model_raw: "zai-coding-plan/glm-5-turbo"
provider_label: "Zhipu GLM"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A lower-table result with a few useful bright spots: 44/151 tasks solved at least once, 19/151 solved in all three attempts, with the clearest wins around large Python/Django application repairs plus localized Go security-scanner changes."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 44 题，三次都解出 19 题；强项主要落在大型 Python/Django 应用修复以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 28.95
solved_attempts: 99
solved_unique_tasks: 44
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "29.1%"
pass_3_rate_pct: "12.6%"
pass_3_count: 19
attempt_score_pct: "21.9%"
tldr:
  - en: "GLM 5 turbo is best read as volatile explorer: rank #16, 44 reached tasks, 19 stable solves."
    zh: "GLM 5 turbo 更适合读成探索型但波动较大：排名 #16，触达 44 题，稳定解出 19 题。"
  - en: "Best suite signal: Open Library · release 013 at 6/10 (60.0%)."
    zh: "最强 suite 信号：Open Library · release 013，6/10（60.0%）。"
  - en: "Weakest visible area: qutebrowser · release 018 at 0/9 (0.0%)."
    zh: "最弱可见区域：qutebrowser 浏览器 · release 018，0/9（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "28.95"
    note: "rank #16 of 32"
    note_zh: "32 个模型中排名 #16"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "19"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+25"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "21.9%"
    note: "99/453 solved attempts"
    note_zh: "453 次尝试中成功 99 次"
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
    pass3: 4
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 3
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 1
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
    pass3: 0
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
    pass3: 0
audit:
  harness_ok: 99
  reverified_ok: 99
  strict_rejected: 0
  accepted_pct: 100
  rejected_pct: 0
  score_before: "28.95"
  score_after: "28.95"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 99 of 99 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 99 次初始成功中的 99 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "psrp connection plugin accepts undocumented extras, causing ambiguous and inconsistent configuration."
    title_zh: "psrp connection plugin 接受未文档化 extras，导致配置含糊且不一致。"
    meta: "ansible/ansible · solved 3/3"
    meta_zh: "ansible/ansible · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-003-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-003-ansible-ansible。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Add per-package modularitylabel field for Red Hat–based systems"
    title_zh: "为 Red Hat-based systems 添加 per-package modularitylabel field"
    meta: "future-architect/vuls · solved 2/3"
    meta_zh: "future-architect/vuls · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-011-future-architect-vuls."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-011-future-architect-vuls。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Enhance Kernel Version Handling for Debian Scans in Docker, or when the kernel version cannot be obtained"
    title_zh: "增强 Docker 中 Debian 扫描的 Kernel 版本处理，或在无法获取 kernel 版本时"
    meta: "future-architect/vuls · solved 1/3"
    meta_zh: "future-architect/vuls · 3 次中成功 1 次"
    note: "Verifier pattern: apply-failed. Suite: release-zh-010-future-architect-vuls."
    note_zh: "Verifier 信号：apply-failed。Suite：release-zh-010-future-architect-vuls。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "vuls report fails to parse legacy scan results due to incompatible listenPorts field format"
    title_zh: "vuls report fails to parse legacy scan results due to incompatible listenPorts field format"
    meta: "future-architect/vuls · solved 0/3"
    meta_zh: "future-architect/vuls · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-011-future-architect-vuls."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-011-future-architect-vuls。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "DeepSeek v4 flash (max)"
    note: "Rank #15 · 28.99 Final Score"
    note_zh: "排名 #15 · Final Score 28.99"
    url: /code-agent-bench/models/opencode-deepseek-v4-pro-max/
  - label: "One rank below"
    label_zh: "下一名"
    name: "Qwen 3.6 plus"
    note: "Rank #17 · 28.43 Final Score"
    note_zh: "排名 #17 · Final Score 28.43"
    url: /code-agent-bench/models/qwen-3-6plus/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "GLM 5.2"
    note: "Rank #1 · 37.59 Final Score"
    note_zh: "排名 #1 · Final Score 37.59"
    url: /code-agent-bench/models/opencode-glm52/
---

<div class="bench-lang-en" markdown="1">

GLM 5 turbo is a volatile explorer row around the #16 slot. The useful reading is not just the 28.95 score, but the split between 44 reached tasks and 19 stable solves.

The closest family reference is GLM 5.2 at rank #1. Compared with that row, this one is 8.63 points behind, with 13 fewer reached tasks and 17 fewer stable solves.

The suite split is asymmetric: Open Library · release 013 at 6/10 (60.0%) supplies the main body of wins, vuls · release 012 at 3/4 (75.0%) supplies the clean spike, and qutebrowser · release 018 at 0/9 (0.0%) is where that pattern stops. Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The chart is not trying to crown a single strength; it shows how quickly the row falls from Open Library · release 013 at 6/10 (60.0%) to qutebrowser · release 018 at 0/9 (0.0%).

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The examples keep the middle-band story honest: `psrp connection plugin accepts undocumented extras, causing ambiguous and inconsistent configuration.` is the upside, `vuls report fails to parse legacy scan results due to incompatible listenPorts field format` is the failure surface, and the page should be read between those two poles.

The verifier audit keeps 99/99 solved attempts for GLM 5 turbo, so the interesting question is not score inflation; it is where the model repeatedly finds the same kind of patch.

{% include model-audit-card.html %}

In practice, read it through the gap between Open Library · release 013 at 6/10 (60.0%) and qutebrowser · release 018 at 0/9 (0.0%). That gap is more actionable than the rank because it says which repo shape gets coherent patches. The 99/453 attempt score is the backdrop; the article above is about which parts of that score are repeatable enough to matter.

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

GLM 5 turbo 是一个排名 #16 附近的探索型但波动较大结果。它的重点不只是 28.95 分，而是 44 道触达题和 19 道稳定题之间的差距。

最接近的同系参照是排名 #1 的 GLM 5.2。和它相比，这一行最终分低 8.63 分，触达题少 13 个，稳定题少 17 个。

suite 分布是不对称的：Open Library · release 013，6/10（60.0%）贡献主要胜利，vuls 漏洞扫描器 · release 012，3/4（75.0%）贡献最干净高点，而qutebrowser 浏览器 · release 018，0/9（0.0%）标出这种模式停止的地方。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这张图不是为了给单一强项加冕，而是展示这一行从Open Library · release 013，6/10（60.0%）滑到qutebrowser 浏览器 · release 018，0/9（0.0%）有多快。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

这些案例让中段模型画像更具体：`psrp connection plugin 接受未文档化 extras，导致配置含糊且不一致。` 是上限，`vuls report fails to parse legacy scan results due to incompatible listenPorts field format` 是失败面，这页应该在两者之间读。

GLM 5 turbo 的复核保留了 99 次成功中的 99 次，所以重点不是分数膨胀，而是模型在哪些地方能反复找到同类补丁。

{% include model-audit-card.html %}

实际选择时，更应该通过Open Library · release 013，6/10（60.0%）和qutebrowser 浏览器 · release 018，0/9（0.0%）之间的落差来读它。这个落差比分数排名更可操作，因为它说明哪类代码库更容易得到连贯补丁。99/453 的单次尝试成功数只是背景；上面的文章重点是哪些部分足够可重复、值得当成能力看。

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
