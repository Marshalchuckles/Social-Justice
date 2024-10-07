// --- governance.js ---

// Accordion Functionality for "Know Your Rights"
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('active');
      
      // Close other accordions if needed
      document.querySelectorAll('.accordion').forEach(accordion => {
        if (accordion !== header.parentElement) {
          accordion.classList.remove('active');
        }
      });
    });
  });
  
  // Search Legal Resources Function
  function searchLegalResources() {
    const query = document.querySelector('.interactive-features input[type="text"]').value.toLowerCase();
    const resources = document.querySelectorAll('.legal-resources ul li a');
    
    resources.forEach(resource => {
      const text = resource.textContent.toLowerCase();
      if (text.includes(query)) {
        resource.parentElement.style.display = 'block';
      } else {
        resource.parentElement.style.display = 'none';
      }
    });
  }
  
  // Open Chat Function (Placeholder)
  function openChat() {
    alert('Chat support is currently under development. Please try again later.');
  }
  