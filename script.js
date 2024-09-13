const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('.fa-chevron-left');
const arrowRight = document.querySelector('.fa-chevron-right');

let slideIndex = 0;

function moveSlider(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slider.style.transform = `translateX(-${slideIndex * (100 / 3)}%)`;
}

arrowLeft.addEventListener('click', () => moveSlider(-1));
arrowRight.addEventListener('click', () => moveSlider(1));


const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const trendingContainer = document.querySelector('.trending');


let currentIndex = 0;


function showImages() {
    const images = trendingContainer.querySelectorAll('.images');
    images.forEach((image, index) => {
        if (index >= currentIndex && index < currentIndex + 3) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}


prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 2; 
        showImages();
    }
});


nextButton.addEventListener('click', () => {
    const images = trendingContainer.querySelectorAll('.images');
    if (currentIndex + 2 < images.length - 1) {
        currentIndex += 2; 
        showImages();
    }
});

showImages();
