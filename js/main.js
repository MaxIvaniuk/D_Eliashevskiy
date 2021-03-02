// Sticky Header
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.header').hasClass('open-nav')) {
        $('.header').removeClass('open-nav');
    } else {
        $('.header').addClass('open-nav');
    }
});

$('.header li a').click(function() {
    if ($('.header').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.header').removeClass('open-nav');
    }
});

// Navigation Scroll
$('nav a').click(function(event) {
    let id = $(this).attr("href");
    let offset = 70;
    let target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

$('.scrollBtn').click(function(event){
    let id = $(this).attr("href");
    let offset = 10;
    let target = $(id).offset().top - offset;
    console.log(target);
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
// Tilt effect
$('.portfolio__container_item').tilt({
    scale: 1.1,
    perspective: 500
});