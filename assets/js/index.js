const btnOpen = document.querySelector('.btn--open');
const btnClose = document.querySelector('.btn--close');
const navMenuHamburger = document.querySelector('.menu__nav__icon');
const menuNavList = document.querySelector('.menu__nav__list');

navMenuHamburger.addEventListener('click', () =>{
   btnOpen.classList.toggle('activated');
   btnClose.classList.toggle('activated');
   menuNavList.classList.toggle('activated');
});
