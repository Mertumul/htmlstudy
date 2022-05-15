var swiper = new Swiper(".mySwiper", {
    slidesPerView:3,
    loop:true,
    spaceBetween:40,
    autoplay:{
        0:{
            slidesPerView:1,
        },
        550:{
            slidesPerView:2,
        },
        850:{
            slidesPerView:3,
        },
        1000:{
            slidesPerView:3,
        },
    },
    pagination:{
        el: ".swiper-pagination",
        clickable:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
  
  });
        

