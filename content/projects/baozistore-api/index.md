---
title: "Baozi Store API"
date: "2026-10-05"
featured: false
weight: 10
draft: false
description: "API RESTful desenvolvida com Spring Boot para gerenciamento de clientes, produtos e pedidos no domínio de e-commerce, projetada com isolamento de ambientes e desacoplamento de persistência."
imageCover: "docs/baozistore_use_case.png"
imageCoverFallback: "To be confirmed"
categories: 
  - "Backend"
technologies:
  - "Java"
  - "Spring Boot"
  - "Spring Data JPA"
  - "H2 Database"
  - "MySQL"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/baozistore-api"

techReasons:
  Java: "Linguagem core utilizada na versão 21, permitindo o uso de recursos modernos de tipagem estática forte e concorrência estável."
  Spring Boot: "Utilizado na versão 4.0.6 para acelerar o ciclo de inicialização do sistema por meio de auto-configurações pré-definidas e gerenciamento nativo de dependências."
  Spring Data JPA: "Camada de abstração de dados que elimina código boilerplate para operações CRUD por meio da herança da interface JpaRepository."
  H2 Database: "Banco de dados relacional em memória integrado ao perfil padrão para agilizar os testes locais e o processo de onboarding de novos engenheiros."
  MySQL: "Engine de persistência relacional tradicional configurada para o ambiente persistente do sistema através de perfis isolados."

metadata:
  status: "Concluído"
  platform: "Backend API"
  role: "Desenvolvedora Backend"
  industry: "E-commerce"
  
  challenges:
    - kicker: "Desafio 1: Acoplamento de Entidades"
      title: "Evitando armadilhas de carregamento em cascata (Cascading Traps)"
      description: "Em ecossistemas de e-commerce, o relacionamento direto gerenciado por ORM entre Pedidos, Clientes e Produtos pode onerar transações do banco de dados devido a carregamentos EAGER/LAZY inadequados e travar evoluções de arquitetura."
      resolution: "Eliminou-se os relacionamentos gerenciados diretos do Hibernate (como @ManyToOne). A entidade Pedido foi modelada persistindo os identificadores clienteId e produtoId como atributos primitivos do tipo UUID, reduzindo o custo computacional de persistência e preparando a aplicação para uma transação simplificada rumo a microsserviços."
    - kicker: "Desafio 2: Configuração de Ambiente"
      title: "Mitigação de fricção no setup local de desenvolvimento"
      description: "A dependência obrigatória de um banco de dados externo persistente (como MySQL) durante o desenvolvimento local eleva a barreira de entrada e gera inconsistências entre ambientes."
      resolution: "Implementou-se o isolamento de infraestrutura utilizando Spring Profiles. O ambiente padrão executa de forma efêmera em memória com H2 e console ativo (/h2-console), enquanto o profile 'mysql' chaveia a persistência relacional externa via propriedades isoladas e Hibernate ddl-auto configurado como 'update'."
      
features:
  - "CRUD Completo de Clientes (Controle de cadastro e data de associação)"
  - "CRUD Completo de Produtos (Gestão de preço com precisão decimal e flag de estoque)"
  - "CRUD Completo de Pedidos associados por identificadores UUID estáveis"
  - "Isolamento completo de ambientes via Spring Profiles (Default vs MySQL)"
  - "Geração automática e atualização estrutural de schema via Hibernate DDL"
  - "Mapeamento funcional de casos de uso via documentação técnica em PlantUML"
---

## Sobre o Projeto

A **Baozi Store API** é uma solução de backend voltada para o domínio de e-commerce, projetada especificamente para centralizar e gerenciar as operações fundamentais de uma plataforma comercial: o cadastro de consumidores (Clientes), o controle de catálogo de mercadorias (Produtos) e a consolidação de transações de venda (Pedidos). 

Antes da implementação da API, os fluxos operacionais de e-commerce careciam de uma interface padronizada que garantisse a consistência do modelo de dados e o isolamento adequado de responsabilidades de negócio. A aplicação resolve esse problema expondo endpoints REST estritos, permitindo que interfaces de usuário ou serviços parceiros realizem integrações intuitivas e íntegras por meio de contratos HTTP previsíveis (`POST`, `GET`, `DELETE`).

## Arquitetura e Decisões Técnicas

O desenho arquitetural do sistema prioriza a manutenibilidade a longo prazo, o baixo acoplamento e a experiência do desenvolvedor (DevEx):

* **Arquitetura em Camadas (Layered Architecture):** A base de código está estritamente segregada nos pacotes `controller` (exposição de endpoints REST), `model` (definição de entidades de domínio e mapeamento objeto-relacional) e `repository` (abstração de acesso a dados), isolando as responsabilidades e aplicando injeção de dependência via construtor de forma nativa.
* **Persistência desacoplada:** Uso de interfaces limpas que estendem `JpaRepository`, eliminando a necessidade de escrita manual de consultas SQL para operações básicas e delegando ao Hibernate o gerenciamento do ciclo de vida das transações.
* **Estratégia de Identificadores Únicos Universais (UUID):** Todas as entidades utilizam `@UuidGenerator` nativo do Hibernate para a chave primária, mitigando vulnerabilidades de enumeração de IDs sequenciais expostos na URI e blindando o ecossistema contra colisões de dados em distribuições futuras.

{{< technologies >}}

## Desafios e Soluções de Engenharia

Ao longo do desenvolvimento do sistema, decisões de design foram tomadas para contornar gargalos tradicionais de mapeamento relacional e infraestrutura local:

{{< challenges >}}

## Impacto e Resultados

Não constam registros de métricas quantitativas de throughput (solicitações/segundo), cobertura numérica de testes ou benchmarks de latência nos artefatos locais do repositório. Contudo, o projeto entrega resultados práticos e qualitativos mensuráveis para a operação e engenharia:

* **Onboarding com Zero Configuração:** A união do Maven Wrapper (`mvnw`) incluído na raiz com as propriedades do banco de dados em memória padrão permite a compilação e execução imediata do projeto com o comando único `mvn spring-boot:run`. Isso neutraliza problemas clássicos de configuração local de banco em novas máquinas de desenvolvimento.
* **Confiabilidade Operacional Empírica:** Logs estruturados de execução e evidências de testes manuais via clientes REST (Postman/Insomnia) atestam o comportamento ideal das rotas, validando os códigos de status de retorno HTTP (200 OK para listagens e buscas por ID consistentes e 204 No Content para fluxos de remoção de dados).
* **Paridade entre Requisitos e Código:** O mapeamento funcional do sistema está documentado de forma viva no repositório através de arquivos PlantUML (`docs/use-case-baozistore.puml`), assegurando que as permissões operacionais do usuário correspondam de maneira fidedigna aos controladores e rotas implementados no framework.