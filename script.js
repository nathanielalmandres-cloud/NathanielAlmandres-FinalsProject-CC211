// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Shop carousel
const slides = document.querySelectorAll(".slide");
let current = 0;

function show(index) {
  slides[current].classList.remove("is-active");
  current = (index + slides.length) % slides.length;
  slides[current].classList.add("is-active");
}

document.querySelector(".arrow.prev").addEventListener("click", () => show(current - 1));
document.querySelector(".arrow.next").addEventListener("click", () => show(current + 1));
