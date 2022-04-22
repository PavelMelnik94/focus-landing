import { getOne, setStyle } from '../utils';

const screen = getOne('.feedback-screen');

const openScreenBtn = document.getElementById('feedback-send');
const closeScreenBtn = document.getElementById('feedback-close');

const feedbackScreen = {
    hide: () => setStyle(screen, 'display', 'none'),
    show: () => setStyle(screen, 'display', 'block'),
};

openScreenBtn.addEventListener('click', (e) => {
    e.preventDefault();

    feedbackScreen.show();
});

closeScreenBtn.addEventListener('click', (e) => {
    e.preventDefault();

    feedbackScreen.hide();
});