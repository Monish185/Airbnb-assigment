# Project Progress & Roadmap: Airbnb Listing Clone (Playpower Labs Assignment)

## Phase Status Summary
- [x] **Phase 0: AI Workflow Configuration & Setup** (COMPLETE)
- [x] **Phase 1: Recon & Observation** (COMPLETE - SPEC.md, screenshots, states, and extracted tokens captured)
- [x] **Phase 2: Project Foundation** (COMPLETE - Next.js 14, strict TS, Tailwind design tokens, typed dataset)
- [x] **Phase 3: Listing Page Implementation** (COMPLETE - Hero 5-grid, sticky header, booking card, reviews, location, all sections)
- [x] **Phase 4: Photo Tour & Lightbox Overlays** (COMPLETE - Accessible dialogs, category navigation, single-photo lightbox)
- [x] **Phase 5: Accessibility Audit & Remediation** (COMPLETE - 0 violations across all 3 views via axe-core)
- [x] **Phase 6: Private GitHub Repository Setup** (COMPLETE - Pushed to https://github.com/Monish185/Airbnb-assigment.git)
- [x] **Phase 7: Deployment to Vercel** (COMPLETE - Live at https://airbnb-assigment.vercel.app/)
- [x] **Phase 8: Automated Visual QA & Pixel Diff Loop** (COMPLETE - Photo tour navbar, body thumbnails, sticky room title, and lightbox aligned with reference; 8/8 tests passed)
- [x] **Phase 9: Marketplace Production Architecture Diagram** (COMPLETE - PNG, PDF, and Mermaid in docs/architecture/)
- [ ] **Phase 10: Packaging & Final Deliverables** (Submission zip and final submission report)

---

## Detailed Task Checklist

### Phase 0: AI Workflow Config
- [x] `docs/PROGRESS.md`: Initialized running tracker
- [x] `docs/PROMPTS.md`: Prompt #1 captured verbatim
- [x] `AGENTS.md`: Root configuration specifying tech stack, folder structure, definition of done
- [x] `.agent/rules/`:
  - [x] `code-quality.md`
  - [x] `accessibility.md`
  - [x] `originality.md`
  - [x] `commit-conventions.md`
- [x] `.agent/skills/`:
  - [x] `reference-recon/SKILL.md`
  - [x] `visual-diff/SKILL.md`
  - [x] `a11y-audit/SKILL.md`
  - [x] `architecture-diagram/SKILL.md`
- [x] `.agent/workflows/`:
  - [x] `recon.md`
  - [x] `build-section.md`
  - [x] `verify.md`
  - [x] `ship.md`
- [x] `docs/AGENTS_LOG.md`: Initialized logging structure

### Phase 1: Recon
- [ ] Capture 1440x900 viewport segments and full-page screenshot of reference
- [ ] Inspect interactive states (hover, focus, modals, lightbox)
- [ ] Extract asset URLs, dimensions, typography, color palette, spacing tokens
- [ ] Compile comprehensive `docs/SPEC.md`
- [ ] Log Recon sub-agent findings to `docs/AGENTS_LOG.md`

### Phase 2: Foundation
- [ ] Scaffold Next.js (App Router), TypeScript, Tailwind CSS
- [ ] Configure typography and Google Fonts / web fonts
- [ ] Configure `tailwind.config.ts` design tokens and global CSS variables
- [ ] Build typed listing data model `data/listing.ts`
- [ ] Establish directory structure

### Phase 3: Listing Page
- [ ] Header & Navigation Bar
- [ ] Title, Share / Save buttons
- [ ] Hero 5-Photo Grid with corner radii and "Show all photos" trigger
- [ ] Property Overview & Host section
- [ ] Highlights & Key Amenities
- [ ] Description (collapsible / read more)
- [ ] Sleeping Arrangements
- [x] Amenities Grid & full modal dialog (with 50 individual handcrafted SVG amenity icons, item divider lines, category grouping, and smooth opening/closing transitions)
- [ ] Reviews section with rating breakdown
- [ ] Location & Candolim Map view
- [ ] Host Profile card
- [ ] House Rules & Things to Know
- [ ] Footer
- [ ] Floating / Sticky Booking Card with price calculation
- [ ] Sticky Header on scroll

### Phase 4: Photo Tour & Lightbox
- [ ] Photo Tour full-screen overlay dialog (`role="dialog"`, `aria-modal="true"`)
- [ ] Category tabs (Living room 1 & 2, Full kitchen, Bedroom, Bathroom, Pool, Exterior)
- [ ] Photo Tour image layout per category
- [ ] Lightbox single-image viewer with keyboard nav, prev/next buttons, image counter
- [ ] Focus trap and restoration on close
- [ ] Body scroll lock management

### Phase 5: Accessibility Pass
- [ ] Screen reader markup & landmark verification
- [ ] Keyboard navigation verification
- [ ] Axe-core automated tests execution
- [ ] Compile `docs/A11Y.md`

### Phase 6: GitHub Repo
- [ ] Git init and initial clean commit
- [ ] Verify private repository visibility
- [ ] Push to private GitHub repo

### Phase 7: [STOP] Deployment
- [ ] Provide step-by-step instructions for Vercel deployment
- [ ] Wait for user response with live production URL

### Phase 8: Visual QA & Pixel Diff
- [ ] Set up Playwright automated diff test suite `qa/compare.spec.ts`
- [ ] Capture side-by-side screenshots at 1440x900 and 1920x1080
- [ ] Run pixel diffing, report metrics in `qa/REPORT.md`
- [ ] Iterative fixes until <1% diff is achieved

### Phase 9: Architecture Diagram
- [ ] Create scalable production architecture diagram (Mermaid + SVG/PNG/PDF)
- [ ] Detail Frontend, Backend, Storage, Search, Deployment layers
- [ ] Document data flows & capacity planning in `docs/architecture/`

### Phase 10: Packaging
- [ ] Verify all deliverables
- [ ] Build final submission archive `airbnb-clone-submission.zip`
- [ ] Final summary report
