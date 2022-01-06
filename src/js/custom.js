$(document).ready(function(){
  var swiper = new Swiper(".mySwiper", {
      loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",

        },
        autoplay: {
          delay: 3000,
        },

        pagination: {
          el: ".swiper-pagination",
        },

      });

     
  });