
// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease',
    once: true,
    mirror: false
  });
  
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Back to Top Button
  const backToTopButton = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  });
  
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Counter Animation (for stats)
  function animateCounter(el, start = 0, end, duration = 2000) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      el.innerHTML = currentCount;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.innerHTML = end;
      }
    };
    window.requestAnimationFrame(step);
  }
  
  // Initialize counters when they come into view
  const counters = document.querySelectorAll('.counter');
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute('data-count'));
        animateCounter(target, 0, countTo, 2000);
        observer.unobserve(target);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
  
  // Testimonial Carousel
  // This is a simple testimonial carousel. For more complex ones, consider using a library.
  const testimonialsContainer = document.querySelector('.testimonials-container');
  if (testimonialsContainer) {
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');
    const totalTestimonials = testimonials.length;
    
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        if (i === index) {
          testimonial.style.display = 'block';
        } else {
          testimonial.style.display = 'none';
        }
      });
    }
    
    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % totalTestimonials;
      showTestimonial(currentIndex);
    }
    
    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
      showTestimonial(currentIndex);
    }
    
    // Initialize carousel
    showTestimonial(currentIndex);
    
    // Add event listeners for next/prev buttons if they exist
    const nextButton = document.querySelector('.testimonial-next');
    const prevButton = document.querySelector('.testimonial-prev');
    
    if (nextButton) {
      nextButton.addEventListener('click', nextTestimonial);
    }
    
    if (prevButton) {
      prevButton.addEventListener('click', prevTestimonial);
    }
  }
  
  // Form validation for contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic form validation
      let isValid = true;
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Please enter your name');
        isValid = false;
      } else {
        removeError(nameInput);
      }
      
      if (!emailInput.value.trim()) {
        showError(emailInput, 'Please enter your email');
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email');
        isValid = false;
      } else {
        removeError(emailInput);
      }
      
      if (!messageInput.value.trim()) {
        showError(messageInput, 'Please enter your message');
        isValid = false;
      } else {
        removeError(messageInput);
      }
      
      if (isValid) {
        // Show success message (in a real site this would submit to a server)
        const formElements = contactForm.elements;
        for (let i = 0; i < formElements.length; i++) {
          formElements[i].disabled = true;
        }
        
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success mt-4';
        successMessage.innerHTML = 'Your message has been sent. We will contact you shortly!';
        contactForm.appendChild(successMessage);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          contactForm.reset();
          successMessage.remove();
          for (let i = 0; i < formElements.length; i++) {
            formElements[i].disabled = false;
          }
        }, 5000);
      }
    });
  }
  
  // Helper functions for form validation
  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
    errorElement.className = 'error-message text-red-500 text-sm mt-1';
    errorElement.innerText = message;
    
    if (!formGroup.querySelector('.error-message')) {
      formGroup.appendChild(errorElement);
    }
    
    input.classList.add('border-red-500');
  }
  
  function removeError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
      formGroup.removeChild(errorElement);
    }
    
    input.classList.remove('border-red-500');
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Filter functionality for portfolio
  const portfolioFilters = document.querySelectorAll('.portfolio-filter button');
  if (portfolioFilters.length > 0) {
    portfolioFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        // Remove active class from all filters
        portfolioFilters.forEach(f => f.classList.remove('active', 'bg-blazereach-orange', 'text-white'));
        
        // Add active class to clicked filter
        filter.classList.add('active', 'bg-blazereach-orange', 'text-white');
        
        const filterValue = filter.getAttribute('data-filter');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
});
