/* Inicio lógica de la aniación del menu */

const menu = document.querySelector(".bars__menu");
const nav = document.querySelector(".nav");
const listaCarrito = document.querySelector(".nav__list");

menu.addEventListener("click", animateBars);

function animateBars() {
  nav.classList.toggle("active");
}