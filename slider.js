let currentIndex = 0;
let autoSlideInterval;

// Function to show a specific slide
function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next slide function
function nextSlide() {
    showSlide(currentIndex - 1);
}

// Previous slide function
function prevSlide() {
    showSlide(currentIndex + 1);
}

// Start automatic sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(prevSlide, 5000); // Change slide every 5 seconds
}

// Stop automatic sliding
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Add event listeners for manual controls
document.querySelector('.next').addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    startAutoSlide();
});
