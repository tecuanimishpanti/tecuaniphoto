# Guía para mantener tu portafolio (sin saber programar)

Tu sitio está en: **tecuanimishpanti.github.io/tecuaniphoto/**
Tu repositorio está en: **github.com/tecuanimishpanti/tecuaniphoto**

Todo se hace desde la página de GitHub, con el navegador. No necesitas instalar nada.

---

## 1. Lo básico: cómo editar un archivo (se repite siempre)

Casi todo lo que quieras cambiar se hace así:

1. Entra a `github.com/tecuanimishpanti/tecuaniphoto`.
2. Haz clic en el nombre del archivo (por ejemplo `config.js`).
3. Arriba a la derecha del código, haz clic en el **lápiz** ✏️ (*Edit this file*).
4. Cambia el texto que necesites.
5. Arriba a la derecha, botón verde **Commit changes…** → en la ventana que se abre, botón verde **Commit changes**.
6. Espera **1 a 3 minutos**. Abre tu sitio y pulsa **Ctrl + Shift + R** para recargar sin memoria vieja.

> **Consejo de seguridad:** antes de editar, selecciona todo el texto del archivo (Ctrl + A), cópialo (Ctrl + C) y pégalo en el Bloc de notas. Si algo sale mal, tienes la copia para volver atrás.

**Buscar algo dentro del archivo:** estando en el editor, haz clic dentro del texto y pulsa **Ctrl + F**. Escribe una palabra y te la encuentra.

---

## 2. Qué archivo sirve para qué

| Quiero cambiar… | Archivo |
|---|---|
| Email, Instagram, textos, fotos, proyectos, Getty | `config.js` ← **el más importante** |
| Colores y tipografía | `style.css` |
| Título y descripción que ve Google | cada archivo `.html` |
| Frases fijas (por ejemplo "SELECTED WORK") | `main.js` |
| Las fotos | se suben a la raíz del repositorio, junto a los demás archivos |

Los demás archivos (`robots.txt`, `sitemap.xml`, `favicon.svg`, `README.md`) no necesitas tocarlos.

---

## 3. Reglas para editar `config.js` (muy importantes)

`config.js` es como un formulario: tiene **nombres** a la izquierda y **tus datos** a la derecha.

```
EMAIL: 'tecuanimishpanti@gmail.com',
```

- Cambia **solo lo que está entre comillas** `' '`.
- **No borres** las comillas `' '`.
- **No borres** la coma `,` al final de cada línea.
- Si tu texto lleva un apóstrofe (por ejemplo *don't*), escríbelo con una barra antes: `don\'t`.
- Los textos que empiezan con `//` son comentarios para ti; el sitio los ignora.
- Si algo se rompe y la página queda en blanco, casi siempre es una comilla o coma que se borró. Vuelve a pegar tu copia del Bloc de notas.

---

## 4. Recetas: cómo cambiar cada cosa

Todas estas están en **`config.js`**, salvo que se diga otra cosa.

### 4.1 Cambiar el email

Busca (Ctrl + F) `EMAIL` y cambia:

```js
EMAIL: 'tecuanimishpanti@gmail.com',
```

### 4.2 Cambiar el Instagram

```js
INSTAGRAM: 'https://www.instagram.com/tecuanimishpanti/',
```

Pega el enlace completo de tu perfil entre las comillas.

### 4.3 Cambiar la ubicación

```js
LOCATION: 'EL SALVADOR · CENTRAL AMERICA',
```

### 4.4 Cambiar la presentación corta de la portada

Es el párrafo que aparece debajo de la foto grande:

```js
BIO: 'Documentary photographer and visual storyteller based in El Salvador, ...',
```

Reemplaza el texto entre las comillas. Debe quedar **en una sola línea**, sin dar Enter.

### 4.4 bis. Cambiar las iniciales del encabezado (TM)

Si quieres otras iniciales, agrega esta línea justo debajo de `window.SITE = {`:

```js
MONOGRAM: 'TM',
```

### 4.5 Escribir el texto de la página ABOUT

```js
ABOUT_TEXT: ['[BIOGRAPHICAL TEXT — two or three short paragraphs]'],
```

Cada párrafo va entre comillas y separado por una coma. Ejemplo con dos párrafos:

```js
ABOUT_TEXT: [
  'Primer párrafo de mi biografía.',
  'Segundo párrafo de mi biografía.'
],
```

(Fíjate: el último párrafo **no** lleva coma al final.)

### 4.6 Cambiar la experiencia (página ABOUT)

```js
EXPERIENCE: [
  ['GatoEncerrado', 'Photographer, 2019–2022'],
  ['La Galera Teatro y Cocina', 'Cultural management / communication, 2025–2026'],
  ['[OTHER EXPERIENCE]', '[ROLE, YEARS]']
],
```

- Cada línea tiene dos partes: **lugar** y **cargo y años**.
- **Para añadir una:** copia una línea completa, pégala debajo y cámbiala. Todas las líneas terminan en coma, menos la última.
- **Para quitar una:** borra la línea completa.

### 4.7 Cambiar las capacidades (página ABOUT)

```js
CAPABILITIES: ['Photography', 'Photojournalism', 'Documentary research', ...],
```

Agrega o quita palabras, cada una entre comillas y separada por coma.

### 4.8 Añadir tu perfil de Getty Images

La sección de Getty **solo aparece** cuando rellenas estas dos líneas:

```js
GETTY_USERNAME: 'tu-usuario',
GETTY_URL: 'https://www.gettyimages.com/photographers/...',
```

Si las dejas vacías (`''`), la sección no se muestra.

---

## 5. Fotos

### 5.1 Cómo preparar las fotos

Antes de subirlas, exporta desde Lightroom (o tu programa) así:

- Formato **JPEG**, espacio de color **sRGB**.
- Lado largo: **2000 píxeles**.
- Calidad: **80**.
- Peso ideal: **menos de 1 MB** por foto. Así el sitio carga rápido en teléfono.

### 5.2 Cómo subir fotos nuevas

1. En el repositorio: botón **Add file → Upload files**.
2. Arrastra las fotos a la ventana.
3. Abajo, botón verde **Commit changes**.

Las fotos quedan en la raíz del repositorio, igual que las 18 actuales (`DSC_6003.jpeg`, etc.).

> El sitio distingue **mayúsculas y minúsculas** y la **extensión**. `DSC_6003.jpeg` no es lo mismo que `DSC_6003.JPG`. Si tus fotos nuevas terminan distinto de `.jpeg`, cambia su nombre antes de subirlas, o cambia `EXT` (ver 5.6).

### 5.3 Reemplazar una foto por otra

Sube la foto nueva **con exactamente el mismo nombre** que la anterior. GitHub la reemplaza. No hay que tocar `config.js`.

### 5.4 Añadir una foto a la galería WORK

1. Sube la foto (paso 5.2).
2. Abre `config.js` con el lápiz y busca `WORK`. Verás una lista de nombres:

```js
WORK: F(['DSC_6003', 'DSC_6004', 'DSC_6005', ... 'DSC_6023']),
```

3. Agrega el nombre de la foto **sin la extensión**, entre comillas y separado por coma, donde quieras que aparezca:

```js
WORK: F(['DSC_6003', 'DSC_6004', 'DSC_6024', ... 'DSC_6023']),
```

**El orden de la lista es el orden en el sitio.**

### 5.5 Quitar una foto de la galería

Borra su nombre de la lista (con su coma y sus comillas). La foto sigue en el repositorio, pero el sitio ya no la muestra.

### 5.6 Cambiar la extensión de las fotos

Al inicio de `config.js`:

```js
const EXT = '.jpeg';
```

Cámbialo por `'.jpg'` o `'.JPG'` si tus fotos terminan así. Debe ser igual para todas.

### 5.7 Poner título, lugar, fecha, descripción (caption) a una foto

Por defecto las fotos **no muestran texto**. Para añadir texto a una foto, sácala del grupo y ponla aparte, así:

```js
WORK: [
  ...F(['DSC_6003']),
  ...F(['DSC_6004'], {
    title: 'Artesano en su taller',
    location: 'San Salvador',
    date: '2026',
    caption: 'Una frase que explique la foto.',
    alt: 'Hombre con lentes decorando un objeto dorado',
    layout: 'half'
  }),
  ...F(['DSC_6005', 'DSC_6006', 'DSC_6007'])
],
```

Explicación:

- `...F([...])` significa "un grupo de fotos". Puedes tener tantos grupos como quieras, en el orden que quieras.
- `title`, `location`, `date`, `caption`: lo que se muestra debajo de la foto. Puedes dejar vacíos los que no quieras.
- `alt`: descripción para personas ciegas y para Google. Describe lo que se ve en la foto, en una frase.
- **Cuidado con las comas:** cada línea dentro de `{ }` termina en coma, menos la última (`layout`).
- Los tres puntos `...` y la coma después de cada `)` son obligatorios.

### 5.8 Cambiar el tamaño de una foto en la página (layout)

Cada foto puede tener uno de estos `layout`:

| layout | Cómo se ve |
|---|---|
| `'full'` | Ocupa todo el ancho. |
| `'half'` | Mitad del ancho (dos fotos lado a lado). |
| `'wide'` | Dos tercios del ancho. |
| `'tall'` | Un tercio del ancho. Ideal para fotos **verticales**. |

Truco para una foto vertical junto a una horizontal grande:

```js
...F(['DSC_6010'], { layout: 'wide' }),
...F(['DSC_6011'], { layout: 'tall' }),
```

`wide` + `tall` suman el ancho completo y quedan en la misma fila.

### 5.9 Cambiar la foto principal de la portada

Busca `HERO` y cambia el nombre:

```js
HERO: { file: 'DSC_6003' + EXT, ... },
```

Pon el nombre de otra foto en lugar de `DSC_6003`, sin la extensión.

### 5.10 Activar la sección de fotografía de calle

Hoy está vacía y por eso no se ve:

```js
STREET: [],
```

Para activarla, ponle fotos:

```js
STREET: F(['DSC_6008', 'DSC_6011', 'DSC_6015']),
```

Aparecerá como "STREET / EVERYDAY" al final de la página WORK.

---

## 6. Proyectos (página STORIES)

Hoy `STORIES` está vacía, y por eso el menú **no muestra** la opción STORIES. En cuanto agregues un proyecto, aparece sola.

Busca `STORIES: [],` y reemplázalo por:

```js
STORIES: [
  {
    id: 'mercado-central',
    title: 'MERCADO CENTRAL',
    tags: 'Faith · Everyday life',
    location: 'San Salvador',
    date: '2026',
    intro: 'Dos o tres frases que presenten el proyecto.',
    context: '',
    photos: F(['DSC_6019', 'DSC_6020', 'DSC_6021'])
  }
],
```

- `id`: una palabra en minúsculas, **sin espacios ni acentos** (usa guiones).
- `intro`: la presentación del proyecto.
- `context`: nota extra al final (puede quedar vacía: `''`).
- `photos`: las fotos del proyecto, igual que en WORK.

**Para añadir un segundo proyecto:** copia desde `{` hasta `}`, ponle una coma después del primer `}`, pega, y cambia los datos:

```js
STORIES: [
  { ...primer proyecto... },
  { ...segundo proyecto... }
],
```

---

## 7. Editorial (página EDITORIAL)

Ya están cargados tus seis trabajos de GatoEncerrado, con su enlace.

### 7.1 Añadir fotos a un trabajo

Cada trabajo tiene una línea con `photos: []` (vacío). Pon las fotos dentro:

```js
photos: F(['DSC_6030', 'DSC_6031'])
```

Primero sube esas fotos al repositorio (paso 5.2).

### 7.2 Corregir un título

Los títulos los deduje de las direcciones web, así que compáralos con los reales:

```js
{ title: 'Las mujeres que florecen en el Corredor Seco', date: 'June 2022', url: '...', photos: [] },
```

Cambia el texto de `title` y, si hace falta, `date`.

### 7.3 Añadir un trabajo nuevo

Copia una línea completa `{ title: ..., photos: [] },` dentro de `GATO: [ ... ]`, pégala y cambia `title`, `date` y `url`.

### 7.4 Cambiar la frase de introducción

```js
GATO_INTRO: 'Selected photographs produced during my work as a photographer for GatoEncerrado, ...',
```

---

## 8. Frases fijas del sitio (archivo `main.js`)

Algunas frases no están en `config.js`. Para cambiarlas abre `main.js` y usa **Ctrl + F**:

| Frase | Búscala con |
|---|---|
| Documentary Photographer / Photojournalist / Visual Storyteller (portada) | `Documentary Photographer` |
| SELECTED WORK | `SELECTED WORK` |
| Available for editorial assignments… (página CONTACT) | `Available for editorial` |

Cambia solo las palabras, sin tocar los símbolos de alrededor (`<`, `>`, `${`, `}`, `` ` ``).

---

## 9. Lo que ve Google y las redes (archivos `.html`)

Cada página (`index.html`, `work.html`, `stories.html`, `editorial.html`, `about.html`, `contact.html`) tiene dos líneas cerca del inicio:

```html
<title>Tecuani Mishpanti — Documentary Photographer & Photojournalist</title>
<meta name="description" content="Documentary photographer and photojournalist based in El Salvador...">
```

Cambia el texto de cada una desde el lápiz del archivo. El `<title>` es lo que aparece en la pestaña del navegador y como título en Google.

---

## 10. Colores y tipografía (archivo `style.css`)

Al inicio del archivo hay un bloque que empieza con `:root {`:

```css
--bg: #fff;        /* fondo de la página */
--fg: #1a1a1a;     /* color del texto */
--mute: #666;      /* texto secundario (pies de foto) */
--accent: #2f4f7f; /* único color de acento: enlaces y página activa */
```

- Para cambiar el acento, reemplaza el código `#2f4f7f` por otro color. Puedes buscar "selector de color hex" en Google para elegir uno.
- Cambiar el tipo de letra es más delicado: hay que cambiarlo en `style.css` (`--serif`, `--sans`) **y** en la línea de Google Fonts de cada archivo `.html`. Si no es urgente, déjalo como está.

