const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.nav__hamburger');
let menuClasses = menu.classList;

//Event handler
const handleClick = (e) => { 
    menuClasses.toggle('hide');
}

hamburger.addEventListener('click', handleClick);