---
title: "Portfólio Acadêmico Responsivo"
date: "2025-09-13"
featured: false
weight: 10
draft: false
description: "Single Page Application (SPA) estática desenvolvida como projeto acadêmico de Engenharia de Software, com foco em ergonomia móvel e acessibilidade nativa."
imageCover: "course-portfolio.webp"
imageCoverFallback: "course-portfolio.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/coursePortfolio/"
repositoryUrl: "https://github.com/emellybmuniz/coursePortfolio"

techReasons:
  JavaScript: "Utilizado para gerenciar a lógica de alternância de temas (dark mode), persistência de dados no navegador e controle do carrossel interativo de projetos."
  HTML5: "Responsável pelo esqueleto estrutural utilizando tags semânticas e atributos de acessibilidade ARIA para garantir uma navegação estruturada."
  CSS3: "Aplicado na construção de layouts fluidos, animações baseadas em scroll e na implementação de duas interfaces de navegação completamente distintas para desktop e mobile."

metadata:
  status: "Concluído"
  platform: "Web Application (Client-side)"
  role: "Desenvolvedora Frontend"
  industry: "Educação / Portfólio Acadêmico"
  
  challenges:
    - kicker: "Desafio 1: Navegação Híbrida e Ergonomia"
      title: "Transição estrutural de menus entre viewports"
      description: "Menus comuns de desktop tornam-se desconfortáveis em dispositivos móveis, dificultando o alcance com uma única mão."
      resolution: "Desenvolvimento de uma interface dupla via CSS Media Queries: um menu lateral expansivo (sidebar) para telas grandes e uma barra fixa inferior (bottom nav) focada no alcance do polegar para smartphones."
    - kicker: "Desafio 2: Sincronização e Persistência de Tema"
      title: "Manutenção do estado visual entre sessões"
      description: "Impedir o efeito 'flash' visual onde a tela pisca na cor padrão antes do script carregar a preferência de tema escuro do usuário."
      resolution: "Implementação de uma rotina JavaScript síncrona que lê o 'localStorage' imediatamente na abertura da página, injetando a classe CSS do tema antes da renderização completa do body."

features:
  - "Navegação móvel integrada na parte inferior da interface (estilo aplicativo nativo)."
  - "Alternador de tema claro/escuro com persistência via LocalStorage."
  - "Carrossel de projetos adaptativo: transição por setas no desktop e lista rolável por touch no mobile."
  - "Acessibilidade estruturada com o uso rigoroso de atributos 'aria-label' e semântica HTML."
  - "Formulário de contato validado localmente com redirecionamento para página estática de agradecimento."
---

## Sobre o Projeto

Este projeto consiste em um portfólio pessoal estruturado como uma *Single Page Application* (SPA) estática. Ele foi desenvolvido como parte de um trabalho acadêmico para o curso de Engenharia de Software do [Centro Universitário Internacional Uninter](https://www.uninter.com/). 

O principal objetivo foi consolidar conceitos fundamentais do front-end básico, demonstrando que é possível criar uma interface moderna, acessível e altamente responsiva utilizando exclusivamente código nativo (*vanilla*), sem depender de frameworks como React ou bibliotecas de terceiros.

## Arquitetura e Decisões Técnicas

A base de código foi modularizada para manter a separação estrita de responsabilidades, facilitando a organização estrutural:

* **`index.html`**: Concentra toda a árvore do DOM da aplicação em uma única página, utilizando tags estruturais (`<header>`, `<main>`, `<section>`, `<footer>`) e tratamento de acessibilidade visual.
* **`styles/`**: Dividido de forma limpa entre o reset padrão (`reset.css`), as folhas de estilo principais (`main.css`) e as definições específicas de variáveis de cores para o tema escuro (`dark-mode.css`).
* **`scripts/main.js`**: Centraliza os ouvintes de eventos para capturar as interações e controlar as manipulações dinâmicas da página.

{{< technologies >}}

## Desafios e Soluções de Engenharia

O foco central do projeto esteve no refinamento da experiência do usuário (UX) em diferentes tamanhos de tela e no gerenciamento limpo do estado da aplicação:

{{< challenges >}}

## Impacto e Resultados

* **Ergonomia Móvel Otimizada**: A barra de navegação inferior em dispositivos móveis reduziu drasticamente o esforço de interação do usuário, seguindo os padrões modernos de design voltados para telas verticais.
* **Persistência Sem Backend**: A adoção do `localStorage` permitiu que a escolha de tema do visitante fosse mantida mesmo após fechar o navegador, entregando uma experiência personalizada com zero custo de infraestrutura de servidores.
* **Acessibilidade Nativa**: A estrutura semântica garante que leitores de tela consigam interpretar a hierarquia de informações e os botões de ação sem ambiguidades.