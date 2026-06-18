---
layout: model
model_id: opencode-longcat
title: "LongCat 2.0 Preview on CodeAgentBench"
permalink: /code-agent-bench/models/opencode-longcat/
analysis_date: 2026-06-18
rank: 25
model_name: "LongCat 2.0 Preview"
model_raw: "LongCat/LongCat-2.0-Preview"
provider_label: "LongCat"
agent_label: "OpenCode"
agent_version: "opencode-cli 1.14.32"
subtitle: "A lower-table result with a few useful bright spots: 33/151 tasks solved at least once, 17/151 solved in all three attempts, with the clearest wins around automation and configuration-management work plus Go product plumbing across configuration, storage, and service APIs."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 33 题，三次都解出 17 题；强项主要落在自动化和配置管理类改动以及横跨配置、存储和服务 API 的 Go 产品工程。"
final_score: 24.78
solved_attempts: 75
solved_unique_tasks: 33
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "21.9%"
pass_3_rate_pct: "11.3%"
pass_3_count: 17
attempt_score_pct: "16.6%"
tldr:
  - en: "LongCat 2.0 Preview is best read as volatile explorer: rank #25, 33 reached tasks, 17 stable solves."
    zh: "LongCat 2.0 Preview 更适合读成探索型但波动较大：排名 #25，触达 33 题，稳定解出 17 题。"
  - en: "Best suite signal: Ansible · release 003 at 5/10 (50.0%)."
    zh: "最强 suite 信号：Ansible 自动化 · release 003，5/10（50.0%）。"
  - en: "Weakest visible area: Open Library · release 015 at 0/10 (0.0%)."
    zh: "最弱可见区域：Open Library · release 015，0/10（0.0%）。"
  - en: "Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow."
    zh: "因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "24.78"
    note: "rank #25 of 32"
    note_zh: "32 个模型中排名 #25"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "17"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+16"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "16.6%"
    note: "75/453 solved attempts"
    note_zh: "453 次尝试中成功 75 次"
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
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
    total: 10
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 3
  - suite: release-zh-002-ansible-ansible
    label: "Ansible · release 002"
    label_zh: "Ansible 自动化 · release 002"
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
  - suite: release-zh-001-ansible-ansible
    label: "Ansible · release 001"
    label_zh: "Ansible 自动化 · release 001"
    repo: "ansible/ansible"
    total: 10
    solved: 3
    rate: 30.0
    rate_pct: "30.0%"
    pass3: 2
  - suite: release-zh-007-flipt-io-flipt
    label: "Flipt · release 007"
    label_zh: "Flipt feature flag 服务 · release 007"
    repo: "flipt-io/flipt"
    total: 10
    solved: 3
    rate: 30.0
    rate_pct: "30.0%"
    pass3: 2
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
audit:
  harness_ok: 75
  reverified_ok: 69
  strict_rejected: 6
  accepted_pct: 92
  rejected_pct: 8
  score_before: "24.78"
  score_after: "24.78"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 69 of 75 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 75 次初始成功中的 69 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "Refactor build_marc() into expand_record() and relocate to catalog/utils for clarity and reuse"
    title_zh: "将 build_marc() 重构为 expand_record() 并迁移至 catalog/utils 以提升清晰度与复用性"
    meta: "internetarchive/openlibrary · solved 3/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-014-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-014-internetarchive-openlibrary。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Python module shebang not honored; interpreter forced to /usr/bin/python"
    title_zh: "Python module shebang 未被遵守；interpreter 被强制为 /usr/bin/python"
    meta: "ansible/ansible · solved 2/3"
    meta_zh: "ansible/ansible · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-002-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-002-ansible-ansible。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "ansible.builtin.password fails on subsequent runs when ident is saved in the password file."
    title_zh: "当 ident 保存在 password file 中时，ansible.builtin.password 在后续运行中失败"
    meta: "ansible/ansible · solved 1/3"
    meta_zh: "ansible/ansible · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-001-ansible-ansible."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-001-ansible-ansible。"
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
    name: "MiMo v2.5"
    note: "Rank #24 · 25.24 Final Score"
    note_zh: "排名 #24 · Final Score 25.24"
    url: /code-agent-bench/models/opencode-mimo25-tokenplan-high-20260527/
  - label: "One rank below"
    label_zh: "下一名"
    name: "Step 3.5 flash 2603"
    note: "Rank #26 · 24.21 Final Score"
    note_zh: "排名 #26 · Final Score 24.21"
    url: /code-agent-bench/models/opencode-stepfun35-2603/
  - label: "Same agent"
    label_zh: "同 agent"
    name: "GLM 5.2"
    note: "Rank #1 · 37.59 Final Score"
    note_zh: "排名 #1 · Final Score 37.59"
    url: /code-agent-bench/models/opencode-glm52/
