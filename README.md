# Tecuani Mishpanti — Portafolio

Sitio estático (HTML/CSS/JS puro) para GitHub Pages. Sin servidor, sin base de datos.

## Estructura

```
index.html  work.html  stories.html  editorial.html  about.html  contact.html
css/style.css        colores y tipografías (variables al inicio)
js/config.js         TODO el contenido: email, Instagram, textos, fotos, proyectos
js/main.js           genera las páginas (normalmente no se toca)
images/home | stories | editorial | street
favicon/  robots.txt  sitemap.xml
```

Las páginas se generan con JavaScript a partir de `js/config.js`. Mientras una foto no exista en `images/`, el sitio muestra un recuadro gris con el nombre de archivo esperado.

## Qué editar

| Quiero cambiar | Dónde |
|---|---|
| Email, Instagram, Getty, bio, ubicación | `js/config.js`, bloque `window.SITE` |
| Una foto | Sube el archivo a `images/...` con el mismo nombre que aparece en el recuadro gris |
| Título, lugar, fecha, caption, alt de una foto | Reemplaza la línea `P(...)` por objetos manuales (ver comentario al inicio de `config.js`) |
| Añadir un proyecto | Copia un bloque de `STORIES` en `config.js` |
| Colores / tipografías | `css/style.css` (`:root`) y la línea de Google Fonts en cada `.html` |
| Getty | Rellena `GETTY_USERNAME` y `GETTY_URL`; vacío, la sección no aparece |

Convención de nombres: `sensunapan-01.jpg`, `gatoencerrado-manglar-01.jpg`, `street-san-salvador-01.jpg`. Prepara las fotos a unos 2000 px en el lado largo, JPG calidad 80–85.

## Publicar en GitHub Pages

1. **Cuenta:** crea una en github.com si no tienes.
2. **Repositorio:** New repository. Nombre: `tecuanimishpanti.github.io` (da la URL raíz `https://tecuanimishpanti.github.io/`). Público. Marca "Add a README" solo si vas a subir desde la web. Si ya tienes ese repositorio, sube estos archivos ahí (reemplazando los anteriores).
3. **Subir archivos:** en el repositorio, Add file → Upload files. Arrastra el *contenido* de la carpeta (no la carpeta contenedora): los `.html` en la raíz, y las carpetas `css`, `js`, `images`, `favicon`. Commit changes.
4. **Activar Pages:** Settings → Pages → Source: *Deploy from a branch* → Branch: `main`, carpeta `/ (root)` → Save.
5. **URL:** aparece arriba en esa misma página a los 1–3 minutos.
6. **Actualizar:** sube el archivo nuevo con el mismo nombre (reemplaza el anterior) o edita `config.js` con el lápiz de GitHub. Cada commit republica en 1–2 minutos. Si no ves el cambio, recarga forzada (Ctrl/Cmd + Shift + R).
7. **Dominio propio (opcional):** compra el dominio, en Settings → Pages → Custom domain escribe `tecuanimishpanti.com` y sigue los registros DNS que indica GitHub. Luego actualiza `SITE_URL` en `config.js`, `sitemap.xml`, `robots.txt` y la etiqueta `og:image` de los HTML.

## Problemas frecuentes

- **Página en blanco:** abre F12 → Console. Casi siempre es una coma o comilla mal puesta en `config.js`.
- **Imágenes no aparecen:** el nombre debe coincidir exacto, incluidas mayúsculas y la extensión (`.jpg`, no `.JPG`).
- **CSS no carga:** `css/style.css` debe estar en la carpeta `css`, no suelto en la raíz.
- **Enlaces rotos / 404:** los `.html` deben estar en la raíz del repositorio, no dentro de otra carpeta.
- **No publica:** revisa Settings → Pages (rama `main`, `/root`) y la pestaña Actions por errores.

## Pendiente

Reemplazar los marcadores `[PLACEHOLDER]`, subir las fotos, verificar los títulos de GatoEncerrado (deducidos de las URLs) y completar `ABOUT_TEXT`.
