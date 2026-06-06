---
title: "School Management API with FastAPI"
date: "2025-07-05"
featured: true
weight: 10
draft: false
description: "A resilient, high-performance RESTful API built to centralize the management of students, courses, and enrollments in educational institutions."
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
  Python: "Chosen for its robustness, clean readability, and mature ecosystem tailored for web development and data handling."
  FastAPI: "A high-performance framework built on top of Starlette and Pydantic, selected to maximize request throughput and deliver automated OpenAPI documentation."
  Docker: "Utilized to guarantee seamless application packaging, eliminating environmental inconsistencies across development, testing, and production."
  SQLAlchemy: "The adopted ORM to isolate the persistence layer into a strictly object-oriented design, facilitating complex queries and entity relationships."
  Pydantic: "Responsible for static data parsing and validation, blocking malformed requests at the application's edge before hitting the database."
  SQLite: "A local, file-based database ideal for rapid prototyping and integration testing, featuring automated provisioning on the API's first boot run."

metadata:
  status: "Completed"
  platform: "Backend / RESTful API"
  role: "Software Engineer / DevOps Student"
  industry: "Education / EdTech"
  
  challenges:
    - kicker: "Challenge 1: Environment Inconsistency"
      title: "The classic 'it works on my machine' dilemma"
      description: "Ensuring the application behaved identically across any host operating system, bypassing global Python dependency conflicts."
      resolution: "Developed a multi-stage containerization strategy using a Python Slim-based Dockerfile alongside dependency isolation with Docker Compose."
    - kicker: "Challenge 2: Rigid Validation & Data Integrity"
      title: "Preventing corrupted data injection and payload leaks"
      description: "Avoiding the persistence of malformed academic records (e.g., invalid emails) and preventing internal database IDs from being exposed directly."
      resolution: "Implemented a robust Pydantic Schema layer leveraging native types like EmailStr, ensuring strict separation between business rules and ORM physical models."

features:
  - "Clean architecture with strict Separation of Concerns (Routes, Models, and Schemas)."
  - "Auto-generated interactive API documentation via Swagger UI (/docs)."
  - "Continuous Integration (CI) pipeline via GitHub Workflows for automated Docker image builds."
  - "Runtime data validation enforced by Pydantic."
  - "Self-provisioning SQLite database state isolated locally."
---

## About the Project

Academic data management requires highly efficient data pipelines to absorb seasonal traffic spikes, such as during enrollment periods and final grade releases. This **School Management API** was engineered for the EdTech ecosystem to centralize the critical core operations of student tracking, course availability, and enrollment fulfillment.

Originally developed during the *DevOps Immersion - Alura Google Cloud*, the application addresses the challenge of structuralizing and digitizing education workflows. Moving beyond just exposing working endpoints, the project focuses heavily on implementing a modern engineering workflow backed by solid maintainability, living documentation, and infrastructure predictability.

## Architecture and Technical Decisions

The backend architecture adheres strictly to **RESTful** design patterns. To maintain long-term code maintainability as the service scales, the project enforces a modular **Separation of Concerns** layout:

* **`app.py`**: The centralized entry point that initializes the FastAPI application instance and registers the route boundaries.
* **`routers/`**: A domain-driven directory containing decoupled business modules handling HTTP traffic (`alunos.py`, `cursos.py`, `matriculas.py`).
* **`models.py`**: A specialized layer handling physical database mappings, schema definitions, and SQLAlchemy entity relationships (`relationship`).
* **`schemas.py`**: Houses the Pydantic structural validation rules, safeguarding endpoints against unexpected or corrupted payloads.

{{< technologies >}}

## Engineering Challenges and Resolutions

Throughout the development and deployment lifecycles, critical engineering hurdles were tackled to guarantee software resilience:

{{< challenges >}}

### Technical Implementation Deep Dive

1. **Robust Validation Layer:** By calling Pydantic Schemas (such as the `Aluno` and `Curso` model boundaries), the API guarantees that out-of-spec requests immediately yield a `422 Unprocessable Entity` response at the boundary, avoiding unnecessary resource allocation.
2. **Intelligent ORM Querying:** Within the enrollment engine (`routers/matriculas.py`), leveraging SQLAlchemy's native relationships allowed for efficient reverse lookups (e.g., pulling all students tied to a specific course code), abstracting complex SQL joins into clean Python object references.

## Impact and Results

Standardizing and containerizing the architecture drove substantial gains in developer experience and operational reliability:

* **Zero-Friction DX (Developer Experience):** Onboarding new engineers takes under 2 minutes using a single `docker compose up` command, mitigating localized virtual environment friction.
* **100% Living Documentation Coverage:** Thanks to the automatic Swagger UI generation at `/docs`, there is zero overhead in updating external testing suites (e.g., Postman), allowing seamless testing straight from the browser.
* **Dependable CI Pipelines:** The GitHub Actions integration runs automated Docker image builds on every push to the `main` branch, verifying codebase health and shipping stable release artifacts ready for cloud deployments.