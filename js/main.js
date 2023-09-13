$(function(){

    $('.top-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:'<button type="button" class="slick-arrow slick-next"><img src="./images/next-arrow.svg" alt="next"></button>',
        prevArrow:'<button type="button" class="slick-arrow slick-prev"><img src="./images/prev-arrow.svg" alt="prev"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows:false,
                autoplay:true,
                speed: 300,
            }
          },
        ]
      });

      $('.feedback__slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        speed: 300,
      });

      $('.news__item-img').hover(
        function(){
            $(this).siblings('a').toggleClass('news__item-link--visible');
            $(this).toggleClass('news__item-img--border');
          },
    );
});