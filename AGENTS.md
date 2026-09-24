# AGENTS.md: Autonomous AI Development Framework & System Architecture

This repository is developed and maintained using autonomous AI agent workflows. This document outlines the project guidelines, agent roles, engineering rules, folder hierarchy, tool integrations, and Definition of Done for all contributing agents.

---

## 1. Project Overview & Scope
- **Project**: Pixel-perfect, desktop-only clone of an Airbnb listing page.
- **Reference**: [https://airbnbproj-iota.vercel.app/](https://airbnbproj-iota.vercel.app/) (and mirrored verification at [https://airbnb-clone-umber-two.vercel.app](https://airbnb-clone-umber-two.vercel.app))
- **Listing Name**: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"
- **Primary Views**:
  1. **Listing Page**: Full property page with sticky header, hero photo grid, host profile, highlights, amenities, reviews breakdown, location, things to know, footer, and floating booking widget.
  2. **Photo Tour**: Full-screen modal dialog with category tabs, smooth room scrolling, and organized photo gallery.
  3. **Lightbox**: Single-photo modal viewer with previous/next navigation, counter, and keyboard shortcuts.
- **Target Viewports**: 1440x900 (primary desktop baseline), 1920x1080 (secondary desktop widescreen).

---

## 2. Technology Stack & Principles
- **Framework**: Next.js 14/15 (App Router)
- **Language**: TypeScript (Strict Mode, `noImplicitAny: true`, zero `any`)
- **Styling**: Tailwind CSS + Custom CSS Variables for precise design tokens
- **Icons**: Handcrafted accessible inline SVG components matching reference iconography
- **Animation/Motion**: CSS transitions & keyframes (plus Framer Motion if complex layout animations require)
- **Testing & Visual QA**: Playwright for end-to-end automated diffing and axe-core for WCAG 2.1 AA accessibility audits
- **Data Architecture**: Fully typed local dataset module (`data/listing.ts`), zero external backend dependencies.

---

## 3. Strict Anti-Plagiarism & Originality Protocol
- **Zero Source Copying**: Agents are strictly forbidden from copying, downloading, viewing source maps, scraping DOM tree markup, or duplicating CSS class names from the reference site.
- **Clean-Room Specification**: The Recon subagent observes visual layout, dimensions, typography, colors, padding/margins, and behavioral states in the browser, transcribing them into `docs/SPEC.md`. All application code is written strictly from scratch using this functional spec.
- **Asset Integrity**: Visual images are sourced directly via legitimate media URLs or referenced assets to achieve visual parity without copying proprietary code.

---

## 4. Subagent Roles & Responsibilities
Work is organized across specialized subagent personas, logged in `docs/AGENTS_LOG.md`:
1. **Recon Agent**: Operates browser automation to measure geometry, typography, color palettes, and interactive states without inspecting private code. Produces `docs/SPEC.md`.
2. **Builder Agent**: Implements the foundation, typed datasets, component hierarchy, and views adhering strictly to `SPEC.md` and `.agent/rules/code-quality.md`.
3. **QA & Diff Agent**: Executes automated screenshot capture and pixel diffing against the reference using Playwright, iterating until <1% visual discrepancy is achieved.
4. **A11y Agent**: Verifies keyboard traps, focus restoration, ARIA labels, semantic landmark hierarchy, and executes `@axe-core/playwright`. Produces `docs/A11Y.md`.
5. **Docs & Architecture Agent**: Maintains project logs, prompt logs, and generates the enterprise-scale vacation rental marketplace architecture diagram in `docs/architecture/`.

---

## 5. Folder Hierarchy
```text
├── .agent/                    # AI Agent configuration directory
│   ├── rules/                 # Coding, a11y, originality, commit rules
│   │   ├── code-quality.md
│   │   ├── accessibility.md
│   │   ├── originality.md
│   │   └── commit-conventions.md
│   ├── skills/                # Agent skill execution guides
│   │   ├── reference-recon/SKILL.md
│   │   ├── visual-diff/SKILL.md
│   │   ├── a11y-audit/SKILL.md
│   │   └── architecture-diagram/SKILL.md
│   └── workflows/             # Actionable agent execution workflows
│       ├── recon.md
│       ├── build-section.md
│       ├── verify.md
│       └── ship.md
├── app/                       # Next.js App Router (layout, page, globals.css)
├── components/
│   ├── layout/                # Navigation, header, footer, modal container
│   ├── listing/               # Hero grid, booking widget, reviews, amenities
│   ├── gallery/               # Photo tour overlay, lightbox modal
│   ├── ui/                    # Reusable primitives (buttons, badges, dividers)
│   └── icons/                 # Inline SVG icon library
├── data/                      # Typed listing content (data/listing.ts)
├── hooks/                     # Custom React hooks (gallery state, scroll listener)
├── lib/                       # Utility functions, styling helpers
├── qa/                        # QA test automation, screenshots, and visual diffs
│   ├── reference/             # Ground truth screenshots
│   ├── clone/                 # Clone implementation screenshots
│   ├── diff/                  # Visual difference output images
│   └── compare.spec.ts        # Playwright visual comparison spec
├── docs/                      # Architectural and assignment deliverables
│   ├── PROGRESS.md            # Active phase progress checklist
│   ├── PROMPTS.md             # Sequential prompt execution log
│   ├── AGENTS_LOG.md          # Multi-agent action log
│   ├── SPEC.md                # Reverse-engineered design specification
│   ├── A11Y.md                # Accessibility audit report
│   └── architecture/          # High-scale production architecture deliverables
├── public/                    # Static assets, fonts, icons
├── tailwind.config.ts         # Design tokens & color system
├── tsconfig.json              # TypeScript strict configuration
└── package.json
```

*Note on Antigravity Conventions*: Antigravity automatically detects workspace customizations in `.agent/` and `.agents/`. Both conventions are supported and mapped for skill and rule execution.

---

## 6. Development & Operational Commands
- `npm run dev`: Launch local development server on `http://localhost:3000`
- `npm run build`: Verify TypeScript compilation and generate Next.js production build
- `npm run lint`: Run ESLint checks across codebase
- `npx playwright test`: Run automated end-to-end visual and accessibility tests

---

## 7. Definition of Done (DoD)
An implementation phase or the final deliverable is considered complete only when:
- [ ] Visual fidelity matches reference on desktop (1440x900 and 1920x1080) within <1% diff.
- [ ] All 3 views (Listing, Photo Tour, Lightbox) are completely functional and interactive.
- [ ] Overlays implement ARIA dialog semantics, scroll locking, and accessible focus management (trapping and restoration).
- [ ] Full keyboard navigation supported (Tab, Shift+Tab, Escape, Left/Right arrow keys).
- [ ] Axe-core accessibility audit reports zero critical or serious violations.
- [ ] Code is 100% original, handwritten, clean, and typed with zero `any`.
- [ ] Production-scale marketplace architecture diagram delivered in PNG, PDF, and source format.
- [ ] Private repository verified and deployed to Vercel.
