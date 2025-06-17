---
layout: page
title: Volunteering
permalink: /volunteering/
---

<style>
/* === Basic Styling === */
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

/* === Scrollable Image Box === */
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

/* === Modal Viewer === */
#volunteer-modal {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#volunteer-modal img {
  max-width: 90%;
  max-height: 80%;
  border-radius: 8px;
}

#volunteer-modal button {
  margin-top: 1em;
  font-size: 2em;
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 0.3em 0.6em;
  cursor: pointer;
}
</style>

<!-- === Volunteering Entries === -->
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
          <img src="{{ pic | strip }}" alt="Volunteer image from {{ entry.date }}" onclick="openVolunteerModal(this.src)">
        {% endfor %}
      </div>
      <button class="volunteer-scroll-button volunteer-scroll-right" onclick="scrollGallery('{{ forloop.index0 }}', 1)">&gt;</button>
    </div>
  </div>
{% endfor %}

<!-- === Modal Container === -->
<div id="volunteer-modal" onclick="closeVolunteerModal()">
  <img id="volunteer-modal-img" src="" alt="Enlarged volunteer image">
  <button onclick="closeVolunteerModal(); event.stopPropagation();">-</button>
</div>

<!-- === Scripts === -->
<script>
function scrollGallery(index, direction) {
  const container = document.getElementById('gallery-' + index);
  const scrollAmount = 250;
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function openVolunteerModal(src) {
  const modal = document.getElementById('volunteer-modal');
  const modalImg = document.getElementById('volunteer-modal-img');
  modalImg.src = src;
  modal.style.display = 'flex';
}

function closeVolunteerModal() {
  document.getElementById('volunteer-modal').style.display = 'none';
}
</script>
