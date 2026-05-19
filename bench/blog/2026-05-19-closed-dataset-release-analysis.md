---
layout: bench_post
title: "ClawProBench Closed Dataset Release and Analysis"
date: 2026-05-19 00:45:00 +0800
categories: Benchmark
permalink: /bench/blog/2026-05-19-closed-dataset-release-analysis/
display_title: "ClawProBench Closed Dataset Release and Analysis"
---

<div class="bench-lang-switch" data-default-lang="en">
  <button type="button" class="bench-lang-btn is-active" data-lang="en">English</button>
  <button type="button" class="bench-lang-btn" data-lang="zh">中文</button>
</div>

<div class="bench-lang-panel is-active" data-lang-panel="en" markdown="1">

ClawProBench now includes a closed dataset leaderboard. It is not a replacement for the open leaderboard. It adds a more production-oriented view of model capability: when a model works through customer support, vendor security questionnaires, log redaction, approval boundaries, incident recovery, billing disputes, CRM updates, privacy exports, and other enterprise workflows, can it make stable, compliant, executable decisions under limited information and high-risk constraints?

In short, the open dataset asks whether a model is a strong general OpenClaw agent. The closed dataset asks whether it is ready for production workflows.

### What Was Released

This closed release contains 68 tasks and 33 model results. The open leaderboard currently contains 102 tasks and 66 model results.

| Dimension | Closed tasks | Main signal |
| --- | ---: | --- |
| Safety | 17 | Privacy, secrets, logs, injection, minimal disclosure, customer and vendor boundaries |
| Synthesis | 13 | Multi-source evidence merging, conflict resolution, external-facing summaries |
| Planning | 12 | On-call tradeoffs, scheduling, resources, priorities, approval windows |
| Constraints | 10 | Policy exceptions, permission boundaries, regional data, contracts and commitments |
| Tool Use | 10 | Read-only preflights, minimal evidence access, action budgets, attachment trust |
| Error Recovery | 6 | Double-write recovery, partial commits, privacy export aborts, idempotent replay |

Compared with the open dataset, the closed dataset changes the evaluation pressure in two important ways.

First, Safety becomes much more central. The open dataset has 12 safety tasks, while the closed dataset has 17. More importantly, these tasks are not just about refusing obviously dangerous requests. They test whether a model can still be useful while keeping secrets, logs, customer data, vendor material, and internal sources inside the right boundary.

Second, the closed dataset is almost entirely hard tasks. The open dataset has 52 expert tasks, 39 hard tasks, 8 medium tasks, and 3 easy tasks. The closed dataset has 64 hard tasks and 4 expert tasks. In this context, hard does not simply mean longer prompts. It means the model must choose between competing real-world constraints: answer without leaking, make progress without overstepping authority, synthesize evidence without pretending conflicts are resolved, and use tools without expanding data access.

### What the Closed Dataset Measures Differently

The open dataset evaluates broad OpenClaw agent ability: planning, tool use, error recovery, constraint following, synthesis, and safety. It is best for answering one question: is this model strong as a general work agent?

The closed dataset goes further. It focuses on whether the model is reliable under enterprise risk. It answers a different question: can this model handle real customers, real permissions, real data boundaries, and real incidents?

Those two questions often have different answers.

Many closed tasks are not difficult because the model lacks knowledge. They are difficult because the model needs to know what not to do:

- When a customer asks for a debug bundle, provide enough reproduction context without exposing secrets, internal logs, or customer data.
- When answering a vendor security questionnaire, separate disclosable facts from internal-only details and approval-required items.
- When a ticket or attachment contains prompt injection, treat that content as untrusted and do not execute it as an instruction.
- When billing, refund, SLA, contract, and support records conflict, identify confirmed facts and unresolved conflicts instead of inventing one clean conclusion.
- In CRM, account merge, and privacy request workflows, use the smallest necessary read or write scope instead of acting broadly just because a tool exists.

The closed dataset penalizes two common model behaviors. One is excessive compliance: the user asks for something, and the model gives too much. The other is excessive action: the model sees tools and immediately updates, merges, exports, or writes. The closed dataset rewards models that are restrained but still useful.

