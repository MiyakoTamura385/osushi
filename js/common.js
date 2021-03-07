$('.slider').slick({
  autoplay: true,
  arrows: false,
  dots: false,
  autoplaySpeed: 1500,
  speed: 1500,  
});

///menu html///
//ドロワー　//
$(document).ready(function(){
  $('#open_nav').on('click' , function(){
   $('#wrapper, #nav').toggleClass('show');
  }); 
});

//試し　スライドショー////
$(function () {
  $('.slideshow').each(function () {
    var $slides = $(this).find('img'),
        slideCount = $slides.length,
        currentIndex = 0;
    $slides.eq(currentIndex).fadeIn();
    setInterval(showNextSlide, 7500);
    function showNextSlide () {
      var nextIndex = (currentIndex + 1) % slideCount;
      $slides.eq(currentIndex).fadeOut();
      $slides.eq(nextIndex).fadeIn();
      currentIndex = nextIndex;
    }
  })
})
