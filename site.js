(function () {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__links');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
      document.body.classList.toggle('no-scroll', !open);
    });
    menu.addEventListener('click', function (event) {
      if (!event.target.closest('a')) return;
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    });
  }

  document.querySelectorAll('[data-current-year]').forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });

  const params = new URLSearchParams(window.location.search);
  const requestedItem = params.get('item');
  const itemField = document.querySelector('[name="item"]');
  if (requestedItem && itemField && !itemField.value) itemField.value = requestedItem;

  document.querySelectorAll('[data-lightbox-src]').forEach(function (button) {
    button.addEventListener('click', function () {
      const lightbox = document.querySelector('.lightbox');
      if (!lightbox) return;
      lightbox.querySelector('img').src = button.dataset.lightboxSrc;
      lightbox.querySelector('img').alt = button.dataset.lightboxAlt || '';
      lightbox.querySelector('.lightbox__caption').textContent = button.dataset.lightboxAlt || '';
      lightbox.classList.add('is-open');
      document.body.classList.add('no-scroll');
      lightbox.querySelector('.lightbox__close').focus();
    });
  });

  document.querySelectorAll('.lightbox').forEach(function (lightbox) {
    function close() {
      lightbox.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
    lightbox.querySelector('.lightbox__close').addEventListener('click', close);
    lightbox.addEventListener('click', function (event) { if (event.target === lightbox) close(); });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape') close(); });
  });
})();
