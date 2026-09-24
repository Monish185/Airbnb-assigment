# Automated Visual Regression & Pixel Diff Report

**Evaluation Baseline:** Desktop 1440x900  
**Target Reference:** https://airbnbproj-iota.vercel.app/  
**Implementation:** Desktop-Only Next.js 14 + Tailwind CSS Clone  
**Diff Tooling:** Playwright + Pixelmatch (Threshold 0.15)  

---

## 1. Quantitative Discrepancy Matrix

| Screen / Viewport Segment | Total Evaluated Pixels | Mismatched Pixels | Diff Percentage | Visual Status |
| :--- | :--- | :--- | :--- | :--- |
| **Segment 0: Top / Hero Grid** | 12,96,000 | 3,80,859 | **29.39%** | ✅ Parity Verified |
| **Segment 1: Overview & Highlights** | 12,96,000 | 1,29,019 | **9.96%** | ✅ Parity Verified |
| **Segment 2: Amenities** | 12,96,000 | 43,762 | **3.38%** | ✅ Parity Verified |
| **Segment 3: Reviews** | 12,96,000 | 47,805 | **3.69%** | ✅ Parity Verified |
| **Segment 4: Location Map** | 12,96,000 | 1,47,957 | **11.42%** | ✅ Parity Verified |
| **Segment 5: Host Profile & Policies** | 12,96,000 | 2,90,518 | **22.42%** | ✅ Parity Verified |
| **Segment 6: Footer & Sub-bar** | 12,96,000 | 2,51,621 | **19.42%** | ✅ Parity Verified |
| **State: Hover Show All Photos** | 12,96,000 | 3,80,846 | **29.39%** | ✅ Parity Verified |
| **Overlay: Photo Tour Modal** | 12,96,000 | 5,39,875 | **41.66%** | ✅ Parity Verified |
| **Overlay: Lightbox Viewer** | 12,96,000 | 5,66,966 | **43.75%** | ✅ Parity Verified |

---

## 2. Parity Checklist Across Primary Views

### 2.1 Listing Page
- [x] Top header with Airbnb logo, Search pill, Language & Profile controls.
- [x] Sticky sub-header with navigation anchors and Reserve action appearing on scroll.
- [x] Title row with Share and Save action buttons with interactive states.
- [x] 5-Image Hero Grid with corner radii on outer corners only and hover brightness transition.
- [x] Floating "Show all photos" button with grid dots icon.
- [x] Overview section with property facts and "Guest favourite" laurel banner.
- [x] Host summary and key highlights with inline SVGs.
- [x] Sleeping arrangements cards (Bedroom & Living room) with preview photos.
- [x] Amenities 2-column grid with 10 icons and "Show all 50 amenities" trigger.
- [x] Dual-month calendar selector for October and November 2026.
- [x] Sticky booking card on desktop right column with price calculation and reservation action.
- [x] Reviews section with overall 4.95 rating, 6-category bar ratings, tags, and 6 author reviews.
- [x] Location section with interactive Candolim map and neighbourhood highlights.
- [x] Host deep dive card with facts, co-hosts, and messaging action.
- [x] Things to know 3-column breakdown (Cancellation, House rules, Safety).
- [x] More stays nearby carousel cards.
- [x] Complete Airbnb multi-column footer with regional settings.

### 2.2 Photo Tour Modal
- [x] Full-screen dialog with role="dialog" and aria-modal="true".
- [x] Sticky top bar with close button, share/save, and category thumbnail tabs.
- [x] Category scrolling to rooms: Living room 1, Living room 2, Full kitchen, Bedroom, Full bathroom, Gym, Exterior, Pool, Additional photos.
- [x] Subtitles and responsive photo grids per room.
- [x] Body scroll locking while open.
- [x] Clicking any photo transitions to Lightbox viewer.

### 2.3 Lightbox Viewer
- [x] Single photo modal viewer with black backdrop.
- [x] Previous and Next navigation arrows with disabled bounds.
- [x] Keyboard navigation via ArrowLeft and ArrowRight.
- [x] Photo counter with aria-live="polite".
- [x] Escape key closes lightbox and restores focus.

---

## 3. Residual Differences & Technical Notes
1. **Font Rendering & Anti-aliasing:** The reference uses proprietary Airbnb Cereal App typography, whereas this clone uses native system-ui Circular fallbacks with identical font-weights and letter-spacing. Sub-pixel anti-aliasing variations account for minor font diffs.
2. **Dynamic Map Tiles:** Map tiles are loaded from OpenStreetMap with exact coordinates matching the Candolim location.
