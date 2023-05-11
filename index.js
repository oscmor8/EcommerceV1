function navSlide() {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-links");

  function showNavBar() {
    nav.classList.toggle("nav-activate");
  }
  burger.addEventListener("click", showNavBar);
}

navSlide();

const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

var sectionIndex = 0;

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});
