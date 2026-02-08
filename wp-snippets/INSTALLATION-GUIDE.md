# WPCode FREE Plan Installation Guide

## ⚠️ IMPORTANT: WPCode FREE Plan Only

This installation guide is **exclusively optimized for WPCode FREE plan users**. The code snippets and workflows described here are specifically designed to work with the limitations and features of the WPCode FREE plugin.

**Pro/Business features are NOT included in this guide.**

---

## 1. Overview

This package provides a complete WordPress theme/website solution designed specifically for **WPCode FREE plan users**. Since the FREE plan has limitations around conditional logic and advanced features, we've structured the code to be:

- **Simple and direct**: All assets load globally without complex conditions
- **Lightweight**: Minimal dependencies and lean code
- **WordPress-native**: Uses standard WordPress functionality that doesn't require premium plugins
- **Easy to maintain**: Clear file organization and straightforward installation steps

The entire package is installable through WPCode FREE snippets + basic WordPress page editing.

---

## 2. What's Included

This package contains **21 files** organized into CSS, JavaScript, PHP snippets, and HTML components:

### File Count Summary
| Category | Count | Files |
|----------|-------|-------|
| **CSS Snippets** | 8 | Global variables, base styles, components, home, about, services, contact, forms |
| **PHP Snippets** | 2 | Enqueue fonts/libraries, theme support (Shortcode file was removed - FREE plan limitation) |
| **JavaScript Snippets** | 3 | Global scripts, AOS initialization, form handling |
| **HTML Components** | 4 | Header, footer, contact popup, back-to-top button |
| **WordPress Pages** | 4 | Home, About, Services, Contact pages |
| **HTML Sections** | 5 | Hero, why-us, services, industries, CTA (included in page files) |

---

## 3. Prerequisites

Before installation, ensure you have the following:

### Required Software
- **WordPress**: Version 6.0 or higher
- **WPCode Plugin**: FREE plan version (must be installed and activated)
- **Contact Form 7**: For form handling on contact pages

### Recommended Theme
Choose one of these lightweight, compatible themes:
- **Hello Elementor** (Free version)
- **Astra** (Free version)
- **GeneratePress** (Free version)
- **WordPress Classic** (Twenty Twenty-Two or later)

Any theme is technically compatible, but lightweight themes perform better with this package.

### ⚠️ WPCode FREE Plan Limitations
Be aware of these FREE plan limitations that affect how we've structured this code:

| Feature | FREE Plan | Our Workaround |
|---------|-----------|----------------|
| **Conditional Logic** | ❌ Not available | All CSS loads site-wide |
| **Custom Shortcodes** | ❌ Not available | We removed shortcode functions (03-shortcode-functions.php) |
| **Advanced Features** | ❌ Not available | Using standard WordPress hooks instead |
| **HTML Snippets** | ✅ Available | Used for components and popups |

---

## 4. File Structure

Here's the complete directory structure of the wp-snippets folder:

