$(document).ready(function() {
  $('#navigation a, #fixedbar a').on('click', function(event) {
    event.preventDefault();
  });

  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();

    if(scrollTop >= 755) {
      $('#fixedbar').fadeIn(250);
    } else if(scrollTop <= 754) {
      $('#fixedbar').fadeOut(250);
    }
  });

  // Plain smooth scroll when clicking an anchor link

  $('a[href^="#"]').on('click', function(event) {

      var target = $(this.getAttribute('href'));

      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });
})


// Using an aside with font awesome circles to traverse each section

// $(function() {
//   'use strict';
//
//   $('aside > a').click(function(e) {
//     console.log(this);
//     var $circles = $('.fa-circle');
//
//     if($circles !== this) {
//       $($circles).toggleClass('fa-circle fa-circle-o');
//     };
//     $(this).toggleClass('fa-circle-o fa-circle');
//     $('html, body').animate({
//       scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
//   });
//
//   var resizeTimer;
// });