### Closed Final Score

The closed leaderboard keeps three core signals:

- AvgScore: average task quality across rubric items.
- Pass^3: stable three-run success, which reflects consistency.
- Pass@3: at least one successful path across three runs, which reflects upside and sampling potential.

The open leaderboard puts more weight on stable three-run success. The closed leaderboard increases the weight of Pass@3 while still retaining Pass^3. The reason is practical: the closed set is smaller, more concentrated, and more realistic. If a model can find a compliant path in at least one of three attempts, that is useful signal. But if Pass^3 is low, the model is still not stable enough for unsupervised production use.

The current page formulas are:

```text
Open Final Score = 100 x AvgScore^0.40 x ((Pass^3)^(1/3))^0.45 x (1 - (1 - Pass@3)^(1/3))^0.15
Closed Final Score = 100 x AvgScore^0.40 x ((Pass^3)^(1/3))^0.25 x (1 - (1 - Pass@3)^(1/3))^0.35
```

So the closed ranking is not just a single-run score, and it is not only a stability ranking. It balances average quality, consistency, and three-try recoverability.

### Closed Leaderboard Results

The current closed Top 12 are:

| Closed rank | Model | Final Score | Pass^3 | Pass@3 | AvgScore |
| ---: | --- | ---: | ---: | ---: | ---: |
| 1 | doubao-seed-2.0-code | 62.44 | 52.8% | 81.8% | 73.2 |
| 2 | kat-coder-pro-v2 | 59.68 | 50.3% | 78.4% | 70.7 |
| 3 | gpt-5.3-codex-xhigh | 58.45 | 41.9% | 77.2% | 71.6 |
| 4 | qwen3.6-plus | 57.08 | 39.7% | 77.1% | 68.3 |
| 5 | deepseek-v4-pro | 56.35 | 34.1% | 79.0% | 65.7 |
| 6 | gpt-5.5-xhigh | 55.77 | 50.2% | 71.8% | 68.2 |
| 7 | kimi-k2.6 | 54.14 | 38.2% | 71.7% | 67.2 |
| 8 | DeepSeek-V3.2 | 54.00 | 33.3% | 73.5% | 66.3 |
| 9 | gpt-5.4-xhigh | 53.04 | 37.3% | 69.5% | 67.0 |
| 10 | GLM-5.1 | 52.89 | 39.0% | 69.3% | 66.1 |
| 11 | MiniMax-M2.1 | 52.61 | 31.1% | 70.6% | 66.7 |
| 12 | qwen3.5-plus | 52.39 | 31.2% | 71.7% | 64.6 |

The first-place model, doubao-seed-2.0-code, has a clear shape. It is not carried by one isolated metric. It is especially strong where the closed dataset matters most: Safety is 79.3, Synthesis is 74.9, and Pass@3 is 81.8%. That means it is better at keeping customer data, vendor boundaries, conflicting evidence, and external-facing language under control while still making progress.

kat-coder-pro-v2 is one of the most interesting results. It is not a top open-leaderboard model, but it rises to second in the closed leaderboard. The reason is not Safety, where it scores 52.7. The lift comes from Planning at 76.4, Tool Use at 76.8, Constraints at 73.5, and Synthesis at 70.4. Its ability shape matches closed enterprise tasks very well, although safety remains its main weakness.

gpt-5.3-codex-xhigh is the more balanced profile. It does not dominate one single metric, but Safety is 68.1, Tool Use is 75.0, Constraints is 68.8, Error Recovery is 75.1, and Synthesis is 70.5. It looks more like a stable enterprise agent. Its Pass^3 is not the highest, but AvgScore and Pass@3 are both strong.

deepseek-v4-pro reaches 79.0 Pass@3, so its ceiling is high. But its Pass^3 is 34.1, Safety is 48.6, and Constraints is 55.2. It often finds a good path, but not reliably enough, and it is more likely to slip on safety and policy boundaries.

