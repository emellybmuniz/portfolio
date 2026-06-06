---
title: "API de Gestión Escolar con FastAPI"
date: "2025-07-05"
featured: true
weight: 10
draft: false
description: "API RESTful resiliente y de alto rendimiento diseñada para centralizar la gestión de alumnos, cursos y matrículas en instituciones educativas."
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
  Python: "Lenguaje seleccionado por su robustez, legibilidad limpia y un ecosistema maduro ideal para el desarrollo web y manipulación de datos."
  FastAPI: "Framework de alto rendimiento basado en Starlette y Pydantic, elegido para maximizar el procesamiento de peticiones y generar documentación OpenAPI automática."
  Docker: "Utilizado para garantizar el empaquetado completo de la aplicación, eliminando inconsistencias entre entornos de desarrollo, pruebas y producción."
  SQLAlchemy: "ORM adoptado para aislar la capa de persistencia en un enfoque puramente orientado a objetos, facilitando consultas complejas y relaciones entre entidades."
  Pydantic: "Responsable del análisis y la validación estática de datos, bloqueando solicitudes corruptas en el borde de la aplicación antes de sobrecargar la base de datos."
  SQLite: "Base de datos local basada en archivos, ideal para prototipos rápidos y pruebas de integración con aprovisionamiento automático desde la primera ejecución."

metadata:
  status: "Completado"
  platform: "Backend / API RESTful"
  role: "Software Engineer / DevOps Student"
  industry: "Educación / EdTech"
  
  challenges:
    - kicker: "Desafío 1: Inconsistencia de Entornos"
      title: "El dilema clásico de 'en mi máquina funciona'"
      description: "Garantizar que la aplicación se comportara exactamente igual en cualquier sistema operativo, evitando conflictos de dependencias globales de Python."
      resolution: "Desarrollo de una estrategia de contenedorización multi-etapa con Dockerfile basado en Python Slim junto con el aislamiento de dependencias mediante Docker Compose."
    - kicker: "Desafío 2: Validación Estricta e Integridad de Datos"
      title: "Prevención de inyección de datos corruptos y filtración de payloads"
      description: "Evitar el almacenamiento de registros académicos no válidos (por ejemplo, correos electrónicos incorrectos) y prevenir la exposición directa de IDs internos de la base de datos."
      resolution: "Implementación de una capa de esquemas basada en Pydantic utilizando tipos nativos como EmailStr, asegurando una separación estricta entre las reglas de negocio y los modelos físicos del ORM."

features:
  - "Arquitectura limpia con separación estricta de responsabilidades (Rutas, Modelos y Esquemas)."
  - "Documentación interactiva autogenerada mediante Swagger UI (/docs)."
  - "Pipeline de Integración Continua (CI) mediante GitHub Workflows para la construcción automatizada de imágenes Docker."
  - "Validación de datos en tiempo de ejecución gestionada por Pydantic."
  - "Estado de base de datos SQLite con aprovisionamiento automático y aislamiento local."
---

## Sobre el Proyecto

La gestión de datos académicos requiere flujos de información altamente eficientes para absorber picos estacionales de tráfico, especialmente durante los períodos de inscripción y la publicación de calificaciones finales. Esta **API de Gestión Escolar** fue diseñada para el ecosistema EdTech con el fin de centralizar las operaciones esenciales de seguimiento de alumnos, disponibilidad de cursos y procesamiento de matrículas.

Desarrollada originalmente en el marco de la *Inmersión DevOps - Alura Google Cloud*, la aplicación resuelve el reto de estructurar y digitalizar los flujos educativos. Más allá de exponer endpoints funcionales, el proyecto se enfoca en establecer un flujo de trabajo de ingeniería moderno respaldado por una alta mantenibilidad, documentación viva y previsibilidad de la infraestructura.

## Arquitectura y Decisiones Técnicas

La arquitectura del backend se alinea estrictamente con los patrones de diseño **RESTful**. Para mantener la mantenibilidad del código a largo plazo a medida que el servicio escala, el proyecto impone un diseño modular basado en la **Separación de Responsabilidades (Separation of Concerns)**:

* **`app.py`**: El punto de entrada centralizado que inicializa la aplicación FastAPI y registra las rutas del sistema.
* **`routers/`**: Directorio modular orientado a dominios que gestiona el tráfico HTTP de forma aislada (`alunos.py`, `cursos.py`, `matriculas.py`).
* **`models.py`**: Capa especializada en el mapeo físico de la base de datos, definición de tablas y relaciones de entidades de SQLAlchemy (`relationship`).
* **`schemas.py`**: Alberga las reglas de validación estructural de Pydantic, protegiendo los endpoints contra payloads inesperados o corruptos.

{{< technologies >}}

## Desafíos de Ingeniería y Soluciones

A lo largo de los ciclos de desarrollo y despliegue, se abordaron obstáculos críticos de ingeniería para garantizar la resiliencia del software:

{{< challenges >}}

### Inmersión en la Implementación Técnica

1. **Capa de Validación Robusta:** Al invocar los esquemas de Pydantic (como los modelos `Aluno` y `Curso`), la API garantiza que las peticiones que no cumplan con las especificaciones devuelvan inmediatamente una respuesta `422 Unprocessable Entity` en el borde, evitando la asignación innecesaria de recursos en el servidor.
2. **Consultas ORM Inteligentes:** Dentro del motor de matrículas (`routers/matriculas.py`), el aprovechamiento de las relaciones nativas de SQLAlchemy permitió realizar búsquedas inversas eficientes (por ejemplo, obtener todos los estudiantes vinculados al código de un curso específico), abstrayendo uniones complejas de SQL en referencias limpias de objetos de Python.

## Impacto y Resultados

La estandarización y contenedorización de la arquitectura permitieron obtener mejoras sustanciales en la experiencia del desarrollador y la fiabilidad operativa:

* **Experiencia del Desarrollador sin Fricciones (Zero-Friction DX):** La incorporación de nuevos ingenieros toma menos de 2 minutos utilizando un único comando `docker compose up`, mitigando fricciones con entornos virtuales locales.
* **Cobertura total de Documentación Viva:** Gracias a la generación automática de Swagger UI en `/docs`, no hay sobrecarga en la actualización de colecciones de prueba externas (como Postman), permitiendo realizar pruebas funcionales directamente desde el navegador.
* **Pipelines de CI Confiables:** La integración con GitHub Actions ejecuta construcciones automatizadas de imágenes Docker con cada push a la rama `main`, verificando la salud del código y generando artefactos estables listos para despliegues en la nube.