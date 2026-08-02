(function () {
  const config = window.INVENTORY_PAGE;
  if (!config) return;
  const grid = document.getElementById('inventoryGrid');
  const count = document.getElementById('inventoryCount');
  const items = config.items || [];

  function addText(parent, tag, className, value) {
    if (!value) return;
    const node = document.createElement(tag); node.className = className; node.textContent = value; parent.appendChild(node);
  }

  items.forEach(function (item) {
    const article = document.createElement('article'); article.className = 'card';
    const imageWrap = document.createElement('div'); imageWrap.className = 'card__img';
    const image = document.createElement('img'); image.src = 'assets/' + config.folder + '/' + item.img; image.alt = item.name; image.loading = 'lazy'; imageWrap.appendChild(image);
    if (item.tag || item.dims) addText(imageWrap, 'span', 'card__tag', item.tag || item.dims);
    if (item.size) addText(imageWrap, 'span', 'card__tag card__tag--new', 'Size ' + item.size);
    const body = document.createElement('div'); body.className = 'card__body';
    addText(body, 'h3', 'card__name', item.name);
    addText(body, 'p', 'card__desc', item.desc);
    const isUnavailable = item.sold === true;
    addText(body, 'p', isUnavailable ? 'card__status card__status--private' : 'card__status', isUnavailable ? 'Archive · Not available' : 'Available');
    const actions = document.createElement('div'); actions.className = 'card__actions';
    const request = document.createElement('a'); request.className = 'card__btn card__btn--primary';
    request.href = 'request-access.html?item=' + encodeURIComponent((isUnavailable ? 'Something similar to ' : '') + item.name + (item.size ? ' — size ' + item.size : ''));
    request.textContent = isUnavailable ? 'Request something similar' : 'Ask about this piece';
    actions.appendChild(request); body.appendChild(actions); article.appendChild(imageWrap); article.appendChild(body); grid.appendChild(article);
  });
  count.textContent = items.length + ' listed ' + (items.length === 1 ? 'piece' : 'pieces');
})();
