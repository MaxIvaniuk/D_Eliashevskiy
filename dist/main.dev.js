"use strict";

// Sticky Header
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $('.header').addClass('sticky');
  } else {
    $('.header').removeClass('sticky');
  }
}); // Mobile Navigation

$('.mobile-toggle').click(function () {
  if ($('.header').hasClass('open-nav')) {
    $('.header').removeClass('open-nav');
  } else {
    $('.header').addClass('open-nav');
  }
});
$('.header li a').click(function () {
  if ($('.header').hasClass('open-nav')) {
    $('.navigation').removeClass('open-nav');
    $('.header').removeClass('open-nav');
  }
}); // Navigation Scroll - ljepo radi materem

$('nav a').click(function (event) {
  var id = $(this).attr("href");
  var offset = 70;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 500);
  event.preventDefault();
}); // Tilt effect

$('.portfolio__container_item').tilt({
  scale: 1.1,
  perspective: 500
}); // contact button scroll

$('contact_button').click(function (event) {
  var id = $(this).attr("href");
  var offset = 70;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 500);
  event.preventDefault();
}); // // Magnetic button
// const lerp = (a, b, n) => (1 - n) * a + n * b;
// const distance = (x1, y1, x2, y2) => {
//     var a = x1 - x2;
//     var b = y1 - y2;
//     return Math.hypot(a, b);
// }
// const getMousePos = (e) => {
//   let posx = 0,
//       posy = 0;
//   if (!e) e = window.event;
//   if (e.pageX || e.pageY) {
//       posx = e.pageX;
//       posy = e.pageY;
//   }
//   else if (e.clientX || e.clientY) {
//       posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
//       posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
//   }
//   return { x: posx, y: posy };
// }
// class MagneticBtn {
//   constructor(el, amt = 1, distance = 0.1) {
//     this.DOM = {el: el};
//     this.amt = amt;
//     this.distance = distance;
//     this.DOM.text = this.DOM.el.querySelector('.btn__txt');
//     this.styles = {
//       tx: {prev: 0, now: 0},
//       ty: {prev: 0, now: 0}
//     };
//     this.calculateSizePosition();
//     this.initEvents();
//     this.render();
//   }
//   calculateSizePosition() {
//     this.rect = this.DOM.el.getBoundingClientRect();
//     this.distanceToTrigger = this.rect.width * this.distance;
//   }
//   initEvents() {
//     this.onResize = () => this.calculateSizePosition();
//     window.addEventListener('resize', this.onResize);
//   }
//   render() {
//     const distanceMouseButton = distance(
//       mousepos.x,
//       mousepos.y,
//       this.rect.left + this.rect.width / 2,
//       this.rect.top + this.rect.height / 2);
//     let x = 0,
//         y = 0;
//     if ( distanceMouseButton < this.distanceToTrigger ) {
//       x = (mousepos.x - (this.rect.left + this.rect.width / 2)) * 0.3;
//       y = (mousepos.y - (this.rect.top + this.rect.height / 2)) * 0.3;
//     }
//     this.styles.tx.now = x;
//     this.styles.ty.now = y;
//     for (const key in this.styles ) {
//       this.styles[key].prev = lerp(
//         this.styles[key].prev,
//         this.styles[key].now,
//         this.amt);
//     }
//     this.DOM.el.style.transform = `
//       translate3d(${this.styles.tx.prev}px,
//                   ${this.styles.ty.prev}px, 0)`;
//     this.DOM.text.style.transform = `
//       translate3d(${-this.styles.tx.prev * 0.6}px,
//                   ${-this.styles.ty.prev * 0.6}px, 0)`;
//     requestAnimationFrame(() => this.render());
//   }
// }
// let mousepos = { x: 0, y: 0 };
// document.addEventListener('mousemove', ev => mousepos = getMousePos(ev));
// const btn = new MagneticBtn(document.querySelector('.btn'), 0.15, 0.5);