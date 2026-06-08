# Development Guide

This document lists all the useful executable commands available for maintaining, testing, and building this portfolio.

## 🛠 Setup & Running

**Install Dependencies:**
```bash
npm install
```

**Run Development Server:**
Starts the Hugo local development server with live reload enabled.
```bash
npm run dev
```

**Build for Production:**
Compiles SCSS, minifies JS/CSS, and builds the static HTML site in the `public` folder.
```bash
npm run build
```

---

## 🧹 Linters & Code Quality

**Run All Linters:**
Runs both JavaScript/TypeScript and CSS/SCSS linters.
```bash
npm run lint
```

**Lint JavaScript & TypeScript:**
Checks the `assets/**/*.ts` files against ESLint rules and performs strict type-checking.
```bash
npm run lint:js
```

**Lint CSS & SCSS:**
Checks the `assets/**/*.scss` files against Stylelint rules (BEM standards and CSS architecture).
```bash
npm run lint:css
```

**Auto-fix CSS/SCSS:**
Automatically fixes simple formatting and syntax issues in SCSS files.
```bash
npm run lint:css -- --fix
```

**Format Code (Prettier):**
Formats all TypeScript and SCSS files using Prettier.
```bash
npm run format
```

**Type-Checking:**
Runs the TypeScript compiler without emitting files, to strictly verify types.
```bash
npm run type-check
```

---

## 🚀 Testing & Lighthouse

**Run End-to-End Tests:**
Runs Playwright E2E tests to verify user flows.
```bash
npm run test:e2e
```

**Lighthouse CI:**
Performance, accessibility, and SEO are automatically audited by Lighthouse CI in GitHub Actions on every Pull Request. To run it locally, you can use the [Lighthouse Chrome extension](https://chromewebstore.google.com/detail/blipmdconlkpinefehnmjammfjpmpbjk?utm_source=item-share-cb) or Lighthouse CLI:
```bash
npx lhci autorun
```

---

## 🎨 Content Management

**Create a New Project:**
Generates a new markdown file for a portfolio project using the proper archetype template.
```bash
hugo new content/projects/your-project-name.md
```

---

## ⚡ Performance & Testing

**Clear Cache:**
If you run into issues with Hugo's asset generation (e.g., images not updating or lock errors), clear the Hugo cache.
```bash
hugo mod clean --all
```
*(On Windows, if you face an `Access is denied` error for `resources/_gen/images`, manually delete the `resources/_gen` folder or stop the dev server first).*
