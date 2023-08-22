let currentSlide = 0;
const slides = document.getElementsByClassName("slider");
slides[1].style.display = "none";
slides[2].style.display = "none";
slides[3].style.display = "none";
slides[4].style.display = "none";






function changeSlide(direction) {
    slides[currentSlide].style.display = "none";
    
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    slides[currentSlide].style.display = "block";
}

function nextSlide() {
    changeSlide(1);
}

function autoSlide() {
    nextSlide();
}

// Initial slide display
slides[currentSlide].style.display = "block";

// Set up auto slide every 5 seconds
setInterval(autoSlide, 4000);

