# XConnectDC WordPress Implementation Guide

## Overview
This guide explains how to implement all WPCode snippets for the XConnectDC WordPress website.

## Prerequisites
- WordPress 6.0 or higher
- WPCode plugin installed and activated
- Contact Form 7 plugin (for forms)

## File Structure
```
wp-snippets/
├── css/                          # CSS Snippets
│   ├── 01-global-variables.css    (Priority 1) - Design system variables
│   ├── 02-global-base.css         (Priority 2) - Reset, typography, utilities
│   ├── 03-components.css          (Priority 3) - Header, footer, cards
│   ├── 04-home.css                (Priority 4) - Home page sections
│   ├── 05-about.css               (Priority 5) - About page
│   ├── 06-services.css            (Priority 6) - Services page
│   ├── 07-contact.css             (Priority 7) - Contact page
│   └── 08-forms.css               (Priority 8) - Contact Form 7 styling
│
├── php/                          # PHP Snippets
│   ├── 01-enqueue-fonts-libraries.php - Fonts & AOS library
│   ├── 02-theme-support.php           - Theme features & menus
│   └── 03-shortcode-functions.php     - Section shortcodes
│
├── js/                           # JavaScript Snippets
│   ├── 01-global-scripts.js      - Core functionality
│   ├── 02-aos-init.js            - Animation initialization
│   └── 03-form-handling.js       - Form validation & AJAX
│
├── html/                         # HTML Components
│   ├── header-component.html     - Site header
│   ├── footer-component.html     - Site footer
│   ├── contact-popup.html        - First-time visitor popup
│   ├── back-to-top.html          - Back to top button
│   └── sections/                 # Page sections
│       ├── hero-section.html
│       ├── services-section.html
│       ├── why-us-section.html
│       ├── industries-section.html
│       └── cta-section.html
└── 00-README.md                  # Overview & instructions
```

## Installation Steps

### Step 1: Install CSS Snippets (In Order)
Navigate to: **WPCode → + Add Snippet → Add Your Custom Code**

1. **01-global-variables.css**
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 1
   - Paste content from `css/01-global-variables.css`

2. **02-global-base.css**
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 2
   - Paste content from `css/02-global-base.css`

3. **03-components.css**
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 3
   - Paste content from `css/03-components.css`

4. **04-home.css**
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 4
   - Conditional Logic: `is_front_page()`
   - Paste content from `css/04-home.css`

5. **05-about.css**
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 5
   - Conditional Logic: `is_page('about')`
   - Paste content from `css/05-about.css`

6. **06-services.css**
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 6
   - Conditional Logic: `is_page('services')`
   - Paste content from `css/06-services.css`

7. **07-contact.css**
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 7
   - Conditional Logic: `is_page('contact')`
   - Paste content from `css/07-contact.css`

8. **08-forms.css**
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 8
   - Paste content from `css/08-forms.css`

### Step 2: Install PHP Snippets

1. **01-enqueue-fonts-libraries.php**
   - Type: PHP Snippet
   - Location: Run Everywhere
   - Priority: 1
   - Paste content from `php/01-enqueue-fonts-libraries.php`

2. **02-theme-support.php**
   - Type: PHP Snippet
   - Location: Run Everywhere
   - Priority: 2
   - Paste content from `php/02-theme-support.php`

3. **03-shortcode-functions.php**
   - Type: PHP Snippet
   - Location: Run Everywhere
   - Priority: 3
   - Paste content from `php/03-shortcode-functions.php`

### Step 3: Install JavaScript Snippets

1. **01-global-scripts.js**
   - Type: JavaScript Snippet
   - Location: Site Wide Footer
   - Priority: 1
   - Paste content from `js/01-global-scripts.js`

2. **02-aos-init.js**
   - Type: JavaScript Snippet
   - Location: Site Wide Footer
   - Priority: 2
   - Paste content from `js/02-aos-init.js`

3. **03-form-handling.js**
   - Type: JavaScript Snippet
   - Location: Site Wide Footer
   - Priority: 3
   - Paste content from `js/03-form-handling.js`

### Step 4: Install HTML Components

1. **Header Component**
   - Type: HTML Snippet
   - Location: Site Wide Header
   - Insert: Before Content
   - Priority: 1
   - Paste content from `html/header-component.html`
   - OR use shortcode: `[xconnect_header]`

2. **Footer Component**
   - Type: HTML Snippet
   - Location: Site Wide Footer
   - Insert: After Content
   - Priority: 1
   - Paste content from `html/footer-component.html`
   - OR use shortcode: `[xconnect_footer]`

