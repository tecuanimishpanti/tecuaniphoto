/* ============================================================
   CONFIGURACIÓN ÚNICA — aquí cambias casi todo el sitio.
   Las fotos están en la raíz del repositorio (ver IMG_PATH).
   ============================================================ */

/* Extensión de las fotos. Debe coincidir exacto con los archivos subidos (.jpg en minúscula). */
const EXT = '.jpg';
const CYCLE = ['full', 'half', 'half', 'half', 'half', 'full']; // ritmo visual por defecto (solo para F)

/* F(['nombre1','nombre2'], {title, location, date, caption, alt, layout}) crea varias fotos con los mismos datos. */
const F = (names, o = {}) => names.map((n, i) => ({
  file: n + EXT, title: o.title || '', location: o.location || '', date: o.date || '', caption: o.caption || '',
  alt: o.alt || 'Photograph by Tecuani Mishpanti', w: 1600, h: 1067, layout: o.layout || CYCLE[i % CYCLE.length]
}));

/* P('nombre', {layout, location, date, caption, alt}) crea UNA foto con su propio layout.
   layout: 'full' = ancho completo, 'half' = mitad. Los campos vacíos no se muestran en el pie de foto. */
const P = (name, o = {}) => F([name], o)[0];

window.SITE = {
  IMG_PATH: '', // '' = fotos en la raíz del repositorio; 'images/' si algún día las mueves a una carpeta
  NAME: 'TECUANI MISHPANTI',
  EMAIL: 'tecuanimishpanti@gmail.com',
  INSTAGRAM: 'https://www.instagram.com/tecuanimishpanti/',
  GETTY_USERNAME: '',   // mientras esté vacío, la sección de Getty no se muestra
  GETTY_URL: '',
  LOCATION: 'EL SALVADOR · CENTRAL AMERICA',
  SITE_URL: 'https://tecuanimishpanti.github.io/tecuaniphoto/',
  BIO: 'Documentary photographer and visual storyteller based in El Salvador, working across Central America. My work explores culture, territory, memory, religion and everyday life through photography and documentary research.',
  ABOUT_TEXT: ['[BIOGRAPHICAL TEXT — two or three short paragraphs]'],
  EXPERIENCE: [
    ['GatoEncerrado', 'Photographer, 2019–2022']
    // Añade aquí tu experiencia actual: ['[ORGANIZACIÓN]', '[ROL, AÑOS]']
  ],
  CAPABILITIES: ['Photography', 'Photojournalism', 'Documentary research', 'Interviews', 'Field production', 'Video', 'Drone photography', 'Lightroom'],

  /* Foto principal de la portada */
  HERO: { file: '_DSF6373' + EXT, title: '', location: '', date: '', caption: '', alt: "An older man in a straw hat and red shirt climbs a mossy rock face holding a rope", w: 1600, h: 1067, layout: 'full' },

  /* ============================================================
     WORK — 26 fotos en este orden. Cuatro bloques (sin títulos de sección):
     1) Territorio y comunidad  2) Historiantes  3) Ciudad  4) Régimen de excepción
     Para cambiar el orden, mueve las líneas. Para quitar una foto, bórrala o ponle // delante.
     Los campos location/date vacíos ('') están pendientes de confirmar: no se muestran.
     ============================================================ */
  WORK: [

    /* ---- 1) TERRITORIO Y COMUNIDAD ---- */
    P('_DSF6373', { layout: 'full', alt: "An older man in a straw hat and red shirt climbs a mossy rock face holding a rope, a woven bag over his shoulder" }),
    P('_DSF6769', { layout: 'half', alt: "A narrow green canyon with a muddy river running between boulders and a dark cave opening on the right" }),
    P('DSC_7698', { layout: 'half', alt: "A man kneels in a field planting a banana seedling in dark soil while two others work behind him" }),
    P('DSC_7742', { layout: 'half', alt: "Two farmers in hats stand among cane stalks, each with a plastic bottle of seeds hanging from his neck; one of them smiles" }),
    P('DSC_7760', { layout: 'half', alt: "A smiling farmer in a pale shirt and rubber boots walks toward the camera with a hoe while others work the field behind him" }),
    P('DSC_7106', { layout: 'full', alt: "People gather around a ceremonial fire ringed with stones and offerings of flowers and fruit in a forest clearing, holding seeds in their hands" }),
    P('DSC_7110', { layout: 'half', alt: "A man in an orange shirt and straw hat kneels with open hands before the ceremonial fire while a drummer and a guitarist stand behind him" }),
    P('DSC_7112', { layout: 'half', alt: "A woman holds a baby near the ceremonial fire while a girl in an orange dress stands beside her" }),
    P('DSC_7129', { layout: 'full', alt: "A ceremony leader in a red headscarf offers seeds from a gourd bowl to participants; one woman wears a T-shirt reading Aquí vivimos, aquí resistimos" }),

    /* ---- 2) HISTORIANTES ---- */
    P('DSC_7610', { layout: 'full', alt: "Costumed young dancers with machetes cross a cobbled street in front of a mural of an elder in a coin-decorated headdress, as a procession carries a flower-covered cross" }),
    P('DSC_7507', { layout: 'half', alt: "Two young dancers in satin capes, sunglasses and ornate headdresses march with machetes down a cobbled street" }),
    P('DSC_7577', { layout: 'half', alt: "Close portrait of a young dancer in mirrored sunglasses beneath a gourd helmet fringed with old Salvadoran coins" }),
    P('DSC_7437', { layout: 'full', alt: "A dancer in a red-faced mask and lavender satin cape holds a decorated gourd topped with a small painted figure carrying a bell and a cross" }),

    /* ---- 3) CIUDAD ---- */
    P('DSC_5556-2', { layout: 'half', location: 'La Tiendona market', date: 'May 7, 2026', alt: "A fishmonger in an apron lifts a large red snapper from a crate in front of a chest of ice" }),
    P('DSC_5575', { layout: 'half', location: 'La Tiendona market', date: 'May 7, 2026', alt: "A seated corn vendor in a pale blue T-shirt rests his hand on a net sack of fresh corn in his stall" }),
    P('DSC_6372-2', { layout: 'half', location: 'Mercado Central, San Salvador', caption: "Nelly Salazar at her poultry stall, a trade inherited from her mother.", alt: "A smiling poultry vendor leans on a doorframe and holds up a dressed chicken garnished with parsley and small tomatoes" }),
    P('DSC_6538', { layout: 'half', location: 'Mercado Central, San Salvador', alt: "A poultry vendor hands a bagged order across a counter piled with dressed chickens, under a sign that reads NELLY" }),
    P('DSC_7777', { layout: 'full', alt: "A weathered corner building with rusted awnings and a red iron gate; a man in a red cap sits on the curb step" }),
    P('DSC_7797', { layout: 'half', alt: "A man sits in a doorway among stacks of used books, with a wooden shelf of paperbacks displayed beside him" }),
    P('laperferia', { layout: 'half', date: 'May 7, 2026', alt: "A vendor in a plaid shirt and a baseball cap stands beside a doorway hung with tools, among books, a clay figure, a cash box of jewelry and other secondhand goods" }),
    P('DSC_5627', { layout: 'half', date: 'May 7, 2026', alt: "A hand holds a small set of antique brass bells against a turquoise wall" }),
    P('DSC_5639', { layout: 'half', date: 'May 7, 2026', alt: "A worn Sagrada Biblia leans on a tray beside a clay figure and an open cash box of jewelry, against a turquoise wall" }),

    /* ---- 4) RÉGIMEN DE EXCEPCIÓN ---- */
    P('_DSC2705', { layout: 'full', location: 'Calle Sisimiles, San Salvador', date: 'May 4, 2022', caption: "Police secure the street while an officer photographs detainees during a state-of-exception raid on a rehabilitation shelter.", alt: "Armed police officers stand in a line across a street at dusk while one photographs three men seated in the bed of a police pickup" }),
    P('_DSC2649', { layout: 'half', location: 'Calle Sisimiles, San Salvador', date: 'May 4, 2022', caption: "A detainee with crutches sits in the bed of a police truck.", alt: "A man with crutches sits on the tailgate of a police pickup surrounded by officers in dark uniforms, a volcano rising behind" }),
    P('_DSC2883', { layout: 'half', location: 'Calle Sisimiles, San Salvador', date: 'May 4, 2022', caption: "Police pack 27 detainees into three pickup trucks.", alt: "Armed officers crowd around detainees packed into the bed of a police pickup, with barbed wire above a green storefront" }),
    P('_DSC3108', { layout: 'full', location: 'Calle Sisimiles, San Salvador', date: 'May 4, 2022', caption: "A detainee in a wheelchair, hands over his face, in the back of a police truck.", alt: "A man in a wheelchair covers his face with his hands in the bed of a police pickup parked on an empty street at dusk" })
  ],

  /* Selección de calle (opcional) */
  STREET: [],

  /* STORIES — vacío = la página STORIES se oculta */
  STORIES: [],

  /* EDITORIAL — GatoEncerrado */
  GATO_INTRO: 'Selected photographs produced during my work as a photographer for GatoEncerrado, covering environmental, cultural and social stories in El Salvador.',
  GATO_ARCHIVE: 'https://gatoencerrado.news/author/emerson-flores/',
  // Títulos deducidos de las URLs: revísalos contra los títulos publicados.
  GATO: [
    { title: 'Capturas, Ebenezer y expandilleros bajo el régimen', date: 'May 2022', url: 'https://gatoencerrado.news/2022/05/05/capturas-ebenezer-expandilleros-regimen/', photos: [] },
    { title: 'Las mujeres que florecen en el Corredor Seco', date: 'June 2022', url: 'https://gatoencerrado.news/2022/06/15/las-mujeres-que-florecer-en-el-corredor-seco/', photos: [] },
    { title: 'Sisimitepec, la comunidad nahua que lucha por el río Sensunapán y las tierras ancestrales', date: 'February 2022', url: 'https://gatoencerrado.news/2022/02/08/sisimitepec-la-comunidad-nahua-que-lucha-por-el-rio-sensunapan-y-las-tierras-ancestrales/', photos: [] },
    { title: 'La resistencia en el río Sensunapán la hacen las comunidades indígenas', date: 'June 2021', url: 'https://gatoencerrado.news/2021/06/19/la-resistencia-en-el-rio-sensunapan-la-hacen-las-comunidades-indigenas/', photos: [] },
    { title: 'Cuidar el manglar para enfrentar la crisis climática', date: 'June 2021', url: 'https://gatoencerrado.news/2021/06/11/cuidar-el-manglar-para-enfrentar-la-crisis-climatica/', photos: [] },
    { title: 'El peregrinaje del juez y las víctimas del caso El Mozote por acceder a los archivos militares', date: 'November 2020', url: 'https://gatoencerrado.news/2020/11/05/el-peregrinaje-del-juez-y-las-victimas-del-caso-el-mozote-por-acceder-a-los-archivos-militares/', photos: [] }
  ]
};
