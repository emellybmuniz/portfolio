---
title: "Proyecto Cordel Moderno"
date: "2024-05-12"
featured: false
weight: 10
draft: false
description: "Página web simple desarrollada para ejercitar la aplicación de efectos de desplazamiento parallax y tipografía fluida con CSS puro."
imageCover: "cordel-moderno-project-cover.webp"
imageCoverFallback: "cordel-moderno-project-cover.png"
categories: 
  - "Frontend"
technologies:
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/projeto-cordel/"
repositoryUrl: "https://github.com/emellybmuniz/projeto-cordel"

techReasons:
  HTML5: "Utilizado para el marcado estructural semántico de las secciones y los bloques de versos que componen el poema."
  CSS3: "Responsable de la estilización visual, la gestión de fuentes externas y la fijación de los fondos para crear la ilusión de profundidad."

metadata:
  status: "Completado"
  platform: "Web Estática"
  role: "Desarrolladora Frontend"
  industry: "Educación / Portafolio"
  
  challenges:
    - kicker: "Desafío 1: Legibilidad sobre Imágenes"
      title: "Contraste de texto en fondos detallados"
      description: "Mostrar los versos del poema directamente sobre imágenes fotográficas detalladas dificultaba la lectura debido a las variaciones de color del fondo."
      resolution: "Se añadió un contenedor con un ancho máximo de '50vw' y un fondo oscuro semitransparente ('rgba(0, 0, 0, 0.392)') detrás de los textos, aislando los caracteres sin cubrir la imagen por completo."
    - kicker: "Desafio 2: Escala de la Tipografía"
      title: "Adaptación de fuentes sin saltos de línea artificiales"
      description: "Garantizar que las estrofas del cordel mantuvieran su estructura original de saltos de línea ('<br>') en diferentes tamaños de pantalla, sin desbordar los márgenes."
      resolution: "Reemplazamos los tamaños fijos en píxeles por unidades de viewport ('vw') en las propiedades de 'font-size', logrando que el texto se encoja o crezca en proporción exacta al tamaño del navegador."

features:
  - "Efecto de profundidad parallax simple utilizando la propiedad nativa 'background-attachment: fixed'."
  - "Tipografía fluida basada en unidades de ancho de pantalla ('vw') para mantener la proporción del diseño."
  - "Importación y uso de fuentes personalizadas a través de Google Fonts para la ambientación estética."
  - "Marcado semántico limpio dividido de forma clara en bloques de texto y secciones fijas de imagen."
---

## Sobre el Proyecto

El **Proyecto Cordel Moderno** fue desarrollado como un ejercicio práctico centrado en la estilización de interfaces sobre elementos visuales tradicionales. La página muestra el poema \"Cordel Moderno\" del autor Milton Duarte, utilizando la web como medio para presentar una obra inspirada en la literatura de cordel brasileña tradicional, contrastando el folclore cultural con las dinámicas de la tecnología actual.

El desarrollo se basó en un desafío propuesto en los módulos de HTML5 y CSS3 de la plataforma *Curso em Vídeo*, enfocado en explorar el comportamiento de imágenes de fondo estáticas respecto al movimiento de desplazamiento (scroll) de la pantalla.

## Arquitectura y Decisiones Técnicas

La estructura de la aplicación es puramente estática y simplificada, enfocada en el dominio de propiedades nativas de las hojas de estilo:

* **Efecto Parallax en CSS Puro**: En lugar de cargar scripts o librerías externas de JavaScript para rastrear el movimiento, la ilusión de profundidad se simula exclusivamente mediante la combinación de las propiedades `background-attachment: fixed`, `background-position` y `background-size: cover` en las secciones correspondientes.
* **Tipografía Temática**: Uso de las tipografías de Google Fonts *Freeman* (para aportar peso y visibilidad a los títulos) y *Dekko* (para simular la estética manuscrita característica de los folletos en los bloques de texto).

{{< technologies >}}

## Desafíos de Ingeniería y Soluciones

Durante la construcción de la hoja de estilos, los ajustes principales se centraron en asegurar que las decisiones estéticas no afectaran negativamente la lectura:

{{< challenges >}}

## Impacto y Resultados

* **Diseño Adaptable sin Frameworks**: El diseño de la página se ajusta tanto a monitores de escritorio como a teléfonos móviles sin requerir sistemas de rejilla complejos ni dependencias de terceros como Bootstrap, validando el uso correcto de las unidades relativas modernas de CSS.
* **Preservación de la Métrica**: La disposición del texto respeta la estructura poética original planteada por el autor, garantizando niveles óptimos de contraste y una navegación cómoda mediante el desplazamiento vertical.