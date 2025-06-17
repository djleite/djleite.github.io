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
