---
layout: default
title: 文章
permalink: /index.html
---

<div class="container">
  <div class="hero hero-bench-entry">
    <p class="hero-kicker">OpenClaw benchmark</p>
    <h1><a href="{{ site.baseurl }}/bench/">OpenClawBench</a></h1>
    <p class="hero-subtitle">一个聚焦 OpenClaw agent 智力表现的 benchmark，关注模型在真实工具调用、规划、约束遵循、安全与稳定多维信号下的综合能力。</p>
    <p class="hero-subtitle">点击标题即可进入 benchmark 页面查看 architecture、dataset、scoring 与 leaderboard。这里继续保留我的文章内容与更新。</p>
    <div class="hero-actions">
      <a class="primary-link" href="{{ site.baseurl }}/bench/">进入 OpenClawBench →</a>
    </div>
  </div>
</div>

<div class="container">
  <div class="posts-section">
    <h2 class="section-title">文章</h2>
    {% for post in site.posts %}
    <div class="post-card">
      <h3 class="post-card-title"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
      <div class="post-card-meta">
        <span>{{ post.date | date: "%Y年%m月%d日" }}</span>
        {% if post.categories.size > 0 %}
        <span class="post-card-category">{{ post.categories | first }}</span>
        {% endif %}
      </div>
      <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
    </div>
    {% endfor %}
  </div>
</div>
