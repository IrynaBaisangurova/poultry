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
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: true,

    loopFillGroupWithBlank: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 3,
      },

      1440: {
        slidesPerView: 6,
      },
    },
  });
});
