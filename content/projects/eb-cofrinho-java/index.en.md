---
title: "Java Piggy Bank CLI"
date: "2026-03-23"
featured: false
weight: 5
draft: false
description: "A console-based application built in Java to simulate foreign currency storage, tracking, and evaluation using an ad-hoc JSON storage mechanism."
imageCover: "cofrinho-java.webp"
imageCoverFallback: "cofrinho-java.png"
categories: 
  - "Backend"
technologies:
  - "Java"
  - "Maven"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/eb-cofrinho-java"

techReasons:
  Java: "Selected to employ rigorous Object-Oriented Programming (OOP) concepts, inheritance structures, and strict static typing for safe financial logic."
  Maven: "Utilized as a build automation framework to manage compilation cycles and project packaging without runtime overhead from large external dependencies."

metadata:
  status: "In Development"
  platform: "Console Application (CLI)"
  role: "Java Developer"
  industry: "Utility Tools / Learning"
  
  challenges:
    - kicker: "Challenge 1: Zero-Dependency Storage"
      title: "Ad-hoc native JSON serialization workflows"
      description: "Persisting and hydrating currency object arrays into a localized data sheet (`cofrinho.json`) without embedding external JSON parsers (e.g., Jackson or Gson)."
      resolution: "Authored an ad-hoc string parsing algorithm within the data file layer, processing data streams manually through targeted string manipulation rules."
    - kicker: "Challenge 2: Domain Extensibility"
      title: "Adding new currencies without cascading code rewrites"
      description: "Ensuring that scaling the supported currencies pool (like Pound or Yen) does not tightly bind or break total financial balance aggregation calculations."
      resolution: "Leveraged polymorphism by extending a common abstract class ('Moeda') backed by an exchange configuration map ('TipoMoeda'), allowing totals to process cleanly over polymorphic collections."

features:
  - "Interactive terminal menu interface providing essential asset tracking operations."
  - "Automated currency calculation matrix mapping foreign values to local targets."
  - "Custom exception handling routines intercepting invalid runtime metrics."
  - "Local JSON file storage powered by stable auto-incrementing integer key indexes."
---

## About the Project

The **Java Piggy Bank** is a console utility (CLI application) engineered to master pure programmatic logic using vanilla Java features. The software mimics a physical coin bank, enabling users to insert coins from various origins (Real, Dollar, and Euro), remove specific entries using sequential ID indexing, and verify the total balance converted into the standard local baseline currency (BRL).

## Architecture and Technical Decisions

The layout emphasizes clear maintainability and Separation of Concerns across explicit namespace boundaries:

* **`model/`**: Governs core business states. The base abstract entity `Moeda` sets contractual requirements that child objects (`Real`, `Dolar`, `Euro`) implement. The `TipoMoeda` configuration enum acts as a source of truth for symbols and base rates.
* **`repository/`**: Isolates physical disk writing strategies behind a neat `CofrinhoRepository` abstraction layer, decoupling system rules from persistent device storage.
* **`exception/`**: Employs a custom `invalidValueException` class, providing edge protection that immediately blocks zero or negative balances at runtime.

{{< technologies >}}

## Engineering Challenges and Resolutions

Architectural workflows focused mostly on working around the absence of third-party ecosystem tools:

{{< challenges >}}

## Impact and Results

* **Highly Decoupled Codebase**: Adding an alternative legal tender to the application requires minimal steps, isolating upgrades to defining its specific object subclass and extending the dictionary enum map.
* **Data Layer Soundness**: Imposing strict constructors and processing filters shields the physical `cofrinho.json` data asset against state corruption, ensuring smooth execution across repeated operations.