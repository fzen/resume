var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'cube',
    speed: 1000,
    autoplay: {
        delay: 3000
    },

    //分页器配置
    pagination: {
        el: '.swiper-pagination',
    },

    //前进后退按钮配置
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})        