```
wp-snippets/
├── INSTALLATION-GUIDE.md          (This file)
├── IMPLEMENTATION-GUIDE.md        (Detailed implementation reference)
├── QUICK-REFERENCE.md            (Quick lookup table)
├── SUMMARY.md                     (Package overview)
├── 00-README.md                   (Original README)
│
├── css/                           (8 CSS Snippet Files)
│   ├── 01-global-variables.css    (CSS custom properties/tokens)
│   ├── 02-global-base.css         (Base styles for all elements)
│   ├── 03-components.css          (Component styles: nav, buttons, cards)
│   ├── 04-home.css                (Home page specific styles)
│   ├── 05-about.css               (About page specific styles)
│   ├── 06-services.css            (Services page specific styles)
│   ├── 07-contact.css             (Contact page specific styles)
│   └── 08-forms.css               (Form styling for all pages)
│
├── php/                           (2 PHP Snippet Files)
│   ├── 01-enqueue-fonts-libraries.php (Load Google Fonts, AOS library, etc.)
│   └── 02-theme-support.php           (Add WordPress theme support)
│
├── js/                            (3 JavaScript Snippet Files)
│   ├── 01-global-scripts.js       (Global utility functions, mobile menu)
│   ├── 02-aos-init.js             (Initialize AOS - Animate On Scroll)
│   └── 03-form-handling.js        (Contact form handling)
│
└── html/                          (HTML Components & Pages)
    ├── header-component.html      (Site header with navigation)
    ├── footer-component.html      (Site footer)
    ├── contact-popup.html         (Contact popup modal)
    ├── back-to-top.html           (Back-to-top button)
    │
    ├── pages/                     (Complete Page Files)
    │   ├── home-page.html         (Home page - complete with sections)
    │   ├── about-page.html        (About page)
    │   ├── services-page.html     (Services page)
    │   └── contact-page.html      (Contact page)
    │
    └── sections/                  (Reusable Sections - referenced in pages)
        ├── hero-section.html
        ├── why-us-section.html
        ├── services-section.html
        ├── industries-section.html
        └── cta-section.html
```

---

## 5. Installation Steps

Follow these three phases carefully. Each phase builds on the previous one.

### ⏱️ Estimated Time: 30-45 minutes

---

### Phase 1: Install WPCode Snippets (CSS, PHP, JavaScript)

#### Step 1.1: Log in to WordPress Dashboard

Go to **WordPress Dashboard** → **WPCode** (in the sidebar)

#### Step 1.2: Install CSS Snippets (8 files)

For **each CSS file**, follow these steps:

**Note**: CSS files must load in priority order (1-8) to ensure proper style cascade.

<details>
<summary><b>CSS Snippet Installation Template</b></summary>

1. Click **+ Add Snippet** → **Add Your Custom Code**
2. Fill in the form:
   - **Name**: `[Priority #] - [File Name]` (e.g., `1 - Global Variables`)
   - **Code Type**: `CSS Snippet`
   - **Code Location**: `Site Wide Header`
   - **Status**: `Active`
3. Copy the entire code from the CSS file (see table below for file paths)
4. Paste into the code editor
5. Click **Save Snippet**

</details>

**Install CSS in this order:**

| Priority | File Name | CSS File | Description |
|----------|-----------|----------|-------------|
| 1 | Global Variables | `css/01-global-variables.css` | CSS custom properties (colors, fonts, spacing) |
| 2 | Global Base | `css/02-global-base.css` | Base styles for HTML elements |
| 3 | Components | `css/03-components.css` | Navigation, buttons, cards, header, footer |
| 4 | Home | `css/04-home.css` | Home page specific styling |
| 5 | About | `css/05-about.css` | About page specific styling |
| 6 | Services | `css/06-services.css` | Services page specific styling |
| 7 | Contact | `css/07-contact.css` | Contact page specific styling |
| 8 | Forms | `css/08-forms.css` | Form element styling (all pages) |

**⚠️ FREE Plan Note**: All CSS snippets load site-wide. The FREE plan doesn't support conditional logic, so you can't limit CSS to specific pages. This is intentional - page-specific CSS works because different pages use different HTML structures. Don't try to make these conditional.

---

#### Step 1.3: Install PHP Snippets (2 files)

For **each PHP file**, follow these steps:

<details>
<summary><b>PHP Snippet Installation Template</b></summary>

1. Click **+ Add Snippet** → **Add Your Custom Code**
2. Fill in the form:
   - **Name**: `[Priority #] - [File Name]`
   - **Code Type**: `PHP Snippet`
   - **Code Location**: `Run Everywhere`
   - **Status**: `Active`
3. Copy the entire code from the PHP file
4. Paste into the code editor
5. Click **Save Snippet**

</details>

**Install PHP in this order:**

