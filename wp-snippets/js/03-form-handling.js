/**
 * WPCode Snippet: Contact Form 7 Integration and Popup Form Handling
 * Type: JavaScript Snippet
 * Location: Site Wide Footer
 * Priority: 3
 * 
 * Description: Handles Contact Form 7 integration, popup form submission,
 * and form validation with WordPress AJAX.
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initPopupForm();
    initContactForm7Integration();
  });

  /**
   * Popup form handling
   */
  function initPopupForm() {
    var form = document.querySelector('.xconnect-contact-popup__form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      var submitBtn = form.querySelector('.xconnect-contact-popup__submit');
      var statusElement = form.querySelector('.xconnect-contact-popup__status');
      var originalText = submitBtn.textContent;

      // Validate required fields
      var name = form.querySelector('input[name="popup_name"]');
      var email = form.querySelector('input[name="popup_email"]');
      var phone = form.querySelector('input[name="popup_phone"]');

      if (!name.value.trim() || !email.value.trim() || !phone.value.trim()) {
        if (statusElement) {
          statusElement.textContent = 'Please fill in all required fields.';
          statusElement.className = 'xconnect-contact-popup__status xconnect-contact-popup__status--error';
        }
        return;
      }

      // Email validation
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        if (statusElement) {
          statusElement.textContent = 'Please enter a valid email address.';
          statusElement.className = 'xconnect-contact-popup__status xconnect-contact-popup__status--error';
        }
        return;
      }

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Send via WordPress AJAX
      var formData = new FormData(form);
      formData.append('action', 'xconnect_popup_form_submit');
      formData.append('nonce', xconnect_ajax.nonce); // You'll need to localize this

      fetch(xconnect_ajax.ajax_url, {
        method: 'POST',
        body: formData
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (data.success) {
          if (statusElement) {
            statusElement.textContent = 'Thank you! We\'ll get in touch with you soon.';
            statusElement.className = 'xconnect-contact-popup__status xconnect-contact-popup__status--success';
          }
          form.reset();
          
          // Close popup after 2 seconds
          setTimeout(function() {
            var popup = document.querySelector('.xconnect-contact-popup');
            if (popup) {
              popup.classList.remove('is-active');
              document.body.style.overflow = '';
              localStorage.setItem('xconnect_popup_dismissed', 'true');
            }
          }, 2000);
        } else {
          throw new Error(data.data || 'Submission failed');
        }
      })
      .catch(function(error) {
        if (statusElement) {
          statusElement.textContent = 'Something went wrong. Please try again.';
          statusElement.className = 'xconnect-contact-popup__status xconnect-contact-popup__status--error';
        }
      })
      .finally(function() {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      });
    });
  }

  /**
   * Contact Form 7 custom integration
   */
  function initContactForm7Integration() {
    // Listen for CF7 events
    document.addEventListener('wpcf7mailsent', function(event) {
      // Handle successful submission
      console.log('Form submitted successfully');
    });

    document.addEventListener('wpcf7invalid', function(event) {
      // Handle validation errors
      console.log('Form validation failed');
    });

    document.addEventListener('wpcf7mailfailed', function(event) {
      // Handle submission failure
      console.log('Form submission failed');
    });
  }

})();
