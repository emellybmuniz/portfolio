---
title: "Web Playground - Laboratório de Experimentos Frontend"
date: "2026-05-28"
featured: false
weight: 10
draft: false
description: "Um espaço centralizado de estudos reunindo mini-projetos, desafios de lógica e componentes web construídos com HTML, CSS, JavaScript, SASS e Hugo."
imageCover: "web-playground.webp"
imageCoverFallback: "web-playground.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "SASS"
  - "Hugo"
liveDemo: "https://emellybmuniz.github.io/web-playground/"
repositoryUrl: "https://github.com/emellybmuniz/web-playground"

techReasons:
  JavaScript: "Utilizado para desenvolver a lógica dos mini-aplicativos internos, como o controle de estados e loops do Pomodoro, as atualizações do relógio e a manipulação de dados do gerador de QR Code."
  SASS: "Adotado para praticar a escrita de estilos avançados, utilizando seletores aninhados, variáveis e mixins para estruturar o visual de forma limpa."
  Hugo: "Utilizado como gerador de sites estáticos para entender como estruturar páginas baseadas em componentes e acelerar a montagem de layouts modulares."

metadata:
  status: "Em Desenvolvimento"
  platform: "Web Workspace"
  role: "Frontend Developer"
  industry: "Educação / Estudo Pessoal"
  
  challenges:
    - kicker: "Desafio 1: Centralização e Organização de Contextos"
      title: "Criar um ponto de entrada unificado para múltiplos projetos"
      description: "Como o repositório agrupa exercícios isolados com estruturas de pastas diferentes, a navegação local dependia de abrir diretório por diretório no editor de código."
      resolution: "Desenvolvi um painel indexador na raiz do repositório (index.html) que funciona como um dashboard interativo. Ele mapeia os caminhos relativos de cada desafio ('challenges/'), laboratório ('lab/') e mini-projeto ('mini-projects/'), permitindo testar e visualizar qualquer código diretamente pelo navegador."

features:
  - "Painel central (Dashboard) interativo para acesso rápido a todos os arquivos estáticos"
  - "Mini-projetos utilitários funcionais (Relógio digital, Timer Pomodoro e Gerador de QR Code)"
  - "Pasta dedicada para a resolução de desafios de lógica e testes de algoritmos"
  - "Ambiente de laboratório isolado para experimentações rápidas de marcação e estilos CSS"
  - "Integração inicial com ferramentas modernas de build frontend (Hugo + SASS)"
---

## Sobre o Workspace
Este repositório nasceu da minha vontade de criar um ambiente organizado de testes e experimentações no desenvolvimento frontend. Em vez de criar vários repositórios pequenos para cada exercício simples de curso, decidi centralizar tudo em um único workspace onde posso testar layouts, praticar lógica em JavaScript e documentar minha evolução técnica.

A coleção reúne desde pequenos trechos de código criados no laboratório do dia a dia até mini-aplicativos completos com utilidades reais, servindo como o meu playground principal de aprendizado.

## Organização e Ferramentas Escolhidas
A estrutura do projeto foi dividida em blocos lógicos específicos para separar o que é apenas rascunho do que são projetos estruturados. Embora a maior parte do laboratório use tecnologias web puros (Vanilla HTML/CSS/JS), o ecossistema também foi preparado para receber ferramentas mais robustas, o que me permitiu explorar pela primeira vez a compilação de CSS com SASS e o fluxo de layouts modulares com o Hugo.

{{< technologies >}}

## Dificuldades Práticas e Soluções
Durante a manutenção e a adição de novos exercícios no repositório, coordenar os acessos e aprender o fluxo de compilação visual foram etapas importantes de aprendizado.

{{< challenges >}}

## Conclusão
O Web Playground tem sido essencial para documentar meus fundamentos em frontend sob uma ótica de experimentação livre. Conseguir estruturar uma árvore de diretórios organizada, construir utilitários interativos e dar os primeiros passos com pré-processadores e geradores estáticos me deu uma visão prática muito clara de como os ambientes de desenvolvimento moderno se estruturam. Por ser um repositório contínuo de estudos, ele reflete de forma honesta cada etapa da minha jornada técnica.