gpt-5.5-xhigh is strong in Tool Use, Error Recovery, and Synthesis, at 77.7, 75.0, and 74.1. Its overall rank is pulled down by Safety and Constraints. This kind of model can be useful for execution-heavy and recovery-heavy workflows, but workflows involving privacy, logs, secrets, and disclosure need stronger outer controls.

### Why Open Scores Do Not Fully Transfer

The most important finding is that open ranking strength does not automatically transfer to the closed ranking.

Across the 33 paired models that have both open and closed results, the average closed-minus-open dimension movement is:

| Dimension | Average change |
| --- | ---: |
| Planning | +3.3 |
| Safety | -9.8 |
| Tool Use | +3.4 |
| Constraints | -2.0 |
| Error Recovery | -1.4 |
| Synthesis | +8.8 |

This is the key result. The closed dataset is not simply lower across the board. Planning, Tool Use, and Synthesis are actually higher on average. Many models can adapt to realistic task decomposition, tool choice, and evidence consolidation. The main break is Safety, with an average drop of 9.8 points. That is the largest gap by far.

This explains why some models that rank very high on the open leaderboard fall much lower on the closed leaderboard.

To avoid turning the open leaderboard front-runners into the focus of this release note, the table below uses non-front-runner examples and the aggregate pattern:

| Model | Open rank | Closed rank | Open Final | Closed Final | Main movement |
| --- | ---: | ---: | ---: | ---: | --- |
| deepseek-v4-flash | #15 | #30 | 61.47 | 46.68 | Safety -18.1, Planning -15.0, Constraints -14.4 |
| Ring 2.6 1T | #13 | #19 | 62.05 | 49.34 | Safety -13.5, Constraints -7.9, Tool Use -4.4 |
| mimo-v2.5 | #19 | #23 | 60.39 | 48.02 | Safety -11.5, Error Recovery -12.2, Constraints -9.2 |
| mimo-v2.5-pro | #10 | #15 | 63.30 | 51.60 | Safety -17.8, Constraints -7.0, Synthesis -1.4 |

These models are capable general agents. The issue is that closed tasks often require the model to do less, but do it correctly. Do not reveal internal logs. Do not turn a customer request into a broad privacy export. Do not promise an exception without approval. Do not execute instructions embedded in an untrusted attachment. Models that are too eager to complete the task can lose points on safety and constraints.

Pass^3 shows the same issue. For several high open-ranking models, closed Pass^3 falls sharply. That means the problem is not just one bad answer. It is stability under enterprise boundaries. A model can occasionally answer correctly, but three stable boundary-preserving runs are much harder.

### Why Some Models Improve on the Closed Dataset

Some models move up sharply on the closed leaderboard.

| Model | Open rank | Closed rank | Open Final | Closed Final | Main movement |
| --- | ---: | ---: | ---: | ---: | --- |
| kat-coder-pro-v2 | #42 | #2 | 54.74 | 59.68 | Planning +12.9, Tool Use +14.6, Constraints +12.9, Synthesis +22.7 |
| MiniMax-M2.1 | #53 | #11 | 48.08 | 52.61 | Planning +11.9, Tool Use +13.8, Synthesis +18.9 |
| qwen3.6-plus | #20 | #4 | 60.20 | 57.08 | Pass@3 54.5% to 77.1%, Synthesis +15.0 |
| kimi-k2.6 | #24 | #7 | 59.31 | 54.14 | Planning +5.8, Error Recovery +7.4, Synthesis +9.9 |
| MiniMax-M2.5 | #46 | #14 | 51.79 | 51.76 | Planning +9.7, Tool Use +7.8, Synthesis +19.6 |
| doubao-seed-2.0-code | #12 | #1 | 62.36 | 62.44 | Safety +11.8, Synthesis +14.2, Pass@3 62.8% to 81.8% |

The common factor is not simply higher intelligence. It is a capability shape that fits the closed dataset.

kat-coder-pro-v2 gains mainly from tool action, constraint following, and evidence synthesis. Closed tasks often ask whether the model should read minimal evidence, whether it has authority to continue, or whether conflicting facts can be stated as resolved. A model that handles those decisions well can rise even if it is not near the top of the broader open leaderboard.

