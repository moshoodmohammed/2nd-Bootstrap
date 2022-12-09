
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
 
if(document.body.scrollTop >= 200 || document.documentElement.scrollTop >=200);

function black()
{

 var changebackground = document.getElementById('main_navbar');

 changebackground.setAttribute('class','main_navbar active');
};

function transparent()
{

 var changebackground = document.getElementById('main_navbar');

 changebackground.setAttribute('class','main_navbar');
};