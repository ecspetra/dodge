$(document).ready(function () {
  const prevArrow = `<div class="prev"></div>`;
  const nextArrow = `<div class="next"></div>`;
  $(".car-slider").slick({
    prevArrow,
    nextArrow,
    arrows: true,
    dots: true,
    fade: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
