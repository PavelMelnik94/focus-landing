import './../js/modules/slider';
import Debug from './debug';
import './modules/index';

import Swiper from 'swiper/bundle';
import { getOne } from './utils';

window.addEventListener('load', function () {
  const debug = new Debug();
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      clickable: true,
      el: '.slider-pagination',
      type: 'bullets'
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  const x = getOne('.slider__dots');
  console.log(x, 'x');
  console.log(swiper, 'Swiper');
});
