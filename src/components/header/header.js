document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.navigation');
    const main = document.querySelector('main');
    const body = document.querySelector('body');

    burgerMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
        main.classList.toggle('menu-active');
        body.classList.toggle('overflowHidden');
        window.scrollTo ({top:0, behavior:"smooth"});
        console.log('click')
    });
});

