import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/Y3yXz4mXQuWRLAYh/scene.splinecode");

//------------------------------codigo de la ventana----------------------------------------------

const menu = document.getElementById("menu");
const windowMenu = document.getElementById("window-menu");
const closeMenu = document.getElementById("close-menu");

menu.addEventListener("click", () => {
  //abre ventana
  windowMenu.style.width = "110vw";
});

closeMenu.addEventListener("click", () => {
  //cierra ventana
  windowMenu.style.width = "20px";
});

//------------------------------codigo de animate.css----------------------------------------------

const html = document.getElementById("cardhtml");
const content = document.getElementById("contenido");

html.addEventListener("mouseenter", () => {
  content.classList.add("animate__animated");
  content.classList.add("animate__zoomIn");
});

html.addEventListener("mouseleave", () => {
  content.classList.remove("animate__animated");
  content.classList.remove("animate__zoomIn");
});

/* --------------------- */

const css = document.getElementById("cardcss");
const contentcss = document.getElementById("contenidocss");

css.addEventListener("mouseenter", () => {
  contentcss.classList.add("animate__animated");
  contentcss.classList.add("animate__zoomIn");
});

css.addEventListener("mouseleave", () => {
  contentcss.classList.remove("animate__animated");
  contentcss.classList.remove("animate__zoomIn");
});

/* --------------------- */

const js = document.getElementById("cardjs");
const contentjs = document.getElementById("contenidojs");

js.addEventListener("mouseenter", () => {
  contentjs.classList.add("animate__animated");
  contentjs.classList.add("animate__zoomIn");
});

css.addEventListener("mouseleave", () => {
  contentjs.classList.remove("animate__animated");
  contentjs.classList.remove("animate__zoomIn");
});

/* ------------------------------------------------------scroll----------------------------------------------- */

window.addEventListener("wheel", () => {
  console.log(document.documentElement.scrollTop);
});
