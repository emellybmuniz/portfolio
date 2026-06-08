---
title: BMI Calculator
date: 2024-06-28
featured: false
weight: 5
draft: false
description: A straightforward frontend Body Mass Index (BMI) calculator featuring conditional card component styling based on WHO reference charts.
imageCover: calculadora-imc.webp
imageCoverFallback: calculadora-imc.png
categories:
  - Frontend
technologies:
  - JavaScript
  - HTML5
  - CSS3
liveDemo: https://emellybmuniz.github.io/calculadora-imc/
repositoryUrl: https://github.com/emellybmuniz/calculadora-imc
metadata:
  status: Completed
  platform: Web Application (Client-side)
  role: Frontend Developer
  industry: Utility Tools
  challenges:
    - kicker: 'Challenge 1: Punctuation Sanitization'
      title: Handling mixed local decimal separator inputs
      description: Preventing regional metric entries using comma notation (e.g., 1,75) from returning NaN variants during parsing steps.
      resolution: Executed string-level conversion targeting localized commas via '.replace(',', '.')' methods prior to executing parseFloat calls.
    - kicker: 'Challenge 2: State Class Overlaps'
      title: Resetting residual status styling rules over updates
      description: Ensuring old alert indicator class structures do not stack on the display container when running multiple operations in sequence.
      resolution: Explicitly declared 'resultadoImc.className' rule clears within the rendering pipelines right before injecting updated state lists.
features:
  - Mathematical calculation routines following WHO standard frameworks.
  - Sanitization layer converting distinct comma and period user values dynamically.
  - Conditional layout presentation mapping custom palette colors to specific scores.
  - Native form navigation intercept routing computations entirely client-side.
  - Decoupled responsive media sheet streamlining paint passes for compact viewports.
techReasons:
  JavaScript: Handles form submission events, sanitizes decimal punctuation formats, and evaluates the operational BMI formula.
  HTML: Provides the presentation layout for the inputs, submission triggers, and the static reference comparison matrix table.
  CSS: Powers the main radial gradient background presentation and maps conditional classification status alert colors.
---

## About the Project

The **BMI Calculator** is a fundamental frontend utility built to exercise basic form event handling, conditional input validation constraints, and script-driven style adjustments based on data feedback states.

## Architecture and Technical Decisions

The application utilizes an un-compiled, purely client-side stack segmented to provide easy interface tracking:

* **`src/js/main.js`**: Houses the mathematical pure calculation step (`calculoImc`), conditional scope lookup maps (`getClassificacao`), and DOM element triggers.
* **`src/css/telasmenores.css`**: Completely encapsulates responsive rules (`max-width: 540px`) to turn off complex radial gradient definitions and layout drop-shadows on high-dpi mobile viewports.

{{< technologies >}}

## Engineering Challenges and Resolutions

Development objectives focused on establishing input parameter consistency and managing user feedback views:

{{< challenges >}}

## Impact and Results

* **Asynchronous-Feel Interactivity**: Leveraging `evento.preventDefault()` calls maintains layout states during computation runs, serving metrics on screen with zero reload latency.
* **Sanitization Boundary Guards**: Negative metrics, blank spaces, or invalid alpha-character structures are captured during core checks, invoking standard descriptive alert boxes.
