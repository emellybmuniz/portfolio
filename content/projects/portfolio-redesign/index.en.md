---
title: "Personal Portfolio"
date: 2026-06-06
featured: true
weight: 10
draft: false
description: "A portfolio redesign focused on extreme performance, scalable architecture, and strong QA assurance through E2E and CI/CD."
imageCover: "portfolio-project-cover.webp"
imageCoverFallback: "portfolio-project-cover.png"
categories: 
  - "Frontend"
technologies:
  - "Hugo"
  - "Sass"
  - "TypeScript"
  - "Playwright"
  - "GitHub Actions"
liveDemo: "https://emellybeatriz.dev"
repositoryUrl: "https://github.com/emellybmuniz/portfolio"

techReasons:
  Hugo: "Ultra-fast static generation, excellent for SEO and serving raw HTML over CDN."
  SCSS: "Allows robust architecture based on Feature Co-location, with global tokens."
  TypeScript: "Static typing to avoid UI contract breaks at runtime."
  Playwright: "Modern tool to test critical flows and ensure visual regression on every commit."
  GitHub Actions: "Full pipeline automation, blocking bad deployments if Lighthouse scores drop."

metadata:
  status: "Completed"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Technology / Design"
  
  challenges:
    - kicker: "Challenge 1: Scalability vs Performance"
      title: "Premium design without heavy frameworks"
      description: "The major technical challenge was to orchestrate a visually rich interface with micro-interactions while maintaining strict performance budgets (Lighthouse > 90)."
      resolution: "Instead of using React/Next.js, I modularized the architecture in Feature Co-Location (HTML, SCSS and TS grouped together), reducing DOM overhead and only loading strictly necessary Vanilla JS."
    - kicker: "Challenge 2: Automatic Quality Assurance"
      title: "Ensuring stability without exhaustive unit tests"
      description: "Being a purely visual project, it didn't make sense to write hundreds of trivial unit tests, but the site still couldn't break."
      resolution: "Implemented E2E and Visual Regression tests using Playwright. A CI/CD pipeline (GitHub Actions) was configured to validate Typecheck and run Lighthouse automatically on every Pull Request."
      
features:
  - "Highly performant static rendering (Minimal Time to First Byte)"
  - "Navigability and visual regression E2E tests with Playwright"
  - "CI/CD integrated with Lighthouse to prevent bad builds"
  - "Autonomous dependency management via bot (Renovate)"
  - "Native and fluid Dark Mode support with state persistence"
---

## About the Project

The development of my portfolio was planned as a practical demonstration of modern front-end engineering. The main focus was not just to create an online resume, but to build a digital product reflecting technical maturity: with minimal load times, absence of useless dependencies, accessibility, and solid Quality Assurance automation.

## Architecture and Technical Decisions

To bypass client-side processing bloat, I abandoned heavy ecosystems and adopted the combination of Static Site Generation (SSG) with strict *Vanilla* TypeScript.

{{< technologies >}}

## Engineering Challenges & Solutions

Throughout the implementation, I bypassed some crucial problems to guarantee software stability.

{{< challenges >}}

## Impact and Results

The project today reaches maximum scores in Google Lighthouse assessments, with Accessibility, SEO, and Best Practices in the green. Furthermore, my implementation of an automated test pipeline ensured that any future CSS alteration is shielded against regressions or responsive breakage, offering a nearly "bulletproof" code experience for the project's scale.
