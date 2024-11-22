$(window).scroll(function() {
    if ($('.navbar').offset().top > 50) {
        $('.navbar-fixed-top').addClass('top-nav-collapse'); // Corrected method name
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse'); // Corrected method name
    }
});

$(function() {
    $('.page-scroll a').bind('click', function(event) { // Added event parameter
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo'); // Added missing comma
        event.preventDefault(); // Moved this inside the function
    });
});