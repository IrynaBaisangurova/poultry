import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-about', {
    slidesPerView: 2,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-next-2',
    },
    loop: true,
    watchOverflow: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    speed: 1000,
    mousewheel: true,

    loopFillGroupWithBlank: true,
    breakpoints: {
      375: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 3,
      },

      1440: {
        slidesPerView: 2,
      },
    },
  });
});
