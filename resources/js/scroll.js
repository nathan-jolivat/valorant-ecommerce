window.onscroll = function (e) {
    var nav = document.querySelector('.navbar');

    if (window.pageYOffset <= 0) {
        nav.classList.remove("is-scrolling");
    } else if (window.pageYOffset >= 100) {
        nav.classList.add("is-scrolling");
    }
}
