---
title: "Warehouse Microservice"
date: "2026-06-05"
featured: true
weight: 10
draft: false
description: "Microsserviço de gerenciamento de estoque com processamento assíncrono e sincronização em tempo real via RabbitMQ."
imageCover: ""
imageCoverFallback: ""
categories: 
  - "Backend"
technologies:
  - "Java"
  - "Spring Boot"
  - "RabbitMQ"
  - "MapStruct"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/dio-ecommerce-control"

techReasons:
  Java 21: "Utilizei pelas vantagens das versões modernas da linguagem, garantindo uma base estável, tipagem forte e alto desempenho para gerenciar o fluxo do estoque."
  Spring Boot 3: "Escolhi para acelerar a criação da API RESTful, aproveitando a injeção de dependências nativa e a facilidade do Spring Data JPA para interagir com o banco de dados."
  RabbitMQ: "Adotei como broker de mensageria assíncrona para permitir a comunicação entre microsserviços sem travar ou sobrecarregar a linha principal de compra."
  MapStruct: "Implementei para realizar o mapeamento automático entre as entidades do banco e os DTOs de forma limpa, eliminando código repetitivo manualmente."

metadata:
  status: "Em desenvolvimento"
  platform: "Distributed API"
  role: "Desenvolvedora Backend Solo"
  industry: "E-commerce"
  
  challenges:
    - kicker: "Desafio 1: Acoplamento e Bloqueio de Fluxo"
      title: "Sincronização de estoque sem indisponibilizar o sistema"
      description: "Em arquiteturas de e-commerce, se a atualização de estoque depender de chamadas HTTP diretas e síncronas, o sistema pode ficar lento ou cair caso um dos serviços falhe."
      resolution: "Desenvolvi um listener assíncrono conectado à fila 'product.change.availability.queue'. Configurando o Jackson2JsonMessageConverter, passei a consumir os eventos de alteração de status em segundo plano, atualizando o banco via JPA sem travar a experiência do usuário."
      
features:
  - "Cadastro e consulta de produtos no estoque com ordenação nativa por nome"
  - "Consumo assíncrono de mensagens JSON para atualização de disponibilidade em tempo real"
  - "Integração via RESTful API com o microsserviço de vitrine (Storefront)"
  - "Documentação interativa automatizada com Swagger UI e SpringDoc OpenAPI"
  - "Persistência configurada com Spring Data JPA e banco de dados H2 para testes rápidos"
---

## Sobre o Projeto

O **Warehouse Microservice** é um sistema de retaguarda focado no gerenciamento de estoque que criei para fazer parte de uma arquitetura distribuída de e-commerce. O propósito do projeto foi resolver o problema de acoplamento rígido entre sistemas de catálogo e inventário. 

Antes desse modelo de microsserviço assíncrono, qualquer oscilação na consulta de produtos afetava diretamente o fechamento de pedidos. Com esta solução, descentralizei as responsabilidades, permitindo que o estoque processe alterações de status de forma isolada, garantindo que a vitrine continue funcionando normalmente mesmo sob alta demanda de acessos.

## Arquitetura e Decisões Técnicas

Desenhei a estrutura do projeto separando claramente as responsabilidades em camadas bem definidas (Controller → Service → Repository). Busquei ferramentas modernas que evitassem códigos repetitivos e facilitassem a manutenção individual do software:

{{< technologies >}}

## Desafios e Soluções de Engenharia

Durante a codificação da mensageria, foquei em garantir que o microsserviço conseguisse receber dados externos e interpretar os estados de disponibilidade sem gerar inconsistências na persistência.

{{< challenges >}}

## Impacto e Resultados

Até o momento, não configurei ferramentas de métricas de infraestrutura (como Prometheus) ou testes de carga automatizados neste repositório. Contudo, os resultados técnicos e qualitativos obtidos com o desenvolvimento isolado foram:
- **Redução de Boilerplate:** Com o uso conjunto de Lombok e MapStruct, reduzi drasticamente a necessidade de escrever getters, setters e métodos de conversão de dados na mão, focando apenas na lógica do estoque.
- **Onboarding Simplificado:** Configurei o projeto utilizando o Gradle Wrapper e banco em memória H2, o que permite clonar o repositório e rodar a aplicação imediatamente com comandos simples, sem burocracia de banco local.