---

## 11. Dominio propio (opcional, para más adelante)

1. Compra un dominio, por ejemplo `tecuanimishpanti.com`, en un proveedor como Namecheap o Cloudflare.
2. En tu repositorio: **Settings → Pages → Custom domain**. Escribe el dominio y pulsa Save.
3. En el panel de tu proveedor, crea los registros DNS que GitHub te indica en esa pantalla.
4. Espera hasta 24 horas y marca **Enforce HTTPS**.
5. Al terminar, cambia `SITE_URL` en `config.js` y las direcciones dentro de `sitemap.xml` y `robots.txt`.

---

## 12. Si algo sale mal

| Problema | Qué hacer |
|---|---|
| La página queda **en blanco** | Casi siempre es una comilla o coma borrada en `config.js`. Pega tu copia del Bloc de notas. |
| Una foto sale como **recuadro gris con un nombre** | El archivo no existe con ese nombre. Compara el nombre del recuadro con el de tu repositorio: mayúsculas, guion bajo y extensión. |
| **Hice un cambio y no se ve** | Espera 3 minutos y pulsa Ctrl + Shift + R. Si no, abre el sitio en una ventana de incógnito. |
| Todo se ve **sin estilo** | `style.css` debe estar en la raíz del repositorio y llamarse exactamente así. |
| Un menú o enlace da **404** | Los archivos `.html` deben estar en la raíz, no dentro de una carpeta. |
| **No se publica** (X roja en "Deployments") | En el repositorio abre la pestaña **Actions**, entra al intento marcado en rojo y revisa el mensaje de error. |
| Una página se ve **rara después de editar `config.js`** | Abre la página, pulsa **F12**, ve a la pestaña **Console** y mira la línea en rojo: indica en qué línea de `config.js` está el error. |

---

## 13. Lista rápida antes de enviar tu enlace a un editor

- [ ] Todas las fotos se ven (ninguna es un recuadro gris).
- [ ] Probé el sitio **desde mi teléfono**.
- [ ] El email y el Instagram son correctos y los enlaces abren bien.
- [ ] El texto de ABOUT está escrito (no dice `[BIOGRAPHICAL TEXT…]`).
- [ ] Los títulos de EDITORIAL coinciden con los publicados.
- [ ] No queda ningún texto entre corchetes `[ ]` en el sitio.
