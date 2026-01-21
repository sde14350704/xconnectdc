/*
  XConnectDC - Global JavaScript
  WPCode Snippet: 05-global-scripts
  Location: Site Wide Footer
  Type: JavaScript

  This file contains:
  - Utility functions
  - Scroll-based animations
  - Form handling
  - Performance optimizations
  - Accessibility enhancements
*/

(function() {
  'use strict';

  // ==========================================================================
  // UTILITY FUNCTIONS
  // ==========================================================================

  /**
   * Debounce function to limit how often a function can fire
   * @param {Function} func - The function to debounce
   * @param {number} wait - The delay in milliseconds
   * @returns {Function} - The debounced function
   */
  function debounce(func, wait) {
    var timeout;
    return function executedFunction() {
      var context = this;
      var args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Throttle function to limit function calls to once per interval
   * @param {Function} func - The function to throttle
   * @param {number} limit - The interval in milliseconds
   * @returns {Function} - The throttled function
   */
  function throttle(func, limit) {
    var inThrottle;
    return function() {
      var context = this;
      var args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function() {
          inThrottle = false;
        }, limit);
      }
    };
  }

  /**
   * Check if element is in viewport
   * @param {Element} element - The element to check
   * @param {number} offset - Offset from viewport edge
   * @returns {boolean} - Whether element is in viewport
   */
  function isInViewport(element, offset) {
    offset = offset || 0;
    var rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
      rect.bottom >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right >= 0
    );
  }

  /**
   * Get CSS custom property value
   * @param {string} property - The CSS custom property name
   * @returns {string} - The property value
   */
  function getCSSCustomProperty(property) {
    return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
  }

  // ==========================================================================
  // DOM READY HANDLER
  // ==========================================================================

  document.addEventListener('DOMContentLoaded', function() {

    // ==========================================================================
    // SMOOTH SCROLL FOR ALL ANCHOR LINKS
    // ==========================================================================

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

            // Update URL hash without jumping
            if (history.pushState) {
              history.pushState(null, null, targetId);
            }
          }
        });
      });
    }

    // ==========================================================================
    // ANIMATED COUNTERS
    // ==========================================================================

    function initAnimatedCounters() {
      var counters = document.querySelectorAll('[data-count]');
      var animatedCounters = new Set();

      function animateCounter(counter) {
        var target = parseFloat(counter.getAttribute('data-count'));
        var duration = parseInt(counter.getAttribute('data-duration')) || 2000;
        var suffix = counter.getAttribute('data-suffix') || '';
        var prefix = counter.getAttribute('data-prefix') || '';
        var decimals = (target % 1 !== 0) ? 2 : 0;

        var startTime = null;
        var startValue = 0;

        function easeOutQuart(t) {
          return 1 - Math.pow(1 - t, 4);
        }

        function updateCounter(currentTime) {
          if (!startTime) startTime = currentTime;
          var elapsed = currentTime - startTime;
          var progress = Math.min(elapsed / duration, 1);
          var easedProgress = easeOutQuart(progress);
          var currentValue = startValue + (target - startValue) * easedProgress;

          counter.textContent = prefix + currentValue.toFixed(decimals) + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        }

        requestAnimationFrame(updateCounter);
      }

      function checkCounters() {
        counters.forEach(function(counter) {
          if (!animatedCounters.has(counter) && isInViewport(counter, 100)) {
            animatedCounters.add(counter);
            animateCounter(counter);
          }
        });
      }

      // Initial check
      checkCounters();

      // Check on scroll
      window.addEventListener('scroll', throttle(checkCounters, 100), { passive: true });
    }

    // ==========================================================================
    // LAZY LOADING IMAGES (Native + Fallback)
    // ==========================================================================

    function initLazyLoading() {
      // Check for native lazy loading support
      if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        var lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(function(img) {
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
        });
      } else {
        // Fallback for browsers without native support
        var lazyImages = document.querySelectorAll('img[data-src]');

        if ('IntersectionObserver' in window) {
          var imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                var image = entry.target;
                image.src = image.dataset.src;
                image.removeAttribute('data-src');
                imageObserver.unobserve(image);
              }
            });
          }, {
            rootMargin: '50px 0px',
            threshold: 0.01
          });

          lazyImages.forEach(function(image) {
            imageObserver.observe(image);
          });
        } else {
          // Final fallback - load all images
          lazyImages.forEach(function(image) {
            image.src = image.dataset.src;
          });
        }
      }
    }

    // ==========================================================================
    // FORM VALIDATION & HANDLING
    // ==========================================================================

    function initFormHandling() {
      var forms = document.querySelectorAll('.xconnect-contact-form');

      forms.forEach(function(form) {
        var statusElement = form.querySelector('.xconnect-form-status') ||
                           document.getElementById('form-status');

        // Real-time validation
        var inputs = form.querySelectorAll('input, textarea, select');

        inputs.forEach(function(input) {
          input.addEventListener('blur', function() {
            validateField(this);
          });

          input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
              validateField(this);
            }
          });
        });

        // Form submission
        form.addEventListener('submit', function(e) {
          e.preventDefault();

          var isValid = true;
          var requiredFields = form.querySelectorAll('[required]');

          requiredFields.forEach(function(field) {
            if (!validateField(field)) {
              isValid = false;
            }
          });

          if (isValid) {
            submitForm(form, statusElement);
          } else {
            showStatus(statusElement, 'error', 'Please fill in all required fields correctly.');

            // Focus first invalid field
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

        // Remove existing error state
        field.classList.remove('is-invalid', 'is-valid');

        // Required check
        if (field.required && !value) {
          isValid = false;
        }

        // Email validation
        if (type === 'email' && value) {
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            isValid = false;
          }
        }

        // Phone validation (basic)
        if (type === 'tel' && value) {
          var phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
          if (!phoneRegex.test(value)) {
            isValid = false;
          }
        }

        // Apply validation state
        if (value) {
          field.classList.add(isValid ? 'is-valid' : 'is-invalid');
        }

        return isValid;
      }

      function submitForm(form, statusElement) {
        var submitBtn = form.querySelector('button[type="submit"]');
        var originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';

        // Collect form data
        var formData = new FormData(form);

        // Simulate form submission (replace with actual endpoint)
        // For WordPress, you might use admin-ajax.php or REST API

        setTimeout(function() {
          // Simulate success
          showStatus(statusElement, 'success', 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
          form.reset();

          // Reset button
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;

          // Remove validation states
          var fields = form.querySelectorAll('.is-valid, .is-invalid');
          fields.forEach(function(field) {
            field.classList.remove('is-valid', 'is-invalid');
          });
        }, 1500);

        /*
        // Actual AJAX submission example:
        fetch(form.action, {
          method: 'POST',
          body: formData
        })
        .then(function(response) {
          if (response.ok) {
            showStatus(statusElement, 'success', 'Message sent successfully!');
            form.reset();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .catch(function(error) {
          showStatus(statusElement, 'error', 'Something went wrong. Please try again.');
        })
        .finally(function() {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        });
        */
      }

      function showStatus(element, type, message) {
        if (!element) return;

        element.textContent = message;
        element.className = 'xconnect-form-status';
        element.classList.add('xconnect-form-status--' + type);
        element.style.display = 'block';

        // Auto-hide success messages
        if (type === 'success') {
          setTimeout(function() {
            element.style.display = 'none';
          }, 5000);
        }
      }
    }

    // ==========================================================================
    // SCROLL PROGRESS INDICATOR (Optional)
    // ==========================================================================

    function initScrollProgress() {
      var progressBar = document.querySelector('.xconnect-scroll-progress');

      if (!progressBar) return;

      function updateProgress() {
        var scrollTop = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + '%';
      }

      window.addEventListener('scroll', throttle(updateProgress, 10), { passive: true });
    }

    // ==========================================================================
    // KEYBOARD NAVIGATION ENHANCEMENTS
    // ==========================================================================

    function initKeyboardNav() {
      // Add visible focus styles only when using keyboard
      document.body.addEventListener('mousedown', function() {
        document.body.classList.add('using-mouse');
      });

      document.body.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
          document.body.classList.remove('using-mouse');
        }
      });

      // Escape key closes mobile menu
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          var mobileMenu = document.getElementById('xconnect-mobile-menu');
          var navToggle = document.getElementById('xconnect-nav-toggle');

          if (mobileMenu && mobileMenu.classList.contains('is-open')) {
            mobileMenu.classList.remove('is-open');
            navToggle.classList.remove('is-active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('mobile-menu-open');
          }
        }
      });
    }

    // ==========================================================================
    // EXTERNAL LINKS HANDLING
    // ==========================================================================

    function initExternalLinks() {
      var externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');

      externalLinks.forEach(function(link) {
        // Add security attributes
        if (!link.hasAttribute('rel')) {
          link.setAttribute('rel', 'noopener noreferrer');
        }

        // Add external link indicator for accessibility
        if (!link.querySelector('.sr-only')) {
          var srText = document.createElement('span');
          srText.className = 'sr-only';
          srText.textContent = ' (opens in new tab)';
          link.appendChild(srText);
        }
      });
    }

    // ==========================================================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ==========================================================================

    function initScrollAnimations() {
      // Skip if AOS is already handling animations
      if (typeof AOS !== 'undefined') return;

      var animatedElements = document.querySelectorAll('[data-animate]');

      if ('IntersectionObserver' in window && animatedElements.length > 0) {
        var animationObserver = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-animated');
              animationObserver.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(function(element) {
          animationObserver.observe(element);
        });
      }
    }

    // ==========================================================================
    // PREFERS REDUCED MOTION
    // ==========================================================================

    function checkReducedMotion() {
      var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        document.documentElement.classList.add('reduced-motion');

        // Disable AOS if it's initialized
        if (typeof AOS !== 'undefined') {
          AOS.init({
            disable: true
          });
        }
      }
    }

    // ==========================================================================
    // PERFORMANCE MONITORING (Development)
    // ==========================================================================

    function initPerformanceMonitoring() {
      if (window.location.hostname === 'localhost' || window.location.hostname.includes('dev')) {
        // Log performance metrics in development
        window.addEventListener('load', function() {
          setTimeout(function() {
            var perfData = window.performance.timing;
            var pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            var domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;

            console.log('%cXConnectDC Performance Metrics', 'color: #1f6fd2; font-weight: bold;');
            console.log('Page Load Time:', pageLoadTime + 'ms');
            console.log('DOM Ready Time:', domReadyTime + 'ms');
          }, 0);
        });
      }
    }

    // ==========================================================================
    // INITIALIZE ALL MODULES
    // ==========================================================================

    function init() {
      checkReducedMotion();
      initSmoothScroll();
      initAnimatedCounters();
      initLazyLoading();
      initFormHandling();
      initScrollProgress();
      initKeyboardNav();
      initExternalLinks();
      initScrollAnimations();
      initPerformanceMonitoring();

      // Log initialization in development
      if (window.location.hostname === 'localhost' || window.location.hostname.includes('dev')) {
        console.log('%cXConnectDC Scripts Initialized', 'color: #10b981; font-weight: bold;');
      }
    }

    // Run initialization
    init();

  }); // End DOMContentLoaded

  // ==========================================================================
  // WINDOW LOAD EVENT HANDLERS
  // ==========================================================================

  window.addEventListener('load', function() {
    // Remove loading states
    document.body.classList.add('is-loaded');
    document.body.classList.remove('is-loading');

    // Trigger any post-load animations
    var postLoadElements = document.querySelectorAll('[data-load-animate]');
    postLoadElements.forEach(function(element, index) {
      setTimeout(function() {
        element.classList.add('is-visible');
      }, index * 100);
    });
  });

  // ==========================================================================
  // EXPOSE UTILITIES GLOBALLY (Optional)
  // ==========================================================================

  window.XConnectDC = {
    debounce: debounce,
    throttle: throttle,
    isInViewport: isInViewport
  };

})();

/*
  ==========================================================================
  ADDITIONAL CSS FOR FORM VALIDATION STATES
  (Include in CSS file or style tag)
  ==========================================================================

  .xconnect-input.is-valid,
  .xconnect-textarea.is-valid,
  .xconnect-select.is-valid {
    border-color: var(--color-success, #10b981);
  }

  .xconnect-input.is-invalid,
  .xconnect-textarea.is-invalid,
  .xconnect-select.is-invalid {
    border-color: var(--color-error, #ef4444);
  }

  .xconnect-form-status {
    display: none;
    padding: var(--spacing-3) var(--spacing-4);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-4);
  }

  .xconnect-form-status--success {
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--color-success);
    border: 1px solid rgba(16, 185, 129, 0.3);
  }

  .xconnect-form-status--error {
    background-color: rgba(239, 68, 68, 0.1);
    color: var(--color-error);
    border: 1px solid rgba(239, 68, 68, 0.3);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  body.using-mouse *:focus {
    outline: none;
  }

  .reduced-motion *,
  .reduced-motion *::before,
  .reduced-motion *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
*/
