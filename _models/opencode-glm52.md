---
layout: model
model_id: opencode-glm52
title: GLM 5.2 on CodeAgentBench
permalink: /code-agent-bench/models/opencode-glm52/
analysis_date: 2026-06-18
rank: 1
model_name: GLM 5.2
model_raw: zai-coding-plan/glm-5.2
provider_label: Zhipu GLM
agent_label: OpenCode
agent_version: opencode-cli 1.17.8
subtitle: "A fast-rising coding agent with a very clear personality: excellent on Python and ops-shaped repairs, fragile when the task turns into a cross-package product change."
subtitle_zh: "一个性格很清楚的编程 agent：Python 和运维形态修复很强，但遇到跨包产品改动时容易变脆。"
final_score: 37.59
reverified_final_score: 32.87
solved_attempts: 140
solved_unique_tasks: 57
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "37.7%"
pass_3_rate_pct: "23.8%"
pass_3_count: 36
attempt_score_pct: "30.9%"
tldr:
  - en: "GLM 5.2 is ranked #1 in this export, but not because it dominates every repo. It wins by being very reliable on several high-signal suites."
    zh: "GLM 5.2 在这次导出里排第 1，但不是因为它每个仓库都碾压。它的优势来自几个高信号 suite 上非常稳定的表现。"
  - en: "The strongest shape is Python or ops-heavy work with tight tests: Open Library, Ansible, and localized vulnerability-scanner patches."
    zh: "它最强的是 Python 或偏运维的修复：Open Library、Ansible，以及边界清楚的漏洞扫描器改动。"
  - en: "The weak shape is broad product plumbing: Flipt authentication/feature-flag changes, qutebrowser's Qt runtime behavior, and Navidrome persistence/API work."
    zh: "它比较弱的是横跨多层的产品工程：Flipt 的认证和 feature flag、qutebrowser 的 Qt 运行时行为、Navidrome 的持久化和 API。"
  - en: "The stricter verifier keeps 101 of 140 headline successes, so the rank is real but the margin should be read with audit context."
    zh: "更严格的复核保留了 140 次初始成功中的 101 次，所以排名有含金量，但领先幅度要结合审计来看。"
key_stats:
  - label: "Lead over #2"
    label_zh: "领先第 2 名"
    value: "+0.71"
    note: "vs GPT 5.5 (xhigh)"
    note_zh: "对比 GPT 5.5 (xhigh)"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "36"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Best suite"
    label_zh: "最佳 suite"
    value: "4/4"
    note: "future-architect/vuls release 012"
    note_zh: "future-architect/vuls release 012"
  - label: "Strict audit"
    label_zh: "严格复核"
    value: "-4.72"
    note: "Final Score delta after reverify"
    note_zh: "复核后的 Final Score 变化"
