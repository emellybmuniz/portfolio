# Emelly Beatriz | Portfolio

![GitHub License](https://img.shields.io/github/license/emellybmuniz/portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/emellybmuniz/portfolio)
![CI/CD Pipeline](https://github.com/emellybmuniz/portfolio/actions/workflows/ci.yml/badge.svg)
![Tested with Playwright](https://img.shields.io/badge/tested_with-playwright-2EAD33.svg?logo=playwright)
![Project Status](https://img.shields.io/badge/Status%20-%20Completed%20-%20%234BC21E)

Este é o repositório do meu portfólio pessoal. Construí este projeto para aplicar na prática conceitos de arquitetura front-end, performance, acessibilidade e testes, documentando e consolidando meu aprendizado ao longo do desenvolvimento.

---

### 📋 Índice

- [Visão Geral](#-visão-geral)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Rodar Localmente](#-como-rodar-localmente)
- [Testes e Qualidade](#-testes-e-qualidade)
- [Autora](#-autora)

---

## 🚀 Visão Geral

O portfólio foi desenvolvido como um site estático focado em velocidade, facilidade de manutenção e boas práticas. A interface é fluida, possui suporte a *Dark Mode* nativo e é totalmente responsiva. 

Em vez de usar frameworks pesados (como React ou Next.js) para algo predominantemente estático, optei pelo **Hugo**, permitindo focar meus estudos em HTML limpo, SCSS bem estruturado e TypeScript puro (*Vanilla*).

## 📂 Estrutura do Projeto (Feature Co-Location)

A arquitetura do projeto tenta fugir da famosa "sopa de classes". Eu estruturei o código agrupando HTML, SCSS e TypeScript por "Feature" (componente individual).

```bash
assets/
├── core/             # Variáveis Sass globais, tipografia e utilitários
├── features/         # Componentes isolados (HTML, SCSS e TS moram juntos aqui)
│   ├── header/
│   ├── projects/
│   └── ...
└── shared/           # Elementos UI reaproveitáveis (ex: botões, ícones)
```

## 🛠️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/scss-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Hugo](https://img.shields.io/badge/hugo-%23FF4088.svg?style=for-the-badge&logo=hugo&logoColor=white)
![Playwright](https://img.shields.io/badge/playwright-%232EAD33.svg?style=for-the-badge&logo=playwright&logoColor=white)

## 📦 Como Rodar Localmente

**Pré-requisitos:**
Você vai precisar do [Node.js](https://nodejs.org/en/) e do [Hugo (versão Extended)](https://gohugo.io/installation/) instalados na sua máquina.

```bash
# 1. Clone este repositório
git clone https://github.com/emellybmuniz/portfolio.git

# 2. Entre na pasta do projeto
cd portfolio

# 3. Instale as dependências (Linters, Prettier, etc)
npm install

# 4. Inicie o servidor local do Hugo
npm run dev

# 5. O site estará disponível em http://localhost:1313
```

## 🧪 Testes e Qualidade

Como a ideia é garantir que o site não quebre visualmente no futuro, configurei algumas ferramentas simples de Qualidade de Código (QA):

- **Playwright:** Para testes *End-to-End* (verificando a navegação e a troca de tema) e *Visual Regression* (para garantir que o layout/CSS não quebre de surpresa). Pode ser executado localmente com `npm run test:e2e`.
- **Lighthouse CI:** Roda automaticamente validando se a performance, SEO e Acessibilidade estão sempre acima de 90 pontos.
- **GitHub Actions:** Roda todos os testes, o build e valida o TypeScript strict/ESLint a cada alteração no repositório.

---

## ✍️ Autora

Feito com ❤️ por Emelly Beatriz

📬 Fale comigo:
📧 emellybmuniz@gmail.com |
💼 [Linkedin](https://www.linkedin.com/in/emellybmuniz) |
🐙 [Github](https://github.com/emellybmuniz)
