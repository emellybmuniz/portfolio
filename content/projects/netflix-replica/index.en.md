---
title: "Netflix Landing Page Replica"
date: "2024-06-08"
featured: false
weight: 10
draft: false
description: "A practical landing page replica project built with pure HTML and CSS to practice building responsive websites and using semantic tags."
imageCover: "netflix-replica.webp"
imageCoverFallback: "netflix-replica.png"
categories: 
  - "Frontend"
technologies:
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/netflix-replica/"
repositoryUrl: "https://github.com/emellybmuniz/netflix-replica"

techReasons:
  HTML5: "Used to create the entire page structure, organizing text blocks and images with native semantic tags."
  CSS3: "Used to apply the visual look of the original site and manage layout adaptation for different screen sizes using Media Queries."

metadata:
  status: "Completed"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Education / Personal Study"
  
  challenges:
    - kicker: "Challenge 1: Responsiveness"
      title: "Organizing layouts for mobile and desktop screens"
      description: "The goal was to make sections alternate text and image positioning neatly on large displays while stacking vertically on smaller screens."
      resolution: "I focused on building for smaller screens first and organized the styles into separate files (telapequena.css, telamedia.css, and telagrande.css). I used basic Flexbox properties and utility classes to flip the layout direction using 'flex-direction: row-reverse' for screens wider than 990px."
    
    - kicker: "Challenge 2: Image and Component Sizing"
      title: "Preventing layout breakage or image distortion"
      description: "Images like the TV frame, device graphics, and the promotional widget needed to resize proportionally without breaking the structural layout."
      resolution: "I defined element sizing using percentage values (such as 90% of available space on mobile and 40% on larger layouts), allowing the visual assets to follow the browser window resizing without distorting."

features:
  - "Basic structure organized with common semantic tags (header, main, section, footer)"
  - "Styling split into separate files to make screen rules easier to manage"
  - "Use of CSS variables to centralize core color definitions"
  - "Simple input forms with native browser validations (like required emails and character limits)"
  - "Frequently Asked Questions section structured with native HTML list tags"
---

## About the Project
I developed this website right at the beginning of my programming studies as a practical HTML and CSS exercise. The main idea was to try and recreate the look of the Netflix landing page to test my styling and structuring skills. 

The focus of this practice was learning how to organize elements into lists, embed external media, and especially ensure that the website looked correct and readable on both mobile phones and desktop computers without relying on any external frameworks or pre-made tools.

## Structure and Technical Decisions
I chose to build the page using only native web technologies (pure HTML and CSS). This helped me reinforce the most basic core concepts without adding the complexity of external tools. To organize the styles, I decided to separate the layout rules based on the user's screen size, linking the CSS files directly within the main document.

{{< technologies >}}

## Challenges and Solutions
While putting the code together, I faced a few issues adjusting the behavior of the visual components, which were resolved through styling adjustments.

{{< challenges >}}

## Conclusion
This project was very important to help me consolidate my initial frontend development foundations. It gave me the opportunity to understand in practice how Flexbox works, how Media Queries behave, and how important it is to plan responsiveness from the very start of writing code. Since this was an exercise focused entirely on early learning, the final result met my objective of validating a correct and straightforward use of HTML and CSS to build user interfaces.