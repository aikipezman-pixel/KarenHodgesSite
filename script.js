const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {

  nav.classList.toggle('show');

  const expanded =
    menuToggle.getAttribute('aria-expanded') === 'true';

  menuToggle.setAttribute(
    'aria-expanded',
    !expanded
  );

});