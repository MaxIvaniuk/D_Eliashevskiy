let container = document.querySelector('#slider_list');
let closeBtn = document.querySelector('#slider__close'); 
let sliderWindow = document.querySelector('#slider'); 
let bodyTag = document.querySelector('body');
let header = document.querySelector('.header');

let selectedItem;

portfolioWrapper.onclick = function (event) {
    let target = event.target;
    if ( target.className == 'portfolio__container_item' || target.className == 'item__description' ) return;
    console.log(target.id);
    showSlider();
}

function showSlider() {
    sliderWindow.style.display = 'block';
    header.style.display = 'none';
    bodyTag.style.backgroundColor = 'rgba(0,0,0,0.9)';
}

closeBtn.onclick = () => {
    sliderWindow.style.display = 'none';
    header.style.display = 'block';
    bodyTag.style.backgroundColor = '#fff';
};

// Google Maps
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
});