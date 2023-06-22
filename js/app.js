/*
------------------------------
Swiper Slider
------------------------------
*/
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 50,
//     },
//   },
// });
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

//

var swiper = new Swiper(".mySwiper", {
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

/*
------------------------------
        Mobile Navbar
------------------------------
*/
// Mobile Navbar Variables
const navOpenBtn = document.querySelector(".nav__menu--btn-open");
const navCloseBtn = document.querySelector(".nav__menu--btn-close");
const navMobileMenu = document.querySelector(".mobile__nav--links");

if (navOpenBtn) {
  navOpenBtn.addEventListener("click", function () {
    navMobileMenu.classList.add("mobile__nav--links-open");
  });
}

if (navCloseBtn) {
  navCloseBtn.addEventListener("click", function () {
    navMobileMenu.classList.remove("mobile__nav--links-open");
  });
}

/*
------------------------------
        Cart Variables
------------------------------
*/
const cartBtn = document.querySelector(".navbar__cart--btn");
const cartContainer = document.querySelector(".nav__cart--container");
const cartCloseBtn = document.querySelector(".nav__cart--btn-close");

if (cartBtn) {
  cartBtn.addEventListener("click", function () {
    cartContainer.classList.add("nav__cart--container-open");
  });
}

if (cartCloseBtn) {
  cartCloseBtn.addEventListener("click", function () {
    cartContainer.classList.remove("nav__cart--container-open");
  });
}

/*
------------------------------
          Cart input
------------------------------
*/
// Get the input element and buttons
const cartInputs = document.querySelectorAll(".nav__cart--container-product-input");
const cartMinusBtns = document.querySelectorAll(".nav__cart--container-product-input-minus-btn");
const cartPlusBtns = document.querySelectorAll(".nav__cart--container-product-input-plus-btn");

// Add click event listeners to the buttons
cartMinusBtns.forEach((btn) => {
  btn.addEventListener("click", decreaseValue);
});

cartPlusBtns.forEach((btn) => {
  btn.addEventListener("click", increaseValue);
});

// Function to decrease the input value
function decreaseValue(event) {
  const input = event.target.parentNode.querySelector(".nav__cart--container-product-input");
  let value = parseInt(input.value);
  if (value > input.min) {
    value--;
    input.value = value;
  }
}

// Function to increase the input value
function increaseValue(event) {
  const input = event.target.parentNode.querySelector(".nav__cart--container-product-input");
  let value = parseInt(input.value);
  if (value < input.max) {
    value++;
    input.value = value;
  }
}

/*
------------------------------
          Account Btn
------------------------------
*/
const accountBtn = document.querySelector(".navbar__account--btn");
const accountBtnDropDown = document.querySelector(".navbar__account--dropdown");

// Function to show the accountBtnDropDown
function showAccountDropDown() {
  accountBtnDropDown.style.display = "block";
}

// Function to hide the accountBtnDropDown
function hideAccountDropDown() {
  accountBtnDropDown.style.display = "none";
}

// Event listener for the accountBtn click event
accountBtn.addEventListener("click", showAccountDropDown);

// Event listener for the document click event
document.addEventListener("click", function (event) {
  const target = event.target;

  // Check if the click occurred outside the accountBtnDropDown
  if (!accountBtn.contains(target) && !accountBtnDropDown.contains(target)) {
    hideAccountDropDown();
  }
});

/*
------------------------------
          Video Popup
------------------------------
*/
const videoBtn = document.querySelector(".favourite__left--container-btn");
const videoCloseBtn = document.querySelector(".boxclose");
const fadeOverlay = document.querySelector("#fade");
const videoPlayer = document.getElementById("light");

videoBtn.addEventListener("click", lightbox_open);
videoCloseBtn.addEventListener("click", lightbox_close);
fadeOverlay.addEventListener("click", lightbox_close);

function lightbox_open() {
  document.getElementById("light").style.display = "block";
  document.getElementById("fade").style.display = "block";
}

function lightbox_close() {
  document.getElementById("light").style.display = "none";
  document.getElementById("fade").style.display = "none";

  // Stop video playback
  const videoIframe = document.querySelector(".video-popup-content");
  videoIframe.src = videoIframe.src; // Resets the video source and stops playback

  // Mute the video
  videoIframe.muted = true;
}
