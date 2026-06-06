---
title: "Conecta Cosmos"
date: "2026-06-05"
featured: true
weight: 10
draft: false
description: "An interactive and educational web application for exploring the Solar System and validating knowledge, completely developed by me."
imageCover: "conecta-cosmos.webp"
imageCoverFallback: "assets/images/background.png"
categories: 
  - "Frontend"
technologies:
  - "React"
  - "TypeScript"
  - "Tailwind CSS"
  - "Vite"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/conecta-cosmos"

techReasons:
  React 19: "I chose React 19 to build a declarative interface, allowing me to modularize the visual components of the Solar System and easily handle the quiz state."
  TypeScript: "I added it to ensure static typing for planet models and quiz questions, helping me prevent runtime errors caused by undefined properties."
  Tailwind CSS: "I chose this utility-first framework for quick responsive styling, creating immersive space effects without bloating my project with extra CSS files."
  Vite: "I adopted this build tool to avoid complex setups. It provided me with ultra-fast Hot Module Replacement (HMR) and optimized production files."

metadata:
  status: "In development"
  platform: "Web"
  role: "Solo Frontend Developer"
  industry: "Education / Technology"
  
  challenges:
    - kicker: "Challenge 1: Data Management and Structuring"
      title: "Organizing celestial facts and quiz content"
      description: "At first, I noticed that embedding lots of text about planets and questions directly into the UI components would make my code messy and hard to update."
      resolution: "I solved this by separating and typing all mock data inside independent '.ts' files in the data folder, keeping my view components clean and focused."
      
features:
  - "Interactive Solar System with visual hover effects"
  - "Detailed astronomical data shown when a celestial body is selected"
  - "Integrated multiple-choice quiz to test user knowledge on the spot"
  - "Modern structure built with reusable, strongly typed UI components"
---

## About the Project

**Conecta Cosmos** is an educational web application that I designed and built on my own to turn learning about the Solar System into an engaging, interactive visual experience. I wanted to tackle the lack of dynamism found in traditional textbook content, creating a platform where users can interact directly with the galaxy and instantly validate what they learned through a quiz.

## Architecture and Technical Decisions

I structured this project using a modern frontend architecture, making sure the codebase stays organized so I can easily maintain it by myself. My choices prioritized tools that gave me development speed and type safety:

{{< technologies >}}

## Engineering Challenges and Solutions

Throughout the development process, I put a lot of focus on structuring the application's data flow to ensure the user interface updates smoothly whenever someone interacts with a planet or clicks an answer.

{{< challenges >}}

## Impact and Results

I haven't configured any analytics tools or web traffic metrics in the repository yet. However, looking at my own development workflow and code quality, the qualitative results I achieved are:
- **Better Maintainability:** Since I isolated the static data (planets and questions) away from the visual interface, it became much easier for me to add new educational content in the future.
- **Fast Development Cycle:** Using Vite made a huge difference in my daily workflow, giving me instant screen updates as I tweaked layout styles with Tailwind.