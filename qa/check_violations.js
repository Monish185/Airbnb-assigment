const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;

async function checkViolations() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Tour
  await page.locator('button:has-text("Show all photos")').click();
  await page.waitForTimeout(400);
  const tour = await new AxeBuilder({ page }).analyze();
  console.log('Tour violation ID:', tour.violations.map(v => ({ id: v.id, help: v.help, nodes: v.nodes.map(n => n.target) })));

  // Lightbox
  await page.locator('[role="dialog"] img').first().click({ force: true });
  await page.waitForTimeout(400);
  const lightbox = await new AxeBuilder({ page }).analyze();
  console.log('Lightbox violation ID:', lightbox.violations.map(v => ({ id: v.id, help: v.help, nodes: v.nodes.map(n => n.target) })));

  await browser.close();
}

checkViolations().catch(console.error);
