const firstElement = document.getElementById("first-screen");
const secondElement = document.getElementById("second-screen");
const thirdElement = document.getElementById("third-screen");
const forthdElement = document.getElementById("forth-screen");

window.addEventListener("scroll", () => {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 50) {
    firstElement.classList.add("animate__animated");
    firstElement.classList.add("animate__fadeInRight");
  }
  if (document.documentElement.scrollTop > 400) {
    secondElement.classList.add("animate__animated");
    secondElement.classList.add("animate__fadeInLeft");
  }
  if (document.documentElement.scrollTop > 1050) {
    thirdElement.classList.add("animate__animated");
    thirdElement.classList.add("animate__fadeInRight");
  }
  if (document.documentElement.scrollTop > 1680) {
    forthdElement.classList.add("animate__animated");
    forthdElement.classList.add("animate__fadeInLeft");
  }
});

console.log(firstElement.offsetTop);
