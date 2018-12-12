const menu = document.querySelector('.nav-header');
const burgerButton = document.querySelector('#burger-menu');
const ipad = window.matchMedia('screen and (max-width:767px)');


ipad.addListener(validation);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener('click', hideShow);
  } else {
    burgerButton.removeEventListener('click', hideShow);
  }
}
validation(ipad);

function hideShow() {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
    burgerButton.classList.remove('icon-cross');
    burgerButton.classList.add('icon-menu');
  } else {
    menu.classList.add('is-active');
    burgerButton.classList.remove('icon-menu');
    burgerButton.classList.add('icon-cross');
  }
}
