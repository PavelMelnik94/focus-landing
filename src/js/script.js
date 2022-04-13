import './../js/modules/slider';
import './modules/index';

import Swiper from 'swiper/bundle';

window.addEventListener('load', function () {
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

});
