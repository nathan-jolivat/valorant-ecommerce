window.onscroll = function (e) {
    let nav = document.querySelector('.navbar');
    let searchInput = document.querySelector('.input.search');

    if (window.pageYOffset <= 0) {
        nav.classList.remove("is-scrolling");

        searchInput.classList.remove("bg-primary");
        searchInput.classList.add("bg-dark");
    } else if (window.pageYOffset >= 100) {
        nav.classList.add("is-scrolling");

        searchInput.classList.remove("bg-dark");
        searchInput.classList.add("bg-primary");
    }
}
