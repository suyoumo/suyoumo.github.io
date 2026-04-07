---
layout: bench_post
title: "My Feelings During the Development of OpenClawProBench"
date: 2026-04-02 12:00:00 +0800
categories: Development
permalink: /bench/blog/2026-04-02-why-pass3-matters/
display_title: "My Feelings During the Development of OpenClawProBench"
---

<div class="bench-lang-switch" data-default-lang="en">
  <button type="button" class="bench-lang-btn is-active" data-lang="en">English</button>
  <button type="button" class="bench-lang-btn" data-lang="zh">中文</button>
</div>

<div class="bench-lang-panel is-active" data-lang-panel="en">
  <h3>Why I Built This Benchmark</h3>

  <p>I built this benchmark for many reasons, and some of them come from what I have seen in the industry. GeekBay once reported that phone makers send specially tuned devices to the media, while ordinary consumers get products whose performance is worse than those tuned review units. Something similar happens in the LLM benchmark world. Under pressure to show results, many vendors, especially domestic ones, do special optimization for specific benchmarks. To put it plainly, they game the benchmark.</p>

  <p>I am not personally angry about this, and I do not see it as some unforgivable evil. But I am someone who cares about large models, and I care about OpenClaw. So I am very interested in one question: if these models have not had time to optimize for a benchmark yet, what happens if I simply buy access to their public APIs and evaluate them myself? At the very least, the results I get should reflect models that have not been benchmark-tuned. My hope is that, in the area this benchmark focuses on, we can see the real capabilities of different models.</p>

  <p>I have worked on evaluation before at both a top-10 and a top-3 major Chinese company, and I am still working on algorithm evaluation now. This benchmark is also open source, and everyone is welcome to inspect its scientific validity. It is not a perfect benchmark, but under the constraint of not injecting extra context, I want Claude Code + Opus 4.6 or Codex + GPT-5.4 to be able to inspect the dataset and evaluation code themselves. For the core goal I care about, distinguishing the intelligence of different models under the OpenClaw agent setup, my benchmark currently ranks first in both Claude Code's and Codex's results. Reproduction is welcome. If that stops being true, I will keep iterating on the benchmark until it leads again.</p>

  <h3>What Makes This Benchmark Special</h3>

  <p>I am especially interested in harness engineering, and I am also very interested in self-iteration. In my “last day at ByteDance” post, I said I would explore both evaluation and self-iteration. So before building this benchmark, I first designed a self-iteration skill. I drew inspiration from Anthropic's blog, what seems to be an OpenAI blog post released in February, and a research self-iteration project by a well-known creator whose name starts with “K.” When I built my skill, Anthropic's newest blog post had not been published yet, so my self-verification still relied on the skill describing how to validate itself, rather than spinning up another agent to independently verify the result.</p>

  <p>That is a long preface, but here is the key point: after the self-iteration skill was ready, I gave it an initial goal, design a benchmark that can distinguish the intelligence of different models under the OpenClaw agent setting. It also had to be end to end. It could not be a dead, purely simulated fake environment. It needed to support 3-try evaluation, resuming, and retries. Many of the practical designs and recommendations came from my self-iteration skill, and then I selected the ones I wanted. So this was not built in a vague, vibe-driven way. It was allowed to take a bit longer to implement, as long as it kept moving closer to my real target: a benchmark that can distinguish the intelligence of different models under OpenClaw.</p>

  <h3>Impressions From Running Different Models</h3>

  <p>The first thing I noticed was that some models were simply very slow. Spark was extremely slow. One Spark 2 run took three to four days. It was not wildly unstable, just very slow, and I was using Spark's second-tier coding plan. LongCat, Meituan's model, was also very slow, though I used its free quota, so that is understandable. Ling from Bailing was also very slow. It is at the 1T-parameter scale, and because there is no coding plan for it, it also felt expensive. I spent about RMB 220 just to evaluate one model. By comparison, models run through OpenRouter, as well as GLM on Zhipu's coding plan, generally felt pretty fast.</p>

  <p>Then there is model performance. When I first started running the benchmark and only had the first few models, GLM 5.1 was in first place. Later I found that Doubao and DeepSeek also scored very high. That is normal. You could say these are the current domestic big three. The models that surprised me were Xiaomi's, Meituan's, and Kuaishou's. I had previously felt that these three had not invested that heavily in large models, especially Kuaishou, because I assumed most of its resources were going into Kling. But this is not actually a coding benchmark. It is an end-to-end benchmark for the OpenClaw agent. So seeing those models achieve these scores made me feel they are improving quite quickly.</p>

  <p>Tencent's Hunyuan, on the other hand, still felt a bit weaker. Hunyuan started earlier than Meituan, Kuaishou, and Xiaomi, but from the ranking it is still behind them. ERNIE also ended up further back than I expected. I originally wanted to evaluate ERNIE 5.0, and even without a coding plan I was willing to spend RMB 300 to 400 on it. But I kept hitting 429 errors, so in the end I evaluated the April 2026 version of ERNIE 4.5 Turbo through Baidu Qianfan's coding plan. It was not slow, but the performance was still toward the back. There may indeed be many issues there. I pointed some of them out myself when I left Baidu.</p>

  <h3>Impressions of Different Coding Plans</h3>

  <p>Bailian's coding plan feels like it offers a decent amount of quota, but it is too hard to grab. On top of that, the throughput on some Qwen models is too slow. Their token generation speed does not feel like big-tech quality, though Qwen 3.5 Plus is reasonably fast.</p>

  <p>Baidu's coding plan is also surprising. Baidu was the first company in China to launch a large model in 2023, and even by the middle of 2024 it still had a lead over many others. But now, in its own coding plan, its strongest model is not even included. That was not something I expected. Maybe the parameter count went up, but performance did not improve enough, while cost also increased, so they chose not to expose it through the coding plan.</p>

  <p>ByteDance's coding plan is generally fine. The downside is that the quota is too small. A lot of people online complain that they use it up immediately. I bought a RMB 200 coding plan, and my feeling is that it is enough to evaluate about five models. The quota really is small. In practice, it feels similar to Baidu's RMB 40 coding plan in total usable volume.</p>

  <p>I do not really have much to complain about with Zhipu's coding plan overall, because I bought it quite a long time ago. I am using the Pro plan rather than Max. The downsides are that it only supports Zhipu's own models, and they still have not enabled GLM-5V access for me.</p>

  <p>My impression of iFlytek's coding plan is that it is somewhat slow and not very stable. Of course, it is also possible that not many people buy iFlytek's coding plan, and even fewer use it to run iFlytek's own models. That may be why one of my runs of an iFlytek model still could not finish after three to four days.</p>

  <p>I do not really have anything bad to say about Kuaishou's coding plan. Nothing stood out in a negative way. Its model is stronger than I expected. The downside is that its console is hard to find. You can search Baidu for quite a while and still not find it, which is a good way to turn away potential paying users before they even get in.</p>

  <p>Finally, Kimi's coding plan does not feel very good. The main issue is that model switching is inconvenient. There is basically only one option, KimiForCoding. The available quota is also quite small. I used up my weekly allowance just by testing one model, and that was on the RMB 99 plan.</p>

  <h3>Performance of Different Coding Plans</h3>

  <p>For DeepSeek V3.2, I ran it through Baidu Qianfan, ByteDance Volcano Engine, and SiliconFlow. SiliconFlow was noticeably slower because I was not using the Pro version. The ByteDance and Baidu runs could finish in about one day, while SiliconFlow needed two to three days. That said, I was using promotional credits that had been given to users before, so if it is slower, it is slower. From the scores, at least it did not look degraded.</p>

  <p>Among those runs, ByteDance's score was second and Baidu's was third. You can check the leaderboard for the exact numbers.</p>
