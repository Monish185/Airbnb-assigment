# Workflow: /verify

## Description
Comprehensive verification workflow running automated visual diffs, computed style comparisons, and accessibility audits.

## Steps
1. **Ensure Local / Remote Server is Running**:
   - Verify development server on `http://localhost:3000` or target live production URL.
2. **Execute Automated Playwright Visual Diff Suite**:
   - Run `qa/compare.spec.ts` across `1440x900` and `1920x1080`.
   - Capture clone screenshots and generate pixel diffs in `qa/diff/`.
   - Calculate diff percentages per view and state.
3. **Execute Accessibility Scan**:
   - Run `@axe-core/playwright` check.
   - Verify focus trapping, keyboard navigation, and ARIA roles.
4. **Compile QA Report**:
   - Update `qa/REPORT.md` with screenshot triplets, metrics, and parity checklist.
5. **Evaluate Threshold**:
   - If diff $> 1\%$, prioritize fixes, apply adjustments, and re-run.
   - Once diff $< 1\%$ across views, certify as passed.
