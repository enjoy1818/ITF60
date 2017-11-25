$(function() {
    $('.side-nav-toggle').click(function() {
        $('.side-navbar').show(100);
    });
    $('.side-nav-close').click(function() {
        $('.side-navbar').hide();
        location.reload(true);
    });
});