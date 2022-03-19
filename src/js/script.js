import './../js/modules/slider'
import './debug';
import './modules/index';

import Swiper from 'swiper/bundle';
import { getOne } from './utils';

window.addEventListener( 'load', function() {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		// loop: true,

		// If we need pagination
		pagination: {
			clickable: true,
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {

			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});

	const x = getOne('.slider__dots');
	console.log(x, 'x')
	console.log( swiper,'Swiper' );

});

