---
layout: post
title: "Step 5 Preview：一鸣惊人"
date: 2026-09-20
categories: model-eval
tags: [step, stepfun, llm-eval]
---

## 基本情况

2026 年 9 月 20 日，阶跃星辰交出 Step 5 Preview。这次发布有两处耐人寻味：一是版本号从 3.7 直接跳到 5，中间的 4 被整个略过——在国产模型普遍以小步快跑著称的节奏里，这种"跳级"通常意味着一次不打算解释的大版本重构；二是间隔，Step 3.5 Flash 到 3.7 Flash 只用了两个月，而 3.7 Flash 到 Step 5 Preview 用了整整五个月，在迭代速度就是生命线的行业里，敢于慢下来的团队，一般是憋着一口气。

发布时机谈不上从容。九月是名副其实的超级发布月：GPT-6 Astra（9 月 4 日）、Claude Fable 5.1（9 月 3 日）、Gemini 3.8 Flash（9 月 3 日）、Qwen3.8-Max-0902（9 月 2 日）、DeepSeek-V4.1-Flash（9 月 10 日）密集落地。而 Step 3.7 Flash 留下的家底并不厚：HLE 19.9 分，τ³-Banking 11.3 分，SciCode 40.0 分，在九月初的月度榜单上，Step 系列在前十里踪迹全无。

Step 5 Preview 的核心改进可以用"换了一台发动机"来概括。与 3.7 Flash 相比：MCP-Atlas 从 52.6 涨到 85.6（+33.0），Terminal-Bench 2.1 从 59.5 涨到 85.0（+25.5），HLE 从 19.9 涨到 46.5（+26.6），τ³-Banking 从 11.3 涨到 42.5（+31.2），AA-LCR 从 63.9 涨到 88.3（+24.4），GDPval-AA v2 的 Elo 从 1017 涨到 1571（+554）。九个共同 benchmark 无一例外全部上涨，且涨幅最小的 BrowseComp 也有 12.9 分。

这个进步直接反映在榜单位次上：Step 5 Preview 首发即进入 Code 榜和 General 榜的国产第一（全球第八和第十），综合榜国产第二（全球第十二），仅次于 Qwen3.8-Max-0902。从查无此模型到两个分榜登顶，只用了一次发布。

## 优势

### Agent 能力：MCP-Atlas 国产登顶

Agent 是这次升级的主战场。MCP-Atlas 从 52.6 飙升到 85.6，这个分数超过了 Kimi K3 的 84.2 和 GLM-5.3 的 81.9，直接站上国产第一——考虑到 3.7 Flash 时代这个数字还不及 Kimi K3 的七成，五个月的投入方向非常明确。Toolathlon-Verified 拿到 74.1，超过 Qwen3.8-Max-0902 的 73.3 和 GLM-5.3 的 73.0，距 Kimi K3 的 76.5 只差一步。工具调用之外的指令遵循同样进步明显：τ³-Banking 从 11.3 涨到 42.5，超过 Kimi K3 的 33.0、DeepSeek-V4.1-Flash 的 30.8 甚至 GPT-6 Astra 的 41.0。

综合任务侧，AA-Briefcase 的 Elo 从 1017 涨到 1417，提升 400 分，明显甩开同期发布的 DeepSeek-V4.1-Flash（1187）；AutomationBench 44.0 也高于 DeepSeek-V4.1-Flash 的 37.3 和 GPT-6 Astra 的 41.4。虽然与 Claude Fable 5.1 的 1694、GPT-6 Astra 的 1570、Kimi K3 的 1548 相比还有距离，但 Step 系列第一次在 Agent 维度有了和第一梯队掰手腕的资格。

### 编程与终端：ProgramBench 断层领先

Terminal-Bench 2.1 从 59.5 提升到 85.0，超过 DeepSeek-V4.1-Flash 的 69.9 十五分以上，与 Kimi K3 的 88.3、GLM-5.3 的 88.2 只差三分。SciCode 从 40.0 提升到 58.9，与 Kimi K3 的 59.0 基本持平，超过 GPT-6 Astra 的 54.0 和 GLM-5.3 的 56.0，距 Claude Fable 5.1 的 62.0 尚有一步之遥。DeepSWE 1.1 拿到 67.7，处在 Kimi K3（67.5）、GLM-5.3（66.9）、DeepSeek-V4.1-Flash（63.9）环绕的国产第一梯队里。

最能说明问题的是 ProgramBench：80.5 分，断层式领先——第二名的 Claude Fable 5.1 只有 33.0，Kimi K3 24.5，GLM-5.3 19.0，DeepSeek-V4.1-Flash 20.3。这个量级的差距在成熟 benchmark 上非常罕见。SWE Atlas 两个子项也有亮眼表现：Codebase Q&A 63.6、Test Writing 50.8。此外 Step 5 Preview 带来了三个新 benchmark，StepCodeBench 49.0 对 DeepSeek-V4.1-Flash 的 31.1、RoadmapBench 54.3 对 44.1，虽然新 benchmark 的横向参照还少，但首发数据已经摆出了身位。

