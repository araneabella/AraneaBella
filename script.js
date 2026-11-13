/* Aplica os links de config.js e ativa as animações de rolagem */
document.addEventListener("contextmenu", function (e) {
  if (e.target.closest(".photo-col, .lang, .social, .pills")) e.preventDefault();
});

(function () {
  var p = location.pathname;
  if (/\.html$/.test(p)) {
    p = p.replace(/index\.html$/, "").replace(/\.html$/, "");
    history.replaceState(null, "", p + location.search + location.hash);
  }
})();
(function () {
  var cfg = window.SITE || {};

  // Aplica os links (data-link="bonus" | "contato" | "patreon" | "x")
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var url = cfg[el.getAttribute("data-link")];
    if (!url) return;
    el.setAttribute("href", url);
    if (/^https?:/i.test(url)) {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    }
  });

  // Revela as seções ao rolar a página
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (i) { i.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach(function (i) { io.observe(i); });
})();
