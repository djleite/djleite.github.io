---
layout: page
title: Volunteering
permalink: /volunteering/
---

<style>
.volunteer-entry {
  margin-bottom: 2em;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1.5em;
}

.volunteer-title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.3em;
}

.volunteer-weather {
  color: #666;
  font-style: italic;
  margin-bottom: 1em;
}

.volunteer-text {
  margin-bottom: 1em;
}

.volunteer-images {
  display: flex;
  overflow-x: auto;
  gap: 1em;
  padding-bottom: 0.5em;
}

.volunteer-images img {
  max-height: 200px;
  border-radius: 8px;
}
</style>

{% for entry in site.data.volunteering %}
  <div class="volunteer-entry">
    <div class="volunteer-title">{{ entry.date }} - {{ entry.site }}</div>
    <div class="volunteer-weather">{{ entry.weather }}</div>
    <div class="volunteer-text">{{ entry.text }}</div>
    <div class="volunteer-images">
      {% assign pics = entry.pictures | split: ", " %}
      {% for pic in pics %}
        <img src="{{ pic | strip }}" alt="Volunteer image from {{ entry.date }}">
      {% endfor %}
    </div>
  </div>
{% endfor %}
