
const switchMenu = () => {
    const menuItems = document.querySelector(".menu-items");
    menuItems.classList.toggle("show");
}

addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.querySelector(".btn-menu");
    if (btnMenu) {
      btnMenu.addEventListener("click", () => {
        switchMenu()
      });
    }
  });

const ul = document.querySelector(".menu-items");


ul.addEventListener('click', () => {
    switchMenu()
})

// mientras
document.addEventListener('scroll', () => {
    const menu = document.querySelector(".menu");

    if (window.scrollY > 0) {
        menu.classList.add("menu-background");
    } else {
        menu.classList.remove("menu-background");
    }

});
