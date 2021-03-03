"use strict";

var body = document.querySelector('body');
var form = document.getElementById("contact-form");
var formButton = document.getElementsByClassName("form__button");
var gratitude = document.querySelector('#gratitude');
var formButtonId = document.querySelector("#form-button");

form.onsubmit = function (e) {
  e.preventDefault();
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", form.action, true);

  xhr.onload = function (e) {
    if (xhr.status === 200) {
      animateSuccess();
      setTimeout(function () {
        showGratitude();
      }, 4000);
    } else {
      animateError();
      alert('Something went wrong please try again');
    }
  };

  xhr.send(formData);
  setTimeout(function () {
    form.reset();
  }, 3500);
};

var showGratitude = function showGratitude() {
  gratitude.style.display = 'flex';
  closeGratitude();
};

var closeGratitude = function closeGratitude() {
  body.onclick = function () {
    gratitude.style.display = 'none';
  };
};

function animateSuccess() {
  formButtonId.classList.remove('animate');
  formButtonId.classList.add('animate');
  formButtonId.classList.add('success');
  setTimeout(function () {
    formButtonId.classList.remove('animate');
  }, 4000);
}

;

for (var i = 0; i < formButton.length; i++) {
  formButton[i].addEventListener('submit', animateSuccess, false);
}

;

function animateError() {
  formButtonId.classList.remove('animate');
  formButtonId.classList.add('animate');
  formButtonId.classList.add('error');
  formButtonId.classList.add('animate');
  setTimeout(function () {
    formButtonId.classList.remove('animate');
  }, 6000);
}

;