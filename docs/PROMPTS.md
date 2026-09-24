# Prompt History & AI Instructions Log

This document records the exact sequence of prompts, instructions, and directives executed during the development of the Playpower Labs Airbnb Listing Clone project.

---

## Prompt #1 (Initial Kickoff & Requirements)

**Timestamp:** 2026-09-24T19:14:57+05:30  
**Source:** User  
**Role Assigned:** Senior Frontend Engineer & QA Lead  

### Verbatim Text:
```text
you can directly open it in chrome using dev tools or playwright then
# ROLE
You are a senior frontend engineer and QA lead working autonomously in this workspace. Build, verify and ship a take-home assignment for Playpower Labs end to end. Work in phases, keep a running TODO in `docs/PROGRESS.md`, and report briefly at the end of each phase. Only stop and ask me at the points marked **[STOP]**.

# THE ASSIGNMENT
Build a **pixel-perfect, desktop-only clone** of an Airbnb listing page, matching the reference exactly in look and behavior.

Reference (single source of truth): https://airbnbproj-iota.vercel.app/

Three views:
1. **Listing Page**: full property page (title "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10", Share/Save actions, 5-image hero grid with a "Show all photos" button, and every section below it, through to the footer).
2. **Photo Tour**: full-screen gallery overlay, opened from "Show all photos" or any hero image. Has a top row of category thumbnails (Living room 1, Living room 2, Full kitchen, Bedroom, Full bathroom, Pool, Exterior, Pool, Additional photos) and a scrolling list of room sections, each with a title, subtitle (e.g. "Sofa · Air conditioning · Ceiling fan · TV") and photos.
3. **Lightbox**: single-photo viewer opened from any gallery photo, with prev/next arrows and keyboard ←/→ navigation.

The match must cover:
- **Visual**: layout, spacing, typography, colours, icons, assets.
- **Motion**: hover states, scroll animations, transitions, open/close animations of the overlays.
- **Interaction and accessibility**: keyboard navigation, focus management, ARIA.

Mobile is NOT required. Desktop only.

# HARD RULES (non-negotiable)
1. **Originality / anti-plagiarism.** They run plagiarism detection. You may open the reference in the browser and observe it: screenshots, visual inspection, and measuring computed values (font family/size/weight, colours, spacing, dimensions, timing and easing of transitions) to record in a spec. You must NOT copy, download, save, view-source-and-paste, or reconstruct the reference's HTML/CSS/JS source, bundles, source maps or repo. Do not copy class names, component structure or code from it. Write all code from scratch in your own structure. Image assets may be referenced by their URLs or downloaded as assets, since the brief requires identical assets, but no code may be lifted.
2. **The GitHub repo must be PRIVATE.** The brief forbids public repos. Never create or switch anything to public.
3. **Scope discipline.** A clean, complete implementation beats an over-engineered incomplete one. No backend needed. Store data in a typed local module.
4. **Stack (decided, don't ask):** Next.js (App Router) + TypeScript + Tailwind CSS. Use `framer-motion` only if plain CSS transitions can't match the reference. Use Playwright for screenshot and QA automation. No component library that ships pre-styled Airbnb-like UI.
5. Desktop viewport targets: 1440x900 primary, 1920x1080 secondary.

# PHASE 0: AI WORKFLOW CONFIG (graded, so do it first)
The evaluators review sub-agent and skill configs, so create them and actually use them throughout:
- `AGENTS.md` at repo root: project overview, stack, folder structure, coding conventions, commands, definition of done.
- `.agent/rules/` with rules files: code-quality (TS strict, no `any`, small components, semantic HTML), accessibility, originality (the rules above), commit conventions.
- `.agent/skills/` with these skills, each as a folder with a SKILL.md:
  - `reference-recon` (how to inspect the reference without copying code)
  - `visual-diff` (how to run the screenshot and pixel-diff loop)
  - `a11y-audit` (keyboard, focus, ARIA checklist)
  - `architecture-diagram` (how to produce the deliverable diagram)
- `.agent/workflows/` with reusable workflows: `/recon`, `/build-section`, `/verify`, `/ship`.
- Where useful, split the work across sub-agents: Recon agent, Builder agent, QA/Diff agent, A11y agent, Docs agent. Record which sub-agent did what in `docs/AGENTS_LOG.md`.
- Create `docs/PROMPTS.md` and append a numbered entry for every significant prompt or instruction you act on during this project (my prompt included, verbatim as the first entry). It is a required deliverable.

If Antigravity uses different directory conventions than the above, use the correct ones for this tool and mention it in AGENTS.md.

# PHASE 1: RECON (observe, don't copy)
Use the browser subagent on the reference at 1440x900.
1. Full-page scroll-through. Take screenshots of every viewport-height segment and a full-page screenshot. Save to `qa/reference/`.
2. Write `docs/SPEC.md` documenting, section by section, from top to bottom (header, title row, hero grid, key facts, host block, description, sleeping arrangements, amenities, reviews, map/location, host info, things to know, footer, plus any sticky or floating elements such as a booking card or a sticky header that appears on scroll):
   - exact text content, in reading order
   - layout (grid/flex, widths, gaps, paddings, margins in px)
   - typography (family, size, weight, line-height, letter-spacing, colour hex)
   - colours (all hex values), border radii, shadows, borders
   - icons (identify each: what it depicts, size, stroke or fill; recreate as inline SVG)
   - every image URL and its rendered dimensions
3. Behavior spec, exercised for real in the browser:
   - hover states for every interactive element (buttons, links, images, thumbnails, arrows): what changes (colour, scale, brightness, underline, background) and the transition duration and easing
   - scroll behavior: sticky elements, appear-on-scroll effects, smooth scrolling, scroll-linked animation
   - Photo Tour: how it opens (animation type, duration), how it closes, thumbnail row behavior (click scrolls to section? active state on scroll?), sticky top bar, photo layout per section (grid pattern), what clicking a photo does, body scroll lock, URL/hash changes if any
   - Lightbox: open/close animation, image transition between slides, arrow visibility/disabled states at the first and last photo, counter/caption if any, backdrop colour/opacity, click-outside and Esc behavior, keyboard ←/→, whether focus is trapped, what happens to focus on close
   - Tab order through the whole page and overlays; visible focus ring style; ARIA roles/labels present
4. Save screenshots of every state (each hover, open overlay, lightbox at first/middle/last photo) to `qa/reference/states/` with clear names.
Deliver a `docs/SPEC.md` I could rebuild the page from without ever seeing the reference.

# PHASE 2: FOUNDATION
- Scaffold the Next.js + TS + Tailwind project. Configure fonts to match the reference exactly (use `next/font` or self-hosted files; if the reference uses a proprietary font, find the closest legitimate match and record the difference).
- Put design tokens (colours, radii, shadows, spacing, font scale, transition durations/easings) in `tailwind.config` and CSS variables, taken from SPEC.md.
- Create `data/listing.ts`: fully typed data for the listing (title, subtitle, facts, host, description, amenities, reviews, location, rules, photo categories with photos and captions). Content must match the reference text exactly.
- Folder structure: `app/`, `components/{layout,listing,gallery,ui,icons}/`, `data/`, `hooks/`, `lib/`, `qa/`, `docs/`.
- Commit after this phase.

# PHASE 3: LISTING PAGE
Build section by section using the `/build-section` workflow. For each section, after building, screenshot at 1440x900 and compare against the reference section. Fix before moving on.
- Hero grid: 1 large + 4 small images with correct radii on outer corners only, gaps, aspect ratios, hover dimming/overlay effect, and the "Show all photos" button (position, icon, shadow, hover, focus).
- Header actions (Share, Save): hover background, icons, exact sizing.
- Everything below the hero: every section and every sticky/scroll behavior found in recon.
- Semantic HTML: one `h1`, ordered headings, landmarks (`header`, `main`, `footer`, `section` with `aria-labelledby`), real `button` and `a` elements, image `alt` text.

# PHASE 4: PHOTO TOUR + LIGHTBOX
Build both as accessible dialogs from scratch (no UI kit look-alike):
- Photo Tour: `role="dialog"`, `aria-modal="true"`, labelled; opened from "Show all photos" AND from clicking any hero image. Match the open/close animation, the sticky top bar with back/close control, the thumbnail category row (click scrolls to the section, active state updates on scroll if the reference does that), section titles and subtitles, and the photo grid patterns per section. Lock body scroll while open.
- Lightbox: opened from any photo in the Photo Tour. Prev/next arrows (matching size, position, hover, and disabled behavior at the ends), ←/→ keyboard navigation, Esc closes it (returning to the Photo Tour, not the page, unless the reference behaves otherwise), backdrop matching the reference, image transition matching duration and easing, preload adjacent images.
- Focus management: move focus into the dialog on open, trap Tab inside, restore focus to the triggering element on close, `aria-label`s on all icon buttons, `aria-live` announcement of the current photo (e.g. "Photo 3 of 42") if appropriate, `prefers-reduced-motion` respected.
- Keep open state in a small hook or context (e.g. `useGallery`) with clear types.
- Commit after this phase.

# PHASE 5: A11Y PASS
Run the `a11y-audit` skill: tab through the entire page and both overlays, verify visible focus rings match the reference, verify axe checks pass (use `@axe-core/playwright`), fix issues. Write results to `docs/A11Y.md`.

# PHASE 6: GITHUB (PRIVATE)
1. Add a sensible `.gitignore`, a `README.md` (overview, stack, run instructions, structure, how AI tooling was used, list of decisions and known differences from the reference).
2. Initialize git with clean, conventional commits.
3. Use the GitHub CLI or GitHub integration to create a **private** repository named `airbnb-clone-playpower` under my account and push. If you are not authenticated, tell me the exact command to run (`gh auth login`) and wait. After pushing, verify with `gh repo view --json visibility` that visibility is PRIVATE and show me the result. If it is not private, fix it immediately.

# PHASE 7: **[STOP] DEPLOY (I DO THIS ONCE)**
Stop here and tell me exactly, step by step, how to deploy this private repo to Vercel for the first time (import the repo, framework preset, env vars if any, root directory, build command, output settings). Also tell me how to give you the production URL. Wait until I reply with the live URL. Do not continue until I do.

# PHASE 8: AUTOMATED VISUAL QA LOOP (the important one)
Using the live URL (and localhost for fast iterations), run the `visual-diff` skill:
1. Write a Playwright script `qa/compare.spec.ts` that, at 1440x900 and 1920x1080, captures the reference and my clone in identical states:
   - top of page, each scroll segment, full page
   - hover states of each interactive element
   - Photo Tour open (top, middle, bottom scroll positions)
   - Lightbox open (first, middle, last photo)
2. Generate pixel diffs with `pixelmatch` or `odiff`, saved to `qa/diff/` with a `qa/REPORT.md` listing every state, its diff percentage, and a screenshot triplet (reference / mine / diff).
3. Also compare computed styles on key elements (fonts, colours, spacing, sizes) between reference and mine and list mismatches. Measurements only, never source copying.
4. Also compare behavior: transition durations and easings, hover effects, keyboard flows, focus order, scroll behaviors. Create a behavior parity checklist in the report.
5. Produce a prioritized list of everything missing or different, fix it, rebuild, re-run. Repeat until every state is within about 1% diff (or the remaining differences are unavoidable, such as font licensing or anti-aliasing, which you document), and the behavior checklist is fully checked. Cap at 8 iterations, and show me the diff percentage trend.
6. Commit and push after each iteration. Ask me to trigger or confirm redeploys only if auto-deploy from GitHub is not working.

# PHASE 9: ARCHITECTURE DIAGRAM (required deliverable)
Create a high-level architecture diagram for a **production-scale vacation-rental marketplace (think Airbnb)**, not just this clone. Deliver as PNG and PDF, plus the editable source (Excalidraw JSON or Mermaid) in `docs/architecture/`. It must clearly show the scaling strategy for:
- **Frontend**: Next.js with SSR/ISR for listing pages, CDN and edge caching, image optimization pipeline (resizing, WebP/AVIF, responsive srcsets), code splitting.
- **Backend**: API gateway / load balancer, stateless services split by domain (listings, search, booking, payments, messaging, reviews, auth, notifications), horizontal autoscaling, async processing via queues/event streaming (Kafka or SQS) for bookings, emails, and indexing, idempotent booking and payment flows, rate limiting.
- **Storage**: primary relational DB (Postgres) with read replicas and sharding strategy by region or listing id, Redis for caching and availability locks, object storage (S3) + CDN for photos, data warehouse for analytics.
- **Search**: Elasticsearch/OpenSearch (geo + filters + availability), indexing pipeline fed by change-data-capture, ranking, cache of popular queries.
- **Deployment**: multi-region, CI/CD, containers on Kubernetes, blue-green or canary, observability (metrics, logs, tracing, alerts), CDN, failover and disaster recovery.
Label the data flows (e.g. the "search → view listing → book → pay" path), note key capacity and consistency decisions in a short legend, and keep it readable on one page.

# PHASE 10: PACKAGE
- Ensure `docs/PROMPTS.md` is complete and in order.
- Ensure `AGENTS.md`, `.agent/` configs, `docs/SPEC.md`, `qa/REPORT.md` and the architecture diagram are in the repo.
- Create the final zip `airbnb-clone-submission.zip` containing the code (without `node_modules`, `.next`), the architecture diagram (PNG/PDF), the agent/skill configs and the prompts log.
- Final summary to me: what was built, final diff percentages, known differences, live URL, repo URL (private), and the exact submission checklist mapped to the brief.

# DEFINITION OF DONE
- [ ] All 3 views work and visually match at 1440x900 and 1920x1080
- [ ] Every hover, scroll, transition and overlay animation matches
- [ ] Keyboard nav, focus trap, focus restore, Esc, ←/→, ARIA all work; axe clean
- [ ] Zero copied code from the reference; all code is original
- [ ] Repo is PRIVATE and verified
- [ ] Deployed on Vercel and QA report is generated from the live URL
- [ ] Architecture diagram delivered (PNG/PDF + source)
- [ ] Agent/skill configs and PROMPTS.md included
- [ ] Zip built and the checklist reported

Start with Phase 0 now.
echo "# Airbnb-assigment" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Monish185/Airbnb-assigment.git
```

