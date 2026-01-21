# XConnectDC WordPress Implementation Guide

## Complete Step-by-Step Guide for Building with WPCode & Elementor

---

## Table of Contents

1. [Prerequisites & Initial Setup](#1-prerequisites--initial-setup)
2. [WPCode Plugin Configuration](#2-wpcode-plugin-configuration)
3. [Snippet Organization Strategy](#3-snippet-organization-strategy)
4. [Global Snippets (Site-wide)](#4-global-snippets-site-wide)
5. [Page-Specific Implementation](#5-page-specific-implementation)
6. [Elementor Page Builder Setup](#6-elementor-page-builder-setup)
7. [Image Recommendations](#7-image-recommendations)
8. [Testing & Quality Assurance](#8-testing--quality-assurance)
9. [Performance Optimization](#9-performance-optimization)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Prerequisites & Initial Setup

### WordPress Business Plan Features Used:
- **WPCode Plugin** - For custom HTML, CSS, and JavaScript snippets
- **Elementor** - For page building and layout structure
- **Custom Fonts** - Google Fonts integration
- **Custom CSS** - Global styling

### Required Assets:
- Logo file: `/wp-content/uploads/2025/12/Your-paragraph-text2.svg`
- Brand colors configured
- AOS animation library (CDN)

### Initial WordPress Settings:
1. **Settings > Reading**: Set homepage to static page
2. **Settings > Permalinks**: Set to "Post name" structure
3. **Appearance > Customize**: Remove default header/footer if using theme

---

## 2. WPCode Plugin Configuration

### Installing WPCode:
1. Go to **Plugins > Add New**
2. Search for "WPCode"
3. Install and activate "WPCode – Insert Headers and Footers"

### WPCode Dashboard Overview:
- **Code Snippets > + Add Snippet**: Create new snippets
- **Code Snippets > Headers & Footers**: Global head/body scripts
- **Code Snippets > All Snippets**: Manage existing snippets

### Snippet Types Available:
| Type | Use Case |
|------|----------|
| HTML | Page sections, structured content |
| CSS | Styling, animations, responsive rules |
| JavaScript | Interactions, scroll effects, forms |
| PHP | WordPress-specific functions (advanced) |

---

## 3. Snippet Organization Strategy

### Recommended Naming Convention:
```
[Priority]-[Scope]-[Purpose]

Examples:
01-global-fonts-aos
02-global-css-variables
03-global-header
04-global-footer
05-home-hero
06-home-services
...
```

### Snippet Categories:
1. **Global Snippets** (01-04): Load on all pages
2. **Home Page** (05-09): Load only on homepage
3. **About Page** (10-13): Load only on about page
4. **Services Page** (14-17): Load only on services page
5. **Contact Page** (18-20): Load only on contact page

### Load Location Settings:
| Snippet Type | Location |
|--------------|----------|
| CSS | Site Wide Header |
| JavaScript | Site Wide Footer |
| HTML Sections | Page-specific with shortcode |

---

## 4. Global Snippets (Site-wide)

### How to Add Global Snippets:

#### Step 1: Add Fonts & AOS Library
1. Go to **Code Snippets > Headers & Footers**
2. In the **Header** section, paste the fonts/AOS code
3. Click **Save Changes**

#### Step 2: Add Global CSS
1. Go to **Code Snippets > + Add Snippet**
2. Select **"Add Your Custom Code (New Snippet)"**
3. Choose **CSS Snippet**
4. Name: `01-global-css-variables`
5. Set **Location**: Site Wide Header
6. Set **Auto Insert**: On
7. Paste CSS code and **Save**

#### Step 3: Add Header HTML
1. Create new **HTML Snippet**
2. Name: `02-global-header`
3. Set **Auto Insert**: Site Wide Header (after opening body)
4. Paste header HTML and **Save**

#### Step 4: Add Footer HTML
1. Create new **HTML Snippet**
2. Name: `03-global-footer`
3. Set **Auto Insert**: Site Wide Footer
4. Paste footer HTML and **Save**

#### Step 5: Add Global JavaScript
1. Create new **JavaScript Snippet**
2. Name: `04-global-scripts`
3. Set **Location**: Site Wide Footer
4. Paste JS code and **Save**

---

## 5. Page-Specific Implementation

### Method A: Using Shortcodes (Recommended)

1. Create HTML snippet for each section
2. In WPCode, enable **"Shortcode"** option
3. Copy the generated shortcode (e.g., `[wpcode id="123"]`)
4. Paste shortcode in Elementor using **Shortcode widget**

### Method B: Using Auto Insert with Conditions

1. Create snippet with **Auto Insert** enabled
2. Under **Smart Conditional Logic**:
   - Select **Page** > **Page URL** > Contains > `page-slug`
3. Snippet loads only on specified page

### Method C: Manual Insert (Elementor HTML Widget)

1. Create snippet without auto-insert
2. Copy the raw code
3. In Elementor, add **HTML widget**
4. Paste code directly

---

## 6. Elementor Page Builder Setup

### Creating Pages:

#### Step 1: Create Pages in WordPress
1. Go to **Pages > Add New**
2. Create these pages:
   - Home (set as homepage)
   - About
   - Services
   - Contact

#### Step 2: Elementor Page Structure

For each page:
1. Open page with Elementor
2. Set page layout to **"Elementor Full Width"** or **"Elementor Canvas"**
3. Remove default padding/margins

### Elementor Section Setup for Custom Snippets:

```
Page Structure:
├── Section: Header (if not auto-inserted)
│   └── Shortcode Widget: [wpcode id="header-id"]
│
├── Section: Hero
│   └── Shortcode Widget: [wpcode id="hero-id"]
│
├── Section: Content 1
│   └── Shortcode Widget: [wpcode id="section-id"]
│
├── Section: Content 2
│   └── Shortcode Widget: [wpcode id="section-id"]
│
└── Section: Footer (if not auto-inserted)
    └── Shortcode Widget: [wpcode id="footer-id"]
```

### Elementor Settings for Each Section:

1. **Add New Section** (Full Width)
2. **Layout Tab**:
   - Content Width: Full Width
   - Column Gap: No Gap
   - Height: Min Height (if needed)
3. **Advanced Tab**:
   - Margin: 0
   - Padding: 0
4. **Add Shortcode Widget** inside column
5. Paste WPCode shortcode

---

## 7. Image Recommendations

### Hero Section (Home):
**Recommended Images:**
- Abstract network visualization with glowing nodes
- Data center server room with blue lighting
- Digital connectivity mesh/grid pattern
- Circuit board patterns with depth of field

**Sources (Royalty-Free):**
- Unsplash: Search "data center", "network infrastructure", "server room"
- Pexels: Search "technology abstract", "fiber optic"
- Freepik: Search "data center illustration"

**Suggested Unsplash Images:**
1. https://unsplash.com/photos/server-room-blue - Server room ambiance
2. https://unsplash.com/photos/network-cables - Network infrastructure
3. https://unsplash.com/photos/data-center - Data center facility

**Specifications:**
- Resolution: 1920x1080px minimum
- Format: WebP (for performance) or optimized JPG
- File size: Under 200KB after optimization

### About Section:
- Team/professional environment photo
- Office/facility interior
- Abstract geometric patterns representing connectivity

### Services Section:
**Icons (Use SVG for crisp display):**
- Heroicons: https://heroicons.com
- Phosphor Icons: https://phosphoricons.com
- Lucide: https://lucide.dev

**Service Illustrations:**
- Data Center: Server rack illustration
- OPGW: Fiber optic cable visual
- Network: Connected nodes diagram
- Managed Services: Support/monitoring dashboard

### Contact Section:
- Minimalist office/workspace image
- Map placeholder or abstract location graphic

### Image Optimization Workflow:
1. Download high-res image
2. Resize to required dimensions
3. Compress using TinyPNG or Squoosh
4. Convert to WebP format
5. Upload to WordPress Media Library
6. Note the URL for use in snippets

---

## 8. Testing & Quality Assurance

### Pre-Launch Checklist:

#### Desktop Testing:
- [ ] Header sticky behavior works
- [ ] All navigation links functional
- [ ] Animations trigger correctly
- [ ] No horizontal scroll
- [ ] Forms submit properly
- [ ] All images load

#### Mobile Testing:
- [ ] Hamburger menu works
- [ ] Mobile menu closes on link click
- [ ] Touch interactions responsive
- [ ] Text readable without zoom
- [ ] Buttons easily tappable (min 44px)
- [ ] No overlapping elements

#### Cross-Browser Testing:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

#### Performance Testing:
- [ ] PageSpeed Insights score > 80
- [ ] First Contentful Paint < 2s
- [ ] No render-blocking resources
- [ ] Images optimized

### Testing Tools:
- **Google PageSpeed Insights**: Performance audit
- **GTmetrix**: Detailed performance analysis
- **BrowserStack**: Cross-browser testing
- **Chrome DevTools**: Responsive design testing

---

## 9. Performance Optimization

### CSS Optimization:
1. Combine all CSS into one snippet when possible
2. Remove unused CSS rules
3. Use CSS custom properties (variables) for consistency
4. Minify CSS before production

### JavaScript Optimization:
1. Load scripts in footer (not header)
2. Use `defer` attribute for non-critical scripts
3. Minimize DOM manipulation
4. Debounce scroll event listeners

### Image Optimization:
1. Use WebP format
2. Implement lazy loading (`loading="lazy"`)
3. Specify width/height to prevent layout shift
4. Use responsive images with `srcset`

### WordPress Optimization:
1. Enable caching (if available on Business plan)
2. Minimize plugins
3. Use WordPress CDN for assets

---

## 10. Troubleshooting

### Common Issues & Solutions:

#### Issue: Snippet not appearing
**Solutions:**
- Check if snippet is activated (toggle ON)
- Verify insertion location is correct
- Check conditional logic if used
- Clear browser cache

#### Issue: Styles conflicting with theme
**Solutions:**
- Increase CSS specificity using `.xconnect` wrapper
- Use `!important` sparingly for overrides
- Disable theme's default header/footer

#### Issue: Mobile menu not working
**Solutions:**
- Verify JavaScript is loading (check console)
- Ensure DOM elements exist before JS runs
- Check for JS errors in console

#### Issue: Animations not triggering
**Solutions:**
- Confirm AOS library is loaded
- Check `data-aos` attributes are correct
- Verify AOS.init() is called after DOM ready

#### Issue: Header not sticky
**Solutions:**
- Check `position: fixed` is applied
- Verify z-index is high enough
- Ensure body has padding-top to compensate

### Debug Mode:
Add this temporarily to see all loaded snippets:
```javascript
console.log('WPCode Snippets Active');
document.querySelectorAll('[data-wpcode]').forEach(el => console.log(el));
```

---

## Quick Reference: Snippet Placement Order

### Global (Auto Insert - All Pages):
| Order | Snippet | Location | Type |
|-------|---------|----------|------|
| 1 | Fonts & AOS | Header | HTML |
| 2 | CSS Variables & Base | Header | CSS |
| 3 | Header | After Body Open | HTML |
| 4 | Footer | Before Body Close | HTML |
| 5 | Global Scripts | Footer | JS |

### Per-Page (Shortcodes in Elementor):
| Page | Sections (in order) |
|------|---------------------|
| Home | Hero → What We Do → Why Us → Industries → CTA |
| About | Intro → Mission/Vision → Core Values |
| Services | Hero → Service Blocks (4) → CTA |
| Contact | Header → Form + Details |

---

## File Reference

All snippet files are provided in this directory:
- `01-global-fonts-aos.html`
- `02-global-css-base.css`
- `03-global-header.html`
- `04-global-footer.html`
- `05-global-scripts.js`
- `06-home-hero.html`
- `07-home-what-we-do.html`
- `08-home-why-us.html`
- `09-home-industries.html`
- `10-home-cta.html`
- `11-about-intro.html`
- `12-about-mission-vision.html`
- `13-about-values.html`
- `14-services-hero.html`
- `15-services-blocks.html`
- `16-services-cta.html`
- `17-contact-page.html`

---

## Support

For WordPress Business Plan support:
- WordPress.com Help: https://wordpress.com/support/
- WPCode Documentation: https://wpcode.com/docs/
- Elementor Help: https://elementor.com/help/

---

*This guide is designed for the XConnectDC website project. Follow each step sequentially for best results.*