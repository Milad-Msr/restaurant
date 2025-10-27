// MARK: PreLoad
const preloader = document.querySelector('[data-preload]');

window.addEventListener('load', () => {
  preloader.classList.add('loaded');
  document.body.classList.add('loaded');
});


// MARK: Navbar

const addEventOnElements = (elements, event, callback) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(event, callback);
  };
};

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = () => {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-active');
}
addEventOnElements(navTogglers, 'click', toggleNavbar)




const header = document.querySelector('[data-header]');
let lastScrollPos = 0;

function hideHeader () {
  const isScrollButtom = lastScrollPos < window.scrollY;
  if (isScrollButtom) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide')
  }
  lastScrollPos = window.scrollY
};


window.addEventListener('scroll', () => {
  if (window.scrollY  >= 50) {
    header.classList.add('active');
    hideHeader()
  } else {
    header.classList.remove('active');
  } ;
});