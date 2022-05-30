const menu = document.querySelector('#mobile-menu');
const links = document.querySelector('.navbar__menu');

// Display Mobile Menu + animate a bit //all the "active" stuff
const mobileMenu = () => {   //our function
    menu.classList.toggle('is-active');
    links.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);
