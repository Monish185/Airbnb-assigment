import { test, expect } from '@playwright/test';

const TARGET_URL = process.env.LIVE_URL || 'http://localhost:3000';

test.describe('Airbnb Listing Clone - Visual & Behavioral Parity', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
  });

  test('1. Listing Page Top & Hero Grid', async ({ page }) => {
    await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toContainText('Romantic Jacuzzi 1BHK Candolim | Mirashya UG10');

    // Verify Hero 5 images exist
    const heroSection = page.locator('#hero-photos-section');
    await expect(heroSection).toBeVisible();
    await expect(heroSection.locator('img')).toHaveCount(5);

    // Verify "Show all photos" button
    const showAllBtn = page.locator('button:has-text("Show all photos")');
    await expect(showAllBtn).toBeVisible();
  });

  test('2. Photo Tour Modal Interaction & Category Scroll', async ({ page }) => {
    await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
    const showAllBtn = page.locator('button:has-text("Show all photos")');
    await showAllBtn.click();

    // Dialog is visible with role dialog
    const modal = page.locator('[role="dialog"][aria-label="Photo tour modal"]');
    await expect(modal).toBeVisible();

    // Verify room sections scoped to modal
    await expect(modal.locator('h3:has-text("Living room 1")')).toBeVisible();
    await expect(modal.locator('h3:has-text("Full kitchen")')).toBeVisible();
    await expect(modal.locator('h3:has-text("Bedroom")')).toBeVisible();

    // Click Category tab to test smooth scroll
    const kitchenTab = modal.locator('button[role="tab"]:has-text("Full kitchen")');
    await kitchenTab.click();
    await page.waitForTimeout(500);

    // Escape closes modal
    await page.keyboard.press('Escape');
    await expect(modal).not.toBeVisible();
  });

  test('3. Lightbox Navigation & Keyboard Flow', async ({ page }) => {
    await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
    await page.locator('button:has-text("Show all photos")').click();

    const modal = page.locator('[role="dialog"][aria-label="Photo tour modal"]');
    await expect(modal).toBeVisible();

    // Click first photo inside a room section to open Lightbox
    const roomPhoto = modal.locator('section img').first();
    await roomPhoto.click({ force: true });

    const lightbox = page.locator('[role="dialog"][aria-label="Single photo viewer"]');
    await expect(lightbox).toBeVisible();

    // Verify counter
    await expect(lightbox.locator('[aria-live="polite"]')).toBeVisible();

    // Navigate right
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);

    // Navigate left
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(300);

    // Escape closes lightbox
    await page.keyboard.press('Escape');
    await expect(lightbox).not.toBeVisible();
  });

  test('4. Sticky Header on Scroll Past Hero', async ({ page }) => {
    await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
    
    // Scroll 700px
    await page.evaluate(() => window.scrollTo(0, 700));
    await page.waitForTimeout(400);

    const stickyNav = page.locator('nav[aria-label="Listing navigation tabs"]');
    await expect(stickyNav).toBeVisible();
  });
});
