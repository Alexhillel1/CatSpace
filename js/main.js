const form = document.querySelector('.header-form');
const input = document.querySelector('.header-form__input');

input.addEventListener('focus', function () {
    form.classList.add('header-form--active');
})

input.addEventListener('blur', function () {
    form.classList.remove('header-form--active');
})