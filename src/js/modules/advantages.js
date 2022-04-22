import {
	getOne,
	setStyle,
} from './../utils.js';

const nav = getOne('.advantages__navigation');
const navCollection = [...nav.children];

const dividersParent = getOne('.advantages__content--center');
const dividerCollection = [...dividersParent.children];

const imgParent = getOne('.advantages__content--right');
const imgCollection = [...imgParent.children];


const hide = {
	AllDividers: () => {
		dividerCollection?.forEach((el) => {
			setStyle(el, 'visibility', 'hidden');
		});
	},
	AllPics: () => {
		imgCollection.forEach((el) => {
			setStyle(el, 'display', 'none');
		});
	},
	AllEntity: () => {
		hide.AllDividers();
		hide.AllPics();
		return null;
	},
};

navCollection?.forEach((item, index) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();

		hide.AllEntity();
		const currDivider = document.getElementById(`d${index}`);
		setStyle(currDivider, 'visibility', 'visible');

		const currImg = document.getElementById(`pic${index}`);
		setStyle(currImg, 'display', 'block ');
	});
});

