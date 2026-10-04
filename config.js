/* ============================================================
   CONFIGURACIÓN ÚNICA — aquí cambias casi todo el sitio.
   Las rutas de imagen son relativas a /images/
   ============================================================ */

/* Genera fotos de relleno: P(carpeta, nombre, [layouts], {title, location, date}).
   Cada foto puede reemplazarse por un objeto manual con estos campos:
   { file, title, location, date, caption, alt, w, h, layout }
   layout: "full" (ancho completo) | "wide" (grande) | "tall" (vertical) | "half" (par) */
const P = (dir, slug, layouts, o = {}) => layouts.map((l, i) => ({
  file: `${dir}/${slug}-${String(i + 1).padStart(2, '0')}.jpg`,
  title: o.title || '[TITLE]', location: o.location || '[LOCATION]', date: o.date || '[DATE]',
  caption: o.caption || '[CAPTION]', alt: o.alt || '[ALT TEXT]',
  w: l === 'tall' ? 1067 : 1600, h: l === 'tall' ? 1600 : 1067, layout: l
}));

window.SITE = {
  NAME: 'TECUANI MISHPANTI',
  EMAIL: 'tecuanimishpanti@gmail.com',
  INSTAGRAM: 'https://www.instagram.com/tecuanimishpanti/',
  GETTY_USERNAME: '',   // Escribe aquí tu usuario/enlace de Getty; mientras esté vacío, la sección no se muestra
  GETTY_URL: '',        // Enlace a tu perfil/galería de Getty
  LOCATION: 'EL SALVADOR · CENTRAL AMERICA',
  SITE_URL: 'https://tecuanimishpanti.github.io/tecuaniphoto/',
  BIO: 'Documentary photographer and visual storyteller based in El Salvador, working across Central America. My work explores culture, territory, memory, religion and everyday life through photography and documentary research.',
  ABOUT_TEXT: ['[BIOGRAPHICAL TEXT — two or three short paragraphs]'],
  EXPERIENCE: [
    ['GatoEncerrado', 'Photographer, 2019–2022'],
    ['La Galera Teatro y Cocina', 'Cultural management / communication, 2025–2026'], // Bórrala si no quieres mostrarla
    ['[OTHER EXPERIENCE]', '[ROLE, YEARS]']
  ],
  CAPABILITIES: ['Photography', 'Photojournalism', 'Documentary research', 'Interviews', 'Field production', 'Video', 'Drone photography', 'Lightroom'],

  /* Foto principal de la portada (images/home/hero-01.jpg) */
  HERO: { file: 'home/hero-01.jpg', title: '[TITLE]', location: '[LOCATION]', date: '[DATE]', caption: '', alt: '[ALT TEXT]', w: 1600, h: 1067, layout: 'full' },

  /* Selección de portada y página WORK (documental, fotoperiodismo, calle, cultura, territorio, vida cotidiana) */
  WORK: P('home', 'selected', ['full', 'tall', 'tall', 'wide', 'tall', 'half', 'half', 'full']),

  /* Selección de calle: images/street/street-san-salvador-01.jpg ... */
  STREET: P('street', 'street-san-salvador', ['wide', 'tall', 'half', 'half'], { location: 'San Salvador' }),

  /* STORIES — añade un proyecto copiando un bloque */
  STORIES: [
    { id: 'sensunapan', title: 'SENSUNAPÁN', tags: 'Territory · Indigenous communities · Water', location: '[LOCATION]', date: '[DATE]',
      intro: '[PROJECT DESCRIPTION]', context: '[CONTEXT NOTE]',
      photos: P('stories', 'sensunapan', ['full', 'tall', 'tall', 'half', 'half', 'wide']) },
    { id: 'popular-religion', title: 'POPULAR RELIGION', tags: 'Faith · Ritual · Everyday life', location: '[LOCATION]', date: '[DATE]',
      intro: '[PROJECT DESCRIPTION]', context: '',
      photos: P('stories', 'popular-religion', ['full', 'tall', 'tall', 'half', 'half']) },
    { id: 'indigenous-communities', title: 'INDIGENOUS COMMUNITIES', tags: 'Culture · Land · Identity', location: '[LOCATION]', date: '[DATE]',
      intro: '[PROJECT DESCRIPTION]', context: '',
      photos: P('stories', 'indigenous-communities', ['wide', 'tall', 'half', 'half']) },
    { id: 'san-salvador', title: 'SAN SALVADOR', tags: 'Urban life · Memory · Territory', location: 'San Salvador', date: '[DATE]',
      intro: '[PROJECT DESCRIPTION]', context: '',
      photos: P('stories', 'san-salvador', ['full', 'tall', 'tall', 'half', 'half']) },
    { id: 'disappearing-trades', title: 'DISAPPEARING TRADES', tags: 'Work · Memory · Everyday life', location: 'San Salvador', date: '[DATE]',
      intro: '[PROJECT DESCRIPTION]', context: '',
      photos: P('stories', 'disappearing-trades', ['wide', 'tall', 'half', 'half']) }
  ],

  /* EDITORIAL — GatoEncerrado */
  GATO_INTRO: 'Selected photographs produced during my work as a photographer for GatoEncerrado, covering environmental, cultural and social stories in El Salvador.',
  GATO_ARCHIVE: 'https://gatoencerrado.news/author/emerson-flores/',
  // Títulos deducidos de las URLs: revísalos contra los títulos publicados.
  // Fotos: images/editorial/gatoencerrado-<clave>-01.jpg ...
  GATO: [
    { title: 'Capturas, Ebenezer y expandilleros bajo el régimen', date: 'May 2022', url: 'https://gatoencerrado.news/2022/05/05/capturas-ebenezer-expandilleros-regimen/', photos: P('editorial', 'gatoencerrado-ebenezer', ['wide', 'tall'], { location: 'El Salvador' }) },
    { title: 'Las mujeres que florecen en el Corredor Seco', date: 'June 2022', url: 'https://gatoencerrado.news/2022/06/15/las-mujeres-que-florecer-en-el-corredor-seco/', photos: P('editorial', 'gatoencerrado-corredor-seco', ['wide', 'tall'], { location: 'Corredor Seco' }) },
    { title: 'Sisimitepec, la comunidad nahua que lucha por el río Sensunapán y las tierras ancestrales', date: 'February 2022', url: 'https://gatoencerrado.news/2022/02/08/sisimitepec-la-comunidad-nahua-que-lucha-por-el-rio-sensunapan-y-las-tierras-ancestrales/', photos: P('editorial', 'gatoencerrado-sisimitepec', ['wide', 'tall'], { location: 'Sisimitepec' }) },
    { title: 'La resistencia en el río Sensunapán la hacen las comunidades indígenas', date: 'June 2021', url: 'https://gatoencerrado.news/2021/06/19/la-resistencia-en-el-rio-sensunapan-la-hacen-las-comunidades-indigenas/', photos: P('editorial', 'gatoencerrado-sensunapan', ['wide', 'tall'], { location: 'Río Sensunapán' }) },
    { title: 'Cuidar el manglar para enfrentar la crisis climática', date: 'June 2021', url: 'https://gatoencerrado.news/2021/06/11/cuidar-el-manglar-para-enfrentar-la-crisis-climatica/', photos: P('editorial', 'gatoencerrado-manglar', ['wide', 'tall'], { location: 'El Salvador' }) },
    { title: 'El peregrinaje del juez y las víctimas del caso El Mozote por acceder a los archivos militares', date: 'November 2020', url: 'https://gatoencerrado.news/2020/11/05/el-peregrinaje-del-juez-y-las-victimas-del-caso-el-mozote-por-acceder-a-los-archivos-militares/', photos: P('editorial', 'gatoencerrado-el-mozote', ['wide', 'tall'], { location: 'El Mozote' }) }
  ]
};
