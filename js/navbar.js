var isOpen = false;

function openNavBar() {
    var nav = document.getElementById('navigation');
    isOpen = !isOpen;
    if (isOpen) {
        nav.classList.add('nav--open')
    } else {
        nav.classList.remove('nav--open')
    }
}

function openSubNav(category) {
    console.log('Opening', category)
    var dropDownNav = document.getElementById(category);
    
    if (dropDownNav.classList.contains('nav__item--dropdown-open')) {
        dropDownNav.classList.remove('nav__item--dropdown-open')
    } else {
        dropDownNav.classList.add('nav__item--dropdown-open')
    }
}