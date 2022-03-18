import u from 'umbrellajs';
import { getOne } from '../utils';

window.addEventListener('load', function () {
  (function () {
    console.log('hello module slider');
let dots          = 4;
let sliderElem    = document.querySelector('.slider')
let dotElems      = sliderElem.querySelectorAll('.slider__dot')
let indicatorElem = sliderElem.querySelector('.slider__indicator')
let arrowLeft = document.querySelector('.arrow-wrap--left')
let arrowRight = document.querySelector('.arrow-wrap--right')


Array.prototype.forEach.call(dotElems, (dotElem) => {

		dotElem.addEventListener('click', (e) => {
			e.preventDefault();

			let currentPos = parseInt(sliderElem.getAttribute('data-pos'))
			let newPos     = parseInt(dotElem.getAttribute('data-pos'))

			let newDirection     = (newPos > currentPos ? 'right' : 'left')
			let currentDirection = (newPos < currentPos ? 'right' : 'left')

			indicatorElem.classList.remove(`slider__indicator--${ currentDirection }`)
			indicatorElem.classList.add(`slider__indicator--${ newDirection }`)
			sliderElem.setAttribute('data-pos', newPos)

		})


})

const arrowNav = (el, direction) => {
	if (!el) throw new Error('no element')
	el.addEventListener('click', (e) => {
		e.stopPropagation()
		//constants
		const min = 0;
		const max = parseInt(dotElems?.length - 1);
		const currentPos = parseInt(sliderElem.getAttribute('data-pos'))

		const variations = direction === 'left' ? currentPos - 1 : currentPos + 1
		const newPos = (variations < min ? max : variations > max ? min : variations)

		sliderElem.setAttribute('data-pos', newPos)
	}, false)

}
arrowNav(arrowLeft, 'left')
arrowNav(arrowRight, 'right')
  })();
});
