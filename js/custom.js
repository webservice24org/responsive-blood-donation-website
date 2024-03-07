$(document).ready(function(){
  $('nav ul li').hover(function(){
      $(this).find('.submenu').stop().css('display', 'block').animate({
          opacity: 1,
          
      }, 300);
  }, function(){
      $(this).find('.submenu').stop().animate({
          opacity: 0,
      }, 300, function(){
          $(this).css('display', 'none');
      });
  });

  $('.submenu li').hover(function(){
      $(this).find('.subsubmenu').stop().css('display', 'block').animate({
          opacity: 1,
          top:0,
          left: '100%'
      }, 300);
  }, function(){
      $(this).find('.subsubmenu').stop().animate({
          opacity: 0,
          top:0,
          left: '110%'
      }, 300, function(){
          $(this).css('display', 'none');
      });
  });

  $('.home_slider').slick({
    slidesToShow: 1,
    infinite: true,
    speed: 2000,
    fade: true,
    autoplay:true,
    cssEase: 'linear'
  });

  $('.home_slider .slick-prev').html('<i class="fa-solid fa-angles-left"></i>');
  $('.home_slider .slick-next').html('<i class="fa-solid fa-angles-right"></i>');

});