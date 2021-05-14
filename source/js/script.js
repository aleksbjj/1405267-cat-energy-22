//Menu

let navButton = document.querySelector(".js-button")
let navMenu = document.querySelector(".js-menu")

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

let sliderItems = document.querySelectorAll(".slider__item");
let sliderControl = document.querySelector(".slider__check");
let sliderControlRange = document.querySelector(".slider__range")

sliderControl.addEventListener("click", function () {
  for (sliderItem of sliderItems) {
    sliderItem.classList.toggle("slider__item--active");
  };
})

sliderControlRange.addEventListener("input", function () {
  if (sliderControlRange.value < 50) {
    sliderItems[0].classList.add("slider__item--active");
    sliderItems[1].classList.remove("slider__item--active");
  } else if (sliderControlRange.value > 50) {
    sliderItems[1].classList.add("slider__item--active");
    sliderItems[0].classList.remove("slider__item--active");
  }
})

//MAP

function initMap() {
  let pos = { lat: 59.93885329956933, lng: 30.323094027387143 };
  let opt = {
    center: pos,
    zoom: 15,
    disableDefaultUI: true
  };
  if (window.matchMedia("(min-width: 768px)").matches) {
    let map = new google.maps.Map(document.getElementById('map'), opt);
    let marker = new google.maps.Marker({
      position: pos,
      map: map,
      icon: "../img/map-pin-big.png"
    });
    console.log('1');
  } else {
    let map = new google.maps.Map(document.getElementById('map'), opt);
    let marker = new google.maps.Marker({
      position: pos,
      map: map,
      icon: "../img/map-pin.png.png"
    });
    console.log('2');
  }
}
