---
layout: model
model_id: opencode-stepfun35
title: "Step 3.5 flash on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-stepfun35/
analysis_date: 2026-06-18
rank: 31
model_name: "Step 3.5 flash"
model_raw: "stepfun/step-3.5-flash"
provider_label: "StepFun"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A lower-table result with a few useful bright spots: 21/151 tasks solved at least once, 8/151 solved in all three attempts, with the clearest wins around automation and configuration-management work plus Go product plumbing across configuration, storage, and service APIs."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 21 题，三次都解出 8 题；强项主要落在自动化和配置管理类改动以及横跨配置、存储和服务 API 的 Go 产品工程。"
final_score: 17.04
solved_attempts: 42
solved_unique_tasks: 21
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "13.9%"
pass_3_rate_pct: "5.3%"
pass_3_count: 8
attempt_score_pct: "9.3%"
tldr:
  - en: "Step 3.5 flash is best read as volatile explorer: rank #31, 21 reached tasks, 8 stable solves."
    zh: "Step 3.5 flash 更适合读成探索型但波动较大：排名 #31，触达 21 题，稳定解出 8 题。"
  - en: "Best suite signal: Ansible · release 003 at 4/10 (40.0%)."
    zh: "最强 suite 信号：Ansible 自动化 · release 003，4/10（40.0%）。"
  - en: "Weakest visible area: vuls · release 011 at 0/10 (0.0%)."
    zh: "最弱可见区域：vuls 漏洞扫描器 · release 011，0/10（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "17.04"
    note: "rank #31 of 32"
    note_zh: "32 个模型中排名 #31"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "8"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+13"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "9.3%"
    note: "42/453 solved attempts"
    note_zh: "453 次尝试中成功 42 次"
suite_profile:
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    label_zh: "vuls 漏洞扫描器 · release 012"
    repo: "future-architect/vuls"
    total: 4
    solved: 2
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 2
    note: "Best visible cluster for this row: 2/4 tasks reached."
    note_zh: "这一行最明显的强项簇：4 题中解出 2 题。"
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
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
  - suite: release-zh-007-flipt-io-flipt
    label: "Flipt · release 007"
    label_zh: "Flipt feature flag 服务 · release 007"
    repo: "flipt-io/flipt"
    total: 10
    solved: 3
    rate: 30.0
    rate_pct: "30.0%"
    pass3: 1
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    label_zh: "vuls 漏洞扫描器 · release 010"
    repo: "future-architect/vuls"
    total: 10
    solved: 3
    rate: 30.0
    rate_pct: "30.0%"
    pass3: 1
  - suite: release-zh-001-ansible-ansible
    label: "Ansible · release 001"
    label_zh: "Ansible 自动化 · release 001"
    repo: "ansible/ansible"
    total: 10
    solved: 2
    rate: 20.0
    rate_pct: "20.0%"
    pass3: 1
  - suite: release-zh-011-future-architect-vuls
    label: "vuls · release 011"
    label_zh: "vuls 漏洞扫描器 · release 011"
    repo: "future-architect/vuls"
    total: 10
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "Weak cluster: localized Go security-scanner changes resisted this model-agent pairing."
    note_zh: "弱项簇：边界相对清楚的 Go 漏洞扫描器改动对这个模型-agent 组合不友好。"
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
  harness_ok: 42
  reverified_ok: 39
  strict_rejected: 3
  accepted_pct: 93
  rejected_pct: 7
  score_before: "17.04"
  score_after: "17.04"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 39 of 42 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 42 次初始成功中的 39 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
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
    title: "Fix: correct WordPress core CVE attribution and make vulnerability filtering operate at the CVE-collection level"
    title_zh: "Fix: correct WordPress core CVE attribution and make vulnerability filtering operate at the CVE-collection level"
    meta: "future-architect/vuls · solved 2/3"
    meta_zh: "future-architect/vuls · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-010-future-architect-vuls."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-010-future-architect-vuls。"
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
    title: "Redis cache backend cannot connect to TLS-enabled Redis servers without additional configuration options"
    title_zh: "Redis 缓存后端缺少额外配置选项，无法连接启用 TLS 的 Redis 服务器"
    meta: "flipt-io/flipt · solved 0/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 0 次"
    note: "Verifier pattern: apply-failed. Suite: release-zh-009-flipt-io-flipt."
    note_zh: "Verifier 信号：apply-failed。Suite：release-zh-009-flipt-io-flipt。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "doubao seed 2.0 code"
    note: "Rank #30 · 19.42 Final Score"
    note_zh: "排名 #30 · Final Score 19.42"
    url: /code-agent-bench/models/opencode-doubao-2-code/
  - label: "One rank below"
    label_zh: "下一名"
    name: "DeepSeek v4 flash (max)"
    note: "Rank #32 · 16.22 Final Score"
    note_zh: "排名 #32 · Final Score 16.22"
    url: /code-agent-bench/models/deepseek-tui-v4-flash-max/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "Step 3.7 flash"
    note: "Rank #18 · 28.01 Final Score"
    note_zh: "排名 #18 · Final Score 28.01"
    url: /code-agent-bench/models/opencode-stepfun37-flash/
