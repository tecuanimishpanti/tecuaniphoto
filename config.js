/* ============================================================
   CONFIGURACIÓN ÚNICA — aquí cambias casi todo el sitio.
   Las rutas de imagen son relativas a /images/
   ============================================================ */

/* FOTOS con nombre genérico. Sube todas a la carpeta /images/ del repositorio.
   Si tus archivos terminan en .JPG (mayúsculas), cambia EXT a '.JPG'. */
const EXT = '.jpg';
const CYCLE = ['full', 'half', 'half', 'half', 'half', 'full']; // ritmo visual; cámbialo si quieres
/* F(['DSC_6003','DSC_6004'], {title, location, date, caption, alt}) crea las fotos. Los campos son opcionales. */
const F = (names, o = {}) => names.map((n, i) => ({
  file: n + EXT, title: o.title || '', location: o.location || '', date: o.date || '', caption: o.caption || '',
  alt: o.alt || 'Photograph by Tecuani Mishpanti', w: 1600, h: 1067, layout: o.layout || CYCLE[i % CYCLE.length]
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
  HERO: { file: 'DSC_6003' + EXT, title: '', location: '', date: '', caption: '', alt: 'Photograph by Tecuani Mishpanti', w: 1600, h: 1067, layout: 'full' }, // cambia DSC_6003 por tu foto principal

  /* Selección de portada y página WORK (documental, fotoperiodismo, calle, cultura, territorio, vida cotidiana) */
  WORK: F(['DSC_6003', 'DSC_6004', 'DSC_6005', 'DSC_6006', 'DSC_6007', 'DSC_6008', 'DSC_6009', 'DSC_6011', 'DSC_6012', 'DSC_6013', 'DSC_6015', 'DSC_6017', 'DSC_6018', 'DSC_6019', 'DSC_6020', 'DSC_6021', 'DSC_6022', 'DSC_6023']),

  /* Selección de calle: images/street/street-san-salvador-01.jpg ... */
  STREET: [], // opcional: F(['DSC_0001', ...])

  /* STORIES — añade un proyecto copiando un bloque */
  STORIES: [], // vacío = la página STORIES se oculta. Para añadir un proyecto: { id:'x', title:'TÍTULO', tags:'', location:'', date:'', intro:'', context:'', photos: F(['DSC_0001']) }

  /* EDITORIAL — GatoEncerrado */
  GATO_INTRO: 'Selected photographs produced during my work as a photographer for GatoEncerrado, covering environmental, cultural and social stories in El Salvador.',
  GATO_ARCHIVE: 'https://gatoencerrado.news/author/emerson-flores/',
  // Títulos deducidos de las URLs: revísalos contra los títulos publicados.
  // Fotos: images/editorial/gatoencerrado-<clave>-01.jpg ...
  GATO: [
    { title: 'Capturas, Ebenezer y expandilleros bajo el régimen', date: 'May 2022', url: 'https://gatoencerrado.news/2022/05/05/capturas-ebenezer-expandilleros-regimen/', photos: [] },
    { title: 'Las mujeres que florecen en el Corredor Seco', date: 'June 2022', url: 'https://gatoencerrado.news/2022/06/15/las-mujeres-que-florecer-en-el-corredor-seco/', photos: [] },
    { title: 'Sisimitepec, la comunidad nahua que lucha por el río Sensunapán y las tierras ancestrales', date: 'February 2022', url: 'https://gatoencerrado.news/2022/02/08/sisimitepec-la-comunidad-nahua-que-lucha-por-el-rio-sensunapan-y-las-tierras-ancestrales/', photos: [] },
    { title: 'La resistencia en el río Sensunapán la hacen las comunidades indígenas', date: 'June 2021', url: 'https://gatoencerrado.news/2021/06/19/la-resistencia-en-el-rio-sensunapan-la-hacen-las-comunidades-indigenas/', photos: [] },
    { title: 'Cuidar el manglar para enfrentar la crisis climática', date: 'June 2021', url: 'https://gatoencerrado.news/2021/06/11/cuidar-el-manglar-para-enfrentar-la-crisis-climatica/', photos: [] },
    { title: 'El peregrinaje del juez y las víctimas del caso El Mozote por acceder a los archivos militares', date: 'November 2020', url: 'https://gatoencerrado.news/2020/11/05/el-peregrinaje-del-juez-y-las-victimas-del-caso-el-mozote-por-acceder-a-los-archivos-militares/', photos: [] }
  ]
};
