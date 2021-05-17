const sliderItems = document.querySelectorAll(".slider__item");
const sliderControl = document.querySelector(".slider__check");
const sliderControlRange = document.querySelector(".slider__range");
const beforeElement = document.querySelector(".js-slider-after");

sliderControl.addEventListener("click", function () {
  for (const sliderItem of sliderItems) {
    sliderItem.classList.toggle("slider__item--active");
  }
});

sliderControlRange.addEventListener("input", () => {
  beforeElement.style.maxWidth = `${Math.abs(sliderControlRange.value)}%`;
});
