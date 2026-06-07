---
title: "CPF Validator - Mathematical Algorithm"
date: "2024-12-23"
featured: false
weight: 10
draft: false
description: "A simple project built with pure JavaScript to validate Brazilian CPF numbers by implementing the official check digits calculation algorithm."
imageCover: "validador-cpf.webp"
imageCoverFallback: "validador-cpf.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/validador-cpf/"
repositoryUrl: "https://github.com/emellybmuniz/validador-CPF"

techReasons:
  JavaScript: "Used to handle input string sanitization and execute the numerical loops that calculate the validation check digits."
  HTML5: "Responsible for the basic form layout structure, providing a semantic text input field for user interaction."
  CSS3: "Adopted to create a clean layout and manage visual feedback states to alert users whether the entered number is correct."

metadata:
  status: "Completed"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Education / Personal Study"
  
  challenges:
    - kicker: "Challenge 1: Understanding the Validation Algorithm"
      title: "Translating algebraic calculation rules into functional code"
      description: "Since I had no prior knowledge of how the official mathematical validation formula for a CPF operated, figuring out weights and division rules was my biggest initial hurdle."
      resolution: "I researched and studied the official calculation logic (regressive multiplication using weights from 10 to 2 for the first digit and 11 to 2 for the second, followed by modulo 11 math). I successfully translated these theoretical steps into simple structured 'for' loops inside the script."
      
    - kicker: "Challenge 2: Input Data Sanitization"
      title: "Isolating numeric strings to prevent array loop failures"
      description: "If users entered a CPF containing standard formatting symbols (such as dots and hyphens) or white spaces, calculations based on character positioning indexes would produce invalid results."
      resolution: "I implemented a simple clean-up routine using the native '.replace()' method combined with a basic regular expression ('/\\D/g'). This strips out any non-numeric character before feeding the treated string into the formula function."

features:
  - "Structured validation engine based on the official document verification formula"
  - "Immediate visual UI feedback clearly indicating valid or invalid status"
  - "Automatic input string filtering to discard dots, spaces, and hyphens"
  - "Responsive layout scaling appropriately for mobile viewports"
  - "Pure Vanilla JS codebase engineered without third-party libraries or dependencies"
---

## About the Project
I developed this CPF validator as a practical assignment during my JavaScript course. The goal was to build a straightforward, functional application where a user could input a document number and instantly check if it satisfies official mathematical issuance rules.

The core purpose of this exercise was to step away from purely visual adjustments and start handling actual business logic within frontend code, learning how to clean user-provided data and validate strings in real time.

## Structure and Architecture Choices
The interface of the application was engineered to be highly direct, focusing on the straightforward execution of the underlying script. The entire experience runs strictly on the client-side without server processing requirements, maintaining a clean structure across separate dedicated files for markup, styling, and logic.

{{< technologies >}}

## Logic Hurdles and Solutions
While writing out the script components, the primary technical emphasis was on demystifying the verification rules of the document and setting up safe string handling to protect the numerical array loops.

{{< challenges >}}

## Conclusion
This project was a rewarding milestone because it proved to me that frontend engineering requires sound logical execution alongside visual formatting. Figuring out how the mathematical formula behind check digits works and successfully implementing that sequence of multiplications and conditional lookups in pure JavaScript was an excellent training exercise for my core programming foundations.