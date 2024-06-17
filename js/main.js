// ========== Swiper Category ============= //

let swiperContainer = new Swiper(".category-container", {
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    648: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1300: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
  },
});

// ========== Tabs Category ============= //

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      console.log(tabContent);
      tabContent.classList.remove("active-tab");
    });

    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});

// ========== Swiper product Category ============= //

let swiperNewContainer = new Swiper(".new-container", {
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    648: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// ========== Details Image Gallery ============= //

function imgGallery() {
  const mainImg = document.querySelector(".details-img");
  smallImg = document.querySelectorAll(".details-small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

// ========== Incre / Decre button============= //

let nums = document.querySelectorAll(".num");
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");

plus.forEach((button, index) => {
  button.addEventListener("click", () => {
    let currentNum = parseInt(nums[index].innerText);
    if (currentNum < 9) {
      nums[index].innerText = "0" + (currentNum + 1);
    } else {
      nums[index].innerText = currentNum + 1;
    }
  });
});

minus.forEach((button, index) => {
  button.addEventListener("click", () => {
    let currentNum = parseInt(nums[index].innerText);
    if (currentNum > 1) {
      if (currentNum < 11) {
        nums[index].innerText = "0" + (currentNum - 1);
      } else {
        nums[index].innerText = currentNum - 1;
      }
    }
  });
});

// ========== Login/Register page ============= //

// const signup = document.querySelector(".register-btn");
// const login = document.querySelector(".login-btn");
// const container = document.querySelector(".login-register");

// login.addEventListener("click", () => {
//   container.classList.add(".login-display");
//   console.log(container.classList.add(".login-display"));
// });

// login.addEventListener("click", () => {
//   container.classList.add(".registration-display");
// });

// ========== Checkout payment page ============= //

// const checkoutTabs = document.querySelectorAll("[data-target]");
// const checkoutTabContents = document.querySelectorAll("[content]");

// checkoutTabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     const target = document.querySelector(tab.dataset.target);
//     checkoutTabContents.forEach((tabContent) => {
//       console.log(tabContent);
//       tabContent.classList.remove("active-tab");
//     });

//     target.classList.add("active-tab");

//     checkoutTabs.forEach((tab) => {
//       tab.classList.remove("active-tab");
//     });

//     tab.classList.add("active-tab");
//   });
// });
