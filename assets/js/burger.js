(function () {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('mobile-menu');
    var close = document.getElementsByClassName('close-link');

    toggle.addEventListener('click', function(e) {
        this.classList.toggle('opened');
        menu.classList.toggle('mobile-close-menu');
    });
    for(let i = 0; i<close.length; i++){
        close[i].addEventListener('click', function (e) {
            menu.classList.toggle('mobile-close-menu')
            toggle.classList.toggle('opened');
        })
    }
})();