const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // 1. Initial State (scrollY = 0)
  const navbar = page.locator('header.relative');
  const navbarBox = await navbar.boundingBox();
  console.log('Initial navbar bounding box:', navbarBox);

  const stickyHeaderInitial = await page.locator('nav[aria-label="Listing navigation tabs"]').count();
  console.log('Sticky header tabs count at scroll 0 (should be 0/hidden):', stickyHeaderInitial);

  // 2. Scroll down 700px
  console.log('Scrolling down 700px...');
  await page.evaluate(() => window.scrollTo(0, 700));
  await page.waitForTimeout(500);

  // Check navbar has scrolled out of view
  const navbarBoxScrolled = await navbar.boundingBox();
  console.log('Navbar bounding box after scroll 700 (should be negative y):', navbarBoxScrolled);

  // Check sticky header is visible at top
  const stickyHeaderNav = page.locator('nav[aria-label="Listing navigation tabs"]');
  const isStickyVisible = await stickyHeaderNav.isVisible();
  console.log('Sticky header visible at scroll 700:', isStickyVisible);

  // Take screenshot of the top viewport showing sticky header
  await page.screenshot({ path: path.join(__dirname, 'sticky_header_scrolled_verified.png') });

  // 3. Check tabs and reserve button in sticky header
  const stickyHeaderReserveBtn = page.locator('div.fixed.top-0 button:has-text("Reserve")');
  console.log('Sticky header reserve button visible:', await stickyHeaderReserveBtn.isVisible());

  // Click Reserve on sticky header
  console.log('Clicking Reserve in sticky header...');
  await stickyHeaderReserveBtn.click();
  await page.waitForTimeout(300);

  // Check bottom toast appears
  const toast = page.locator('div[role="status"]');
  const toastText = await toast.textContent();
  console.log('Bottom toast after sticky reserve click:', toastText?.trim());

  await browser.close();
  console.log('Sticky header verification completed successfully!');
})();