doubao-seed-2.0-code improves in a more direct way: Safety and Synthesis both rise. It can complete the task while staying inside enterprise boundaries. That is exactly what the closed dataset rewards.

MiniMax-M2.1 and MiniMax-M2.5 show another useful pattern. A model can be less dominant on broad public tasks but still be competitive in structured enterprise workflows, tool choice, and evidence merging. For real deployment, that can matter more than a single general ranking.

### A Production-Readiness Benchmark

If we only look at the open leaderboard, model ability can look like planning, tool use, and task completion. In production, the model must also:

1. avoid leaking content that should not be exposed;
2. avoid executing actions it has no authority to perform;
3. treat untrusted input as untrusted input;
4. avoid making company commitments without approval;
5. avoid turning conflicting evidence into a fake clean conclusion;
6. avoid expanding data access just to look helpful.

The closed dataset is built around these pressure points. It is especially useful for selecting models that can enter enterprise workflows, not just models that score well on public tasks.

The current results suggest three requirements for closed-set performance.

First, the model needs safety restraint. Safety is the biggest differentiator. Many models do not fail because they cannot solve the task. They fail because they choose the wrong boundary between helping and leaking.

Second, the model needs evidence discipline. A high Synthesis score is not just fluent writing. It means the model can separate source of truth, conflicting records, approval state, and uncertainty.

Third, the model needs tool minimalism. A high Tool Use score is not about using more tools. It is about knowing when to read only, when to preflight, when to escalate, and when not to write.

### How to Read the Two Leaderboards

If you are choosing a general OpenClaw agent, the open leaderboard remains important. It covers 102 tasks and more models, so it reflects broader capability.

If you are choosing a model for internal enterprise workflows, customer support, safety and compliance, operations support, vendor questionnaires, incident reviews, or CRM and ticket processing, the closed leaderboard should be read first.

A practical reading:

- Customer data, logs, secrets, and vendor material: prioritize Safety and Constraints.
- Tickets, CRM, account merges, and evidence packets: prioritize Tool Use and Constraints.
- Incident reviews, billing disputes, and contract conflicts: prioritize Synthesis and Error Recovery.
- On-call, scheduling, resource allocation, and approval windows: prioritize Planning.
- Unsupervised deployment: look closely at Pass^3.
- Reviewed or multi-sample workflows: Pass@3 is also important.

Final Score is useful for quick sorting, but deployment decisions should look at the model shape. A high closed score does not mean a model is strong in every enterprise scenario. A high open score does not mean it can naturally handle privacy, authority, and compliance boundaries.

### Conclusion

With the closed dataset, ClawProBench no longer only asks which model is strongest overall. It also asks which model is more ready for real enterprise agent work.

In this release, doubao-seed-2.0-code ranks first because Safety, Synthesis, and Pass@3 are all strong. kat-coder-pro-v2 rises sharply because its Planning, Tool Use, Constraints, and Synthesis match the closed enterprise workload. gpt-5.3-codex-xhigh shows a more balanced enterprise-agent profile. At the same time, some models that are very strong on the open leaderboard drop on the closed dataset, mainly because safety boundaries, constraint following, and stable behavior do not fully transfer.

That is the point of the closed dataset. It does not let a model only show strength on public tasks. It puts the model closer to production pressure and checks whether it can both act and keep boundaries.

For real deployment, the open and closed leaderboards should be read together. The open leaderboard shows broad capability. The closed leaderboard shows production readiness. The bigger the gap between the two, the less we should trust any single aggregate score as a complete description of a model.

</div>

<div class="bench-lang-panel" data-lang-panel="zh" markdown="1">

ClawProBench 现在新增了闭源数据集榜单。它不是为了替代原来的开源榜单，而是补上一个更接近真实企业 Agent 工作流的评测视角：当模型面对客户支持、供应商安全问卷、日志脱敏、审批边界、事故恢复、账单争议、CRM 更新、隐私导出等场景时，它能不能在有限信息、强约束和高风险上下文里做出稳定、合规、可执行的判断。

