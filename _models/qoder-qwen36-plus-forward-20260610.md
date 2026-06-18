---
layout: model
model_id: qoder-qwen36-plus-forward-20260610
title: "Qwen 3.6 plus (180k) on CodeAgentBench"
permalink: /code-agent-bench/models/qoder-qwen36-plus-forward-20260610/
analysis_date: 2026-06-18
rank: 22
model_name: "Qwen 3.6 plus (180k)"
model_raw: "qwen3.6-plus#context-window=180000"
provider_label: "Qwen"
agent_label: "Qoder"
agent_version: "qodercli 1.0.10"
subtitle: "A lower-table result with a few useful bright spots: 38/151 tasks solved at least once, 16/151 solved in all three attempts, with the clearest wins around large Python/Django application repairs plus localized Go security-scanner changes."
subtitle_zh: "这是一个排名靠后但仍有局部亮点的结果：151 题中至少一次解出 38 题，三次都解出 16 题；强项主要落在大型 Python/Django 应用修复以及边界相对清楚的 Go 漏洞扫描器改动。"
final_score: 25.81
solved_attempts: 80
solved_unique_tasks: 38
task_count: 151
scoreable_attempts: 453
pass_at_3_rate_pct: "25.2%"
pass_3_rate_pct: "10.6%"
pass_3_count: 16
attempt_score_pct: "17.7%"
tldr:
  - en: "Qwen 3.6 plus (180k) is best read as volatile explorer: rank #22, 38 reached tasks, 16 stable solves."
    zh: "Qwen 3.6 plus (180k) 更适合读成探索型但波动较大：排名 #22，触达 38 题，稳定解出 16 题。"
  - en: "Best suite signal: Open Library · release 013 at 7/10 (70.0%)."
    zh: "最强 suite 信号：Open Library · release 013，7/10（70.0%）。"
  - en: "Weakest visible area: Flipt · release 005 at 0/10 (0.0%)."
    zh: "最弱可见区域：Flipt feature flag 服务 · release 005，0/10（0.0%）。"
  - en: "Qoder adds more workflow structure around the model, so its stable wins should be read as model-plus-shell behavior."
    zh: "Qoder 给模型外面加了更强的工作流结构，因此稳定胜利更适合读成 model-plus-shell 的组合效果。"
key_stats:
  - label: "Final Score"
    label_zh: "最终分"
    value: "25.81"
    note: "rank #22 of 32"
    note_zh: "32 个模型中排名 #22"
  - label: "Stable solves"
    label_zh: "稳定解题"
    value: "16"
    note: "tasks solved in all 3 attempts"
    note_zh: "三次尝试都解出的任务"
  - label: "Reach gap"
    label_zh: "覆盖-稳定差"
    value: "+22"
    note: "Pass@3 tasks minus Pass^3 tasks"
    note_zh: "至少一次成功的题数减三次都成功的题数"
  - label: "Attempt score"
    label_zh: "单次尝试"
    value: "17.7%"
    note: "80/453 solved attempts"
    note_zh: "453 次尝试中成功 80 次"
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
    solved: 7
    rate: 70.0
    rate_pct: "70.0%"
    pass3: 1
  - suite: release-zh-003-ansible-ansible
    label: "Ansible · release 003"
    label_zh: "Ansible 自动化 · release 003"
    repo: "ansible/ansible"
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
  - suite: release-zh-015-internetarchive-openlibrary
    label: "Open Library · release 015"
    label_zh: "Open Library · release 015"
    repo: "internetarchive/openlibrary"
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
  - suite: release-zh-002-ansible-ansible
    label: "Ansible · release 002"
    label_zh: "Ansible 自动化 · release 002"
    repo: "ansible/ansible"
    total: 10
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 1
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
  harness_ok: 80
  reverified_ok: 53
  strict_rejected: 27
  accepted_pct: 66
  rejected_pct: 34
  score_before: "25.81"
  score_after: "25.81"
  delta: "+0.00 points"
  delta_zh: "+0.00 分"
  note: "Original harness result vs verifier-backed audit sample"
  note_zh: "原始 harness 结果 vs verifier-backed 复核样本"
  summary: "The available audit keeps 53 of 80 initial solved attempts. Read this as a robustness check, especially when the audit sample is smaller than 453 attempts."
  summary_zh: "当前可用复核保留了 80 次初始成功中的 53 次。这更适合作为稳健性检查，特别是在复核样本小于 453 次尝试时。"
