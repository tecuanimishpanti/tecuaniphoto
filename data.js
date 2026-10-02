/*
  data.js
  ───────
  Esta es la ÚNICA parte del sitio que se edita para agregar contenido.
  No es necesario tocar index.html, styles.css ni script.js para
  publicar una fotografía o un proyecto nuevo.

  Guía completa de cómo editar este archivo: ver README.md
  ("Cómo agregar un proyecto nuevo" / "Cómo agregar una fotografía nueva").

  Todo lo marcado [PLACEHOLDER] es un dato de ejemplo. Sustitúyelo por
  información real antes de publicar. No se ha inventado ningún dato
  documental — solo se ha dejado la estructura lista para usarse.
*/

window.SITE_DATA = {

  // ──────────────────────────────────────────────────────────
  // IDENTIDAD DEL FOTÓGRAFO — usada en el header, About y SEO
  // ──────────────────────────────────────────────────────────
  photographer: {
    name: "Tecuani Mishpanti",
    legalNote: "Tecuani Mishpanti es el nombre profesional y autoral del fotógrafo Emerson Flores.",
    role: "Documentary photographer · Photojournalist · Visual researcher",
    location: "El Salvador · Central America",
    aboutText: "[PLACEHOLDER — escribe aquí tu propia biografía breve, en primera o tercera persona. No se ha generado ningún texto biográfico automáticamente: este espacio está intencionalmente vacío hasta que tú lo completes.]",
    email: "[PLACEHOLDER — tu correo de contacto]",
    assignmentsEmail: "[PLACEHOLDER — correo para encargos, si es distinto al de contacto]",
    licensingEmail: "[PLACEHOLDER — correo para licencias, si es distinto al de contacto]",
    instagram: "[PLACEHOLDER — @usuario de Instagram]",
    logo: "images/logo-placeholder.svg"
  },

  // ──────────────────────────────────────────────────────────
  // PROYECTOS / COBERTURAS
  // ──────────────────────────────────────────────────────────
  // id: identificador único, en minúsculas y sin espacios (se usa en la URL)
  // coverPhoto: el "id" de una fotografía de este mismo proyecto (más abajo)
  projects: [
    {
      id: "sensunapan",
      title: "Sensunapán",
      location: "Sonsonate, El Salvador [PLACEHOLDER]",
      dateStart: "2020",
      dateEnd: "2026",
      description: "[PLACEHOLDER — descripción breve del proyecto: qué documenta, por qué, y qué relación tienes con el territorio. Sustituye este texto antes de publicar.]",
      coverPhoto: "sensunapan-03"
    },
    {
      id: "mercado-central",
      title: "Mercado Central",
      location: "San Salvador, El Salvador [PLACEHOLDER]",
      dateStart: "2024",
      dateEnd: "2026",
      description: "[PLACEHOLDER — descripción breve del proyecto.]",
      coverPhoto: "mercado-central-02"
    },
    {
      id: "el-mozote",
      title: "El Mozote",
      location: "Morazán, El Salvador [PLACEHOLDER]",
      dateStart: "[PLACEHOLDER]",
      dateEnd: "[PLACEHOLDER]",
      description: "[PLACEHOLDER — descripción breve del proyecto.]",
      coverPhoto: "el-mozote-01"
    },
    {
      id: "altares",
      title: "Altares",
      location: "El Salvador [PLACEHOLDER]",
      dateStart: "[PLACEHOLDER]",
      dateEnd: "[PLACEHOLDER]",
      description: "[PLACEHOLDER — descripción breve del proyecto.]",
      coverPhoto: "altares-01"
    },
    {
      id: "trabajos-que-desaparecen",
      title: "Trabajos que desaparecen",
      location: "El Salvador [PLACEHOLDER]",
      dateStart: "[PLACEHOLDER]",
      dateEnd: "[PLACEHOLDER]",
      description: "[PLACEHOLDER — descripción breve del proyecto.]",
      coverPhoto: "trabajos-que-desaparecen-01"
    }
  ],

  // ──────────────────────────────────────────────────────────
  // FOTOGRAFÍAS
  // ──────────────────────────────────────────────────────────
  // id: identificador único de la fotografía (se usa en la URL)
  // project: debe coincidir exactamente con un "id" de la lista de arriba
  // file: ruta relativa dentro de /images/projects/<project>/
  // orientation: "landscape" o "portrait" (controla cómo se acomoda en la cuadrícula)
  // licenseAvailable: true / false — si aparece el botón "License this image"
  photographs: [
    // — Sensunapán —
    { id: "sensunapan-01", project: "sensunapan", file: "images/projects/sensunapan/sensunapan-01.svg", title: "[PLACEHOLDER título]", location: "Sisimitepec, Sonsonate [PLACEHOLDER]", date: "2026", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "sensunapan-02", project: "sensunapan", file: "images/projects/sensunapan/sensunapan-02.svg", title: "[PLACEHOLDER título]", location: "Sisimitepec, Sonsonate [PLACEHOLDER]", date: "2026", orientation: "portrait", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "sensunapan-03", project: "sensunapan", file: "images/projects/sensunapan/sensunapan-03.svg", title: "[PLACEHOLDER título]", location: "Nahuizalco, Sonsonate [PLACEHOLDER]", date: "2025", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "sensunapan-04", project: "sensunapan", file: "images/projects/sensunapan/sensunapan-04.svg", title: "[PLACEHOLDER título]", location: "Nahuizalco, Sonsonate [PLACEHOLDER]", date: "2025", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: false },
    { id: "sensunapan-05", project: "sensunapan", file: "images/projects/sensunapan/sensunapan-05.svg", title: "[PLACEHOLDER título]", location: "Sonsonate [PLACEHOLDER]", date: "2024", orientation: "portrait", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "sensunapan-06", project: "sensunapan", file: "images/projects/sensunapan/sensunapan-06.svg", title: "[PLACEHOLDER título]", location: "Sonsonate [PLACEHOLDER]", date: "2020", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },

    // — Mercado Central —
    { id: "mercado-central-01", project: "mercado-central", file: "images/projects/mercado-central/mercado-central-01.svg", title: "[PLACEHOLDER título]", location: "San Salvador [PLACEHOLDER]", date: "2026", orientation: "portrait", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "mercado-central-02", project: "mercado-central", file: "images/projects/mercado-central/mercado-central-02.svg", title: "[PLACEHOLDER título]", location: "San Salvador [PLACEHOLDER]", date: "2026", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "mercado-central-03", project: "mercado-central", file: "images/projects/mercado-central/mercado-central-03.svg", title: "[PLACEHOLDER título]", location: "San Salvador [PLACEHOLDER]", date: "2025", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "mercado-central-04", project: "mercado-central", file: "images/projects/mercado-central/mercado-central-04.svg", title: "[PLACEHOLDER título]", location: "San Salvador [PLACEHOLDER]", date: "2025", orientation: "portrait", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: false },
    { id: "mercado-central-05", project: "mercado-central", file: "images/projects/mercado-central/mercado-central-05.svg", title: "[PLACEHOLDER título]", location: "San Salvador [PLACEHOLDER]", date: "2024", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "mercado-central-06", project: "mercado-central", file: "images/projects/mercado-central/mercado-central-06.svg", title: "[PLACEHOLDER título]", location: "San Salvador [PLACEHOLDER]", date: "2024", orientation: "portrait", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "mercado-central-07", project: "mercado-central", file: "images/projects/mercado-central/mercado-central-07.svg", title: "[PLACEHOLDER título]", location: "San Salvador [PLACEHOLDER]", date: "2024", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "mercado-central-08", project: "mercado-central", file: "images/projects/mercado-central/mercado-central-08.svg", title: "[PLACEHOLDER título]", location: "San Salvador [PLACEHOLDER]", date: "2024", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },

    // — El Mozote —
    { id: "el-mozote-01", project: "el-mozote", file: "images/projects/el-mozote/el-mozote-01.svg", title: "[PLACEHOLDER título]", location: "Morazán [PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: false },
    { id: "el-mozote-02", project: "el-mozote", file: "images/projects/el-mozote/el-mozote-02.svg", title: "[PLACEHOLDER título]", location: "Morazán [PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: false },
    { id: "el-mozote-03", project: "el-mozote", file: "images/projects/el-mozote/el-mozote-03.svg", title: "[PLACEHOLDER título]", location: "Morazán [PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "portrait", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: false },
    { id: "el-mozote-04", project: "el-mozote", file: "images/projects/el-mozote/el-mozote-04.svg", title: "[PLACEHOLDER título]", location: "Morazán [PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: false },
    { id: "el-mozote-05", project: "el-mozote", file: "images/projects/el-mozote/el-mozote-05.svg", title: "[PLACEHOLDER título]", location: "Morazán [PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "portrait", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: false },

    // — Altares —
    { id: "altares-01", project: "altares", file: "images/projects/altares/altares-01.svg", title: "[PLACEHOLDER título]", location: "[PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "portrait", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "altares-02", project: "altares", file: "images/projects/altares/altares-02.svg", title: "[PLACEHOLDER título]", location: "[PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "portrait", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "altares-03", project: "altares", file: "images/projects/altares/altares-03.svg", title: "[PLACEHOLDER título]", location: "[PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "altares-04", project: "altares", file: "images/projects/altares/altares-04.svg", title: "[PLACEHOLDER título]", location: "[PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "portrait", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },

    // — Trabajos que desaparecen —
    { id: "trabajos-que-desaparecen-01", project: "trabajos-que-desaparecen", file: "images/projects/trabajos-que-desaparecen/trabajos-que-desaparecen-01.svg", title: "[PLACEHOLDER título]", location: "[PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "trabajos-que-desaparecen-02", project: "trabajos-que-desaparecen", file: "images/projects/trabajos-que-desaparecen/trabajos-que-desaparecen-02.svg", title: "[PLACEHOLDER título]", location: "[PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "portrait", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "trabajos-que-desaparecen-03", project: "trabajos-que-desaparecen", file: "images/projects/trabajos-que-desaparecen/trabajos-que-desaparecen-03.svg", title: "[PLACEHOLDER título]", location: "[PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "trabajos-que-desaparecen-04", project: "trabajos-que-desaparecen", file: "images/projects/trabajos-que-desaparecen/trabajos-que-desaparecen-04.svg", title: "[PLACEHOLDER título]", location: "[PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "landscape", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true },
    { id: "trabajos-que-desaparecen-05", project: "trabajos-que-desaparecen", file: "images/projects/trabajos-que-desaparecen/trabajos-que-desaparecen-05.svg", title: "[PLACEHOLDER título]", location: "[PLACEHOLDER]", date: "[PLACEHOLDER]", orientation: "portrait", caption: "[PLACEHOLDER pie de foto]", licenseAvailable: true }
  ]
};
