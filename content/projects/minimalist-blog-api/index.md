---
title: "Minimalist Blog API"
date: "2024-01-01"
featured: true
weight: 10
draft: false
description: "API RESTful desenvolvida em Node.js e TypeScript para o gerenciamento de autores, publicações e categorias de um blog."
imageCover: ""
imageCoverFallback: ""
categories: 
  - "Backend"
  - "API"
technologies:
  - "TypeScript"
  - "Node.js"
  - "Express"
  - "PostgreSQL"
  - "TypeORM"
liveDemo: "https://minimalist-blog-api-7hzq.onrender.com/api-docs/"
repositoryUrl: "https://github.com/emellybmuniz/minimalist-blog-api"

techReasons:
  TypeScript: "Evita erros durante o desenvolvimento ao adicionar tipagem estática ao JavaScript."
  Node.js: "Ambiente de execução rápido e leve que permite rodar JavaScript no servidor."
  Express: "Framework simples que ajuda a criar rotas HTTP e organizar os middlewares da aplicação."
  PostgreSQL: "Banco de dados relacional estável escolhido para guardar as informações com segurança."
  TypeORM: "ORM que facilita a conexão com o banco de dados usando classes e TypeScript através do padrão Data Mapper."

metadata:
  status: "Concluído"
  platform: "Backend API"
  role: "Desenvolvedora Backend"
  industry: "Tecnologia"
  
  challenges:
    - kicker: "Desafio 1: Segurança e Identificadores Únicos"
      title: "Transição de IDs sequenciais para UUID"
      description: "O uso de IDs numéricos simples (sequenciais) pode expor dados e a quantidade de registros do banco através da URL."
      resolution: "Foi criada uma migração para alterar os campos de chave primária para UUID nas tabelas de posts e categorias, atualizando também as chaves estrangeiras e a tabela de junção."
      
features:
  - "Cadastro e gerenciamento (CRUD) de usuários, posts e categorias"
  - "Filtro para buscar posts por palavras-chave contidas no título"
  - "Relacionamento Um-para-Muitos entre autores e postagens"
  - "Relacionamento Muitos-para-Muitos entre postagens e categorias"
  - "Carregamento de relações (Eager Loading) para trazer os dados vinculados nas consultas"
  - "Gerenciamento de banco de dados estruturado por meio de Migrations"
  - "Documentação interativa das rotas gerada com Swagger UI"
---

## Sobre o Projeto

Este projeto é uma API RESTful criada para gerenciar a estrutura interna de um blog minimalista. O principal objetivo do sistema é permitir o cadastro de usuários (autores), a criação de publicações e a classificação dessas postagens em diferentes categorias de forma organizada. 

A aplicação resolve o problema de armazenamento e estruturação de dados de conteúdo de forma relacional. Antes da criação da API, não existia uma separação clara das regras de negócio e das tabelas, o que dificultava tarefas simples como listar um artigo junto com o nome do seu autor ou associar várias categorias a uma mesma publicação.

## Arquitetura e Decisões Técnicas

O projeto foi dividido em camadas claras de desenvolvimento para deixar o código mais organizado e fácil de mexer:
* **Controllers:** Responsáveis apenas por receber as requisições HTTP e devolver as respostas para o cliente.
* **Services:** Onde fica guardada toda a lógica de negócio e as validações principais (como checar se o título ou o corpo do post foram preenchidos antes de salvar).
* **Entities:** Onde as tabelas do banco de dados são mapeadas utilizando classes e decoradores do TypeORM.

A persistência utiliza o banco de dados PostgreSQL junto com o TypeORM rodando sob o padrão Data Mapper. Essa escolha ajuda a isolar a forma como os dados são salvos das regras de negócio do blog. Os relacionamentos foram configurados diretamente pelo ORM, aplicando o carregamento explícito de relações (`relations`) para garantir que os dados aninhados (como o autor do post e suas categorias) venham formatados corretamente no JSON final sem a necessidade de escrever queries SQL manuais complexas.

{{< technologies >}}

## Desafios e Soluções de Engenharia

Durante o desenvolvimento do projeto, foi necessário ajustar a estrutura do banco de dados para melhorar a segurança e o controle dos dados armazenados.

{{< challenges >}}

## Impacto e Resultados

* **Garantia de Integridade:** Validações inseridas diretamente no código do serviço impedem a criação de registros incompletos no banco de dados.
* **Facilidade no Trabalho com Banco:** O uso de migrações (`migrations`) permite que a estrutura do banco seja recriada fielmente por qualquer desenvolvedor ou em ambientes de deploy como o Render.
* **Documentação Pronta para Uso:** A integração com o Swagger fornece uma interface visual acessível para que desenvolvedores frontend consumam e testem a API de forma imediata.