let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
let changeSlide = 0;
let slideInterval;
function showNextSlide() {
    slides.forEach((slide, index) => {
        if (slide.classList.contains("show")) {
            changeSlide = index + 1;
            slide.classList.remove("show");
        }
    });
    if (changeSlide < slides.length) {
        slides[changeSlide].classList.add("show");
    } else {
        changeSlide = 0;
        slides[changeSlide].classList.add("show");
    }
}
function showPrevSlide() {
    slides.forEach((slide, index) => {
        if (slide.classList.contains("show")) {
            changeSlide = index - 1;
            slide.classList.remove("show");
        }
    });
    if (changeSlide >= 0) {
        slides[changeSlide].classList.add("show");
    } else {
        changeSlide = slides.length - 1;
        slides[changeSlide].classList.add("show");
    }
}
nextBtn.addEventListener("click", function () {
    clearInterval(slideInterval);
    showNextSlide();
    startAutoSlide();
});
prevBtn.addEventListener("click", function () {
    clearInterval(slideInterval);
    showPrevSlide();
    startAutoSlide();
});
function startAutoSlide() {
    slideInterval = setInterval(() => {
        showNextSlide();
    }, 3000); 
}
startAutoSlide();
