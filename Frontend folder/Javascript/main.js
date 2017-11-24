$(function(){
    $('.side-navbar').css('display', 'none').show(1500);
    $('.frame-navbar').css('display', 'none').show(665);
    $('#option-icon').css('display', 'none');
    if((screen.width <= 1024)){
        $('.side-navbar').css('display', 'none');
        $('#option-icon').show(100)
    }
    
});