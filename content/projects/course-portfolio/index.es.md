---
title: "Portafolio Académico Responsivo"
date: "2025-09-13"
featured: false
weight: 10
draft: false
description: "Single Page Application (SPA) estática desarrollada como proyecto académico de Ingeniería de Software, centrada en ergonomía móvil y accesibilidad nativa."
imageCover: "course-portfolio.webp"
imageCoverFallback: "course-portfolio.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/coursePortfolio/"
repositoryUrl: "https://github.com/emellybmuniz/coursePortfolio"

techReasons:
  JavaScript: "Utilizado para gestionar la lógica de cambio de tema (modo oscuro), la persistencia de datos del navegador y el control del carrusel de proyectos."
  HTML5: "Responsable de la estructura base mediante etiquetas semánticas y atributos de accesibilidad ARIA para asegurar una navegación fluida."
  CSS3: "Aplicado en la creación de layouts fluidos, animaciones por scroll y la implementación de dos interfaces de menú diferentes para escritorio y móvil."

metadata:
  status: "Completado"
  platform: "Web Application (Client-side)"
  role: "Desarrolladora Frontend"
  industry: "Educación / Portafolio Académico"
  
  challenges:
    - kicker: "Desafío 1: Navegación Híbrida y Ergonomía"
      title: "Transición estructural de menús entre pantallas"
      description: "Los menús estándar de escritorio resultan incómodos en dispositivos móviles, dificultando el uso con una sola mano."
      resolution: "Desarrollo de una interfaz doble mediante CSS Media Queries: un menú lateral expansivo (sidebar) para pantallas grandes y una barra fija inferior (bottom nav) optimizada para el alcance del pulgar en teléfonos móviles."
    - kicker: "Desafío 2: Persistencia y Sincronización de Tema"
      title: "Mantenimiento del estado visual entre sesiones del usuario"
      description: "Evitar el efecto de parpadeo visual donde la pantalla muestra el color por defecto antes de que el script cargue la preferencia de modo oscuro."
      resolution: "Implementación de una rutina JavaScript síncrona que lee el 'localStorage' inmediatamente al abrir la página, inyectando la clase CSS del tema antes de la renderización del body."

features:
  - "Navegación móvil integrada en la parte inferior (estilo aplicación nativa)."
  - "Interruptor de tema claro/oscuro con persistencia local mediante LocalStorage."
  - "Carrusel de proyectos adaptable: navegación por flechas en escritorio y lista con desplazamiento táctil en móviles."
  - "Accesibilidad estructurada con el uso estricto de atributos 'aria-label' y marcado semántico HTML."
  - "Formulario de contacto validado localmente con redirección a una vista estática de confirmación."
---

## Sobre el Proyecto

Este proyecto consiste en un portafolio personal diseñado como una *Single Page Application* (SPA) estática. Fue desarrollado como parte de un trabajo académico para la carrera de Ingeniería de Software en el [Centro Universitário Internacional Uninter](https://www.uninter.com/).

El objetivo principal consistió en consolidar los conceptos fundamentales del desarrollo frontend básico, demostrando que es viable construir una interfaz moderna, accesible y responsiva utilizando exclusivamente código nativo (*vanilla*), sin depender de frameworks como React o librerías externas.

## Arquitetura y Decisiones Técnicas

El código fuente fue modularizado para mantener una estricta separación de responsabilidades, facilitando el mantenimiento y la lectura:

* **`index.html`**: Concentra todo el árbol del DOM de la aplicación en un único archivo, utilizando etiquetas estructurales (`<header>`, `<main>`, `<section>`, `<footer>`) y elementos de accesibilidad.
* **`styles/`**: Organizado de manera limpia entre el archivo de reinicio de estilos (`reset.css`), la hoja de estilo principal (`main.css`) y las variables de color del modo nocturno (`dark-mode.css`).
* **`scripts/main.js`**: Centraliza los escuchadores de eventos para capturar la interacción del usuario y aplicar las modificaciones dinámicas en el DOM.

{{< technologies >}}

## Desafíos de Ingeniería y Soluciones

El desarrollo se enfocó en perfeccionar la experiencia del usuario (UX) en diferentes formatos de pantalla y en la gestión limpia de los estados del cliente:

{{< challenges >}}

## Impacto y Resultados

* **Ergonomía Móvil Optimizada**: La barra de navegación inferior redujo drásticamente el esfuerzo de interacción en smartphones, siguiendo las tendencias de diseño actuales para pantallas verticales.
* **Persistencia sin Servidor**: El uso de `localStorage` permitió mantener la preferencia estática de tema de los visitantes sin necesidad de consultar bases de datos externas ni elevar costes de infraestructura.
* **Accesibilidad Nativa**: El árbol de documentos semántico asegura que las herramientas de lectura asistida interpreten la jerarquía de contenidos y los botones de acción con total claridad.