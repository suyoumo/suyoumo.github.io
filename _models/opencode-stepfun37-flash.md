---
layout: model
model_id: opencode-stepfun37-flash
title: "Step 3.7 flash on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-stepfun37-flash/
analysis_date: 2026-06-18
rank: 18
model_name: "Step 3.7 flash"
model_raw: "stepfun/step-3.7-flash"
provider_label: "StepFun"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A lower-table result with a few useful bright spots: 43/151 tasks solved at least once, 18/151 solved in all three attempts, with the clearest wins around large Python/Django application repairs plus localized Go security-scanner changes."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 43 题，三次都解出 18 题；强项主要落在大型 Python/Django 应用修复以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 28.01
solved_attempts: 91
solved_unique_tasks: 43
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "28.5%"
pass_3_rate_pct: "11.9%"
pass_3_count: 18
attempt_score_pct: "20.1%"
tldr:
  - en: "Step 3.7 flash is best read as volatile explorer: rank #18, 43 reached tasks, 18 stable solves."
    zh: "Step 3.7 flash 更适合读成探索型但波动较大：排名 #18，触达 43 题，稳定解出 18 题。"
  - en: "Best suite signal: Open Library · release 013 at 7/10 (70.0%)."
    zh: "最强 suite 信号：Open Library · release 013，7/10（70.0%）。"
  - en: "Weakest visible area: qutebrowser · release 018 at 0/9 (0.0%)."
    zh: "最弱可见区域：qutebrowser 浏览器 · release 018，0/9（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "28.01"
    note: "rank #18 of 32"
    note_zh: "32 个模型中排名 #18"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "18"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+25"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "20.1%"
    note: "91/453 solved attempts"
    note_zh: "453 次尝试中成功 91 次"
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
    solved: 7
    rate: 70.0
    rate_pct: "70.0%"
    pass3: 1
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 2
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
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
    pass3: 3
  - suite: release-zh-014-internetarchive-openlibrary
    label: "Open Library · release 014"
    label_zh: "Open Library · release 014"
    repo: "internetarchive/openlibrary"
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
    pass3: 1
audit:
  harness_ok: 91
  reverified_ok: 57
  strict_rejected: 34
  accepted_pct: 63
  rejected_pct: 37
  score_before: "28.01"
  score_after: "28.01"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 57 of 91 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 91 次初始成功中的 57 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Enhance Kernel Version Handling for Debian Scans in Docker, or when the kernel version cannot be obtained"
    title_zh: "增强 Docker 中 Debian 扫描的 Kernel 版本处理，或在无法获取 kernel 版本时"
    meta: "future-architect/vuls · solved 3/3"
    meta_zh: "future-architect/vuls · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-010-future-architect-vuls."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-010-future-architect-vuls。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Evaluation responses lack contextual reason for the result"
    title_zh: "Evaluation responses lack contextual reason for the result"
    meta: "flipt-io/flipt · solved 2/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-007-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-007-flipt-io-flipt。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Enhance Language Parsing in MARC Records"
    title_zh: "增强 MARC 记录中的语言解析"
    meta: "internetarchive/openlibrary · solved 1/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-015-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-015-internetarchive-openlibrary。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Configuration refactoring to separate warnings from Config and deprecate ui.enabled"
    title_zh: "配置重构：将警告与 Config 分离并弃用 ui.enabled"
    meta: "flipt-io/flipt · solved 0/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-006-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-006-flipt-io-flipt。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "Qwen 3.6 plus"
    note: "Rank #17 · 28.43 Final Score"
    note_zh: "排名 #17 · Final Score 28.43"
    url: /code-agent-bench/models/qwen-3-6plus/
  - label: "One rank below"
    label_zh: "下一名"
    name: "KAT Coder Pro v2"
    note: "Rank #19 · 27.97 Final Score"
    note_zh: "排名 #19 · Final Score 27.97"
    url: /code-agent-bench/models/opencode-kat-coder-pro-v2-ps4-prepared-20260613/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "Step 3.5 flash 2603"
    note: "Rank #26 · 24.21 Final Score"
    note_zh: "排名 #26 · Final Score 24.21"
    url: /code-agent-bench/models/opencode-stepfun35-2603/
