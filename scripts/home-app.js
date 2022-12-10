const btn = document.querySelector('button.mobile-menu-button');
const btnClose = document.querySelector('button.mobile-menu-button-close');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  btn.classList.toggle('hidden');
  btnClose.style.display = 'block';
});

btnClose.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  btn.classList.toggle('hidden');
  btnClose.style.display = 'none';
});




var mainSlider = new Swiper('.portfolio', {
  loop: true,
  speed: 500,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// const servicesSlider = new Swiper('#swiper', {

//   autoplay: {
//     delay: 2000,
//   },
//   disableOnInteraction: false,
//   loop: true,
//   speed: 500,
//   slidesPerView: 4,
//   spaceBetween: 36,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     renderBullet: (index, className) => {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   },
//   navigation: {
//     nextEl: '.services-button-prev',
//     prevEl: '.services-button-next',
//   },
//   breakpoints: {
//     0:{
//       slidePerViiew: 1,
//     },
//     360: {
//       slidesPerView: 1,
//     },
//     580: {
//       slidesPerView: 2,
//     },
//     678: {
//       slidesPerView: 3,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//   },
// });


// function toggleLoginForm() {
//   // console.log('click');
//   document.querySelector('.login-forms').classList.toggle('hidden');
  
// }


// function validateForm(){

//   var name = document.getElementById('name');
//   var number = document.getElementById('number');
//   var desc = document.getElementById('desc');

//   if(!name.value){
//     name.style.borderBottom = '2px solid red';
//     return false;
//   }
//   if(!number.value){
//     number.style.borderBottom = '2px solid red';
//     return false;
//   }

//   if(!desc.value){
//     desc.style.borderBottom = '2px solid red';
//     return false;
//   }

//   return true;

// }
