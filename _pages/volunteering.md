---
layout: page
title: Volunteering
permalink: /volunteering/
---

<style>
.volunteer-entry {
  margin-bottom: 2em;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2em;
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

.volunteer-gallery-box {
  position: relative;
}

.volunteer-scroll-wrapper {
  overflow-x: auto;
  display: flex;
  gap: 1em;
  scroll-behavior: smooth;
  padding: 0.5em 2em;
}

.volunteer-scroll-wrapper img {
  max-height: 200px;
  border-radius: 8px;
}

.volunteer-scroll-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-weight: bold;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 1;
}

.volunteer-scroll-left {
  left: 0.2em;
}

.volunteer-scroll-right {
  right: 0.2em;
}
</style>

{% for entry in site.data.volunteering %}
  <div class="volunteer-entry">
    <div class="volunteer-title">{{ entry.date }} - {{ entry.site }}</div>
    <div class="volunteer-weather">{{ entry.weather }}</div>
    <div class="volunteer-text">{{ entry.text }}</div>

    <div class="volunteer-gallery-box">
      <button class="volunteer-scroll-button volunteer-scroll-left" onclick="scrollGallery('{{ forloop.index0 }}', -1)">&lt;</button>
      <div class="volunteer-scroll-wrapper" id="gallery-{{ forloop.index0 }}">
        {% assign pics = entry.pictures | split: ", " %}
        {% for pic in pics %}
          <img src="{{ pic | strip }}" alt="Volunteer image from {{ entry.date }}">
        {% endfor %}
      </div>
      <button class="volunteer-scroll-button volunteer-scroll-right" onclick="scrollGallery('{{ forloop.index0 }}', 1)">&gt;</button>
    </div>
  </div>
{% endfor %}

<script>
function scrollGallery(index, direction) {
  const container = document.getElementById('gallery-' + index);
  const scrollAmount = 250; // px per click
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
</script>
