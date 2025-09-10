const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Product Carousel
$(".product-carousel .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 25,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    768: {
      items: 1,
      nav: false,
    },
    991: {
      items: 4,
      nav: false,
      loop: false,
    },
  },
});

// Blog Carousel
$(".blog-carousel .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 30,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    991: {
      items: 2,
      loop: true,
    },
  },
});

// Blog Carousel
$(".brand-carousel .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 80,
  responsiveClass: true,
  responsive: {
    0: {
      items: 4,
    },
    768: {
      items: 4,
    },
    991: {
      items: 4,
      loop: true,
    },
  },
});

// AOS
AOS.init();
