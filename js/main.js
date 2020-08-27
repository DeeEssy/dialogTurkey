'use strict'

var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.benefit-next__arr',
        prevEl: '.benefit-prev__arr',
    },
});


window.addEventListener('scroll', () => {
    let header = document.querySelector('.header')
    header.classList.toggle('sticky', window.scrollY > 740)
})