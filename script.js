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

addEventOnElements(navTogglers, 'click', toggleNavbar)
function toggleNavbar ()  {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-active');
}

const header = document.querySelector('[data-header]');

let lastScrollPos = 0;

function hideHeader () {
  const isScrollButtom = lastScrollPos < window.scrollY;
  isScrollButtom ? header.classList.add('hide') : header.classList.remove('hide');
  lastScrollPos = window.scrollY
}

window.addEventListener('scroll', () => {
  window.scrollY >= 50 
  ? (header.classList.add('active'), hideHeader())
  : header.classList.remove('active');
})




/////////////////////////////////////////////////////////////////////////////////////

const heroSlider = document.querySelector('[data-hero-slider]');
const heroSLiderItem = document.querySelectorAll('[data-slider-item]');
const SliderPrevBtn = document.querySelector('[data-prev-btn]');
const SliderNextBtn = document.querySelector('[data-next-btn]');

let sliderPos = 0;
let lastSliderItem = heroSLiderItem[0];

const updateSlider = () => {
  lastSliderItem.classList.remove('active');
  heroSLiderItem[sliderPos].classList.add('active')
  lastSliderItem = heroSLiderItem[sliderPos];
}

SliderNextBtn.addEventListener('click', nextSlide)
function nextSlide () {
  if (sliderPos >= heroSLiderItem.length - 1) {
    sliderPos = 0;
  } else {
    sliderPos++
  }
  updateSlider()
}

SliderPrevBtn.addEventListener('click', prevSlide);
function prevSlide () {
  if (sliderPos <= 0) {
    sliderPos = heroSLiderItem.length - 1
  } else {
    sliderPos--
  }
  updateSlider()
}

// Auto SLide

let autoSLideInterval;

function autoSLider () {
  autoSLideInterval = setInterval(() => {
    nextSlide()
  }, 7000)
}


addEventOnElements([SliderPrevBtn, SliderNextBtn], 'mouseover', () => {
  clearInterval(autoSLideInterval);
})

addEventOnElements([SliderPrevBtn, SliderNextBtn], 'mouseout', autoSLider);
window.addEventListener('load', autoSLider); 