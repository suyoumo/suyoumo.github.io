---
layout: default
title: About
permalink: /index.html
---

<div class="container">
  <div class="hero">
    <h1>Hi, I'm 酥悠沫</h1>
    <p class="hero-subtitle">软件工程专业，专注于大模型领域的工程师。热爱探索新技术，喜欢折腾各种有趣的项目。</p>
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