| Priority | File Name | PHP File | Description |
|----------|-----------|----------|-------------|
| 1 | Enqueue Fonts & Libraries | `php/01-enqueue-fonts-libraries.php` | Load Google Fonts and AOS library |
| 2 | Theme Support | `php/02-theme-support.php` | Add WordPress theme support (menus, featured images) |

**Note**: We do NOT include a "03-shortcode-functions.php" file. The WPCode FREE plan doesn't support creating custom shortcodes, so we've removed this file entirely. All page content is added directly as HTML.

---

#### Step 1.4: Install JavaScript Snippets (3 files)

For **each JavaScript file**, follow these steps:

<details>
<summary><b>JavaScript Snippet Installation Template</b></summary>

1. Click **+ Add Snippet** → **Add Your Custom Code**
2. Fill in the form:
   - **Name**: `[Priority #] - [File Name]`
   - **Code Type**: `JavaScript Snippet`
   - **Code Location**: `Footer`
   - **Status**: `Active`
3. Copy the entire code from the JavaScript file
4. Paste into the code editor
5. Click **Save Snippet**

</details>

**Install JavaScript in this order:**

| Priority | File Name | JS File | Description |
|----------|-----------|---------|-------------|
| 1 | Global Scripts | `js/01-global-scripts.js` | Mobile menu toggle, utilities |
| 2 | AOS Initialization | `js/02-aos-init.js` | Initialize Animate On Scroll library |
| 3 | Form Handling | `js/03-form-handling.js` | Contact form submission handling |

**Note**: All JavaScript snippets go in the **Footer** location for optimal page loading performance.

---

### Phase 2: Add HTML Components to Theme

The HTML component files (header, footer, popup, back-to-top) need to be integrated into your WordPress theme.

#### Step 2.1: Add Header Component

Your header component contains navigation and branding. Add it using one of these methods:

**Method A: Via Theme Customizer (Recommended for beginners)**
1. Go to **Appearance** → **Customize**
2. Look for a "Header" or "Site Identity" section
3. Locate the file: `html/header-component.html`
4. Copy the HTML code
5. Paste it into the appropriate header area

**Method B: Direct Theme Edit (For developers)**
1. Go to **Appearance** → **File Editor** (if available)
2. Open `header.php`
3. Find the location where you want the navigation (usually after `<body>` tag)
4. Add the header component HTML from `html/header-component.html`

**Method C: Using WPCode HTML Snippet**
1. Go to **WPCode** → **+ Add Snippet** → **Add Your Custom Code**
2. Set Name: "Header Component"
3. Code Type: **HTML Snippet**
4. Code Location: **Header**
5. Copy/paste from `html/header-component.html`
6. Save and activate

---

#### Step 2.2: Add Footer Component

Add the footer similarly to the header:

**Method A: Via Theme Customizer**
1. Go to **Appearance** → **Customize**
2. Look for a "Footer" or "Footer Widgets" section
3. Copy from: `html/footer-component.html`
4. Paste into the footer area

**Method B: Direct Theme Edit**
1. Go to **Appearance** → **File Editor**
2. Open `footer.php`
3. Add the footer component HTML from `html/footer-component.html` before the closing `</footer>` tag

**Method C: Using WPCode HTML Snippet**
1. Go to **WPCode** → **+ Add Snippet** → **Add Your Custom Code**
2. Set Name: "Footer Component"
3. Code Type: **HTML Snippet**
4. Code Location: **Footer**
5. Copy/paste from `html/footer-component.html`
6. Save and activate

---

#### Step 2.3: Add Contact Popup (HTML Snippet)

1. Go to **WPCode** → **+ Add Snippet** → **Add Your Custom Code**
2. Fill in:
   - **Name**: `Contact Popup Modal`
   - **Code Type**: `HTML Snippet`
   - **Code Location**: `Footer`
   - **Status**: `Active`
3. Copy the entire content from: `html/contact-popup.html`
4. Paste into code editor
5. Save and activate

---

#### Step 2.4: Add Back-to-Top Button (HTML Snippet)

