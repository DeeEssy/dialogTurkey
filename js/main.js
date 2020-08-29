'use strict'

var mySwiper = new Swiper('.benefit-swiper', {
    speed: 400,
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.benefit-next__arr',
        prevEl: '.benefit-prev__arr',
    },
});
var mySwiper2 = new Swiper('.levels-swiper', {
    speed: 400,
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.levels-next__arr',
        prevEl: '.levels-prev__arr',
    },
});
var mySwiper3 = new Swiper('.reviews-swiper', {
    speed: 400,
    slidesPerView: 3,
    loop: true,
    pagination: {
        el: '.reviews-pagination',
        type: 'bullets',
        bulletClass: 'reviews-bullet',
        bulletActiveClass: 'reviews-bullet-active',
        clickable: true,
    },
});


window.addEventListener('scroll', () => {
    let header = document.querySelector('.header')
    header.classList.toggle('sticky', window.scrollY > 740)
})