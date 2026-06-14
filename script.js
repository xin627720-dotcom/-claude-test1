// ============================================================
// DeepSeek homepage clone — interactions
// ============================================================
(function () {
  'use strict';

  // Dismiss the announcement banner
  var announce = document.getElementById('announce');
  var announceClose = document.getElementById('announceClose');
  if (announceClose && announce) {
    announceClose.addEventListener('click', function () {
      announce.classList.add('is-hidden');
    });
  }

  // Mobile menu toggle
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // close after clicking a link
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Simple language toggle (中文 <-> English) for a handful of key strings
  var langToggle = document.getElementById('langToggle');
  var isEN = false;
  var dict = {
    '.hero__title': ['探索未至之境', 'Into the Unknown'],
    '.hero__subtitle': ['Into the Unknown', '探索未至之境'],
    '.hero__desc': [
      '以开源精神与长期主义，打造真正强大、普惠的通用人工智能。免费体验深度思考、推理与代码能力。',
      'Building powerful, open and universally accessible AGI. Experience deep reasoning and coding for free.'
    ]
  };
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      isEN = !isEN;
      Object.keys(dict).forEach(function (sel) {
        var el = document.querySelector(sel);
        if (el) el.textContent = dict[sel][isEN ? 1 : 0];
      });
      langToggle.textContent = isEN ? 'EN / 中' : '中 / EN';
      document.documentElement.lang = isEN ? 'en' : 'zh-CN';
    });
  }

  // Subtle header shadow on scroll
  var header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 8
        ? '0 4px 20px rgba(20, 24, 60, 0.06)'
        : 'none';
    }, { passive: true });
  }
})();
