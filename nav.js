/* navbar-under 700 width */
const mainNavToggle = document.querySelector('.main-navbar-toggle_button')
const mainNavMenu = document.querySelector('.main-nav-menu')

mainNavToggle.addEventListener('click', () => {
  mainNavMenu.classList.toggle('active')
})
