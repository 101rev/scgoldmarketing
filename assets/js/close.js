// (function () {
//
//     var close = document.getElementById('close-btn');
//
//     close.addEventListener('click', function(e) {
//         close.style.display = 'none'
//     })()

(function () {
    var close = document.getElementById('close-btn');
    var thanks = document.getElementById('thanks-message');
    close.addEventListener('click', function(e) {
        thanks.style.display = 'none'
    })
})();