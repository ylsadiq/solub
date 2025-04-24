(function ($) {
    "use strict";
    // data bg img 
$("[data-bg-img]").each(function () {
    $(this).css({
        "background-image": "url(" + $(this).attr("data-bg-img") + ")",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center center"
    });
});

// services slider
let swiper = new Swiper(".wpr_services_slider", {
    slidesPerView: 3,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  });
// about slider
let aboutSwiper = new Swiper(".wpr_about_slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
  });
// testimonial slider
let testimonialSwiper = new Swiper(".wpr_testimonial_slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

})(jQuery);