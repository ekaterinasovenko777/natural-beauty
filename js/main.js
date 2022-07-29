//CARUSEL
$(document).ready(function () {
   $('.owl-carousel').owlCarousel(
       );

}) ;
const owl = $('.owl-carousel');
owl.owlCarousel({
   center: true,
   margin: 30,
   startPosition: 1,
   items: 3, 
   responsive : {
      // breakpoint from 0 up
      0 : {margin:5,
      },
      // breakpoint from 480 up
      480 : {margin:10,items:2,
      },
      // breakpoint from 768 up
      800 : {margin:20,items:3, 
      },
      900 : {
         margin:30,
      }
  }



});
$('.slider_btn--prev').click(function() {
   owl.trigger('prev.owl.carousel');
})
$('.slider_btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});

//NAV ICON
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function ()
{
   nav.classList.toggle('nav--mobile')
   menuIcon.classList.toggle('menu-icon-active');
   document.body.classList.toggle('no-scroll'); 
};