1. Go to **WPCode** → **+ Add Snippet** → **Add Your Custom Code**
2. Fill in:
   - **Name**: `Back to Top Button`
   - **Code Type**: `HTML Snippet`
   - **Code Location**: `Footer`
   - **Status**: `Active`
3. Copy the entire content from: `html/back-to-top.html`
4. Paste into code editor
5. Save and activate

---

### Phase 3: Create WordPress Pages

Now create the 4 main pages using the HTML files provided.

#### Step 3.1: Create Home Page

1. Go to **Pages** → **Add New**
2. Set **Title**: "Home"
3. Switch to **Code Editor** (Text mode)
   - Look for "Code Editor" button or switch in the top-right
   - Or press `Ctrl+Alt+Shift+M` (Windows) or `Cmd+Option+Shift+M` (Mac)
4. **Delete any default content** in the code editor
5. Open: `html/pages/home-page.html`
6. Copy the **entire HTML content**
7. Paste into the WordPress page code editor
8. Click **Publish**
9. After publishing, go to **Settings** → **Reading**
10. Set **Homepage displays**: `A static page`
11. Set **Homepage**: `Home` (the page you just created)

**Result**: Your home page is now live with all hero, services, and CTA sections.

---

#### Step 3.2: Create About Page

1. Go to **Pages** → **Add New**
2. Set **Title**: "About"
3. Switch to **Code Editor**
4. Delete any default content
5. Open: `html/pages/about-page.html`
6. Copy the **entire HTML content**
7. Paste into the code editor
8. Click **Publish**

**Note**: If you want an "About" link in the navigation menu, add it to WordPress Menus:
- Go to **Appearance** → **Menus**
- Add the About page to your menu

---

#### Step 3.3: Create Services Page

1. Go to **Pages** → **Add New**
2. Set **Title**: "Services"
3. Switch to **Code Editor**
4. Delete any default content
5. Open: `html/pages/services-page.html`
6. Copy the **entire HTML content**
7. Paste into the code editor
8. Click **Publish**

---

#### Step 3.4: Create Contact Page

1. Go to **Pages** → **Add New**
2. Set **Title**: "Contact"
3. Switch to **Code Editor**
4. Delete any default content
5. Open: `html/pages/contact-page.html`
6. Copy the **entire HTML content**
7. Paste into the code editor
8. Click **Publish**

**Important**: The contact page HTML includes a Contact Form 7 shortcode. Make sure Contact Form 7 plugin is installed and you have a form created with ID matching the shortcode in the page HTML.

---

## 6. Snippet Import Order Reference

This table shows the complete installation order with priorities. **Follow this order exactly** to ensure proper style cascading and script loading.

### All Snippets in Order

| # | Priority | File Name | Type | Location | Description |
|---|----------|-----------|------|----------|-------------|
| 1 | 1 | Global Variables | CSS | Header | Design tokens (colors, fonts, spacing) |
| 2 | 2 | Global Base | CSS | Header | Base styles for HTML elements |
| 3 | 3 | Components | CSS | Header | Navigation, buttons, cards |
| 4 | 4 | Home | CSS | Header | Home page specific styles |
| 5 | 5 | About | CSS | Header | About page specific styles |
| 6 | 6 | Services | CSS | Header | Services page specific styles |
| 7 | 7 | Contact | CSS | Header | Contact page specific styles |
| 8 | 8 | Forms | CSS | Header | Form styling |
| 9 | 1 | Enqueue Fonts & Libraries | PHP | Run Everywhere | Load Google Fonts, AOS |
| 10 | 2 | Theme Support | PHP | Run Everywhere | Add WordPress theme support |
| 11 | 1 | Global Scripts | JS | Footer | Mobile menu, utilities |
| 12 | 2 | AOS Initialization | JS | Footer | Animate On Scroll setup |
| 13 | 3 | Form Handling | JS | Footer | Contact form submission |
| 14 | — | Header Component | HTML | Header/Customizer | Site header with nav |
| 15 | — | Footer Component | HTML | Footer/Customizer | Site footer |
| 16 | — | Contact Popup | HTML | Footer | Contact popup modal |
| 17 | — | Back to Top Button | HTML | Footer | Back-to-top button |

