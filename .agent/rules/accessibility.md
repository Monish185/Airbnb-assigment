# Agent Rule: Accessibility & Inclusive Design Standards

## 1. Landmark & Semantic Structure
- Ensure single `<h1>` on the listing page for the main listing title.
- Every `<section>` should have an accessible label via `aria-labelledby` referencing its respective heading ID.
- Provide `<header>`, `<main>`, and `<footer>` landmarks for assistive navigation.

## 2. Interactive Controls & Icon Accessibility
- Every `<button>` must have visible text or an explicit `aria-label` attribute describing its exact action (e.g. `aria-label="Share this listing"`).
- Icons must be marked `aria-hidden="true"` when accompanied by descriptive text, or wrapped with an accessible label if standalone.
- Interactive elements must maintain minimum tap/click targets of at least 44x44px or clear visual padding.

## 3. Dialogs & Modal Overlays (Photo Tour & Lightbox)
- Modals must have `role="dialog"` or `role="alertdialog"` and `aria-modal="true"`.
- Modals must be labelled with `aria-labelledby` pointing to the dialog header/title.
- Focus trap: When open, `Tab` and `Shift+Tab` must cycle exclusively within the modal elements.
- Initial focus: Move focus to the first interactive element or close button upon opening.
- Focus restoration: Returning focus to the exact trigger button on the page when the dialog closes.
- Close on `Escape` key: Pressing `Esc` must immediately dismiss the active overlay.
- Background scroll lock: The background `document.body` must disable scrolling while modal is open, without causing horizontal layout shift.

## 4. Lightbox Navigation
- Active photo status should be communicated via an `aria-live="polite"` region (e.g. "Photo 3 of 42").
- Arrow keys (`ArrowLeft`, `ArrowRight`) must trigger previous and next photos.
- Disabled states for boundary conditions (e.g., first or last photo) must include `aria-disabled="true"` and proper disabled styles.

## 5. Focus Indicators & Reduced Motion
- Preserve visible focus indicators on all focusable elements matching Airbnb's ring styling (`focus-visible:ring-2`).
- Respect `prefers-reduced-motion` media queries: disable or minimize sliding and scale animations when user prefers reduced motion.
