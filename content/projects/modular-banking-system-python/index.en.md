---
title: "Modular Banking System"
date: "2026-01-07"
featured: true
weight: 11
draft: false
description: "Refactoring of a dictionary-structured CLI banking system into an object-oriented architecture (OOP) with multi-layer separation."
imageCover: "coursePortfolio.webp"
imageCoverFallback: "coursePortfolio.png"
categories: 
  - "Backend"
  - "CLI"
technologies:
  - "Python"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/modular-banking-system-python"

techReasons:
  Python: "Language used to apply advanced object-oriented programming concepts, inheritance, encapsulation, and polymorphism through a clean modular structure."

metadata:
  status: "Completed"
  platform: "CLI Application"
  role: "Backend Developer"
  industry: "Technology"
  
  challenges:
    - kicker: "Challenge 1: Paradigm Migration"
      title: "Transitioning structural data from dictionaries to class instances"
      description: "The old procedural implementation centralized records within primitive dictionaries and tuples, causing high coupling and complex business rule validation."
      resolution: "The domain was mapped according to a complete UML model, encapsulating data into typed objects (Client, Account, History) and isolating transactions via the Command pattern."
    - kicker: "Challenge 2: Shared Ledger Coherence"
      title: "Synchronization and propagation of transactions among multiple client accounts"
      description: "Ensuring that all transactions executed across different financial accounts were written to and read from a unified ledger without mixing memory references."
      resolution: "An initialization workflow was adopted to dynamically bind a single 'History' instance to the customer, allowing new accounts to inherit this same reference transparently."
      
features:
  - "Complete domain class modeling (Client, Natural Person, Checking Account, History)"
  - "Encapsulation of deposits and withdrawals via objects inheriting from an abstract transaction class"
  - "Independent service layer isolating enterprise workflows from terminal operations"
  - "In-memory repository implementation based on the Singleton pattern to simulate persistence"
  - "Strict validation of domain constraints, such as duplicate CPFs and unique account identifiers"
  - "Operational limit checks on withdrawal quantities specific to the Checking Account specialization"
  - "Dynamic command-line user interface powered by an interactive menu loop"
  - "Comprehensive suite of functional integration tests structured with pytest"
---

## About the Project

The Modular Banking System originated from the technical requirement to evolve an accounting script previously structured on top of pure Python dictionaries and tuples into a modular, Object-Oriented software application. The core objective of the project is to demonstrate the feasibility of transforming procedural logic into an extensible, clean codebase aligned with modern software engineering practices.

The application addresses the issues related to primitive data coupling common in early learning stages. Before the development of this modular system, fundamental constraints such as withdrawal thresholds or balance verification were scattered across user interface handlers, hindering testability and preventing the pluggability of storage components.

## Architecture and Technical Decisions

The codebase structure was organized according to the Single Responsibility Principle (SRP), distributing logic among distinct operational layers:
* **Domain (Models):** Encapsulates core business entities (`Client`, `Account`, `CheckingAccount`, `History`, `Transaction`). Balance mutation is protected, exposing it purely for read-only access via standard properties (`@property`).
* **Repository:** Substitutes raw global variables with controlled storage structures (`InMemoryClientRepository`, `InMemoryAccountRepository`), preparing the layout for smooth relational database integration without altering core code blocks.
* **Services:** Orchestrates the workflows connecting repositories with domain logic (account instantiation, deposit routines, and validation checkpoints).
* **CLI:** An isolated terminal interface that exclusively relies on exposed functions from the services layer to fetch and render user actions.

Modularity was reinforced through dependency injection techniques. Service constructors accept repository instances, establishing the required decoupling to run deterministic integration test routines.

{{< technologies >}}

## Engineering Challenges and Solutions

Throughout the implementation phase, structuring internal inheritance logic and managing data retention rules without an active database were key elements to ensure correct software performance.

{{< challenges >}}

## Impact and Results

* **Interface Decoupling:** The command-line visual module can be completely swapped for a web-based API layer without requiring a single code modification within the business logic or domain entities.
* **Exception Testing Coverage:** Code evaluation powered by pytest successfully covers happy paths and critical edge cases, including insufficient funds errors or duplicate registration blocks.
* **Long-Term Maintainability:** Full alignment with the UML diagrams drastically reduces onboarding friction for analyzing the operational behavior of financial transactions.