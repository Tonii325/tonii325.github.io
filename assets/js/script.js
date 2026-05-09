// --- Scroll Reveal ---
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) el.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// --- Experience Tabs ---
function showTab(id, evt) {
  document.querySelectorAll(".exp-tab").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".exp-panel").forEach((p) => p.classList.remove("active"));
  document.getElementById("panel-" + id).classList.add("active");
  (evt?.target || event.target).classList.add("active");
}

// --- Mobile Menu ---
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}
document.querySelectorAll(".nav-mobile a").forEach((a) => {
  a.addEventListener("click", () =>
    document.getElementById("mobileMenu").classList.remove("open")
  );
});

// --- Scroll to Top ---
const scrollToTopBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  scrollToTopBtn.classList.toggle("show", window.scrollY > 300);
});
scrollToTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// --- Language Toggle ---
let currentLang = localStorage.getItem("lang") || "es";

function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (dict[el.dataset.i18n] !== undefined) el.textContent = dict[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    if (dict[el.dataset.i18nHtml] !== undefined) el.innerHTML = dict[el.dataset.i18nHtml];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    if (dict[el.dataset.i18nPlaceholder] !== undefined)
      el.placeholder = dict[el.dataset.i18nPlaceholder];
  });
  document.getElementById("lang-toggle").innerHTML =
    `<i class="fas fa-globe"></i> ${lang === "es" ? "EN" : "ES"}`;
  localStorage.setItem("lang", lang);
}
function toggleLang() {
  setLanguage(currentLang === "es" ? "en" : "es");
}
if (currentLang !== "es") setLanguage(currentLang);

// --- Theme Toggle ---
const themeBtn = document.getElementById("theme-toggle");
function applyTheme(isLight) {
  document.documentElement.classList.toggle("light", isLight);
  themeBtn.innerHTML = isLight
    ? '<i class="fas fa-moon"></i>'
    : '<i class="fas fa-sun"></i>';
  themeBtn.title = isLight ? "Modo oscuro" : "Modo claro";
}
function toggleTheme() {
  document.documentElement.classList.add("theme-transition");
  const isLight = !document.documentElement.classList.contains("light");
  applyTheme(isLight);
  localStorage.setItem("theme", isLight ? "light" : "dark");
  setTimeout(
    () => document.documentElement.classList.remove("theme-transition"),
    400
  );
}
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme === "light" || (!savedTheme && !prefersDark));

// --- Cursor Glow ---
(function () {
  const glow = document.getElementById("cursor-glow");
  let mx = -999, my = -999, cx = -999, cy = -999;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
  });
  function tick() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    glow.style.left = cx + "px";
    glow.style.top = cy + "px";
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
