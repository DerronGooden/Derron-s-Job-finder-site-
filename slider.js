let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let totalSlides = slides.length;

// Show a specific slide
function showSlide(n) {
    // Wrap around if needed
    if (n >= totalSlides) n = 0;
    if (n < 0) n = totalSlides - 1;

    // Remove active from all slides
    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove("active");
    }

    // Add active to the correct slide
    slides[n].classList.add("active");

    slideIndex = n;
}

// Next slide
function nextSlide() {
    showSlide(slideIndex + 1);
}

// Previous slide
function prevSlide() {
    showSlide(slideIndex - 1);
}

// Auto-play every 3 seconds
setInterval(nextSlide, 3000);

