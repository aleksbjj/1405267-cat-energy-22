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
