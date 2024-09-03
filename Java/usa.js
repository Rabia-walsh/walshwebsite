let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = currentIndex * -100;
    slides.style.transform = `translateX(${offset}%)`;
    updateNavButtons();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function updateNavButtons() {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach((button, i) => {
        if (i === currentIndex) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function currentSlide(index) {
    showSlide(index - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    updateNavButtons();
    showSlide(0);
});
