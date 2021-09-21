$(document).ready(function(){
    $('.menu-icon').click(function(){
        $('.nav-bar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('.nav-bar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
    })
   
})