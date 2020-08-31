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





const popupEnter = document.querySelector('.popup-enter'),
    body = document.querySelector('body')


let closestItemByClass = function (item, className) {
    let node = item
    while (node) {
        if (node.classList.contains(className)) {
            return node
        }
        node = node.parentElement
    }
    return null
}

let closestAttr = function (item, attr) {
    let node = item
    while (node) {
        let attrValue = node.getAttribute(attr)
        if (attrValue) {
            return attrValue
        }
        node = node.parentElement
    }
    return null
}

const showPopup = target => {
    target.classList.add('popup-active')
}

const closePopup = target => {
    target.classList.remove('popup-active')
}

let toggleScroll = () => {
    body.classList.toggle('no-scroll')
}

body.addEventListener('click', event => {
    const target = event.target
    const popupClass = closestAttr(target, 'data-popup')
    if (popupClass === null) {
        return
    }
    event.preventDefault()
    let popup = document.querySelector('.' + popupClass)
    if (popup) {
        showPopup(popup)
        toggleScroll()
    }
})

body.addEventListener('click', event => {
    let target = event.target
    if (target.classList.contains('popup-close') ||
        target.classList.contains('popup-inner')) {
        let popup = closestItemByClass(target, 'popup')
        closePopup(popup)
        toggleScroll()
    }
})

body.addEventListener('keydown', event => {
    if (event.keyCode !== 27) {
        return
    }

    let popup = document.querySelector('.popup-active')
    if (popup) {
        closePopup(popup)
        toggleScroll()
    }
})

let scroll = target => {
    let targetTop = target.getBoundingClientRect().top
    let scrollTop = window.pageYOffset
    let targetOffsetTop = targetTop + scrollTop
    let headerOffset = document.querySelector('.header').clientHeight
    window.scrollTo(0, targetOffsetTop - headerOffset)
}


const costForm = document.querySelector('.cost-form')
const costPricesNumber = document.querySelector('.cost-prices__number')
const costPricesQuantity = document.querySelector('.cost-prices__quantity')
const costFullPrice = document.querySelector('.cost-full-price')

costForm.addEventListener('click', event => {
    const target = event.target
    const card = target.closest('.cost-form-card')
    if (card.classList.contains('cost-form__id1')) {
        costPricesNumber.textContent = '599'
        costPricesQuantity.textContent = '7'
        costFullPrice.textContent = '4 193'
    }
    if (card.classList.contains('cost-form__id2')) {
        costPricesNumber.textContent = '539'
        costPricesQuantity.textContent = '8'
        costFullPrice.textContent = '4 312'
    }
    if (card.classList.contains('cost-form__id3')) {
        costPricesNumber.textContent = '499'
        costPricesQuantity.textContent = '16'
        costFullPrice.textContent = '7 984'
    }
    if (card.classList.contains('cost-form__id4')) {
        costPricesNumber.textContent = '459'
        costPricesQuantity.textContent = '24'
        costFullPrice.textContent = '11 016'
    }
    if (card.classList.contains('cost-form__id5')) {
        costPricesNumber.textContent = '429'
        costPricesQuantity.textContent = '32'
        costFullPrice.textContent = '13 728'
    }
})