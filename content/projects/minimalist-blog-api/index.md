---
title: "Minimalist Blog API"
date: 2024-01-01
featured: true
weight: 10
draft: false
description: "API RESTful desenvolvida com arquitetura robusta para gerenciar publicações, autores e categorias."
imageCover: "coursePortfolio.webp"
imageCoverFallback: "coursePortfolio.png"
categories: 
  - backend
  - api
technologies:
  - Python
liveDemo: "https://minimalist-blog-api-7hzq.onrender.com/api-docs/"
repositoryUrl: "https://github.com/emellybmuniz/minimalist-blog-api"

techReasons:
  TypeScript: "Garante segurança de tipos no contrato da API e no mapeamento das entidades, prevenindo erros em runtime."
  Node.js: "Motor de execução assíncrono e orientado a eventos que lida bem com múltiplas conexões de I/O."
  Express: "Framework minimalista e não opinativo para rápida orquestração de rotas e middlewares HTTP."
  PostgreSQL: "Banco relacional íntegro e otimizado para lidar com queries complexas e múltiplos relacionamentos."
  TypeORM: "Utilização do padrão Data Mapper, proporcionando forte separação entre persistência de dados e regras de negócio."

metadata:
  status: "Concluído"
  platform: "Web/API"
  role: "Desenvolvedora"
  industry: "Tecnologia"
  
  challenges:
    - kicker: "Desafio 1: Lorem Ipsum"
      title: "Lorem Ipsum"
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      resolution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      
features:
  - "Lorem ipsum dolor"
  - "Lorem ipsum dolor"
---

## Sobre o Projeto

O projeto foi desenhado sob o padrão Data Mapper, garantindo uma separação robusta entre os controladores de requisição HTTP, a lógica de domínio nos serviços e a camada de persistência. 

Um dos pilares técnicos do projeto é a implementação eficiente de relacionamentos de banco de dados. A base relacional foi modelada para suportar cardinalidade *One-to-Many* (entre autores e publicações) e *Many-to-Many* (entre postagens e categorias), aplicando estratégias de Eager Loading para entregar respostas JSON otimizadas em uma única transação, sem gerar gargalos de consulta.

## Arquitetura e Decisões Técnicas
O projeto foi desenhado sob o padrão Data Mapper, garantindo uma separação robusta entre os controladores de requisição HTTP, a lógica de domínio nos serviços e a camada de persistência. 

Um dos pilares técnicos do projeto é a implementação eficiente de relacionamentos de banco de dados. A base relacional foi modelada para suportar cardinalidade *One-to-Many* (entre autores e publicações) e *Many-to-Many* (entre postagens e categorias), aplicando estratégias de Eager Loading para entregar respostas JSON otimizadas em uma única transação, sem gerar gargalos de consulta.

## Impacto e Resultados
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
