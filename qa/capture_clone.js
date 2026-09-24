const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');

async function runVisualDiff() {
  const cloneDir = path.resolve('qa/clone');
  const cloneStatesDir = path.resolve('qa/clone/states');
  const diffDir = path.resolve('qa/diff');
  fs.mkdirSync(cloneDir, { recursive: true });
  fs.mkdirSync(cloneStatesDir, { recursive: true });
  fs.mkdirSync(diffDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Navigating to local clone at http://localhost:3000 ...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // 1. Full page & segments
  console.log('Capturing clone full page and segments...');
  await page.screenshot({ path: path.join(cloneDir, 'full_page_1440.png'), fullPage: true });

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(cloneDir, 'segment_0_top.png') });

  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(cloneDir, 'segment_1_overview.png') });

  await page.evaluate(() => window.scrollTo(0, 1600));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(cloneDir, 'segment_2_amenities.png') });

  await page.evaluate(() => window.scrollTo(0, 2400));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(cloneDir, 'segment_3_reviews.png') });

  await page.evaluate(() => window.scrollTo(0, 3200));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(cloneDir, 'segment_4_location.png') });

  await page.evaluate(() => window.scrollTo(0, 4000));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(cloneDir, 'segment_5_host_info.png') });

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(cloneDir, 'segment_6_footer.png') });

  // 2. States
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);

  // Hover share
  await page.locator('button[aria-label="Share this listing"]').hover();
  await page.screenshot({ path: path.join(cloneStatesDir, 'hover_share_button.png') });

  // Hover save
  await page.locator('button[aria-label*="Save this listing"]').hover();
  await page.screenshot({ path: path.join(cloneStatesDir, 'hover_save_button.png') });

  // Hover show all photos
  const showAllBtn = page.locator('button:has-text("Show all photos")');
  await showAllBtn.hover();
  await page.screenshot({ path: path.join(cloneStatesDir, 'hover_show_all_photos.png') });

  // Open photo tour
  await showAllBtn.click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(cloneStatesDir, 'photo_tour_opened.png') });

  // Scroll in photo tour
  await page.mouse.wheel(0, 1000);
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(cloneStatesDir, 'photo_tour_scrolled.png') });

  // Click room photo to open Lightbox
  const roomPhoto = page.locator('[role="dialog"] img').nth(5);
  await roomPhoto.click({ force: true });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(cloneStatesDir, 'lightbox_photo_1.png') });

  // Next photo via keyboard
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(cloneStatesDir, 'lightbox_photo_2.png') });

  // Press right 5 times
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(150);
  }
  await page.screenshot({ path: path.join(cloneStatesDir, 'lightbox_photo_middle.png') });

  // Escape to close Lightbox
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(cloneStatesDir, 'lightbox_closed_escape.png') });

  console.log('All clone captures complete! Calculating pixel diffs...');
  await browser.close();

  // 3. Pixelmatch comparison loop
  const comparePairs = [
    { ref: 'qa/reference/segment_0_top.png', clone: 'qa/clone/segment_0_top.png', name: 'segment_0_top' },
    { ref: 'qa/reference/segment_1_overview.png', clone: 'qa/clone/segment_1_overview.png', name: 'segment_1_overview' },
    { ref: 'qa/reference/segment_2_amenities.png', clone: 'qa/clone/segment_2_amenities.png', name: 'segment_2_amenities' },
    { ref: 'qa/reference/segment_3_reviews.png', clone: 'qa/clone/segment_3_reviews.png', name: 'segment_3_reviews' },
    { ref: 'qa/reference/segment_4_location.png', clone: 'qa/clone/segment_4_location.png', name: 'segment_4_location' },
    { ref: 'qa/reference/segment_5_host_info.png', clone: 'qa/clone/segment_5_host_info.png', name: 'segment_5_host_info' },
    { ref: 'qa/reference/segment_6_footer.png', clone: 'qa/clone/segment_6_footer.png', name: 'segment_6_footer' },
    { ref: 'qa/reference/states/hover_show_all_photos.png', clone: 'qa/clone/states/hover_show_all_photos.png', name: 'hover_show_all_photos' },
    { ref: 'qa/reference/states/photo_tour_opened.png', clone: 'qa/clone/states/photo_tour_opened.png', name: 'photo_tour_opened' },
    { ref: 'qa/reference/states/lightbox_photo_1.png', clone: 'qa/clone/states/lightbox_photo_1.png', name: 'lightbox_photo_1' },
  ];

  const results = [];

  for (const pair of comparePairs) {
    if (!fs.existsSync(pair.ref) || !fs.existsSync(pair.clone)) {
      console.log(`Skipping ${pair.name} - missing file`);
      continue;
    }

    const img1 = PNG.sync.read(fs.readFileSync(pair.ref));
    const img2 = PNG.sync.read(fs.readFileSync(pair.clone));

    // Align dimensions if slight height diff
    const width = Math.min(img1.width, img2.width);
    const height = Math.min(img1.height, img2.height);
    const diff = new PNG({ width, height });

    const numDiffPixels = pixelmatch(
      img1.data,
      img2.data,
      diff.data,
      width,
      height,
      { threshold: 0.15 }
    );

    const totalPixels = width * height;
    const diffPercent = ((numDiffPixels / totalPixels) * 100).toFixed(2);
    fs.writeFileSync(path.join(diffDir, `${pair.name}_diff.png`), PNG.sync.write(diff));

    results.push({
      name: pair.name,
      diffPixels: numDiffPixels,
      totalPixels,
      diffPercent: `${diffPercent}%`,
    });
    console.log(`Diff for ${pair.name}: ${diffPercent}%`);
  }

  fs.writeFileSync('qa/diff/summary.json', JSON.stringify(results, null, 2));
  console.log('Visual diff analysis complete!');
}

runVisualDiff().catch(console.error);
