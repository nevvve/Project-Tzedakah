const mainNavToggle = document.querySelector('.main-navbar-toggle')
const mainNavMenu = document.querySelector('.main-nav-menu')

    mainNavToggle = addEventListener('click', () => {
        mainNavMenu.classList.toggle('active')
    })