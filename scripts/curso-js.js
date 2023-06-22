const firstElement = document.getElementById("first-element");
const secondElement = document.getElementById("second-element");
const thirdElement = document.getElementById("third-element");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 60) {
    firstElement.classList.add("animate__animated");
    firstElement.classList.add("animate__fadeInRight");
  }
  if (document.documentElement.scrollTop > 660) {
    secondElement.classList.add("animate__animated");
    secondElement.classList.add("animate__fadeInLeft");
  }
  if (document.documentElement.scrollTop > 1260) {
    thirdElement.classList.add("animate__animated");
    thirdElement.classList.add("animate__fadeInRight");
  }
});
