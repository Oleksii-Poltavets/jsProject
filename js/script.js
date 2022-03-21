import calculator from './modules/calculator';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import openModal from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    calculator();
    cards();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-12-31');
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prewArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});



