
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
   var backtotop = document.getElementById('back_to_top');
   backtotop.setAttribute('class','back_to_top back_to_top_active');
 };

 function notactive()
 {
   var backtotop = document.getElementById('back_to_top');
   backtotop.setAttribute('class','back_to_top');
 };

