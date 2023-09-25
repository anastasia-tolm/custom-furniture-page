//  Смена года в копирайте

const footerYearElement = document.querySelector('.footer__year');
const today = new Date();
const year = today.getFullYear();

if (footerYearElement) {
  footerYearElement.textContent = year;
}

// Бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu && menuBody) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('body_lock'); // Запрет скролла при открытом меню
        iconMenu.classList.toggle('menu__icon_active');
        menuBody.classList.toggle('menu__body_active');
    });
}

// Прокрутка при клике 

const  linkElements = document.querySelectorAll('.link[data-goto]');
if (linkElements.length > 0) {
     linkElements.forEach(linkElement => {
         linkElement.addEventListener("click", clickedLink);
    });

    function clickedLink(e) {
        const  linkElement = e.target;
        if (linkElement.dataset.goto && document.querySelector(linkElement.dataset.goto)) {
            const gotoBlock = document.querySelector(linkElement.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('menu__icon_active')) {
                document.body.classList.remove('body_lock'); // Запрет скролла при открытом меню
                iconMenu.classList.remove('menu__icon_active');
                menuBody.classList.remove('menu__body_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
