"use strict";

var body = document.querySelector('body');
var form = document.getElementById("contact-form");
var formButton = document.getElementsByClassName("form__button");
var gratitude = document.querySelector('#gratitude');

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
  }, 4000);
};

var formButtonId = document.querySelector("#form-button");

function animateSuccess() {
  formButtonId.classList.remove('animate');
  formButtonId.classList.add('animate');
  formButtonId.classList.add('success');
  formButtonId.classList.add('animate');
  setTimeout(function () {
    formButtonId.classList.remove('animate');
  }, 4000);
}

;

for (var i = 0; i < formButton.length; i++) {
  formButton[i].addEventListener('click', animateSuccess, false);
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

  for (var _i = 0; _i < formButton.length; _i++) {
    formButton[_i].addEventListener('click', animateError, false);
  }
}

;

var showGratitude = function showGratitude() {
  gratitude.style.display = 'flex';
  closeGratitude();
};

var closeGratitude = function closeGratitude() {
  body.onclick = function () {
    gratitude.style.display = 'none';
  };
};