cases:
  - label: "Stable win"
    label_zh: "稳定胜利"
    tone: win
    title: "pip module fails when executable and virtualenv are unset and no pip binary is found"
    title_zh: "当 executable 和 virtualenv 未设置且找不到 pip binary 时，pip module 会失败"
    meta: "ansible/ansible · solved 3/3"
    meta_zh: "ansible/ansible · 3 次中成功 3 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-002-ansible-ansible."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-002-ansible-ansible。"
  - label: "Retry-sensitive"
    label_zh: "依赖重试"
    tone: neutral
    title: "Enhance Kernel Version Handling for Debian Scans in Docker, or when the kernel version cannot be obtained"
    title_zh: "增强 Docker 中 Debian 扫描的 Kernel 版本处理，或在无法获取 kernel 版本时"
    meta: "future-architect/vuls · solved 2/3"
    meta_zh: "future-architect/vuls · 3 次中成功 2 次"
    note: "Verifier pattern: harness-ok. Suite: release-zh-010-future-architect-vuls."
    note_zh: "Verifier 信号：harness-ok。Suite：release-zh-010-future-architect-vuls。"
  - label: "One-shot reach"
    label_zh: "一次命中"
    tone: neutral
    title: "Preserve complex TOC metadata and enforce exact markdown formatting"
    title_zh: "保留复杂 TOC 元数据并严格遵守 markdown 格式"
    meta: "internetarchive/openlibrary · solved 1/3"
    meta_zh: "internetarchive/openlibrary · 3 次中成功 1 次"
    note: "Verifier pattern: harness-failed. Suite: release-zh-013-internetarchive-openlibrary."
    note_zh: "Verifier 信号：harness-failed。Suite：release-zh-013-internetarchive-openlibrary。"
  - label: "Hard miss"
    label_zh: "硬失误"
    tone: risk
    title: "Improving Encapsulation in Client Functions"
    title_zh: "Improving Encapsulation in Client Functions"
    meta: "navidrome/navidrome · solved 0/3"
    meta_zh: "navidrome/navidrome · 3 次中成功 0 次"
    note: "Verifier pattern: apply-failed. Suite: release-zh-017-navidrome-navidrome."
    note_zh: "Verifier 信号：apply-failed。Suite：release-zh-017-navidrome-navidrome。"
related_models:
  - label: "One rank above"
    label_zh: "上一名"
    name: "Qwen 3.5 plus (180k)"
    note: "Rank #21 · 25.91 Final Score"
    note_zh: "排名 #21 · Final Score 25.91"
    url: /code-agent-bench/models/qoder-qwen35-plus-direct-20260612/
  - label: "One rank below"
    label_zh: "下一名"
    name: "MiniMax M2.7 highspeed"
    note: "Rank #23 · 25.24 Final Score"
    note_zh: "排名 #23 · Final Score 25.24"
    url: /code-agent-bench/models/opencode-minimax27/
  - label: "Same provider"
    label_zh: "同 provider"
    name: "Qwen 3.7 Max (1m)"
    note: "Rank #9 · 31.62 Final Score"
    note_zh: "排名 #9 · Final Score 31.62"
    url: /code-agent-bench/models/qodercli-qwen37max-direct-full453-10c-r1-20260613/
---

<div class="bench-lang-en" markdown="1">

Qwen 3.6 plus (180k) is a volatile explorer row around the #22 slot. The useful reading is not just the 25.81 score, but the split between 38 reached tasks and 16 stable solves.