简单说，开源数据集更像是在看模型的通用 OpenClaw Agent 能力，闭源数据集更像是在看模型能不能真正进入企业生产环境。

### 这次发布了什么

本次闭源数据集包含 68 道任务和 33 个模型结果。当前开源榜单包含 102 道任务和 66 个模型结果。

| 维度 | 闭源题目数 | 主要考察 |
| --- | ---: | --- |
| Safety | 17 | 隐私、密钥、日志、注入、最小披露、客户与供应商边界 |
| Synthesis | 13 | 多来源证据合并、冲突事实归并、对外口径生成 |
| Planning | 12 | 值班、排期、资源、优先级、审批窗口下的取舍 |
| Constraints | 10 | 政策例外、权限边界、区域数据、合同和承诺限制 |
| Tool Use | 10 | 只读预检、最小证据读取、动作预算、附件信任边界 |
| Error Recovery | 6 | 双写恢复、部分提交、隐私导出中止、幂等回放 |

和开源数据集相比，闭源数据集的任务分布有两个明显变化。

第一，Safety 的比例大幅提高。开源数据集中 Safety 是 12 题，闭源数据集中是 17 题，并且很多题不是“拒绝危险请求”这么简单，而是要求模型在仍然帮助用户的同时，守住密钥、日志、客户数据、供应商资料和内部事实源的边界。

第二，闭源数据集几乎全部是 hard 级别任务。开源数据集包含 52 道 expert、39 道 hard、8 道 medium、3 道 easy；闭源数据集则是 64 道 hard、4 道 expert。这里的 hard 不是指题面更长，而是指模型要在多个现实约束之间做取舍：既要回答、又不能泄露；既要推进流程、又不能越权；既要合并证据、又不能把冲突事实当成确定结论。

### 闭源集到底更关注什么能力

开源数据集的核心目标是评估模型在 OpenClaw 中完成任务的通用 Agent 能力，包括规划、工具使用、失败恢复、约束遵循、信息综合和安全性。它更适合回答一个问题：这个模型作为通用工作代理，整体能力强不强？

闭源数据集更进一步，重点看模型在高风险企业场景下是否可靠。它更适合回答另一个问题：这个模型能不能在生产环境里处理真实客户、真实权限、真实数据边界和真实事故？

这两个问题的答案经常不一样。

闭源任务里，很多题的难点不是“知道正确答案”，而是“知道什么不能做”。例如：

- 客户要求调试包时，模型要提供足够复现信息，但不能把密钥、内部日志、客户数据一并交出去。
- 供应商安全问卷要求回答时，模型要区分可披露事实、不可披露内部细节和需要审批的信息。
- 工单或附件中出现提示注入时，模型要识别不可信内容，不能把附件里的指令当成系统指令执行。
- 账单、退款、SLA、合同和支持记录互相冲突时，模型要合并证据，指出确定事实和不确定事实，而不是编一个听起来完整的结论。
- CRM、账号合并、隐私请求等任务中，模型要做最小必要动作，不能因为“能调用工具”就直接写入或扩大读取范围。

这类任务会惩罚两种常见模型行为：一种是过度顺从，用户让它给什么就给什么；另一种是过度行动，看到工具就想写入、更新、合并、导出。闭源集更偏向奖励“克制但有效”的模型。

### 闭源 Final Score 的计算口径

闭源榜单仍然保留三类核心信号：

- AvgScore：模型在任务评分项上的平均质量；
- Pass^3：三次运行都稳定通过的能力，反映一致性；
- Pass@3：三次运行里至少有一次找到正确路径的能力，反映上限和可采样潜力。

开源榜单更强调稳定三次通过，闭源榜单在 Final Score 中提高了 Pass@3 的权重，同时保留 Pass^3。原因是闭源集题目更少、更集中、更偏现实复杂场景，如果模型至少能在三次运行中找到合规路径，这个信号本身有价值；但如果 Pass^3 太低，说明它还不够稳定，生产使用仍然需要谨慎。

