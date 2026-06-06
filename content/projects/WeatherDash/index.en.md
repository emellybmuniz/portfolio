---
title: "Weather Dashboard"
date: "2024-01-01"
featured: true
weight: 10
draft: false
description: "A complete and intuitive weather dashboard for real-time inquiries and interactive maps."
imageCover: "weather-dash.webp"
imageCoverFallback: "weather-dash.png"
categories: 
  - "Frontend"
technologies:
  - "HTML"
  - "CSS"
  - "JavaScript"
  - "Tailwind CSS"
liveDemo: "https://emellybmuniz.github.io/WeatherDash/public/"
repositoryUrl: "https://github.com/emellybmuniz/WeatherDash"

techReasons:
  JavaScript: "Pure Vanilla JS modular logic used to manage asynchronous fetch requests and manipulate display components efficiently."
  Tailwind CSS: "A utility-first framework that accelerated building a modern and responsive UI without bloating the project with manual CSS files."
  HTML: "Semantic markup used to create a solid, organized, and accessible base for presenting weather data."
  CSS: "Responsible for managing styling variables, smooth layout transitions, and supporting dynamic theme controls."

metadata:
  status: "Completed"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Technology"
  
  challenges:
    - kicker: "Challenge 1: Multiple API Integration"
      title: "Orchestrating multiple data providers entirely on the client side"
      description: "Fetching current weather conditions, extended multi-day forecasts, and geocoding simultaneously can cause network lags or UI rendering blocking."
      resolution: "An asynchronous workflow using chained Promises was implemented, loading WeatherAPI first and fetching background geocoding and map visualizers progressively."
    - kicker: "Challenge 2: Serverless Persistence"
      title: "Storing user preferences and favorite locations"
      description: "Retaining theme choices (light/dark), system units, and custom saved locations across reloads without a backend database infrastructure."
      resolution: "The browser's native localStorage API was leveraged to save and parse JSON strings, automatically updating the user interface upon initialization."
      
features:
  - "Real-time current meteorological data retrieval via WeatherAPI"
  - "Detailed multi-day weather forecast through Open-Meteo integration"
  - "Interactive weather radar overlay map using embedded Windy components"
  - "Location search query autocomplete connected to the Nominatim API"
  - "Bookmarked locations system with persistent state saved in localStorage"
  - "Interface personalization featuring Light/Dark modes and 6 accent color variants"
  - "Dynamic conversion between metric and imperial measurement units"
  - "Contextual smart recommendations driven by current conditions from a local JSON dataset"
  - "Automated dashboard visual capture using html2canvas library for sharing capabilities"
---

## About the Project

The Weather Dashboard is a feature-rich web application built to deliver real-time meteorological data alongside smart recommendations and interactive maps. The layout simulates a fluid native application experience utilizing only open web technologies and pure front-end development, entirely removing server infrastructure requirements.

Before this platform was built, accessing varied climate details required browsing separate isolated websites. This application unifies that experience, converting raw temperatures into helpful visual context—such as automatic graphical shifts and lifestyle suggestions tailored to the active weather type.

## Architecture and Technical Decisions

The project was constructed following a pure client-side static layout architecture distributed into clean operational directories:
* **Public:** Houses the core visual structural documents (`index.html`, `settings.html`) and the static content file (`recomendations.json`).
* **Src:** Gathers the native scripting execution logic and custom stylesheets that build upon Tailwind's utility toolkit.

The application workflow relies strictly on Vanilla JavaScript. DOM updates and reactivity function natively by intercepting standard window events. For example, when measurement preferences change inside the settings view, a dedicated `storage` event listener immediately recalculates displaying math without demanding a full browser page refresh.

{{< technologies >}}

## Engineering Challenges and Solutions

Throughout the implementation of this frontend dashboard, network data flows and client storage challenges were successfully resolved to preserve stable software execution.

{{< challenges >}}

## Impact and Results

* **Zero Infrastructure Overhead:** Operating completely inside the web browser removes server maintenance fees, making the project instantly deployable on static hosting services like Vercel or GitHub Pages.
* **Dynamic Smooth Navigation:** Combining element positioning with JavaScript scroll listeners allows transition movements between the main view, forecasts, and radar maps to happen seamlessly within a controlled container.
* **Client Data Resilience:** Bookmarked cities and regional presets remain securely saved if the user terminates the session, ensuring quick reload cycles by automatically restoring the last known valid location.