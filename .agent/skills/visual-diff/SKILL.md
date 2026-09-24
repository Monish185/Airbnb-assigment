---
name: visual-diff
description: Run automated Playwright screenshot capture and pixelmatch diff loop to achieve <1% visual discrepancy.
---

# Skill: Visual Diff & Regression Analysis

## Objective
Automate side-by-side visual comparison between the reference application and our clone implementation across identical viewport dimensions (1440x900 and 1920x1080) and interactive states.

## Execution Steps
1. **Prepare Test Script**:
   - Maintain `qa/compare.spec.ts` using Playwright.
   - Configure parallel or sequential captures of both reference URL and clone URL (local or production).
2. **Standardized Capture Matrix**:
   - Top of listing page (default un-scrolled)
   - Scroll segments (viewport 1, viewport 2, viewport 3, full-page)
   - Hover states (Share button, Save button, Hero images, "Show all photos" button)
   - Photo Tour (opened, category scrolled, active category indicator)
   - Lightbox (first photo, middle photo, last photo, hover over arrows)
3. **Pixel Diff Computation**:
   - Compare screenshot pairs using `pixelmatch` or `odiff`.
   - Calculate total pixel mismatch percentage:
     $$\text{Diff } \% = \frac{\text{Mismatched Pixels}}{\text{Total Pixels}} \times 100$$
   - Generate diff visualization images displaying mismatched pixels in red/magenta.
   - Save comparison triplets (`reference.png`, `clone.png`, `diff.png`) in `qa/diff/`.
4. **Computed Metrics Comparison**:
   - Compare measured styles on reference vs clone to identify precise CSS discrepancies (e.g. font-weight 500 vs 600, padding 24px vs 20px).
5. **Iteration & Threshold**:
   - Target: Diff $< 1.0\%$ across primary states.
   - Document progression in `qa/REPORT.md`.
