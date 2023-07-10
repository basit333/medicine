/*
------------------------------
Swiper Slider Products
------------------------------
*/

var swiper = new Swiper(".productSlider", {
  slidesPerView: 1,
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  navigation: {
    nextEl: ".swiper-button-next.product--btn-next",
    prevEl: ".swiper-button-prev.product--btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
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
Swiper Slider Testimonials
------------------------------
*/

var swiper = new Swiper(".testimonialSlider", {
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next.testimonial--next",
    prevEl: ".swiper-button-prev.testimonial--prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
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
-----------------------------------------
  Swiper Slider Stories Product Slider
-----------------------------------------
*/

var swiper = new Swiper(".storiesProductSlider", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next.stories__card--btn-next",
    prevEl: ".swiper-button-prev.stories__card--btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
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
if (cartMinusBtns) {
  cartMinusBtns.forEach((btn) => {
    btn.addEventListener("click", decreaseValue);
  });
}

if (cartPlusBtns) {
  cartPlusBtns.forEach((btn) => {
    btn.addEventListener("click", increaseValue);
  });
}

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
if (accountBtn) {
  accountBtn.addEventListener("click", showAccountDropDown);
}

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

const videoBtns = document.querySelectorAll(".video-pop-up-btn");
const videoCloseBtns = document.querySelectorAll(".boxclose");
const fadeOverlays = document.querySelectorAll(".fade");
const lightboxes = document.querySelectorAll(".light");
const videoIframes = document.querySelectorAll(".video-popup-content");

if (videoBtns) {
  videoBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => lightbox_open(index));
  });
}

if (videoCloseBtns) {
  videoCloseBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => lightbox_close(index));
  });
}

if (fadeOverlays) {
  fadeOverlays.forEach((overlay, index) => {
    overlay.addEventListener("click", () => lightbox_close(index));
  });
}

function lightbox_open(index) {
  lightboxes[index].style.display = "block";
  fadeOverlays[index].style.display = "block";
}

function lightbox_close(index) {
  lightboxes[index].style.display = "none";
  fadeOverlays[index].style.display = "none";

  // Stop video playback
  videoIframes[index].src = videoIframes[index].src; // Resets the video source and stops playback

  // Mute the video
  videoIframes[index].muted = true;
}

/*
------------------------------
        Tab Componenet
------------------------------
*/

const tabBtnContainer = document.querySelector(".tab__component--container");
const tabBtns = document.querySelectorAll(".tab__component--btn");
const tabContentContainers = document.querySelectorAll(".tab__component--content-container");

if (tabBtnContainer) {
  tabBtnContainer.addEventListener("click", function (e) {
    if (!e.target.classList.contains("tab__component--btn")) {
      return; // Do nothing if the clicked element is not a tab button
    }

    const clickedBtn = e.target;
    const clickedTabIndex = clickedBtn.getAttribute("data-tab");

    // Remove active classes from all tab buttons
    if (tabBtns) {
      tabBtns.forEach((btn) => {
        btn.querySelector(".tab__component--btn-dot").classList.remove("tab__component--btn-dot-active");
        btn.querySelector(".tab__component--btn-line").classList.remove("tab__component--btn-line-active");
      });
    }

    // Add active classes to the clicked tab button
    clickedBtn.querySelector(".tab__component--btn-dot").classList.add("tab__component--btn-dot-active");
    clickedBtn.querySelector(".tab__component--btn-line").classList.add("tab__component--btn-line-active");

    // Remove active classes from all tab content containers
    tabContentContainers.forEach((container) => {
      container.classList.remove("tab__component--content-container-active");
    });

    // Add active class to the corresponding tab content container
    document.querySelector(`.tab__component--${clickedTabIndex}`).classList.add("tab__component--content-container-active");
  });
}

/*
----------------------------------------
      Checkout Form Other Address
----------------------------------------
*/
const otherAddressBtn = document.querySelector(".checkout__billing--details-other-btn");
const otherAddressContainer = document.querySelector(".checkout__billing--details-other-address-box");

if (otherAddressBtn && otherAddressContainer) {
  otherAddressBtn.addEventListener("click", function (event) {
    event.preventDefault();
    otherAddressContainer.classList.toggle("checkout__billing--details-other-address-box-active");
  });
}

/*
----------------------------------------
      Checkout Form Add Note
----------------------------------------
*/

const addNoteBtn = document.querySelector(".checkout__add--note-btn");
const addNoteTextArea = document.querySelector(".checkout__add--note-textarea");

if (addNoteBtn && addNoteTextArea) {
  addNoteBtn.addEventListener("click", function (event) {
    event.preventDefault();
    addNoteTextArea.classList.toggle("checkout__add--note-textarea-active");
  });
}

/*
----------------------------------------
      Checkbox Shipping Method
----------------------------------------
*/

const checkboxShippingMethod = document.querySelectorAll(".checkout__shipping--method-checkbox");

// Add click event listener to each checkbox
if (checkboxShippingMethod) {
  checkboxShippingMethod.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
      // Remove the active class from all checkboxes
      checkboxShippingMethod.forEach(function (checkbox) {
        checkbox.classList.remove("checkout__shipping--method-checkbox-active");
      });

      // Add the active class to the clicked checkbox
      this.classList.add("checkout__shipping--method-checkbox-active");
    });
  });
}

/*
----------------------------------------
      Checkbox Payment Method
----------------------------------------
*/

const checkboxPaymentMethod = document.querySelectorAll(".checkout__payment--method-checkbox");

// Add click event listener to each checkbox
if (checkboxPaymentMethod) {
  checkboxPaymentMethod.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
      // Remove the active class from all checkboxes
      checkboxPaymentMethod.forEach(function (checkbox) {
        checkbox.classList.remove("checkout__payment--method-checkbox-active");
      });

      // Add the active class to the clicked checkbox
      this.classList.add("checkout__payment--method-checkbox-active");
    });
  });
}
