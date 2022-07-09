// Toggle the menu__item--hide in every li
const menuItems = document.querySelectorAll('.menu__item')

const toggleClassOfMenuItems = () => {
    menuItems.forEach(item => {
        item.classList.toggle('menu__item--hide')
    })
}

// Toggle the mobile menu
const menu = document.querySelector('.menu')

const toggleMenu = () => { 
    menu.classList.toggle('menu--hide')
}

// Add event listeners to hamburger icon
const hamburger = document.querySelector('.nav__hamburger')

hamburger.addEventListener('click', toggleMenu)
hamburger.addEventListener('click', toggleClassOfMenuItems)