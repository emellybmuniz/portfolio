---
title: "Web Playground - Laboratorio de Experimentos Frontend"
date: "2026-05-28"
featured: false
weight: 10
draft: false
description: "Un espacio centralizado de aprendizaje que reúne miniproyectos, desafíos de lógica y componentes web construídos con HTML, CSS, JavaScript, SASS y Hugo."
imageCover: "web-playground.webp"
imageCoverFallback: "web-playground.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "SASS"
  - "Hugo"
liveDemo: "https://emellybmuniz.github.io/web-playground/"
repositoryUrl: "https://github.com/emellybmuniz/web-playground"

techReasons:
  JavaScript: "Utilizado para desarrollar la lógica de las miniaplicaciones internas, controlando los estados y ciclos del Pomodoro, la actualización del reloj y los datos del generador de códigos QR."
  SASS: "Adoptado para practicar la escritura de hojas de estilo avanzadas, usando selectores anidados, variables y mixins para estructurar el diseño de forma limpia."
  Hugo: "Utilizado como generador de sitios estáticos para comprender la estructuración de páginas basada en componentes y agilizar el desarrollo de plantillas modulares."

metadata:
  status: "En Desarrollo"
  platform: "Web Workspace"
  role: "Frontend Developer"
  industry: "Educación / Estudio Personal"
  
  challenges:
    - kicker: "Desafío 1: Centralización y Organización de Contextos"
      title: "Crear un punto de entrada unificado para múltiples proyectos"
      description: "Dado que el repositorio agrupa ejercicios independientes con diferentes estructuras de carpetas, la navegación local dependía de abrir directorio por directorio en el editor de código."
      resolution: "Desarrollé un panel indexador en la raíz (index.html) que funciona como un tablero interactivo. Este mapa conecta las rutas relativas de cada desafío ('challenges/'), laboratorio ('lab/') y miniproyecto ('mini-projects/'), permitiendo probar cualquier código directamente desde el navegador."

features:
  - "Panel central (Tablero) interactivo para un acceso ágil a todos los archivos estáticos"
  - "Miniproyectos de utilidades funcionales (Reloj digital, Temporizador Pomodoro y Generador de códigos QR)"
  - "Carpeta dedicada para la resolución de desafíos de lógica y pruebas de algoritmos básicos"
  - "Entorno de laboratorio aislado para pruebas rápidas de marcado y maquetación CSS"
  - "Integración inicial con herramientas modernas de construcción frontend (Hugo + SASS)"
---

## Sobre el Workspace
Este repositorio nació de mi deseo de mantener un entorno organizado de pruebas y experimentación en desarrollo frontend. En lugar de crear múltiples repositorios pequeños para cada ejercicio sencillo de curso, decidí unificar todo en un único espacio de trabajo donde puedo maquetar interfaces, practicar lógica en JavaScript y documentar mi evolución técnica.

La colección reúne desde pequeños fragmentos de código creados en el laboratorio del día a día hasta miniaplicaciones completas con utilidades reales, funcionando como mi principal banco de pruebas de aprendizaje.

## Organización del Código y Herramientas
La estructura del directorio se dividió en bloques lógicos específicos para mantener los bocetos rápidos separados de los módulos estructurados. Aunque la mayor parte del laboratorio utiliza tecnologías web puras (Vanilla HTML/CSS/JS), el ecosistema también se preparó para integrar herramientas más robustas, lo que me permitió explorar por primera vez la compilación de CSS con SASS y el flujo de diseños modulares con Hugo.

{{< technologies >}}

## Dificultades Prácticas y Soluciones
Durante la actualización y adición de nuevos ejercicios en el repositorio, coordinar las rutas de acceso y asimilar el flujo de generación visual fueron etapas clave de aprendizaje.

{{< challenges >}}

## Conclusión
Web Playground ha sido una herramienta esencial para documentar mis fundamentos de frontend bajo un enfoque de libre experimentación. Lograr estructurar un árbol de directorios ordenado, construir componentes interactivos y dar mis primeros pasos con preprocesadores y generadores estáticos me aportó una visión práctica muy clara de cómo se configuran los entornos de desarrollo modernos. Al ser un repositorio continuo de estudios, refleja de forma honesta cada etapa de mi progreso técnico.