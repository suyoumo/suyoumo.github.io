---
layout: model
model_id: opencode-kat-coder-pro-v2-kat2
title: "KAT Coder Pro v2 on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-kat-coder-pro-v2-kat2/
analysis_date: 2026-06-18
rank: 28
model_name: "KAT Coder Pro v2"
model_raw: "streamlake/kat-coder-pro-v2"
provider_label: "StreamLake"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A lower-table result with a few useful bright spots: 29/151 tasks solved at least once, 17/151 solved in all three attempts, with the clearest wins around automation and configuration-management work plus localized Go security-scanner changes."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 29 题，三次都解出 17 题；强项主要落在自动化和配置管理类改动以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 23.47
solved_attempts: 68
solved_unique_tasks: 29
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "19.2%"
pass_3_rate_pct: "11.3%"
pass_3_count: 17
attempt_score_pct: "15.0%"
tldr:
  - en: "KAT Coder Pro v2 is best read as moderately stable: rank #28, 29 reached tasks, 17 stable solves."
    zh: "KAT Coder Pro v2 更适合读成中等稳定型：排名 #28，触达 29 题，稳定解出 17 题。"
  - en: "Best suite signal: Ansible · release 001 at 4/10 (40.0%)."
    zh: "最强 suite 信号：Ansible 自动化 · release 001，4/10（40.0%）。"
  - en: "Weakest visible area: Open Library · release 013 at 0/10 (0.0%)."
    zh: "最弱可见区域：Open Library · release 013，0/10（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "23.47"
    note: "rank #28 of 32"
    note_zh: "32 个模型中排名 #28"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "17"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+12"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "15.0%"
    note: "68/453 solved attempts"
    note_zh: "453 次尝试中成功 68 次"
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
  - suite: release-zh-001-ansible-ansible
    label: "Ansible · release 001"
    label_zh: "Ansible 自动化 · release 001"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 2
  - suite: release-zh-002-ansible-ansible
    label: "Ansible · release 002"
    label_zh: "Ansible 自动化 · release 002"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 2
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 4
    rate: 40.0
    rate_pct: "40.0%"
    pass3: 3
  - suite: release-zh-011-future-architect-vuls
    label: "vuls · release 011"
    label_zh: "vuls 漏洞扫描器 · release 011"
    repo: "future-architect/vuls"
    total: 10
    solved: 4
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
    pass3: 0
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: large Python/Django application repairs resisted this model-agent pairing."
    note_zh: "弱项簇：大型 Python/Django 应用修复对这个模型-agent 组合不友好。"
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
audit:
  harness_ok: 68
  reverified_ok: 68
  strict_rejected: 0
  accepted_pct: 100
  rejected_pct: 0
  score_before: "23.47"
  score_after: "23.47"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 68 of 68 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 68 次初始成功中的 68 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
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
    title: "[Bug]: Cache Middleware Causing Authorization Bypass and Performance Issues"
    title_zh: "[Bug]: Cache Middleware Causing Authorization Bypass and Performance Issues"
    meta: "flipt-io/flipt · solved 2/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-008-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-008-flipt-io-flipt。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Identify CentOS Stream from CentOS to prevent incorrect EOL status and inaccurate vulnerability lookups"
    title_zh: "从 CentOS 中识别 CentOS Stream，以防止 EOL 状态错误和漏洞查询不准确"
    meta: "future-architect/vuls · solved 1/3"
    meta_zh: "future-architect/vuls · 3 次中成功 1 次"
    note: "Verifier pattern: apply-failed. Suite: release-zh-011-future-architect-vuls."
    note_zh: "Verifier 信号：apply-failed。Suite：release-zh-011-future-architect-vuls。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Host blocking does not apply to subdomains when only the parent domain is listed"
    title_zh: "当只在主域名中列出父域时，基于 hosts 的屏蔽方式不会对其子域名生效。请修复该问题，使父域名规则能正确影响相关子域，同时仍然遵守现有的内容屏蔽开关和白名单逻辑。"
    meta: "qutebrowser/qutebrowser · solved 0/3"
    meta_zh: "qutebrowser/qutebrowser · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-018-qutebrowser-qutebrowser."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-018-qutebrowser-qutebrowser。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "GLM 4.7"
    note: "Rank #27 · 24.03 Final Score"
    note_zh: "排名 #27 · Final Score 24.03"
    url: /code-agent-bench/models/opencode-glm47/
  - label: "One rank below"
    label_zh: "下一名"
    name: "SenseNova 6.7 flash lite"
    note: "Rank #29 · 23.14 Final Score"
    note_zh: "排名 #29 · Final Score 23.14"
    url: /code-agent-bench/models/opencode-sensenova67-flash-lite/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "KAT Coder Pro v2"
    note: "Rank #19 · 27.97 Final Score"
    note_zh: "排名 #19 · Final Score 27.97"
    url: /code-agent-bench/models/opencode-kat-coder-pro-v2-ps4-prepared-20260613/
