"use strict"

const body = document.querySelector('body')
const form = document.getElementById("contact-form");
const formButton = document.getElementsByClassName("form__button");
const gratitude = document.querySelector('#gratitude');
console.log(gratitude.style);

form.onsubmit = function(e) {
  e.preventDefault();

  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();

  xhr.open("POST", form.action, true);

  xhr.onload = function(e) {

    if (xhr.status === 200) {
      animateSuccess();
      showGratitude();
    } else {
      animateError();
      alert('Something went wrong please try again');
    }
  };

  xhr.send(formData);
  form.reset();
};

const formButtonId = document.querySelector("#form-button");

function animateSuccess() {
    formButtonId.classList.remove('animate');
    formButtonId.classList.add('animate');
    formButtonId.classList.add('success');

    
    formButtonId.classList.add('animate');
    setTimeout(function(){
      formButtonId.classList.remove('animate');
    },6000);
};

for (let i = 0; i < formButton.length; i++) {
    formButton[i].addEventListener('click', animateSuccess, false);
};

function animateError() {
    formButtonId.classList.remove('animate');
    formButtonId.classList.add('animate');
    formButtonId.classList.add('error');

    
    formButtonId.classList.add('animate');
    setTimeout(function(){
      formButtonId.classList.remove('animate');
    },6000);

    for (let i = 0; i < formButton.length; i++) {
        formButton[i].addEventListener('click', animateError, false);
    }
};

let showGratitude = () => {
    gratitude.style.display = 'flex';
    closeGratitude();
};

let closeGratitude = () => { body.onclick = () => { gratitude.style.display = 'none'; } };