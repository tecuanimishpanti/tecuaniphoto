# Tecuani Mishpanti — sitio de archivo y portafolio

Sitio estático (HTML + CSS + JavaScript puro, sin frameworks, sin build,
sin base de datos) listo para GitHub Pages.

## Qué hay en esta carpeta

```
index.html      ← estructura del sitio (no se edita para agregar contenido)
styles.css       ← diseño visual
script.js        ← lógica del sitio (rutas, cuadrículas, ventana de licencia)
data.js          ← ÚNICO archivo que edita para agregar proyectos y fotos
README.md        ← este archivo
images/
  logo-placeholder.svg
  projects/
    sensunapan/
    mercado-central/
    el-mozote/
    altares/
    trabajos-que-desaparecen/
  thumbs/         ← carpeta reservada, opcional, ver "Sobre las miniaturas"
```

Todo el sitio funciona como una sola página (`index.html`) que cambia de
vista según la URL (`#/archive`, `#/project/sensunapan`, etc.). Esto es
intencional: así puedes agregar contenido nuevo editando un solo archivo
de datos, sin tocar HTML.

El menú es una barra lateral fija (a la izquierda en escritorio, un menú
desplegable arriba en móvil), con "Projects" expandible para saltar
directo a un proyecto. La vista **Archive** (portada) es una cuadrícula
densa de miniaturas cuadradas — al entrar a un proyecto, las fotos se
muestran grandes y en secuencia, no recortadas.

## Única dependencia externa

El sitio carga dos familias tipográficas desde Google Fonts (una serif
editorial para títulos, una sans neutra para navegación y datos). Es la
única dependencia externa de todo el sitio — no hay React, jQuery,
frameworks CSS ni librerías de galería. Si prefieres eliminarla, borra
las dos etiquetas `<link>` de Google Fonts en `index.html` y el sitio
usará tipografías del sistema (Georgia y Helvetica/Arial) sin romperse.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (o usa uno existente).
2. Sube el contenido de esta carpeta a la raíz del repositorio — no
   dentro de una subcarpeta. `index.html` debe quedar en la raíz.
3. En GitHub: **Settings → Pages → Source → Deploy from a branch**,
   selecciona la rama (normalmente `main`) y la carpeta `/ (root)`.
4. GitHub te dará una URL del tipo `https://tuusuario.github.io/turepositorio/`.
   El sitio tarda uno o dos minutos en publicarse tras cada subida.

No necesitas ningún paso de compilación (`build`, `npm install`, etc.):
subes los archivos tal cual y el sitio funciona.

## Cómo agregar una fotografía nueva

1. Coloca el archivo de imagen dentro de `images/projects/<id-del-proyecto>/`.
   Usa nombres descriptivos en minúsculas, por ejemplo
   `mercado-central-09.jpg` (bueno para SEO — evita `IMG_2043.jpg`).
2. Abre `data.js` y copia una entrada existente dentro del arreglo
   `photographs`. Pégala y cambia:
   - `id`: único, no repetido en todo el archivo
   - `project`: debe coincidir exactamente con el `id` de un proyecto
   - `file`: la ruta que usaste en el paso 1
   - `title`, `location`, `date`, `caption`: información real
   - `orientation`: `"landscape"` o `"portrait"`
   - `licenseAvailable`: `true` o `false`
3. Guarda y sube el archivo. No hace falta tocar ningún otro archivo.

## Cómo agregar un proyecto/cobertura nueva

1. Crea una carpeta nueva dentro de `images/projects/`, con el mismo
   nombre que usarás como `id` del proyecto (minúsculas, sin espacios,
   guiones en vez de espacios — ej. `arte-indocristiano`).
2. En `data.js`, copia una entrada existente dentro del arreglo
   `projects` y cambia `id`, `title`, `location`, `dateStart`, `dateEnd`,
   `description` y `coverPhoto` (el `id` de una fotografía de ese mismo
   proyecto — puedes dejarlo pendiente hasta subir al menos una foto).
3. Agrega las fotografías del proyecto como se explica arriba.

## Cómo cambiar textos, logo y datos de contacto

Todo vive en el objeto `photographer` al inicio de `data.js`:

- `aboutText` → el párrafo de la sección About
- `email`, `assignmentsEmail`, `licensingEmail`, `instagram` → Contact
  (el botón "License this image" también usa `licensingEmail`, o
  `email` si el primero sigue siendo un placeholder)
- `logo` → reemplaza `images/logo-placeholder.svg` por tu logo definitivo
  con el mismo nombre de archivo, o cambia la ruta aquí

Todo lo que dice `[PLACEHOLDER]` en `data.js` es un dato de ejemplo —
reemplázalo por tu información real antes de publicar el sitio.

## Sobre las imágenes de ejemplo (placeholders)

Las fotografías que ves ahora son archivos SVG generados automáticamente,
claramente marcados con el nombre del proyecto y la palabra
"PLACEHOLDER" — no son fotografías reales. Sustitúyelas por archivos
JPG/WebP reales usando el mismo nombre de archivo (o cambiando la ruta
`file` en `data.js`).

## Sobre las miniaturas (`images/thumbs/`)

Esta carpeta está reservada para cuando quieras servir una versión más
liviana de cada imagen en la cuadrícula del archivo (mejor velocidad de
carga). Por ahora el sitio usa la misma imagen en la cuadrícula y en la
vista ampliada, con `loading="lazy"` para no cargar todo de una vez. Si
más adelante generas miniaturas, el cambio es mínimo: agregar un campo
`thumb` a cada fotografía en `data.js` y usarlo en la cuadrícula del
archivo dentro de `script.js` (`renderArchive` y `renderProjectDetail`).

## Sobre el botón "License this image"

No hay sistema de pago todavía, tal como pediste. El botón abre un
formulario dentro del sitio; al enviarlo, se arma automáticamente un
correo (`mailto:`) dirigido a `licensingEmail` (o `email` si el primero
no está definido) con todos los datos de la solicitud ya escritos, para
que el cliente solo tenga que revisar y enviar. No se necesita servidor
ni base de datos para esto.

**Ruta de mejora futura, sin reconstruir el sitio:** cuando quieras
conectar pagos y entrega digital, el lugar exacto para hacerlo es la
función `form.addEventListener("submit", …)` en `script.js` — ahí es
donde hoy se arma el `mailto:`; se puede reemplazar por una llamada a
un servicio de pagos/checkout sin tocar el resto del sitio.

## Limitación de SEO que debes conocer

El sitio es una sola página (`index.html`) que cambia de contenido con
JavaScript según la URL después del `#`. Esto simplifica muchísimo el
mantenimiento (un solo archivo de datos, cero build), pero tiene un
costo real: los buscadores indexan `index.html` como una sola página,
no cada proyecto o fotografía por separado con su propio título y
descripción. Para el volumen de contenido actual esto es razonable,
pero si en el futuro te importa que, por ejemplo, "Mercado Central
Tecuani Mishpanti" devuelva directamente la página de ese proyecto en
Google, la mejora sería generar una página HTML estática por proyecto
(o usar un generador de sitios estáticos). Es un cambio de arquitectura,
no algo que se resuelva agregando una línea — lo dejo anotado para
cuando ese objetivo se vuelva prioritario.

## Qué NO incluye esta primera versión (a propósito)

- Sistema de pago o entrega digital automática
- Miniaturas separadas de las imágenes de archivo
- Páginas estáticas individuales por proyecto/foto (ver limitación de SEO)
- Contenido, biografía o citas inventadas — todo lo que falta está
  marcado `[PLACEHOLDER]`
