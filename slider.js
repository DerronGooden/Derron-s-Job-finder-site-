let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

// Auto-play: change slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);

// Show a specific slide
function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[n].classList.add("active");
}

// Go to next slide
function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

// Go to previous slide
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}
