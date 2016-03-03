function animateIn(){
  $(window).on("load",function() {
      function fade() {
        var me = $('.me');
        var icons = $('.icons');
        var colophon = $('.colophon')
        var see = $('.see')
        var resumeTitle = $('.resume-title')
        var resume = $('.resume')
        var itemsToAnimate = [];
        itemsToAnimate.push(me, icons, see, resumeTitle, resume);
        itemsToAnimate.forEach(function(index) {
            var objectBottom = $(index).offset().top + $(index).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            if (objectBottom < windowBottom - 200) { //object comes into view (scrolling down)
                if ($(index).css('opacity')==0) {
                  $(index).fadeTo(1000,1);
                }
            } else {
                if ($(index).css('opacity')==1) {
                  $(index).fadeTo(1000,0);
                }
            }
        });
      }
      fade(); //Fade in completely visible elements during page-load
      $(window).scroll(function() {fade();}); //Fade in elements during scroll
  });
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$(document).ready(function(){
  $('.triangle').hide();
  $('.square').hide();
  $('.circle').hide();
  $('.about').hide();
  $('.greeting').hide();
  $('.know').hide();
  $('.touch').hide();
  $('.replay').hide();
  animateIn();
  replay();
  $('.replay').on('click', function(){
    replay();
  })
  playSlides();
})

function replay(){
  $('.triangle').hide();
  $('.square').hide();
  $('.circle').hide();
  $('.about').hide();
  $('.greeting').hide();
  $('.know').hide();
  $('.touch').hide();
  $('.replay').hide();
  $('.greeting').fadeIn('slow', function(){
    $('.square').fadeIn('slow', function(){
      $('.circle').fadeIn('slow', function(){
        $('.triangle').fadeIn('slow', function(){
          $('.portfolio-link').css( "text-decoration", "underline" );
          $('.about').fadeIn('slow', function(){
            $(this).fadeOut(1150, function(){
              $('.portfolio-link').css( "text-decoration", "none" );
              $('.about-link').css( "text-decoration", "underline" );
                $('.know').fadeIn(1150, function(){
                  $('.about-link').css( "text-decoration", "none" );
                    $(this).fadeOut(1000, function(){
                    $('.contact-link').css( "text-decoration", "underline" );
                    $('.touch').fadeIn(1150, function(){
                      $('.replay').fadeIn(1150);
                    $('.contact-link').css( "text-decoration", "none");
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

function playSlides(){
  $('.slickslide').slick({
    autoplay: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    // dots: true,
    arrows:true,
    appendArrows: $(".projectos"),
    asNavFor: null,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right"></i></button>',
    // the magic
    responsive: [{
        breakpoint: 2000,
        settings: {
          slidesToShow: 1,
          infinite: true
        }
      },
      {
          breakpoint: 1500,
          settings: {
            slidesToShow: 1,
            infinite: true
          }
        },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      },
       {
        breakpoint: 300,
        settings: "unslick" // destroys slick
      }]
  });
}


// function getQuote(){
//   var quotes = [];
//   $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback", function(a) {
//     for (var obj of a) {
//       var quote = {}
//       quote.author = obj.title;
//       quote.quote = obj.content;
//       quote.url = obj.link;
//       quotes.push(quote);
//     }
//   }).then(function(quote){
//     var randNum = Math.floor(Math.random() * 39);
//     var q = quotes[randNum];
//     $("#quote").empty();
//     $("#quote").append(q.quote + "<p class='author'>&mdash; " + "<a href='" + q.url + "'>" + q.author + "</a></p>");
//     $("#new-quote").click(function() {
//       var randNum = Math.floor(Math.random() * 39);
//       var q = quotes[randNum];
//       $("#quote").empty();
//       $("#quote").append(q.quote + "<p class='author'>&mdash; " + "<a href='" + q.url + "'>" + q.author + "</a></p>");
//     });
//   });
// }
