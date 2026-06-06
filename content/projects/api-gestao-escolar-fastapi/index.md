---
title: "API de Gestão Escolar com FastAPI"
date: 2025-06-01
featured: false
weight: 1
draft: false
description: "API RESTful desenvolvida para a gestão integrada de alunos, cursos e matrículas em instituições de ensino. "
imageCover: "api-gestao-escolar-fastapi.webp"
imageCoverFallback: "api-gestao-escolar-fastapi.png"
categories: 
  - backend
  - api
technologies:
  - FastAPI
  - Python
  - QLAlchemy
  - Pydantic
  - Uvicorn
  - Docker
  - SQLite
liveDemo: "#"
repositoryUrl: "#"

techReasons:
  FastAPI: "Framework escolhido por sua altíssima performance, suporte nativo a assincronismo e geração automática de documentação (Swagger)."
  Python: "Linguagem central pelo ecossistema robusto de bibliotecas de manipulação de dados e velocidade de prototipação."

metadata:
  status: "Concluído"
  platform: "Backend API"
  role: "Desenvolvedora Backend"
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

O sistema foi arquitetado em Python utilizando o framework FastAPI para maximizar o throughput de requisições, algo essencial em períodos de pico como épocas de matrículas e lançamento de notas. 

O design do backend segue princípios RESTful estritos, com rotas bem definidas para operações CRUD envolvendo alunos, professores, disciplinas e boletins. Todo o fluxo de dados é validado de forma estática garantindo que entradas malformadas sejam bloqueadas instantaneamente, sem onerar o banco de dados.

## O Que o Projeto Soluciona:
O sistema digitaliza e centraliza as operações fundamentais de uma escola, fornecendo endpoints documentados interativamente para fácil integração com interfaces de usuário ou outros serviços. Do ponto de vista de infraestrutura e DevOps, o projeto adota a conteinerização para mitigar o clássico problema de inconsistência de ambientes, assegurando que o código execute da mesma maneira tanto no ambiente de desenvolvimento quanto em produção.

## Arquitetura e Decisões Técnicas
O sistema foi arquitetado em Python utilizando o framework FastAPI para maximizar o throughput de requisições, algo essencial em períodos de pico como épocas de matrículas e lançamento de notas. 

O design do backend segue princípios RESTful estritos, com rotas bem definidas para operações CRUD envolvendo alunos, professores, disciplinas e boletins. Todo o fluxo de dados é validado de forma estática garantindo que entradas malformadas sejam bloqueadas instantaneamente, sem onerar o banco de dados.

## Impacto e Resultados
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.



**Stack Tecnológico:**
*   **Linguagem & Framework:** Python 3.10+ com FastAPI, priorizando alta performance e facilidade na construção de rotas.
*   **Engenharia de Dados (ORM e Validação):** SQLAlchemy para modelagem e comunicação com o banco de dados SQLite, em conjunto com Pydantic para a validação robusta dos esquemas de dados.
*   **DevOps & Infraestrutura:** Docker, utilizado para empacotar a aplicação e suas dependências.

**Arquitetura e Padrões de Código:**
O projeto foi estruturado com foco em manutenibilidade e separação de responsabilidades (Clean Code), um diferencial importante para o trabalho em equipe:
*   `routers/`: Diretório que modulariza as rotas da aplicação, isolando os domínios de negócio (como alunos, cursos e matrículas).
*   `models.py`: Arquivo dedicado exclusivamente aos modelos do banco de dados.
*   `schemas.py`: Centraliza as regras de validação de dados via Pydantic, garantindo que a API receba e retorne apenas formatos válidos.
*   `database.py`: Isola as configurações e a persistência do banco de dados (gerado automaticamente no primeiro uso).


## Metadados do Projeto

    Indústria: Educação / EdTech.
    Plataforma: Backend / API RESTful.
    Papel no Projeto: A confirmar (Desenvolvido no contexto da "Imersão DevOps - Alura Google Cloud").
    Status: A confirmar.
    Tecnologias: Python 3.10+, FastAPI, SQLAlchemy, Pydantic, Uvicorn, Docker, SQLite.
    Motivações Técnicas: Garantir um ambiente de desenvolvimento e produção consistente através de containerização.
    Repositório: Código-fonte via GitHub Archive.
    Demonstração: Local via interface interativa Swagger (/docs).

## Visão Geral e Impacto
Este projeto consiste em uma API RESTful projetada para o ecossistema educacional, focada no gerenciamento centralizado de alunos, cursos e matrículas. Desenvolvido como parte do programa "Imersão DevOps - Alura Google Cloud", o sistema resolve o desafio de manter registros educacionais estruturados, oferecendo uma interface de comunicação programática clara e eficiente. O projeto destaca-se pela preocupação com a consistência de ambientes, utilizando Docker para padronizar a execução tanto em desenvolvimento quanto em produção.

Decisões Arquiteturais e de Engenharia
Stack Tecnológico Focado em Performance e Validação
A escolha do FastAPI como framework principal reflete uma priorização de alta performance e facilidade de documentação. Para garantir a integridade e a segurança dos dados trafegados, a aplicação utiliza Pydantic (schemas.py) para validação rigorosa de entrada e saída.
A camada de persistência de dados é gerenciada através do SQLAlchemy (ORM), garantindo que as regras de negócio interajam com o banco de dados de maneira orientada a objetos (models.py). Como solução de armazenamento local e sem atrito para testes, foi adotado o SQLite (escola.db), configurado para provisionamento automático na primeira execução do sistema.
Separação de Responsabilidades (Separation of Concerns)
A base de código foi estruturada para garantir escalabilidade e fácil manutenção:

    app.py: Ponto de entrada central da aplicação.
    routers/: O roteamento foi modularizado por domínio de negócio, isolando os fluxos de alunos, cursos e matrículas em arquivos distintos.
    Modelos e Schemas: A separação estrita entre representação de banco de dados (models.py) e validação de requisições (schemas.py) evita vazamento de dados sensíveis e melhora a clareza do código.

Experiência do Desenvolvedor (DX) e Infraestrutura
Para simplificar a integração de novos desenvolvedores, a API disponibiliza uma interface interativa gerada automaticamente (disponível na rota /docs), permitindo testes imediatos de todos os endpoints sem a necessidade de clientes externos como Postman. Além disso, a presença do Docker e de um arquivo requirements.txt assegura que o processo de configuração do ambiente virtual e instalação de dependências seja padronizado e previsível.