'use strict';
const menuButton = document.querySelector('.navbar-toggler');
const menu = document.querySelector('#navbarResponsive');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('show', open);
});
menu?.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    menu.classList.remove('show');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});
