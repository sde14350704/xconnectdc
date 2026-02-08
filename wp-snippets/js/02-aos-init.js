/**
 * WPCode Snippet: AOS (Animate On Scroll) Initialization
 * Type: JavaScript Snippet
 * Location: Site Wide Footer
 * Priority: 2
 * 
 * Description: Initializes AOS library with custom settings for scroll animations.
 */

document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      disable: function() {
        // Disable on mobile if performance is an issue
        return window.innerWidth < 768;
      }
    });
  }
});

// Refresh AOS on dynamic content load
window.addEventListener('load', function() {
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
});
