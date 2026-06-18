---
layout: model
model_id: opencode-minimax-m3
title: "MiniMax M3 on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-minimax-m3/
analysis_date: 2026-06-18
rank: 6
model_name: "MiniMax M3"
model_raw: "minimax-cn-coding-plan/MiniMax-M3"
provider_label: "MiniMax"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A competitive mid-table result with 56/151 tasks solved at least once and 25/151 solved in all three attempts; strongest around large Python/Django application repairs plus automation and configuration-management work."
subtitle_zh: "这是一个有竞争力的中游结果：151 题中至少一次解出 56 题，三次都解出 25 题；强项主要落在大型 Python/Django 应用修复以及自动化和配置管理类改动。"
final_score: 33.91
solved_attempts: 120
solved_unique_tasks: 56
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "37.1%"
pass_3_rate_pct: "16.6%"
pass_3_count: 25
attempt_score_pct: "26.5%"
tldr:
  - en: "MiniMax M3 is best read as volatile explorer: rank #6, 56 reached tasks, 25 stable solves."
    zh: "MiniMax M3 更适合读成探索型但波动较大：排名 #6，触达 56 题，稳定解出 25 题。"
  - en: "Best suite signal: Open Library · release 013 at 8/10 (80.0%)."
    zh: "最强 suite 信号：Open Library · release 013，8/10（80.0%）。"
  - en: "Weakest visible area: Flipt · release 005 at 0/10 (0.0%)."
    zh: "最弱可见区域：Flipt feature flag 服务 · release 005，0/10（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "33.91"
    note: "rank #6 of 32"
    note_zh: "32 个模型中排名 #6"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "25"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+31"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "26.5%"
    note: "120/453 solved attempts"
    note_zh: "453 次尝试中成功 120 次"
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
    solved: 7
    rate: 70.0
    rate_pct: "70.0%"
    pass3: 1
  - suite: release-zh-004-ansible-ansible
    label: "Ansible · release 004"
    label_zh: "Ansible 自动化 · release 004"
    repo: "ansible/ansible"
    total: 3
    solved: 2
    rate: 66.7
    rate_pct: "66.7%"
    pass3: 1
  - suite: release-zh-001-ansible-ansible
    label: "Ansible · release 001"
    label_zh: "Ansible 自动化 · release 001"
    repo: "ansible/ansible"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 3
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 4
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
  harness_ok: 120
  reverified_ok: 68
  strict_rejected: 52
  accepted_pct: 57
  rejected_pct: 43
  score_before: "33.91"
  score_after: "33.91"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 68 of 120 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 120 次初始成功中的 68 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Booknotes are deleted when updating work_id with conflicts"
    title_zh: "更新存在冲突的 work_id 时会删除 Booknotes"
    meta: "internetarchive/openlibrary · solved 3/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-013-internetarchive-openlibrary。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Refactor: Remove ListMixin and consolidate list functionality"
    title_zh: "Refactor：移除 ListMixin 并整合 list 功能"
    meta: "internetarchive/openlibrary · solved 2/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-015-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-015-internetarchive-openlibrary。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Enhance Language Parsing in MARC Records"
    title_zh: "增强 MARC 记录中的语言解析"
    meta: "internetarchive/openlibrary · solved 1/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 1 次"
    note: "Verifier pattern: blocked-suspicious-patch. Suite: release-zh-015-internetarchive-openlibrary."
    note_zh: "Verifier 信号：blocked-suspicious-patch。Suite：release-zh-015-internetarchive-openlibrary。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "ImportAPI does not correctly split publishers and publish_places when the publisher field contains multiple locations"
    title_zh: "ImportAPI 在 publisher 字段包含多个位置时无法正确拆分 publishers 和 publish_places"
    meta: "internetarchive/openlibrary · solved 0/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 0 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-013-internetarchive-openlibrary。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "Kimi K2.6(Kimi for Coding)"
    note: "Rank #5 · 35.45 Final Score"
    note_zh: "排名 #5 · Final Score 35.45"
    url: /code-agent-bench/models/kimi-for-coding/
  - label: "One rank below"
    label_zh: "下一名"
    name: "DeepSeek v4 pro (max)"
    note: "Rank #7 · 32.95 Final Score"
    note_zh: "排名 #7 · Final Score 32.95"
    url: /code-agent-bench/models/opencode-deepseek-v4-flash-max/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "MiniMax M2.5 highspeed"
    note: "Rank #14 · 30.30 Final Score"
    note_zh: "排名 #14 · Final Score 30.30"
    url: /code-agent-bench/models/opencode-minimax25-highspeed/
