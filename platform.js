// ============================================================
// DeepSeek Open Platform replica — static demo interactions only.
// ============================================================
(function () {
  'use strict';

  // mobile sidebar
  var side = document.getElementById('pfSide');
  var burger = document.getElementById('pfBurger');
  if (burger) burger.addEventListener('click', function () { side.classList.toggle('is-collapsed'); });

  // nav active state (in-page anchors)
  document.querySelectorAll('.pf-nav__item').forEach(function (item) {
    if (item.getAttribute('target')) return; // external links untouched
    item.addEventListener('click', function () {
      document.querySelectorAll('.pf-nav__item').forEach(function (i) { i.classList.remove('pf-nav__item--active'); });
      item.classList.add('pf-nav__item--active');
    });
  });

  // usage tabs
  document.querySelectorAll('.pf-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      tab.parentNode.querySelectorAll('.pf-tab').forEach(function (t) { t.classList.remove('pf-tab--active'); });
      tab.classList.add('pf-tab--active');
    });
  });

  // create key demo
  var createKey = document.getElementById('createKey');
  if (createKey) {
    createKey.addEventListener('click', function () {
      window.alert('这是 DeepSeek 开放平台的静态复刻演示页面，未接入真实账户系统，无法实际创建 API key。');
    });
  }
})();
