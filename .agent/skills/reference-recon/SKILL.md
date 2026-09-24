---
name: reference-recon
description: Inspect the reference site in the browser to extract visual and behavioral specifications without copying source code.
---

# Skill: Reference Reconnaissance (Clean-Room Observation)

## Objective
Extract comprehensive visual measurements (dimensions, typography, colors, padding, borders, shadows) and behavioral rules (hover effects, scroll animations, modal interactions) from the reference website while upholding strict anti-plagiarism guidelines.

## Execution Steps
1. **Set Viewport**: Ensure the browser is calibrated to desktop dimensions:
   - Primary: `1440x900`
   - Secondary: `1920x1080`
2. **Full-Page Visual Capture**:
   - Scroll systematically through the page in increments of viewport height.
   - Capture viewport screenshots and full-page captures into `qa/reference/`.
3. **Computed Style Measurement (No Code Scraping)**:
   - Query `window.getComputedStyle(element)` to record:
     - `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`
     - `color`, `background-color`, `border-color`
     - `padding`, `margin`, `gap`
     - `border-radius`, `box-shadow`
     - `transition-duration`, `transition-timing-function`
4. **Behavioral State Verification**:
   - Test hover states on all interactive elements (buttons, images, links).
   - Test scroll behaviors (sticky header trigger position, booking widget pinning).
   - Test Photo Tour opening, category tab navigation, and section transitions.
   - Test Lightbox navigation, arrow buttons, keyboard shortcuts, and close behavior.
   - Capture state screenshots into `qa/reference/states/`.
5. **Output Delivery**:
   - Synthesize all collected data into `docs/SPEC.md`.
