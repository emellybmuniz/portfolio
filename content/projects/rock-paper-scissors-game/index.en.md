---
title: "Rock, Paper, Scissors - Retro Web Game"
date: "2025-08-10"
featured: false
weight: 20
draft: false
description: "The classic Rock, Paper, Scissors game built with vanilla JavaScript, exploring asynchronous DOM manipulation and timed animations to deliver an interactive experience."
imageCover: "rock-paper-scissors.webp"
imageCoverFallback: "rock-paper-scissors.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/rock-paper-scissors-game/"
repositoryUrl: "https://github.com/emellybmuniz/rock-paper-scissors-game"

techReasons:
  JavaScript: "Used to manage the game state (scores, game over status), handle click events, and control the asynchronous round flow using native timers."
  HTML5: "Responsible for the skeleton of the application, structuring the scoreboard, the hand display area, and the selection buttons."
  CSS3: "Adopted to create the retro-inspired visual theme, as well as handling the hand-shaking animation and post-result glow effects."

metadata:
  status: "Completed"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Education / Personal Study"
  
  challenges:
    - kicker: "Challenge 1: Animation Synchronization"
      title: "Managing the time flow between the animation and result calculation"
      description: "To build suspense, I wanted the hand graphics to shake before revealing the computer's choice, but initially, the final result would display instantly before the animation could play out."
      resolution: "I implemented asynchronous logic using 'setTimeout' set to 1200ms. During this interval, JavaScript updates the text to 'Opponent is choosing...' and appends a CSS animation class. Only after the timer concludes are the final choice images injected and the score updated."
      
    - kicker: "Challenge 2: Visual State and Flow Control"
      title: "Clearing old effects and handling consecutive clicks"
      description: "When playing multiple rounds consecutively, glow classes (win/lose) from previous turns would stack up on HTML elements, causing visual bugs, along with the risk of users clicking while an animation was active."
      resolution: "I created a global 'state' object that stores references to the last modified element and its corresponding glow class. At the beginning of each round or game reset, the script precisely removes these old effects and checks the 'isGameOver' flag to prevent unintended user interactions."

features:
  - "Unified game state management (scores, game over triggers, and tracking of active visual classes)"
  - "Hand-shaking animation simulating a real hand game before showing the outcome"
  - "Immediate visual feedback via colored borders determined by the round's result"
  - "Simple dictionary translations and gameplay rules mapped out within clean JavaScript objects"
  - "Fixed score limit (15 points) with a dynamic button to reset and start a new game"
---

## About the Project
This project marked my very first experience developing a web-based game. The primary objective was to move past static web pages and build a fully interactive application centered around the classic "Rock, Paper, Scissors" rules. I aimed to design an engaging interface wrapped in a clean, retro-inspired aesthetic.

To make the overall experience feel more cohesive, I researched ways to simulate a real-world match, including adding a shaking animation where the hands bounce before the computer opponent reveals its randomized choice.

## Game Structure and Technical Choices
The architecture of the application was designed with modular simplicity in mind, depending strictly on native browser technologies. The entirety of the core game loop was isolated inside dedicated functions within a vanilla JavaScript file, leaving CSS in charge of responsiveness and the visual states of interactive elements.

{{< technologies >}}

## Development Hurdles
During the assembly of the project, the primary obstacles involved writing responsive CSS layout rules to keep the selection card blocks properly aligned and strictly managing scores to prevent race conditions during asynchronous animations.

{{< challenges >}}

## Conclusion
Developing this project was highly beneficial for solidifying my understanding of direct DOM interaction, JavaScript timers, and basic state structure in frontend micro-apps. Although game development is not my chosen career focus, building this interface provided a highly productive sandbox for learning how pure JavaScript brings dynamic behaviors to life in real-time scenarios.