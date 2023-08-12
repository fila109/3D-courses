// Burger
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (element) {
  element.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('stop-scroll');
  })
})
