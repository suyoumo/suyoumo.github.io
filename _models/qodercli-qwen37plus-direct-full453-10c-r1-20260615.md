---
layout: model
model_id: qodercli-qwen37plus-direct-full453-10c-r1-20260615
title: "Qwen 3.7 Plus (1m) on CodeAgentBench"
permalink: /code-agent-bench/models/qodercli-qwen37plus-direct-full453-10c-r1-20260615/
analysis_date: 2026-06-18
rank: 11
model_name: "Qwen 3.7 Plus (1m)"
model_raw: "Qwen3.7-Plus#context-window=1000000"
provider_label: "Qwen"
agent_label: "Qoder"
agent_version: "qodercli-1.0.20"
subtitle: "A competitive mid-table result with 43/151 tasks solved at least once and 28/151 solved in all three attempts; strongest around large Python/Django application repairs plus localized Go security-scanner changes."
subtitle_zh: "这是一个有竞争力的中游结果：151 题中至少一次解出 43 题，三次都解出 28 题；强项主要落在大型 Python/Django 应用修复以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 31.21
solved_attempts: 104
solved_unique_tasks: 43
task_count: 151
scoreable_attempts: 452
pass_at_3_rate_pct: "28.5%"
pass_3_rate_pct: "18.5%"
pass_3_count: 28
attempt_score_pct: "23.0%"
tldr:
  - en: "Qwen 3.7 Plus (1m) is best read as moderately stable: rank #11, 43 reached tasks, 28 stable solves."
    zh: "Qwen 3.7 Plus (1m) 更适合读成中等稳定型：排名 #11，触达 43 题，稳定解出 28 题。"
  - en: "Best suite signal: Open Library · release 013 at 6/10 (60.0%)."
    zh: "最强 suite 信号：Open Library · release 013，6/10（60.0%）。"
  - en: "Weakest visible area: qutebrowser · release 018 at 0/9 (0.0%)."
    zh: "最弱可见区域：qutebrowser 浏览器 · release 018，0/9（0.0%）。"
  - en: "Qoder adds more workflow structure around the model, so its stable wins should be read as model-plus-shell behavior."
    zh: "Qoder 给模型外面加了更强的工作流结构，因此稳定胜利更适合读成 model-plus-shell 的组合效果。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "31.21"
    note: "rank #11 of 32"
    note_zh: "32 个模型中排名 #11"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "28"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+15"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "23.0%"
    note: "104/452 solved attempts"
    note_zh: "452 次尝试中成功 104 次"
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
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
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
    pass3: 4
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    label_zh: "vuls 漏洞扫描器 · release 010"
    repo: "future-architect/vuls"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 4
  - suite: release-zh-016-internetarchive-openlibrary
    label: "Open Library · release 016"
    label_zh: "Open Library · release 016"
    repo: "internetarchive/openlibrary"
    total: 5
    solved: 2
    rate: 40.0
    rate_pct: "40.0%"
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
  harness_ok: 104
  reverified_ok: 104
  strict_rejected: 0
  accepted_pct: 100
  rejected_pct: 0
  score_before: "31.21"
  score_after: "31.21"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 104 of 104 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 104 次初始成功中的 104 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Forked output from ‘Display.display’ is unreliable and exposes shutdown deadlock risk"
    title_zh: "\"# 从 fork 进程调用 Display.display 的输出不可靠，并暴露 shutdown 死锁风险"
    meta: "ansible/ansible · solved 3/3"
    meta_zh: "ansible/ansible · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-003-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-003-ansible-ansible。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Feature Request: Add flag key to batch evaluation response"
    title_zh: "Feature Request: Add flag key to batch evaluation response"
    meta: "flipt-io/flipt · solved 2/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-007-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-007-flipt-io-flipt。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "format_languages depends on web.ctx and fails with case-insensitive or ambiguous inputs."
    title_zh: "format_languages 依赖 web.ctx，并在大小写不敏感或歧义输入下失败"
    meta: "internetarchive/openlibrary · solved 1/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-014-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-014-internetarchive-openlibrary。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Consistent author extraction from MARC 1xx and 7xx fields and reliable linkage of alternate script names via 880"
    title_zh: "从 MARC 1xx 和 7xx 字段一致提取作者，并通过 880 可靠链接备用文字姓名"
    meta: "internetarchive/openlibrary · solved 0/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-015-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-015-internetarchive-openlibrary。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "Qwen 3.5 plus"
    note: "Rank #10 · 31.39 Final Score"
    note_zh: "排名 #10 · Final Score 31.39"
    url: /code-agent-bench/models/qwen-3-5plus/
  - label: "One rank below"
    label_zh: "下一名"
    name: "MiMo v2.5 pro"
    note: "Rank #12 · 30.69 Final Score"
    note_zh: "排名 #12 · Final Score 30.69"
    url: /code-agent-bench/models/claude-mimo25pro/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "Qwen 3.7 Max (1m)"
    note: "Rank #9 · 31.62 Final Score"
    note_zh: "排名 #9 · Final Score 31.62"
    url: /code-agent-bench/models/qodercli-qwen37max-direct-full453-10c-r1-20260613/
