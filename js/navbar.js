var isOpen = false;

function openNavBar() {
    var nav = document.getElementById('dropdown');
    isOpen = !isOpen;
    if (isOpen) {
        nav.classList.add('open-dropdown')
    } else {
        nav.classList.remove('open-dropdown')
    }
}

function openSubNav(category) {
    console.log('Opening', category)
    var dropDownNav = document.getElementById(category);
    
    if (dropDownNav.className === "link has-dropdown") {
        dropDownNav.classList.add('showing-content')
    } else {
        dropDownNav.classList.remove('showing-content')
    }
}