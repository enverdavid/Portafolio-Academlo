const menuBtn = document.getElementById("mobile-cta");
const closeMenuButton = document.getElementById("mobile-exit");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.add("menu-active");
});

closeMenuButton.addEventListener("click", () => {
  nav.classList.remove("menu-active");
});
