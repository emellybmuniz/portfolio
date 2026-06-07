---
title: "Task Manager"
date: "2024-08-01"
featured: false
weight: 10
draft: false
description: "A minimalist to-do list built with vanilla HTML, CSS, and JavaScript, marking my first practical studies with browser data persistence."
imageCover: "todo-list.webp"
imageCoverFallback: "todo-list.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/to-do-list/"
repositoryUrl: "https://github.com/emellybmuniz/to-do-list"

techReasons:
  JavaScript: "Used to capture keyboard inputs, dynamically generate new task items within the HTML structure, and manage local data saving operations."
  HTML5: "Responsible for providing the basic input form framework and a clean semantic container where tasks are listed."
  CSS3: "Adopted to create a clean visual layout, dividing structural styling and mobile responsiveness rules into specific files to improve maintainability."

metadata:
  status: "Completed"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Education / Personal Study"
  
  challenges:
    - kicker: "Challenge 1: Data Persistence with localStorage"
      title: "Saving and retrieving structured data locally"
      description: "As this was one of my first encounters with browser caching systems, learning how to save inputs without losing data upon refreshing the page was an early hurdle."
      resolution: "I implemented logic that converts the task array into a string using 'JSON.stringify()' before storing it. When the page initializes, the script executes 'JSON.parse()' to read that data back, ensuring users find their notes saved in the next session."
      
    - kicker: "Challenge 2: Syncing Item Deletion"
      title: "Removing elements from the DOM and storage simultaneously"
      description: "When clicking the trash icon to delete a task, it was necessary to ensure the element vanished visually from the screen and that the correct item was erased from local memory."
      resolution: "I organized element creation by mapping an index reference to each task. When the trash icon click event triggers, the code identifies the precise position within the array, removes it via 'splice()', refreshes localStorage, and clears the DOM to render the updated list."

features:
  - "Immediate inclusion of new activities through a straightforward text entry field"
  - "Automatic browser-side persistence to prevent data loss when closing tabs"
  - "Individual task removal backed by dynamic view updates"
  - "Responsive design featuring a dedicated style sheet tailored for smaller viewports"
  - "Codebase engineered with pure native tech (Vanilla JS) without third-party libraries"
---

## About the Project
I built this to-do list as a hands-on project to practice what I was learning in JavaScript regarding DOM manipulation and local storage. The application is direct and simple: a space where users can log their daily tasks and remove them as they are completed.

The main purpose of this exercise was to understand how to bring a web page to life, moving away from purely static, visual designs to create a basic interactive system that stores user inputs.

## Code Architecture and Layout Choices
The project prioritizes native web technologies to keep learning focused on the core pillars of frontend development. For the visual side, I chose to split the CSS rules cleanly: I created a `main.css` file focused on the core layout structure for larger displays and a separate `mobile.css` file strictly responsible for smartphone adjustments.

{{< technologies >}}

## Code Hurdles and Fixes
While organizing the script logic, the most notable challenges were related to handling array values and ensuring correct synchronization between the visible UI elements and local browser memory.

{{< challenges >}}

## Conclusion
This To-Do List project was highly beneficial for my early frontend development growth, as it gave me clarity on how simple client-side data lifecycles operate. Successfully resolving data conversion problems and applying separated stylesheets for mobile responsiveness helped build my confidence in developing dynamic layouts using JavaScript.