### 搜索、知识与金融：AA-LCR 全榜第一

搜索是 Step 系列的传统强项，这次继续加深：BrowseComp 沿着 51.6（3.5 Flash）→ 75.8（3.7 Flash）→ 88.7（Step 5 Preview）的斜率上行，距 GPT-6 Astra 的 91.5 和 Kimi K3 的 91.2 只剩三分以内。知识侧的 AA-LCR 从 63.9 涨到 88.3，这个分数超过了 Claude Fable 5.1 的 80.0、GLM-5.3 的 76.0、Kimi K3 的 75.0 和 GPT-6 Astra 的 74.0——全榜第一，对一直以知识能力自矜的北美旗舰实现了反超。

推理与事实性方面，HLE 从 19.9 涨到 46.5，追平 Kimi K3 的 46.9、明显超过 GLM-5.3 的 42.0 和 DeepSeek-V4.1-Flash 的 27.3；GPQA 93.5 与 Kimi K3 持平、超过 GLM-5.3 的 92.0；AA-Omniscience 非幻觉率 57.0 超过 GPT-6 Astra 的 49.0、Kimi K3 的 49.0 和 DeepSeek-V4.1-Flash 的 48.2。金融方向这次被单独强调：FinStepBench 三个子项 LiveSearch 74.5、CorporateValuation 60.6、FinanceDR 55.8，加上 FrontierFinance 的 66.4，虽然都是新 benchmark 缺乏横向对比，但配合 τ³-Banking 和 JobBench（59.0，超过 Kimi K3 的 54.3 和 DeepSeek-V4.1-Flash 的 44.3），垂直场景的布局意图清晰可见。

## 不足

### 多模态仍是老短板

Flash 系列的视觉欠账没有还清。MMMU-Pro 76.0，落后于 Qwen3.8-Max-0902 的 82.7、Kimi K3 的 81.6，也低于 GPT-6 Astra 的 87.0；文档侧更弱，GDP.pdf 只有 14.8，SpreadsheetBench 2 只有 29.4。对一个 Agent 能力已经站上国产前列的模型，看不懂复杂表格和 PDF 是会直接限制落地场景的。

### 极限前沿任务与北美旗舰差距明显

Terminal-Bench 4.0 拿到 33.3，而 GPT-6 Astra 是 57.9、Claude Fable 5.1 是 55.8，差距超过 22 分；Agents' Last Exam 29.5 对 GPT-6 Astra 的 59.3 恰好是一倍；CritPT 20.9 对 GPT-6 Astra 的 32.0、Claude Fable 5.1 的 30.0。超长程、超高难度的任务上，Step 5 Preview 与北美旗舰之间还隔着一整个身位。GDPval-AA v2 的 1571 也落后于 Claude Fable 5.1 的 1853、GLM-5.3 的 1769 和 Kimi K3 的 1682，复杂经济任务的价值转化率还有提升空间。

### 部分新维度数据存疑

Apex Agents 37.8 落后于 Kimi K3 的 41.0，MLS Bench Lite 40.5 只算中游。这两个维度国内头部玩家普遍在 40 分上下挣扎，算是行业共性，但 Step 5 Preview 没有表现出越级的实力。

## 酥悠沫评

此鸟不飞则已，一飞冲天；不鸣则已，一鸣惊人。——《史记·滑稽列传》

楚庄王的大鸟三年不飞不鸣，满朝以为其呆，答话的人却知道，沉默是在攒翅膀。版本号从 3.7 直接到 5，阶跃星辰跳过的那个 4，像一段刻意留白的沉默。两个月做一个小版本，五个月憋一个大版本，这个行业里慢下来的人往往只有两种结局：要么被遗忘，要么让所有人重新记住自己的名字。从数据看，Step 5 Preview 属于后者——MCP-Atlas 从 52.6 到 85.6 的国产登顶，Terminal-Bench 2.1 从 59.5 到 85.0 的贴身缠斗，AA-LCR 88.3 对 Claude Fable 5.1 的 80.0，BrowseComp 沿着 51.6、75.8、88.7 三级台阶逼近 GPT-6 Astra 的 91.5。九个共同 benchmark 全线上涨，没有一处虚火。

九月的牌桌格外拥挤，GPT-6 Astra 与 Claude Fable 5.1 同周落子，国产阵营里 Qwen、DeepSeek 轮番叫牌。Step 5 Preview 在 Code 和 General 两个分榜坐上国产第一，却在综合榜屈居 Qwen3.8-Max-0902 之后——这既是胜率制排序下"广参赛"的代价，也提醒它：宽覆盖的强者，还需要在每一处窄战场上都赢下来。

一鸣已经惊人，冲天还差最后一段：多模态的旧账、Terminal-Bench 4.0 上那 22 分的差距，都是翅膀上尚未长齐的羽。Preview 之名，正说明这只鸟自己也不敢说已经飞到了顶。等到正式版落地的那个月，才看得到它真正的高度。

---

- 综合榜单：https://suyoumo.github.io/llm-leaderboard/