The closest family reference is Qwen 3.7 Max (1m) at rank #9. Compared with that row, this one is 5.81 points behind, with 9 fewer reached tasks and 9 fewer stable solves.

The volume win is Open Library · release 013 at 7/10 (70.0%), while the cleanest pass-rate spike is vuls · release 012 at 3/4 (75.0%). The warning label is Flipt · release 005 at 0/10 (0.0%), so the contrast is not generic strength versus weakness; it is large Python/Django application repairs holding together better than Go product plumbing across configuration, storage, and service APIs on this run. Qoder adds more workflow structure around the model, so its stable wins should be read as model-plus-shell behavior.

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

The Qoder shell tends to turn some model guesses into more disciplined patch attempts. That is why the suite profile should be compared with direct Qwen/OpenCode rows, not read as pure model capability.

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

Look at `pip module fails when executable and virtualenv are unset and no pip binary is found` and `Enhance Kernel Version Handling for Debian Scans in Docker, or when the kernel version cannot be obtained` as shell-behavior examples. The difference is not only model knowledge; it is whether the workflow keeps the patch disciplined enough to pass.

The audit trims 27 solved attempts from Qwen 3.6 plus (180k) but still keeps 66% of the solved set, so the suite shape remains useful even where individual wins are debatable.

{% include model-audit-card.html %}

For Qoder-style use, the interesting part is how the shell converts model guesses into patches. Compare Open Library · release 013 at 7/10 (70.0%) with Flipt · release 005 at 0/10 (0.0%) before attributing the result to the base model alone. The 80/453 attempt score should be read as model plus Qoder workflow, especially when comparing it with direct Qwen rows.

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

Qwen 3.6 plus (180k) 是一个排名 #22 附近的探索型但波动较大结果。它的重点不只是 25.81 分，而是 38 道触达题和 16 道稳定题之间的差距。

最接近的同系参照是排名 #9 的 Qwen 3.7 Max (1m)。和它相比，这一行最终分低 5.81 分，触达题少 9 个，稳定题少 9 个。

从数量看，主要胜利来自Open Library · release 013，7/10（70.0%）；从通过率看，最干净的高点是vuls 漏洞扫描器 · release 012，3/4（75.0%）。需要警惕的是Flipt feature flag 服务 · release 005，0/10（0.0%），所以这里不是泛泛地说强弱项，而是大型 Python/Django 应用修复在这次运行中比横跨配置、存储和服务 API 的 Go 产品工程更能闭环。Qoder 给模型外面加了更强的工作流结构，因此稳定胜利更适合读成 model-plus-shell 的组合效果。

{% include model-suite-bars.html title="Where the score comes from" title_zh="分数从哪里来" note="Selected high and low suites, grouped by pass-at-least-once rate." note_zh="选取高分和低分 suite，按三次尝试至少解出一次的比例展示。" %}

Qoder shell 往往会把部分模型猜测压成更规整的补丁尝试。所以这张 suite 图更适合和 Qwen CLI / OpenCode 行对照，而不是当作纯模型能力。

{% include model-case-strip.html title="Concrete examples" title_zh="具体题目例子" %}

可以把 `当 executable 和 virtualenv 未设置且找不到 pip binary 时，pip module 会失败` 和 `增强 Docker 中 Debian 扫描的 Kernel 版本处理，或在无法获取 kernel 版本时` 当成 shell 行为样本：差异不只是模型懂不懂，也在于工作流能否把补丁约束到可通过状态。

复核从 Qwen 3.6 plus (180k) 中剔除了 27 次成功，但仍保留 66% 的成功集合，因此即便个别胜利有争议，suite 形状仍然有参考价值。

{% include model-audit-card.html %}

对 Qoder-style 使用来说，重点是 shell 如何把模型猜测压成补丁。在把结果完全归因到底座模型之前，应先对照Open Library · release 013，7/10（70.0%）和Flipt feature flag 服务 · release 005，0/10（0.0%）。80/453 的单次尝试成功数应读成模型加 Qoder 工作流的结果，尤其要和直接 Qwen 行对照。

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
