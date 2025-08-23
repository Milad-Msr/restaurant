const preloader = document.querySelector('[data-preload]');

window.addEventListener('load', () => {
  setInterval(() => {
    preloader.classList.add('loaded');
    document.body.classList.add('loaded');
  },1000);
});