# Agent Rule: Git Commit Conventions

## 1. Commit Message Format
All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
`<type>(<scope>): <short description>`

## 2. Permitted Types
- `feat`: A new user-facing feature or section (e.g. `feat(listing): implement hero photo grid`)
- `fix`: A bug fix or visual regression correction (e.g. `fix(gallery): resolve focus trap in lightbox`)
- `refactor`: Code reorganization with no functional or visual change
- `style`: Visual styling adjustments or design token tuning
- `docs`: Documentation updates (e.g. `docs(spec): document computed typography and colors`)
- `test`: Adding or updating QA, visual diff, or axe-core tests
- `chore`: Build tooling, dependency management, workflow configs

## 3. Scopes
Common scopes to maintain clarity:
- `workflow`: Agent and workflow configurations
- `recon`: Reconnaissance screenshots and specification documents
- `foundation`: Next.js, Tailwind, theme tokens, typography, typed data
- `listing`: Listing page components and sections
- `gallery`: Photo Tour overlay
- `lightbox`: Single-photo Lightbox viewer
- `a11y`: Accessibility remediations and ARIA attributes
- `qa`: Visual regression tests and diff reports
- `arch`: Architecture diagrams and system design deliverables

## 4. Integrity Guidelines
- Commits must be atomic and purposeful.
- Never commit broken TypeScript builds or untracked temporary binaries.
- Ensure the repository visibility is kept strictly **private** across all Git operations.
