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

const trackScroll = () => {
    let scrolled = window.scrollY;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goTopBtn.classList.add('active-top');
    }
    if (scrolled < coords) {
        goTopBtn.classList.remove('active-top');
    }
}

function backToTop() {
    if (window.scrollY > 0) {
        window.scrollBy(0, -30);
        setTimeout(backToTop, 0);
    }
}

const goTopBtn = document.querySelector('.toTop');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);