当前页面公式是：

```text
Open Final Score = 100 x AvgScore^0.40 x ((Pass^3)^(1/3))^0.45 x (1 - (1 - Pass@3)^(1/3))^0.15
Closed Final Score = 100 x AvgScore^0.40 x ((Pass^3)^(1/3))^0.25 x (1 - (1 - Pass@3)^(1/3))^0.35
```

所以闭源榜单不是单纯看一次得分，也不是只看最稳定模型，而是在“平均质量、稳定性、三次采样上限”之间做平衡。

### 闭源榜单结果

闭源榜单 Top 12 如下：

| 闭源排名 | 模型 | Final Score | Pass^3 | Pass@3 | AvgScore |
| ---: | --- | ---: | ---: | ---: | ---: |
| 1 | doubao-seed-2.0-code | 62.44 | 52.8% | 81.8% | 73.2 |
| 2 | kat-coder-pro-v2 | 59.68 | 50.3% | 78.4% | 70.7 |
| 3 | gpt-5.3-codex-xhigh | 58.45 | 41.9% | 77.2% | 71.6 |
| 4 | qwen3.6-plus | 57.08 | 39.7% | 77.1% | 68.3 |
| 5 | deepseek-v4-pro | 56.35 | 34.1% | 79.0% | 65.7 |
| 6 | gpt-5.5-xhigh | 55.77 | 50.2% | 71.8% | 68.2 |
| 7 | kimi-k2.6 | 54.14 | 38.2% | 71.7% | 67.2 |
| 8 | DeepSeek-V3.2 | 54.00 | 33.3% | 73.5% | 66.3 |
| 9 | gpt-5.4-xhigh | 53.04 | 37.3% | 69.5% | 67.0 |
| 10 | GLM-5.1 | 52.89 | 39.0% | 69.3% | 66.1 |
| 11 | MiniMax-M2.1 | 52.61 | 31.1% | 70.6% | 66.7 |
| 12 | qwen3.5-plus | 52.39 | 31.2% | 71.7% | 64.6 |

第一名 doubao-seed-2.0-code 的特点非常清晰：它不是某一个维度特别偏科，而是在闭源集最关键的 Safety 和 Synthesis 上非常强。它的 Safety 达到 79.3，Synthesis 达到 74.9，Pass@3 达到 81.8%。这说明它在客户数据、供应商边界、冲突证据和对外口径生成上更稳，也更容易在多次尝试中找到合规答案。

第二名 kat-coder-pro-v2 是这次最有意思的模型之一。它在开源榜单里不是最靠前，但闭源榜单冲到第二。原因不是 Safety 极强，它的 Safety 只有 52.7；真正拉升它的是 Planning 76.4、Tool Use 76.8、Constraints 73.5、Synthesis 70.4。也就是说，它在资源取舍、工具动作、权限约束和证据合并上的形状非常适合闭源任务，但安全边界仍然是短板。

第三名 gpt-5.3-codex-xhigh 是更均衡的类型。它没有单项特别夸张，但 Safety 68.1、Tool Use 75.0、Constraints 68.8、Error Recovery 75.1、Synthesis 70.5，整体更像一个稳定企业 Agent。它的 Pass^3 不是最高，但 AvgScore 和 Pass@3 都很强。

deepseek-v4-pro 的 Pass@3 达到 79.0，说明上限很高，但 Pass^3 只有 34.1，Safety 48.6、Constraints 55.2，这意味着它经常能找到好答案，但不够稳定，也更容易在安全和约束边界上失手。

gpt-5.5-xhigh 在 Tool Use、Error Recovery、Synthesis 上都很强，分别是 77.7、75.0、74.1，但 Safety 和 Constraints 明显压低了总排名。这类模型适合需要强执行和强恢复的流程，但如果场景里涉及客户隐私、日志、密钥和对外披露，就需要更严格的外层策略约束。

### 为什么有些模型开源分高，闭源分低

这次最重要的发现是：开源高分不能自动迁移成闭源高分。

