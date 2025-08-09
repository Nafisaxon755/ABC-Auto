document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const paginationContainer = document.querySelector(".pagination-container");

  let currentIndex = 0;
  const totalSlides = slides.length;

  function createDots() {
    paginationContainer.innerHTML = ""; 
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("click", () => goToSlide(i));
      paginationContainer.appendChild(dot);
    }
  }

  
  
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    const dots = paginationContainer.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateSlider();
  });

  function init() {
    createDots();
    updateSlider(); 
  }

  init();
});
