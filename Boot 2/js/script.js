
//Header Background
var changebackground = document.getElementById('main_navbar');

window.addEventListener('scroll',() =>
{

 if(window.pageYOffset > 200)
 {
    black();
 }
 else
 {
    transparent();
 }
});
 
function black()
{

 var changebackground = document.getElementById('main_navbar');

 changebackground.setAttribute('class','navbar main_navbar navbar-expand-lg py-1 fixed-top navbar-dark active');
};

function transparent()
{

 var changebackground = document.getElementById('main_navbar');

 changebackground.setAttribute('class','navbar main_navbar navbar-expand-lg py-1 fixed-top navbar-dark');
};

//Page Load
window.addEventListener('load', () => {
   AOS.init({
     duration: 1000,
     easing: "ease-in-out",
     once: true,
     mirror: false
   });
 });

 //Back to top
 var backtotop = document.getElementById('back_to_top');

 window.addEventListener('scroll',() =>
 { 
   if(window.pageYOffset > 300)
   {
      active();
   }
   else{
      notactive();
   }
 });

 function active()
 {
   backtotop.setAttribute('class','back_to_top back_to_top_active');
 };

 function notactive()
 {
   backtotop.setAttribute('class','back_to_top');
 };

 //portfolio

 var port_images_all = document.getElementById('port_images_all');
 var port_images_app = document.getElementById('port_images_app');
 var port_images_card = document.getElementById('port_images_card');
 var port_images_web = document.getElementById('port_images_web');
 

 function buttonall()
 {
  port_images_all.setAttribute('id','port_images_all');
  port_images_all.setAttribute('class','row  portfolio-container  port_images_active');
  port_images_app.setAttribute('class','row  portfolio-container port_images');
  port_images_web.setAttribute('class','row  portfolio-container port_images');
  port_images_card.setAttribute('class','row  portfolio-container port_images');
 }

 function buttonapp()
 {
  port_images_all.setAttribute('id','port_images_none');
  port_images_all.setAttribute('class','row  portfolio-container port_images');
  port_images_app.setAttribute('class',' row  portfolio-container port_images_active');
  port_images_web.setAttribute('class','row  portfolio-container port_images');
  port_images_card.setAttribute('class','row  portfolio-container port_images');
 }


 function buttoncard()
 {
  port_images_all.setAttribute('id','port_images_none');
  port_images_all.setAttribute('class','row  portfolio-container  port_images');
  port_images_app.setAttribute('class','row  portfolio-container  port_images');
  port_images_web.setAttribute('class','row  portfolio-container port_images');
  port_images_card.setAttribute('class','row  portfolio-container port_images_active');
 }

 function buttonweb()
 {
  port_images_all.setAttribute('id','port_images_none');
  port_images_all.setAttribute('class','row  portfolio-container port_images');
  port_images_app.setAttribute('class','row  portfolio-container port_images');
  port_images_web.setAttribute('class','row  portfolio-container port_images_active');
  port_images_card.setAttribute('class','row  portfolio-container port_images');
 }


 //portfolio details
 
$('.owl-carousel').owlCarousel({
  loop:true,
 
  nav:false,
  autoplay:true,
  autoplayTimeout:7000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})