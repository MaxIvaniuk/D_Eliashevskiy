"use strict";

var map;
var posCenter = {
  lat: 49.83886817299271,
  lng: 24.02836983444522
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: posCenter,
    zoom: 15
  });
  var marker = new google.maps.Marker({
    position: posCenter,
    map: map,
    icon: '../../src/img/Pin.svg'
  });
  infoWindow = new google.maps.InfoWindow();
  var locationButton = document.createElement("button");
  locationButton.textContent = "Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent("Your location");
        infoWindow.open(map);
        map.setCenter(pos);
      }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ? "Error: The Geolocation service failed." : "Error: Your browser doesn't support geolocation.");
  infoWindow.open(map);
}