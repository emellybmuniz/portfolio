---
title: "Dashboard de Salários na área de dados"
date: 2024-01-01
featured: false
weight: 10
draft: false
description: "Projeto Dashboard de Salários na área de dados desenvolvido por Emelly Beatriz."
imageCover: "imersao-dados-python-alura.webp"
categories:
  - data-science
technologies:
  - Python
  - Streamlit
  - Pandas
  - Plotly
liveDemo: "https://imersao-dados-python-alura-emellybmuniz.streamlit.app/"
repositoryUrl: "https://github.com/emellybmuniz/imersao-dados-python-alura"

metadata:
  status: "Concluído"
  platform: "Web"
  focus: "Data Science"
---

An interactive web application built with Streamlit that offers comprehensive salary analysis in the data field, allowing dynamic exploration through advanced filters and interactive visualizations. Project developed during Alura's Python Immersion with educational data for learning purposes.

---

### 📋 Table of Contents

- [Project Overview](#-project-overview)

- [Directory Structure](#-directory-structure)

- [Highlights & Features](#-highlights--features)

- [Technologies Used](#-technologies-used)

- [Prerequisites](#-prerequisites)

- [Installation](#-installation)

- [How to Use](#-how-to-use)

- [Configuration](#-configuration)

- [Responsiveness](#-responsiveness)

- [Validation and Error Handling](#-validation-and-error-handling)

- [API/Advanced Features](#-apiadvanced-features)

- [Contribution](#-contribution)

- [Future Improvements](#-future-improvements)

- [License](#-license)

- [Author](#-author)

---

## 🚀 Project Overview

[![Dashboard Screenshot](https://github.com/user-attachments/assets/95f96e8d-1bac-4d25-af93-2a301e586b9d)](https://emellybmuniz.github.io/imersao-dados-python-alura/)

This project was developed as a practical exercise during **Alura's Python Immersion** to demonstrate data analysis techniques and interactive dashboard creation. Using an educational dataset with simulated/historical salary information from the data field, the dashboard offers an intuitive interface to explore trends and patterns, serving as a learning tool for students and professionals interested in Data Analytics.

**Context and Motivation:**

- Educational project from Alura's Python Immersion

- Practical demonstration of exploratory data analysis (EDA)

- Creation of interactive dashboards with Streamlit

- Application of data visualization concepts

**Target Audience:**

- Data Science and Python students

- Professionals in career transition

- Alura's Python Immersion participants

- Data analysis and dashboard enthusiasts

**⚠️ Important Note:** The data used is educational/simulated and intended exclusively for learning purposes during Alura's Python Immersion.

## 📂 Directory Structure

```bash

📦imersao-dados-python-alura/

├── README.md                      # Documentation file  

├── README.pt.md                   # Documentation file 

├── app.py                         # Main Streamlit application

├── dados-imersao-final.csv        # CSV data file 

└── requirements.txt               # List of dependencies to run the project

```

## ✨ Highlights & Features

### 🎯 **Interactive Analytics for Learning**

- Multi-criteria filtering system (year, seniority, contract, company)

- Automatic recalculation of metrics and visualizations

- Responsive interface that adapts to applied filters

- Optimized processing of educational datasets with pandas

### 🎨 **Professional Visualizations**

- **Interactive Plotly Charts**: Horizontal bars, histograms, pie charts and choropleth maps

- **Consistent Design System**: Professional color palette and modern typography

- **Optimized UX**: Column layout to maximize visual space

- **Full Responsiveness**: Automatic adaptation to different resolutions

### 📱 **Multi-platform Interface**

- Compatibility with desktop, tablet and mobile

- Responsive sidebar with organized filters

- Flexible grid system for visualizations

- Optimization for touch and mouse navigation

### ✅ **Robustness and Reliability**

- Filtered data validation with visual feedback

- Handling extreme cases (empty datasets)

- Loading educational data via external URL

- Informative alert system for users

### 🔄 **Advanced User Experience**

- Highlighted KPI metrics with monetary formatting

- Informative tooltips in interactive charts

- Instant visual feedback for selections

- Detailed data table for deep analysis

## 🛠️ Technologies Used

This project was built using the following technologies:

### Technical Details:

- **Python 3.8+**: Main language with focus on data analysis

- **Streamlit 1.44.1**: Framework for interactive web applications and dashboards

- **Pandas 2.2.3**: Advanced manipulation and analysis of structured data

- **Plotly 5.24.1**: Library for interactive visualizations and dynamic charts

## 1. Clone this repository

$ git clone https://github.com/emellybmuniz/imersao-dados-python-alura.git

## 2. Navigate to the project directory

$ cd imersao-dados-python-alura

## 3. Create a virtual environment (recommended)

$ python -m venv .venv

## 4. Activate the virtual environment

## On Windows:

$ .venv\Scripts\activate

## On macOS/Linux:

$ source .venv/bin/activate

## 5. Install dependencies

$ pip install -r requirements.txt

## 6. Run the application

$ streamlit run app.py

```

**Alternative:** Access [https://imersao-dados-python-alura-emellybmuniz.streamlit.app/](https://imersao-dados-python-alura-emellybmuniz.streamlit.app/)

### Usage Examples:

```python

## Code analysis example - dataset structure

import pandas as pd

## Data loading

df = pd.read_csv("dados-imersao-final.csv")

## Basic analysis

print(f"Total records: {len(df)}")

print(f"Global average salary: ${df['usd'].mean():,.2f}")

print(f"Countries represented: {df['residencia_iso3'].nunique()}")

```

## ⚙️ Configuration

### Basic Settings:

- **Layout**: Wide mode to maximize visualization space

- **Encoding**: UTF-8 for complete international support

- **Cache**: Streamlit automatic optimization for performance

```python

## Main page configuration

st.set_page_config(

    page_title="Data Salaries Analysis Dashboard",

    page_icon="🎲",

    layout="wide",

    initial_sidebar_state="expanded"

)

```

## 📱 Responsiveness

### Desktop (> 1200px)

- Optimized multi-column layout

- Fixed sidebar with all visible filters

- Charts in 2x2 grid for maximum utilization

### Tablet (768px - 1200px)

- Automatic grid adaptation to 1x4

- Collapsible sidebar for space saving

- Metrics reorganized in 2x2

### Mobile (≤ 768px)

- Optimized vertical layout with scroll

- Accordion filters for better UX

- Responsive charts with touch zoom

## 🛡️ Validation and Error Handling

### Implemented Validations:

- **Empty Dataset**: Verification if filters result in valid data

- **Connectivity**: Handling external data loading failures

- **Data Types**: Automatic validation of numeric and categorical formats

### Error Handling:

- Contextualized warning messages when there's no data for selected filters

- Graceful fallbacks with default values (0, "--") to avoid crashes

- Internal logging for debugging in development environment

## 🔌 API/Advanced Features

### Data Source:

| Method | Endpoint | Description | Format |

|--------|----------|-------------|--------|

| GET | `dados-imersao-final.csv` | Educational dataset from Alura's Python Immersion | CSV UTF-8 |

### Special Features:

- **Geo-mapping**: Integration with ISO3 codes for map visualization (educational data)

- **Dynamic Aggregations**: Real-time statistical calculations based on filters

- **Multi-language**: Structure prepared for Portuguese and English

### How to contribute:

1. **Fork** this repository

2. **Clone** your fork: `git clone https://github.com/your-username/imersao-dados-python-alura.git`

3. **Create a branch** for your feature: `git checkout -b feature/new-functionality`

4. **Make your changes** and test completely

5. **Commit** your changes: `git commit -m 'Add new functionality'`

6. **Push** to the branch: `git push origin feature/new-functionality`

7. **Open a Pull Request** with detailed description of changes

### Technical Improvements:

- [ ] Implementation of automated tests with pytest

- [ ] Intelligent cache for performance optimization

- [ ] Application dockerization for simplified deployment

- [ ] Complete WCAG 2.1 accessibility

