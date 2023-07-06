// открытие меню бургера
$(document).ready(function() {
    $('.main_menu').click(function(){
        $('.burger, .main_menu').addClass('open-burger');
        $('.burger, .main_menu').removeClass('close-burger');
        $('body').addClass('lock');
    });
});


// закрытие меню бургера по крестику
$(document).ready(function() {
    $('.burger_menu').click(function(){
        $('.burger, .main_menu').addClass('close-burger');
        $('.burger, .main_menu').removeClass('open-burger');
        $('body').removeClass('lock');
    });
});


// переход по ссылке для иконки VK
$(function() {
    $('.footer_vk, .burger_vk_logo').click(function() {
        window.open('https://vk.com/objeika');
    });
});


// закрытие меню бургера по клику вне него 
window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.main_menu') && !target.closest('.burger_menu') && !target.closest('.burger')) { 
        $('.burger, .main_menu').addClass('close-burger');
        $('.burger, .main_menu').removeClass('open-burger');
        $('body').removeClass('lock');
    }
  })

