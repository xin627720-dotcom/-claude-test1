// ============================================================
// DeepSeek chat UI replica — static demo interactions only.
// No backend / model; replies are canned placeholders.
// ============================================================
(function () {
  'use strict';
  var input = document.getElementById('input');
  var sendBtn = document.getElementById('sendBtn');
  var body = document.getElementById('chatBody');
  var welcome = document.getElementById('welcome');
  var sidebar = document.getElementById('sidebar');

  // auto-grow textarea
  function grow() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 200) + 'px';
    sendBtn.disabled = input.value.trim() === '';
  }
  input.addEventListener('input', grow);
  sendBtn.disabled = true;

  // toggle chips (深度思考 / 联网搜索)
  document.querySelectorAll('[data-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () { btn.classList.toggle('is-active'); });
  });

  // collapse / open sidebar
  var collapse = document.getElementById('collapseBtn');
  var open = document.getElementById('openSidebar');
  if (collapse) collapse.addEventListener('click', function () { sidebar.classList.toggle('is-collapsed'); });
  if (open) open.addEventListener('click', function () { sidebar.classList.remove('is-collapsed'); });

  // new chat → reset
  document.getElementById('newChat').addEventListener('click', function () {
    body.querySelectorAll('.msg').forEach(function (m) { m.remove(); });
    if (welcome) welcome.style.display = '';
  });

  function addMsg(role, text) {
    var wrap = document.createElement('div');
    wrap.className = 'msg msg--' + role;
    wrap.innerHTML =
      '<div class="msg__avatar">' + (role === 'user' ? '我' : 'D') + '</div>' +
      '<div class="msg__bubble"></div>';
    wrap.querySelector('.msg__bubble').textContent = text;
    body.appendChild(wrap);
    body.scrollTop = body.scrollHeight;
  }

  function send() {
    var text = input.value.trim();
    if (!text) return;
    if (welcome) welcome.style.display = 'none';
    addMsg('user', text);
    input.value = ''; grow();
    setTimeout(function () {
      addMsg('ai', '这是 DeepSeek 官网的静态复刻演示页面，并未接入真实大模型，因此无法生成真正的回答。若需要可用的对话能力，可接入 DeepSeek 或其他模型的 API。');
    }, 400);
  }

  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  });
})();