3. **Contact Popup**
   - Type: HTML Snippet
   - Location: Site Wide Footer
   - Priority: 10
   - Paste content from `html/contact-popup.html`

4. **Back to Top Button**
   - Type: HTML Snippet
   - Location: Site Wide Footer
   - Priority: 11
   - Paste content from `html/back-to-top.html`

## Using Shortcodes

The following shortcodes are available for page building:

### Hero Section
```php
[xconnect_hero 
  title="Your Custom Title"
  subtitle="Your Custom Subtitle"
  cta_primary_text="Button Text"
  cta_primary_url="/your-url"
  cta_secondary_text="Secondary Button"
  cta_secondary_url="/your-url"]
```

### Services Section
```php
[xconnect_services]
```

### Why Us Section
```php
[xconnect_why_us]
```

### Industries Section
```php
[xconnect_industries]
```

### CTA Section
```php
[xconnect_cta 
  title="Your CTA Title"
  subtitle="Your CTA Subtitle"
  cta_text="Button Text"
  cta_url="/your-url"]
```

## Building the Home Page

Create a new page in WordPress and add the following shortcodes:

```
[xconnect_hero]
[xconnect_services]
[xconnect_why_us]
[xconnect_industries]
[xconnect_cta]
```

## Navigation Menu Setup

1. Go to **Appearance → Menus**
2. Create three menus:
   - **Primary Menu** (for desktop navigation)
   - **Mobile Menu** (for mobile navigation)
   - **Footer Menu** (for footer links)
3. Assign menu locations in **Theme Settings**

## Contact Form 7 Setup

1. Install and activate Contact Form 7
2. Create a new form with these fields:
   - Name (text, required)
   - Email (email, required)
   - Phone (tel, required)
   - Message (textarea, optional)
3. Use this shortcode in your Contact page:
   ```
   [contact-form-7 id="YOUR_FORM_ID" title="Contact Form"]
   ```

## Customization

### Changing Colors
Edit `css/01-global-variables.css` to modify:
- Primary color: `--color-primary`
- Navy color: `--color-navy`
- Accent colors and other design tokens

### Changing Fonts
Edit `php/01-enqueue-fonts-libraries.php` to:
- Change Google Fonts URL
- Modify font family in variables CSS

### Adding New Sections
1. Create HTML in `html/sections/`
2. Add shortcode function in `php/03-shortcode-functions.php`
3. Add corresponding CSS in appropriate stylesheet

## Troubleshooting

### CSS Not Loading
- Check snippet priority order
- Verify WPCode snippets are activated
- Clear WordPress cache
- Check browser console for errors

### JavaScript Not Working
- Ensure AOS library is loaded (check browser console)
- Verify jQuery conflicts
- Check JavaScript console for errors

### Shortcodes Not Rendering
- Verify PHP snippet is activated
- Check for PHP syntax errors in WPCode logs
- Ensure shortcode name matches function name

### Forms Not Submitting
- Verify Contact Form 7 is installed
- Check form ID in shortcode
- Review AJAX URL in JavaScript

## Performance Optimization

1. **Conditional Loading**: CSS snippets use conditional logic to load only on specific pages
2. **AOS Configuration**: Animations disabled on mobile for better performance
3. **Lazy Loading**: Images use native lazy loading where supported
4. **CDN Assets**: Google Fonts and AOS loaded from CDN

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators (keyboard users)
- Screen reader text where needed
- Reduced motion support

## Security Best Practices

- All user inputs are sanitized
- Form submissions use WordPress nonces
- External links have `rel="noopener noreferrer"`
- No inline JavaScript in HTML

## Support

For issues or questions:
1. Check WordPress error logs
2. Review WPCode snippet logs
3. Check browser console for JavaScript errors
4. Verify all dependencies are installed

## Next Steps

1. Install all snippets in order
2. Create required pages (Home, About, Services, Contact)
3. Set up navigation menus
4. Configure Contact Form 7
5. Test on multiple devices and browsers
6. Optimize images and assets
7. Test forms and interactions
8. Go live!

## Additional Resources

- [WPCode Documentation](https://wpcode.com/docs/)
- [Contact Form 7 Documentation](https://contactform7.com/docs/)
- [AOS Library](https://michalsnik.github.io/aos/)
- [WordPress Codex](https://codex.wordpress.org/)

---

**Version**: 1.0
**Last Updated**: 2024
**Author**: XConnectDC Development Team