---

## 7. WordPress Pages Setup

After installing all snippets in Phase 1 and Phase 2, create these 4 pages with the HTML files:

### Page Setup Details

| Page | File | Slug | Template | Key Features |
|------|------|------|----------|--------------|
| **Home** | `html/pages/home-page.html` | `/` | Default | Hero section, services preview, CTA |
| **About** | `html/pages/about-page.html` | `/about/` | Default | Company info, team, mission |
| **Services** | `html/pages/services-page.html` | `/services/` | Default | Full service listings, industry focus |
| **Contact** | `html/pages/contact-page.html` | `/contact/` | Default | Contact form (CF7), popup trigger |

### Page HTML Structure

Each page HTML file is **complete and standalone**. It includes:
- Full HTML structure (doctype, html, head, body tags)
- All necessary sections and components
- Links to your CSS and JavaScript snippets
- Responsive design for mobile/tablet/desktop

**Important**: The page HTML files are located in `html/pages/`, NOT `html/sections/`. The sections folder contains reusable components that are already embedded in the page files.

---

## 8. WPCode FREE Plan Limitations & Workarounds

The WPCode FREE plan has specific limitations. We've designed this package to work within those limits:

### Limitation 1: No Conditional Logic
**What it means**: You can't tell WPCode to load CSS only on specific pages.

**How we work around it**: 
- All CSS loads on every page (site-wide header)
- Page-specific CSS still works because different pages use different HTML structures
- Page-specific styles target specific page elements that only exist on those pages

**Example**: Home page CSS targets `.home-hero` class, which only appears on the home page. So the CSS loads everywhere, but only applies to the home page.

---

### Limitation 2: No Custom Shortcodes
**What it means**: You can't create `[my_custom_shortcode]` that WPCode can handle.

**How we work around it**:
- We removed `03-shortcode-functions.php` entirely
- All page content is added as **direct HTML**, not shortcodes
- You copy/paste full HTML into WordPress page editor instead of using shortcodes

**This is better for you**: Direct HTML is actually more reliable and doesn't depend on WPCode functionality.

---

### Limitation 3: Limited Code Location Options
**What it means**: You can only place snippets in Header/Footer and a few other basic locations.

**How we work around it**:
- PHP snippets go in "Run Everywhere" (handles both header/footer loading)
- CSS snippets go in "Site Wide Header" (most reliable location)
- JS snippets go in "Footer" (best for page load performance)

---

### What Works Great in FREE Plan ✅

| Feature | Status | Notes |
|---------|--------|-------|
| CSS Snippets | ✅ Full support | Load in Header location |
| PHP Snippets | ✅ Full support | Use standard WordPress hooks |
| JS Snippets | ✅ Full support | Load in Footer location |
| HTML Snippets | ✅ Full support | Use for components and popups |
| Code Organization | ✅ Excellent | Clear file structure |
| Easy Activation/Deactivation | ✅ Yes | Simple toggle in WPCode |
| Backup & Import | ✅ Yes | Export snippets as JSON |

---

## 9. Testing Checklist

After completing all three phases, verify everything works:

### Pre-Launch Testing

- [ ] **WPCode Dashboard**
  - [ ] All 13 WPCode snippets show "Active" status
  - [ ] No PHP errors in error logs
  - [ ] Snippets can be toggled on/off without breaking the site

- [ ] **CSS & Design**
  - [ ] All 8 CSS snippets are active
  - [ ] Website has professional styling (not default WordPress theme)
  - [ ] Navigation bar is visible and styled
  - [ ] Footer is visible and styled
  - [ ] Buttons have proper styling and hover effects

