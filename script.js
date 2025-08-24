const preloader = document.querySelector('[data-preload]');

window.addEventListener('load', () => {
  setInterval(() => {
    preloader.classList.add('loaded');
    document.body.classList.add('loaded');
  },1000);
});





const addEventOnElements = (elements, eventType, callback) => {
  for (let i = 0, length = elements.length; i < length; i++) {
    elements[i].addEventListener(eventType, callback);
  };
};

///////////////////////////////////////////////////////////////////////////////////////

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');


const toggleNavbar = () => {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-toggler');
};

addEventOnElements(navTogglers, 'click', toggleNavbar);







//////////////////////////////////////////////////////////////////////////////////////

const header = document.querySelector('[data-header]');

let hideScrollPos = 0;

const hideHeader = () => {
  const isScrollBottom = hideScrollPos < window.scrollY;

  isScrollBottom ? header.classList.add('hide') : header.classList.remove('hide');  
  hideScrollPos = window.scrollY;
};

window.addEventListener('scroll', () => {
  window.scrollY >= 50 
  ? (header.classList.add('active'), hideHeader()) 
  : header.classList.remove('active');
});

//////////////////////////////////////////////////////////////////////////////////////