---

<div class="bench-lang-en" markdown="1">

Qwen 3.7 Plus (1m) is a moderately stable row around the #11 slot. The useful reading is not just the 31.21 score, but the split between 43 reached tasks and 28 stable solves.

The closest family reference is Qwen 3.7 Max (1m) at rank #9. Compared with that row, this one is 0.41 points behind, with 4 fewer reached tasks and 3 more stable solves.

The volume win is Open Library · release 013 at 6/10 (60.0%), while the cleanest pass-rate spike is vuls · release 012 at 3/4 (75.0%). The warning label is qutebrowser · release 018 at 0/9 (0.0%), so the contrast is not generic strength versus weakness; it is large Python/Django application repairs holding together better than browser/runtime integration around QtWebEngine behavior on this run. Qoder adds more workflow structure around the model, so its stable wins should be read as model-plus-shell behavior.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The Qoder shell tends to turn some model guesses into more disciplined patch attempts. That is why the suite profile should be compared with direct Qwen/OpenCode rows, not read as pure model capability.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

Look at `Forked output from ‘Display.display’ is unreliable and exposes shutdown deadlock risk` and `Feature Request: Add flag key to batch evaluation response` as shell-behavior examples. The difference is not only model knowledge; it is whether the workflow keeps the patch disciplined enough to pass.

The verifier audit keeps 104/104 solved attempts for Qwen 3.7 Plus (1m), so the interesting question is not score inflation; it is where the model repeatedly finds the same kind of patch.

{% include model-audit-card.html %}

For Qoder-style use, the interesting part is how the shell converts model guesses into patches. Compare Open Library · release 013 at 6/10 (60.0%) with qutebrowser · release 018 at 0/9 (0.0%) before attributing the result to the base model alone. The 104/452 attempt score should be read as model plus Qoder workflow, especially when comparing it with direct Qwen rows.

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

Qwen 3.7 Plus (1m) 是一个排名 #11 附近的中等稳定型结果。它的重点不只是 31.21 分，而是 43 道触达题和 28 道稳定题之间的差距。

最接近的同系参照是排名 #9 的 Qwen 3.7 Max (1m)。和它相比，这一行最终分低 0.41 分，触达题少 4 个，稳定题多 3 个。

从数量看，主要胜利来自Open Library · release 013，6/10（60.0%）；从通过率看，最干净的高点是vuls 漏洞扫描器 · release 012，3/4（75.0%）。需要警惕的是qutebrowser 浏览器 · release 018，0/9（0.0%），所以这里不是泛泛地说强弱项，而是大型 Python/Django 应用修复在这次运行中比围绕 QtWebEngine 行为的浏览器/runtime 集成更能闭环。Qoder 给模型外面加了更强的工作流结构，因此稳定胜利更适合读成 model-plus-shell 的组合效果。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

Qoder shell 往往会把部分模型猜测压成更规整的补丁尝试。所以这张 suite 图更适合和 Qwen CLI / OpenCode 行对照，而不是当作纯模型能力。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

可以把 `"# 从 fork 进程调用 Display.display 的输出不可靠，并暴露 shutdown 死锁风险` 和 `Feature Request: Add flag key to batch evaluation response` 当成 shell 行为样本：差异不只是模型懂不懂，也在于工作流能否把补丁约束到可通过状态。

Qwen 3.7 Plus (1m) 的复核保留了 104 次成功中的 104 次，所以重点不是分数膨胀，而是模型在哪些地方能反复找到同类补丁。

{% include model-audit-card.html %}

对 Qoder-style 使用来说，重点是 shell 如何把模型猜测压成补丁。在把结果完全归因到底座模型之前，应先对照Open Library · release 013，6/10（60.0%）和qutebrowser 浏览器 · release 018，0/9（0.0%）。104/452 的单次尝试成功数应读成模型加 Qoder 工作流的结果，尤其要和直接 Qwen 行对照。

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
