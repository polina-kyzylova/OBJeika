$(document).ready(function() {
    $('.main_menu').click(function(){
        $('.burger, .main_menu').addClass('open-burger');
        $('.burger, .main_menu').removeClass('close-burger');
        $('body').addClass('lock');
    });
});


$(document).ready(function() {
    $('.burger_menu').click(function(){
        $('.burger, .main_menu').addClass('close-burger');
        $('.burger, .main_menu').removeClass('open-burger');
        $('body').removeClass('lock');
    });
});
