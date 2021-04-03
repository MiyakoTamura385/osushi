// Functions
$(function() {

  $('#open_nav').on('click' , function(){
   $('#wrapper, #nav').toggleClass('show');
  });

  $(".slideshow").each(function() {
    var $slides = $(this).find("img"),
      slideCount = $slides.length,
      currentIndex = 0;
    $slides.eq(currentIndex).fadeIn();
    setInterval(showNextSlide, 7500);
    function showNextSlide() {
      var nextIndex = (currentIndex + 1) % slideCount;
      $slides.eq(currentIndex).fadeOut();
      $slides.eq(nextIndex).fadeIn();
      currentIndex = nextIndex;
    }
  });
});
var $slides = $(this).find('img'),
  slideCount = $slides.length,
  currentIndex = 0;

// slick  ////////////////////
