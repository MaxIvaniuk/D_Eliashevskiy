"use strict"

const closeBtn = document.querySelector('#slider__close'); 
const bodyTag = document.querySelector('body');
const header = document.querySelector('.header');
const sliderWindow = document.querySelector('#slider'); 
const sliderContainer = document.querySelector('#slider_list');
let sliderItem;

let currentArr = [];

let sliderImages = {
    food: ['food1.jpg', 'food2.jpg', 'food3.jpg', 'food4.jpg'],
    cars: ['cars1.jpg', 'cars2.jpg', 'cars3.jpg', 'cars4.jpg', 'cars5.jpg', 'cars6.jpg'],
    people: ['people1.jpg', 'people2.jpg', 'people3.jpg', 'people4.jpg', 'people5.jpg', 'people6.jpg'],
    travel: ['travel1.jpg', 'travel2.jpg', 'travel3.jpg', 'travel4.jpg', 'travel5.jpg', 'travel6.jpg'],
    nature: ['nature1.jpg', 'nature2.jpg', 'nature3.jpg', 'nature4.jpg', 'nature5.jpg', 'nature6.jpg'],
    mountains: ['mount1.jpg', 'mount2.jpg', 'mount3.jpg', 'mount4.jpg', 'mount5.jpg'],
}

portfolioWrapper.onclick = function(event) {
    let target = event.target;
    if ( target.className != 'item__description_header' ) return;
    
    switch(target.id) {
        case('nature'):
            currentArr = sliderImages.nature;
            break;
        
        case('people'):
            currentArr = sliderImages.people;
            break;
        
        case('food'):
            currentArr = sliderImages.food;
            break;
        
        case('travel'):
            currentArr = sliderImages.travel;
            break;
        
        case('cars'):
            currentArr = sliderImages.cars;
            break;
        
        case('mountains'):
            currentArr = sliderImages.mountains;
            break;

        default:
            currentArr = [];
    }
    createSliders(currentArr);
    sliderInit();
    showSlider();
    console.log(currentArr);
    console.log(target.id);
}

function sliderInit() {
    new Splide( '.splide', {
        type     : 'loop',
        autoWidth: true,
        rewind   : true,
        focus    : 'center',
        width : '100vw',
		height: '100vh',
        pagination: false,
        trimSpace: false,
    } ).mount();
}

function showSlider() {
    sliderWindow.style.display = 'flex';
    header.style.display = 'none';
    bodyTag.style.backgroundColor = 'rgba(0,0,0,0.9)';
}

function createSliders(arr) {
    for(let item of arr) {
        sliderItem = document.createElement('li');
        let sliderBody = document.createElement('div');
        let sliderImg = `<img src="./src/slider_img/${item}" class="splide__list_img" alt="slider image">`;
        sliderItem.className = 'splide__slide';
        sliderBody.className = 'splide__slide__container';
        
        sliderItem.append(sliderBody);
        sliderBody.innerHTML = sliderImg;
        sliderContainer.append(sliderItem);
    }
}

function removeSlider() {
    while (sliderContainer.firstChild) {
        sliderContainer.removeChild(sliderContainer.firstChild);
    }
}

closeBtn.onclick = () => {
    sliderWindow.style.display = 'none';
    header.style.display = 'block';
    bodyTag.style.backgroundColor = '#fff';
    removeSlider();
    console.log(currentArr);
};



