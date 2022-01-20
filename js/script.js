$(document).ready(function () {

    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });
    let hamberger = document.querySelector('.hamberger');
    let mobilenav = document.querySelector('.mobile-nav');
    hamberger.addEventListener('click', function () {
        mobilenav.classList.add('open');
    })
     mobilenav.addEventListener('click', function () {
        mobilenav.classList.remove('open');
    })
});
