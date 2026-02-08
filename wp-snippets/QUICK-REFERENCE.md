# XConnectDC WPCode Snippets - Quick Reference Card
## ⚠️ WPCode FREE Plan Compatible

## 📦 Installation Order

### 1️⃣ CSS Snippets (In Order - IMPORTANT!)
```
Priority 1: css/01-global-variables.css     → Site Wide Header
Priority 2: css/02-global-base.css          → Site Wide Header
Priority 3: css/03-components.css           → Site Wide Header
Priority 4: css/04-home.css                 → Site Wide Header (loads everywhere - FREE plan)
Priority 5: css/05-about.css                → Site Wide Header (loads everywhere - FREE plan)
Priority 6: css/06-services.css             → Site Wide Header (loads everywhere - FREE plan)
Priority 7: css/07-contact.css              → Site Wide Header (loads everywhere - FREE plan)
Priority 8: css/08-forms.css                → Site Wide Header
```
**Note**: FREE plan doesn't support conditional logic, so all CSS loads site-wide.

### 2️⃣ PHP Snippets
```
Priority 1: php/01-enqueue-fonts-libraries.php → Run Everywhere
Priority 2: php/02-theme-support.php           → Run Everywhere
```
**Note**: Removed 03-shortcode-functions.php (shortcodes require Pro/Business plan)

### 3️⃣ JavaScript Snippets
```
Priority 1: js/01-global-scripts.js  → Site Wide Footer
Priority 2: js/02-aos-init.js        → Site Wide Footer
Priority 3: js/03-form-handling.js   → Site Wide Footer
```

### 4️⃣ HTML Components (Manual Integration Required)
```
html/header-component.html  → Add to theme header.php or via Appearance > Customize
html/footer-component.html  → Add to theme footer.php or via Appearance > Customize
html/contact-popup.html     → Add as HTML snippet (Footer location)
html/back-to-top.html       → Add as HTML snippet (Footer location)
```

### 5️⃣ WordPress Pages (Direct HTML Paste)
```
html/pages/home-page.html     → Create "Home" page, paste HTML in Code Editor
html/pages/about-page.html    → Create "About" page, paste HTML in Code Editor
html/pages/services-page.html → Create "Services" page, paste HTML in Code Editor
html/pages/contact-page.html  → Create "Contact" page, paste HTML in Code Editor
```
**Important**: Paste HTML directly into WordPress Page Editor (Code/Text mode), NOT as WPCode snippets.

## ⚠️ WPCode FREE Plan Limitations

**NO Shortcodes** - Custom shortcodes require Pro/Business plan
- Use page HTML files instead (html/pages/*.html)
- Paste directly into WordPress page editor

**NO Conditional Logic** - All CSS loads site-wide
- Page-specific CSS will load on all pages
- Small performance impact but still acceptable

**HTML Components** - Require manual theme integration
- Header/footer need theme file editing OR
- Use "Insert Headers and Footers" plugin as alternative

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
- ✅ WPCode FREE (no Pro/Business needed)
- ✅ Contact Form 7
- ✅ Insert Headers and Footers (optional - for header/footer components)

### 2. Create Pages & Add HTML Content
- Home (paste html/pages/home-page.html content, set as front page)
- About (paste html/pages/about-page.html content)
- Services (paste html/pages/services-page.html content)
- Contact (paste html/pages/contact-page.html content)

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

### Page HTML Not Displaying Properly?
1. Verify you're using Code Editor (not Visual Editor)
2. Check that required CSS snippets are active
3. Clear WordPress and browser cache
4. Verify HTML was pasted completely

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
