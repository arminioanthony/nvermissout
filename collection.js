(function () {
  // Curated Sept 2026: the strongest set-up shots, each with its own framing.
  const selectedSetups = {
    'axe-wall.jpg': 'room',
    'fypm-framed.jpg': 'artwork',
    'chinatown-raid-collage.jpg': 'artwork',
    'sticker-wall-overhead.jpg': 'collection'
  };
  const items = SETUPS.filter(function (item) {
    return Object.prototype.hasOwnProperty.call(selectedSetups, item.img);
  }).map(function (item) {
    return { src: 'assets/setups/' + item.img, caption: item.caption, kind: selectedSetups[item.img] };
  }).concat(PICTURES.map(function (item) {
    return { src: 'assets/pictures/' + item.img, caption: item.caption, kind: item.kind || 'collection' };
  }));

  const presentations = {
    artwork: { status: 'Original artwork · Created by Never Miss Out', action: 'Commission an Original Piece →', request: 'Custom artwork inspired by: ' },
    process: { status: 'Creative process · Built by Never Miss Out', action: 'Start a Commission →', request: 'Commission a custom collector display inspired by: ' },
    room: { status: 'Collector display · Curated by Never Miss Out', action: 'Plan My Collector Space →', request: 'Collector room design inspired by: ' },
    collection: { status: 'Private collection · Reference', action: 'Request Access →', request: 'Help me find something inspired by: ' }
  };

  const gallery = document.getElementById('collectionGallery');
  gallery.innerHTML = items.map(function (item) {
    const presentation = presentations[item.kind] || presentations.collection;
    const request = 'request-access.html?item=' + encodeURIComponent(presentation.request + item.caption);
    return '<article class="gallery__item">' +
      '<button class="gallery__button" type="button" data-lightbox-src="' + item.src + '" data-lightbox-alt="' + item.caption.replace(/"/g, '&quot;') + '">' +
      '<img src="' + item.src + '" alt="' + item.caption.replace(/"/g, '&quot;') + '" loading="lazy"></button>' +
      '<div class="gallery__body"><span class="gallery__status">' + presentation.status + '</span>' +
      '<p class="gallery__caption">' + item.caption + '</p><a class="gallery__link" href="' + request + '">' + presentation.action + '</a></div></article>';
  }).join('');
  document.getElementById('collectionCount').textContent = items.length + ' selected views';
})();
