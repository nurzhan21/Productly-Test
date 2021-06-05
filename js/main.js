$(document).ready(function() {
  $('.header__burger').click(function(event){
    $('.header__burger,.header-right').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$(document).ready(function(){
     $('.slider-wrap').slick({
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          responsive: [
               {
                   breakpoint: 992,
                   settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1
                   }
                 },
               {
                   breakpoint: 768,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 }
          ]
     });
     
});