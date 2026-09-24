const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function runRecon() {
  const referenceDir = path.resolve('qa/reference');
  const statesDir = path.resolve('qa/reference/states');
  fs.mkdirSync(referenceDir, { recursive: true });
  fs.mkdirSync(statesDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  console.log('Navigating to reference site at 1440x900...');
  await page.goto('https://airbnbproj-iota.vercel.app/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);

  // 1. Full-page screenshot and viewport segments
  console.log('Capturing full page and segments...');
  await page.screenshot({ path: path.join(referenceDir, 'full_page_1440.png'), fullPage: true });

  // Viewport segment 0 (top)
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(referenceDir, 'segment_0_top.png') });

  // Viewport segment 1 (scroll 800)
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(referenceDir, 'segment_1_overview.png') });

  // Viewport segment 2 (scroll 1600)
  await page.evaluate(() => window.scrollTo(0, 1600));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(referenceDir, 'segment_2_amenities.png') });

  // Viewport segment 3 (scroll 2400)
  await page.evaluate(() => window.scrollTo(0, 2400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(referenceDir, 'segment_3_reviews.png') });

  // Viewport segment 4 (scroll 3200)
  await page.evaluate(() => window.scrollTo(0, 3200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(referenceDir, 'segment_4_location.png') });

  // Viewport segment 5 (scroll 4000)
  await page.evaluate(() => window.scrollTo(0, 4000));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(referenceDir, 'segment_5_host_info.png') });

  // Viewport segment 6 (scroll to bottom)
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(referenceDir, 'segment_6_footer.png') });

  // 2. Extract measurements, typography, colors, layout, and images
  console.log('Extracting computed styles and specs...');
  const specData = await page.evaluate(() => {
    const getComp = (el) => {
      if (!el) return null;
      const s = window.getComputedStyle(el);
      return {
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        lineHeight: s.lineHeight,
        letterSpacing: s.letterSpacing,
        color: s.color,
        backgroundColor: s.backgroundColor,
        borderColor: s.borderColor,
        borderRadius: s.borderRadius,
        boxShadow: s.boxShadow,
        padding: s.padding,
        margin: s.margin,
        gap: s.gap,
        display: s.display,
        width: s.width,
        height: s.height,
        maxWidth: s.maxWidth,
      };
    };

    const images = Array.from(document.querySelectorAll('img')).map((img) => ({
      src: img.src,
      alt: img.alt,
      renderedWidth: img.clientWidth,
      renderedHeight: img.clientHeight,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
    }));

    // Find all headings
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4')).map((h) => ({
      tag: h.tagName.toLowerCase(),
      text: h.textContent.trim(),
      styles: getComp(h),
    }));

    // Find all buttons
    const buttons = Array.from(document.querySelectorAll('button')).map((b) => ({
      text: b.textContent.trim(),
      ariaLabel: b.getAttribute('aria-label'),
      styles: getComp(b),
    }));

    return {
      title: document.title,
      bodyStyles: getComp(document.body),
      headings,
      buttons,
      images,
    };
  });

  fs.writeFileSync('qa/reference/extracted_spec.json', JSON.stringify(specData, null, 2));

  // 3. Test interactive states and modals
  console.log('Testing interactive states and Photo Tour modal...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  // Hover over share button
  const shareBtn = page.locator('button:has-text("Share"), button:has-text("share")').first();
  if (await shareBtn.count() > 0) {
    await shareBtn.hover();
    await page.screenshot({ path: path.join(statesDir, 'hover_share_button.png') });
  }

  // Hover over save button
  const saveBtn = page.locator('button:has-text("Save"), button:has-text("save")').first();
  if (await saveBtn.count() > 0) {
    await saveBtn.hover();
    await page.screenshot({ path: path.join(statesDir, 'hover_save_button.png') });
  }

  // Hover over 'Show all photos' button
  const showAllBtn = page.locator('button:has-text("Show all photos"), button:has-text("photos")').first();
  if (await showAllBtn.count() > 0) {
    await showAllBtn.hover();
    await page.screenshot({ path: path.join(statesDir, 'hover_show_all_photos.png') });

    // Click to open Photo Tour modal
    console.log('Opening Photo Tour modal...');
    await showAllBtn.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(statesDir, 'photo_tour_opened.png') });

    // Scroll within Photo Tour
    await page.mouse.wheel(0, 1000);
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(statesDir, 'photo_tour_scrolled.png') });

    // Click a photo inside Photo Tour to open Lightbox
    console.log('Testing Lightbox from Photo Tour...');
    const galleryImages = page.locator('img');
    const count = await galleryImages.count();
    console.log(`Found ${count} images in Photo Tour`);
    if (count > 2) {
      await galleryImages.nth(2).click();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(statesDir, 'lightbox_photo_1.png') });

      // Click next arrow or press ArrowRight
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(statesDir, 'lightbox_photo_next.png') });

      // Press Escape to close Lightbox
      await page.keyboard.press('Escape');
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(statesDir, 'lightbox_closed_back_to_tour.png') });
    }

    // Close Photo Tour modal
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(statesDir, 'photo_tour_closed.png') });
  }

  console.log('Recon capture complete!');
  await browser.close();
}

runRecon().catch(console.error);