---

<div class="bench-lang-en" markdown="1">

MiniMax M3 is a volatile explorer row around the #6 slot. The useful reading is not just the 33.91 score, but the split between 56 reached tasks and 25 stable solves.

The closest family reference is MiniMax M2.5 highspeed at rank #14. Compared with that row, this one is 3.61 points ahead, with 10 more reached tasks and 3 more stable solves.

The result is easiest to understand as a three-point shape: volume at Open Library · release 013 at 8/10 (80.0%), efficiency at vuls · release 012 at 4/4 (100.0%), and resistance at Flipt · release 005 at 0/10 (0.0%). Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

For this row, the suite bars are a contrast tool. The distance between Open Library · release 013 at 8/10 (80.0%) and Flipt · release 005 at 0/10 (0.0%) is the model's practical boundary.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The examples keep the middle-band story honest: `Booknotes are deleted when updating work_id with conflicts` is the upside, `ImportAPI does not correctly split publishers and publish_places when the publisher field contains multiple locations` is the failure surface, and the page should be read between those two poles.

The audit changes how to read MiniMax M3: only 57% of initial solved attempts survive, with 52 rejected attempts, while the exported score field stays flat. Treat the wins as leads that need stricter confirmation.

{% include model-audit-card.html %}

In practice, read it through the gap between Open Library · release 013 at 8/10 (80.0%) and Flipt · release 005 at 0/10 (0.0%). That gap is more actionable than the rank because it says which repo shape gets coherent patches. The 120/453 attempt score is the backdrop; the article above is about which parts of that score are repeatable enough to matter.

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

MiniMax M3 是一个排名 #6 附近的探索型但波动较大结果。它的重点不只是 33.91 分，而是 56 道触达题和 25 道稳定题之间的差距。

最接近的同系参照是排名 #14 的 MiniMax M2.5 highspeed。和它相比，这一行最终分高 3.61 分，触达题多 10 个，稳定题多 3 个。

这个结果最容易读成三点形状：数量在Open Library · release 013，8/10（80.0%），效率在vuls 漏洞扫描器 · release 012，4/4（100.0%），阻力在Flipt feature flag 服务 · release 005，0/10（0.0%）。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

对这一行来说，suite 柱更像对比工具。Open Library · release 013，8/10（80.0%）和Flipt feature flag 服务 · release 005，0/10（0.0%）之间的距离，就是模型的实用边界。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

这些案例让中段模型画像更具体：`更新存在冲突的 work_id 时会删除 Booknotes` 是上限，`ImportAPI 在 publisher 字段包含多个位置时无法正确拆分 publishers 和 publish_places` 是失败面，这页应该在两者之间读。

复核改变了 MiniMax M3 的读法：初始成功只有 57% 保留下来，52 次被剔除，但当前导出的分数字段没有变化。原始胜利更适合作为线索，需要更严格确认。

{% include model-audit-card.html %}

实际选择时，更应该通过Open Library · release 013，8/10（80.0%）和Flipt feature flag 服务 · release 005，0/10（0.0%）之间的落差来读它。这个落差比分数排名更可操作，因为它说明哪类代码库更容易得到连贯补丁。120/453 的单次尝试成功数只是背景；上面的文章重点是哪些部分足够可重复、值得当成能力看。

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
