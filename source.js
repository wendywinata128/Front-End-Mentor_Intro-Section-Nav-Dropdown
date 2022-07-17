let multiMenu = document.querySelectorAll(".multi-menu > a");

let btnShowMenuMobile = document.querySelector(".btn-show-menu");
let btnCloseMenuMobile = document.querySelector(".btn-close-menu");

multiMenu.forEach((menu) => {
  menu.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});

btnShowMenuMobile.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle('show');
});

btnCloseMenuMobile.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle('show');
});

