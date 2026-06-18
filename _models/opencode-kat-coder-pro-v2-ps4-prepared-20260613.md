---
layout: model
model_id: opencode-kat-coder-pro-v2-ps4-prepared-20260613
title: "KAT Coder Pro v2 on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-kat-coder-pro-v2-ps4-prepared-20260613/
analysis_date: 2026-06-18
rank: 19
model_name: "KAT Coder Pro v2"
model_raw: "streamlake/kat-coder-pro-v2"
provider_label: "StreamLake"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.17.6"
subtitle: "A lower-table result with a few useful bright spots: 39/151 tasks solved at least once, 21/151 solved in all three attempts, with the clearest wins around large Python/Django application repairs plus localized Go security-scanner changes."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 39 题，三次都解出 21 题；强项主要落在大型 Python/Django 应用修复以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 27.97
solved_attempts: 90
solved_unique_tasks: 39
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "25.8%"
pass_3_rate_pct: "13.9%"
pass_3_count: 21
attempt_score_pct: "19.9%"
tldr:
  - en: "KAT Coder Pro v2 is best read as moderately stable: rank #19, 39 reached tasks, 21 stable solves."
    zh: "KAT Coder Pro v2 更适合读成中等稳定型：排名 #19，触达 39 题，稳定解出 21 题。"
  - en: "Best suite signal: Open Library · release 013 at 5/10 (50.0%)."
    zh: "最强 suite 信号：Open Library · release 013，5/10（50.0%）。"
  - en: "Weakest visible area: Flipt · release 005 at 0/10 (0.0%)."
    zh: "最弱可见区域：Flipt feature flag 服务 · release 005，0/10（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "27.97"
    note: "rank #19 of 32"
    note_zh: "32 个模型中排名 #19"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "21"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+18"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "19.9%"
    note: "90/453 solved attempts"
    note_zh: "453 次尝试中成功 90 次"
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
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 2
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
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
    pass3: 0
audit:
  harness_ok: 90
  reverified_ok: 54
  strict_rejected: 36
  accepted_pct: 60
  rejected_pct: 40
  score_before: "27.97"
  score_after: "27.97"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 54 of 90 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 90 次初始成功中的 54 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
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
    title: "Avoid double calculation of loops and delegate_to in TaskExecutor"
    title_zh: "避免在 TaskExecutor 中重复计算 loops 和 delegate_to"
    meta: "ansible/ansible · solved 2/3"
    meta_zh: "ansible/ansible · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-001-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-001-ansible-ansible。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Add Validation and Date Formatting Functions"
    title_zh: "添加验证和日期格式化函数"
    meta: "internetarchive/openlibrary · solved 1/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-013-internetarchive-openlibrary。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Alpine Linux vulnerability detection incorrectly handles source vs binary packages"
    title_zh: "Alpine Linux vulnerability detection 错误处理 source packages 与 binary packages"
    meta: "future-architect/vuls · solved 0/3"
    meta_zh: "future-architect/vuls · 3 次中成功 0 次"
    note: "Verifier pattern: apply-failed. Suite: release-zh-010-future-architect-vuls."
    note_zh: "Verifier 信号：apply-failed。Suite：release-zh-010-future-architect-vuls。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "Step 3.7 flash"
    note: "Rank #18 · 28.01 Final Score"
    note_zh: "排名 #18 · Final Score 28.01"
    url: /code-agent-bench/models/opencode-stepfun37-flash/
  - label: "One rank below"
    label_zh: "下一名"
    name: "MiMo v2.5"
    note: "Rank #20 · 27.04 Final Score"
    note_zh: "排名 #20 · Final Score 27.04"
    url: /code-agent-bench/models/claude-mimo25/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "KAT Coder Pro v2"
    note: "Rank #28 · 23.47 Final Score"
    note_zh: "排名 #28 · Final Score 23.47"
    url: /code-agent-bench/models/opencode-kat-coder-pro-v2-kat2/
---

<div class="bench-lang-en" markdown="1">

KAT Coder Pro v2 is a moderately stable row around the #19 slot. The useful reading is not just the 27.97 score, but the split between 39 reached tasks and 21 stable solves.

The closest family reference is KAT Coder Pro v2 at rank #28. Compared with that row, this one is 4.50 points ahead, with 10 more reached tasks and 4 more stable solves.

The volume win is Open Library · release 013 at 5/10 (50.0%), while the cleanest pass-rate spike is vuls · release 012 at 3/4 (75.0%). The warning label is Flipt · release 005 at 0/10 (0.0%), so the contrast is not generic strength versus weakness; it is large Python/Django application repairs holding together better than Go product plumbing across configuration, storage, and service APIs on this run. Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

This is a middle-band profile: the useful signal is the slope between Open Library · release 013 at 5/10 (50.0%) and Flipt · release 005 at 0/10 (0.0%).

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The examples keep the middle-band story honest: `Scan results miss Package URL (PURL) information in library output` is the upside, `Alpine Linux vulnerability detection incorrectly handles source vs binary packages` is the failure surface, and the page should be read between those two poles.

The audit changes how to read KAT Coder Pro v2: only 60% of initial solved attempts survive, with 36 rejected attempts, while the exported score field stays flat. Treat the wins as leads that need stricter confirmation.

{% include model-audit-card.html %}

In practice, read it through the gap between Open Library · release 013 at 5/10 (50.0%) and Flipt · release 005 at 0/10 (0.0%). That gap is more actionable than the rank because it says which repo shape gets coherent patches. The 90/453 attempt score is the backdrop; the article above is about which parts of that score are repeatable enough to matter.

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

KAT Coder Pro v2 是一个排名 #19 附近的中等稳定型结果。它的重点不只是 27.97 分，而是 39 道触达题和 21 道稳定题之间的差距。

最接近的同系参照是排名 #28 的 KAT Coder Pro v2。和它相比，这一行最终分高 4.50 分，触达题多 10 个，稳定题多 4 个。

从数量看，主要胜利来自Open Library · release 013，5/10（50.0%）；从通过率看，最干净的高点是vuls 漏洞扫描器 · release 012，3/4（75.0%）。需要警惕的是Flipt feature flag 服务 · release 005，0/10（0.0%），所以这里不是泛泛地说强弱项，而是大型 Python/Django 应用修复在这次运行中比横跨配置、存储和服务 API 的 Go 产品工程更能闭环。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这是一个中段模型画像：真正有用的信号，是Open Library · release 013，5/10（50.0%）到Flipt feature flag 服务 · release 005，0/10（0.0%）之间的落差。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

这些案例让中段模型画像更具体：`Library 输出中的扫描结果缺少 Package URL (PURL) 信息` 是上限，`Alpine Linux vulnerability detection 错误处理 source packages 与 binary packages` 是失败面，这页应该在两者之间读。

复核改变了 KAT Coder Pro v2 的读法：初始成功只有 60% 保留下来，36 次被剔除，但当前导出的分数字段没有变化。原始胜利更适合作为线索，需要更严格确认。

{% include model-audit-card.html %}

实际选择时，更应该通过Open Library · release 013，5/10（50.0%）和Flipt feature flag 服务 · release 005，0/10（0.0%）之间的落差来读它。这个落差比分数排名更可操作，因为它说明哪类代码库更容易得到连贯补丁。90/453 的单次尝试成功数只是背景；上面的文章重点是哪些部分足够可重复、值得当成能力看。

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
