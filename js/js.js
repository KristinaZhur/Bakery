$(document).ready(function(){
    $('.threeslide').slick({
      speed: 1200,
      slidesToShow: 3,
  slidesToScroll: 3,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive : [
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          }
          
      ]
    });
  });
          