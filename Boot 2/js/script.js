
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

window.addEventListener('load', () => {
   AOS.init({
     duration: 1000,
     easing: "ease-in-out",
     once: true,
     mirror: false
   });
 });

