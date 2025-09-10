# Julia Truong Personal Website

Julia Truong's personal website is a simple static HTML website featuring a personal portfolio page with animated scroll effects and navigation buttons. The site includes a main page with an "About Me" section and links to GitHub, LinkedIn, and email, plus a hidden April Fools page.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

- **No build system required** - This is a static HTML website with no package.json, build tools, or dependencies
- Serve the website locally:
  - `cd /home/runner/work/htmlwebsite/htmlwebsite`
  - `python3 -m http.server 8080` -- starts INSTANTLY (< 1 second). NEVER CANCEL.
  - Access at `http://localhost:8080`
- **No installation steps needed** - Everything works out of the box
- **No tests exist** - This is a simple static website with no test infrastructure needed

## Validation

- **ALWAYS manually validate website functionality after making changes:**
  - Start the HTTP server: `python3 -m http.server 8080`
  - Open `http://localhost:8080` in browser
  - Verify main page loads with Julia Truong header and 4 navigation buttons
  - Test all 4 buttons: GitHub, LinkedIn, Email, April Fools
  - Click "April Fools.... XDDD" button to verify april_fools.html loads correctly
  - Scroll down on main page to verify border animations trigger properly
  - Take screenshots to document any visual changes
- **ALWAYS validate JavaScript syntax** before committing:
  - `node -c main.js` -- completes INSTANTLY. NEVER CANCEL.
- **Known limitation**: Google Fonts may be blocked in some environments (shows as ERROR in console but doesn't break functionality)

## Repository Structure

**Root directory contains:**
```
.
├── index.html              # Main portfolio page (2.9KB)
├── styles.css              # All styling and animations (1.8KB)  
├── main.js                 # Scroll animation logic (492 bytes)
├── april_fools.html        # Hidden Easter egg page (319 bytes)
├── anya_favicon            # Site favicon (290KB)
├── war_cat.jpg             # April Fools page image (117KB)
├── website_background.png  # Unused background (454KB)
├── website_background2.png # Main page background (1.1MB)
└── .github/
    └── copilot-instructions.md
```

**Total repository size: 3.8MB** (mostly image assets)

## File Purposes

- **index.html**: Main portfolio page with header, navigation buttons, About Me section, and Projects section (coming soon)
- **styles.css**: Contains all styling including responsive design, button styling, background images, and scroll animation effects
- **main.js**: Implements Intersection Observer API for scroll-triggered border animations
- **april_fools.html**: Easter egg page showing a cat image with instructions to email Julia
- **Image assets**: Background images, favicon, and cat photo for April Fools page

## Technical Details

- **Framework**: Vanilla HTML/CSS/JavaScript (no frameworks or dependencies)
- **Animations**: CSS transitions + JavaScript Intersection Observer for scroll effects
- **Styling**: Custom CSS with Google Fonts (Josefin Sans), responsive design
- **Server**: Python3 built-in HTTP server for local development
- **Browser compatibility**: Modern browsers supporting Intersection Observer API

## Common Tasks

### Starting Development Server
```bash
cd /home/runner/work/htmlwebsite/htmlwebsite
python3 -m http.server 8080
# Access at http://localhost:8080
# Server starts INSTANTLY. NEVER CANCEL.
```

### Making Changes
1. Edit HTML/CSS/JS files directly
2. Refresh browser to see changes (no build step needed)
3. Validate JavaScript: `node -c main.js`
4. Test full functionality manually in browser
5. Take screenshots to document visual changes

### Validation Checklist
- [ ] Server starts without errors
- [ ] Main page loads at http://localhost:8080
- [ ] All 4 navigation buttons are visible and clickable
- [ ] April Fools page loads when clicking the Easter egg button
- [ ] Scroll animations work (borders animate when scrolling down)
- [ ] JavaScript syntax is valid (`node -c main.js`)
- [ ] Screenshots taken for any visual changes

## Key Features to Test

1. **Main page navigation**: 4 buttons linking to GitHub, LinkedIn, email, and April Fools page
2. **Scroll animations**: Border elements animate from full width to 50% width when scrolled into view
3. **April Fools page**: Cat image with message about emailing Julia
4. **Responsive design**: Layout adapts to different screen sizes
5. **Background images**: Main page uses website_background2.png as full-screen background

## No Build Process Required

This website requires NO:
- npm install or package management
- Build commands or compilation
- Testing frameworks or test runners
- Linting tools or code formatters
- CI/CD pipelines or deployment scripts
- Environment setup or configuration files

Simply edit files and refresh the browser to see changes.

## Troubleshooting

**If Google Fonts don't load**: This is expected in some environments and doesn't break functionality. The site falls back to system fonts.

**If images don't load**: Verify the image files exist and check file permissions. All images should be in the root directory.

**If animations don't work**: Check browser console for JavaScript errors and verify main.js syntax with `node -c main.js`.

**If server won't start**: Ensure port 8080 is available or try a different port: `python3 -m http.server 8081`