---

<div class="bench-lang-en" markdown="1">

KAT Coder Pro v2 is a moderately stable row around the #28 slot. The useful reading is not just the 23.47 score, but the split between 29 reached tasks and 17 stable solves.

The closest family reference is KAT Coder Pro v2 at rank #19. Compared with that row, this one is 4.50 points behind, with 10 fewer reached tasks and 4 fewer stable solves.

The volume win is Ansible · release 001 at 4/10 (40.0%), while the cleanest pass-rate spike is vuls · release 012 at 3/4 (75.0%). The warning label is Open Library · release 013 at 0/10 (0.0%), so the contrast is not generic strength versus weakness; it is automation and configuration-management work holding together better than large Python/Django application repairs on this run. Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

At this end of the table, the weak bars are more informative than the wins. They show which task families break first when the model-agent loop runs out of reliable planning.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

At this rank, `Host blocking does not apply to subdomains when only the parent domain is listed` matters as much as the wins. It shows the task shape where the model-agent loop fails before it can produce a meaningful verifier-backed patch.

The verifier audit keeps 68/68 solved attempts for KAT Coder Pro v2, so the interesting question is not score inflation; it is where the model repeatedly finds the same kind of patch.

{% include model-audit-card.html %}

This row is more useful as a failure map than as a default choice. Look at Open Library · release 013 at 0/10 (0.0%) first: it shows the task shape where the loop loses traction. With 68/453 solved attempts, the page is most useful for seeing where the agent loop breaks before it becomes a dependable option.

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

KAT Coder Pro v2 是一个排名 #28 附近的中等稳定型结果。它的重点不只是 23.47 分，而是 29 道触达题和 17 道稳定题之间的差距。

最接近的同系参照是排名 #19 的 KAT Coder Pro v2。和它相比，这一行最终分低 4.50 分，触达题少 10 个，稳定题少 4 个。

从数量看，主要胜利来自Ansible 自动化 · release 001，4/10（40.0%）；从通过率看，最干净的高点是vuls 漏洞扫描器 · release 012，3/4（75.0%）。需要警惕的是Open Library · release 013，0/10（0.0%），所以这里不是泛泛地说强弱项，而是自动化和配置管理类改动在这次运行中比大型 Python/Django 应用修复更能闭环。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

在榜单后段，低柱子往往比胜利更有信息量。它们说明模型-agent 循环在哪些任务家族上最先失去可靠规划。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

在这个排名段，`当只在主域名中列出父域时，基于 hosts 的屏蔽方式不会对其子域名生效。请修复该问题，使父域名规则能正确影响相关子域，同时仍然遵守现有的内容屏蔽开关和白名单逻辑。` 和成功案例一样重要。它说明模型-agent 循环在哪种任务形态上还没形成有效 verifier-backed patch。

KAT Coder Pro v2 的复核保留了 68 次成功中的 68 次，所以重点不是分数膨胀，而是模型在哪些地方能反复找到同类补丁。

{% include model-audit-card.html %}

这一行更适合作为失败地图，而不是默认选择。先看Open Library · release 013，0/10（0.0%）：它展示了模型-agent 循环最容易失去抓手的任务形态。在 453 次尝试中只成功 68 次时，这页最有价值的是看 agent loop 在哪里先断掉。

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
