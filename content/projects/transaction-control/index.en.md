---
title: "Java Bank - OOP Transaction Management"
date: "2025-10-09"
featured: false
weight: 10
draft: false
description: "A console-based banking system developed in pure Java to practice core OOP pillars, decoupled repositories, and rigorous custom exception handling."
imageCover: "java-bank.webp"
imageCoverFallback: "java-bank.png"
categories: 
  - "Backend"
technologies:
  - "Java"
  - "Gradle"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/TransactionControlPOO"

techReasons:
  Java: "Chosen for being a robust and strongly typed language, making it ideal for exercising advanced object-oriented programming concepts, inheritance, and polymorphism."
  Gradle: "Used as an automation tool to structure the project, manage builds, and organize the folder scope cleanly."

metadata:
  status: "Completed"
  platform: "Console Application (CLI)"
  role: "Backend Developer"
  industry: "Finance / Technical Study"
  
  challenges:
    - kicker: "Challenge 1: Domain Modeling and Extensibility"
      title: "Organizing distinct wallet types and rules"
      description: "The system needed to support common transaction wallets (AccountWallet) and asset-focused wallets (InvestmentWallet) without duplicating basic balance rules inherited from a shared model."
      resolution: "I developed an inheritance structure derived from a base 'Wallet' class, applying strict encapsulation through protected access modifiers and polymorphism. This allowed 'BankService' to process common financial operations regardless of the specific wallet specialization."
      
    - kicker: "Challenge 2: Error Flow Centralization"
      title: "Preventing inconsistent states during transfers"
      description: "Simulated financial operations (like Pix and investments) could fail due to multiple logical rules, and the console application could not drop unexpectedly because of typing mistakes or low funds."
      resolution: "I created a dedicated package for precisely mapped domain exceptions (such as 'NoFundsEnoughException', 'AccountNotFoundException', and 'PixInUseException'). The service layer validates all balance and key prerequisites before altering the repositories, throwing these errors safely to be caught and cleanly displayed inside the 'Main' class execution loop."

features:
  - "Domain architecture divided into clear models (Wallet, Money, Investment, MoneyAudit)"
  - "Isolated repository layer mimicking data retrieval and state persistence in memory"
  - "Basic financial auditing structure ('MoneyAudit') for operational transaction tracking"
  - "Business logic isolated within a centralized service wrapper class ('BankService')"
  - "Robust data validation flow backed by 6 tailored custom exceptions"
---

## About the Project
I developed this interactive terminal banking system during my Java studies with the distinct purpose of consolidating my practical understanding of modular architecture and clean Object-Oriented Programming principles. The application simulates the core ecosystem of a bank, enabling account creation, asset investment handling, cross-wallet transfers, and basic balance auditing.

The main target of this task was to move past basic, academic code examples by building a realistic backend flow that deals with strict business logic validations and mirrors the layered separation of concerns found in real enterprise applications.

## Structure and Technical Choices
The software engineering adopts a pattern focused on code decoupling. Instead of stuffing all instructions inside the terminal entry point, the project cleanly isolates responsibilities: models hold only domain properties and behaviors, repositories manage in-memory data structures, and the service class commands the transaction logic rules.

{{< technologies >}}

## Error Handling and Code Challenges
Throughout development, the primary technical emphasis was on ensuring that monetary operations did not allow logical vulnerabilities, such as unauthorized negative balances or phantom accounts.

{{< challenges >}}

## Conclusion
Building Java Bank was an excellent exercise in understanding the value of encapsulation and defensive code design in practice. Successfully structuring multiple in-memory repositories and tying the entire execution flow together via custom domain exceptions gave me a solid foundation on how to write readable, organized, and extensible Java code. As a console app focused on pure backend logic, the final code successfully met its educational purpose without needing heavy frameworks or complex user interfaces.