---

## User Prompt #10
```text
not able to select dates but able to clear dates
```

### Action Taken:
- Identified that in the prior calendar version, day buttons lacked interactive click handlers and state synchronization.
- Implemented full interactive date range selection across October 2026 and November 2026 in `components/listing/CalendarSection.tsx`.
- Added connector styling:
  - Start date: Black circular badge (`bg-[#222222] text-white`) with right connector bar (`w-1/2 bg-[#F7F7F7]`).
  - Range dates: Full light gray background bar (`bg-[#F7F7F7]`).
  - End date: Left connector bar (`w-1/2 bg-[#F7F7F7]`) with black circular badge.
- Added dynamic title/subtitle states:
  - Default / Selected: `${nights} nights in Candolim` & `${startDate} - ${endDate}`.
  - Partial Selection: `Select checkout date` & `Minimum stay: 2 nights`.
  - Cleared: `Select check-in date` & `Add your travel dates for exact pricing`.
- Connected `onDatesChange` callback in `app/page.tsx` to dynamically sync check-in, checkout, nights, and total accommodation cost with `BookingCard`.
- Verified end-to-end functionality via Playwright script (`qa/verify_calendar_selection.js`), testing clear, start date click, end date click, and cross-month selection (Oct 28 to Nov 5).
- Compiled clean production build and committed to `main`.

---

## User Prompt #11
```text
when we click on reserve this bottom notification appears with an animation for a second or so
```

### Action Taken:
- Analyzed user screenshot showing the bottom notification pill that triggers upon clicking "Reserve".
- Extracted exact geometry and styles:
  - Container: `fixed bottom-6 left-1/2 -translate-x-1/2 z-50`
  - Pill styling: `bg-[#222222] text-white text-[14px] font-normal px-4 py-2.5 rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.25)] whitespace-nowrap`
  - Text content: `You won't be charged yet`
  - Animation: Slide-up (`translate-y-3` to `translate-y-0`) and fade-in (`opacity-0` to `opacity-100`) with `transition-all duration-300 ease-out`. Auto-dismisses after 2 seconds with smooth exit animation.
- Implemented `showReserveToast` state and `handleReserveClick` in `app/page.tsx` for both `BookingCard` and `StickyHeader` reserve triggers.
- Verified appearance and auto-dismissal using Playwright test (`qa/verify_reserve_toast.js`) and captured visual verification screenshot (`qa/reserve_toast_visible.png`).
- Built and deployed changes to production `main`.

