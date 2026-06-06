---
title: "Web Calculator"
date: "2024-10-09"
featured: false
weight: 5
draft: false
description: "A straightforward frontend calculator application built to practice DOM manipulation and the Factory Function structural pattern in vanilla JavaScript."
imageCover: "calculadora.webp"
imageCoverFallback: "calculadora-web.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML"
  - "CSS"

liveDemo: "https://emellybmuniz.github.io/calculadora/"
repositoryUrl: "https://github.com/emellybmuniz/calculadora"

techReasons:
  JavaScript: "Used to build all operational logic, handle user click interactions, and process mathematical equation strings securely."
  HTML: "Provides the semantic markup structure for the text display and the table grid holding numbers and operator buttons."
  CSS: "Handles component layout centering on desktops and minimal dimension adjustments for smartphone screen sizes."

metadata:
  status: "Completed"
  platform: "Web Application (Client-side)"
  role: "Frontend Developer"
  industry: "Utility Tools"
  
  challenges:
    - kicker: "Challenge 1: Event Binding Context"
      title: "Preserving dynamic JavaScript execution context"
      description: "Preventing the 'this' keyword reference from shifting context when executing methods triggered from the global document click listener."
      resolution: "Applied explicit '.bind(this)' methods inside the click event delegation to latch the dynamic execution state to the host Factory Function object."
    - kicker: "Challenge 2: Equation String Validation"
      title: "Handling structural input corruption on evaluation"
      description: "Preventing malformed strings or impossible arithmetic operations from breaking execution flow or displaying anomalies on screen."
      resolution: "Wrapped parsing routines inside a strict try/catch block combined with 'isFinite()' guards to filter arithmetic limits like division by zero."

features:
  - "Basic arithmetic operators along with parenthesis grouping precedence."
  - "Hybrid interaction interface mapping both screen element clicks and physical keystrokes."
  - "Encapsulated architectural state leveraging the simple Factory Function layout."
  - "Built-in error catching mechanics deploying quick web alerts for invalid scripts."
  - "Responsive adaptations automatically re-scaling buttons on smaller smartphones."
---

## About the Project

The **Web Calculator** is an entry-level development project built specifically to solidify practical skills in client-side document structure manipulation (DOM) and scoping states inside vanilla JavaScript. Running completely on the client side without servers, the app provides a minimal standard layout for everyday computational math.

## Architecture and Technical Decisions

The development phase deliberately sidestepped reliance on third-party frameworks or heavy styling libraries to isolate core fundamental practices. The architecture boils down to two main decisions:

* **Event Delegation Pattern**: A singular master `click` event listener actively reads target classes on execution, omitting resource-heavy individual hooks on every table cell.
* **Factory Function Model (`createCalculator`)**: An object-oriented structure holding safe property boundaries that binds starting loops, display cleaning, character slicing, and answer routing under a unified model.

{{< technologies >}}

## Engineering Challenges and Resolutions

Throughout development, emphasis remained on handling structural browser behaviors and input data formatting:

{{< challenges >}}

## Impact and Results

* **Decoupled Architecture**: Clear division of software labor where HTML writes layout anchors, CSS models presentation bounds, and JavaScript rules operations.
* **Familiar Interface Flow**: The screen displays right-aligned text mimicking structural physical pocket calculators while keeping focus pinned to the display box.