//  Смена года в копирайте

const footerYearEl = document.querySelector('.footer__year');
let today = new Date();
let year = today.getFullYear();

footerYearEl.textContent = year;

// Бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('body_lock'); // Запрет скролла при открытом меню
        iconMenu.classList.toggle('menu__icon_active');
        menuBody.classList.toggle('menu__body_active');
    });
}
