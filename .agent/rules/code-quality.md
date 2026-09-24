# Agent Rule: Code Quality & Engineering Standards

## 1. TypeScript Strictness
- `strict: true` must be enabled in `tsconfig.json`.
- Zero tolerance for `any` or untyped data structures. Use precise union types, interfaces, or generics.
- All component props must be explicitly typed with an interface or type alias.
- Use explicit return types for hooks, utilities, and complex computations.

## 2. Component Design & Modularity
- Follow Single Responsibility Principle: each component should do one thing well.
- Keep components small and focused (< 150-200 lines where practical).
- Separate presentation components from business logic and state management.
- Place reusable primitives in `components/ui/` and icons in `components/icons/`.

## 3. Semantic HTML & Modern CSS
- Use standard semantic tags: `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Headings must follow strict visual and semantic hierarchy (`<h1>` unique to page title, followed by `<h2>`, `<h3>`).
- Never use non-semantic elements (`<div>`, `<span>`) for interactive elements that should be `<button>` or `<a>`.
- Styling must use Tailwind CSS utility classes aligned with design tokens defined in `tailwind.config.ts`.
- Avoid arbitrary inline CSS styles unless dealing with dynamic calculated coordinates.

## 4. State Management & Hooks
- Encapsulate modal, gallery, and lightbox state inside custom hooks (`hooks/useGallery.ts`).
- Avoid prop drilling for deep multi-component state; use React Context where appropriate.
- Manage side effects cleanly with proper cleanup functions in `useEffect` (e.g. scroll locks, keydown listeners).
