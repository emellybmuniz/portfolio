---
title: "Web Playground - Frontend Experiment Lab"
date: "2026-05-28"
featured: false
weight: 10
draft: false
description: "A centralized sandbox environment gathering mini-projects, logic challenges, and web components built with HTML, CSS, JavaScript, SASS, and Hugo."
imageCover: "web-playground.webp"
imageCoverFallback: "web-playground.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "SASS"
  - "Hugo"
liveDemo: "https://emellybmuniz.github.io/web-playground/"
repositoryUrl: "https://github.com/emellybmuniz/web-playground"

techReasons:
  JavaScript: "Used to develop the logical routines of the internal micro-apps, handling state tracking and loops for the Pomodoro timer, clock updates, and payload parsing for the QR Code generator."
  SASS: "Adopted to practice advanced stylesheet design, leveraging nested selectors, variables, and mixins to structure rules cleanly."
  Hugo: "Utilized as a static site generator to understand component-driven layouts and streamline modular page composition."

metadata:
  status: "In Development"
  platform: "Web Workspace"
  role: "Frontend Developer"
  industry: "Education / Personal Study"
  
  challenges:
    - kicker: "Challenge 1: Context Centralization and Directory Routing"
      title: "Creating a unified entry point for multiple separate projects"
      description: "Because this repository aggregates isolated exercises with differing folder configurations, navigating local instances relied on opening folder by folder in the text editor."
      resolution: "I developed a root-level index panel (index.html) that behaves as an interactive dashboard. It charts relative file paths for each coding challenge ('challenges/'), playground workspace ('lab/'), and standalone utility ('mini-projects/'), allowing quick viewing directly via the browser."
      
features:
  - "Interactive central dashboard landing page for fast navigation across static resources"
  - "Functional utility mini-apps (Digital Clock, Pomodoro Timer, and QR Code Generator)"
  - "Dedicated directory for working through logic challenges and testing basic algorithms"
  - "Isolated laboratory workspace for quick scratchpad markup tests and CSS layout styling"
  - "Early integration setup with modern frontend build tools (Hugo + SASS)"
---

## About the Workspace
This repository was born out of my desire to maintain a structured playground environment for frontend testing and experimentation. Instead of spawning multiple micro-repositories for every single course assignment, I chose to centralize everything inside a single workspace where I can draft mock layouts, practice JavaScript logic rules, and log my technical evolution.

The collection gathers everything from basic daily snippets created in the laboratory up to complete interactive components with real utility values, acting as my primary technical sandbox.

## Workspace Architecture and Tooling Choices
The folder tree was broken down into specific logical blocks to keep quick scratchpad code distinct from structured modules. While most of the sandbox relies on native, clean web standards (Vanilla HTML/CSS/JS), the ecosystem was also equipped to run more structural toolsets, allowing me to explore stylesheet compiling via SASS and component layouts using Hugo for the first time.

{{< technologies >}}

## Development Challenges and Solutions
While maintaining and expanding the folder tree with new assignments, coordinating access paths and learning asset generation pipelines proved to be valuable learning experiences.

{{< challenges >}}

## Conclusion
The Web Playground has been an essential tool for logging my frontend core fundamentals within a risk-free workspace. Successfully organizing a structured directory layout, building responsive widgets, and taking early steps with pre-processors and static site generators gave me a clear, practical perspective on how modern development environments are configured. As an open-ended collection of coursework, it honestly documents every step of my technical progress.