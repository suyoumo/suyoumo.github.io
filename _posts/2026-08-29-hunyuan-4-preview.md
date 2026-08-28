---
layout: post
title: "Hunyuan 4 Preview：腾讯的反击"
date: 2026-08-29
categories: model-eval
tags: [hunyuan, tencent, llm-eval]
---

## 基本情况

2026 年 8 月，腾讯混元团队交出了 Hunyuan 4 Preview。距离 Hunyuan 3 Preview 发布不到半年，这个迭代速度在国内头部模型中属于正常节奏——不算最快，但绝不算慢。

发布时的竞争态势可以用"群狼环伺"来形容。DeepSeek V4 Pro 0813 刚刚站稳脚跟，Qwen 3.8 Max 以 137 个 benchmark 的覆盖度傲视群雄，GLM-5.3 在多个维度展现出强劲实力，Kimi K3 凭借 Agent 能力的跃升重返第一梯队，而北美的 GPT-5.6 Sol 和 Claude Opus 5 依然把守着推理能力的天花板。在这个战场上，Hunyuan 3 Preview 的表现只能算中游——SWE-bench Multilingual 68.3 分，Toolathlon 56.2 分，GPQA 87.2 分，与头部有明显差距。

Hunyuan 4 Preview 的核心改进可以用"全面跃升"来概括。如果看三代模型的演进轨迹，进步更加清晰：

**编程能力**：SWE-bench Multilingual 从 Hunyuan 3 的 75.8 提升到 Hunyuan 4 Preview 的 82.9（Hunyuan 3 Preview 为 68.3），SWE-bench Pro 从 57.9 提升到 65.7（Preview 为 46.0），DeepSWE 从 28.0 飙升到 64.3（三代中 Preview 和正式版都是 28.0），SWE-Marathon 从 5.0 提升到 31.9（Preview 为 5.0）。

**Agent 能力**：E-Bench 从 Hunyuan 3 的 50.2 提升到 77.1（Preview 为 48.5），Hy-SWE Max 从 49.0 提升到 64.2（Preview 为 30.0），Hy-CompanyBench 从 41.7 提升到 62.4（Preview 为 29.8）。新增的 Toolathlon-Verified 从 Preview 的 56.2 提升到 74.1，JobBench 从 34.6 提升到 61.7，GDPval-AA v2 Elo 分数从 1213 提升到 1678（+465）。

**推理能力**：GPQA Diamond 从 Hunyuan 3 的 90.4 提升到 92.3（Preview 为 87.2），HLE 从 37.0 提升到 43.4（Preview 为 30.0），MathArena Apex 2025 从 38.7 提升到 74.2（+35.5），BrokenArXiv 从 26.7 提升到 54.6（+27.9）。

从定位来看，Hunyuan 4 Preview 瞄准的是全能型选手——编程、Agent、搜索、推理四个维度都有显著进步，没有明显的短板。在榜单上，这个进步让混元系列从 Hunyuan 3 Preview 的中游位置，一举进入到与 DeepSeek V4 Pro、Qwen 3.8 Max、GLM-5.3 同列的第一梯队。

## 优势

### 编程能力：从追赶者到竞争者

Hunyuan 3 Preview 的编程能力只能算及格线水平。SWE-bench Multilingual 68.3 分，SWE-bench Pro 46.0 分，DeepSWE 28.0 分——这些数字在当时的榜单上并不显眼。Hunyuan 4 Preview 的改变是实质性的。

SWE-bench Multilingual 从 68.3 提升到 82.9，这个分数超过了 DeepSeek V4 Pro 0813 的 77.3、GPT-5.6 Sol 的 74.1，与 Qwen 3.8 Max 的 82.6 基本持平，仅落后于 GLM-5.3 的 81.3 和 Claude Opus 5 的 89.5。SWE-bench Pro 从 46.0 提升到 65.7，超过了 DeepSeek V4 Pro 0813 的 60.3，与 GLM-5.3 的 64.6、GPT-5.6 Sol 的 64.6 处于同一水平。DeepSWE 从 28.0 飙升到 64.3，虽然仍落后于 GPT-5.6 Sol 的 73.0 和 Kimi K3 的 67.5，但已经从"完全不够看"变成了"有竞争力"。

更值得关注的是 SWE Atlas 系列的三个子任务。Codebase Q&A 从 30.8 提升到 64.0（+33.2），Test Writing 从 35.9 提升到 57.8（+21.9），Refactoring 从 32.9 提升到 53.3（+20.4）。这三个任务分别考察代码理解、测试生成和重构能力，Hunyuan 4 Preview 在三个维度上都有 20 分以上的提升，说明编程能力的进步是系统性的，而不是某个单一维度的突破。

Terminal-Bench 2.1 从 70.8 提升到 85.4，这个分数在榜单上属于中上水平——落后于 GPT-5.6 Sol 的 88.8、Kimi K3 的 88.3、GLM-5.3 的 88.2 和 DeepSeek V4 Pro 0813 的 87.9，但已经超过了 Claude Opus 5 的 88.0（基本持平）。NL2Repo 从 45.6 提升到 58.9，虽然仍落后于 Claude Opus 5 的 75.3 和 DeepSeek V4 Pro 0813 的 61.5，但进步幅度可观。

