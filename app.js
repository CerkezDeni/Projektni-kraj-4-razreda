const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector('logos').appendChild(copy);