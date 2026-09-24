const { chromium } = require('playwright');
const fs = require('fs');

async function extractPhotoTourRooms() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://airbnbproj-iota.vercel.app/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  // Open photo tour
  await page.locator('button:has-text("Show all photos"), button:has-text("photos")').first().click();
  await page.waitForTimeout(1500);

  const roomsData = await page.evaluate(() => {
    // Find all sections or headings inside role="dialog"
    const dialog = document.querySelector('[role="dialog"]');
    if (!dialog) return null;

    // Look for room headings
    const headings = Array.from(dialog.querySelectorAll('h3'));
    return headings.map(h => {
      const parent = h.closest('section') || h.parentElement;
      const subtitleEl = h.nextElementSibling && h.nextElementSibling.tagName === 'P' ? h.nextElementSibling : null;
      // find images inside this section or before next h3
      const sectionContainer = h.closest('[id]') || h.parentElement.parentElement;
      const imgs = Array.from(sectionContainer.querySelectorAll('img')).map(img => ({
        src: img.src,
        alt: img.alt
      }));
      return {
        title: h.innerText.trim(),
        subtitle: subtitleEl ? subtitleEl.innerText.trim() : '',
        id: sectionContainer.id || '',
        images: imgs
      };
    });
  });

  fs.writeFileSync('qa/reference/photo_tour_rooms.json', JSON.stringify(roomsData, null, 2));
  console.log('Photo tour rooms extracted:', roomsData ? roomsData.length : 0);
  await browser.close();
}

extractPhotoTourRooms().catch(console.error);
