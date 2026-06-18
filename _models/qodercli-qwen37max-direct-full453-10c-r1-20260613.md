---
layout: model
model_id: qodercli-qwen37max-direct-full453-10c-r1-20260613
title: "Qwen 3.7 Max (1m) on CodeAgentBench"
permalink: /code-agent-bench/models/qodercli-qwen37max-direct-full453-10c-r1-20260613/
analysis_date: 2026-06-18
rank: 9
model_name: "Qwen 3.7 Max (1m)"
model_raw: "Qwen3.7-Max#context-window=1000000"
provider_label: "Qwen"
agent_label: "Qoder"
agent_version: "qodercli-1.0.19"
subtitle: "A competitive mid-table result with 47/151 tasks solved at least once and 25/151 solved in all three attempts; strongest around large Python/Django application repairs plus localized Go security-scanner changes."
subtitle_zh: "这是一个有竞争力的中游结果：151 题中至少一次解出 47 题，三次都解出 25 题；强项主要落在大型 Python/Django 应用修复以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 31.62
solved_attempts: 109
solved_unique_tasks: 47
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "31.1%"
pass_3_rate_pct: "16.6%"
pass_3_count: 25
attempt_score_pct: "24.1%"
tldr:
  - en: "Qwen 3.7 Max (1m) is best read as moderately stable: rank #9, 47 reached tasks, 25 stable solves."
    zh: "Qwen 3.7 Max (1m) 更适合读成中等稳定型：排名 #9，触达 47 题，稳定解出 25 题。"
  - en: "Best suite signal: Open Library · release 013 at 8/10 (80.0%)."
    zh: "最强 suite 信号：Open Library · release 013，8/10（80.0%）。"
  - en: "Weakest visible area: Flipt · release 005 at 0/10 (0.0%)."
    zh: "最弱可见区域：Flipt feature flag 服务 · release 005，0/10（0.0%）。"
  - en: "Qoder adds more workflow structure around the model, so its stable wins should be read as model-plus-shell behavior."
    zh: "Qoder 给模型外面加了更强的工作流结构，因此稳定胜利更适合读成 model-plus-shell 的组合效果。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "31.62"
    note: "rank #9 of 32"
    note_zh: "32 个模型中排名 #9"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "25"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+22"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "24.1%"
    note: "109/453 solved attempts"
    note_zh: "453 次尝试中成功 109 次"
suite_profile:
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    label_zh: "vuls 漏洞扫描器 · release 012"
    repo: "future-architect/vuls"
    total: 4
    solved: 4
    rate: 100.0
    rate_pct: "100.0%"
    pass3: 3
    note: "Best visible cluster for this row: 4/4 tasks reached."
    note_zh: "这一行最明显的强项簇：4 题中解出 4 题。"
  - suite: release-zh-013-internetarchive-openlibrary
    label: "Open Library · release 013"
    label_zh: "Open Library · release 013"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 8
    rate: 80.0
    rate_pct: "80.0%"
    pass3: 4
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
    total: 10
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
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
  - suite: release-zh-011-future-architect-vuls
    label: "vuls · release 011"
    label_zh: "vuls 漏洞扫描器 · release 011"
    repo: "future-architect/vuls"
    total: 10
    solved: 4
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
  - suite: release-zh-008-flipt-io-flipt
    label: "Flipt · release 008"
    label_zh: "Flipt feature flag 服务 · release 008"
    repo: "flipt-io/flipt"
    total: 10
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 0
audit:
  harness_ok: 109
  reverified_ok: 84
  strict_rejected: 25
  accepted_pct: 77
  rejected_pct: 23
  score_before: "31.62"
  score_after: "31.62"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 84 of 109 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 109 次初始成功中的 84 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
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
    title: "[Bug]: Cache Middleware Causing Authorization Bypass and Performance Issues"
    title_zh: "[Bug]: Cache Middleware Causing Authorization Bypass and Performance Issues"
    meta: "flipt-io/flipt · solved 2/3"
    meta_zh: "flipt-io/flipt · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-008-flipt-io-flipt."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-008-flipt-io-flipt。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Python module shebang not honored; interpreter forced to /usr/bin/python"
    title_zh: "Python module shebang 未被遵守；interpreter 被强制为 /usr/bin/python"
    meta: "ansible/ansible · solved 1/3"
    meta_zh: "ansible/ansible · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-002-ansible-ansible."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-002-ansible-ansible。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Add Support for Galaxy Server Configuration in ansible-config Command"
    title_zh: "在 ansible-config command 中支持 Galaxy Server Configuration"
    meta: "ansible/ansible · solved 0/3"
    meta_zh: "ansible/ansible · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-001-ansible-ansible."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-001-ansible-ansible。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "GLM 5.1"
    note: "Rank #8 · 31.74 Final Score"
    note_zh: "排名 #8 · Final Score 31.74"
    url: /code-agent-bench/models/opencode-glm51/
  - label: "One rank below"
    label_zh: "下一名"
    name: "Qwen 3.5 plus"
    note: "Rank #10 · 31.39 Final Score"
    note_zh: "排名 #10 · Final Score 31.39"
    url: /code-agent-bench/models/qwen-3-5plus/
  - label: "Same agent"
    label_zh: "同 agent"
    name: "Qwen 3.7 Plus (1m)"
    note: "Rank #11 · 31.21 Final Score"
    note_zh: "排名 #11 · Final Score 31.21"
    url: /code-agent-bench/models/qodercli-qwen37plus-direct-full453-10c-r1-20260615/
