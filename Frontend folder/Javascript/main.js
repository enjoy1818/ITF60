$(function(){
    $('.side-navbar').css('display', 'none').show(1500);
    $('.frame-navbar').css('display', 'none').show(665);
    $('.user-image').css('display', 'none').show(1500);
    $('.option').css('display', 'none');
    if((screen.width <= 1024)){
        $('.side-navbar').hide();
        $('.option').show(100);
    }
    
});