suite_profile:
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    label_zh: "vuls · release 012"
    repo: future-architect/vuls
    total: 4
    solved: 4
    rate: 100.0
    rate_pct: "100.0%"
    pass3: 3
    note: "Localized Go vulnerability-scanner patches; the best clean-room signal in this run."
    note_zh: "局部 Go 漏洞扫描器修复；这次运行里最干净的强项信号。"
  - suite: release-zh-013-internetarchive-openlibrary
    label: "openlibrary · release 013"
    label_zh: "openlibrary · release 013"
    repo: internetarchive/openlibrary
    total: 10
    solved: 8
    rate: 80.0
    rate_pct: "80.0%"
    pass3: 6
    note: "Large Python/Django surface where failing tests usually point to the right subsystem."
    note_zh: "大型 Python/Django 代码面，但失败测试通常能把方向指到正确子系统。"
  - suite: release-zh-015-internetarchive-openlibrary
    label: "openlibrary · release 015"
    label_zh: "openlibrary · release 015"
    repo: internetarchive/openlibrary
    total: 10
    solved: 7
    rate: 70.0
    rate_pct: "70.0%"
    pass3: 6
    note: "Bibliographic metadata and import-path fixes: broad codebase, but concrete invariants."
    note_zh: "书目元数据和导入路径修复：代码面很大，但不变量清楚。"
  - suite: release-zh-004-ansible-ansible
    label: "ansible · release 004"
    label_zh: "ansible · release 004"
    repo: ansible/ansible
    total: 3
    solved: 2
    rate: 66.7
    rate_pct: "66.7%"
    pass3: 2
  - suite: release-zh-001-ansible-ansible
    label: "ansible · release 001"
    label_zh: "ansible · release 001"
    repo: ansible/ansible
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 3
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    label_zh: "vuls · release 010"
    repo: future-architect/vuls
    total: 10
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 3
  - suite: release-zh-008-flipt-io-flipt
    label: "flipt · release 008"
    label_zh: "flipt · release 008"
    repo: flipt-io/flipt
    total: 10
    solved: 2
    rate: 20.0
    rate_pct: "20.0%"
    pass3: 1
    note: "Feature-flag service work where the patch must land across API, storage, and UI-adjacent boundaries."
    note_zh: "feature flag 服务里的跨层改动，补丁必须同时落到 API、存储和接近 UI 的边界。"
  - suite: release-zh-006-flipt-io-flipt
    label: "flipt · release 006"
    label_zh: "flipt · release 006"
    repo: flipt-io/flipt
    total: 10
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 1
  - suite: release-zh-017-navidrome-navidrome
    label: "navidrome · release 017"
    label_zh: "navidrome · release 017"
    repo: navidrome/navidrome
    total: 5
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "User-facing Go service tasks that combine migrations, repositories, and API behavior."
    note_zh: "面向用户的 Go 服务任务，往往同时牵涉 migration、repository 和 API 行为。"
  - suite: release-zh-018-qutebrowser-qutebrowser
    label: "qutebrowser · release 018"
    label_zh: "qutebrowser · release 018"
    repo: qutebrowser/qutebrowser
    total: 9
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "QtWebEngine runtime behavior and browser integration; zero successful tasks in this export."
    note_zh: "QtWebEngine 运行时行为和浏览器集成；这次导出中没有成功任务。"
audit:
  harness_ok: 140
  reverified_ok: 101
  strict_rejected: 39
  accepted_pct: 72
  rejected_pct: 28
  score_before: "37.59"
  score_after: "32.87"
  delta: "-4.72 points"
  note: "Initial harness verdict vs stricter verifier-backed audit"
  note_zh: "初始 harness 判定 vs 更严格的 verifier-backed 复核"
  summary: "The audit does not knock GLM 5.2 out of the top tier, but it changes the reading: the headline rank is powered by real wins, with a non-trivial band of brittle successes."
  summary_zh: "复核并没有把 GLM 5.2 打出第一梯队，但它改变了读法：榜首来自真实强项，同时也存在一段不可忽略的脆弱成功。"
  delta_zh: "-4.72 分"
