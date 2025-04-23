const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
 document.body.classList.toggle("Show-mobile-menu"); 
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuCloseButton.click ());

// Intialize Swiper
const swiper = new Swiper('.swiper-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevE1: '.swiper-button-prev',
  },

// Responsive breakpoints
breakpoints: {
  0: {
    sliderPrevView: 1
  },
  768: {
    sliderPrevView: 2
  },
  1024: {
    sliderPrevView: 3
  }
 }
});
