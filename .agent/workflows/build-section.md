# Workflow: /build-section

## Description
Systematic workflow for implementing a single listing page section, verifying visual parity, and committing incrementally.

## Steps
1. **Spec Review**: Consult `docs/SPEC.md` for target section dimensions, typography, spacing, colors, and behavior.
2. **Data Integration**: Ensure all necessary text content, image URLs, and attributes are defined in `data/listing.ts`.
3. **Component Implementation**:
   - Write clean, semantic React component under `components/listing/` or `components/layout/`.
   - Apply Tailwind utility classes based on measured design tokens.
   - Include inline SVG icons matching reference iconography.
   - Ensure proper heading levels, accessible labels, and keyboard focus states.
4. **Visual Verification**:
   - Capture localized or full-viewport screenshot of the section at `1440x900`.
   - Compare side-by-side with reference section screenshot in `qa/reference/`.
   - Adjust padding, font sizes, line heights, or colors to eliminate discrepancies.
5. **Progress & Log Update**:
   - Mark section complete in `docs/PROGRESS.md`.
   - Record builder actions in `docs/AGENTS_LOG.md`.
