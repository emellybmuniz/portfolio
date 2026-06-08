# Emelly Beatriz | Portfolio

![GitHub last commit](https://img.shields.io/github/last-commit/emellybmuniz/portfolio)
![Repo Size](https://img.shields.io/github/repo-size/emellybmuniz/portfolio?color=blue&style=flat)
![CI/CD Pipeline](https://github.com/emellybmuniz/portfolio/actions/workflows/ci.yml/badge.svg)
![Tested with Playwright](https://img.shields.io/badge/tested_with-playwright-2EAD33.svg?logo=playwright)
![Cloudflare Pages](https://img.shields.io/badge/deployed_on-Cloudflare_Pages-F38020?logo=cloudflare&logoColor=white)
![Project Status](https://img.shields.io/badge/Status%20-%20Completed%20-%20%234BC21E)

This is the repository for my personal portfolio. I built this project to practically apply front-end architecture, performance, accessibility, and testing concepts, documenting and consolidating my learning throughout the development process.

---

### 📋 Table of Contents

- [Overview](#-overview)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [How to Run Locally](#-how-to-run-locally)
- [Tests and Quality](#-tests-and-quality)
- [License](#-license)
- [Credits & Acknowledgments](#-credits--acknowledgments)
- [Author](#-author)

---

## 🚀 Overview

The portfolio was developed as a static site focused on speed, ease of maintenance, and best practices. The interface is fluid, features native *Dark Mode* support, and is fully responsive.

Instead of using heavy frameworks (like React or Next.js) for something predominantly static, I opted for **Hugo**, which allowed me to focus my studies on clean HTML, well-structured SCSS, and pure TypeScript (*Vanilla*).

## 📂 Project Structure

The project's architecture tries to avoid the famous "class soup". I structured the code by grouping HTML, SCSS, and TypeScript by "Feature" (individual component).

```bash
assets/
├── core/             # Global Sass variables, typography, and utilities
├── features/         # Isolated components (HTML, SCSS, and TS live together here)
│   ├── header/
│   ├── projects/
│   └── ...
└── shared/           # Reusable UI elements (e.g., buttons, icons)
```

## 🛠️ Technologies Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/scss-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Hugo](https://img.shields.io/badge/hugo-%23FF4088.svg?style=for-the-badge&logo=hugo&logoColor=white)
![Playwright](https://img.shields.io/badge/playwright-%232EAD33.svg?style=for-the-badge&logo=playwright&logoColor=white)

## 📦 How to Run Locally

**Prerequisites:**
You will need [Node.js](https://nodejs.org/en/) and [Hugo (Extended version)](https://gohugo.io/installation/) installed on your machine.

```bash
# 1. Clone this repository
git clone https://github.com/emellybmuniz/portfolio.git

# 2. Enter the project folder
cd portfolio

# 3. Install dependencies (Linters, Prettier, etc.)
npm install

# 4. Start the local Hugo server
npm run dev

# 5. The site will be available at http://localhost:1313
```

## 🧪 Tests and Quality

To ensure the site doesn't visually break in the future, I set up some simple Code Quality (QA) tools:

- **Playwright:** For *End-to-End* tests (verifying navigation and theme switching) and *Visual Regression* tests (to ensure the layout/CSS doesn't unexpectedly break). Can be run locally with `npm run test:e2e`.
- **Lighthouse CI:** Automatically runs to validate that performance, SEO, and Accessibility scores are always above 90 points.
- **GitHub Actions:** Runs all tests, builds the site, and validates strict TypeScript/ESLint on every change pushed to the repository.

---

## ⚖️ License

Feel free to draw inspiration and learn from this project! To balance the Open Source spirit with protecting my personal content, I use a dual-license approach:

- **Source Code (MIT):** The structure (Hugo, HTML, SCSS, and TypeScript) is fully open. You are more than welcome to clone, study, and use the code as a foundation for your own site!
- **Content and Visual Identity (CC BY-NC-ND 4.0):** To maintain authenticity, I only ask that you do not reuse my personal texts, photographs, or exact visual identity. If you use this repository as a starting point, remember to customize the colors, images, and descriptions to reflect your own professional identity.

For more details, check the [LICENSE](./LICENSE) file.

## 🌟 Credits & Acknowledgments

This portfolio uses open-source icons provided by the **[Devicon](https://devicon.dev/)** project. 
*Originally created by Konpa under the MIT license and supported by various contributors. Copyright © 2015 Konpa.*

---

## ✍️ Author

Made with ❤️ by Emelly Beatriz

📬 Contact me:
📧 emellybmuniz@gmail.com |
💼 [Linkedin](https://www.linkedin.com/in/emellybmuniz) |
🐙 [Github](https://github.com/emellybmuniz)