---

<div class="bench-lang-en" markdown="1">

Step 3.7 flash is broad but volatile. It can touch 43/151 tasks, yet only 18 become 3/3 solves, so much of its value comes from retrying the same benchmark surface.

The closest family reference is Step 3.5 flash 2603 at rank #26. Compared with that row, this one is 3.79 points ahead, with 6 more reached tasks and 5 more stable solves.

The volume win is Open Library · release 013 at 7/10 (70.0%), while the cleanest pass-rate spike is vuls · release 012 at 3/4 (75.0%). The warning label is qutebrowser · release 018 at 0/9 (0.0%), so the contrast is not generic strength versus weakness; it is large Python/Django application repairs holding together better than browser/runtime integration around QtWebEngine behavior on this run. Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The important visual cue is the gap between high-reach suites and low Pass^3 counts. This model can often locate the neighborhood of the fix, but many patches do not survive three independent runs.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The useful contrast is between `Enhance Kernel Version Handling for Debian Scans in Docker, or when the kernel version cannot be obtained` (future-architect/vuls · solved 3/3) and `Evaluation responses lack contextual reason for the result` (flipt-io/flipt · solved 2/3). The model reaches both kinds of problems, but only one becomes dependable.

The audit changes how to read Step 3.7 flash: only 63% of initial solved attempts survive, with 34 rejected attempts, while the exported score field stays flat. Treat the wins as leads that need stricter confirmation.

{% include model-audit-card.html %}

Use it when breadth matters more than deterministic replay. It can find openings around Open Library · release 013 at 7/10 (70.0%), but the 25-task reach gap says a second or third run may tell a different story. The 91/453 attempt score is best read as exploration bandwidth: 43 tasks are reachable, but many need retry luck.

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

Step 3.7 flash 的特点是覆盖不窄但波动较大。它能至少一次摸到 43/151 题，但只有 18 题能做到 3/3，因此很大一部分价值来自重试。

最接近的同系参照是排名 #26 的 Step 3.5 flash 2603。和它相比，这一行最终分高 3.79 分，触达题多 6 个，稳定题多 5 个。

从数量看，主要胜利来自Open Library · release 013，7/10（70.0%）；从通过率看，最干净的高点是vuls 漏洞扫描器 · release 012，3/4（75.0%）。需要警惕的是qutebrowser 浏览器 · release 018，0/9（0.0%），所以这里不是泛泛地说强弱项，而是大型 Python/Django 应用修复在这次运行中比围绕 QtWebEngine 行为的浏览器/runtime 集成更能闭环。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这张图最重要的信号，是高触达 suite 和较低 Pass^3 之间的落差。模型经常能找到修复附近的位置，但很多补丁不能在三次独立运行中稳定复现。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

最有用的对比是 `增强 Docker 中 Debian 扫描的 Kernel 版本处理，或在无法获取 kernel 版本时`（future-architect/vuls · 3 次中成功 3 次）和 `Evaluation responses lack contextual reason for the result`（flipt-io/flipt · 3 次中成功 2 次）：模型都能触达，但只有前者变成可靠结果。

复核改变了 Step 3.7 flash 的读法：初始成功只有 63% 保留下来，34 次被剔除，但当前导出的分数字段没有变化。原始胜利更适合作为线索，需要更严格确认。

{% include model-audit-card.html %}

当你更看重覆盖面而不是确定复现时，它更合适。它能在Open Library · release 013，7/10（70.0%）附近找到入口，但 25 题的覆盖-稳定差说明第二、第三次运行可能给出不同结果。91/453 的单次尝试成功数更像探索带宽：43 道题能触达，但很多仍需要重试运气。

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
