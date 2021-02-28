// function modalWindow(){
//     let div = document.querySelector('#modal');
    
//     let openBtn = document.createElement('button');
//     let window = document.createElement('div');
//     let closeBtn = document.createElement('button');
    
//     openBtn.innerHTML = 'Open';
//     window.innerHTML = 'MODAL WINDOW';
//     closeBtn.innerHTML = 'Close';
//     window.style.display = 'none';
    
//     div.append(openBtn);
//     div.append(window);
//     window.append(closeBtn);
    
//     openBtn.onclick = () => window.style.display = 'block';
//     closeBtn.onclick = ()=> window.style.display = 'none';
//   };
  
//   modalWindow();

let container = document.querySelector('#slider_list'); // контейнер слайдера

let closeBtn = document.querySelector('#slider__close'); // кнопка яка буде закривати слайдер
let sliderWindow = document.querySelector('#slider'); // блок слайдера
let bodyTag = document.querySelector('body');
let header = document.querySelector('.header');

let selectedItem;

portfolioWrapper.onclick = function (event) {  // Event delegation
    let target = event.target;
    if ( target.className != 'portfolio__container_item' ) return;
    console.log(target.id);
    showSlider();
}

closeBtn.onclick = () => {
    sliderWindow.style.display = 'none';
    header.style.display = 'block';
};

function showSlider() {
    sliderWindow.style.display = 'block';
    header.style.display = 'none';
}