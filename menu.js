let enlaces = document.querySelectorAll("#enlace")
const openMenu = document.querySelector("#open-responsive");
const closeMenu = document.querySelector("#close-responsive");
const menu = document.querySelector("#nav");

openMenu.addEventListener("click", () => {
    menu.classList.add("menu-responsive");
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("menu-responsive");
})

// enlaces.addEventListener("click", () => {
//     console.log("clickeaste en un enlace man!!!");
//     // menu.classList.remove("menu-responsive");
// })

enlaces.forEach(boton => boton.addEventListener("click", () => {
    menu.classList.remove("menu-responsive");
}))
