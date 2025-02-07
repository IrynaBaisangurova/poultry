import './is/hero.js';
import './is/mod.js';
import './is/about.js';
import './is/reviews.js';


import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';



const scrollToTopButton = document.querySelector('#scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'flex';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
