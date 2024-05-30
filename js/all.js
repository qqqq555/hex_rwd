$(document).ready(function(){
    $('.fa-heart').click(function(event){
        $(this).toggleClass('fa-solid fa-regular');
    });
    $('.menu-toggle').click(function() {
        $('nav ul').toggle();
    });
    // $('.to-register').click(function(e) {
    //     e.preventDefault();
    //     $('.login').removeClass('active-form');
    //     $('.register').addClass('active-form');
    // });

    // $('.to-login').click(function(e) {
    //     e.preventDefault();
    //     $('.register').removeClass('active-form');
    //     $('.login').addClass('active-form');
    // });

})