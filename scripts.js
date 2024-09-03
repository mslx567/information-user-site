// JavaScript for loading screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = 0;
        setTimeout(() => loadingScreen.style.display = 'none', 500);
    }, 3000);
});

// JavaScript for carousel
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

let offset = 0;

function moveCarousel() {
    offset -= 2;
    if (Math.abs(offset) > carousel.scrollWidth / 2) {
        offset = 0;
    }
    carousel.style.transform = `translateX(${offset}px)`;
}

setInterval(moveCarousel, 20);

// Initialize Particles.js
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
});
