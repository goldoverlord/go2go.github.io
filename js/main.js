$(document).ready(function(){
  // header dropdown toggle
  $('.js-header-toggle').click(function(){
    $('body').toggleClass('is-show-dropdown lock');
  });
  // slider
  $('.car-slider__slider').slick({
    dots: true,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '70px',
    nextArrow: '.car-slider__btn--next',
    prevArrow: '.car-slider__btn--prev',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.info-slider__slider').slick({
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: '70px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.reviews-slider__slider').slick({
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '70px',
    nextArrow: '.reviews-slider__btn--next',
    prevArrow: '.reviews-slider__btn--prev',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
})();