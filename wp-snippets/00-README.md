# XConnectDC WordPress WPCode Snippets - Implementation Guide

## Overview

This folder contains production-ready WPCode snippets to convert the XConnectDC static website into a fully functional WordPress site using the WPCode plugin (Business plan required).

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [File Structure](#file-structure)
3. [Installation Steps](#installation-steps)
4. [Snippet Import Order](#snippet-import-order)
5. [WordPress Page Setup](#wordpress-page-setup)
6. [Asset Upload Checklist](#asset-upload-checklist)
7. [Shortcodes Reference](#shortcodes-reference)
8. [Troubleshooting](#troubleshooting)
9. [Testing Checklist](#testing-checklist)

## Prerequisites

### Required WordPress Plugins
- **WPCode** (Business Plan) - For snippet management
- **Contact Form 7** - For contact forms
- **Advanced Custom Fields (ACF)** - Optional, for additional customization

### WordPress Requirements
- WordPress 6.0 or higher
- PHP 7.4 or higher
- MySQL 5.7 or higher

### Theme Requirements
- Use a minimal/blank theme (recommended: Hello Elementor, Astra, or GeneratePress)
- Ensure theme doesn't conflict with custom CSS

## File Structure

```
wp-snippets/
├── 00-README.md                    # This file
├── css/
│   ├── 01-global-variables.css     # CSS custom properties (design tokens)
│   ├── 02-global-base.css          # Reset, typography, utilities
│   ├── 03-components.css           # Buttons, cards, header, footer
│   ├── 04-home.css                 # Homepage styles (Hero, sections)
│   ├── 05-about.css                # About page styles
│   ├── 06-services.css             # Services page styles
│   ├── 07-contact.css              # Contact page styles
│   └── 08-forms.css                # Form styling (Contact Form 7)
├── php/
│   ├── 01-enqueue-fonts-libraries.php  # Load Google Fonts, AOS library
│   ├── 02-theme-support.php            # Theme setup, menus, features
│   └── 03-shortcode-functions.php      # Section shortcodes
├── html/
│   ├── header-component.html           # Site header
│   ├── footer-component.html           # Site footer
│   ├── contact-popup.html              # Contact popup
│   ├── back-to-top.html                # Back to top button
│   └── sections/
│       ├── hero-section.html           # Hero section
│       ├── services-section.html       # Services grid
│       ├── why-us-section.html         # Why choose us
│       ├── industries-section.html     # Industries we serve
│       └── cta-section.html            # Call to action
└── js/
    ├── 01-global-scripts.js        # Header, mobile menu, utilities
    ├── 02-aos-init.js              # AOS animation initialization
    └── 03-form-handling.js         # Form validation, popup handling
```

## Installation Steps

### Step 1: Install WPCode Plugin

1. Log into WordPress admin dashboard
2. Go to **Plugins → Add New**
3. Search for "WPCode"
4. Install and activate **WPCode** (ensure you have Business plan)

### Step 2: Import CSS Snippets (Priority 1-10)

Import in the following order:

1. **01-global-variables.css**
   - Name: "Global CSS Variables"
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 1
   - Status: Active

2. **02-global-base.css**
   - Name: "Global Base Styles"
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 2
   - Status: Active

3. **03-components.css**
   - Name: "Component Styles"
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 3
   - Status: Active

4. **04-home.css**
   - Name: "Home Page Styles"
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 4
   - Conditional Logic: `is_front_page()`
   - Status: Active

5. **05-about.css**
   - Name: "About Page Styles"
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 4
   - Conditional Logic: `is_page('about')`
   - Status: Active

6. **06-services.css**
   - Name: "Services Page Styles"
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 4
   - Conditional Logic: `is_page('services')`
   - Status: Active

7. **07-contact.css**
   - Name: "Contact Page Styles"
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 4
   - Conditional Logic: `is_page('contact')`
   - Status: Active

8. **08-forms.css**
   - Name: "Form Styles (Contact Form 7)"
   - Type: CSS Snippet
   - Location: Site Wide Header
   - Priority: 5
   - Status: Active

### Step 3: Import PHP Snippets (Priority 5)

1. **01-enqueue-fonts-libraries.php**
   - Name: "Enqueue Fonts and Libraries"
   - Type: PHP Snippet
   - Location: Auto Insert
   - Insert Method: Site Wide Footer
   - Priority: 5
   - Status: Active

2. **02-theme-support.php**
   - Name: "Theme Support and Setup"
   - Type: PHP Snippet
   - Location: Auto Insert
   - Insert Method: Site Wide Footer
   - Priority: 5
   - Status: Active

3. **03-shortcode-functions.php**
   - Name: "Section Shortcodes"
   - Type: PHP Snippet
   - Location: Auto Insert
   - Insert Method: Site Wide Footer
   - Priority: 5
   - Status: Active

### Step 4: Import HTML Snippets

1. **header-component.html**
   - Name: "Site Header"
   - Type: HTML Snippet
   - Location: Shortcode
   - Shortcode: `[xconnect_header]`
   - Status: Active

2. **footer-component.html**
   - Name: "Site Footer"
   - Type: HTML Snippet
   - Location: Shortcode
   - Shortcode: `[xconnect_footer]`
   - Status: Active

3. **back-to-top.html**
   - Name: "Back to Top Button"
   - Type: HTML Snippet
   - Location: Site Wide Footer
   - Priority: 10
   - Status: Active

4. **contact-popup.html**
   - Name: "Contact Popup"
   - Type: HTML Snippet
   - Location: Site Wide Footer
   - Priority: 10
   - Status: Active

5. Import all section HTML snippets as shortcodes (see Shortcodes Reference)

### Step 5: Import JavaScript Snippets (Priority 10-20)

1. **01-global-scripts.js**
   - Name: "Global JavaScript"
   - Type: JavaScript Snippet
   - Location: Site Wide Footer
   - Priority: 10
   - Status: Active

2. **02-aos-init.js**
   - Name: "AOS Animation Init"
   - Type: JavaScript Snippet
   - Location: Site Wide Footer
   - Priority: 15
   - Status: Active

3. **03-form-handling.js**
   - Name: "Form Handling and Validation"
   - Type: JavaScript Snippet
   - Location: Site Wide Footer
   - Priority: 20
   - Status: Active

## Snippet Import Order

**Critical**: Import snippets in this exact order to avoid CSS/JS conflicts:

1. CSS Variables (Priority 1)
2. Global Base CSS (Priority 2)
3. Components CSS (Priority 3)
4. Page-specific CSS (Priority 4)
5. Forms CSS (Priority 5)
6. PHP Enqueue Scripts (Priority 5)
7. PHP Theme Support (Priority 5)
8. PHP Shortcodes (Priority 5)
9. HTML Components (Shortcodes/Auto Insert)
10. Global JavaScript (Priority 10)
11. AOS Init (Priority 15)
12. Form Handling JS (Priority 20)

## WordPress Page Setup

### 1. Create Pages

Create the following pages in WordPress:

- **Home** (Set as front page in Settings → Reading)
- **About**
- **Services**
- **Contact**

### 2. Homepage Setup

Edit the Home page and add the following shortcodes in order:

```
[xconnect_header]
[xconnect_hero]
[xconnect_services]
[xconnect_why_us]
[xconnect_industries]
[xconnect_cta]
[xconnect_footer]
```

### 3. About Page Setup

```
[xconnect_header]
[Your about page content]
[xconnect_cta]
[xconnect_footer]
```

### 4. Services Page Setup

```
[xconnect_header]
[xconnect_services_full]
[xconnect_cta]
[xconnect_footer]
```

### 5. Contact Page Setup

```
[xconnect_header]
[Contact Form 7 shortcode]
[xconnect_footer]
```

### 6. Configure Navigation Menu

1. Go to **Appearance → Menus**
2. Create a new menu called "Primary Menu"
3. Add pages: Home, About, Services, Contact
4. Assign to "Primary Navigation" location (if theme supports it)

**Note**: The header snippet contains hardcoded menu items. If you want dynamic WordPress menus, you'll need to modify the header PHP code to use `wp_nav_menu()`.

## Asset Upload Checklist

Upload the following assets to WordPress Media Library:

### Images Required

1. **Logo Files** (upload to /wp-content/uploads/xconnectdc/):
   - `logo.svg` (Light version for dark backgrounds)
   - `logo-dark.svg` (Dark version for light backgrounds)
   - `logo-white.svg` (White version for footer)
   - `favicon.png` (Site favicon)

2. **Section Background Images** (optional):
   - Hero section background
   - CTA section background
   - About page hero image

### Uploading Assets

1. Go to **Media → Add New**
2. Upload all logo files
3. Note the URLs of uploaded files
4. Update the snippet code to reference correct URLs using:
   - `home_url('/wp-content/uploads/xconnectdc/logo.svg')`
   - Or use `get_template_directory_uri()` if storing in theme folder

### Recommended Folder Structure in WordPress

```
wp-content/
└── uploads/
    └── xconnectdc/
        ├── logo.svg
        ├── logo-dark.svg
        ├── logo-white.svg
        ├── favicon.png
        └── images/
            ├── hero-bg.jpg
            ├── about-hero.jpg
            └── cta-bg.jpg
```

## Shortcodes Reference

### Available Shortcodes

| Shortcode | Description | Usage |
|-----------|-------------|-------|
| `[xconnect_header]` | Site header with navigation | Place at top of all pages |
| `[xconnect_footer]` | Site footer with links | Place at bottom of all pages |
| `[xconnect_hero]` | Hero section for homepage | Homepage only |
| `[xconnect_services]` | Services grid (4 cards) | Homepage |
| `[xconnect_services_full]` | Full services page | Services page |
| `[xconnect_why_us]` | Why choose us section | Homepage |
| `[xconnect_industries]` | Industries we serve | Homepage |
| `[xconnect_cta]` | Call to action section | Any page |
| `[xconnect_back_to_top]` | Back to top button | Auto-inserted |

### Shortcode Parameters

Some shortcodes accept parameters for customization:

```php
// CTA with custom text
[xconnect_cta title="Custom Title" subtitle="Custom subtitle"]

// Services with custom number
[xconnect_services limit="6"]
```

## Troubleshooting

### Common Issues and Solutions

#### 1. Styles Not Loading

**Problem**: Custom CSS not appearing on the site.

**Solutions**:
- Clear WordPress cache (if using a caching plugin)
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Check WPCode snippet is "Active"
- Verify snippet location is "Site Wide Header"
- Check for CSS conflicts in browser DevTools

#### 2. Shortcodes Display as Text

**Problem**: Shortcodes appear as `[xconnect_hero]` instead of rendering.

**Solutions**:
- Ensure PHP shortcode snippet is activated
- Check snippet type is set to "PHP Snippet"
- Verify there are no PHP syntax errors in snippet
- Check error logs in WPCode → Settings → Debug Log

#### 3. JavaScript Not Working

**Problem**: Menu, animations, or forms not functional.

**Solutions**:
- Check browser console for JavaScript errors (F12)
- Ensure jQuery is loaded (WordPress includes it by default)
- Verify JS snippets are in "Site Wide Footer"
- Check script load order (AOS should load before form handling)
- Disable other plugins to check for conflicts

#### 4. Mobile Menu Not Opening

**Problem**: Hamburger menu doesn't work on mobile.

**Solutions**:
- Check if global-scripts.js is active
- Verify no JavaScript errors in console
- Ensure CSS for mobile menu is loaded
- Check z-index conflicts with theme CSS

#### 5. AOS Animations Not Working

**Problem**: Scroll animations don't trigger.

**Solutions**:
- Verify AOS library is enqueued in PHP snippet
- Check aos-init.js is active
- Ensure elements have `data-aos` attributes
- Clear cache and reload page
- Check AOS CSS is loaded from CDN

#### 6. Contact Form Not Submitting

**Problem**: Form doesn't submit or shows errors.

**Solutions**:
- Install and activate Contact Form 7 plugin
- Create contact form in CF7
- Replace form handling code with CF7 shortcode
- Check CF7 SMTP settings for email delivery
- Test with WP Mail SMTP plugin

#### 7. Logo/Images Not Displaying

**Problem**: Broken image icons or missing logos.

**Solutions**:
- Upload logo files to WordPress Media Library
- Update image URLs in snippets to WordPress paths
- Use `<?php echo home_url('/wp-content/uploads/xconnectdc/logo.svg'); ?>`
- Check file permissions on uploads folder
- Verify image files exist at specified paths

#### 8. Page Layout Broken

**Problem**: Elements overlapping or misaligned.

**Solutions**:
- Check for theme CSS conflicts
- Use minimal theme (Hello Elementor recommended)
- Add `!important` to critical CSS rules if needed
- Disable theme's default styles in theme settings
- Check responsive breakpoints match design

#### 9. Performance Issues

**Problem**: Slow page load times.

**Solutions**:
- Minify CSS snippets before import
- Combine similar snippets to reduce HTTP requests
- Use a caching plugin (WP Rocket, W3 Total Cache)
- Optimize images before upload (use WebP format)
- Enable lazy loading for images
- Use a CDN for static assets

#### 10. Snippet Won't Save

**Problem**: WPCode shows error when saving snippet.

**Solutions**:
- Check for PHP syntax errors (use PHP validator)
- Reduce snippet size if very large
- Check WordPress memory limit (increase if needed)
- Verify WPCode plugin is up to date
- Check server PHP error logs

## Testing Checklist

After importing all snippets, test the following:

### Visual Tests
- [ ] Header displays correctly on all pages
- [ ] Header background changes on scroll
- [ ] Logo switches between light/dark versions
- [ ] Mobile menu opens and closes smoothly
- [ ] Footer displays with all links
- [ ] All sections render without overlap
- [ ] Responsive design works on mobile/tablet
- [ ] Colors match design system
- [ ] Fonts load correctly (Inter font family)

### Functional Tests
- [ ] Navigation menu links work
- [ ] Smooth scroll to sections (if implemented)
- [ ] Contact form validates input
- [ ] Contact form submits successfully
- [ ] Contact popup appears (if enabled)
- [ ] Contact popup can be dismissed
- [ ] Back to top button appears on scroll
- [ ] Back to top button scrolls to top
- [ ] AOS animations trigger on scroll
- [ ] External links open in new tab

### Performance Tests
- [ ] Page loads in under 3 seconds
- [ ] No console errors in browser DevTools
- [ ] No PHP errors in WordPress debug log
- [ ] Images load progressively (lazy loading)
- [ ] CSS/JS files are cached properly

### Cross-Browser Tests
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility Tests
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Screen reader compatible
- [ ] ARIA labels present
- [ ] Color contrast meets WCAG AA
- [ ] All images have alt text

## Advanced Customization

### Using WordPress Functions

Replace hardcoded URLs with WordPress functions:

```php
// Instead of: src="assets/images/logo.svg"
// Use: src="<?php echo home_url('/wp-content/uploads/xconnectdc/logo.svg'); ?>"

// Instead of: href="about.html"
// Use: href="<?php echo get_permalink(get_page_by_path('about')); ?>"

// Dynamic menu:
wp_nav_menu(array(
    'theme_location' => 'primary',
    'container' => false,
    'menu_class' => 'xconnect-nav__menu'
));
```

### Custom Post Types (Optional)

For dynamic services/industries, create custom post types in the theme support snippet:

```php
function xconnect_register_services() {
    register_post_type('service', array(
        'labels' => array('name' => 'Services'),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail')
    ));
}
add_action('init', 'xconnect_register_services');
```

## Support and Documentation

### WPCode Documentation
- [WPCode Official Docs](https://wpcode.com/docs/)
- [WPCode Snippet Types](https://wpcode.com/docs/snippet-types/)
- [WPCode Conditional Logic](https://wpcode.com/docs/conditional-logic/)

### WordPress Resources
- [WordPress Codex](https://codex.wordpress.org/)
- [WordPress Developer Resources](https://developer.wordpress.org/)
- [Contact Form 7 Docs](https://contactform7.com/docs/)

### CSS/JavaScript Resources
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## Maintenance

### Regular Updates
1. Keep WordPress core updated
2. Update WPCode plugin regularly
3. Update Contact Form 7 plugin
4. Monitor for PHP version updates
5. Review and update snippets as needed

### Backup Strategy
1. Backup WordPress database weekly
2. Backup wp-content folder monthly
3. Export WPCode snippets regularly (WPCode → Tools → Export)
4. Store backups off-site
5. Test restore procedure periodically

## Notes

- All snippets are designed to work with minimal WordPress themes
- Tested with WordPress 6.4+ and WPCode 2.0+
- Ensure your hosting supports PHP 7.4+ for optimal performance
- For production use, minify CSS/JS snippets for better performance
- Consider using a child theme for long-term maintainability

## Version History

- **v1.0.0** (2024-02-03): Initial release with complete snippet set
  - 8 CSS snippets
  - 3 PHP snippets
  - 9 HTML snippets
  - 3 JavaScript snippets

---

**Need Help?** Check the troubleshooting section above or contact your WordPress developer for assistance.
