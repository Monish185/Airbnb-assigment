# Workflow: /recon

## Description
Autonomous workflow for inspecting and measuring the reference application without copying source code.

## Steps
1. Initialize browser subagent or devtools at `1440x900`.
2. Navigate to reference URL: `https://airbnbproj-iota.vercel.app/` (and fallback `https://airbnb-clone-umber-two.vercel.app`).
3. Capture full-page screenshot and viewport slices into `qa/reference/`.
4. Run DOM/CSS property queries to extract typography, colors, padding, layout structures, and asset URLs.
5. Trigger interactive states (hover over Share/Save/Hero, open Photo Tour, open Lightbox) and take state screenshots into `qa/reference/states/`.
6. Compile comprehensive design token dictionary and section breakdowns in `docs/SPEC.md`.
7. Log activities in `docs/AGENTS_LOG.md`.
