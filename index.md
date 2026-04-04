---
layout: default
title: 文章
permalink: /index.html
---

<div class="container">
  <div class="hero">
    <h1>文章</h1>
    <p class="hero-subtitle">记录技术探索与思考，也持续更新 OpenClaw、agent benchmark 与大模型评估相关内容。</p>
  </div>

  <div class="posts-section">
    {% for post in paginator.posts %}
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

  {% if paginator.total_pages > 1 %}
  <div class="pagination">
    {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl }}" class="pagination-link">&laquo; 上一页</a>
    {% else %}
    <span class="pagination-link disabled">&laquo; 上一页</span>
    {% endif %}

    <span class="pagination-info">{{ paginator.page }} / {{ paginator.total_pages }}</span>

    {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | prepend: site.baseurl }}" class="pagination-link">下一页 &raquo;</a>
    {% else %}
    <span class="pagination-link disabled">下一页 &raquo;</span>
    {% endif %}
  </div>
  {% endif %}
</div>
