// Simple slideshow for featured coffees
const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelectorAll('img');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].style.transform = 'translateX(-100%)';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.transform = 'translateX(0)';
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)
