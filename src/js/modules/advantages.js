import {
	getOne,
	setStyle,
	isVisibleinViewport,
	debounce
} from './../utils.js';

const nav = getOne('.advantages__navigation');
const navCollection = [...nav.children];

const dividersParent = getOne('.advantages__content--center');
const dividerCollection = [...dividersParent.children];

const img = getOne('.advantages__content--right > img');


window.addEventListener('load', () => {
	let count = 1;

	while (count != 8) {
		const linkNode = document.createElement('link');
		linkNode.rel = 'preload';
		linkNode.href = `./img/advantages/${count}.webp`;
		document.querySelector('head').appendChild(linkNode);
		count++;
	}
});

const setPicUrl = (i) => `./img/advantages/${i}.webp`;

const hideAllDividers = () => {
	dividerCollection?.forEach((el) => {
		setStyle(el, 'visibility', 'hidden');
	});
};

navCollection?.forEach((item, index) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();

		hideAllDividers();
		const currDiv = document.getElementById(`d${index}`);
		setStyle(currDiv, 'visibility', 'visible');

		img.setAttribute('src', setPicUrl(index + 1));
	});
});

