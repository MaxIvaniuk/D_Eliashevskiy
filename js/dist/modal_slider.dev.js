"use strict";

var container = document.querySelector('#slider_list');
var closeBtn = document.querySelector('#slider__close');
var sliderWindow = document.querySelector('#slider');
var bodyTag = document.querySelector('body');
var header = document.querySelector('.header');
var selectedItem;

portfolioWrapper.onclick = function (event) {
  var target = event.target;
  if (target.className == 'portfolio__container_item' || target.className == 'item__description') return;
  console.log(target.id);
  showSlider();
};

function showSlider() {
  sliderWindow.style.display = 'block';
  header.style.display = 'none';
  bodyTag.style.backgroundColor = 'rgba(0,0,0,0.9)';
}

closeBtn.onclick = function () {
  sliderWindow.style.display = 'none';
  header.style.display = 'block';
  bodyTag.style.backgroundColor = '#fff';
}; // Google Maps


map = new google.maps.Map(document.getElementById('map'), {
  center: {
    lat: -34.397,
    lng: 150.644
  },
  zoom: 8
});