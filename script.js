// ============================================================
// DeepSeek homepage clone — minimal interactions
// The live site is a near-static landing page; we keep JS light.
// ============================================================
(function () {
  'use strict';

  // Subtle parallax on the hero background, matching the airy feel of the site.
  var hero = document.querySelector('.hero');
  if (hero && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('scroll', function () {
      var y = Math.min(window.scrollY * 0.15, 60);
      hero.style.backgroundPositionY = 'calc(50% + ' + y + 'px)';
    }, { passive: true });
  }
})();
