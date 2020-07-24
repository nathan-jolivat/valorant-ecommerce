let toggleMobileNavMenu = document.querySelector('.toggle-mobile-menu');
let toggleMobileNavMenuButton = document.querySelector('.toggle-nav-menu');
let closeMobileNavMenuButton = document.getElementById('close-toggle-menu');

toggleMobileNavMenuButton.addEventListener('click', function () {

    if (hasClass(toggleMobileNavMenu, 'is-active'))
        toggleMobileNavMenu.classList.remove('is-active');
    else
        toggleMobileNavMenu.classList.add('is-active');
});

closeMobileNavMenuButton.addEventListener('click', function() {
    toggleMobileNavMenu.classList.remove('is-active');
});

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}