---
layout: model
model_id: opencode-mimo25-tokenplan-high-20260527
title: "MiMo v2.5 on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-mimo25-tokenplan-high-20260527/
analysis_date: 2026-06-18
rank: 24
model_name: "MiMo v2.5"
model_raw: "xiaomi-token-plan-cn/mimo-v2.5"
provider_label: "Xiaomi"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A lower-table result with a few useful bright spots: 33/151 tasks solved at least once, 18/151 solved in all three attempts, with the clearest wins around automation and configuration-management work plus localized Go security-scanner changes."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 33 题，三次都解出 18 题；强项主要落在自动化和配置管理类改动以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 25.24
solved_attempts: 78
solved_unique_tasks: 33
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "21.9%"
pass_3_rate_pct: "11.9%"
pass_3_count: 18
attempt_score_pct: "17.2%"
tldr:
  - en: "MiMo v2.5 is best read as moderately stable: rank #24, 33 reached tasks, 18 stable solves."
    zh: "MiMo v2.5 更适合读成中等稳定型：排名 #24，触达 33 题，稳定解出 18 题。"
  - en: "Best suite signal: Ansible · release 002 at 7/10 (70.0%)."
    zh: "最强 suite 信号：Ansible 自动化 · release 002，7/10（70.0%）。"
  - en: "Weakest visible area: Open Library · release 014 at 0/10 (0.0%)."
    zh: "最弱可见区域：Open Library · release 014，0/10（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "25.24"
    note: "rank #24 of 32"
    note_zh: "32 个模型中排名 #24"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "18"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+15"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "17.2%"
    note: "78/453 solved attempts"
    note_zh: "453 次尝试中成功 78 次"
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
  - suite: release-zh-002-ansible-ansible
    label: "Ansible · release 002"
    label_zh: "Ansible 自动化 · release 002"
    repo: "ansible/ansible"
    total: 10
    solved: 7
    rate: 70.0
    rate_pct: "70.0%"
    pass3: 2
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 4
  - suite: release-zh-004-ansible-ansible
    label: "Ansible · release 004"
    label_zh: "Ansible 自动化 · release 004"
    repo: "ansible/ansible"
    total: 3
    solved: 1
    rate: 33.3
    rate_pct: "33.3%"
    pass3: 1
  - suite: release-zh-001-ansible-ansible
    label: "Ansible · release 001"
    label_zh: "Ansible 自动化 · release 001"
    repo: "ansible/ansible"
    total: 10
    solved: 3
    rate: 30.0
    rate_pct: "30.0%"
    pass3: 2
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    label_zh: "vuls 漏洞扫描器 · release 010"
    repo: "future-architect/vuls"
    total: 10
    solved: 3
    rate: 30.0
    rate_pct: "30.0%"
    pass3: 2
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: large Python/Django application repairs resisted this model-agent pairing."
    note_zh: "弱项簇：大型 Python/Django 应用修复对这个模型-agent 组合不友好。"
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: large Python/Django application repairs resisted this model-agent pairing."
    note_zh: "弱项簇：大型 Python/Django 应用修复对这个模型-agent 组合不友好。"
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
audit:
  harness_ok: 78
  reverified_ok: 47
  strict_rejected: 31
  accepted_pct: 60
  rejected_pct: 40
  score_before: "25.24"
  score_after: "25.24"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 47 of 78 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 78 次初始成功中的 47 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Introduce public methods to access PlayIterator._host_states"
    title_zh: "引入公共方法以访问 PlayIterator._host_states"
    meta: "ansible/ansible · solved 3/3"
    meta_zh: "ansible/ansible · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-002-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-002-ansible-ansible。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Severity values from Debian Security Tracker differ between repeated scans"
    title_zh: "Debian Security Tracker 的 severity 值在重复扫描之间不同"
    meta: "future-architect/vuls · solved 2/3"
    meta_zh: "future-architect/vuls · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-012-future-architect-vuls."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-012-future-architect-vuls。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "OFREP Bulk Evaluation Fails When flags Context Key Is Missing"
    title_zh: "当 flags 上下文键缺失时，OFREP 批量评估失败"
    meta: "flipt-io/flipt · solved 1/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 1 次"
    note: "Verifier pattern: apply-failed. Suite: release-zh-005-flipt-io-flipt."
    note_zh: "Verifier 信号：apply-failed。Suite：release-zh-005-flipt-io-flipt。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Add Reading-Log Counts to Solr Work Documents"
    title_zh: "向 Solr Work Documents 添加 Reading-Log Counts"
    meta: "internetarchive/openlibrary · solved 0/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-014-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-014-internetarchive-openlibrary。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "MiniMax M2.7 highspeed"
    note: "Rank #23 · 25.24 Final Score"
    note_zh: "排名 #23 · Final Score 25.24"
    url: /code-agent-bench/models/opencode-minimax27/
  - label: "One rank below"
    label_zh: "下一名"
    name: "LongCat 2.0 Preview"
    note: "Rank #25 · 24.78 Final Score"
    note_zh: "排名 #25 · Final Score 24.78"
    url: /code-agent-bench/models/opencode-longcat/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "MiMo v2.5 pro"
    note: "Rank #12 · 30.69 Final Score"
    note_zh: "排名 #12 · Final Score 30.69"
    url: /code-agent-bench/models/claude-mimo25pro/
