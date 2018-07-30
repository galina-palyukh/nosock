$(function(){
    $('.burger').on('click', function(){
        $('.mob-navbar').stop();
        $(this).toggleClass('active');
        $('.mob-navbar').slideToggle(400);
    });
    $(window).on('resize', function(){
        if ($(window).width() > 550) {
            $('.mob-navbar').css('display', 'none');
            $('.burger').removeClass('active');
        }
    });
});