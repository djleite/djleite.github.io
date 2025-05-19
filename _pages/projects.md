---
layout: page
title: Research Projects
permalink: /projects/
---

<h4 style="margin-top: 2rem; margin-bottom: 1rem; text-align: center;">
  These are research projects that I have lead or collaborated.
</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 2rem;">
  {% for post in site.posts %}
    {% unless post.tags contains "unpost" %}
      <div style="display: flex; flex-direction: column; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <a href="{{ post.url | relative_url }}">
          {% if post.image %}
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" style="width: 100%; height: 180px; object-fit: cover;">
          {% endif %}
        </a>
        <div style="padding: 1rem; display: flex; flex-direction: column; flex-grow: 1;">
          <h3 style="margin-top: 0;">
            <a href="{{ post.url | relative_url }}" style="text-decoration: none; color: #333;">{{ post.title }}</a>
          </h3>
          <p style="font-size: 0.95rem; color: #555; flex-grow: 1;">{{ post.excerpt | strip_html | truncate: 140 }}</p>
          <div style="margin-top: auto;">
            <a href="{{ post.url | relative_url }}" style="font-weight: bold;">Read more →</a>
          </div>
        </div>
      </div>
    {% endunless %}
  {% endfor %}
</div>
