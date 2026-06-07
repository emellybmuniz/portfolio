---
title: "Social Media Hub - Mobile Screen Simulator"
date: "2024-05-20"
featured: false
weight: 10
draft: false
description: "A practical project that simulates an iPhone interface to browse social media profiles using structural HTML and CSS."
imageCover: "social-media-hub.webp"
imageCoverFallback: "social-media-hub.png"
categories: 
  - "Frontend"
technologies:
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/social-media-hub/"
repositoryUrl: "https://github.com/emellybmuniz/social-media-hub"

techReasons:
  HTML5: "Used to build the core layout for the preview pages and manage the direction of internal links toward the simulated viewport."
  CSS3: "Used to centrally align the mobile mockup, handle text/content overflow, and create simple focus hover transitions on buttons."

metadata:
  status: "Completed"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Education / Personal Study"
  
  challenges:
    - kicker: "Challenge 1: Refresh-free Navigation"
      title: "Dynamically updating the internal mockup viewport"
      description: "I needed to make sure that clicking the side menu buttons swapped the visible content inside the phone graphic without triggering a full page reload."
      resolution: "I used the native HTML 'target' attribute on anchor tags, pointing directly to the 'name' attribute of an iframe positioned inside the phone container, achieving isolated page loads."
      
    - kicker: "Challenge 2: Absolute Layout Integration"
      title: "Aligning the iframe directly over the iPhone graphic"
      description: "Ensuring the internal window containing the pages layered perfectly over the device mockup screen boundary across multiple viewports was difficult at first."
      resolution: "I combined absolute positioning with fixed coordinate rules to outline the mobile display area and adopted simple Media Queries to scale down icon sizes and the main container on smaller screens."

features:
  - "Internal navigation layout powered by pure HTML iframe targeting attributes"
  - "Visual styling simulating the real-world physical aspect ratio of a smartphone"
  - "Side menu featuring interactive platform icons with smooth hover transitions"
  - "Modular multi-page file structure with dedicated HTML documents for each platform"
  - "Fixed viewport background configuration to produce a depth-of-field experience"
---

## About the Project
I developed this project as part of my practical assignments during the HTML5 and CSS3 course from Curso em Vídeo. The main goal was to build a link hub or central directory that replicated the experience of interacting with a mobile phone screen (iPhone).

The primary focus of this practice was getting comfortable with core CSS element positioning systems and learning how to integrate local content files and external platform redirection inside a single unified container.

## Structure and Technical Choices
The creation of this interface relied entirely on standard markup tags and clean stylesheets, eliminating any third-party UI toolkits. The file organization was kept straightforward, where each individual social media network has its own lightweight HTML file hosting its badge asset and a direct profile link.

{{< technologies >}}

## Development Hurdles and Fixes
While building out the codebase, the main challenges revolved around maintaining the appropriate visual proportions of the simulated device to keep elements from overflowing.

{{< challenges >}}

## Conclusion
The Social Media Hub served as an excellent practical playground to reinforce concepts of absolute positioning, iframe handling, and structural link routing. As a simple exercise engineered early in my frontend training, it successfully met its goal of teaching me how web browsers handle box models and layered styling, providing a solid stepping stone for developing more complex responsive layouts later on.