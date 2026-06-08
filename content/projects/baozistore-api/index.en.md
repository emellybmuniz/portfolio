---
title: Baozi Store API
date: 2026-05-10
featured: false
weight: 10
draft: false
description: A RESTful API for client, product, and order management in the e-commerce domain, designed with environment isolation and decoupled data entities using Spring Boot.
categories:
  - Backend
technologies:
  - Java
  - Spring Boot
  - Spring Data JPA
  - H2 Database
  - MySQL
liveDemo: '#'
repositoryUrl: https://github.com/emellybmuniz/baozistore-api
metadata:
  status: Completed
  platform: Backend API
  role: Backend Developer
  industry: E-commerce
  challenges:
    - kicker: 'Challenge 1: Entity Coupling'
      title: Preventing relational cascading load traps
      description: In typical e-commerce architectures, direct ORM entity relationships between Orders, Clients, and Products can slow down database transactions due to improper EAGER/LAZY configurations and restrain future database evolution.
      resolution: Removed direct Hibernate-managed object associations (such as @ManyToOne). The Pedido entity was redesigned to store clientId and produtoId fields as raw UUID types, reducing persistence runtime costs and streamlining future microservices partitioning pathways.
    - kicker: 'Challenge 2: Workspace Setup'
      title: Eliminating local database dependency friction
      description: Requiring an external persistent database engine like MySQL configured during initial environment alignment slows down onboarding and generates transient local mismatch flaws.
      resolution: Leveraged infrastructure segregation through Spring Profiles. The default runtime initiates instantly in-memory via H2 with an administrative console available at /h2-console, while external persistent communication switches smoothly via standalone file variables with Hibernate ddl-auto configured to 'update'.
features:
  - Comprehensive CRUD for Clients (Tracking names and registration timestamps)
  - Comprehensive CRUD for Products (Managing precision decimal indexing and stock availability status)
  - Comprehensive CRUD for Orders mapped cleanly using universal identifier keys (UUID)
  - Dynamic database infrastructure isolation achieved via Spring Engine Profiles
  - Automated structural relational schema propagation managed via Hibernate DDL
  - Functional technical scope mapped cleanly using integrated PlantUML use-case flows
techReasons:
  Java: Core programming language utilized in version 21, unlocking modern static typing features and stable concurrency primitives.
  Spring Boot: Deployed at version 4.0.6 to accelerate startup cycles through autoconfiguration presets and native dependency management injection.
  Spring Data JPA: Data layer abstraction layer chosen to eliminate boilerplate CRUD mechanisms via clean inheritance of the JpaRepository interface.
  H2 Database: Integrated in-memory engine mapped to the default application profile to speed up local verification and minimize developer configuration friction.
  MySQL: Traditional persistent relational store configured for staging or persistent deployments through isolated standalone configuration files.
---

## About the Project

The **Baozi Store API** is a domain-focused e-commerce backend service architected to centralize and process the vital operational pillars of a digital storefront: client registration management (Clientes), catalog asset tracking (Produtos), and commercial transaction checking (Pedidos). 

Prior to the system's deployment, typical e-commerce transaction workflows lacked standardized interface paradigms to guarantee data persistence integrity and isolated business constraints. The application remediates this issue by exposing strict RESTful web endpoints, ensuring that any external frontend client or integration service can perform predictable data mutations securely via standard HTTP verbs (`POST`, `GET`, `DELETE`).

## Architecture and Technical Decisions

The codebase design puts long-term maintainability, component separation, and Developer Experience (DevEx) at the forefront:

* **Layered Architecture:** The structural layouts partition domain files across isolated packages: `controller` (REST endpoint configuration), `model` (domain entities and ORM definitions), and `repository` (data mapping abstraction). This approach enforces single-responsibility patterns and leverages native constructor-based dependency injection.
* **Decoupled Persistence Processing:** Relying on standard `JpaRepository` extension abstractions eliminates the need to manually author relational SQL scripts for basic queries, delegating transactional entity mapping strictly to the underlying framework layer.
* **Universal Unique Identifier Strategy (UUID):** Primary keys are backed by Hibernate's native `@UuidGenerator`, protecting endpoints from sequential numerical enumeration exploits and securing transaction datasets from multi-node replication data collisions.

{{< technologies >}}

## Engineering Challenges and Solutions

Throughout implementation, strategic design adjustments were integrated to overcome standard database mapping overheads and deployment friction:

{{< challenges >}}

## Impact and Results

No quantitative throughput metrics (requests per second), explicit code coverage percentages, or algorithmic execution benchmarks are present inside the repository's local documentation artifacts. However, the codebase delivers tangible, measurable qualitative results for developer productivity and systems operations:

* **Zero-Configuration Developer Onboarding:** Incorporating the Maven Wrapper (`mvnw`) along with the preconfigured default in-memory database allows engineers to compile and boot the workspace instantaneously using a single command: `mvn spring-boot:run`. This neutralizes structural drift issues stemming from misconfigured local database instances.
* **Empirical Operational Validation:** Structured runtime application outputs and comprehensive test records via API clients (Postman/Insomnia) confirm reliable error handling and path behaviors, producing expected HTTP status codes (200 OK for valid entity queries and 204 No Content for successful deletion workflows).
* **Requirement-to-Code Parity:** Use cases are dynamically documented via unified text-to-graphics workflows within the project root using PlantUML files (`docs/use-case-baozistore.puml`). This guarantees that technical functional boundaries align exactly with the controllers and web routes configured across the Spring runtime.
