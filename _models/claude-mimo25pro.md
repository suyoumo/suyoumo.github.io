---
layout: model
model_id: claude-mimo25pro
title: "MiMo v2.5 pro on CodeAgentBench"
permalink: /code-agent-bench/models/claude-mimo25pro/
analysis_date: 2026-06-18
rank: 12
model_name: "MiMo v2.5 pro"
model_raw: "xiaomi/mimo-v2.5-pro"
provider_label: "Xiaomi"
agent_label: "Claude Code"
agent_version: "claude-code 2.1.158"
subtitle: "A competitive mid-table result with 44/151 tasks solved at least once and 25/151 solved in all three attempts; strongest around large Python/Django application repairs plus localized Go security-scanner changes."
subtitle_zh: "这是一个有竞争力的中游结果：151 题中至少一次解出 44 题，三次都解出 25 题；强项主要落在大型 Python/Django 应用修复以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 30.69
solved_attempts: 103
solved_unique_tasks: 44
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "29.1%"
pass_3_rate_pct: "16.6%"
pass_3_count: 25
attempt_score_pct: "22.7%"
tldr:
  - en: "MiMo v2.5 pro is best read as moderately stable: rank #12, 44 reached tasks, 25 stable solves."
    zh: "MiMo v2.5 pro 更适合读成中等稳定型：排名 #12，触达 44 题，稳定解出 25 题。"
  - en: "Best suite signal: Open Library · release 013 at 8/10 (80.0%)."
    zh: "最强 suite 信号：Open Library · release 013，8/10（80.0%）。"
  - en: "Weakest visible area: qutebrowser · release 018 at 0/9 (0.0%)."
    zh: "最弱可见区域：qutebrowser 浏览器 · release 018，0/9（0.0%）。"
  - en: "Claude Code gives this row a different orchestration profile from OpenCode and Qoder, which is useful when comparing the same model family across shells."
    zh: "Claude Code 让这一行有别于 OpenCode 和 Qoder 的编排形态，适合观察同类模型跨 shell 的差异。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "30.69"
    note: "rank #12 of 32"
    note_zh: "32 个模型中排名 #12"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "25"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+19"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "22.7%"
    note: "103/453 solved attempts"
    note_zh: "453 次尝试中成功 103 次"
suite_profile:
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 8
    rate: 80.0
    rate_pct: "80.0%"
    pass3: 4
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
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 2
  - suite: release-zh-007-flipt-io-flipt
    label: "Flipt · release 007"
    label_zh: "Flipt feature flag 服务 · release 007"
    repo: "flipt-io/flipt"
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
    pass3: 1
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
  - suite: release-zh-008-flipt-io-flipt
    label: "Flipt · release 008"
    label_zh: "Flipt feature flag 服务 · release 008"
    repo: "flipt-io/flipt"
    total: 10
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 1
audit:
  harness_ok: 103
  reverified_ok: 74
  strict_rejected: 29
  accepted_pct: 72
  rejected_pct: 28
  score_before: "30.69"
  score_after: "30.69"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 74 of 103 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 103 次初始成功中的 74 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Polling goroutines lack lifecycle management in storage backends"
    title_zh: "storage 后端中的 polling goroutine 缺少生命周期管理"
    meta: "flipt-io/flipt · solved 3/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-007-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-007-flipt-io-flipt。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Unify validation in add_book by removing override, with the sole exception of 'promise items'"
    title_zh: "在 add_book 中通过移除 override 来统一验证，唯一例外是 promise items"
    meta: "internetarchive/openlibrary · solved 2/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-016-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-016-internetarchive-openlibrary。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Booknotes are deleted when updating work_id with conflicts"
    title_zh: "更新存在冲突的 work_id 时会删除 Booknotes"
    meta: "internetarchive/openlibrary · solved 1/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-013-internetarchive-openlibrary。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "module_defaults of the underlying module are not applied when invoked via action plugins (gather_facts, package, service)"
    title_zh: "通过 action plugins（gather_facts、package、service）调用时，底层 module 的 module_defaults 没有被应用"
    meta: "ansible/ansible · solved 0/3"
    meta_zh: "ansible/ansible · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-002-ansible-ansible."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-002-ansible-ansible。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "Qwen 3.7 Plus (1m)"
    note: "Rank #11 · 31.21 Final Score"
    note_zh: "排名 #11 · Final Score 31.21"
    url: /code-agent-bench/models/qodercli-qwen37plus-direct-full453-10c-r1-20260615/
  - label: "One rank below"
    label_zh: "下一名"
    name: "MiMo v2.5 pro (high)"
    note: "Rank #13 · 30.30 Final Score"
    note_zh: "排名 #13 · Final Score 30.30"
    url: /code-agent-bench/models/opencode-mimo25pro-high/
  - label: "Same agent"
    label_zh: "同 agent"
    name: "MiMo v2.5"
    note: "Rank #20 · 27.04 Final Score"
    note_zh: "排名 #20 · Final Score 27.04"
    url: /code-agent-bench/models/claude-mimo25/
