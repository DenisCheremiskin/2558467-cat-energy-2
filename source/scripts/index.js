/* в этот файл добавляет скрипты*/
const mainNav = document.querySelector('.main-nav');
const navigationMenuButton = document.querySelector('.navigation__menu');

mainNav.classList.remove('main-nav-nojs');

navigationMenuButton.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav-closed')) {
    mainNav.classList.remove('main-nav-closed');
    mainNav.classList.add('main-nav-opened');
  } else {
    mainNav.classList.add('main-nav-closed');
    mainNav.classList.remove('main-nav-opened');
  }
});

navigationMenuButton.addEventListener('click', () => {
  if (navigationMenuButton.classList.contains('navigation__menu-button')){
    navigationMenuButton.classList.remove('navigation__menu-button');
    navigationMenuButton.classList.add('navigation__menu-closed');
  } else {
    navigationMenuButton.classList.add('navigation__menu-button');
    navigationMenuButton.classList.remove('navigation__menu-closed');
  }
});
