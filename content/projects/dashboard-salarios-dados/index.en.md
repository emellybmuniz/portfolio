---
title: "Data Salaries Analysis Dashboard"
date: "2025-08-09"
featured: true
weight: 10
draft: false
description: "Interactive web application built with Streamlit for statistical exploration and mapping of data market salary trends."
imageCover: "dashboard-salarios-dados.webp"
imageCoverFallback: "dashboard-salarios-dados.png"
categories: 
  - "frontend"
technologies:
  - "Python"
  - "Streamlit"
  - "Pandas"
  - "Plotly"
liveDemo: "https://imersao-dados-python-alura-emellybmuniz.streamlit.app/"
repositoryUrl: "https://github.com/emellybmuniz/imersao-dados-python-alura"

techReasons:
  Python: "Core language chosen for its performance inside data analysis ecosystems and efficient matrix manipulation capabilities."
  Streamlit: "Framework adopted to build the web interface directly in Python, quickly turning data scripts into a responsive dashboard."
  Pandas: "Essential library used to load CSV data spreadsheets, enforce multi-criteria evaluation masks, and aggregate core KPIs at runtime."
  Plotly: "Visualization engine tasked with rendering interactive charts and choropleth geo-maps backed by fluid layout auto-scaling."

metadata:
  status: "Completed"
  platform: "Web Application"
  role: "Frontend Data Developer"
  industry: "Business Intelligence / EdTech"
  
  challenges:
    - kicker: "Challenge 1: Dashboard Responsiveness"
      title: "Preserving chart grid matrices on compact touchscreens"
      description: "Complex dashboards carrying multi-column analytical visuals tend to break or introduce aggressive horizontal scrolling on mobile viewports."
      resolution: "Enforced Streamlit's 'wide' display layout mode combined with native fluid column containers, enabling automatic vertical stacking and optimized touch-zoom scales for Plotly graphics on small screens."
    - kicker: "Challenge 2: Cross-Filter Exception Cascades"
      title: "Handling exhaustive filter combinations yielding null records"
      description: "Chaining multiple strict user criteria (e.g., precise year + executive seniority + micro-sized companies) could result in empty dataframes, throwing rendering exceptions."
      resolution: "Introduced a conditional gatekeeping check leveraging Pandas' native '.empty' attribute. When zero records match, chart processing halts gracefully to display a descriptive warning card instead of crashing."

features:
  - "Control hub supporting concurrent filtering by year, seniority, contract format, and company metrics."
  - "Real-time monetary KPI tracking formatted to global standard currency values."
  - "Geographical allocation mapping leveraging integrated ISO3 standardized country keys."
  - "Dynamic plotting arrays providing clean informative tooltips and click-to-isolate metrics."
  - "Optional granular dataset viewer embedded into the footer for raw row inspection."
---

## About the Project

The **Data Salaries Analysis Dashboard** is a practical utility built during *Alura's Python Data Immersion*. The application was engineered to process educational tech payroll records, transforming flat rows of text spreadsheets into an active, responsive Business Intelligence environment.

The tool enables students and transitioning career professionals to perform swift exploratory data analysis (EDA), helping them track global salary averages, macro distributions, and geographical compensation trends across experience tiers.

## Architecture and Technical Decisions

The codebase architecture prioritizes serverless client-side efficiency, maximizing resource consumption limits provided by the Streamlit Community Cloud ecosystem:

* **In-Memory Manipulation**: Data parsing and transformation run completely inside ephemeral memory spaces via Pandas, bypassing the need for heavy external relational databases for this scope.
* **Fluid Interface Geometry**: Split into a fixed sidebar dedicated entirely to parameters and a main viewport structured using relative grids to balance metric cards and chart blocks evenly.

{{< technologies >}}

## Engineering Challenges and Resolutions

When assembling analytical interfaces, aligning data rendering speeds with viewport fluidity is key:

{{< challenges >}}

## Impact and Results

* **Advanced Multi-Platform Adaptability**: The UI scales natively down to smartphones, reflowing wide grid spaces into streamlined vertical lists suitable for touch inputs.
* **Frictionless User Experience**: Native reactivity handles instantaneous interface state updates on filter state changes, omitting clunky form submission clicks or manual page reboots.
* **Data Accessibility**: Complex raw relational structures are abstracted behind clean data visualizations, allowing intuitive tracking of industry compensation patterns.