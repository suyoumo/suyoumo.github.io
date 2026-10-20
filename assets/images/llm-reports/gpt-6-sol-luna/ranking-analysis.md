# Sonnet 5.5 / Opus 5.5 综合排名对局核查

数据状态：2026-10-20，导入 GPT-6 Sol / Luna 19 张比较图后。计算使用 `assets/js/llm-ranking-core.js` 和既有 `collections.overall`，未修改排序算法。

现行规则：至少 5 个模型有分数的 benchmark 才有效；模型至少覆盖 6 个有效项目才进入综合排名。两款模型只要有 1 个共同有效项目，就进行一场对局；逐项比较，胜项较多的一方获胜，胜项数量相同则打平。没有共同项目就跳过，不计入分母。每场胜 1 分、平 0.5 分、负 0 分，按（胜场 + 平场 / 2）/ 实际对手数排序。每项分数沿用既有最高分和 preferred 来源规则。

## 当前汇总

| 模型 | 排名 | 胜 | 平 | 负 | 对手数 | 得分率 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Claude Sonnet 5.5 | 1 | 108 | 0 | 2 | 110 | 98.181818% |
| Claude Opus 5.5 | 2 | 110 | 3 | 1 | 114 | 97.807018% |

Sonnet：108 / 110 = 98.181818%。Opus：(110 + 3 × 0.5) / 114 = 97.807018%。

## 所有未获胜对局

| 模型 | 对手 | 共同项目数 | 胜项 / 负项 / 平项 | 对局结果 |
| --- | --- | ---: | --- | --- |
| Claude Sonnet 5.5 | Claude Opus 5.5 | 14 | 4 / 10 / 0 | 负 |
| Claude Sonnet 5.5 | Claude Fable 5.1 | 14 | 6 / 8 / 0 | 负 |
| Claude Opus 5.5 | Claude Mythos 5 | 2 | 0 / 2 / 0 | 负 |
| Claude Opus 5.5 | Claude Mythos Preview | 2 | 1 / 1 / 0 | 平 |
| Claude Opus 5.5 | Atria Dawn | 2 | 1 / 1 / 0 | 平 |
| Claude Opus 5.5 | Atria Dawn Preview | 2 | 1 / 1 / 0 | 平 |

## Opus 额外参加、Sonnet 完全跳过的四场

以下四个对手与 Sonnet 均没有共同有效项目，因此 Sonnet 不计胜平负，也不计分母。

| 对手 | 项目 | Opus | 对手 |
| --- | --- | ---: | ---: |
| Claude Mythos 5 | HealthBench Professional (`healthbench_pro`) | 65.6 | 66 |
| Claude Mythos 5 | Graphwalks Bfs (1M) (`graphwalks_bfs_1m`) | 66.8 | 79.4 |
| Claude Mythos Preview | HealthBench Professional (`healthbench_pro`) | 65.6 | 64.7 |
| Claude Mythos Preview | Graphwalks Bfs (1M) (`graphwalks_bfs_1m`) | 66.8 | 74.3 |
| Atria Dawn | AutomationBench (`automation_bench`) | 42.5 | 54.7 |
| Atria Dawn | JobBench (`jobbench`) | 75.4 | 57.5 |
| Atria Dawn Preview | AutomationBench (`automation_bench`) | 42.5 | 53.8 |
| Atria Dawn Preview | JobBench (`jobbench`) | 75.4 | 50.3 |

这四场给 Opus 带来 1 负 3 平，只获得 1.5 / 4 的积分；它们把 Opus 的总得分率拉低。尤其是上一批新增的两款 Atria，Opus 在 AutomationBench 输、JobBench 赢，各打平一场；Sonnet 均跳过。

## 两者直接交手

14 个共同有效项目中，Opus 赢 10 项、Sonnet 赢 4 项，所以该场由 Opus 获胜。

| 项目 | Opus | Sonnet | 胜方 |
| --- | ---: | ---: | --- |
| SciCode (`scicode`) | 67 | 61 | Opus |
| Terminal-Bench 4.0 (`terminal_bench_4_0`) | 66.4 | 70.6 | Sonnet |
| Terminal-Bench 4.0 (AA) (`terminal_bench_4_0_aa`) | 60 | 64 | Sonnet |
| FrontierCode 1.1 Main (score) (`frontiercode_main`) | 54.4 | 46.2 | Opus |
| AA-Briefcase (Elo-score) (`aa_briefcase`) | 1822 | 1811 | Opus |
| AA-LCR (`aa_lcr`) | 85 | 83 | Opus |
| HLE w/ tools (`hle_tools`) | 67.7 | 64.5 | Opus |
| CritPT (`critpt`) | 32 | 31 | Opus |
| HLE (`hle`) | 61 | 55 | Opus |
| AA-Omniscience Accuracy (`aa_omniscience_accuracy`) | 66 | 54 | Opus |
| GDP.pdf (`gdp_pdf`) | 30.6 | 26 | Opus |
| AutomationBench-AA (`automation_bench_aa`) | 70 | 72 | Sonnet |
| GDPval-AA v2 (Elo) (`gdpval_aa_v2`) | 1846 | 1844 | Opus |
| AA-Briefcase v1.1 (Elo-500)/2000 (`aa_briefcase_pct`) | 65 | 66 | Sonnet |

Sonnet 的四个优势项为 Terminal-Bench 4.0、Terminal-Bench 4.0 (AA)、AutomationBench-AA、AA-Briefcase v1.1 百分比；其余十项由 Opus 获胜。

## 控制对手范围后的比较

排除双方彼此，只保留双方都实际交过手的 109 个其他对手：Opus 为 109 胜、0 平、0 负，得分率 100%；Sonnet 为 108 胜、0 平、1 负（输给 Fable 5.1），得分率 99.082569%。再考虑双方直接交手也是 Opus 胜，现有总榜的 Sonnet 更高不能解释为 Sonnet 在可比对局上占优。

排名反转来自缺失数据导致的对手集合不同，以及仅有两个共同项目就可决定整场胜负的稀疏对局。可考虑设置共同项目数量门槛、提高对局覆盖要求，或补全这几款模型在相同项目上的评测。该次数据导入保留现行算法与 collections，未以预期名次调整分数或排序。

## 此次 GPT 数据导入的影响

Opus 对新加入的 GPT-6 Sol：10 项胜、0 项负，获胜；Sonnet 对 GPT-6 Sol：6 项胜、1 项负、2 项平，获胜。两者各增加 1 场胜利，其余对局胜平负未改变。导入前 Sonnet 为 107 胜 0 平 2 负 / 109，Opus 为 109 胜 3 平 1 负 / 113；此次导入没有造成两者顺序反转。