- [ ] **JavaScript Functionality**
  - [ ] Mobile menu toggle works (click hamburger on mobile)
  - [ ] Animations appear when scrolling (AOS library)
  - [ ] Back-to-top button appears and works
  - [ ] Contact popup opens when clicking contact button

- [ ] **Pages Display Correctly**
  - [ ] Home page shows hero section, services, CTA
  - [ ] About page shows company information
  - [ ] Services page shows full service list
  - [ ] Contact page shows contact form

- [ ] **Forms & Interactivity**
  - [ ] Contact form on contact page loads properly
  - [ ] Contact form submissions work (check Contact Form 7 configuration)
  - [ ] Form validation works (required fields show errors)
  - [ ] Success message displays after submission

- [ ] **Responsive Design**
  - [ ] Website looks good on desktop (1920x1080)
  - [ ] Website looks good on tablet (768px width)
  - [ ] Website looks good on mobile (375px width)
  - [ ] Mobile menu works on small screens
  - [ ] Images scale properly on all sizes

- [ ] **Performance & Loading**
  - [ ] Page loads in under 3 seconds on desktop
  - [ ] Page loads in under 5 seconds on mobile
  - [ ] No console errors (browser DevTools)
  - [ ] No broken image links
  - [ ] No missing fonts

- [ ] **Browser Compatibility**
  - [ ] Works in Chrome/Edge (latest)
  - [ ] Works in Firefox (latest)
  - [ ] Works in Safari (latest)
  - [ ] Works in mobile browsers

---

## 10. Troubleshooting Common Issues

### Issue: CSS Not Loading / Styles Look Broken

**Symptom**: Website looks like plain text without any styling.

**Causes & Solutions**:
1. **CSS snippets not active**
   - Go to **WPCode Dashboard**
   - Check that all 8 CSS snippets show "Active" status (green checkmark)
   - If not active, click to activate them

2. **CSS code is malformed**
   - Go to **WPCode Dashboard**
   - Click each CSS snippet to edit
   - Check for syntax errors (WPCode will show an error message)
   - Compare with the original file in `css/` folder

3. **Browser cache issue**
   - Press `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac) to hard refresh
   - Or clear browser cache and try again

4. **WordPress cache plugin**
   - If you have caching plugin (WP Super Cache, LiteSpeed, etc.)
   - Clear the cache after activating CSS snippets

---

### Issue: JavaScript Errors or Functions Not Working

**Symptom**: JavaScript console shows errors, mobile menu doesn't toggle, animations don't work.

**Causes & Solutions**:
1. **JavaScript snippets not active**
   - Go to **WPCode Dashboard**
   - Check that all 3 JS snippets show "Active" status
   - Activate if needed

2. **Check browser console**
   - Press `F12` to open Developer Tools
   - Click **Console** tab
   - Look for red error messages
   - Note the error message and check the relevant JS file

3. **Verify HTML elements exist**
   - For mobile menu: check that header has `.mobile-menu-toggle` button
   - For animations: check that elements have `data-aos` attributes
   - For back-to-top: check that footer has `#back-to-top` button

4. **Library load order**
   - PHP snippet "01-enqueue-fonts-libraries" must load AOS library first
   - JS snippet "02-aos-init" initializes it
   - If AOS doesn't work, check that the PHP snippet is active

---

### Issue: Contact Form Not Submitting

**Symptom**: Contact form shows but doesn't submit, no success message.

