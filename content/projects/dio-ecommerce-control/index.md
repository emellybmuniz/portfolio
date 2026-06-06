---
title: "E-Commerce Control"
date: 2024-01-01
featured: true
weight: 10
draft: false
description: "Sistema de gerenciamento de estoque baseado em microsserviços e mensageria em tempo real."
imageCover: "coursePortfolio.webp"
imageCoverFallback: "coursePortfolio.png"
categories: 
  - backend
technologies:
  - Java
  - Spring Boot
  - RabbitMQ
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/dio-ecommerce-control"

techReasons:
  Java: "Linguagem robusta para sistemas corporativos com ecossistema consolidado no universo corporativo."
  Spring Boot: "Acelerou a criação da API RESTful, injeção de dependências e mapeamento de dados (Spring Data JPA) do microsserviço."
  RabbitMQ: "Implementação de broker de mensageria assíncrona para não bloquear o fluxo principal durante a atualização de estoque."

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
O DIO E-Commerce Control é um sistema de retaguarda focado no gerenciamento de produtos ("Warehouse") e sincronização de estoque, desenhado sob uma arquitetura distribuída de microsserviços. 

### Comunicação Assíncrona e Escalabilidade

Para evitar o forte acoplamento entre os módulos da loja virtual e o armazém, o projeto faz uso extensivo do RabbitMQ. Sempre que ocorre uma venda ou mudança no estado do produto, eventos assíncronos são disparados na fila. O microsserviço consome esses eventos e atualiza a base de dados via JPA/Hibernate de forma silenciosa e performática, permitindo que cada serviço escale de forma independente sob altas cargas de tráfego.

## Arquitetura e Decisões Técnicas
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Impacto e Resultados
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