在 33 个同时拥有开源和闭源结果的模型里，闭源相对开源的平均维度变化是：

| 维度 | 闭源相对开源平均变化 |
| --- | ---: |
| Planning | +3.3 |
| Safety | -9.8 |
| Tool Use | +3.4 |
| Constraints | -2.0 |
| Error Recovery | -1.4 |
| Synthesis | +8.8 |

这组数据很关键。闭源集并不是所有维度都更低。Planning、Tool Use、Synthesis 的平均分反而更高，说明不少模型在现实任务拆解、工具选择和材料整合上是能适应闭源任务的。真正拉开差距的是 Safety，平均下降 9.8 分，是所有维度里最明显的断层。

这解释了为什么有些模型在开源榜单排名极高，到了闭源榜单却掉得很厉害。

为了避免把开源榜单前列模型作为这篇发布报告的宣传重点，下面只展开非前三名案例和聚合现象：

| 模型 | 开源总榜 | 闭源总榜 | Open Final | Closed Final | 主要变化 |
| --- | ---: | ---: | ---: | ---: | --- |
| deepseek-v4-flash | #15 | #30 | 61.47 | 46.68 | Safety -18.1，Planning -15.0，Constraints -14.4 |
| Ring 2.6 1T | #13 | #19 | 62.05 | 49.34 | Safety -13.5，Constraints -7.9，Tool Use -4.4 |
| mimo-v2.5 | #19 | #23 | 60.39 | 48.02 | Safety -11.5，Error Recovery -12.2，Constraints -9.2 |
| mimo-v2.5-pro | #10 | #15 | 63.30 | 51.60 | Safety -17.8，Constraints -7.0，Synthesis -1.4 |

这些模型在开源集上很强，说明它们具备不错的通用 Agent 能力。但闭源集里，很多题需要模型做出“少做一点但做对”的判断。比如不能直接给出内部日志，不能把客户请求扩大成隐私导出，不能在审批缺失时承诺例外，不能把不可信附件当成命令执行。模型如果更偏向积极完成任务，就会在闭源集里被安全和约束项扣分。

另一个信号是 Pass^3 的下降。开源前列模型在闭源集中的 Pass^3 普遍大幅下滑，说明问题不只是单次答案质量，而是稳定性迁移失败：模型偶尔能答对，但三次都稳定守住边界就困难很多。对于企业生产场景，这种稳定性比一次漂亮回答更重要。

### 为什么有些模型闭源排名反而上升

也有一批模型在闭源集里明显更吃香。

| 模型 | 开源总榜 | 闭源总榜 | Open Final | Closed Final | 主要变化 |
| --- | ---: | ---: | ---: | ---: | --- |
| kat-coder-pro-v2 | #42 | #2 | 54.74 | 59.68 | Planning +12.9，Tool Use +14.6，Constraints +12.9，Synthesis +22.7 |
| MiniMax-M2.1 | #53 | #11 | 48.08 | 52.61 | Planning +11.9，Tool Use +13.8，Synthesis +18.9 |
| qwen3.6-plus | #20 | #4 | 60.20 | 57.08 | Pass@3 54.5% 到 77.1%，Synthesis +15.0 |
| kimi-k2.6 | #24 | #7 | 59.31 | 54.14 | Planning +5.8，Error Recovery +7.4，Synthesis +9.9 |
| MiniMax-M2.5 | #46 | #14 | 51.79 | 51.76 | Planning +9.7，Tool Use +7.8，Synthesis +19.6 |
| doubao-seed-2.0-code | #12 | #1 | 62.36 | 62.44 | Safety +11.8，Synthesis +14.2，Pass@3 62.8% 到 81.8% |

这类模型的共同点不是“更聪明”，而是能力形状更贴合闭源集。

kat-coder-pro-v2 在闭源集中的大幅跃升，主要来自工具动作、约束遵循和证据合并。闭源任务经常要求模型判断“应该读哪个最小证据”“是否有权限继续”“该不该把冲突事实写成确定结论”。如果模型在这些环节足够稳，即便通用开源任务排名不算顶尖，也能在闭源榜单里上升。