cases:
  - label: "Clean win"
    label_zh: "干净胜利"
    tone: win
    title: "Docker image digest support in vuls"
    title_zh: "vuls 中的 Docker image digest 支持"
    meta: "future-architect/vuls · solved 3/3"
    meta_zh: "future-architect/vuls · 3/3 解出"
    note: "A compact schema-and-validation change: add Digest, compute full image names, and keep scan output consistent."
    note_zh: "一个紧凑的 schema 和 validation 改动：加入 Digest、计算完整镜像名，并保持扫描输出一致。"
  - label: "Repeatable win"
    label_zh: "可复现胜利"
    tone: win
    title: "PrioritizedIdentifier in Open Library"
    title_zh: "Open Library 的 PrioritizedIdentifier"
    meta: "internetarchive/openlibrary · solved 3/3"
    meta_zh: "internetarchive/openlibrary · 3/3 解出"
    note: "A large Python codebase, but the task has crisp object semantics and serialization expectations."
    note_zh: "虽然是大型 Python 代码库，但对象语义和序列化预期都很清楚。"
  - label: "Miss pattern"
    label_zh: "失误模式"
    tone: risk
    title: "Kubernetes authentication in Flipt"
    title_zh: "Flipt 里的 Kubernetes authentication"
    meta: "flipt-io/flipt · failed 0/3"
    meta_zh: "flipt-io/flipt · 0/3 失败"
    note: "The change spans configuration, auth wiring, defaults, and tests; this is where GLM 5.2 starts dropping indirect consumers."
    note_zh: "改动横跨配置、认证接线、默认值和测试；GLM 5.2 在这里开始漏掉间接消费者。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "QtWebEngine 6.7 dark-mode runtime support"
    title_zh: "QtWebEngine 6.7 dark-mode 运行时支持"
    meta: "qutebrowser/qutebrowser · failed 0/3"
    meta_zh: "qutebrowser/qutebrowser · 0/3 失败"
    note: "The patch must respect browser runtime state, URL patterns, and Qt version behavior together."
    note_zh: "补丁必须同时处理浏览器运行状态、URL pattern 和 Qt 版本行为。"
related_models:
  - label: "Nearest challenger"
    label_zh: "最近挑战者"
    name: "GPT 5.5 (xhigh)"
    note: "Rank #2 · 36.88 Final Score"
    note_zh: "排名 #2 · 36.88 Final Score"
    url: /code-agent-bench/
  - label: "Previous GLM"
    label_zh: "上一代 GLM"
    name: "GLM 5.1"
    note: "Rank #8 · 31.74 Final Score"
    note_zh: "排名 #8 · 31.74 Final Score"
    url: /code-agent-bench/
  - label: "Same agent family"
    label_zh: "同 agent 家族"
    name: "GLM 5 turbo"
    note: "Rank #16 · 28.95 Final Score"
    note_zh: "排名 #16 · 28.95 Final Score"
    url: /code-agent-bench/
---

<div class="bench-lang-en" markdown="1">

GLM 5.2's result is interesting because it does **not** look like a model that is equally good everywhere. It looks like a model with a strong center of gravity. When the benchmark asks for a localized repair, a schema change with obvious tests, or a Python service fix where the failing test points at the right layer, it behaves like a first-place agent. When the task asks it to move a product feature through several packages and keep every consumer aligned, the same model can look surprisingly ordinary.

That is why the rank-1 number is useful, but the shape behind it matters more than the number itself.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The best version of GLM 5.2 shows up in two clusters. The first is **Open Library**, a large Django-era Python codebase with enough tests and naming convention to reward careful search. GLM 5.2 solved 8/10 tasks in `release-zh-013` and 7/10 in `release-zh-015`; more importantly, 12 of those Open Library tasks were stable enough to pass in all three attempts across the two suites.

The second cluster is **ops-shaped code**: Ansible modules, inventory behavior, and vuls scanner configuration. These are not trivial tasks, but they tend to expose a narrow invariant. In vuls release 012, the model went 4/4. In one representative task, it had to add Docker image digest support through config structs, validation, and scan-result output. That is exactly the kind of patch where GLM 5.2 can read the tests, find the right seam in the codebase, and finish without inventing a larger product design.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

The weak side has a different texture. **Flipt** asks for product plumbing: authentication methods, feature-flag semantics, storage interfaces, API behavior, and UI-adjacent surfaces have to move together. GLM 5.2 often makes the obvious local edit, then misses a second-order consumer. That is why the Flipt releases sit at 10-40%, with several suites around 1-2 solved tasks out of 10.

**qutebrowser** and **Navidrome** are even harsher. qutebrowser release 018 is 0/9, and Navidrome release 017 is 0/5. The qutebrowser failures are not about Python syntax; they are about runtime behavior across QtWebEngine versions, dark-mode settings, URL pattern support, and browser state. Navidrome's misses are Go service changes that combine schema migration, repository interfaces, and HTTP/Subsonic behavior. In both cases, the patch has to remain coherent after it leaves the first file.