---

<div class="bench-lang-en" markdown="1">

MiMo v2.5 is a moderately stable row around the #24 slot. The useful reading is not just the 25.24 score, but the split between 33 reached tasks and 18 stable solves.

The closest family reference is MiMo v2.5 pro at rank #12. Compared with that row, this one is 5.45 points behind, with 11 fewer reached tasks and 7 fewer stable solves.

The suite split is asymmetric: Ansible · release 002 at 7/10 (70.0%) supplies the main body of wins, vuls · release 012 at 3/4 (75.0%) supplies the clean spike, and Open Library · release 014 at 0/10 (0.0%) is where that pattern stops. Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The chart is not trying to crown a single strength; it shows how quickly the row falls from Ansible · release 002 at 7/10 (70.0%) to Open Library · release 014 at 0/10 (0.0%).

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The examples keep the middle-band story honest: `Introduce public methods to access PlayIterator._host_states` is the upside, `Add Reading-Log Counts to Solr Work Documents` is the failure surface, and the page should be read between those two poles.

The audit changes how to read MiMo v2.5: only 60% of initial solved attempts survive, with 31 rejected attempts, while the exported score field stays flat. Treat the wins as leads that need stricter confirmation.

{% include model-audit-card.html %}

In practice, read it through the gap between Ansible · release 002 at 7/10 (70.0%) and Open Library · release 014 at 0/10 (0.0%). That gap is more actionable than the rank because it says which repo shape gets coherent patches. The 78/453 attempt score is the backdrop; the article above is about which parts of that score are repeatable enough to matter.

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

MiMo v2.5 是一个排名 #24 附近的中等稳定型结果。它的重点不只是 25.24 分，而是 33 道触达题和 18 道稳定题之间的差距。

最接近的同系参照是排名 #12 的 MiMo v2.5 pro。和它相比，这一行最终分低 5.45 分，触达题少 11 个，稳定题少 7 个。

suite 分布是不对称的：Ansible 自动化 · release 002，7/10（70.0%）贡献主要胜利，vuls 漏洞扫描器 · release 012，3/4（75.0%）贡献最干净高点，而Open Library · release 014，0/10（0.0%）标出这种模式停止的地方。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这张图不是为了给单一强项加冕，而是展示这一行从Ansible 自动化 · release 002，7/10（70.0%）滑到Open Library · release 014，0/10（0.0%）有多快。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

这些案例让中段模型画像更具体：`引入公共方法以访问 PlayIterator._host_states` 是上限，`向 Solr Work Documents 添加 Reading-Log Counts` 是失败面，这页应该在两者之间读。

复核改变了 MiMo v2.5 的读法：初始成功只有 60% 保留下来，31 次被剔除，但当前导出的分数字段没有变化。原始胜利更适合作为线索，需要更严格确认。

{% include model-audit-card.html %}

实际选择时，更应该通过Ansible 自动化 · release 002，7/10（70.0%）和Open Library · release 014，0/10（0.0%）之间的落差来读它。这个落差比分数排名更可操作，因为它说明哪类代码库更容易得到连贯补丁。78/453 的单次尝试成功数只是背景；上面的文章重点是哪些部分足够可重复、值得当成能力看。

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