---

<div class="bench-lang-en" markdown="1">

Step 3.5 flash is a volatile explorer row around the #31 slot. The useful reading is not just the 17.04 score, but the split between 21 reached tasks and 8 stable solves.

The closest family reference is Step 3.7 flash at rank #18. Compared with that row, this one is 10.97 points behind, with 22 fewer reached tasks and 10 fewer stable solves.

The volume win is Ansible · release 003 at 4/10 (40.0%), while the cleanest pass-rate spike is vuls · release 012 at 2/4 (50.0%). The warning label is vuls · release 011 at 0/10 (0.0%), so the contrast is not generic strength versus weakness; it is automation and configuration-management work holding together better than localized Go security-scanner changes on this run. Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

At this end of the table, the weak bars are more informative than the wins. They show which task families break first when the model-agent loop runs out of reliable planning.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

At this rank, `Redis cache backend cannot connect to TLS-enabled Redis servers without additional configuration options` matters as much as the wins. It shows the task shape where the model-agent loop fails before it can produce a meaningful verifier-backed patch.

The audit trims 3 solved attempts from Step 3.5 flash but still keeps 93% of the solved set, so the suite shape remains useful even where individual wins are debatable.

{% include model-audit-card.html %}

This row is more useful as a failure map than as a default choice. Look at vuls · release 011 at 0/10 (0.0%) first: it shows the task shape where the loop loses traction. With 42/453 solved attempts, the page is most useful for seeing where the agent loop breaks before it becomes a dependable option.

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

Step 3.5 flash 是一个排名 #31 附近的探索型但波动较大结果。它的重点不只是 17.04 分，而是 21 道触达题和 8 道稳定题之间的差距。

最接近的同系参照是排名 #18 的 Step 3.7 flash。和它相比，这一行最终分低 10.97 分，触达题少 22 个，稳定题少 10 个。

从数量看，主要胜利来自Ansible 自动化 · release 003，4/10（40.0%）；从通过率看，最干净的高点是vuls 漏洞扫描器 · release 012，2/4（50.0%）。需要警惕的是vuls 漏洞扫描器 · release 011，0/10（0.0%），所以这里不是泛泛地说强弱项，而是自动化和配置管理类改动在这次运行中比边界相对清楚的 Go 漏洞扫描器改动更能闭环。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

在榜单后段，低柱子往往比胜利更有信息量。它们说明模型-agent 循环在哪些任务家族上最先失去可靠规划。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

在这个排名段，`Redis 缓存后端缺少额外配置选项，无法连接启用 TLS 的 Redis 服务器` 和成功案例一样重要。它说明模型-agent 循环在哪种任务形态上还没形成有效 verifier-backed patch。

复核从 Step 3.5 flash 中剔除了 3 次成功，但仍保留 93% 的成功集合，因此即便个别胜利有争议，suite 形状仍然有参考价值。

{% include model-audit-card.html %}

这一行更适合作为失败地图，而不是默认选择。先看vuls 漏洞扫描器 · release 011，0/10（0.0%）：它展示了模型-agent 循环最容易失去抓手的任务形态。在 453 次尝试中只成功 42 次时，这页最有价值的是看 agent loop 在哪里先断掉。

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
