'use strict'

var mySwiper = new Swiper('.benefit-swiper', {
    speed: 400,
    loop: true,
    navigation: {
        nextEl: '.benefit-next__arr',
        prevEl: '.benefit-prev__arr',
    },
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },
    }
});
var mySwiper2 = new Swiper('.levels-swiper', {
    speed: 400,
    loop: true,
    navigation: {
        nextEl: '.levels-next__arr',
        prevEl: '.levels-prev__arr',
    },
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },
    }
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
    breakpoints: {
        1000: {
            slidesPerView: 3,
        },
        650: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },
    }
});
var mySwiper4 = new Swiper('.teachers-swiper', {
    speed: 400,
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        650: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 1,
        },
    }
});

window.addEventListener('scroll', () => {
    let header = document.querySelector('.header')
    header.classList.toggle('sticky', window.scrollY > 740)
})