---

<div class="bench-lang-en" markdown="1">

Qwen 3.7 Max (1m) is a moderately stable row around the #9 slot. The useful reading is not just the 31.62 score, but the split between 47 reached tasks and 25 stable solves.

The closest family reference is Qwen 3.5 plus at rank #10. Compared with that row, this one is 0.23 points ahead, with 4 fewer reached tasks and 3 more stable solves.

The suite split is asymmetric: Open Library · release 013 at 8/10 (80.0%) supplies the main body of wins, vuls · release 012 at 4/4 (100.0%) supplies the clean spike, and Flipt · release 005 at 0/10 (0.0%) is where that pattern stops. Qoder adds more workflow structure around the model, so its stable wins should be read as model-plus-shell behavior.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The bars are a tooling story as much as a model story: Qoder helps on structured repair loops, but the weak suite still shows where orchestration cannot rescue the patch.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

Look at `psrp connection plugin accepts undocumented extras, causing ambiguous and inconsistent configuration.` and `[Bug]: Cache Middleware Causing Authorization Bypass and Performance Issues` as shell-behavior examples. The difference is not only model knowledge; it is whether the workflow keeps the patch disciplined enough to pass.

The audit trims 25 solved attempts from Qwen 3.7 Max (1m) but still keeps 77% of the solved set, so the suite shape remains useful even where individual wins are debatable.

{% include model-audit-card.html %}

For Qoder-style use, the interesting part is how the shell converts model guesses into patches. Compare Open Library · release 013 at 8/10 (80.0%) with Flipt · release 005 at 0/10 (0.0%) before attributing the result to the base model alone. The 109/453 attempt score should be read as model plus Qoder workflow, especially when comparing it with direct Qwen rows.

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

Qwen 3.7 Max (1m) 是一个排名 #9 附近的中等稳定型结果。它的重点不只是 31.62 分，而是 47 道触达题和 25 道稳定题之间的差距。

最接近的同系参照是排名 #10 的 Qwen 3.5 plus。和它相比，这一行最终分高 0.23 分，触达题少 4 个，稳定题多 3 个。

suite 分布是不对称的：Open Library · release 013，8/10（80.0%）贡献主要胜利，vuls 漏洞扫描器 · release 012，4/4（100.0%）贡献最干净高点，而Flipt feature flag 服务 · release 005，0/10（0.0%）标出这种模式停止的地方。Qoder 给模型外面加了更强的工作流结构，因此稳定胜利更适合读成 model-plus-shell 的组合效果。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

这些柱子既是模型故事，也是工具故事：Qoder 能帮助结构化修复循环，但弱 suite 仍说明哪些地方不是编排层能救回来的。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

可以把 `psrp connection plugin 接受未文档化 extras，导致配置含糊且不一致。` 和 `[Bug]: Cache Middleware Causing Authorization Bypass and Performance Issues` 当成 shell 行为样本：差异不只是模型懂不懂，也在于工作流能否把补丁约束到可通过状态。

复核从 Qwen 3.7 Max (1m) 中剔除了 25 次成功，但仍保留 77% 的成功集合，因此即便个别胜利有争议，suite 形状仍然有参考价值。

{% include model-audit-card.html %}

对 Qoder-style 使用来说，重点是 shell 如何把模型猜测压成补丁。在把结果完全归因到底座模型之前，应先对照Open Library · release 013，8/10（80.0%）和Flipt feature flag 服务 · release 005，0/10（0.0%）。109/453 的单次尝试成功数应读成模型加 Qoder 工作流的结果，尤其要和直接 Qwen 行对照。

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
