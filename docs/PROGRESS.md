# Project Progress & Roadmap: Airbnb Listing Clone (Playpower Labs Assignment)

## Phase Status Summary
- [x] **Phase 0: AI Workflow Configuration & Setup** (COMPLETE)
- [x] **Phase 1: Recon & Observation** (COMPLETE - SPEC.md, screenshots, states, and extracted tokens captured)
- [ ] **Phase 2: Project Foundation** (IN PROGRESS)
- [ ] **Phase 3: Listing Page Implementation** (Header, hero 5-photo grid, key facts, host, amenities, reviews, map, footer, sticky components)
- [ ] **Phase 4: Photo Tour & Lightbox Overlays** (Accessible modal dialogs, category navigation, single-photo lightbox with keyboard/arrows)
- [ ] **Phase 5: Accessibility Audit & Remediation** (Axe-core automated test, focus trap & restoration, ARIA semantics, keyboard walkthrough)
- [ ] **Phase 6: Private GitHub Repository Setup** (Git init, private remote verification, push)
- [ ] **Phase 7: [STOP] Deployment to Vercel** (Detailed deployment steps for user, wait for production URL)
- [ ] **Phase 8: Automated Visual QA & Pixel Diff Loop** (Playwright visual regression, pixelmatch diffs, computed style parity, <1% threshold)
- [ ] **Phase 9: Marketplace Production Architecture Diagram** (Next.js SSR/ISR, microservices, Kafka/SQS, Postgres/Redis/S3, OpenSearch, K8s multi-region)
- [ ] **Phase 10: Packaging & Final Deliverables** (Submission zip, PROMPTS.md, SPEC.md, QA report, architecture diagram PDF/PNG)

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
- [ ] Amenities Grid & modal trigger
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
