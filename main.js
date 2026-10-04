/* Renderiza las páginas a partir de js/config.js. Normalmente no necesitas editar este archivo. */
(() => {
  const S = window.SITE, G = {}, pg = document.body.dataset.page;

  // Una foto. Si el archivo no existe aún, muestra un marcador con su nombre.
  const capt = p => [p.title, p.location, p.date].filter(Boolean).join(', ') + (p.caption ? (p.title || p.location || p.date ? '. ' : '') + p.caption : '');
  const fig = (p, g, i, eager) => `<figure class="${p.layout}"><button class="open" data-g="${g}" data-i="${i}" aria-label="View larger: ${p.title || 'photograph'}"><img src="images/${p.file}" alt="${p.alt}" width="${p.w}" height="${p.h}" ${eager ? '' : 'loading="lazy"'} onerror="this.outerHTML='<span class=missing style=aspect-ratio:${p.w}/${p.h}>${p.file}</span>'"></button>${capt(p) ? `<figcaption>${capt(p)}</figcaption>` : ''}</figure>`;
  const gal = (list, g) => (G[g] = list, `<div class="gal">${list.map((p, i) => fig(p, g, i)).join('')}</div>`);

  const NAV = [['WORK', 'work'], ['STORIES', 'stories'], ['EDITORIAL', 'editorial'], ['ABOUT', 'about'], ['CONTACT', 'contact']];
  const head = `<a class="skip" href="#main">Skip to content</a><header><a class="brand" href="index.html" aria-label="${S.NAME} — home" title="${S.NAME}">${S.MONOGRAM || 'TM'}</a><nav aria-label="Main">${NAV.filter(([t, p]) => p !== 'stories' || S.STORIES.length).map(([t, p]) => `<a href="${p}.html"${p === pg ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav></header>`;
  const foot = `<footer><a href="mailto:${S.EMAIL}">${S.EMAIL}</a><a href="${S.INSTAGRAM}" rel="noopener">Instagram</a><span>© ${new Date().getFullYear()} ${S.NAME}. All rights reserved.</span></footer>`;

  const pages = {
    home: () => `<section class="intro"><h1>${S.NAME}</h1><p class="roles">Documentary Photographer<br>Photojournalist<br>Visual Storyteller</p><p class="loc">${S.LOCATION}</p></section>${(G.h = [S.HERO], fig(S.HERO, 'h', 0, 1))}<p class="lede">${S.BIO}</p><h2>SELECTED WORK</h2>${gal(S.WORK, 'w')}<p class="more"><a href="work.html">See all work</a> &nbsp; <a href="editorial.html">Editorial</a></p>`,
    work: () => `<h1>WORK</h1>${gal(S.WORK, 'w')}${S.STREET.length ? `<h2 id="street">STREET / EVERYDAY</h2>${gal(S.STREET, 's')}` : ''}`,
    stories: () => `<h1>STORIES</h1><nav class="toc" aria-label="Stories">${S.STORIES.map(s => `<a href="#${s.id}">${s.title}</a>`).join('')}</nav>${S.STORIES.map(s => `<section class="story" id="${s.id}"><h2>${s.title}</h2><p class="meta">${s.tags} · ${s.location} · ${s.date}</p><p class="lede">${s.intro}</p>${gal(s.photos, s.id)}${s.context ? `<p class="ctx">${s.context}</p>` : ''}</section>`).join('')}`,
    editorial: () => `<h1>EDITORIAL</h1><section><h2>GATOENCERRADO</h2><p class="meta">Selected editorial work</p><p class="lede">${S.GATO_INTRO}</p>${S.GATO.map((g, n) => `<article class="piece"><h3><a href="${g.url}" rel="noopener">${g.title}</a></h3><p class="meta">${g.date} · GatoEncerrado</p>${gal(g.photos, 'g' + n)}</article>`).join('')}<p class="more"><a href="${S.GATO_ARCHIVE}" rel="noopener">Full archive on GatoEncerrado</a></p></section>${S.GETTY_USERNAME ? `<section class="getty"><h2>GETTY IMAGES</h2><p class="meta">Selected work</p><p><a href="${S.GETTY_URL}" rel="noopener">${S.GETTY_USERNAME}</a></p></section>` : ''}`,
    about: () => `<h1>${S.NAME}</h1><p class="meta">Documentary photographer / Photojournalist · ${S.LOCATION}</p><div class="text">${S.ABOUT_TEXT.map(t => `<p>${t}</p>`).join('')}<h2>EXPERIENCE</h2><dl>${S.EXPERIENCE.map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join('')}</dl><h2>CAPABILITIES</h2><p>${S.CAPABILITIES.join(' · ')}</p></div>`,
    contact: () => `<h1>CONTACT</h1><div class="text"><p class="lede">Available for editorial assignments, documentary projects and collaborations.</p><p class="mail"><a href="mailto:${S.EMAIL}">${S.EMAIL}</a></p><p><a href="${S.INSTAGRAM}" rel="noopener">Instagram</a> &nbsp; <a href="${S.SITE_URL}">${S.SITE_URL.replace('https://', '')}</a></p><p class="meta">${S.NAME} · Documentary photographer, Photojournalist, Visual storyteller · ${S.LOCATION}</p></div>`
  };

  document.body.innerHTML = head + `<main id="main">${pages[pg]()}</main>` + foot +
    `<dialog id="lb" aria-label="Photo viewer"><button class="x" aria-label="Close">×</button><button class="pv" aria-label="Previous photo">‹</button><img alt=""><button class="nx" aria-label="Next photo">›</button><p></p></dialog>`;

  // Lightbox
  const lb = document.getElementById('lb'), im = lb.querySelector('img'), cap = lb.querySelector('p');
  let cur, idx;
  const show = (g, i) => { cur = g; idx = (i + G[g].length) % G[g].length; const p = G[g][idx]; im.src = 'images/' + p.file; im.alt = p.alt; cap.textContent = capt(p); };
  document.addEventListener('click', e => {
    const b = e.target.closest('.open');
    if (b) { show(b.dataset.g, +b.dataset.i); lb.showModal(); return; }
    if (e.target === lb || e.target.closest('.x')) lb.close();
    else if (e.target.closest('.pv')) show(cur, idx - 1);
    else if (e.target.closest('.nx')) show(cur, idx + 1);
  });
  document.addEventListener('keydown', e => { if (!lb.open) return; if (e.key === 'ArrowLeft') show(cur, idx - 1); if (e.key === 'ArrowRight') show(cur, idx + 1); });
})();
