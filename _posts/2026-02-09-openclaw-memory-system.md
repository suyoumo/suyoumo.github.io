---
layout: post
title: "OpenClaw从发布到2月9日，它的最新记忆系统是怎么样的"
date: 2026-02-09 12:00:00 +0800
categories: 技术
---


OpenClaw 的 Agent 记忆系统采用\"Markdown 为真相源、SQLite为派生索引\"的双层存储架构。记忆以人类可读的 Markdown 文件持久化（MEMORY.md +memory/\*.md），SQLite 数据库承载 FTS5 全文索引和 sqlite-vec向量索引，支持随时从源文件重建。检索层实现了 BM25关键词搜索与向量语义搜索的混合融合（默认权重 0.7/0.3），向量化支持OpenAI、Gemini、Voyage、本地模型四种 Provider并具备自动选择与降级能力。系统通过三种机制保障记忆持久性：Agent主动写入、会话压缩前的 Memory Flush 自动刷写、以及 /new 命令触发的 SessionMemory Hook。整体架构分为存储层、向量化层、索引引擎层、搜索管理层和 Agent工具层五个层次，各层均内置降级链，确保任意组件失败时系统仍能优雅运行。

说说它的记忆系统为啥值得关注，在它之前，豆包或者claude code或者扣子空间，都是单个对话去解决，新对话就会把旧对话信息完全忘记。而从ClawBot，也就是现在的OpenClaw开始，持久化存储长期对话，生成个人的长期记忆文档，实现了一个你的个人信息管家的初级化阶段，这个领域未来肯定会有很大的发展，大部分普通用户还是会选择大厂做的易用的个人助手，可能和之前的区别就是会发现，豆包可以记住自己所有的信息了，但是豆包还是一个chat工具。那么以后最好用的应该还是一个不仅能记住个人信息，还能帮助完成电脑上的各种操作，并且能做得好做得对的一个聪明的助手。

我觉得个人开发者不适合重新做一个OpenClaw，最好在它的基础上打造出更好的用户体验，我仍然认为现在的各种云端部署不是一个好的方案，数据全交给了大厂，意味着隐私泄漏，还有数据监管，数据会理所当然的被拿去训练。

**Version1**

![](/assets/images/posts/post7/media/image1.png)

![](/assets/images/posts/post7/media/image2.png)

![](/assets/images/posts/post7/media/image3.png)

![](/assets/images/posts/post7/media/image4.png)

![](/assets/images/posts/post7/media/image5.png)

![](/assets/images/posts/post7/media/image6.png)

![](/assets/images/posts/post7/media/image7.png)

![](/assets/images/posts/post7/media/image8.png)

![](/assets/images/posts/post7/media/image9.png)

![](/assets/images/posts/post7/media/image10.png)

![](/assets/images/posts/post7/media/image11.png)

![](/assets/images/posts/post7/media/image12.png)

![](/assets/images/posts/post7/media/image13.png)

![](/assets/images/posts/post7/media/image14.png)

![](/assets/images/posts/post7/media/image15.png)

![](/assets/images/posts/post7/media/image16.png)

![](/assets/images/posts/post7/media/image17.png)

![](/assets/images/posts/post7/media/image18.png)

![](/assets/images/posts/post7/media/image19.png)

![](/assets/images/posts/post7/media/image20.png)

![](/assets/images/posts/post7/media/image21.png)

![](/assets/images/posts/post7/media/image22.png)

![](/assets/images/posts/post7/media/image23.png)

![](/assets/images/posts/post7/media/image24.png)

![](/assets/images/posts/post7/media/image25.png)

![](/assets/images/posts/post7/media/image26.png)

![](/assets/images/posts/post7/media/image27.png)

![](/assets/images/posts/post7/media/image28.png)

![](/assets/images/posts/post7/media/image29.png)

![](/assets/images/posts/post7/media/image30.png)

![](/assets/images/posts/post7/media/image31.png)

**Version2**

![](/assets/images/posts/post7/media/image32.png)

![](/assets/images/posts/post7/media/image33.png)

![](/assets/images/posts/post7/media/image34.png)

![](/assets/images/posts/post7/media/image35.png)

![](/assets/images/posts/post7/media/image36.png)

![](/assets/images/posts/post7/media/image37.png)

![](/assets/images/posts/post7/media/image38.png)

![](/assets/images/posts/post7/media/image39.png)

![](/assets/images/posts/post7/media/image40.png)

![](/assets/images/posts/post7/media/image41.png)

![](/assets/images/posts/post7/media/image42.png)
