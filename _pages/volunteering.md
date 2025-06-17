---
layout: page
title: Volunteering
permalink: /volunteering/
---

<style>
/* === Layout Styles === */
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

/* === Scrollable Gallery === */
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
.volunteer-scroll-left {
  left: 0.2em;
}
.volunteer-scroll-right {
  right: 0.2em;
}

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
  flex-direction: row;
}
#volunteer-modal img {
  max-width: 90%;
  max-height: 80%;
  border-radius: 8px;
  z-index: 1001;
}
.volunteer-modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5em;
  color: white;
  background: rgba(0,0,0,0.3);
  border: none;
  cursor: pointer;
  z-index: 1002;
}
#modal-prev {
  left: 2%;
}
#modal-next {
  right: 2%;
}
</style>

<!-- === Volunteering Entries === -->
{% for entry in site.data.volunteering %}
  <div class="volunteer-entry">
    <div class="volunteer-title">{{ entry.date }} - {{ entry.site }}</div>
    <div class="volunteer-weather">{{ entry.weather }}</div>
    <div class="volunteer-text">{{ entry.text }}</div>

    <div class="volunteer-gallery-box">
      <button class="volunteer-scroll-button volunteer-scroll-left" onclick="scrollGallery({{ forloop.index0 }}, -1)">&lt;</button>
      <div class="volunteer-scroll-wrapper" id="gallery-{{ forloop.index0 }}">
        {% assign pics = entry.pictures | split: ", " %}
        {% for pic in pics %}
          <img 
            src="{{ pic | strip }}" 
            alt="Volunteer image" 
            data-gallery="{{ forloop.index0 }}" 
            data-img-index="{{ forloop.index0 }}-{{ forloop.index0 }}-{{ forloop.index0 }}-{{ forloop.index }}"
            onclick="openVolunteerModal({{ forloop.index0 }}, {{ forloop.index0 }}, '{{ pic | strip }}')"
          >
        {% endfor %}
      </div>
      <button class="volunteer-scroll-button volunteer-scroll-right" onclick="scrollGallery({{ forloop.index0 }}, 1)">&gt;</button>
    </div>
  </div>
{% endfor %}

<!-- === Modal Viewer === -->
<div id="volunteer-modal" onclick="closeVolunteerModal(event)">
  <button class="volunteer-modal-nav" id="modal-prev" onclick="navigateModal(event, -1)">&lt;</button>
  <img id="volunteer-modal-img" src="" alt="Enlarged volunteer image">
  <button class="volunteer-modal-nav" id="modal-next" onclick="navigateModal(event, 1)">&gt;</button>
</div>

<script>
let currentGalleryImages = [];
let currentImageIndex = 0;

function scrollGallery(index, direction) {
  const container = document.getElementById('gallery-' + index);
  container.scrollBy({ left: direction * 250, behavior: 'smooth' });
}

function openVolunteerModal(galleryIndex, entryIndex, src) {
  const gallerySelector = '#gallery-' + galleryIndex + ' img';
  const galleryImgs = document.querySelectorAll(gallerySelector);
  currentGalleryImages = Array.from(galleryImgs).map(img => img.src);
  currentImageIndex = currentGalleryImages.indexOf(src);

  const modal = document.getElementById('volunteer-modal');
  document.getElementById('volunteer-modal-img').src = src;
  modal.style.display = 'flex';
}

function closeVolunteerModal(event) {
  if (event.target.id === 'volunteer-modal') {
    document.getElementById('volunteer-modal').style.display = 'none';
  }
}

function navigateModal(event, direction) {
  event.stopPropagation();
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = 0;
  if (currentImageIndex >= currentGalleryImages.length) currentImageIndex = currentGalleryImages.length - 1;
  document.getElementById('volunteer-modal-img').src = currentGalleryImages[currentImageIndex];
}
</script>
