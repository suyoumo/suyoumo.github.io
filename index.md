---
layout: default
title: About
permalink: /index.html
---

<div class="container">
  <div class="hero hero-bench-entry">
    <p class="hero-kicker">OpenClaw benchmark</p>
    <h1><a href="{{ site.baseurl }}/bench/">OpenClawProBench</a></h1>
    <p class="hero-subtitle">一个聚焦 OpenClaw agent 智力表现的 benchmark，关注模型在真实工具调用、规划、约束遵循、安全与稳定三次表现下的综合能力。</p>
    <p class="hero-subtitle">点击标题即可进入 bench 页面查看 leaderboard。这里仍保留我原本的 AI 博客内容与更新。</p>
    <div class="hero-actions">
      <a class="primary-link" href="{{ site.baseurl }}/bench/">进入 OpenClawProBench →</a>
    </div>
  </div>
</div>

<div class="container">
  <div class="posts-section">
    <h2 class="section-title">最新文章</h2>
    {% for post in site.posts limit:3 %}
    <div class="post-card">
      <h3 class="post-card-title"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
      <div class="post-card-meta">
        <span>{{ post.date | date: "%Y年%m月%d日" }}</span>
        {% if post.categories.size > 0 %}
        <span class="post-card-category">{{ post.categories | first }}</span>
        {% endif %}
      </div>
      <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
    </div>
    {% endfor %}
  </div>
</div>