---

<div class="bench-lang-en" markdown="1">

LongCat 2.0 Preview is a volatile explorer row around the #25 slot. The useful reading is not just the 24.78 score, but the split between 33 reached tasks and 17 stable solves.

The closest family reference is MiMo v2.5 at rank #24. Compared with that row, this one is 0.46 points behind, with the same reached tasks and 1 fewer stable solves.

The result is easiest to understand as a three-point shape: volume at Ansible · release 003 at 5/10 (50.0%), efficiency at vuls · release 012 at 3/4 (75.0%), and resistance at Open Library · release 015 at 0/10 (0.0%). Because the agent shell is OpenCode, the result mostly exposes the underlying model's planning habits rather than a heavily opinionated workflow.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

For this row, the suite bars are a contrast tool. The distance between Ansible · release 003 at 5/10 (50.0%) and Open Library · release 015 at 0/10 (0.0%) is the model's practical boundary.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The examples keep the middle-band story honest: `Refactor build_marc() into expand_record() and relocate to catalog/utils for clarity and reuse` is the upside, `Add Support for Galaxy Server Configuration in ansible-config Command` is the failure surface, and the page should be read between those two poles.

The audit trims 6 solved attempts from LongCat 2.0 Preview but still keeps 92% of the solved set, so the suite shape remains useful even where individual wins are debatable.

{% include model-audit-card.html %}

In practice, read it through the gap between Ansible · release 003 at 5/10 (50.0%) and Open Library · release 015 at 0/10 (0.0%). That gap is more actionable than the rank because it says which repo shape gets coherent patches. The 75/453 attempt score is the backdrop; the article above is about which parts of that score are repeatable enough to matter.

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

LongCat 2.0 Preview 是一个排名 #25 附近的探索型但波动较大结果。它的重点不只是 24.78 分，而是 33 道触达题和 17 道稳定题之间的差距。

最接近的同系参照是排名 #24 的 MiMo v2.5。和它相比，这一行最终分低 0.46 分，触达题持平，稳定题少 1 个。

这个结果最容易读成三点形状：数量在Ansible 自动化 · release 003，5/10（50.0%），效率在vuls 漏洞扫描器 · release 012，3/4（75.0%），阻力在Open Library · release 015，0/10（0.0%）。因为 agent shell 是 OpenCode，这个结果更直接暴露底层模型的规划习惯，而不是强工作流包装后的表现。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

对这一行来说，suite 柱更像对比工具。Ansible 自动化 · release 003，5/10（50.0%）和Open Library · release 015，0/10（0.0%）之间的距离，就是模型的实用边界。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

这些案例让中段模型画像更具体：`将 build_marc() 重构为 expand_record() 并迁移至 catalog/utils 以提升清晰度与复用性` 是上限，`在 ansible-config command 中支持 Galaxy Server Configuration` 是失败面，这页应该在两者之间读。

复核从 LongCat 2.0 Preview 中剔除了 6 次成功，但仍保留 92% 的成功集合，因此即便个别胜利有争议，suite 形状仍然有参考价值。

{% include model-audit-card.html %}

实际选择时，更应该通过Ansible 自动化 · release 003，5/10（50.0%）和Open Library · release 015，0/10（0.0%）之间的落差来读它。这个落差比分数排名更可操作，因为它说明哪类代码库更容易得到连贯补丁。75/453 的单次尝试成功数只是背景；上面的文章重点是哪些部分足够可重复、值得当成能力看。

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
