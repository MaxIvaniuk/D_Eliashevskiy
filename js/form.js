"use strict"

const body = document.querySelector('body')
const form = document.getElementById("contact-form");
const formButton = document.getElementsByClassName("form__button");
const gratitude = document.querySelector('#gratitude');
const formButtonId = document.querySelector("#form-button");

form.onsubmit = function(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();

  xhr.open("POST", form.action, true);

  xhr.onload = function(e) {

    if (xhr.status === 200) {
      animateSuccess();
      setTimeout(function(){
        showGratitude();
      },4000);
      
    } else {
      animateError();
      alert('Something went wrong please try again');
    }
  };

  xhr.send(formData);
  setTimeout(function(){
    form.reset();
  },4000);
};

let showGratitude = () => {
  gratitude.style.display = 'flex';
  closeGratitude();
};

let closeGratitude = () => { body.onclick = () => { gratitude.style.display = 'none'; } };

function animateSuccess() {
    formButtonId.classList.remove('animate');
    formButtonId.classList.add('animate');
    formButtonId.classList.add('success');

    
    formButtonId.classList.add('animate');
    setTimeout(function(){
      formButtonId.classList.remove('animate');
    },4000);
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
