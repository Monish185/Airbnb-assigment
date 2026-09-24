# Workflow: /ship

## Description
Final verification and packaging workflow before release and submission.

## Steps
1. **Repository Verification**:
   - Confirm Git status is clean.
   - Verify GitHub repository visibility is strictly `PRIVATE`.
2. **Production Build Validation**:
   - Run `npm run build` to confirm zero TypeScript errors and clean bundling.
3. **Architecture Diagram Finalization**:
   - Verify presence of `docs/architecture/` containing diagram source, PNG, and PDF.
4. **Deliverables Checklist**:
   - Verify `AGENTS.md`, `.agent/`, `docs/PROGRESS.md`, `docs/PROMPTS.md`, `docs/SPEC.md`, `qa/REPORT.md`, `docs/A11Y.md`.
5. **Package Generation**:
   - Generate submission archive `airbnb-clone-submission.zip` excluding `node_modules` and `.next`.
6. **Report Generation**:
   - Output final executive summary to user.
