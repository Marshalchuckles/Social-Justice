// --- index.js ---

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Call-to-action button click tracking (optional analytics functionality)
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', () => {
    console.log('CTA Button clicked! Redirecting to register...');
    // You can add any analytics or tracking logic here if needed
  });
  
  // Add hover effect on sub-theme cards (to make it more interactive)
  const subThemeItems = document.querySelectorAll('#sub-themes ul li');
  subThemeItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = '#f1f1f1';  // Slight background change on hover
    });
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = '#f9f9f9';  // Revert to original background
    });
  });
  
  // Scroll-to-top button functionality (if present on the page)
  const scrollToTopButton = document.querySelector('.scroll-top');
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Optional: Add some animation when stats or sections come into view
  const statsSection = document.querySelector('#quick-stats');
  const introSection = document.querySelector('#intro');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });
  
  observer.observe(statsSection);
  observer.observe(introSection);
  