### Agent 能力：Elo 分数暴涨 465 分

如果说编程能力的进步是"从及格到良好"，那么 Agent 能力的进步就是"从平庸到优秀"。

GDPval-AA v2 的 Elo 分数从 1213 提升到 1678，暴涨 465 分。这个提升幅度在榜单上非常罕见——作为对比，DeepSeek V4 Pro 0813 是 1753，Qwen 3.8 Max 是 1740，GLM-5.3 是 1769，Kimi K3 是 1682。Hunyuan 4 Preview 的 1678 分已经与 Kimi K3 基本持平，进入了第一梯队的门槛。

Toolathlon-Verified 从 56.2 提升到 74.1，与 DeepSeek V4 Pro 0813 的 74.1 完全持平，落后于 Kimi K3 的 76.5 和 Claude Opus 5 的 76.5，但超过了 Qwen 3.8 Max 的 72.5 和 GPT-5.6 Sol 的 73.2。MCP-Atlas 从 75.0 提升到 83.7，超过了 DeepSeek V4 Pro 0813 的 82.5 和 Qwen 3.8 Max 的 81.9，与 GPT-5.6 Sol 的 83.6 基本持平，仅落后于 Kimi K3 的 84.2 和 Claude Opus 5 的 85.7。

JobBench 从 34.6 提升到 61.7（+27.1），E-Bench 从 48.5 提升到 77.1（+28.6），这两个任务的大幅提升说明 Hunyuan 4 Preview 在实际工作场景中的 Agent 能力有了质的飞跃。BankerToolBench 从 68.8 提升到 78.6，超过了 DeepSeek V4 Pro 0813 的 73.1 和 Qwen 3.8 Max 的 74.7，与 GLM-5.3 的 77.8 基本持平，仅落后于 GPT-5.6 Sol 的 79.0 和 Claude Opus 5 的 81.9。

搜索能力方面，WideSearch 从 70.2 提升到 83.9，DRACO 从 65.2 提升到 77.2，OneMillionBench 从 51.5 提升到 65.4。WideSearch 的 83.9 分超过了 DeepSeek V4 Pro 0813 的 81.8 和 Qwen 3.8 Max 的 81.9，与 GLM-5.3 的 83.2 基本持平，仅落后于 GPT-5.6 Sol 的 86.3 和 Claude Opus 5 的 84.0。

### 推理能力：GPQA 突破 92 分

GPQA Diamond 从 87.2 提升到 92.3，这个分数在榜单上属于顶级水平——超过了 GLM-5.3 的 92.0 和 Qwen 3.8 Max 的 92.6（基本持平），仅落后于 DeepSeek V4 Pro 0813 的 93.0、Kimi K3 的 93.5 和 Claude Opus 5 的 93.7、GPT-5.6 Sol 的 94.6。

MathArena Apex 2025 从 38.7 提升到 74.2（+35.5），这是所有 benchmark 中提升幅度最大的之一。虽然仍落后于 GPT-5.6 Sol 的 90.0 和 Claude Opus 5 的 91.4，但已经从"完全不够看"变成了"有竞争力"。ArXivMath 从 51.7 提升到 66.6，超过了 DeepSeek V4 Pro 0813 的 62.1，与 Qwen 3.8 Max 的 67.1 基本持平，仅落后于 GPT-5.6 Sol 的 79.5 和 Claude Opus 5 的 71.5。

SUPERChem 从 52.6 提升到 66.4，超过了 DeepSeek V4 Pro 0813 的 62.0 和 Qwen 3.8 Max 的 61.9，与 Kimi K3 的 66.9 基本持平，仅落后于 GPT-5.6 Sol 的 73.6 和 Claude Opus 5 的 76.7。BioMysteryBench 从 54.9 提升到 71.3，超过了 DeepSeek V4 Pro 0813 的 61.6 和 Qwen 3.8 Max 的 58.9，与 GLM-5.3 的 69.0 基本持平，仅落后于 GPT-5.6 Sol 的 73.1 和 Claude Opus 5 的 72.1。

## 不足

### 极限推理仍有差距

HLE（Humanity's Last Exam）是衡量模型极限推理能力的标杆任务。Hunyuan 4 Preview 的 HLE 分数是 43.4，虽然比 Hunyuan 3 Preview 的 30.0 提升了 13.4 分，但与头部模型相比仍有明显差距——GPT-5.6 Sol 是 47.0，Kimi K3 是 46.9，Claude Opus 5 更是达到了 64.7。43.4 分在榜单上只能算中游水平，说明在需要深度推理的复杂任务上，混元 4 还有提升空间。

CritPt 的情况类似。Hunyuan 4 Preview 的 CritPt 分数是 16.9，虽然比前代的 4.9 提升了 12 分，但与 GPT-5.6 Sol 的 32.0、Claude Opus 5 的 28.0、Kimi K3 的 23.0 相比，差距仍然显著。CritPt 考察的是模型对复杂指令的遵循和批判性思维能力，16.9 分说明混元 4 在这方面还需要加强。

