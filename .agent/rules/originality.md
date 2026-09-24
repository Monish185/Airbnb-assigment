# Agent Rule: Originality & Anti-Plagiarism Protocol

## 1. Zero Direct Source Copying
- Under no circumstances may an agent copy, download, scrape, reverse-engineer, or paste source HTML, CSS classes, JavaScript bundles, or React component trees from the reference website.
- Do not inspect source maps or reconstruct bundle files.
- The assignment uses automated plagiarism detection against known public repositories and reference codebases. Any identical markup structures or class naming conventions could trigger disqualification.

## 2. Clean-Room Observation Methodology
- Permitted observations:
  1. Visual screenshots of rendered states.
  2. Measuring computed CSS styles (computed `font-family`, `font-size`, `font-weight`, `line-height`, `color`, `background-color`, `border-radius`, `box-shadow`, `padding`, `margin`, `gap`).
  3. Reading rendered textual content for typing into `data/listing.ts`.
  4. Measuring timing functions (transition durations, easings, scroll thresholds).
- All observations must be synthesized into `docs/SPEC.md` prior to code generation.
- All code must be written from scratch using our own architectural decisions, naming conventions, and component composition.

## 3. Asset Usage
- Image media URLs present on the reference listing page may be referenced or downloaded since visual parity requires the exact property photos.
- Recreated icons must be hand-crafted inline SVG components rather than downloaded SVG markup from the reference bundle.