{% include model-audit-card.html %}

The verifier audit is the main caveat. The headline run reports 140 `harness-ok` attempts out of 453. Under the stricter re-verification pass, 101 remain verifier-backed, moving the score from 37.59 to 32.87. That does not make the result disposable; it means the right reading is "top-tier, but with a visible brittle band," not "dominates the suite."

So if you are choosing an agent, I would treat GLM 5.2 as a strong default for **Python services, ops tooling, Ansible-style automation, and localized backend repairs**. I would be more cautious when the task is a **Go product feature** that touches storage, API, auth, and frontend consumers at once, or a browser/runtime integration where the tests encode behavior that is not obvious from static code search.

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

GLM 5.2 这次结果有意思的地方在于，它不像是一个「所有地方都同样强」的模型，而更像是一个重心很明确的模型。benchmark 如果要求的是局部修复、schema 调整、测试指向清楚的 Python 服务问题，它就很像第一名。可一旦任务变成跨多个 package 的产品功能，需要把配置、存储、API、消费者一起对齐，同一个模型就会显得普通很多。

所以 rank 1 这个数字有意义，但更值得看的其实是它背后的能力形状。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

GLM 5.2 最好的表现集中在两类任务里。第一类是 **Open Library**。这是一个比较大的 Python/Django 代码库，但测试、命名和对象边界足够明确，能奖励认真搜索和小心改动。GLM 5.2 在 `release-zh-013` 解出 8/10，在 `release-zh-015` 解出 7/10；更重要的是，这两个 suite 里有 12 道 Open Library 题稳定到三次尝试都能通过。

第二类是 **偏运维形态的代码**：Ansible module、inventory 行为、vuls 扫描器配置。这些题并不简单，但往往会暴露一个相对窄的不变量。比如 vuls release 012 里它做到了 4/4。一个代表性题目是给 Docker image 增加 digest 支持，补丁要穿过 config struct、validation 和 scan result 输出。这种题正好落在 GLM 5.2 的舒适区：读测试，找到正确位置，完成改动，不需要发明一套更大的产品设计。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

弱点的质感不一样。**Flipt** 更像产品工程：认证方式、feature flag 语义、存储接口、API 行为，以及接近 UI 的表面要一起动。GLM 5.2 经常能做出最明显的局部编辑，但会漏掉第二层消费者。因此 Flipt 几个 release 大多在 10-40%，有些 suite 只有 10 道题里解出 1 到 2 道。

**qutebrowser** 和 **Navidrome** 更苛刻。qutebrowser release 018 是 0/9，Navidrome release 017 是 0/5。qutebrowser 的失败不是 Python 语法问题，而是 QtWebEngine 版本、dark mode 设置、URL pattern、浏览器运行状态要同时成立。Navidrome 的失败则是 Go 服务里的 schema migration、repository interface、HTTP/Subsonic 行为一起变化。两者都要求补丁离开第一处文件后仍然保持一致。

{% include model-audit-card.html %}

审计是主要 caveat。初始运行里有 140 次 `harness-ok`，但在更严格的 verifier-backed 复核下，保留下来的有 101 次，Final Score 从 37.59 变成 32.87。这不代表结果不能用，而是读法要更精确：它确实是第一梯队，而且有真实强项，但不是「全场统治」，中间存在一段明显的脆弱成功。

如果你在选 agent，我会把 GLM 5.2 当成 **Python 服务、运维工具、Ansible 风格自动化、局部后端修复** 的强默认选择。但如果任务是 **Go 产品功能**，同时触碰 storage、API、auth 和前端消费者，或者是浏览器/runtime 集成，测试里编码了很多静态搜索看不出来的行为，我会更谨慎。

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
