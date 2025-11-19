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
