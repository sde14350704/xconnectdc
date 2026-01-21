# XConnectDC Local Test Environment

This folder contains a complete local testing version of the XConnectDC website that you can run on your local machine before deploying to WordPress.

## 📁 Folder Structure

```
localtest/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── contact.html        # Contact page
├── css/
│   ├── global.css      # Global CSS variables and base styles
│   ├── components.css  # Header, footer, and UI components
│   └── home.css        # Home page specific styles
├── js/
│   └── main.js         # Global JavaScript functionality
├── assets/
│   └── images/
│       ├── logo.svg       # Logo for header (light background)
│       └── logo-white.svg # Logo for footer (dark background)
└── README.md           # This file
```

## 🚀 Running the Local Server

### Option 1: Python Simple Server (Recommended)

If you have Python installed, navigate to the `localtest` folder and run:

**Python 3:**
```bash
cd xconnectdc/localtest
python -m http.server 8000
```

**Python 2:**
```bash
cd xconnectdc/localtest
python -m SimpleHTTPServer 8000
```

Then open your browser and go to: `http://localhost:8000`

### Option 2: Node.js (http-server)

If you have Node.js installed:

```bash
# Install http-server globally (only needed once)
npm install -g http-server

# Navigate to the localtest folder and run
cd xconnectdc/localtest
http-server -p 8000
```

Then open: `http://localhost:8000`

### Option 3: VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Open the `localtest` folder in VS Code
3. Right-click on `index.html` and select "Open with Live Server"

### Option 4: PHP Built-in Server

If you have PHP installed:

```bash
cd xconnectdc/localtest
php -S localhost:8000
```

Then open: `http://localhost:8000`

## 📱 Testing Responsive Design

To test responsive design:

1. Open Chrome DevTools (F12 or Cmd+Option+I on Mac)
2. Click the device toggle icon (or press Cmd+Shift+M)
3. Select different device presets or adjust viewport manually

**Recommended breakpoints to test:**
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1440px, 1920px

## ✅ Testing Checklist

### Visual Testing
- [ ] Header displays correctly
- [ ] Logo is visible in header
- [ ] Navigation links are aligned
- [ ] Hero section gradient and animations work
- [ ] Service cards display in grid
- [ ] Why Us section layout is correct
- [ ] Industries cards show hover effects
- [ ] CTA section background animations work
- [ ] Footer displays all columns
- [ ] Back to top button appears on scroll

### Functional Testing
- [ ] Scroll animations trigger (AOS)
- [ ] Sticky header works on scroll
- [ ] Header background changes when scrolled
- [ ] Mobile menu opens/closes
- [ ] Mobile menu links work
- [ ] Smooth scroll to sections works
- [ ] All navigation links work
- [ ] Back to top button scrolls to top

### Responsive Testing
- [ ] Mobile layout looks correct (< 768px)
- [ ] Tablet layout looks correct (768px - 1024px)
- [ ] Desktop layout looks correct (> 1024px)
- [ ] No horizontal scrolling on any viewport
- [ ] Touch targets are at least 44px on mobile

### Accessibility Testing
- [ ] Tab navigation works through all interactive elements
- [ ] Focus states are visible
- [ ] Color contrast is sufficient
- [ ] Images have alt text
- [ ] Buttons have accessible labels

## 🎨 Customization

### Changing Colors

Edit the CSS custom properties in `css/global.css`:

```css
:root {
  --color-primary: #1f6fd2;      /* Main blue */
  --color-navy: #0b1d3a;         /* Dark navy */
  --color-accent: #4da3ff;       /* Light blue accent */
  --color-background: #f7f9fc;   /* Light gray background */
}
```

### Replacing the Logo

Replace the logo files in `assets/images/`:
- `logo.svg` - Used in header (should work on dark/transparent backgrounds)
- `logo-white.svg` - Used in footer (should work on dark backgrounds)

Recommended logo dimensions: Width 160-180px, Height 40-45px

### Adding New Pages

1. Copy an existing HTML file (e.g., `about.html`)
2. Update the `<title>` tag
3. Update the page content
4. Update the navigation active state
5. Add page-specific CSS if needed

## 🐛 Troubleshooting

### CSS not loading
- Make sure you're running a local server (not opening files directly)
- Check browser console for 404 errors
- Verify file paths in the HTML

### JavaScript not working
- Check browser console for errors
- Verify AOS library is loading from CDN
- Ensure DOM is loaded before scripts run

### Fonts not loading
- Check internet connection (Google Fonts requires internet)
- Verify font URL in HTML head

### Animations not working
- Check if `prefers-reduced-motion` is enabled in your OS
- Verify AOS library is initialized
- Check `data-aos` attributes are correct

## 📝 Notes

- This local test version uses CDN links for external libraries (AOS, Google Fonts)
- Form submissions are simulated (no actual backend)
- Contact form shows success message after simulated delay
- All page links use `.html` extensions for local file system compatibility

## 🔄 Syncing with WordPress

When you're ready to deploy to WordPress:

1. Copy the CSS content to the appropriate WPCode snippets
2. Copy the HTML sections as individual snippets
3. Upload images to WordPress Media Library
4. Update image paths in snippets to WordPress URLs
5. Test all functionality on WordPress

Refer to the main `wpcode-snippets/00-IMPLEMENTATION-GUIDE.md` for detailed WordPress deployment instructions.