---

<div class="bench-lang-en" markdown="1">

MiMo v2.5 pro is a moderately stable row around the #12 slot. The useful reading is not just the 30.69 score, but the split between 44 reached tasks and 25 stable solves.

The closest family reference is MiMo v2.5 pro (high) at rank #13. Compared with that row, this one is 0.39 points ahead, with 2 fewer reached tasks and 3 more stable solves.

Most of the positive signal concentrates in Open Library · release 013 at 8/10 (80.0%). The opposing read is qutebrowser · release 018 at 0/9 (0.0%), which keeps the row from looking like a generalist. Claude Code gives this row a different orchestration profile from OpenCode and Qoder, which is useful when comparing the same model family across shells.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

For this row, the suite bars are a contrast tool. The distance between Open Library · release 013 at 8/10 (80.0%) and qutebrowser · release 018 at 0/9 (0.0%) is the model's practical boundary.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The examples keep the middle-band story honest: `Polling goroutines lack lifecycle management in storage backends` is the upside, `module_defaults of the underlying module are not applied when invoked via action plugins (gather_facts, package, service)` is the failure surface, and the page should be read between those two poles.

The audit trims 29 solved attempts from MiMo v2.5 pro but still keeps 72% of the solved set, so the suite shape remains useful even where individual wins are debatable.

{% include model-audit-card.html %}

In practice, read it through the gap between Open Library · release 013 at 8/10 (80.0%) and qutebrowser · release 018 at 0/9 (0.0%). That gap is more actionable than the rank because it says which repo shape gets coherent patches. The 103/453 attempt score is the backdrop; the article above is about which parts of that score are repeatable enough to matter.

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

MiMo v2.5 pro 是一个排名 #12 附近的中等稳定型结果。它的重点不只是 30.69 分，而是 44 道触达题和 25 道稳定题之间的差距。

最接近的同系参照是排名 #13 的 MiMo v2.5 pro (high)。和它相比，这一行最终分高 0.39 分，触达题少 2 个，稳定题多 3 个。

正面信号大多集中在Open Library · release 013，8/10（80.0%）。反向读法是qutebrowser 浏览器 · release 018，0/9（0.0%），它让这一行看起来不像通用型。Claude Code 让这一行有别于 OpenCode 和 Qoder 的编排形态，适合观察同类模型跨 shell 的差异。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

对这一行来说，suite 柱更像对比工具。Open Library · release 013，8/10（80.0%）和qutebrowser 浏览器 · release 018，0/9（0.0%）之间的距离，就是模型的实用边界。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

这些案例让中段模型画像更具体：`storage 后端中的 polling goroutine 缺少生命周期管理` 是上限，`通过 action plugins（gather_facts、package、service）调用时，底层 module 的 module_defaults 没有被应用` 是失败面，这页应该在两者之间读。

复核从 MiMo v2.5 pro 中剔除了 29 次成功，但仍保留 72% 的成功集合，因此即便个别胜利有争议，suite 形状仍然有参考价值。

{% include model-audit-card.html %}

实际选择时，更应该通过Open Library · release 013，8/10（80.0%）和qutebrowser 浏览器 · release 018，0/9（0.0%）之间的落差来读它。这个落差比分数排名更可操作，因为它说明哪类代码库更容易得到连贯补丁。103/453 的单次尝试成功数只是背景；上面的文章重点是哪些部分足够可重复、值得当成能力看。

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
