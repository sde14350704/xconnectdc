/**
 * WPCode Snippet: Global JavaScript Functions
 * Type: JavaScript Snippet
 * Location: Site Wide Footer
 * Priority: 1
 * 
 * Description: Header behavior, mobile menu, smooth scroll, form validation, utilities.
 * Core functionality adapted for WordPress environment.
 */

(function() {
  'use strict';

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initHeaderBehavior();
    initSmoothScroll();
    initBackToTop();
    initFormHandling();
    initContactPopup();
  });

  /**
   * Header scroll behavior and mobile menu
   */
  function initHeaderBehavior() {
    var header = document.querySelector('.xconnect-header');
    var navToggle = document.querySelector('.xconnect-nav__toggle');
    var mobileMenu = document.querySelector('.xconnect-mobile-menu');

    if (!header) return;

    // Header scroll behavior
    function updateHeaderOnScroll() {
      if (window.scrollY > 50) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    updateHeaderOnScroll();
    window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });

    // Mobile menu toggle
    if (navToggle && mobileMenu) {
      navToggle.addEventListener('click', function() {
        var isOpen = mobileMenu.classList.contains('is-open');
        if (isOpen) {
          mobileMenu.classList.remove('is-open');
          navToggle.classList.remove('is-active');
          document.body.classList.remove('mobile-menu-open');
        } else {
          mobileMenu.classList.add('is-open');
          navToggle.classList.add('is-active');
          document.body.classList.add('mobile-menu-open');
        }
      });

      // Close mobile menu when clicking links
      var mobileMenuLinks = document.querySelectorAll('.xconnect-mobile-menu__link');
      mobileMenuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          mobileMenu.classList.remove('is-open');
          navToggle.classList.remove('is-active');
          document.body.classList.remove('mobile-menu-open');
        });
      });
    }
  }

  /**
   * Smooth scroll for anchor links
   */
  function initSmoothScroll() {
    var anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();
          var header = document.querySelector('.xconnect-header');
          var headerHeight = header ? header.offsetHeight : 80;
          var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Back to top button
   */
  function initBackToTop() {
    var backToTopBtn = document.querySelector('.xconnect-back-to-top');
    
    if (!backToTopBtn) return;

    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    });
  }

  /**
   * Form validation and handling
   */
  function initFormHandling() {
    var forms = document.querySelectorAll('.xconnect-contact-form');

    forms.forEach(function(form) {
      var inputs = form.querySelectorAll('input, textarea, select');

      inputs.forEach(function(input) {
        input.addEventListener('blur', function() {
          validateField(this);
        });
      });

      form.addEventListener('submit', function(e) {
        var isValid = true;
        var requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(function(field) {
          if (!validateField(field)) {
            isValid = false;
          }
        });

        if (!isValid) {
          e.preventDefault();
          var firstInvalid = form.querySelector('.is-invalid');
          if (firstInvalid) {
            firstInvalid.focus();
          }
        }
      });
    });

    function validateField(field) {
      var isValid = true;
      var value = field.value.trim();
      var type = field.type;

      field.classList.remove('is-invalid', 'is-valid');

      if (field.required && !value) {
        isValid = false;
      }

      if (type === 'email' && value) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
        }
      }

      if (value) {
        field.classList.add(isValid ? 'is-valid' : 'is-invalid');
      }

      return isValid;
    }
  }

  /**
   * Contact popup for first-time visitors
   */
  function initContactPopup() {
    var popup = document.querySelector('.xconnect-contact-popup');
    if (!popup) return;

    var STORAGE_KEY = 'xconnect_popup_dismissed';
    var POPUP_DELAY = 3000;

    if (localStorage.getItem(STORAGE_KEY)) {
      return;
    }

    setTimeout(function() {
      popup.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }, POPUP_DELAY);

    function hidePopup() {
      popup.classList.remove('is-active');
      document.body.style.overflow = '';
      localStorage.setItem(STORAGE_KEY, 'true');
    }

    var closeBtn = popup.querySelector('.xconnect-contact-popup__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', hidePopup);
    }

    var skipBtn = popup.querySelector('.xconnect-contact-popup__skip');
    if (skipBtn) {
      skipBtn.addEventListener('click', hidePopup);
    }

    var overlay = popup.querySelector('.xconnect-contact-popup__overlay');
    if (overlay) {
      overlay.addEventListener('click', hidePopup);
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && popup.classList.contains('is-active')) {
        hidePopup();
      }
    });
  }

})();
