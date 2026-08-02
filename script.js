(function () {
  const grid = document.getElementById('stickerGrid');
  if (!grid || typeof PRODUCTS === 'undefined') return;

  const structuredByImage = new Map(PRODUCTS.map(function (product) { return [product.img, product]; }));
  const references = (typeof STICKER_REFERENCES === 'undefined' ? PRODUCTS.map(function (p) { return p.img; }) : STICKER_REFERENCES).map(function (filename) {
    if (structuredByImage.has(filename)) return structuredByImage.get(filename);
    const raw = filename.replace(/\.[a-z0-9]+$/i, '').replace(/[-_]+/g, ' ');
    const title = raw.replace(/\b\w/g, function (letter) { return letter.toUpperCase(); });
    const seasonMatch = filename.match(/(?:^|[-_])(ss|fw)(\d{2})(?:[-_.]|$)/i);
    const yearMatch = filename.match(/(?:19|20)\d{2}/);
    const year = seasonMatch ? Number('20' + seasonMatch[2]) : (yearMatch ? Number(yearMatch[0]) : null);
    const season = seasonMatch ? seasonMatch[1].toUpperCase() + seasonMatch[2] : (year ? String(year) : 'Reference');
    const cat = /box[-_ ]?logo|bogo/i.test(filename) ? 'Box Logo' : (/rare|kermit|louis[-_ ]vuitton|burberry/i.test(filename) ? 'Rare' : 'Other');
    return { name: title, img: filename, price: null, season: season, year: year, cat: cat, featured: false, isNew: false };
  });
  const state = { year: 'all', cat: 'all', query: '', visible: 60 };
  const count = document.getElementById('vaultCount');
  const search = document.getElementById('stickerSearch');
  const loadMore = document.getElementById('loadMore');
  const empty = document.getElementById('emptyState');

  function createCard(product) {
    const article = document.createElement('article');
    article.className = 'card';
    const imageWrap = document.createElement('div');
    imageWrap.className = 'card__img';
    if (product.img) {
      const image = document.createElement('img');
      image.src = 'assets/stickers/' + product.img;
      image.alt = product.name;
      image.loading = 'lazy';
      imageWrap.appendChild(image);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'card__placeholder';
      placeholder.textContent = 'Reference image coming soon';
      imageWrap.appendChild(placeholder);
    }
    if (product.season) {
      const tag = document.createElement('span');
      tag.className = 'card__tag';
      tag.textContent = product.season;
      imageWrap.appendChild(tag);
    }
    const body = document.createElement('div');
    body.className = 'card__body';
    const title = document.createElement('h3');
    title.className = 'card__name';
    title.textContent = product.name;
    const status = document.createElement('p');
    status.className = 'card__status';
    status.textContent = 'Reference · Availability unconfirmed';
    const actions = document.createElement('div');
    actions.className = 'card__actions';
    const request = document.createElement('a');
    request.className = 'card__btn card__btn--primary';
    request.href = 'request-access.html?item=' + encodeURIComponent(product.name);
    request.textContent = 'Request this sticker';
    actions.appendChild(request);
    body.appendChild(title); body.appendChild(status); body.appendChild(actions);
    article.appendChild(imageWrap); article.appendChild(body);
    return article;
  }

  function filteredProducts() {
    const query = state.query.toLowerCase().trim();
    return references.filter(function (product) {
      const yearMatch = state.year === 'all' || String(product.year) === state.year;
      const catMatch = state.cat === 'all' || product.cat === state.cat;
      const haystack = [product.name, product.season, product.year, product.cat].join(' ').toLowerCase();
      return yearMatch && catMatch && (!query || haystack.indexOf(query) !== -1);
    });
  }

  function render() {
    const matches = filteredProducts();
    const visible = matches.slice(0, state.visible);
    grid.replaceChildren.apply(grid, visible.map(createCard));
    count.textContent = matches.length + ' references';
    empty.style.display = matches.length ? 'none' : 'block';
    loadMore.style.display = matches.length > state.visible ? 'inline-flex' : 'none';
  }

  function buildBar(id, values, key) {
    const bar = document.getElementById(id);
    const all = document.createElement('button');
    all.type = 'button'; all.className = 'filter__btn is-active'; all.dataset.val = 'all'; all.textContent = 'All';
    bar.appendChild(all);
    values.forEach(function (value) {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'filter__btn'; button.dataset.val = value; button.textContent = value;
      bar.appendChild(button);
    });
    bar.addEventListener('click', function (event) {
      const button = event.target.closest('.filter__btn');
      if (!button) return;
      bar.querySelectorAll('.filter__btn').forEach(function (item) { item.classList.remove('is-active'); });
      button.classList.add('is-active'); state[key] = button.dataset.val; state.visible = 60; render();
    });
  }

  const years = Array.from(new Set(references.map(function (p) { return p.year ? String(p.year) : null; }).filter(Boolean))).sort(function (a, b) { return Number(b) - Number(a); });
  const cats = Array.from(new Set(references.map(function (p) { return p.cat; }))).sort();
  buildBar('yearBar', years, 'year'); buildBar('catBar', cats, 'cat');
  search.addEventListener('input', function () { state.query = search.value; state.visible = 60; render(); });
  loadMore.addEventListener('click', function () { state.visible += 60; render(); });
  render();
})();