</div>

<div class="bench-lang-panel" data-lang-panel="zh">
  <h3>我为什么做这个 benchmark</h3>

  <p>我做这个 bench，是因为很多原因，我知道一些业界存在的现状。就像极客湾报导的手机厂商大家给媒体送特调机器，给普通消费者去弄性能不如特调机的机器。而在大模型 benchmark 这块，很多厂商迫于业绩压力，尤其是国内厂商，会针对 bench 去做特殊优化，说白了就是针对 bench 刷分。</p>

  <p>我对于这个现象没有不爽，没有深恶痛绝，但我是一个对大模型感兴趣的人，也是一个对 OpenClaw 感兴趣的人。所以我会很想知道，如果这些模型还没有来得及刷分，我自己去买它们开放 API 来评测，测出来的结果会是什么样。至少，这些结果应该是在它们还没有专门为某个 benchmark 调优之前的表现。我希望在我这个 bench 关注的领域里，可以看到各个模型的真正实力。</p>

  <p>我本来就在国内前 10 和前 3 的大厂干过评测，现在也继续在做算法评测。这个 bench 也是开源的，欢迎大家来检验它的科学性。它当然不可能是一个完美的 bench，但在“不注入额外上下文”的前提下，我希望 Claude Code + Opus 4.6 或者 Codex + GPT-5.4 能自己去检查各个 benchmark 的数据集和评估代码。对于我最关心的核心目标，也就是区分不同模型在 OpenClaw 这个 agent 下的智力，我的 bench 在 Claude Code 和 Codex 的结果里目前都是第一。欢迎大家复现。如果未来不是了，我会继续迭代，直到它重新领先。</p>

  <h3>这个 benchmark 特别的地方</h3>

  <p>我对 harness 工程比较感兴趣，也对自迭代比较感兴趣。我在字节离职的 last day 帖子里就说过，我会在评测和自迭代上做出自己的探索。所以在做这个 benchmark 之前，我先设计了一个自迭代 skill。参考来源包括 Anthropic 的博客、OpenAI 似乎在 2 月发布的一篇博客，以及某位名字以 K 开头的大佬做的 research 自迭代项目。等我做这个 skill 的时候，Anthropic 最新那篇博客其实还没发，所以我当时的自我验证还是 skill 自己描述如何验证自己，而不是再起一个 agent 去独立验证结果。</p>

  <p>说了这么多铺垫，关键点其实是：自迭代 skill 好了之后，我给它设定了一个初始目标，设计出一个能区分不同模型在 OpenClaw 这个 agent 下智力差异的 benchmark。它还必须是端到端的，不能是死的、纯模拟的假环境；必须支持 3 try 评估，支持续跑，也支持重试。很多实践上的设计和建议，都是我的自迭代 skill 给我提出的方案，然后再由我自己挑选。所以这个 bench 不是那种很虚的 vibe-driven 产物，它可以实现得慢一点，但要不断逼近我的真实目标：设计一个能区分不同模型在 OpenClaw 这个 agent 下智力的 benchmark。</p>

  <h3>跑不同模型时的感受</h3>

  <p>首先就是有些模型确实跑得很慢。星火就很慢，一个 Spark 2 的模型跑了 3 到 4 天。它也不是特别不稳定，就是单纯慢，我用的还是星火第二挡的 coding plan。然后是 LongCat，也就是美团的模型，也很慢，不过我是用它的免费额度跑的，所以可以理解。百灵的 Ling 模型也很慢，它是 1T 参数规模，而且因为没有 coding plan，给我的感觉还挺贵，评一个模型大概花了 220 元左右。相比之下，OpenRouter 下的模型，以及智谱 coding plan 下的 GLM，整体就都跑得挺快的。</p>

  <p>然后是模型性能。刚开始跑的时候，前几个模型里智谱的 GLM 5.1 拿到了第一。后来发现豆包和 DeepSeek 的分数也都很高，这很正常，可以说这就是现在国内的御三家。真正让我有些意外的是小米、美团和快手的模型。我之前一直觉得这三家对大模型投入不算特别大，尤其是快手，因为我以为它的主要资源应该在可灵那里。但这其实不是一个代码 benchmark，而是 OpenClaw 这个 agent 的端到端 benchmark。所以这几个模型能拿到这样的分数，让我觉得它们进步还是挺快的。</p>

  <p>相比之下，腾讯的混元给我的感受还是差一点。混元起步要比美团、快手、小米更早，但从排名看现在反而还不如它们。然后文心也比我预想中更靠后。我原本想评估文心 5.0，就算没有 coding plan，我也愿意花 300 到 400 元把它评掉。但我一直遇到 429，所以最后改成用百度千帆的 coding plan 去评估 2026 年 4 月版本的 ERNIE 4.5 Turbo。它速度不慢，但性能还是偏后，可能确实存在不少问题。我之前从百度离职的时候，也指出过其中一些。</p>

  <h3>各家 coding plan 的感受</h3>

  <p>百炼的 coding plan 给我的感觉是量不算低，但是太难抢了。另外 Qwen 某些模型的吞吐也比较慢，吐 token 的速度不像大厂应有的水平。当然，Qwen 3.5 Plus 的速度还可以。</p>

  <p>百度的 coding plan 也让我挺意外。百度是 2023 年中国第一家推出大模型的公司，到了 2024 年中还对很多家保持领先。但现在它自家的 coding plan 里，最强模型居然都不放进去，这点我是没想到的。可能是参数量虽然上去了，但性能没明显拉开，成本又上去了，所以没有开放在 coding plan 里。</p>

  <p>字节的 coding plan 整体还可以，缺点就是量太少。网上很多人都吐槽一下就用完了。我充了一个 200 元的 coding plan，我自己的感觉是大概只够评 5 个模型，量确实不多。整体上，跟百度 40 元的 coding plan 在可用总量上给我的感觉差不多。</p>

  <p>智谱的 coding plan 我整体没什么吐槽的，因为我很早就买了，用的是 Pro 而不是 Max。缺点就是只能跑智谱自己的模型，而且他们到现在还没给我开 GLM-5V 的权限。</p>

  <p>讯飞的 coding plan 给我的感觉就是有点慢，而且不太稳定。当然也有一种可能，就是买讯飞 coding plan 的人本来就不多，用讯飞 coding plan 去跑讯飞自己模型的人更少，所以我跑它家模型的时候，三四天都还跑不完。</p>

  <p>快手的 coding plan 我其实没什么可黑的，没有特别负面的点。它的模型比我预想中更强。缺点是它这个控制台有点难找，百度搜半天都搜不到，基本上能把不少潜在付费用户直接挡在门外。</p>

  <p>最后是 Kimi 的 coding plan，我的感觉是不太行。最大的问题是模型切换不方便，基本上只有一个 KimiForCoding。然后用量也比较少，我测一个模型就把一周额度用完了，而且我买的还是 99 元那个版本。</p>

  <h3>各家 coding plan 的性能</h3>

  <p>其中 DeepSeek V3.2 我是在百度千帆、字节火山和硅基流动都跑了一遍。硅基流动因为我跑的不是 Pro 版本，所以明显更慢。字节和百度基本上一天能跑完，硅基流动则需要两到三天。不过我是用之前用户推广送的券去跑的，所以慢一点也就慢一点。从分数来看，至少没有缩水。</p>

  <p>这几家里，字节的分数排第二，百度排第三。具体分数可以直接看排行榜。</p>
</div>
