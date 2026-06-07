---
title: "Nikel - Personal Finance Manager"
date: "2025-11-20"
featured: false
weight: 10
draft: false
description: "A simple financial control application built for a technical assessment, marking my first practical experience with the Bootstrap framework."
imageCover: "nikel.webp"
imageCoverFallback: "nikel.png"
categories: 
  - "Frontend"
technologies:
  - "Bootstrap"
  - "JavaScript"
liveDemo: "https://emellybmuniz.github.io/nikel/"
repositoryUrl: "https://github.com/emellybmuniz/nikel"

techReasons:
  Bootstrap: "Adopted as it was the core requirement for the Growdev technical challenge, acting as the foundation for building the responsive layout and components like modals."
  JavaScript: "Used to bring the application to life, managing user actions, balance calculations, and saving data directly in the browser."
  HTML5: "Responsible for the markup and basic organization of all system views, including login, dashboard, and transaction histories."
  CSS3: "Used to apply custom styles and personalized colors beyond the default properties provided by Bootstrap."

metadata:
  status: "Completed"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Finance / Personal Study"
  
  challenges:
    - kicker: "Challenge 1: First Contact with Bootstrap"
      title: "Adapting to a CSS framework during a practical test"
      description: "Since I had never used Bootstrap prior to this assessment, understanding how the grid system works and correctly configuring creation modals was an initial hurdle."
      resolution: "I studied the official Bootstrap 5 documentation throughout development, learning to combine row and column classes (row/col) and utilizing native data attributes to trigger the transaction modals without breaking the layout."
      
    - kicker: "Challenge 2: Data Storage and Separation"
      title: "Persisting multiple users' information locally"
      description: "The system needed to store financial records in a way that different registered email accounts could sign up and only see their own transactions using just the browser."
      resolution: "I created JavaScript logic that uses the registered email as a unique key in LocalStorage. Each account's financial data is kept inside a structured object, allowing the application to render the correct history as soon as the login is validated."

features:
  - "Main dashboard with automatic balance calculation based on incomes and outcomes"
  - "Full transaction list view to track and manage all logged entries"
  - "Responsive interface tailored for mobile screens with a native collapsible navbar"
  - "Simulated authentication logic that blocks internal pages without a valid login session"
  - "Basic field validation such as email formatting checks and minimum password lengths"
---

## About the Project
I developed this financial manager to complete the VesteTech technical challenge through Growdev's free CODAÍ 2.0 training course. The application functions as a simple digital pocketbook, where the main objective is to allow users to easily add and track their daily earnings and expenses.

This project represents an important initial milestone in my programming studies, as it was the first time I had to transform technical requirements from an assessment into a fully functional user interface, managing deadlines and following the rule of making the source code available in a public repository.

## Layout and Technical Choices
Since this is a frontend project focused on fundamentals, the structure was built using the traditional web stack, eliminating complex build tools. The primary technical aspect was integrating user interactions with the browser's native storage to ensure that logged data remained saved even after closing the tab.

{{< technologies >}}

## Development Challenges and Solutions
While putting the code together, the main focus was ensuring that the DOM manipulation handled by JavaScript communicated cleanly with the structural classes of the UI framework.

{{< challenges >}}

## Conclusion
Building Nikel was essential for me to understand the mechanics of CSS frameworks and how vanilla JavaScript can solve real business logic and simple data persistence problems. As my first contact with Bootstrap and one of my early technical assessments, the final result successfully achieved the goals by fulfilling all mandatory criteria requested in the challenge, making it an excellent hands-on learning experience.