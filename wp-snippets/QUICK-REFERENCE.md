# XConnectDC WPCode Snippets - Quick Reference Card

## 📦 Installation Order

### 1️⃣ CSS Snippets (In Order - IMPORTANT!)
```
Priority 1: css/01-global-variables.css     → Site Wide Header
Priority 2: css/02-global-base.css          → Site Wide Header
Priority 3: css/03-components.css           → Site Wide Header
Priority 4: css/04-home.css                 → Site Wide Header [Conditional: is_front_page()]
Priority 5: css/05-about.css                → Site Wide Header [Conditional: is_page('about')]
Priority 6: css/06-services.css             → Site Wide Header [Conditional: is_page('services')]
Priority 7: css/07-contact.css              → Site Wide Header [Conditional: is_page('contact')]
Priority 8: css/08-forms.css                → Site Wide Header
```

### 2️⃣ PHP Snippets
```
Priority 1: php/01-enqueue-fonts-libraries.php → Run Everywhere
Priority 2: php/02-theme-support.php           → Run Everywhere
Priority 3: php/03-shortcode-functions.php     → Run Everywhere
```

### 3️⃣ JavaScript Snippets
```
Priority 1: js/01-global-scripts.js  → Site Wide Footer
Priority 2: js/02-aos-init.js        → Site Wide Footer
Priority 3: js/03-form-handling.js   → Site Wide Footer
```

### 4️⃣ HTML Components
```
Priority 1:  html/header-component.html  → Site Wide Header (or use [xconnect_header] shortcode)
Priority 1:  html/footer-component.html  → Site Wide Footer (or use [xconnect_footer] shortcode)
Priority 10: html/contact-popup.html     → Site Wide Footer
Priority 11: html/back-to-top.html       → Site Wide Footer
```

## 🎨 Shortcodes Reference

### Hero Section
```php
[xconnect_hero]

// With attributes:
[xconnect_hero 
  title="Custom Title"
  subtitle="Custom Subtitle"
  cta_primary_text="Button Text"
  cta_primary_url="/custom-url"]
```

### Other Sections
```php
[xconnect_services]     // What We Do section
[xconnect_why_us]       // Why XConnectDC section
[xconnect_industries]   // Industries We Serve
[xconnect_cta]          // Call-to-action section
```

### Homepage Build
```
[xconnect_hero]
[xconnect_services]
[xconnect_why_us]
[xconnect_industries]
[xconnect_cta]
```

## 🎯 Conditional Logic Examples

### Page-Specific CSS
```php
is_front_page()              // Homepage only
is_page('about')             // About page only
is_page('services')          // Services page only
is_page('contact')           // Contact page only
is_page(array('about','services'))  // Multiple pages
```

## 🔧 Common Customizations

### Change Primary Color
**File:** `css/01-global-variables.css`
```css
--color-primary: #1f6fd2;  /* Change this */
```

### Change Font
**File:** `php/01-enqueue-fonts-libraries.php`
```php
// Change font URL
'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
```

### Adjust Animation Speed
**File:** `js/02-aos-init.js`
```javascript
AOS.init({
  duration: 700,  // Change this (milliseconds)
  // ...
});
```

### Change Popup Delay
**File:** `js/01-global-scripts.js`
```javascript
var POPUP_DELAY = 3000;  // Change this (milliseconds)
```

## 📝 Required WordPress Setup

### 1. Install Plugins
- ✅ WPCode (free or pro)
- ✅ Contact Form 7

### 2. Create Pages
- Home (set as front page)
- About
- Services
- Contact

### 3. Create Menus
Go to **Appearance → Menus**:
- Primary Menu (desktop nav)
- Mobile Menu (mobile nav)
- Footer Menu (footer links)

### 4. Upload Assets
Upload to theme folder:
- `/assets/images/logo.svg` (light version)
- `/assets/images/logo-dark.svg` (dark version)
- `/assets/images/logo-white.svg` (footer version)

### 5. Create Contact Form
**Contact Form 7** → Add New Form:
```
<label> Your Name (required)
    [text* your-name] </label>

<label> Your Email (required)
    [email* your-email] </label>

<label> Your Phone (required)
    [tel* your-phone] </label>

<label> Your Message
    [textarea your-message] </label>

[submit "Send Message"]
```

## 🐛 Troubleshooting

### CSS Not Loading?
1. Check priority order (1-8)
2. Verify snippets are activated
3. Clear cache
4. Check conditional logic

### JavaScript Not Working?
1. Check browser console for errors
2. Verify AOS library loaded
3. Check jQuery conflicts
4. Ensure scripts in footer

### Shortcodes Not Rendering?
1. Verify PHP snippet activated
2. Check for syntax errors
3. Clear WordPress cache
4. Test shortcode alone

### Forms Not Submitting?
1. Verify CF7 installed
2. Check form ID
3. Review AJAX URL
4. Check browser console

## 📱 Testing Checklist

- [ ] Desktop (1920px)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Safari
- [ ] Chrome
- [ ] Firefox
- [ ] Mobile browsers
- [ ] Keyboard navigation
- [ ] Screen reader
- [ ] Forms submission
- [ ] Mobile menu
- [ ] Back to top button
- [ ] Contact popup
- [ ] All links work
- [ ] Images load

## 🎨 Design Tokens

```css
/* Primary Colors */
--color-primary: #1f6fd2
--color-navy: #0b1d3a
--color-accent: #4da3ff

/* Spacing Scale */
--spacing-1: 0.25rem  (4px)
--spacing-2: 0.5rem   (8px)
--spacing-4: 1rem     (16px)
--spacing-8: 2rem     (32px)
--spacing-16: 4rem    (64px)

/* Font Sizes */
--font-size-sm: 0.875rem    (14px)
--font-size-base: 1rem      (16px)
--font-size-lg: 1.125rem    (18px)
--font-size-xl: 1.25rem     (20px)
--font-size-4xl: 2.25rem    (36px)
--font-size-5xl: 3rem       (48px)
```

## 📊 File Priorities

### CSS Loading Order (Critical!)
1. Variables → 2. Base → 3. Components → 4-7. Pages → 8. Forms

### JavaScript Order
1. Global → 2. AOS → 3. Forms

### Why Priority Matters?
- CSS cascade depends on order
- Variables must load first
- Base styles before components
- Components before page-specific

## 🚀 Go Live Checklist

- [ ] All snippets installed and activated
- [ ] Menus created and assigned
- [ ] Pages created with content
- [ ] Contact Form 7 configured
- [ ] Logo images uploaded
- [ ] Tested on all devices
- [ ] Forms work correctly
- [ ] All links functional
- [ ] SEO basics configured
- [ ] Performance optimized
- [ ] Analytics added (optional)
- [ ] Backup created

## 📞 Support Resources

- **WPCode Docs:** https://wpcode.com/docs/
- **CF7 Docs:** https://contactform7.com/docs/
- **AOS Docs:** https://michalsnik.github.io/aos/
- **WordPress Codex:** https://codex.wordpress.org/

---

**Quick Tip:** Save this reference card for easy access during implementation!
