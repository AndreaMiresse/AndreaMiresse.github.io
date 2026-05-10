// Hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Chiudi cliccando fuori
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Chiudi cliccando un link
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Lightbox (solo in fotogallery.html)
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg   = lightbox.querySelector('.lightbox-img');
  const items   = Array.from(document.querySelectorAll('.gallery-item img'));
  let current   = 0;

  function openLightbox(index) {
    current = index;
    lbImg.src = items[current].src;
    lbImg.alt = items[current].alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function prevImg() {
    current = (current - 1 + items.length) % items.length;
    lbImg.src = items[current].src;
  }

  function nextImg() {
    current = (current + 1) % items.length;
    lbImg.src = items[current].src;
  }

  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-prev').addEventListener('click', prevImg);
  lightbox.querySelector('.lightbox-next').addEventListener('click', nextImg);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  prevImg();
    if (e.key === 'ArrowRight') nextImg();
  });
}
