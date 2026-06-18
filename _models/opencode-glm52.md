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
  - "GLM 5.2 is ranked #1 in this export, but not because it dominates every repo. It wins by being very reliable on several high-signal suites."
  - "The strongest shape is Python or ops-heavy work with tight tests: Open Library, Ansible, and localized vulnerability-scanner patches."
  - "The weak shape is broad product plumbing: Flipt authentication/feature-flag changes, qutebrowser's Qt runtime behavior, and Navidrome persistence/API work."
  - "The stricter verifier keeps 101 of 140 headline successes, so the rank is real but the margin should be read with audit context."
key_stats:
  - label: "Lead over #2"
    value: "+0.71"
    note: "vs GPT 5.5 (xhigh)"
  - label: "Stable solves"
    value: "36"
    note: "tasks solved in all 3 attempts"
  - label: "Best suite"
    value: "4/4"
    note: "future-architect/vuls release 012"
  - label: "Strict audit"
    value: "-4.72"
    note: "Final Score delta after reverify"
suite_profile:
  - suite: release-zh-012-future-architect-vuls
    label: "vuls · release 012"
    repo: future-architect/vuls
    total: 4
    solved: 4
    rate: 100.0
    rate_pct: "100.0%"
    pass3: 3
    note: "Localized Go vulnerability-scanner patches; the best clean-room signal in this run."
  - suite: release-zh-013-internetarchive-openlibrary
    label: "openlibrary · release 013"
    repo: internetarchive/openlibrary
    total: 10
    solved: 8
    rate: 80.0
    rate_pct: "80.0%"
    pass3: 6
    note: "Large Python/Django surface where failing tests usually point to the right subsystem."
  - suite: release-zh-015-internetarchive-openlibrary
    label: "openlibrary · release 015"
    repo: internetarchive/openlibrary
    total: 10
    solved: 7
    rate: 70.0
    rate_pct: "70.0%"
    pass3: 6
    note: "Bibliographic metadata and import-path fixes: broad codebase, but concrete invariants."
  - suite: release-zh-004-ansible-ansible
    label: "ansible · release 004"
    repo: ansible/ansible
    total: 3
    solved: 2
    rate: 66.7
    rate_pct: "66.7%"
    pass3: 2
  - suite: release-zh-001-ansible-ansible
    label: "ansible · release 001"
    repo: ansible/ansible
    total: 10
    solved: 6
    rate: 60.0
    rate_pct: "60.0%"
    pass3: 3
  - suite: release-zh-010-future-architect-vuls
    label: "vuls · release 010"
    repo: future-architect/vuls
    total: 10
    solved: 5
    rate: 50.0
    rate_pct: "50.0%"
    pass3: 3
  - suite: release-zh-008-flipt-io-flipt
    label: "flipt · release 008"
    repo: flipt-io/flipt
    total: 10
    solved: 2
    rate: 20.0
    rate_pct: "20.0%"
    pass3: 1
    note: "Feature-flag service work where the patch must land across API, storage, and UI-adjacent boundaries."
  - suite: release-zh-006-flipt-io-flipt
    label: "flipt · release 006"
    repo: flipt-io/flipt
    total: 10
    solved: 1
    rate: 10.0
    rate_pct: "10.0%"
    pass3: 1
  - suite: release-zh-017-navidrome-navidrome
    label: "navidrome · release 017"
    repo: navidrome/navidrome
    total: 5
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "User-facing Go service tasks that combine migrations, repositories, and API behavior."
  - suite: release-zh-018-qutebrowser-qutebrowser
    label: "qutebrowser · release 018"
    repo: qutebrowser/qutebrowser
    total: 9
    solved: 0
    rate: 0.0
    rate_pct: "0.0%"
    pass3: 0
    note: "QtWebEngine runtime behavior and browser integration; zero successful tasks in this export."
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
  summary: "The audit does not knock GLM 5.2 out of the top tier, but it changes the reading: the headline rank is powered by real wins, with a non-trivial band of brittle successes."
cases:
  - label: "Clean win"
    tone: win
    title: "Docker image digest support in vuls"
    meta: "future-architect/vuls · solved 3/3"
    note: "A compact schema-and-validation change: add Digest, compute full image names, and keep scan output consistent."
  - label: "Repeatable win"
    tone: win
    title: "PrioritizedIdentifier in Open Library"
    meta: "internetarchive/openlibrary · solved 3/3"
    note: "A large Python codebase, but the task has crisp object semantics and serialization expectations."
  - label: "Miss pattern"
    tone: risk
    title: "Kubernetes authentication in Flipt"
    meta: "flipt-io/flipt · failed 0/3"
    note: "The change spans configuration, auth wiring, defaults, and tests; this is where GLM 5.2 starts dropping indirect consumers."
  - label: "Hard miss"
    tone: risk
    title: "QtWebEngine 6.7 dark-mode runtime support"
    meta: "qutebrowser/qutebrowser · failed 0/3"
    note: "The patch must respect browser runtime state, URL patterns, and Qt version behavior together."
related_models:
  - label: "Nearest challenger"
    name: "GPT 5.5 (xhigh)"
    note: "Rank #2 · 36.88 Final Score"
    url: /code-agent-bench/
  - label: "Previous GLM"
    name: "GLM 5.1"
    note: "Rank #8 · 31.74 Final Score"
    url: /code-agent-bench/
  - label: "Same agent family"
    name: "GLM 5 turbo"
    note: "Rank #16 · 28.95 Final Score"
    url: /code-agent-bench/
---

GLM 5.2's result is interesting because it does **not** look like a model that is equally good everywhere. It looks like a model with a strong center of gravity. When the benchmark asks for a localized repair, a schema change with obvious tests, or a Python service fix where the failing test points at the right layer, it behaves like a first-place agent. When the task asks it to move a product feature through several packages and keep every consumer aligned, the same model can look surprisingly ordinary.

That is why the rank-1 number is useful, but the shape behind it matters more than the number itself.

{% include model-suite-bars.html title="Where the score comes from" note="Selected high and low suites, grouped by pass-at-least-once rate." %}

The best version of GLM 5.2 shows up in two clusters. The first is **Open Library**, a large Django-era Python codebase with enough tests and naming convention to reward careful search. GLM 5.2 solved 8/10 tasks in `release-zh-013` and 7/10 in `release-zh-015`; more importantly, 12 of those Open Library tasks were stable enough to pass in all three attempts across the two suites.

The second cluster is **ops-shaped code**: Ansible modules, inventory behavior, and vuls scanner configuration. These are not trivial tasks, but they tend to expose a narrow invariant. In vuls release 012, the model went 4/4. In one representative task, it had to add Docker image digest support through config structs, validation, and scan-result output. That is exactly the kind of patch where GLM 5.2 can read the tests, find the right seam in the codebase, and finish without inventing a larger product design.

{% include model-case-strip.html title="Concrete examples" %}

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
