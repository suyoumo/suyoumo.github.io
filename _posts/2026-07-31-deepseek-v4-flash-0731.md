---
layout: post
title: "DeepSeek-V4-Flash-0731：吹尽狂沙始到金"
date: 2026-07-31 12:00:00 +0800
categories: 评测
---

## 基本情况

7 月 31 日，DeepSeek 宣布 DeepSeek-V4-Flash 正式版 API 开启公测。和 4 月 24 日发布的 V4-Flash 预览版相隔 98 天，这个节奏既不算慢，也谈不上仓促：5 月有 Claude Opus 4.8，7 月初有 GLM-5.2，7 月中旬 Kimi K3 刚刚亮相，代码 Agent 的竞争已从“能否完成任务”转到“能否在不同任务形态里稳定完成任务”。

这次最值得留意的不是型号中的 `Flash`，而是成绩表上九项 Agent / 代码基准全部超过两条 V4 预览线。DeepSWE 从 V4-Flash Preview 的 7.3、V4-Pro Preview 的 12.8 提升到 54.4；DSBench-Hard 则从 25.8、31.1 提升到 59.6。它不是在原有预览版上挪动几个百分点，而是在若干真实软件工程任务上完成了一次明显的重排。

榜单目前没有提供可用于计算综合名次的统一 ELO、价格或时延数据，因而本文不讨论“总榜第几”或性价比。下文仅讨论已公布的分数。按照成绩表脚注，DeepSeek-V4-Flash-0731 在公开基准中的 Code Agent 任务采用 DeepSeek Harness 的极简模式，使用 max 档位、`top_p=0.95`、`temperature=1.0`；DSBench 两项为 DeepSeek 内部测试集。

![DeepSeek-V4-Flash-0731 官方成绩表](/assets/images/llm-reports/deepseek-v4-flash-0731-score-table.png)

## 优势

### 从预览版到正式版，软件工程任务完成了实质跨越

先看同系对比，V4-Flash-0731 的九项成绩全部越过 V4-Flash Preview 和 V4-Pro Preview。Terminal-Bench 2.1 为 82.7，比 Pro Preview 的 72.1 高 10.6 分，比 Flash Preview 的 61.8 高 20.9 分；NL2Repo 为 54.2，分别高出 15.7 分和 14.8 分。更醒目的是 DeepSWE：54.4 比 Pro Preview 高 41.6 分，也比 Flash Preview 高 47.1 分。

这种改善并不只发生在单一基准。面向全栈开发的 DSBench-FullStack 达到 68.7，比两条预览线的 41.8 和 37.0 分别高 26.9 分、31.7 分；难题集 DSBench-Hard 的 59.6 也比 31.1、25.8 高 28.5 分、33.8 分。即使不把内部 DSBench 与公开集混作总分，这两个大幅度差值仍说明：新版本对更长链路的软件任务，至少已经不再是预览版的边缘能力。

### 工具型 Agent 基准上，已压过 GLM-5.2 的同表成绩

把目光移到同一张成绩表中的主要对手，V4-Flash-0731 在多个公开 Agent / 代码指标上越过 GLM-5.2。Terminal-Bench 2.1 的 82.7 略高于 GLM-5.2 的 81.0；NL2Repo 为 54.2，高于 48.9；DeepSWE 为 54.4，高于 46.2。Toolathlon-Verified 的差距更清楚：70.3 对 59.9，高出 10.4 分；AutomationBench (Public) 的 25.1 对 12.9，接近翻倍。

这不意味着它已全面超过最强闭源模型。Claude Opus 4.8 在该表中仍以 85.0 领先 Terminal-Bench 2.1 的 82.7，并在 NL2Repo、CyberGym 和 DeepSWE 上分别有 69.7、83.1、59.0。但 Flash 的 Toolathlon 70.3 已接近 Opus 的 76.2，Agents' Last Exam 为 25.2，也只比 Opus 的 25.7 少 0.5 分。对于一个名称带有 Flash 的版本，这组数据至少证明它并非只靠轻量定位换取速度的陪跑者。

## 不足

### 与 Kimi K3 的同名公开基准对照，仍有一道上沿

Kimi K3 是这轮国产 Agent 竞争里绕不开的参照。项目榜单记录的 Kimi K3 公开成绩为 Terminal-Bench 2.1 88.3、DeepSWE 67.5、Toolathlon 73.2、AutomationBench 30.8；V4-Flash-0731 对应为 82.7、54.4、70.3、25.1，分别少 5.6、13.1、2.9、5.7 分。尤其 DeepSWE 的差距最大，说明面对该基准覆盖的软件工程问题，Flash 距离 K3 的上沿仍很明确。

需要强调的是，K3 数字来自其公开报告，未出现在本次 DeepSeek 成绩表中；尽管基准名称相同，公开资料不足以确认模型设置、Agent 框架和采样配置完全一致。因此这是一组有价值的公开横向参照，而不是可以据此宣称严格胜负的受控实验。

### 面对 Opus 4.8，广度尚未完全补齐

同表横比之下，Opus 4.8 依然在多项更难的工程或安全任务上占优：NL2Repo 为 69.7，较 Flash 的 54.2 高 15.5 分；CyberGym 为 83.1，较 76.7 高 6.4 分；DeepSWE 为 59.0，较 54.4 高 4.6 分。DSBench-FullStack 与 DSBench-Hard 也是 71.6、71.7，分别高于 Flash 的 68.7、59.6。

所以，82.7 的 Terminal-Bench 2.1 和 70.3 的 Toolathlon 已足以把 Flash 推入一线讨论，但还不能把它读成全任务形态的领跑者。更稳妥的结论是：它在工具使用与公开代码任务上逼近前沿，在高难仓库还原、网络安全和复杂全栈场景中，仍须用更多一致设置下的复测来确认上限。

## 酥悠沫评

大模型竞赛最容易让人误会的一件事，是把一次改名、一次公测当成一次能力跃迁。真正的跃迁要落在难题上。V4-Flash-0731 的答案颇干脆：DeepSWE 从 7.3 到 54.4，Toolathlon 从 49.7 到 70.3，DSBench-Hard 从 25.8 到 59.6。预览版像是在岸边试水，正式版终于把船划进了深处。

但海图上仍有别人的灯火。Kimi K3 在四项同名公开基准上尚居前方，Opus 4.8 也在 NL2Repo 和 DSBench-Hard 保有明显优势。DeepSeek 这次最可贵的地方，不是替 Flash 写了一份“够快”的辩词，而是让它有了与强者同桌比较的资格。正如刘禹锡所言：“千淘万漉虽辛苦，吹尽狂沙始到金。”分数不会替任何团队宣布终局；它只提醒我们，Agent 的下一段航程，已经从模型会不会写代码，走向它能不能把一项工作真正做完。

## 数据来源与口径

- DeepSeek-V4-Flash-0731、V4-Flash Preview、V4-Pro Preview、GLM-5.2 与 Claude Opus 4.8 的九项对照，来自文首所附的 [DeepSeek-V4-Flash-0731 成绩表](/assets/images/llm-reports/deepseek-v4-flash-0731-score-table.png)。
- Kimi K3 的四项同名基准成绩来自本站综合榜单收录的 Kimi K3 公开报告；它不在上述图片表内，故文中单独标注其口径限制。
- 综合榜单：https://suyoumo.github.io/llm-leaderboard/
- ClawProBench 榜单：https://suyoumo.github.io/bench/
