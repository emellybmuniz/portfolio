---
title: "API de Gestão Escolar com FastAPI"
date: "2025-07-05" 
featured: true
weight: 10
draft: false
description: "API RESTful resiliente e de alta performance desenvolvida para centralizar o gerenciamento de alunos, cursos e matrículas em instituições de ensino."
imageCover: "api-gestao-escolar.webp"
imageCoverFallback: "api-gestao-escolar.png"
categories: 
  - "Backend"
technologies:
  - "Python"
  - "FastAPI"
  - "Docker"
  - "SQLAlchemy"
  - "Pydantic"
  - "SQLite"
liveDemo: ""
repositoryUrl: "https://github.com/emellybmuniz/api-gestao-escolar-fastapi"

techReasons:
  Python: "Linguagem escolhida pela sua robustez, legibilidade e ecossistema maduro para o desenvolvimento web e manipulação de dados."
  FastAPI: "Framework de alto desempenho baseado em Starlette e Pydantic, selecionado para maximizar o throughput de requisições e fornecer documentação OpenAPI automática."
  Docker: "Utilizado para garantir o empacotamento completo da aplicação, eliminando a inconsistência entre os ambientes de desenvolvimento, teste e produção."
  SQLAlchemy: "ORM adotado para isolar a camada de persistência em uma abordagem estritamente orientada a objetos, facilitando consultas complexas e relacionamentos entre entidades."
  Pydantic: "Responsável pela análise e validação estática de dados, bloqueando requisições malformadas na borda da aplicação antes de onerarem o banco de dados."
  SQLite: "Banco de dados local em arquivo, ideal para prototipagem rápida e testes de integração com provisionamento automatizado no primeiro ciclo de execução da API."

metadata:
  status: "Concluído"
  platform: "Backend / API RESTful"
  role: "Software Engineer / DevOps Student"
  industry: "Educação / EdTech"
  
  challenges:
    - kicker: "Desafio 1: Inconsistência de Ambientes"
      title: "O clássico 'na minha máquina funciona'"
      description: "Garantir que a aplicação se comportasse de forma idêntica em qualquer sistema operacional, contornando conflitos de dependências globais de Python."
      resolution: "Desenvolvimento de uma estratégia de conteinerização multiestágio com Dockerfile baseado em Python Slim e isolamento de dependências via Docker Compose."
    - kicker: "Desafio 2: Validação Rígida e Integridade de Dados"
      title: "Prevenção de vazamento de dados e payloads inválidos"
      description: "Evitar a inserção de dados escolares corrompidos, inconsistentes (ex: e-mails inválidos) ou vazamento de IDs internos expostos diretamente do banco de dados."
      resolution: "Implementação de uma camada de Schemas baseados em Pydantic utilizando tipos nativos como EmailStr e separação estrita das regras de negócio dos modelos físicos do ORM."

features:
  - "Arquitetura limpa com separação estrita de responsabilidades (Rotas, Modelos e Schemas)."
  - "Documentação interativa auto-gerada com Swagger UI (/docs)."
  - "Esteira de Integração Contínua (CI) via GitHub Workflows automatizada para build da imagem Docker."
  - "Validação de dados em tempo de execução via Pydantic."
  - "Configurações automáticas e persistência de dados em SQLite isoladas localmente."
---

## Sobre o Projeto

O gerenciamento de dados acadêmicos exige fluxos eficientes para suportar picos sazonais de acessos — como nos períodos de matrículas e encerramento de ciclos letivos. Esta **API de Gestão Escolar** foi projetada para atuar no ecossistema educacional (EdTech), centralizando as operações fundamentais de controle de alunos, oferta de cursos e efetivação de matrículas. 

Desenvolvida originalmente no contexto da *Imersão DevOps - Alura Google Cloud*, a aplicação resolve de ponta a ponta o desafio de digitalizar registros educacionais de forma estruturada. Mais do que construir endpoints funcionais, o foco do projeto residiu em estabelecer um ambiente de engenharia moderno, com alta manutenibilidade, documentação viva e previsibilidade de infraestrutura.

## Arquitetura e Decisões Técnicas

A fundação do backend baseia-se nos princípios estritos do padrão arquitetural **RESTful**. Para conferir manutenibilidade à base de código à medida que a plataforma escala, o projeto adota o princípio de **Separação de Responsabilidades (Separation of Concerns)**, organizando-se de forma modular:

* **`app.py`**: O ponto de entrada centralizado da aplicação que instancia o ecossistema FastAPI e unifica os roteadores.
* **`routers/`**: Diretório responsável por modularizar os pontos de acesso HTTP isolando os domínios de negócio (`alunos.py`, `cursos.py`, `matriculas.py`).
* **`models.py`**: Camada que lida única e exclusivamente com as entidades, mapeamento de tabelas físicas e relacionamentos (`relationship`) do banco de dados SQLAlchemy.
* **`schemas.py`**: Contém as regras de validação estrutural via Pydantic, blindando os endpoints contra tipos de dados inesperados.

{{< technologies >}}

## Desafios e Soluções de Engenharia

Ao longo do ciclo de desenvolvimento e implantação da API, contornamos problemas críticos voltados à garantia da estabilidade e robustez do software:

{{< challenges >}}

### Detalhes das Soluções Aplicadas

1. **Camada de Validação Robusta:** Ao utilizar os Schemas do Pydantic (como as classes `Aluno` e `Curso`), a API assegura que entradas fora do padrão (ex: strings vazias ou e-mails fora de formatação) disparem um erro `422 Unprocessable Entity` de forma nativa e imediata, sem sequer atingir o banco de dados.
2. **Consultas Inteligentes com ORM:** No módulo de matrículas (`routers/matriculas.py`), o aproveitamento dos relacionamentos nativos do SQLAlchemy permitiu realizar buscas reversas eficientes (como recuperar todos os alunos matriculados em um curso específico a partir do código deste), abstraindo junções complexas de SQL para lógica de objetos em Python.

## Impacto e Resultados

A reestruturação e conteinerização do projeto resultaram em melhorias significativas na experiência de engenharia e na confiabilidade do serviço:

* **Instalação Zero (Zero-Friction DX):** Um novo desenvolvedor consegue colocar a API em operação local em menos de 2 minutos utilizando apenas o comando `docker compose up`, eliminando completamente o tempo gasto configurando dependências locais.
* **Documentação Viva de 100% dos Endpoints:** Com a geração automática de Swagger na rota `/docs`, eliminou-se a necessidade de manter coleções externas atualizadas manualmente (ex: Postman), centralizando testes funcionais no próprio navegador.
* **Pipelines de CI Confiáveis:** A integração com o GitHub Actions garante o build automático da imagem Docker a cada novo *push* na branch `main`, validando a integridade do código e preparando o artefato para ambientes de nuvem contínuos.