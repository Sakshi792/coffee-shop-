const slider = document.querySelector("#coffeeSlider");
const slides = document.querySelectorAll(".coffee-slide");
const pageBody = document.querySelector("#pageBody");
const nextBtn = document.querySelector("#nextBtn");


if (slider && slides.length > 0 && pageBody) {
  slider.addEventListener("scroll", function () {
    let activeSlide = slides[0];
    let activeIndex = 0;
    let closestDistance = Infinity;

    slides.forEach(function (slide , index) {
      const distance = Math.abs(slide.offsetLeft - slider.scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        activeSlide = slide;
        activeIndex = index;
      }
    });
    if (activeIndex === slides.length - 1) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
    pageBody.style.backgroundColor = activeSlide.dataset.bg;
  });
}
function updateTheme(coffee) {
  document.body.style.backgroundColor = coffee.bg;

  document.querySelector("footer").style.backgroundColor =
    coffee.footer;
}
const coffees = [
  {
    name: "Cappuccino",
    bg: "#D4A373",
    footer: "#5C3A21"
  },
  {
    name: "Espresso",
    bg: "#4A2C2A",
    footer: "#2C1810"
  },
  {
    name: "Latte",
    bg: "#E6CCB2",
    footer: "#B08968"
  }
];
