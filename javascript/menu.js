const smallPhone = window.matchMedia('(max-width: 400px)')

function openMenu() {
    let mobileMenu = document.querySelector('.menu--mobile')

    smallPhone.matches ? mobileMenu.style.width = '100%' : mobileMenu.style.width = '15.625rem'
}

function closeMenu() {
    let mobileMenu = document.querySelector('.menu--mobile')

    mobileMenu.style.width = '0'
}