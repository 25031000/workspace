const firstElement = document.getElementById("first-element");
const secondElement = document.getElementById("second-element");
const thirdElement = document.getElementById("third-element");
const forthElement = document.getElementById("forth-element");
const fifthElement = document.getElementById("fifth-element");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 410) {
    thirdElement.classList.add("animate__animated");
    thirdElement.classList.add("animate__fadeInRight");
  }
  if (document.documentElement.scrollTop > 910) {
    forthElement.classList.add("animate__animated");
    forthElement.classList.add("animate__fadeInLeft");
  }
  if (document.documentElement.scrollTop > 1500) {
    fifthElement.classList.add("animate__animated");
    fifthElement.classList.add("animate__fadeInRight");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  firstElement.classList.add("animate__animated");
  firstElement.classList.add("animate__fadeInRight");

  secondElement.classList.add("animate__animated");
  secondElement.classList.add("animate__fadeInLeft");
});
