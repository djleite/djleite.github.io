---
layout: page
title: Volunteering
permalink: /volunteering/
---

<!-- {% include leaf-background.html %} -->

<!-- === Volunteering Entries === -->
{% for entry in site.data.volunteering %}
  {% assign pics = entry.pictures | split: ", " %}
  <div class="volunteer-entry">
    <div class="volunteer-title">{{ entry.date }} - {{ entry.site }}</div>
    <div class="volunteer-weather">{{ entry.weather }}</div>
    <div class="volunteer-text">{{ entry.text }}</div>
    <div class="volunteer-gallery-box">
      <button class="volunteer-scroll-button volunteer-scroll-left" onclick="scrollGallery({{ forloop.index0 }}, -1)">&lt;</button>
      <div class="volunteer-scroll-wrapper" id="gallery-{{ forloop.index0 }}">
        {% for pic in pics %}
          <img 
            src="{{ pic | strip }}" 
            alt="Volunteer image" 
            data-entry="{{ forloop.parentloop.index0 }}" 
            data-index="{{ forloop.index0 }}" 
            onclick="openVolunteerModal({{ forloop.parentloop.index0 }}, {{ forloop.index0 }})">
        {% endfor %}
      </div>
      <button class="volunteer-scroll-button volunteer-scroll-right" onclick="scrollGallery({{ forloop.index0 }}, 1)">&gt;</button>
    </div>
  </div>
{% endfor %}

<!-- === Modal Viewer === -->
<div id="volunteer-modal" onclick="handleModalBackgroundClick(event)">
  <button class="volunteer-modal-nav" id="modal-prev" onclick="navigateModal(event, -1)">&lt;</button>
  <img id="volunteer-modal-img" src="" alt="Enlarged image">
  <button class="volunteer-modal-nav" id="modal-next" onclick="navigateModal(event, 1)">&gt;</button>
</div>

<script src="{{ '/assets/volunteering.js' | relative_url }}"></script>
