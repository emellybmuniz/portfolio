---
title: "Modern Cordel Project"
date: "2024-05-12"
featured: false
weight: 10
draft: false
description: "A simple webpage built to practice implementing parallax scrolling effects and fluid typography using pure vanilla CSS."
imageCover: "cordel-moderno-project-cover.webp"
imageCoverFallback: "cordel-moderno-project-cover.png"
categories: 
  - "Frontend"
technologies:
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/projeto-cordel/"
repositoryUrl: "https://github.com/emellybmuniz/projeto-cordel"

techReasons:
  HTML5: "Used for the semantic structural markup of sections and verse blocks that organize the poem."
  CSS3: "Responsible for visual styling, managing external fonts, and fixing backgrounds to generate a depth illusion."

metadata:
  status: "Completed"
  platform: "Static Web"
  role: "Frontend Developer"
  industry: "Education / Portfolio"
  
  challenges:
    - kicker: "Challenge 1: Readability Over Background Images"
      title: "Text contrast on complex graphic backgrounds"
      description: "Displaying the poem's verses directly over highly detailed photographic backgrounds caused visual clutter due to baseline color variations."
      resolution: "Introduced a container with a maximum width of '50vw' and a semi-transparent dark background ('rgba(0, 0, 0, 0.392)') behind the text blocks, isolating text elements without completely masking the imagery."
    - kicker: "Challenge 2: Typography Scaling"
      title: "Adapting fonts without forcing unnatural line breaks"
      description: "Ensuring the cordel stanzas preserved their native line break structure ('<br>') across diverse monitor scales without clipping content margins."
      resolution: "Substituted rigid pixel font measurements with relative viewport width units ('vw') inside 'font-size' configurations, allowing font scales to shrink or expand fluidly based on browser windows."

features:
  - "Simple parallax depth emulation using the native 'background-attachment: fixed' rule."
  - "Fluid typography calculated via viewport width units ('vw') to scale design elements evenly."
  - "Integration of specialized external typefaces through Google Fonts API for thematic visual backing."
  - "Clean semantic code divided clearly into explicit layout text boxes and fixed photo sections."
---

## About the Project

The **Modern Cordel Project** was built as a targeted frontend exercise focused on applying styling fundamentals onto classic text elements. The webpage renders the poem "Cordel Moderno" by Milton Duarte, leveraging the web ecosystem to frame a piece inspired by traditional Brazilian cordel literature, juxtaposing folk style against modern digital habits.

The codebase was assembled as a practical assignment responding to a layout challenge presented during the HTML5 and CSS3 modules of the *Curso em Vídeo* platform.

## Architecture and Technical Decisions

The application architecture is entirely static and minimal, relying completely on mastering core native stylesheet parameters:

* **Pure CSS Parallax**: Instead of dragging external JavaScript engines to track user scroll coordinates, visual depth is simulated purely by chaining `background-attachment: fixed`, `background-position`, and `background-size: cover` directly to target sections.
* **Thematic Font Handling**: Leverages Google Fonts to ingest *Freeman* (adding structural weight to header blocks) and *Dekko* (mimicking a handwritten look across core poem stanzas).

{{< technologies >}}

## Engineering Challenges and Resolutions

Layout implementation steps concentrated on ensuring visual choices did not interfere with reading efficiency:

{{< challenges >}}

## Impact and Results

* **Responsive Layout with Zero External Frameworks**: The single-page responsive design fits both wide desktops and mobile devices smoothly without third-party frameworks like Bootstrap, confirming the power of relative CSS positioning units.
* **Work Preservation**: The structural typography hierarchy stays loyal to the author's original poetry framework, securing strong contrast ratios and smooth vertical scrolling.