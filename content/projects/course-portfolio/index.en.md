---
title: "Responsive Academic Portfolio"
date: "2025-09-13"
featured: false
weight: 10
draft: false
description: "A static Single Page Application (SPA) built as a Software Engineering college assignment, focusing on mobile ergonomics and native accessibility."
imageCover: "course-portfolio.webp"
imageCoverFallback: "course-portfolio.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/coursePortfolio/"
repositoryUrl: "https://github.com/emellybmuniz/coursePortfolio"

techReasons:
  JavaScript: "Manages theme-switching logic (dark mode), browser data persistence, and interactive project carousel behaviors."
  HTML5: "Provides the semantic structural backbone alongside ARIA accessibility tags to guarantee accessible navigation paths."
  CSS3: "Powers fluid layouts, scroll-triggered animations, and completely distinct navigation systems tailored for desktop and mobile viewports."

metadata:
  status: "Completed"
  platform: "Web Application (Client-side)"
  role: "Frontend Developer"
  industry: "Education / Academic Portfolio"
  
  challenges:
    - kicker: "Challenge 1: Hybrid Navigation and Ergonomics"
      title: "Structural menu transitions across viewport form-factors"
      description: "Standard desktop menus cause layout friction on mobile devices, making one-handed tracking difficult for users."
      resolution: "Designed a dual-interface via CSS Media Queries: an expanding sidebar menu for large monitors and a sticky bottom navigation bar optimized for thumb reach on mobile screens."
    - kicker: "Challenge 2: Theme Sync and Persistence"
      title: "Maintaining visual states across distinct client browser sessions"
      description: "Preventing a visual flash anomaly where the page briefly displays default styling rules before the theme preference script executes."
      resolution: "Implemented a synchronous JavaScript routine that evaluates 'localStorage' instantly on page load, injecting the theme class before the document body begins rendering."

features:
  - "Mobile navigation integrated directly into a native app-style bottom bar."
  - "Light/Dark theme toggle with client-side state persistence using LocalStorage."
  - "Adaptive project presentation switching from desktop arrows to mobile scrollable lists."
  - "Structured accessibility workflows using descriptive 'aria-label' and semantic elements."
  - "Client-validated contact form with clean routing to a static confirmation view."
---

## About the Project

This project consists of a static personal portfolio structured as a *Single Page Application* (SPA). It was developed as an academic assignment for a Software Engineering degree at [Centro Universitário Internacional Uninter](https://www.uninter.com/).

The core objective was to lock down basic frontend concepts, demonstrating that it is possible to create a modern, accessible, and highly responsive web layout using exclusively vanilla source code, independent of React or other third-party UI dependencies.

## Architecture and Technical Decisions

The codebase was modularized into clean, decoupled files to preserve Separation of Concerns:

* **`index.html`**: Encompasses the entire application DOM tree on a single page, leveraging layout semantic markup tags (`<header>`, `<main>`, `<section>`, `<footer>`) and basic accessible structures.
* **`styles/`**: Cleanly divided between base reset files (`reset.css`), core layouts (`main.css`), and localized color overrides for dark layouts (`dark-mode.css`).
* **`scripts/main.js`**: Centers element event listeners to intercept client input and govern runtime layout updates.

{{< technologies >}}

## Engineering Challenges and Resolutions

Development goals focused heavily on user experience (UX) fine-tuning across distinct viewport bounds and handling responsive application layout mechanics:

{{< challenges >}}

## Impact and Results

* **Optimized Mobile Ergonomics**: The mobile bottom navigation bar dramatically decreased interface interaction friction, adhering to modern native design practices for vertical devices.
* **Serverless Client Persistence**: Adopting `localStorage` mechanics ensures theme presets survive page lifecycles without setting up database infrastructure.
* **Native Accessibility Integration**: Semantic document trees ensure text readers parse information layout heights and interactive target controls clearly with zero ambiguity.