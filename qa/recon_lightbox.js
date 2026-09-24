const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function testLightboxAndData() {
  const statesDir = path.resolve('qa/reference/states');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  console.log('Navigating...');
  await page.goto('https://airbnbproj-iota.vercel.app/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Open photo tour
  const showAllBtn = page.locator('button:has-text("Show all photos"), button:has-text("photos")').first();
  await showAllBtn.click();
  await page.waitForTimeout(1000);

  // Inspect the categories in the modal top bar
  const modalInfo = await page.evaluate(() => {
    // Find category buttons/thumbnails in header
    const categoryEls = Array.from(document.querySelectorAll('[role="dialog"] button, [role="dialog"] [class*="cursor-pointer"]'))
      .map(el => ({
        text: el.innerText.trim(),
        ariaLabel: el.getAttribute('aria-label'),
        tag: el.tagName,
        classes: el.className
      }));

    // Find all sections in the dialog
    const sections = Array.from(document.querySelectorAll('[role="dialog"] section, [role="dialog"] h2, [role="dialog"] h3'))
      .map(s => ({
        tag: s.tagName,
        text: s.innerText.trim()
      }));

    // Find all images inside the dialog
    const modalImages = Array.from(document.querySelectorAll('[role="dialog"] img')).map(img => ({
      src: img.src,
      alt: img.alt,
      classes: img.className,
      parentElementTag: img.parentElement ? img.parentElement.tagName : null,
      parentClasses: img.parentElement ? img.parentElement.className : null
    }));

    return {
      categoryEls: categoryEls.slice(0, 20),
      sections,
      modalImagesCount: modalImages.length,
      sampleImages: modalImages.slice(0, 10),
      allImages: modalImages
    };
  });

  fs.writeFileSync('qa/reference/modal_info.json', JSON.stringify(modalInfo, null, 2));
  console.log('Modal info extracted, total modal images:', modalInfo.modalImagesCount);

  // Now click on a room photo inside the modal to open Lightbox
  // Let's use evaluate or force click
  console.log('Clicking an image in photo tour with force: true...');
  const roomImage = page.locator('[role="dialog"] img[src*="photo_"]').first();
  if (await roomImage.count() > 0) {
    await roomImage.click({ force: true });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(statesDir, 'lightbox_photo_1.png') });

    // Check lightbox elements
    const lightboxInfo = await page.evaluate(() => {
      const activeModal = document.body.innerText;
      const buttons = Array.from(document.querySelectorAll('button')).map(b => ({
        text: b.innerText,
        ariaLabel: b.getAttribute('aria-label')
      }));
      return { buttons };
    });
    fs.writeFileSync('qa/reference/lightbox_info.json', JSON.stringify(lightboxInfo, null, 2));

    // Next arrow
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(statesDir, 'lightbox_photo_2.png') });

    // Middle photo - press right arrow several times
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(200);
    }
    await page.screenshot({ path: path.join(statesDir, 'lightbox_photo_middle.png') });

    // Close lightbox
    await page.keyboard.press('Escape');
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(statesDir, 'lightbox_closed_escape.png') });
  } else {
    console.log('roomImage not found by locator, trying evaluate click');
  }

  await browser.close();
  console.log('Lightbox test done!');
}

testLightboxAndData().catch(console.error);
