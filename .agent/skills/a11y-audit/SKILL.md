---
name: a11y-audit
description: Execute comprehensive accessibility auditing covering keyboard navigation, focus management, ARIA, and automated axe-core scans.
---

# Skill: Accessibility Audit & Verification

## Objective
Verify that the listing page, Photo Tour modal, and Lightbox viewer strictly conform to WCAG 2.1 Level AA accessibility standards.

## Audit Checklist
1. **Automated Axe-Core Auditing**:
   - Run `@axe-core/playwright` across all primary views and states.
   - Fail on any `critical` or `serious` violations.
2. **Keyboard Navigation & Tab Order**:
   - Tab through the full listing page sequentially.
   - Verify visible, high-contrast focus rings on all interactive elements.
   - Confirm logical reading and focus order.
3. **Modal Dialog Semantics & Focus Trapping**:
   - Photo Tour:
     - Verify `role="dialog"` and `aria-modal="true"`.
     - Confirm focus is trapped within the modal while open.
     - Verify `Escape` key immediately closes the dialog.
     - Confirm focus returns to the initiating trigger button upon closing.
   - Lightbox:
     - Verify single-photo modal trapping.
     - Verify keyboard shortcuts: `ArrowLeft` (previous photo), `ArrowRight` (next photo), `Escape` (dismiss to Photo Tour).
     - Verify photo counter status updates via `aria-live="polite"`.
4. **Accessible Names & ARIA Labels**:
   - Verify every icon button has a descriptive, human-readable `aria-label`.
   - Confirm all non-decorative photos have contextual `alt` descriptions.
5. **Output**:
   - Document all findings, pass/fail status, and remedies in `docs/A11Y.md`.
