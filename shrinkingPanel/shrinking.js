(function() {
    'use strict';
    var he = document.getElementById('yourElementId');
    var startShrink = 70;
    window.addEventListener('scroll',
        function() {
            if (window.pageYOffset > startShrink) {
                he.classList.remove('grow');
                he.classList.add('shrink');
            } else {
                he.classList.remove('shrink');
                he.classList.add('grow');
            }
        }, false);
}());