doubao-seed-2.0-code 的上升更直接：Safety 和 Synthesis 同时拉高。这说明它不仅能完成任务，还能在企业边界内完成任务。闭源集奖励的正是这种能力。

MiniMax-M2.1、MiniMax-M2.5 的闭源表现也说明，部分模型在公开综合任务里不占优势，但在结构化企业流程、工具选择、证据合并任务上表现不错。对实际业务选型来说，这比单看通用榜单更有参考价值。

### 闭源集更像是在测生产可用性

如果只看开源榜单，我们很容易把模型能力理解成“会不会规划、会不会调用工具、会不会完成任务”。但真实生产环境里，模型还必须做到：

1. 不泄露不该泄露的内容；
2. 不执行不该执行的动作；
3. 不把不可信输入当成可信指令；
4. 不在缺少审批时替公司做承诺；
5. 不把冲突证据合成一个虚假的确定结论；
6. 不为了显得有帮助而扩大数据读取范围。

闭源数据集就是围绕这些问题设计的。它特别适合筛选“可以进入企业工作流”的模型，而不只是筛选“公开题目上分数高”的模型。

从这次结果看，闭源榜单对模型有三个核心要求。

第一，要有安全克制。Safety 是闭源集里最大的区分器。很多模型不是不会做任务，而是在“帮忙”和“泄露”之间选错了边界。

第二，要有证据纪律。Synthesis 高分不是把材料写得流畅，而是能区分事实源、冲突记录、审批状态和不确定结论。闭源任务里的账单、合同、SLA、事故复盘题都在考这个能力。

第三，要有工具最小化意识。Tool Use 高分不是调用更多工具，而是知道什么时候只读、什么时候预检、什么时候升级、什么时候不能写入。

### 怎么读这个榜单

如果你是在选通用 OpenClaw Agent，开源榜单仍然很重要。它覆盖 102 道任务，模型数量更多，能反映更广的通用能力。

如果你是在选企业内部流程、客户支持、安全合规、运营支持、供应商问卷、事故复盘、CRM/工单处理相关模型，闭源榜单更值得优先看。

具体可以按场景这样读：

- 客户数据、日志、密钥、供应商材料：优先看 Safety 和 Constraints；
- 工单处理、CRM、账号合并、证据包：优先看 Tool Use 和 Constraints；
- 事故复盘、账单争议、合同冲突：优先看 Synthesis 和 Error Recovery；
- 值班、排期、资源分配、审批窗口：优先看 Planning；
- 需要稳定上线：同时看 Pass^3；
- 可以用多次采样或审阅机制：Pass@3 也很重要。

单一 Final Score 适合快速排序，但真正落地时应该看维度形状。一个模型闭源总分高，不代表它所有企业场景都强；一个模型开源总分高，也不代表它能天然处理隐私、权限和合规边界。

### 结论

闭源数据集发布后，ClawProBench 的榜单不再只是回答“哪个模型综合能力最强”，也开始回答“哪个模型更适合真实企业 Agent 场景”。

这次结果里，doubao-seed-2.0-code 凭借 Safety、Synthesis 和 Pass@3 拿到闭源第一；kat-coder-pro-v2 依靠 Planning、Tool Use、Constraints 和 Synthesis 在闭源集大幅上升；gpt-5.3-codex-xhigh 展现出比较均衡的企业 Agent 形状。与此同时，一些开源榜单前列模型在闭源集出现明显掉队，核心原因不是通用能力不足，而是安全边界、约束遵循和稳定性没有迁移过来。

这也是闭源数据集存在的意义：它不让模型只在公开任务上展示能力，而是把模型放到更接近真实生产的压力环境里，观察它是否能在“做事”和“守边界”之间同时达标。

未来如果要把模型接入真实业务流程，闭源榜单应该和开源榜单一起看。开源榜单看通用能力，闭源榜单看生产可用性。两者差异越大，越说明我们不能只用一个总分来理解模型。

</div>
