// Google Maps
let map;
let pos = { lat: 49.83886817299271, lng: 24.02836983444522 }; 
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: pos,
    zoom: 15,
  });
  const marker = new google.maps.Marker({
    position: pos,
	map: map,
	icon: '../../src/img/Pin.svg',
  });
}

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

// Tilt effect
$('.portfolio__container_item').tilt({
    scale: 1.1,
    perspective: 500
});

// contact button scroll
$('contact_button').click(function(event) {
    let id = $(this).attr("href");
    let offset = 70;
    let target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
