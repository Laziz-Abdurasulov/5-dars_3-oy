// /**Btn burger */

// var btnBurger = $('.burger-mobile');

// btnBurger.on('click',function () {
//    if(!$(this).hasClass('active-mobile-btn')){
//        $(this).addClass('active-mobile-btn');
//        $('body').addClass('active-menu');
//    }else{
//        $(this).removeClass('active-mobile-btn');
//        $('body').removeClass('active-menu');
//    }
// });

// 	$('.overlay-menu').on('click', function () {
// 		$('body').removeClass('active-menu');
// 		$('.burger-mobile').removeClass('active-mobile-btn');
// 	})

// /*
//   Change figures of button after click
// */

// const btn3lines = document.querySelectorAll(".burger-btn");
// Array.from(btn3lines, elem => elem.addEventListener("click", toggleClasses));

// function toggleClasses(event) {
//   console.log(event.target);
//   if (event.target.classList.contains(".burger-btn")) {
//     toggleClass(event.target);
//   } else {
//     toggleClass(event.target.parentNode);
//   }
// }

// function toggleClass(elem) {
//   elem
//     .querySelector(".burger-btn__top")
//     .classList.toggle("burger-btn__top--click");
//   elem
//     .querySelector(".burger-btn__center")
//     .classList.toggle("burger-btn__center--click");
//   elem
//     .querySelector(".burger-btn__bottom")
//     .classList.toggle("burger-btn__bottom--click");
// }

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});