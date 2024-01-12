
//connecteing diffrent ids and classes from html to js
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//displays mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu)