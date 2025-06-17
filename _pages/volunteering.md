---
layout: page
title: Volunteering
permalink: /volunteering/
---

<style>
/* === Entry Styling === */
.volunteer-entry {
  margin-bottom: 2em;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2em;
}
.volunteer-title {
  font-size: 1.5em;
  font-weight: bold;
}
.volunteer-weather {
  color: #666;
  font-style: italic;
  margin-bottom: 1em;
}
.volunteer-text {
  margin-bottom: 1em;
}

/* === Gallery Styling === */
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
  cursor: pointer;
  transition: transform 0.2s;
}
.volunteer-scroll-wrapper img:hover {
  transform: scale(1.05);
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
.volunteer-scroll-left { left: 0.2em; }
.volunteer-scroll-right { right: 0.2em; }

/* === Modal === */
#volunteer-modal {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  justify-content: center;
  align-items: center;
}
#volunteer-modal img {
  max-width: 90%;
  max-height: 80%;
  border-radius: 8px;
}
.volunteer-modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5em;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  cursor: pointer;
  z-index: 1001;
}
#modal-prev { left: 2%; }
#modal-next { right: 2%; }
</style>

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
