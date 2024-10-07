// --- economic-empowerment.js ---

// Carousel Functionality for Success Stories
const carousel = document.querySelector('.story-carousel');
let isDragging = false, startPos = 0, scrollLeft = 0;

carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPos = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDragging = false;
});

carousel.addEventListener('mouseup', () => {
    isDragging = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startPos) * 2; //scroll speed
    carousel.scrollLeft = scrollLeft - walk;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
