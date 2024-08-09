// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   grabCursor: true,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const totalSlides = slides.length;
  const slidesToShow = 4;
  let index = 0;

  function updateSlider() {
      slider.style.transform = `translateX(-${index * (100 / slidesToShow)}%)`;
  }

  function showNextSlides() {
      index = (index + 1) % (totalSlides - slidesToShow + 1);
      updateSlider();
  }

  function showPrevSlides() {
      index = (index - 1 + (totalSlides - slidesToShow + 1)) % (totalSlides - slidesToShow + 1);
      updateSlider();
  }

  prevButton.addEventListener('click', showPrevSlides);
  nextButton.addEventListener('click', showNextSlides);

  // Optional: auto-slide functionality
  setInterval(showNextSlides, 3000); // Change slide every 3 seconds
});