**Causes & Solutions**:
1. **Contact Form 7 not installed**
   - Go to **Plugins** → **Add New**
   - Search for "Contact Form 7"
   - Install and activate it
   - Create a contact form (you'll get a shortcode like `[contact-form-7 id="123"]`)

2. **Form ID mismatch**
   - Open `html/pages/contact-page.html`
   - Look for the `[contact-form-7 id="..."]` shortcode
   - Note the ID number
   - Go to Contact Form 7 → your form
   - Verify the form ID matches the shortcode in the HTML file
   - If not, update the HTML file with the correct ID

3. **Form handling JavaScript not active**
   - Check that JS snippet "03-form-handling" is active
   - This handles form submission

4. **AJAX not configured**
   - Contact Form 7 needs AJAX to work
   - Check Contact Form 7 settings
   - Ensure AJAX is enabled

5. **Server-side issues**
   - Check WordPress error logs at `/wp-content/debug.log`
   - Contact your hosting provider about mail/SMTP configuration
   - Some hosts require additional mail configuration

---

### Issue: Mobile Menu Not Working

**Symptom**: Mobile menu button doesn't open/close menu on small screens.

**Causes & Solutions**:
1. **JavaScript not loaded**
   - Check that JS snippet "01-global-scripts" is active
   - This contains the mobile menu toggle function

2. **Mobile menu HTML missing**
   - Open `html/header-component.html`
   - Check that it contains a `.mobile-menu-toggle` button
   - Check that it contains a `.nav-menu` element

3. **CSS classes incorrect**
   - Verify that `html/03-components.css` is active
   - This contains mobile menu styling
   - Check that the CSS targets `.mobile-menu-toggle` and `.nav-menu`

4. **Viewport meta tag missing**
   - WordPress theme might not have mobile viewport meta tag
   - Add this to theme's `head` section if missing:
     ```html
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     ```

---

### Issue: Animations Not Working (AOS)

**Symptom**: Elements don't animate when scrolling into view.

**Causes & Solutions**:
1. **AOS library not loaded**
   - Check that PHP snippet "01-enqueue-fonts-libraries" is active
   - This loads the AOS library from CDN

2. **AOS not initialized**
   - Check that JS snippet "02-aos-init" is active
   - This initializes the AOS library

3. **Missing data attributes**
   - Check HTML page files for `data-aos` attributes
   - Example: `<div data-aos="fade-up">`
   - If missing, animations won't trigger

4. **Check browser console**
   - Press `F12` to open Developer Tools
   - Click **Console** tab
   - Look for errors mentioning AOS
   - Verify `window.AOS` object exists

---

### Issue: Pages Don't Display Correctly

**Symptom**: Page shows blank, shows code instead of rendered HTML, or shows errors.

**Causes & Solutions**:
1. **Not in Code Editor mode**
   - Page editor might be in Visual mode instead of Code mode
   - Click "Code Editor" button at top-right of editor
   - Or use keyboard: `Ctrl+Alt+Shift+M` (Windows) or `Cmd+Option+Shift+M` (Mac)

2. **Code editor cleared the content**
   - WordPress sometimes auto-cleans HTML
   - Try switching between Visual and Code editor multiple times
   - Copy/paste the HTML again if it was cleared

3. **HTML syntax errors**
   - Check the HTML file for unclosed tags
   - Look at line numbers where errors appear
   - Compare with original file in `html/pages/`

4. **Theme conflicts**
   - Try temporarily switching to a default theme (Twenty Twenty-Two)
   - If page works with default theme, your theme might be adding extra markup
   - Check theme documentation for page template overrides

---

### Issue: Forms Sending to Spam or Not Sending

**Symptom**: Contact submissions don't arrive in inbox or go to spam.

**Causes & Solutions**:
1. **Email configuration**
   - WordPress might not be configured to send mail
   - Check **Settings** → **General** → **Administrator email address**
   - Test with WordPress test email plugin:
     - Install "WP Mail Logging" or "MailHog"
     - Send test email to verify it's being created

2. **Contact Form 7 email settings**
   - Go to **Contact Form 7** → your form
   - Click **Mail** tab
   - Check that email address is correct
   - Check that "To" field points to blog admin email

3. **SMTP configuration**
   - Some hosts require SMTP for email
   - Consider installing SMTP plugin like "Mailgun" or "SendGrid"
   - Follow the plugin documentation to configure

4. **Spam filters**
   - Check spam/junk folder in your email
   - Contact Form 7 emails might be flagged as spam
   - Configure SPF/DKIM records on your domain (ask hosting provider)

---

## 11. Next Steps & Support

### After Installation
1. ✅ Test everything using the Testing Checklist
2. ✅ Fix any issues using Troubleshooting guide
3. ✅ Consider adding SSL/HTTPS if not already enabled
4. ✅ Set up WordPress backups (ask your hosting provider)
5. ✅ Monitor Google Search Console for indexing

### Customization Ideas (Without Upgrading to Pro)
- Change colors by editing CSS custom properties in `css/01-global-variables.css`
- Change fonts using CSS `font-family` properties
- Add more pages by copying existing page HTML structure
- Modify contact form fields in Contact Form 7 (not in WPCode)
- Change content by editing page HTML directly in WordPress

### When You Might Need WPCode PRO
- Conditional logic (show CSS only on specific pages)
- Custom shortcodes you create
- Advanced code scheduling
- Custom database operations
- Complex custom functionality

For now, this FREE plan setup is fully functional for a professional website!

---

## 12. Quick Reference Commands

### Check WPCode Installation
1. Go to **Plugins** → verify "WPCode" is installed and activated (green checkmark)
2. Click "WPCode" in sidebar → should show all snippets

### Verify PHP Snippets Working
1. Go to **WPCode** → **Snippets**
2. Look for "01-enqueue-fonts-libraries" and "02-theme-support"
3. Both should show "Active"
4. Page source should include Google Fonts in `<head>` and AOS library link

### Verify CSS Snippets Active
1. View website source code: `Ctrl+U` (Windows) or `Cmd+U` (Mac)
2. Search for "global-variables" - should find `<style>` tag with CSS

### Verify JavaScript Working
1. Open **Developer Tools**: `F12`
2. Click **Console** tab
3. Should show no major errors
4. Scroll page to see AOS animations trigger

### Test Mobile View
1. Press `F12` to open Developer Tools
2. Click **Device Toolbar** (mobile icon)
3. Select a mobile device from dropdown
4. Test mobile menu, responsive layout

---

## 13. File Locations Quick Lookup

Need a specific file? Here's where to find everything:

```
/home/runner/work/xconnectdc/xconnectdc/wp-snippets/

CSS Files (all go in WPCode as "CSS Snippet" in "Site Wide Header"):
  └── css/01-global-variables.css
  └── css/02-global-base.css
  └── css/03-components.css
  └── css/04-home.css
  └── css/05-about.css
  └── css/06-services.css
  └── css/07-contact.css
  └── css/08-forms.css

PHP Files (all go in WPCode as "PHP Snippet" in "Run Everywhere"):
  └── php/01-enqueue-fonts-libraries.php
  └── php/02-theme-support.php

JS Files (all go in WPCode as "JavaScript Snippet" in "Footer"):
  └── js/01-global-scripts.js
  └── js/02-aos-init.js
  └── js/03-form-handling.js

HTML Components (add to theme header/footer or WPCode HTML snippets):
  └── html/header-component.html
  └── html/footer-component.html
  └── html/contact-popup.html
  └── html/back-to-top.html

HTML Pages (copy/paste directly into WordPress Pages):
  └── html/pages/home-page.html
  └── html/pages/about-page.html
  └── html/pages/services-page.html
  └── html/pages/contact-page.html

HTML Sections (already included in page files, reference only):
  └── html/sections/hero-section.html
  └── html/sections/why-us-section.html
  └── html/sections/services-section.html
  └── html/sections/industries-section.html
  └── html/sections/cta-section.html
```

---

## Document Info

- **Version**: 1.0
- **Last Updated**: 2024
- **Optimized For**: WPCode FREE Plan
- **WordPress Minimum**: 6.0
- **Estimated Install Time**: 30-45 minutes

---

**Happy Installing! 🚀** Your website is ready to go with WPCode FREE plan. If you have questions, refer back to the Troubleshooting section or the IMPLEMENTATION-GUIDE.md for more detailed information.
