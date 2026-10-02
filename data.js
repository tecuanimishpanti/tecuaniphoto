/* ============================================================
   ÚNICO ARCHIVO QUE EDITAS. Nada de HTML.

   AGREGAR UNA FOTO
   1. Sube el archivo a la carpeta /images con su nombre original
      de la cámara (por ejemplo DSCF1234.jpg), sin espacios.
   2. Añade UNA línea al INICIO de PHOTOS (la primera se ve primero):
      { file:"DSCF1234.jpg" },
      Todo lo demás es opcional: title, place, year, caption.
   3. Commit. GitHub Pages lo publica solo.

   SERIES (opcional): si algún día quieres agrupar fotos, llena
   PROJECTS y usa project:"slug" en esas fotos. Mientras PROJECTS
   esté vacío, el menú Projects no aparece.
   ============================================================ */

window.SITE = {
  name: "Tecuani Mishpanti",
  tagline: "Documentary photographer\nPhotojournalist\nEl Salvador, Central America",
  email: "tecuanimishpanti@gmail.com"
};

window.PROJECTS = [
  /* { slug:"corredor-seco", title:"Corredor Seco", summary:"" }, */
];

window.PHOTOS = [
  /* { file:"DSCF1234.jpg" }, */
];

window.ABOUT = {
  text: [
    "Documentary photographer and photojournalist based in San Salvador, El Salvador. My work follows markets, sacred spaces, indigenous communities and the historic center, and the territory's memory, symbols and everyday faith.",
    "Available for editorial assignments, local production and licensing of archive images."
  ],
  experience: [
    "Photojournalist, Revista GatoEncerrado, 2019–2022",
    "Independent documentation of the defense of territory in indigenous communities of western El Salvador, 2022–present",
    "Published in Otras Miradas"
  ],
  links: [
    { label:"Published work at GatoEncerrado", url:"https://gatoencerrado.news/author/emerson-flores/" }
  ]
};
