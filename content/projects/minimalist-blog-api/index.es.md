---
title: "Minimalist Blog API"
date: "2024-01-01"
featured: true
weight: 10
draft: false
description: "API RESTful desarrollada en Node.js y TypeScript para la gestión de autores, publicaciones y categorías de un blog."
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
  TypeScript: "Evita errores durante el desarrollo al añadir tipado estático a JavaScript."
  Node.js: "Entorno de ejecución rápido y ligero que permite ejecutar JavaScript en el servidor."
  Express: "Framework sencillo utilizado para configurar rutas HTTP y organizar los middlewares de la aplicación."
  PostgreSQL: "Base de datos relacional estable elegida para guardar la información de forma segura."
  TypeORM: "ORM que facilita la conexión con la base de datos usando clases y TypeScript a través del patrón Data Mapper."

metadata:
  status: "Concluido"
  platform: "Backend API"
  role: "Desenvolvedora Backend"
  industry: "Tecnología"
  
  challenges:
    - kicker: "Desafío 1: Seguridad e Identificadores Únicos"
      title: "Transición de IDs secuenciales a UUID"
      description: "El uso de IDs numéricos simples (secuenciales) puede exponer datos y el volumen de registros de la base de datos a través de la URL."
      resolution: "Se creó una migración para cambiar los campos de clave primaria a UUID en las tablas de posts y categorías, actualizando también las claves foráneas y la tabla de unión."
      
features:
  - "Gestión completa (CRUD) de usuarios, posts y categorías"
  - "Filtro de búsqueda para encontrar posts por palabras clave en el título"
  - "Relación Uno a Muchos entre autores y publicaciones"
  - "Relación Muchos a Muchos entre publicaciones y categorías"
  - "Carga de relaciones (Eager Loading) para incluir datos vinculados en las consultas"
  - "Gestión de base de datos estructurada mediante Migrations"
  - "Documentación interactiva de rutas generada con Swagger UI"
---

## Sobre el Proyecto

Este proyecto es una API RESTful creada para gestionar la estructura interna de un blog minimalista. El objetivo principal del sistema es permitir el registro de usuarios (autores), la creación de publicaciones y la clasificación de estos artículos en diferentes categorías de forma organizada.

La aplicación resuelve el problema de almacenamiento y estructuración de datos de contenido de forma relacional. Antes de la creación de la API, no existía una separación clara de las reglas de negocio y las tablas, lo que dificultaba tareas sencillas como listar un artículo junto con el nombre de su autor o asociar varias categorías a una misma publicación.

## Arquitectura y Decisiones Técnicas

El proyecto se dividió en capas claras de desarrollo para mantener el código organizado y fácil de modificar:
* **Controllers:** Responsables únicamente de recibir las peticiones HTTP y devolver las respuestas al cliente.
* **Services:** Donde se guarda toda la lógica de negocio y las validaciones principales (como comprobar si el título o el cuerpo del post están completos antes de guardar).
* **Entities:** Capa donde se mapean las tablas de la base de datos utilizando clases y decoradores de TypeORM.

La persistencia utiliza la base de datos PostgreSQL junto con TypeORM bajo el patrón Data Mapper. Esta elección ayuda a aislar la forma en que se salvan los datos de las reglas de negocio del blog. Las relaciones se configuraron directamente a través del ORM, aplicando la carga explícita de relaciones (`relations`) para asegurar que los datos anidados (como el autor del post y sus categorías) se devuelvan formateados correctamente en el JSON final sin necesidad de escribir complejas consultas SQL manuales.

{{< technologies >}}

## Desafíos y Soluciones de Ingeniería

Durante el desarrollo del proyecto, fue necesario ajustar la estructura de la base de datos para mejorar la seguridad y el control de la información almacenada.

{{< challenges >}}

## Impacto y Resultados

* **Garantía de Integridad:** Las validaciones integradas directamente en el código del servicio impiden la creación de registros incompletos en la base de datos.
* **Flujo de Trabajo Sencillo con la Base de Datos:** El uso de migraciones (`migrations`) permite que cualquier desarrollador o entorno de despliegue como Render pueda recrear fielmente la estructura del banco de datos.
* **Documentación Lista para su Uso:** La integración con Swagger proporciona una interfaz visual accesible para que los desarrolladores frontend consuman y prueben la API de forma inmediata.