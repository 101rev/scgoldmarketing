(function () {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('mobile-menu');

    toggle.addEventListener('click', function(e) {
        this.classList.toggle('opened');
        menu.classList.toggle('mobile-close-menu');
    });
})();