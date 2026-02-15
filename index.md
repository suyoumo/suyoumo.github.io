---
layout: default
title: About
permalink: /index.html
---

<div class="container">
  <div class="hero">
    <h1>Hi, I'm 酥悠沫</h1>
    <p class="hero-subtitle">曾是2个，B开头的大厂程序员，本硕计算机，专注于大模型评估领域。热爱探索新技术，喜欢折腾各种有趣的项目。很高兴大家认识我。</p>
    <p class="hero-subtitle">像最近出的openclaw还有anthropic出的cowork我也觉得比较有意思，有空会弄一下相关的小项目。</p>
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
