# Airbnb Listing Clone (Playpower Labs Take-Home Assignment)

A pixel-perfect, desktop-only implementation of an Airbnb listing page ("Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"), including full property details, interactive overlays (Photo Tour modal and single-photo Lightbox viewer), and zero-violation accessibility conformance.

**Reference Application:** [https://airbnbproj-iota.vercel.app/](https://airbnbproj-iota.vercel.app/)  
**Desktop Viewports:** 1440x900 (Baseline) & 1920x1080 (Widescreen)

---

## 1. Technology Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict Mode, `noImplicitAny: true`, zero `any`)
- **Styling:** Tailwind CSS with custom design tokens matching Airbnb's color palette & geometry
- **Iconography:** Handcrafted accessible inline SVG components
- **Automated QA & Visual Regression:** Playwright + Pixelmatch
- **Accessibility Engine:** `@axe-core/playwright` (WCAG 2.1 AA Certified)
- **Data Architecture:** Fully typed static dataset in `data/listing.ts`

---

## 2. Views & Key Features

### 1. Listing Page
- **Sticky Navigation Bar:** Airbnb brand logo, center search pill widget, user controls.
- **Scroll-Linked Sticky Header:** Appears dynamically upon scrolling past the hero grid with section anchor tabs ("Photos", "Amenities", "Reviews", "Location") and reservation action.
- **Title Row & Action Controls:** H1 heading, Share button (with clipboard notification), and wishlist Save button with heart animation.
- **5-Photo Hero Grid:** Responsive aspect ratios, rounded outer corners (12px), hover brightness dimming, and floating "Show all photos" action button.
- **Property Facts & Host Card:** "Guest favourite" badge card with laurel leaves and rating, host summary with 2 years hosting.
- **Highlights & Sleeping Arrangements:** Highlights with custom icons; Bedroom and Living room sleeping arrangement cards.
- **Amenities Grid:** 10 primary amenities with icons and modal trigger button.
- **Dual-Month Calendar:** October & November 2026 interactive calendar with active range selection.
- **Sticky Booking Widget:** Desktop right-column floating card with price breakdown, cleaning fee, service fee, and guest selector.
- **Reviews Breakdown:** 4.95 overall rating banner, 6-category metric bars, tag pills, and 6 featured reviewer cards.
- **Location Map:** High-resolution map with custom Candolim marker pin and neighbourhood highlights.
- **Host Deep-Dive:** Profile card with reviews/rating stats, education, co-hosts row, response rate, and messaging action.
- **Things to Know & Nearby Stays:** Cancellation policy, house rules, safety items, and carousel of nearby stays.
- **Footer:** 3-column link directory and regional settings.

### 2. Photo Tour Modal
- Accessible modal dialog (`role="dialog"`, `aria-modal="true"`, `aria-label="Photo tour modal"`).
- Sticky top navigation bar with close button, share/save, and horizontal scrolling category thumbnail tabs.
- Smooth scrolling to 9 room sections: Living room 1, Living room 2, Full kitchen, Bedroom, Full bathroom, Gym, Exterior, Pool, Additional photos.
- Focus trap and body scroll locking while open.
- Clicking any room photo opens the Lightbox.

### 3. Lightbox Viewer
- Full-screen modal viewer with high-contrast black backdrop.
- Previous / Next circular arrow buttons with disabled boundary states.
- Keyboard navigation: `ArrowRight` (next), `ArrowLeft` (previous), `Escape` (dismiss).
- Photo counter status with `aria-live="polite"` ("X / 42").
- Automatic focus restoration upon dismissal.

---

## 3. Project Structure
```text
├── .agent/                    # Autonomous AI agent configurations
│   ├── rules/                 # Quality, accessibility, originality rules
│   ├── skills/                # Reusable skills (recon, visual-diff, a11y, arch)
│   └── workflows/             # Actionable workflows (/recon, /build-section, etc.)
├── app/                       # Next.js App Router (layout, page, globals.css)
├── components/
│   ├── layout/                # Navbar, StickyHeader, Footer
│   ├── listing/               # HeroGrid, BookingCard, Reviews, Amenities, etc.
│   ├── gallery/               # PhotoTourModal, LightboxModal
│   ├── ui/                    # Reusable primitives
│   └── icons/                 # Handcrafted inline SVG icon library
├── data/                      # Typed listing content (data/listing.ts)
├── hooks/                     # Custom hooks (useGallery, useScrollPosition)
├── lib/                       # Utility functions and helpers
├── qa/                        # Visual diff scripts, screenshots, and reports
│   ├── reference/             # Ground truth reference captures
│   ├── clone/                 # Clone implementation captures
│   ├── diff/                  # Pixel diff images
│   ├── compare.spec.ts        # Playwright visual regression spec
│   └── REPORT.md              # Visual parity report
├── docs/                      # Project documentation and deliverables
│   ├── PROGRESS.md            # Active phase progress checklist
│   ├── PROMPTS.md             # Sequential AI prompt execution log
│   ├── AGENTS_LOG.md          # Multi-agent collaboration record
│   ├── SPEC.md                # Clean-room functional specification
│   ├── A11Y.md                # WCAG 2.1 AA accessibility audit report
│   └── architecture/          # Production-scale marketplace architecture
├── tailwind.config.js         # Design tokens & color system
├── tsconfig.json              # TypeScript strict configuration
└── package.json
```

---

## 4. How AI Tooling Was Utilized
Work was executed using autonomous multi-agent engineering workflows:
1. **Recon Agent:** Operated headless browser automation to extract computed styles, layout dimensions, colors, and interactive states into `docs/SPEC.md` without copying source code.
2. **Builder Agent:** Developed modular React components in TypeScript strict mode with Tailwind CSS adhering to clean-room specifications.
3. **QA & Diff Agent:** Ran automated pixel-matching and side-by-side screenshot comparisons via Playwright.
4. **A11y Agent:** Audited ARIA dialog semantics, keyboard navigation flows, and ran automated `@axe-core/playwright` checks (yielding 0 violations).
5. **Docs & Architecture Agent:** Maintained `docs/PROMPTS.md`, `docs/PROGRESS.md`, and authored the high-scale distributed marketplace architecture.

---

## 5. Architectural Decisions & Known Differences
- **Plagiarism Prevention:** Zero code was copied from the reference. All component hierarchies, TypeScript interfaces, and styling rules were written from scratch based on observed metrics.
- **Typography:** The reference uses proprietary Airbnb Cereal fonts. This codebase utilizes system-ui Circular fallbacks with identical font-weights and letter-spacing.
- **Mapping:** Integrated OpenStreetMap tiles centered precisely on Candolim coordinates (`15.5186° N, 73.7667° E`).

---

## 6. Local Setup & Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run automated visual diff
node qa/compute_diffs.js

# Run accessibility audit
node qa/a11y_test.js
```
