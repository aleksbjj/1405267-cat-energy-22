// Menu

let navButton = document.querySelector(".js-button")
let navMenu = document.querySelector(".js-menu")

navButton.classList.remove("main-nav__toggle--no-js");
navMenu.classList.remove("main-nav__list--no-js");

navButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (navButton.classList.contains("main-nav__toggle--active")) {
    navMenu.classList.remove("main-nav__list--active");
    navButton.classList.remove("main-nav__toggle--active");
  } else {
    navMenu.classList.add("main-nav__list--active");
    navButton.classList.add("main-nav__toggle--active");
  };
}
)

//SLIDER

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

//MAP
function initMap() {
  let pos = { lat: 59.93885329956933, lng: 30.323094027387143 };
  let opt = {
    center: pos,
    zoom: 15,
    disableDefaultUI: true
  };
  if (window.matchMedia("(min-width: 768px)").matches) {
    let map = new google.maps.Map(document.getElementById("map"), opt);
    let marker = new google.maps.Marker({
      position: pos,
      map: map,
      icon: "../img/map-pin-big.png"
    });
  } else {
    let map = new google.maps.Map(document.getElementById("map"), opt);
    let marker = new google.maps.Marker({
      position: pos,
      map: map,
      icon: "../img/map-pin.png.png"
    });
  }
}
