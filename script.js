const preloader = document.querySelector('[data-preload]');

window.addEventListener('load', () => {
  preloader.classList.add('loaded');
  document.body.classList.add('loaded');
});




const navbarMenu = document.querySelector('[data-navbar]');
const closeBtn = document.querySelector('[data-close-btn]');
const openBtn = document.querySelector('[data-open-nav-btn]');



openBtn.addEventListener('click', () => {
  navbarMenu.classList.remove('hide')
})


closeBtn.addEventListener('click', () => {
  navbarMenu.classList.add('hide')
})


