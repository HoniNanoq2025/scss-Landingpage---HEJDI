// navigation toggle
document.addEventListener("DOMContentLoaded", () => {
  const n = document.querySelector(".nav"),
    b = document.querySelector(".nav__toggle"),
    l = document.querySelector("#nav-menu");

  if (!n || !b || !l) return;

  b.addEventListener("click", () => {
    const o = n.classList.toggle("nav--open");
    b.setAttribute("aria-expanded", o ? "true" : "false");
  });
  l.addEventListener("click", () => {
    n.classList.remove("nav--open");
  });
});

// scroll effect for navigation
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav__container");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// theme toggle

const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;
const moonIcon = document.querySelector(".theme-toggle__icon--moon");
const sunIcon = document.querySelector(".theme-toggle__icon--sun");

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem("theme") || "dark";

// Apply saved theme on page load
if (currentTheme === "light") {
  body.classList.add("light-mode");
  if (moonIcon) moonIcon.classList.add("theme-toggle__icon--active");
  if (sunIcon) sunIcon.classList.remove("theme-toggle__icon--active");
} else {
  if (sunIcon) sunIcon.classList.add("theme-toggle__icon--active");
  if (moonIcon) moonIcon.classList.remove("theme-toggle__icon--active");
}

// Toggle theme on button click
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Update icons
    moonIcon.classList.toggle("theme-toggle__icon--active");
    sunIcon.classList.toggle("theme-toggle__icon--active");

    // Save theme preference
    const theme = body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", theme);
  });
}
