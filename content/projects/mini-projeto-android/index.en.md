---
title: "Mini Android Project"
date: "2024-05-11"
featured: false
weight: 10
draft: false
description: "A basic static webpage built early in the coding journey to practice semantic HTML5, third-party media embeds, and image responsiveness."
imageCover: "mini-projeto-android.webp"
imageCoverFallback: "mini-projeto-android.png"
categories: 
  - "Frontend"
technologies:
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/mini-projeto-android/"
repositoryUrl: "https://github.com/emellybmuniz/mini-projeto-android"

techReasons:
  HTML5: "Used to establish a clean semantic structure, utilizing tags like header, article, section, aside, and footer for improved accessibility."
  CSS3: "Responsible for the theme's green visual identity, linear gradients, block shadows, custom local font embedding via font-face, and basic responsive behavior."

metadata:
  status: "Completed"
  platform: "Static Web"
  role: "Frontend Developer"
  industry: "Education / Initial Practice"
  
  challenges:
    - kicker: "Challenge 1: Video Aspect Ratios"
      title: "Responsiveness of third-party iframes"
      description: "YouTube player frames embedded via raw iframe tags come with fixed pixel widths and heights by default, breaking layouts on smaller mobile viewports."
      resolution: "Implemented a relative container division paired with a 'padding-bottom: 58%' trick to mimic a fluid 16:9 aspect ratio, forcing the absolute iframe to match 100% of the horizontal space."
    - kicker: "Challenge 2: Asset Weight Handling"
      title: "Art direction via the HTML5 picture element"
      description: "Loading large, high-resolution illustrations intended for wide desktop screens over slow mobile connections damages smartphone loading speeds."
      resolution: "Applied the native HTML5 '<picture>' block combined with a 'media=(max-width: 640px)' viewport query rule to automatically swap and serve smaller, compressed versions of the graphics on narrow monitors."

features:
  - "Strict semantic HTML markup ensuring solid structural flow and readability."
  - "Perfectly fluid YouTube video player resizing dynamically across sizes."
  - "Custom styled facts container using decorative Unicode character markers."
  - "Local embedding of specialized layout typography using '@font-face' styling."
  - "Smooth user transitions using box shadows and elegant hover micro-interactions."
---

## About the Project

The **Mini Android Project** is a simple static website crafted purely using basic HTML and CSS principles. It was developed as a hands-on case study right at the beginning of my programming journey, representing a layout assignment from the foundations module of the *[Curso em Vídeo](https://www.cursoemvideo.com/)* platform.

The single-page site cleanly shares the background history and visual evolution of Google's operating system mascot, the Bugdroid—ranging from Dan Morrill's early sketch ideas (the Dandroids) up to the final, internationally recognized logo design authored by Irina Blok.

## Architecture and Technical Decisions

As an introductory educational project, the core target was to master the raw behavior of browser layout rules without abstract build tooling interference:

* **Media Boundaries and Block Controls**: The application content wraps inside a centralized max-width column bounded at `800px` to keep reading lines readable. Content sections apply comfortable spacing values and text alignments to mimic traditional editorial designs.
* **List Bullet Personalization**: The context sidebar module (`<aside>`) switches standard unordered list bullet points into an industrial gear icon using Unicode escape strings inside the CSS document (`list-style-type: '\2699\00A0'`).

{{< technologies >}}

## Engineering Challenges and Resolutions

Coding tasks focused on keeping resource-heavy multi-media items flexible across varying viewports:

{{< challenges >}}

## Impact and Results

* **Fluid Multi-Device Layouts**: The layout shifts and stretches naturally from wide multi-window desktop screens down to handheld touch devices with zero data loss.
* **Lightweight Semantics**: Avoiding runtime scripts or third-party style packages yields instantaneous page loading speeds while ensuring search indexers parse the content outline easily.