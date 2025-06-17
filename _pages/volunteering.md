---
layout: page
title: Volunteering
permalink: /volunteering/
---

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

<script>
const galleries = {}; // Stores arrays of image URLs per entry index
let currentEntryIndex = 0;
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  // Build gallery data from images
  document.querySelectorAll('.volunteer-scroll-wrapper').forEach((wrapper, i) => {
    const imgs = wrapper.querySelectorAll('img');
    galleries[i] = Array.from(imgs).map(img => img.src);
  });
});

function scrollGallery(index, direction) {
  const container = document.getElementById('gallery-' + index);
  container.scrollBy({ left: direction * 250, behavior: 'smooth' });
}

function openVolunteerModal(entryIndex, imgIndex) {
  currentEntryIndex = entryIndex;
  currentImageIndex = imgIndex;
  const imgSrc = galleries[entryIndex][imgIndex];

  document.getElementById('volunteer-modal-img').src = imgSrc;
  document.getElementById('volunteer-modal').style.display = 'flex';
}

function handleModalBackgroundClick(event) {
  if (event.target.id === 'volunteer-modal') {
    document.getElementById('volunteer-modal').style.display = 'none';
  }
}

function navigateModal(event, direction) {
  event.stopPropagation();

  const gallery = galleries[currentEntryIndex];
  currentImageIndex += direction;

  if (currentImageIndex < 0) currentImageIndex = 0;
  if (currentImageIndex >= gallery.length) currentImageIndex = gallery.length - 1;

  document.getElementById('volunteer-modal-img').src = gallery[currentImageIndex];
}
</script>
