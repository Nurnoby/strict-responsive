$(document).ready(function(){
  
  // sticky top menu 
  $(window).scroll(function(){
    var stickyMenu = $(this).scrollTop();
    var stickyTopMenu = $('.sticky-top');

    if (stickyMenu >=100) {
      stickyTopMenu.addClass('nav-bg') ;     
    } else {
      stickyTopMenu.removeClass('nav-bg') ;
      
    }
  })
    // scroll to top menu 
    $(window).scroll(function(){
      var scrolToTop = $(this).scrollTop();
      var scroll_now = $('.scroll-top');
  
      if (scrolToTop >=400) {
        scroll_now.addClass('activeScroll').fadeIn() ;     
      } else {
        scroll_now.removeClass('activeScroll').fadeOut() ;
        
      }
    })

      // type js
      var typed = new Typed('.type', {
        strings: [
          'Professional.',
          'and Pure Design.'
        ],
        smartBackspace: true ,
        typeSpeed: 100,
        loop: true
      });

       // scroll spy
       $('body').scrollspy({target: ".navbar", offset:50});

       //smooth scroll js
          var html_body = $('html, body');
          $('nav a').on('click', function () {
              if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                  if (target.length) {
                      html_body.animate({
                          scrollTop: target.offset().top - 50
                      }, 500);
                      return false;
                  }
              }
          });


          
       //aos
        AOS.init({
          duration: 1000,          
        });
        //popup
        $('.gallery-popup').magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
          // other options
        });        
      



});
