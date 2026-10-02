/*
  script.js
  ─────────
  Router y renderizado del sitio. No es necesario editar este archivo
  para agregar contenido — eso se hace en data.js. Ver README.md.
*/

(function () {
  "use strict";

  var DATA = window.SITE_DATA;
  var main = document.getElementById("main");
  var siteNav = document.getElementById("siteNav");
  var navToggle = document.getElementById("navToggle");
  var sidebar = document.getElementById("siteSidebar");
  var projectsChevron = document.getElementById("projectsChevron");
  var projectsSublist = document.getElementById("projectsSublist");

  /* Populate the sidebar's "Projects" submenu from data.js */
  projectsSublist.innerHTML = DATA.projects.map(function (project) {
    return '<li><a href="#/project/' + project.id + '" data-route="project:' + project.id + '">' + esc(project.title) + '</a></li>';
  }).join("");

  projectsChevron.addEventListener("click", function () {
    var open = projectsSublist.hasAttribute("hidden");
    if (open) { projectsSublist.removeAttribute("hidden"); } else { projectsSublist.setAttribute("hidden", ""); }
    projectsChevron.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* ────────────────────────────────────────────────
     Helpers
     ──────────────────────────────────────────────── */
  function esc(str) {
    if (str === undefined || str === null) return "";
    var div = document.createElement("div");
    div.textContent = String(str);
    return div.innerHTML;
  }

  function photosByProject(projectId) {
    return DATA.photographs.filter(function (p) { return p.project === projectId; });
  }

  function findProject(id) {
    return DATA.projects.filter(function (p) { return p.id === id; })[0];
  }

  function findPhoto(id) {
    return DATA.photographs.filter(function (p) { return p.id === id; })[0];
  }

  function setTitle(t) {
    document.title = t + " — Tecuani Mishpanti";
  }

  function placeholderNotice() {
    return '<p class="placeholder-note">Vista de ejemplo — los proyectos, fotografías y textos marcados [PLACEHOLDER] son datos de muestra. Sustitúyelos en data.js antes de publicar.</p>';
  }

  /* ────────────────────────────────────────────────
     View: Archive
     ──────────────────────────────────────────────── */
  function renderArchive() {
    setTitle("Archive");
    var items = DATA.photographs.map(function (photo) {
      var project = findProject(photo.project);
      return (
        '<a class="thumb-card" href="#/photo/' + esc(photo.id) + '">' +
          '<img src="' + esc(photo.file) + '" alt="' + esc(photo.title) + '" loading="lazy">' +
          '<span class="thumb-meta">' + esc(project ? project.title : photo.project) + '</span>' +
        '</a>'
      );
    }).join("");

    main.innerHTML =
      '<div class="view">' +
        '<div class="thumb-grid">' + items + '</div>' +
      '</div>';
  }

  /* ────────────────────────────────────────────────
     View: Projects
     ──────────────────────────────────────────────── */
  function renderProjects() {
    setTitle("Projects");
    var cards = DATA.projects.map(function (project) {
      var cover = findPhoto(project.coverPhoto);
      var count = photosByProject(project.id).length;
      return (
        '<a class="project-card" href="#/project/' + esc(project.id) + '">' +
          '<span class="frame"><img src="' + esc(cover ? cover.file : "") + '" alt="' + esc(project.title) + '" loading="lazy"></span>' +
          '<span class="project-card-meta">' +
            '<span class="project-card-title">' + esc(project.title) + '</span>' +
            '<span class="project-card-sub">' + esc(project.location) + ' · ' + esc(project.dateStart) + '–' + esc(project.dateEnd) + ' · ' + count + ' photographs</span>' +
          '</span>' +
        '</a>'
      );
    }).join("");

    main.innerHTML =
      '<div class="view">' +
        '<div class="view-intro"><h1>Projects</h1><p>Long-form coverage and ongoing bodies of work.</p></div>' +
        placeholderNotice() +
        '<div class="project-grid">' + cards + '</div>' +
      '</div>';
  }

  /* ────────────────────────────────────────────────
     View: Project detail
     ──────────────────────────────────────────────── */
  function renderProjectDetail(id) {
    var project = findProject(id);
    if (!project) { renderNotFound(); return; }
    setTitle(project.title);

    var photos = photosByProject(id);
    var total = photos.length;

    var items = photos.map(function (photo, i) {
      var portraitClass = photo.orientation === "portrait" ? " is-portrait" : "";
      return (
        '<div class="archive-item sequence-item' + portraitClass + '">' +
          '<a class="photo-card" href="#/project/' + esc(id) + '/photo/' + esc(photo.id) + '">' +
            '<span class="frame"><img src="' + esc(photo.file) + '" alt="' + esc(photo.title) + '" loading="lazy"></span>' +
            '<span class="photo-meta">' +
              '<span class="index">' + String(i + 1).padStart(2, "0") + ' / ' + String(total).padStart(2, "0") + '</span>' +
              '<span>' + esc(photo.location) + ' · ' + esc(photo.date) + '</span>' +
            '</span>' +
          '</a>' +
        '</div>'
      );
    }).join("");

    main.innerHTML =
      '<div class="view">' +
        '<div class="project-header">' +
          '<p class="eyebrow"><a href="#/projects">Projects</a> — ' + total + ' photographs — ' + esc(project.dateStart) + '–' + esc(project.dateEnd) + '</p>' +
          '<h1>' + esc(project.title) + '</h1>' +
          '<p class="meta-line">' + esc(project.location) + '</p>' +
          '<p class="description">' + esc(project.description) + '</p>' +
        '</div>' +
        placeholderNotice() +
        '<div class="archive-grid">' + items + '</div>' +
      '</div>';
  }

  /* ────────────────────────────────────────────────
     View: Photo detail
     ──────────────────────────────────────────────── */
  function renderPhotoDetail(photoId, projectContext) {
    var photo = findPhoto(photoId);
    if (!photo) { renderNotFound(); return; }
    var project = findProject(photo.project);
    setTitle((project ? project.title + " — " : "") + (photo.title || photo.id));

    var sequence = photosByProject(photo.project);
    var idx = sequence.findIndex(function (p) { return p.id === photo.id; });
    var prev = idx > 0 ? sequence[idx - 1] : null;
    var next = idx < sequence.length - 1 ? sequence[idx + 1] : null;

    var backHref = projectContext ? "#/project/" + esc(photo.project) : "#/archive";
    var backLabel = projectContext ? "← " + (project ? esc(project.title) : "Project") : "← Archive";

    function photoLink(p) {
      return projectContext ? "#/project/" + esc(photo.project) + "/photo/" + esc(p.id) : "#/photo/" + esc(p.id);
    }

    main.innerHTML =
      '<div class="view">' +
        '<div class="photo-detail-top">' +
          '<a href="' + backHref + '">' + backLabel + '</a>' +
          '<span>' + esc(project ? project.title.toUpperCase() : "") + (project ? ' &nbsp;·&nbsp; ' : '') + String(idx + 1).padStart(2, "0") + ' / ' + String(sequence.length).padStart(2, "0") + '</span>' +
        '</div>' +

        '<div class="photo-detail-image"><img src="' + esc(photo.file) + '" alt="' + esc(photo.title) + '"></div>' +

        '<div class="photo-detail-grid">' +
          '<div class="photo-detail-caption">' +
            '<p>' + esc(photo.caption) + '</p>' +
            '<span class="credit">Documentary photography by Tecuani Mishpanti.</span>' +
          '</div>' +
          '<div class="photo-detail-facts">' +
            '<dl>' +
              '<dt>Project</dt><dd>' + esc(project ? project.title : photo.project) + '</dd>' +
              '<dt>Location</dt><dd>' + esc(photo.location) + '</dd>' +
              '<dt>Date</dt><dd>' + esc(photo.date) + '</dd>' +
              '<dt>ID</dt><dd>' + esc(photo.id) + '</dd>' +
            '</dl>' +
            (photo.licenseAvailable
              ? '<button class="btn-license" id="licenseBtn" data-photo="' + esc(photo.id) + '">License this image</button>'
              : '<p class="placeholder-note" style="margin:0;">Not currently available for licensing.</p>') +
          '</div>' +
        '</div>' +

        '<div class="photo-nav">' +
          (prev ? '<a href="' + photoLink(prev) + '">← Previous</a>' : '<span class="disabled">← Previous</span>') +
          (next ? '<a href="' + photoLink(next) + '">Next →</a>' : '<span class="disabled">Next →</span>') +
        '</div>' +
      '</div>';

    var btn = document.getElementById("licenseBtn");
    if (btn) btn.addEventListener("click", function () { openLicenseModal(photo); });
  }

  function renderNotFound() {
    setTitle("Not found");
    main.innerHTML = '<div class="view"><div class="view-intro"><h1>Not found</h1><p>That page does not exist. <a href="#/archive">Return to the archive.</a></p></div></div>';
  }

  /* ────────────────────────────────────────────────
     View: About
     ──────────────────────────────────────────────── */
  function renderAbout() {
    setTitle("About");
    var ph = DATA.photographer;
    main.innerHTML =
      '<div class="view">' +
        '<div class="prose-view">' +
          '<h1>' + esc(ph.name) + '</h1>' +
          '<p class="role">' + esc(ph.role) + ' — ' + esc(ph.location) + '</p>' +
          '<p>' + esc(ph.aboutText) + '</p>' +
          '<p class="legal-note">' + esc(ph.legalNote) + '</p>' +
        '</div>' +
      '</div>';
  }

  /* ────────────────────────────────────────────────
     View: Contact
     ──────────────────────────────────────────────── */
  function renderContact() {
    setTitle("Contact");
    var ph = DATA.photographer;
    main.innerHTML =
      '<div class="view">' +
        '<div class="prose-view">' +
          '<h1>Contact</h1>' +
          '<p class="role">For assignments, collaborations and image licensing.</p>' +
          '<ul class="contact-list">' +
            '<li><span class="contact-label">Email</span><span class="contact-value">' + esc(ph.email) + '</span></li>' +
            '<li><span class="contact-label">Assignments</span><span class="contact-value">' + esc(ph.assignmentsEmail) + '</span></li>' +
            '<li><span class="contact-label">Licensing</span><span class="contact-value">' + esc(ph.licensingEmail) + '</span></li>' +
            '<li><span class="contact-label">Instagram</span><span class="contact-value">' + esc(ph.instagram) + '</span></li>' +
          '</ul>' +
        '</div>' +
      '</div>';
  }

  /* ────────────────────────────────────────────────
     License modal
     ──────────────────────────────────────────────── */
  var modal = document.getElementById("licenseModal");
  var modalPhotoLabel = document.getElementById("licenseModalPhoto");
  var modalCloseBtn = document.getElementById("licenseModalClose");
  var form = document.getElementById("licenseForm");
  var currentPhotoForLicense = null;

  function openLicenseModal(photo) {
    currentPhotoForLicense = photo;
    var project = findProject(photo.project);
    modalPhotoLabel.textContent = (photo.title || photo.id) + " — " + (project ? project.title : photo.project) + " (" + photo.id + ")";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    var firstField = form.querySelector("select, input, textarea");
    if (firstField) firstField.focus();
  }

  function closeLicenseModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  modalCloseBtn.addEventListener("click", closeLicenseModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeLicenseModal(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeLicenseModal();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!currentPhotoForLicense) return;
    var ph = DATA.photographer;
    var fd = new FormData(form);
    var project = findProject(currentPhotoForLicense.project);

    var subject = "License request — " + (currentPhotoForLicense.title || currentPhotoForLicense.id);
    var bodyLines = [
      "Photograph: " + (currentPhotoForLicense.title || currentPhotoForLicense.id) + " (" + currentPhotoForLicense.id + ")",
      "Project: " + (project ? project.title : currentPhotoForLicense.project),
      "",
      "Intended use: " + fd.get("use"),
      "Publication / project: " + fd.get("publication"),
      "Territory: " + fd.get("territory"),
      "Duration: " + fd.get("duration"),
      "Client type: " + fd.get("clientType"),
      "",
      "Name: " + fd.get("name"),
      "Email: " + fd.get("email"),
      "Message: " + fd.get("message")
    ];

    var target = ph.licensingEmail && ph.licensingEmail.indexOf("PLACEHOLDER") === -1 ? ph.licensingEmail : ph.email;
    var mailto = "mailto:" + encodeURIComponent(target).replace(/%40/g, "@") +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(bodyLines.join("\n"));

    window.location.href = mailto;
    closeLicenseModal();
    form.reset();
  });

  /* ────────────────────────────────────────────────
     Router
     ──────────────────────────────────────────────── */
  function updateActiveNav(routeName) {
    var links = siteNav.querySelectorAll("a[data-route]");
    links.forEach(function (a) {
      a.classList.toggle("active", a.dataset.route === routeName);
    });
    var subLinks = projectsSublist.querySelectorAll("a[data-route]");
    subLinks.forEach(function (a) {
      a.classList.toggle("active", a.dataset.route === routeName);
    });
    // Auto-expand the Projects submenu when a specific project is open
    if (routeName.indexOf("project:") === 0) {
      projectsSublist.removeAttribute("hidden");
      projectsChevron.setAttribute("aria-expanded", "true");
    }
  }

  function route() {
    var hash = window.location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/").filter(Boolean);

    closeLicenseModal();
    sidebar.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");

    if (parts.length === 0 || parts[0] === "archive") {
      updateActiveNav("archive");
      renderArchive();
    } else if (parts[0] === "projects") {
      updateActiveNav("projects");
      renderProjects();
    } else if (parts[0] === "project" && parts[1] && parts[2] === "photo" && parts[3]) {
      updateActiveNav("project:" + parts[1]);
      renderPhotoDetail(parts[3], true);
    } else if (parts[0] === "project" && parts[1]) {
      updateActiveNav("project:" + parts[1]);
      renderProjectDetail(parts[1]);
    } else if (parts[0] === "photo" && parts[1]) {
      updateActiveNav("archive");
      renderPhotoDetail(parts[1], false);
    } else if (parts[0] === "about") {
      updateActiveNav("about");
      renderAbout();
    } else if (parts[0] === "contact") {
      updateActiveNav("contact");
      renderContact();
    } else {
      updateActiveNav("");
      renderNotFound();
    }

    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
    route();
  });

  navToggle.addEventListener("click", function () {
    var open = sidebar.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

})();
