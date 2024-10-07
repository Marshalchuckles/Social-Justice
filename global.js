// --- global.js ---

// Sticky Header: Adds a shadow when user scrolls
window.onscroll = function () {
    const header = document.querySelector('header');
    if (window.pageYOffset > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };
  
  // Scroll-to-top functionality
  const scrollTopBtn = document.querySelector('.scroll-top');
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  