HorizonMath 从 3.5 提升到 8.8，虽然提升幅度超过 150%，但绝对分数仍然很低——GPT-5.6 Sol 是 10.62，Kimi K3 是 7.08。MathArena Apex 2025 虽然从 38.7 提升到 74.2，但与 GPT-5.6 Sol 的 90.0 和 Claude Opus 5 的 91.4 相比，差距仍然有 15-17 分。

### 部分 Agent 任务仍落后

AutomationBench 从 16.1 提升到 32.1，提升幅度超过 100%，但绝对分数在榜单上仍然偏低——GLM-5.3 是 48.2，Kimi K3 是 46.7，Qwen 3.8 Max 是 39.8，Claude Opus 5 是 48.7。32.1 分说明混元 4 在自动化任务编排方面还需要加强。

SkillsBench 从 55.3 提升到 62.9，但落后于 Qwen 3.8 Max 的 70.2 和 GPT-5.6 Sol 的 73.5。APEX-Agents 从 24.4 提升到 37.1，但落后于 Kimi K3 的 41.0 和 Claude Opus 5 的 41.8。Agents' Last Exam 从 17.1 提升到 22.8，但落后于 GPT-5.6 Sol 的 30.6 和 Kimi K3 的 28.3。

### 与 Claude Opus 5 的全面差距

如果以 Claude Opus 5 作为标杆，Hunyuan 4 Preview 在几乎所有维度上都有差距。SWE-bench Multilingual 82.9 vs 89.5，SWE-bench Pro 65.7 vs 79.2，NL2Repo 58.9 vs 75.3，DRACO 77.2 vs 88.6，HLE 43.4 vs 64.7，CritPt 16.9 vs 28.0，MathArena Apex 2025 74.2 vs 91.4，BrokenArXiv 54.6 vs 77.7。这些差距中，有些是 10 分以内的"可追赶"差距，有些是 20 分以上的"代际"差距。

不过需要指出的是，Claude Opus 5 是目前榜单上的顶级模型，与它存在差距是正常现象。更合理的对比对象是同级别的 DeepSeek V4 Pro 0813、Qwen 3.8 Max、GLM-5.3 和 Kimi K3——在这些对比中，Hunyuan 4 Preview 的表现要好看的多。

## 酥悠沫评

大模型竞赛进入 2026 年下半年，格局已经逐渐清晰。北美的 GPT-5.6 Sol 和 Claude Opus 5 把守着推理能力的天花板，国内的 DeepSeek、Qwen、GLM、Kimi 四强鼎立，各自在编程、Agent、推理等维度上互有胜负。在这个战场上，腾讯混元系列的存在感一直不算强——Hunyuan 2.0 在 ClawProBench 上只拿到 52.7 分（排名第 50），Hunyuan T1 更是只有 34.7 分（排名第 69）。

Hunyuan 4 Preview 的发布，是混元团队的一次有力反击。

从数据来看，这次进步是全面而实质性的。编程能力上，DeepSWE 从 28.0 飙升到 64.3，SWE-Marathon 从 5.0 提升到 31.9——这些不是微调式的改进，而是架构或训练方法层面的突破。Agent 能力上，GDPval-AA v2 Elo 分数暴涨 465 分，从 1213 到 1678，这个提升幅度在榜单上非常罕见。推理能力上，MathArena Apex 2025 从 38.7 提升到 74.2，几乎翻了一倍。

但也要清醒地看到，Hunyuan 4 Preview 仍然是一个"追赶者"的角色。与 Claude Opus 5 相比，在 HLE、CritPt、MathArena 等极限推理任务上仍有 20 分以上的差距。与 Kimi K3 相比，在 Toolathlon、APEX-Agents 等 Agent 任务上仍有 2-4 分的差距。与 GPT-5.6 Sol 相比，在 DeepSWE、CritPt、BrokenArXiv 等任务上仍有 8-15 分的差距。

"千淘万漉虽辛苦，吹尽狂沙始到金。"混元系列的榜单轨迹本身就是一部追赶史。从 Hunyuan 2.0 的 52.7 分（ClawProBench 排名第 50），到 Hunyuan T1 的 34.7 分（排名第 69），再到 Hunyuan 3 Preview 的中游水平（SWE-bench Multilingual 68.3，GPQA 87.2），Hunyuan 3 正式版的稳步提升（SWE-bench Multilingual 75.8，GPQA 90.4），直至 Hunyuan 4 Preview 叩开第一梯队的大门（SWE-bench Multilingual 82.9，GPQA 92.3）——每一步都不容易，但每一步都在前进。

前方是风急浪大的太平洋，GPT-5.6 Sol 和 Claude Opus 5 的船队已经驶出了很远。但混元团队显然已经准备好了——这艘船的速度，正在加快。

---

> 综合榜单：[https://suyoumo.github.io/llm-leaderboard/](https://suyoumo.github.io/llm-leaderboard/)
> ClawProBench 榜单：[https://suyoumo.github.io/bench/](https://suyoumo.github.io/bench/)
