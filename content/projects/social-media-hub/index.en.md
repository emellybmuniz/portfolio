---
title: "Social Media Hub"
date: 2024-01-01
featured: false
weight: 10
draft: false
description: "Projeto Social Media Hub desenvolvido por Emelly Beatriz."
imageCover: "social-media-hub.webp"
categories:
  - fullstack
technologies:
  - JavaScript
liveDemo: "https://emellybmuniz.github.io/social-media-hub/"
repositoryUrl: "https://github.com/emellybmuniz/social-media-hub"

metadata:
  status: "Concluído"
  platform: "Web/API"
  focus: "Fullstack"
---

[🇺🇸 English](./README.md) | [🇧🇷 Português](./README.pt.md)

![GitHub license](https://img.shields.io/github/license/emellybmuniz/social-media-hub)
![GitHub language count](https://img.shields.io/github/languages/count/emellybmuniz/social-media-hub)
![GitHub last commit](https://img.shields.io/github/last-commit/emellybmuniz/social-media-hub)
![GitHub repo size](https://img.shields.io/github/repo-size/emellybmuniz/social-media-hub)
![Project Status](https://img.shields.io/badge/Status%20-%20Completed%20-%20%234BC21E)

A simple and interactive social media hub with a mobile-first design. It features an iPhone mobile interface that displays multiple social platforms responsively. This project was developed based on the HTML5  and CSS3 course from "Curso em Vídeo".

---

### 📋 Index
- [Project Overview](#-visão-geral-do-projeto)
- [Directory Structure](#-estrutura-de-diretórios)
- [Highlights & Features](#-destaques--funcionalidades)
- [Technologies Used](#-tecnologias-utilizadas)
- [Prerequisites](#-pré-requisitos)
- [Installation](#-instalação)
- [How to Use](#-como-usar)
- [Configuration](#-configuração)
- [Responsiveness](#-responsividade)
- [Validation & Error Handling](#-validação--tratamento-de-erros)
- [API/Advanced Features](#-apifuncionalidades-avançadas)
- [Contribution](#-contribuição)
- [License](#-licença)
- [Author](#-autora)

---

## 🚀 Project Overview
[![Project Demo](imagens/project-demo.gif)](https://emellybmuniz.github.io/social-media-hub/)

The Social Media Hub is a web interface that simulates the experience of a mobile device for browsing multiple social media platforms. The project features an iPhone frame with an interactive navigation system that allows users to switch between different social networks, which are loaded within an `iframe`.

**Context and Motivation:**
- Educational project developed during the HTML5 and CSS3 course from "Curso em Vídeo"
- Demonstrates concepts of responsive design and iframe integration
- Simulates mobile interface using only HTML and CSS
- **Target audience**: Web development students
- **Technical concepts demonstrated**: CSS Grid, Flexbox, responsive design, iframe integration

## 📂 Directory Structure
```bash
social-media-hub/
├── estilo/
│   └── style.css              # Main stylesheet
├── imagens/
│   ├── fundo-madeira.jpg      # Wood texture background image
│   ├── frame-iphone.png       # iPhone frame mockup
│   ├── logo-*.jpg             # Logos of social platforms (6 platforms)
│   └── tela-*.jpg             # Screenshots of platform interfaces
├── facebook.html              # Facebook platform page
├── github.html                # GitHub platform page
├── home.html                  # Default home page
├── index.html                 # Main entry point of the application
├── instagram.html             # Instagram platform page
├── twitter.html               # Twitter/X platform page
├── youtube.html               # YouTube platform page
├── .gitattributes             # Git line break normalization
├── .vscode/settings.json      # VSCode configuration for live preview
├── LICENSE                    # MIT license file
└── README.md                  # This documentation file
```

## ✨ Highlights & Features

### 🎯 **Interactive Mobile Simulation**
- Realistic iPhone frame with precise dimensions (311x627px)
- Iframe integration for platform previews
- Centralized positioning with CSS transform techniques
- Fixed background for immersive experience

### 🎨 **Professional Visual Design**
- Wood texture background with fixed positioning
- Social media icons with hover animations
- Smooth transitions with scale effects
- Grid-based layout for visual organization
- Clean interface with customized scrollbar

### 📱 **Advanced Responsiveness**
- Optimized breakpoints for mobile (≤600px)
- Dynamic scaling with vw units
- Flexible iframe dimensions (269x475px default)
- Responsive image resizing
- Interactive elements optimized for touch

### ✅ **Excellence in User Experience**
- Intuitive navigation with visual feedback
- Hover effects with 3D transformations
- Frame target system for smooth switching between platforms
- Link structures mindful of accessibility

### 🔄 **Integration with Platforms**
- Six major social media platforms supported
- Integration of external links with appropriate target attributes
- Access buttons with consistent theme
- Iframe implementation with security awareness
- Platform-specific color schemes

## 🛠️ Technologies Used

This project was built using the following technologies:

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Technical Details:
- **HTML5**: Semantic structure with iframe integration, frame target navigation, and accessibility attributes
- **CSS3**: Advanced positioning with transforms, grid/flexbox layouts, media queries, hover animations, and customized styling
- **Responsive Design**: Mobile-first approach with viewport meta tags, flexible units, and adaptive breakpoints

## ⚙️ Prerequisites

This is a static web project with minimal requirements:

**Browser Compatibility:**
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

**Development Environment:**
- Any modern text editor or IDE
- Live server extension (recommended)
- Modern web browser for testing

## 📦 Installation

```bash
# 1. Clone this repository
$ git clone https://github.com/emellybmuniz/social-media-hub.git

# 2. Navigate to the project directory
$ cd social-media-hub

# 3. Open with a live server (recommended)
# Using the Live Server extension from VSCode or any static server

# 4. Alternatively, open directly in the browser
$ open index.html
```

**Alternative:** [Visit the Online Demo](https://emellybmuniz.github.io/social-media-hub/)

## 💡 How to Use

1. **Start Application** - Open `index.html` in your browser or access the online demo
2. **Navigate Platforms** - Click on any social network icon on the right side of the screen
3. **View Content** - Each platform loads within the iPhone frame with authentic interface previews
4. **Access Profiles** - Click the "ACCESS" button on any platform to visit the real social network profiles
5. **Mobile Experience** - Access from mobile devices for an optimized responsive experience
6. **Return to Start** - Click the home icon to return to the default home screen

### Usage Examples:
```html
<!-- Example of custom platform integration -->
<a href="plataforma-personalizada.html" target='frame'>
  <img src="imagens/logo-personalizado.jpg" alt="plataforma personalizada">
</a>
```

## 📱 Responsiveness

### Desktop (> 600px)
- Full display of the iPhone frame with wood texture background
- Grid-based social network navigation on the right side
- Hover animations and transform effects enabled
- Fixed background attachment for parallax effect

### Mobile (≤ 600px)
- Optimized icon scaling using viewport width units (13vw)
- Adjusted phone positioning with negative margins
- Proportions maintained for consistent experience
- Interactive elements optimized for touch

## 🛡️ Validation & Error Handling

### Implemented Validations:
- **HTML Structure**: Semantic markup with appropriate DOCTYPE and lang attributes
- **CSS Reset**: Universal margin/padding reset for consistent rendering across browsers
- **Image Alt Tags**: Accessibility compliance with descriptive alternative text
- **Meta Viewport**: Appropriate viewport configuration for mobile

## 🔌 API/Advanced Features

### Integration with Platforms:
| Platform | Integration Type | Target URL | Features |
|------------|-------------------|------------|-----------------|
| Home | Local Content | `home.html` | Brand home page |
| Instagram | External Search | Bing Search API | Profile discovery |
| YouTube | Direct Channel | YouTube Channel | Access to video content |
| Facebook | Direct Profile | Facebook Videos | Media content |
| Twitter/X | Direct Profile | Twitter Profile | Social updates |
| GitHub | Direct Repository | GitHub Profile | Code repositories |

### Special Features:
- **Iframe Security**: Appropriate frame targeting with named frames for security
- **CSS Grid Layout**: Advanced positioning system for responsive social icons
- **Transform Animations**: Hardware-accelerated CSS transforms for smooth interactions

## 🤝 Contribution

Contributions are always welcome and **highly appreciated!** Feel free to open an issue or submit a pull request.

### How to contribute:
1. **Fork** this repository
2. **Clone** your fork: `git clone https://github.com/your-username/social-media-hub.git`
3. **Create a branch** for your feature: `git checkout -b feature/amazing-feature`
4. **Make your changes** and test thoroughly
5. **Commit** your changes: `git commit -m 'Add amazing feature'`
6. **Push** to the branch: `git push origin feature/amazing-feature`
7. **Open a Pull Request** with a detailed description of the changes

### Contribution Guidelines:
- Keep the code clean and well-commented
- Follow existing CSS naming conventions and structure
- Test responsiveness on different devices and browsers
- Ensure accessibility standards are maintained
- Include appropriate alt tags and semantic HTML

## 🔑 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for more details.

The MIT License allows free use, modification, and distribution of this software, making it perfect for educational purposes and open-source contributions.

## ✍️ Author

Created with ❤️ by **Emelly Beatriz**

📬 Get in touch:
📧 emellybmuniz@gmail.com |
💼 [Linkedin](https://www.linkedin.com/in/emellybmuniz) |
🐙 [Github](https://github.com/emellybmuniz)

---

⭐ **Liked the project?** Leave a star on the repository to support development!



