const { chromium } = require('playwright');
const fs = require('fs');

async function extractFullListing() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://airbnbproj-iota.vercel.app/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const fullData = await page.evaluate(() => {
    // Helper to get text content clean
    const t = (selector) => {
      const el = document.querySelector(selector);
      return el ? el.innerText.trim() : '';
    };

    // Hero images
    const heroImgs = Array.from(document.querySelectorAll('img[src*="photo_"]')).slice(0, 5).map(img => ({
      src: img.src,
      alt: img.alt,
    }));

    // Header / Title row
    const title = t('h1');
    
    // Main container sections
    const allText = document.body.innerText;

    // All images on page
    const allImages = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
      width: img.clientWidth,
      height: img.clientHeight
    }));

    // SVG icons
    const svgs = Array.from(document.querySelectorAll('svg')).map(svg => ({
      html: svg.outerHTML,
      ariaLabel: svg.getAttribute('aria-label') || svg.getAttribute('aria-hidden'),
      parentText: svg.parentElement ? svg.parentElement.innerText.trim() : '',
      viewBox: svg.getAttribute('viewBox'),
      width: svg.getAttribute('width') || svg.clientWidth,
      height: svg.getAttribute('height') || svg.clientHeight
    }));

    return {
      title,
      allText,
      heroImgs,
      allImages,
      svgCount: svgs.length,
      sampleSvgs: svgs.slice(0, 15)
    };
  });

  fs.writeFileSync('qa/reference/full_listing_dump.json', JSON.stringify(fullData, null, 2));
  console.log('Full listing dumped successfully.');
  await browser.close();
}

extractFullListing().catch(console.error);
