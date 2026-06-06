---
title: "Conecta Cosmos"
date: "2026-06-05"
featured: true
weight: 10
draft: false
description: "Aplicación web interactiva y educativa para explorar el Sistema Solar y validar conocimientos con un quiz dinámico, desarrollada por mí a solas."
imageCover: "conecta-cosmos.webp"
imageCoverFallback: "assets/images/background.png"
categories: 
  - "Frontend"
technologies:
  - "React"
  - "TypeScript"
  - "Tailwind CSS"
  - "Vite"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/conecta-cosmos"

techReasons:
  React 19: "Elegí React 19 para construir una interfaz declarativa, lo que me permitió modularizar los componentes visuales del Sistema Solar y controlar el estado del quiz de forma simple."
  TypeScript: "Lo agregué para garantizar el tipado estático en los modelos de datos de los planetas y las preguntas, evitándome errores de propiedades indefinidas en tiempo de ejecución."
  Tailwind CSS: "Fue el framework que elegí para hacer el diseño responsivo rápidamente, creando efectos visuales del espacio sin necesidad de llenar el proyecto con archivos CSS separados."
  Vite: "Lo adopté como mi herramienta de construcción para evitar configuraciones complejas. Me dio un refrescado rápido en desarrollo y generó archivos ligeros para producción."

metadata:
  status: "En desarrollo"
  platform: "Web"
  role: "Desarrolladora Frontend Solo"
  industry: "Educación / Tecnología"
  
  challenges:
    - kicker: "Desafío 1: Gestión y Estructuración de Datos"
      title: "Organización de la información de los planetas y del quiz"
      description: "Al principio, me di cuenta de que meter muchos datos de los planetas y preguntas directamente en los componentes de pantalla iba a dejar mi código desordenado y difícil de mantener."
      resolution: "Yo lo resolví separando y tipando todos los datos en archivos '.ts' dentro de la carpeta data, manteniendo mis componentes limpios y enfocados solo en renderizar la interfaz."
      
features:
  - "Sistema Solar interactivo con efectos visuales al pasar el cursor (hover)"
  - "Muestra de datos astronómicos detallados al seleccionar un cuerpo celeste"
  - "Cuestionario de opción múltiple integrado para evaluar el aprendizaje del usuario"
  - "Estructura moderna basada en componentes reutilizables y fuertemente tipados"
---

## Sobre el Proyecto

**Conecta Cosmos** es una aplicación web educativa que yo misma ideé y desarrollé sola para transformar el aprendizaje del Sistema Solar en una experiencia visual e interactiva. Quería resolver el problema de la falta de dinamismo de los materiales didácticos tradicionales, creando un espacio donde los estudiantes puedan hacer clic en los planetas, descubrir curiosidades y poner a prueba lo aprendido de inmediato con un cuestionario interactivo.

## Arquitectura y Decisiones Técnicas

Yo organicé este proyecto utilizando una arquitectura moderna enfocada en frontend, buscando mantener el código ordenado para poder darle mantenimiento yo sola en el futuro. Mis decisiones priorizaron herramientas que me aportaran velocidad y seguridad al programar:

{{< technologies >}}

## Desafíos y Soluciones de Ingeniería

Durante el desarrollo, me enfoqué bastante en organizar el flujo de información para asegurar que la pantalla respondiera de forma fluida cuando el usuario interactuara con un planeta o avanzara en el quiz.

{{< challenges >}}

## Impacto y Resultados

De momento no he configurado herramientas de analítica ni métricas de acceso en el repositorio. Sin embargo, analizando mi proceso de desarrollo y el código, los resultados técnicos que logré fueron:
- **Código más mantenible:** Al separar los datos estructurados (planetas y preguntas) de la capa visual, me resulta muchísimo más sencillo sentarme y agregar nuevos contenidos educativos en el futuro.
- **Entorno de desarrollo ágil:** El uso de Vite me ayudó mucho en el día a día, ya que los cambios de diseño que hacía con Tailwind se reflejaban en la pantalla de forma instantánea.