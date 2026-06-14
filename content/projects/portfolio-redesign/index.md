---
title: "Portfolio Pessoal"
date: 2026-06-06
featured: true
weight: 10
draft: false
description: "Redesign de portfólio focado em altíssima performance, arquitetura escalável e forte garantia de qualidade através de E2E e CI/CD."
imageCover: "portfolio-project-cover.webp"
imageCoverFallback: "portfolio-project-cover.png"
categories: 
  - "Frontend"
technologies:
  - "Hugo"
  - "Sass"
  - "TypeScript"
  - "Playwright"
  - "GitHub Actions"
liveDemo: "https://emellybeatriz.dev"
repositoryUrl: "https://github.com/emellybmuniz/portfolio"

techReasons:
  Hugo: "Geração estática super rápida, excelente para SEO e serve HTML puro direto no CDN."
  SCSS: "Permite uma arquitetura robusta baseada em Feature Co-location, com tokens globais."
  TypeScript: "Tipagem estática para evitar quebra de contratos de UI em tempo de execução."
  Playwright: "Ferramenta moderna para testar fluxos críticos e garantir regressão visual a cada commit."
  GitHub Actions: "Automação total da esteira, bloqueando deploys se a nota do Lighthouse baixar."

metadata:
  status: "Concluído"
  platform: "Web Application"
  role: "Desenvolvedora Frontend"
  industry: "Tecnologia / Design"
  
  challenges:
    - kicker: "Desafio 1: Escalabilidade vs Performance"
      title: "Design premium sem frameworks pesados"
      description: "O maior desafio técnico consistiu em orquestrar uma interface rica em detalhes visuais e micro-interações enquanto se mantinha um escopo restrito de performance (Lighthouse > 90)."
      resolution: "Em vez de usar React/Next.js, eu modularizei a arquitetura em Feature Co-Location (HTML, SCSS e TS agrupados), reduzindo a carga do DOM e carregando apenas o Vanilla JS estritamente necessário."
    - kicker: "Desafio 2: Quality Assurance Automático"
      title: "Garantindo estabilidade sem testes unitários exaustivos"
      description: "Por ser um projeto puramente visual, não faria sentido escrever centenas de testes unitários triviais, mas o site ainda não poderia quebrar."
      resolution: "Implementei testes E2E e de Regressão Visual usando Playwright. Uma esteira de CI/CD (GitHub Actions) foi configurada para validar o Typecheck e rodar o Lighthouse automaticamente a cada Pull Request."
      
features:
  - "Renderização estática super performática (Time to First Byte mínimo)"
  - "Testes E2E de navegabilidade e regressão visual com Playwright"
  - "CI/CD integrado com Lighthouse limitando builds ruins"
  - "Gestão autônoma de dependências via bot (Renovate)"
  - "Suporte nativo e fluido a Dark Mode com persistência"
---

## Sobre o Projeto

O desenvolvimento do meu portfólio foi planejado como uma demonstração prática de engenharia front-end moderna. O foco central não foi apenas criar um currículo online, mas construir um produto digital que refletisse maturidade técnica: com tempos de carregamento mínimos, ausência de dependências inúteis, acessibilidade e uma sólida automação de qualidade (QA).

## Arquitetura e Decisões Técnicas

Para contornar o acúmulo de processamento no *client-side*, abandonei os ecossistemas pesados e adotei a união da renderização estática (SSG) com *Vanilla* TypeScript strict. 

{{< technologies >}}

## Desafios e Soluções de Engenharia

Ao longo da implementação, enfrentei e resolvi alguns problemas cruciais para garantir a estabilidade do software.

{{< challenges >}}

## Impacto e Resultados

O projeto hoje atinge a nota máxima nas avaliações do Google (Lighthouse), com acessibilidade, SEO e *Best Practices* no verde. Além disso, implementei uma esteira de testes automatizada para garantir que qualquer alteração futura no CSS seja blindada contra regressões ou quebra de responsividade, oferecendo uma experiência de código quase "bulletproof" para a escala do projeto.
