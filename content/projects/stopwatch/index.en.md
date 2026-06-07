---
title: "Minimalist Timer"
date: "2024-07-25"
featured: false
weight: 10
draft: false
description: "A simple stopwatch built with pure JavaScript during my programming course, featuring real-time counting functions and a dark theme toggle."
imageCover: "stopwatch.webp"
imageCoverFallback: "stopwatch.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/stopwatch/"
repositoryUrl: "https://github.com/emellybmuniz/stopwatch"

techReasons:
  JavaScript: "Used to program the stopwatch engine using asynchronous timing functions and manage class toggling for the Dark Mode."
  HTML5: "Responsible for providing the structural semantic elements to display the digital counter view and action buttons."
  CSS3: "Adopted to create the minimalist layout, handle centralized alignment, and generate smooth color transitions when switching themes."

metadata:
  status: "Completed"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Education / Personal Study"
  
  challenges:
    - kicker: "Challenge 1: Asynchronous Time Control"
      title: "Preventing interval stacking and unintended speed-ups"
      description: "During early testing, if the start button was clicked multiple times without pausing, JavaScript initiated multiple parallel intervals, causing the counter to run faster than normal."
      resolution: "I built a straightforward state check that verifies if the timer is already active before running the 'setInterval' command. When the user clicks pause or reset, the application triggers 'clearInterval', terminating the active process and keeping the count stable."
      
    - kicker: "Challenge 2: Formatting Display Digits"
      title: "Maintaining a clean two-digit standard in real time"
      description: "When seconds or minutes dropped below 10, the timer displayed only a single digit (like 0:0:5), disrupting the visual layout alignment and removing the polished look of the screen."
      resolution: "I implemented a quick helper function that evaluates numerical values before rendering them. If the number is lower than 10, the code automatically prepends a '0' character, ensuring the display consistently preserves the balanced two-digit format (00:00:00)."

features:
  - "Unified button controls to seamlessly start, pause, and reset the counter"
  - "Simple Dark Mode/Light Mode toggle triggered by a click at the top of the viewport"
  - "Continuous display output separated into clean minute, second, and millisecond blocks"
  - "Fully adaptive and responsive layout for stable rendering on smaller screens"
  - "Codebase developed using pure structural Vanilla JS with zero external dependencies"
---

## About the Project
I built this stopwatch as one of the main practical exercises during my JavaScript course. The goal was to create a simple and straightforward web utility centered on measuring time intervals accurately while keeping the visual interface as clean and intuitive as possible.

The true focus of this practice was applying time-management patterns in the browser and learning how to manipulate layout style properties dynamically based on direct user interactions.

## Structure and Technical Choices
Since this project was targeted at solidifying foundational frontend logic, the architecture was designed around the native web ecosystem. I decided to split the scripts into two simple logical files to improve readability: one file handling exclusively the mathematical rules of the timer, and another in charge of the visual theme shifting.

{{< technologies >}}

## Code Hurdles and Fixes
While putting the code together, managing native browser timer tracking required extra care when creating simple logical locks within the click function triggers.

{{< challenges >}}

## Conclusion
Developing the Stopwatch was an essential step toward solidifying my practical knowledge of asynchronous time functions and managing CSS styling classes through JavaScript. As an early coursework assignment, the final result was rewarding since it delivered a stable, functional, and organized utility, fulfilling the learning targets set out at the time.