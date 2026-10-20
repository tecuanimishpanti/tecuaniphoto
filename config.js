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
   layout: 'full' = ancho completo, 'half' = mitad.
   IMPORTANTE: el pie de foto visible se arma con title + location + date + caption.
   El campo alt NO se muestra: es solo la descripción oculta para accesibilidad.
   Los campos vacíos no se muestran en el pie de foto. */
const P = (name, o = {}) => F([name], o)[0];

/* ------------------------------------------------------------
   DATOS COMPARTIDOS POR SERIE (edita aquí una sola vez).
   Lo que esté vacío ('') no se muestra en la web.
   ------------------------------------------------------------ */
const CULTIVO   = { location: 'Nahuizalco, Sonsonate', date: 'September 20, 2026' };
const CEREMONIA = { location: 'Sisimitepec, Nahuizalco', date: '' };   // PENDIENTE: fecha exacta y año (equinoccio de primavera)
const HISTORIANTES = { location: 'Panchimalco', date: '' };            // PENDIENTE: fecha exacta y año (Santa Cruz de Roma)
const TERRITORIO = { location: 'Nahuizalco, Sonsonate', date: 'August 4, 2023' };

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
  ABOUT_TEXT: [
    "I am a documentary photographer and photojournalist based in San Salvador, working across El Salvador and Central America. My work looks at territory, memory, religion and everyday life: communities defending their land and rivers, popular faith, and the working life of San Salvador's markets, barrios and historic center.",
    "From 2019 to 2022 I worked as a photojournalist at GatoEncerrado, covering Indigenous worldviews, the defense of territory, forced displacement, cultural reporting and transitional justice. Since then I have accompanied and documented the defense of territory by Indigenous communities in western El Salvador, and my work has also appeared in Otras Miradas."
  ],

  /* Foto principal de la portada */
  HERO: { file: '_DSF3176' + EXT, title: 'Reinaldo Zacapa, Indigenous leader from Nahuizalco', location: 'Sensunapán River, Sonsonate', date: 'September 2023', caption: '', alt: "A man in a gray cap and a dark striped polo holds two spiny fruits against dense green forest", w: 1600, h: 1067, layout: 'full' },

  /* ============================================================
     WORK — 26 fotos en este orden. Cuatro bloques (sin títulos de sección):
     1) Territorio y comunidad  2) Historiantes  3) Ciudad  4) Régimen de excepción
     Para cambiar el orden, mueve las líneas. Para quitar una foto, bórrala o ponle // delante.
     Los campos location/date vacíos ('') están pendientes de confirmar: no se muestran.
     ============================================================ */
  WORK: [

    /* ---- 1) TERRITORIO Y COMUNIDAD ---- */
    P('_DSF6373', { layout: 'full', ...TERRITORIO, caption: "An older man climbs a mossy rock face holding a rope.", alt: "An older man in a straw hat and red shirt climbs a mossy rock face holding a rope, a woven bag over his shoulder" }),
    P('_DSF6769', { layout: 'half', ...TERRITORIO, caption: "A narrow canyon with a river and a cave opening.", alt: "A narrow green canyon with a muddy river running between boulders and a dark cave opening on the right" }),
    P('DSC_7698', { layout: 'half', ...CULTIVO, caption: "Communal planting by the Sisimitepec and Pushtan communities.", alt: "A man kneels in a field planting a banana seedling in dark soil while two others work behind him" }),
    P('DSC_7742', { layout: 'half', ...CULTIVO, caption: "Two farmers with bottles of seeds hanging from their necks.", alt: "Two farmers in hats stand among cane stalks, each with a plastic bottle of seeds hanging from his neck; one of them smiles" }),
    P('DSC_7760', { layout: 'half', ...CULTIVO, caption: "A farmer walks toward the camera with a hoe.", alt: "A smiling farmer in a pale shirt and rubber boots walks toward the camera with a hoe while others work the field behind him" }),
    P('DSC_7106', { layout: 'full', ...CEREMONIA, caption: "A Nahua ceremony for the spring equinox, a thanksgiving to Tunancin, the Moon.", alt: "People gather around a ceremonial fire ringed with stones and offerings of flowers and fruit in a forest clearing, holding seeds in their hands" }),
    P('DSC_7110', { layout: 'half', ...CEREMONIA, caption: "A man kneels with open hands before the ceremonial fire.", alt: "A man in an orange shirt and straw hat kneels with open hands before the ceremonial fire while a drummer and a guitarist stand behind him" }),
    P('DSC_7112', { layout: 'half', ...CEREMONIA, caption: "A woman holds a baby near the ceremonial fire.", alt: "A woman holds a baby near the ceremonial fire while a girl in an orange dress stands beside her" }),
    P('DSC_7129', { layout: 'full', ...CEREMONIA, caption: "The ceremony leader offers seeds to the participants.", alt: "A ceremony leader in a red headscarf offers seeds from a gourd bowl to participants; one woman wears a T-shirt reading Aquí vivimos, aquí resistimos" }),

    /* ---- 2) HISTORIANTES ---- */
    P('DSC_7610', { layout: 'full', ...HISTORIANTES, caption: "Historiantes during the Santa Cruz de Roma festival.", alt: "Costumed young dancers with machetes cross a cobbled street in front of a mural of an elder in a coin-decorated headdress, as a procession carries a flower-covered cross" }),
    P('DSC_7507', { layout: 'half', ...HISTORIANTES, caption: "Two young historiantes march down a cobbled street.", alt: "Two young dancers in satin capes, sunglasses and ornate headdresses march with machetes down a cobbled street" }),
    P('DSC_7577', { layout: 'half', ...HISTORIANTES, caption: "A young historiante beneath a gourd helmet fringed with old coins.", alt: "Close portrait of a young dancer in mirrored sunglasses beneath a gourd helmet fringed with old Salvadoran coins" }),
    P('DSC_7437', { layout: 'full', ...HISTORIANTES, caption: "A red-faced mask and a decorated gourd topped with a small painted figure.", alt: "A dancer in a red-faced mask and lavender satin cape holds a decorated gourd topped with a small painted figure carrying a bell and a cross" }),

    /* ---- 3) CIUDAD ---- */
    P('DSC_5556', { layout: 'half', location: 'La Tiendona market', date: 'May 7, 2026', caption: "A fishmonger lifts a red snapper from a crate.", alt: "A fishmonger in an apron lifts a large red snapper from a crate in front of a chest of ice" }),
    P('DSC_5575', { layout: 'half', location: 'La Tiendona market', date: 'May 7, 2026', caption: "A corn vendor seated in his stall.", alt: "A seated corn vendor in a pale blue T-shirt rests his hand on a net sack of fresh corn in his stall" }),
    P('DSC_6372', { layout: 'half', location: 'Mercado Central, San Salvador', caption: "Nelly Salazar at her poultry stall, a trade inherited from her mother.", alt: "A smiling poultry vendor leans on a doorframe and holds up a dressed chicken garnished with parsley and small tomatoes" }),
    P('DSC_6538', { layout: 'half', location: 'Mercado Central, San Salvador', caption: "A poultry vendor hands a bagged order across the counter.", alt: "A poultry vendor hands a bagged order across a counter piled with dressed chickens, under a sign that reads NELLY" }),
    P('DSC_7777', { layout: 'full', location: 'San Salvador', date: 'September 29, 2026', caption: "A weathered corner building; a man sits on the curb step.", alt: "A weathered corner building with rusted awnings and a red iron gate; a man in a red cap sits on the curb step" }),
    P('DSC_7797', { layout: 'half', location: 'San Salvador', date: 'September 29, 2026', caption: "A man sits in a doorway among stacks of used books.", alt: "A man sits in a doorway among stacks of used books, with a wooden shelf of paperbacks displayed beside him" }),
    P('DSC_5640', { layout: 'half', location: 'San Salvador', date: 'May 7, 2026', caption: "A vendor stands beside a doorway hung with tools and secondhand goods.", alt: "A vendor in a plaid shirt and a baseball cap stands beside a doorway hung with tools, among books, a clay figure, a cash box of jewelry and other secondhand goods" }),
    P('DSC_5627', { layout: 'half', location: 'San Salvador', date: 'May 7, 2026', caption: "A hand holds a set of antique brass bells.", alt: "A hand holds a small set of antique brass bells against a turquoise wall" }),
    P('DSC_5639', { layout: 'half', location: 'San Salvador', date: 'May 7, 2026', caption: "A worn Sagrada Biblia beside a clay figure and a cash box of jewelry.", alt: "A worn Sagrada Biblia leans on a tray beside a clay figure and an open cash box of jewelry, against a turquoise wall" }),

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
