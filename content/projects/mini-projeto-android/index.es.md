---
title: "Mini Proyecto Android"
date: "2024-05-11"
featured: false
weight: 10
draft: false
description: "Página estática básica desarrollada al inicio del aprendizaje técnico para practicar semántica HTML5, incrustación de medios y adaptabilidad de imágenes."
imageCover: "mini-projeto-android.webp"
imageCoverFallback: "mini-projeto-android.png"
categories: 
  - "Frontend"
technologies:
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/mini-projeto-android/"
repositoryUrl: "https://github.com/emellybmuniz/mini-projeto-android"

techReasons:
  HTML5: "Utilizado para construir un marcado semántico claro, empleando etiquetas como header, article, section, aside y footer para mejorar el flujo de accesibilidad."
  CSS3: "Responsable de la identidad visual verde temática, aplicación de gradientes lineales, sombreado de bloques, carga tipográfica local mediante font-face y responsividad."

metadata:
  status: "Completado"
  platform: "Web Estática"
  role: "Desarrolladora Frontend"
  industry: "Educación / Práctica Inicial"
  
  challenges:
    - kicker: "Desafío 1: Proporción de Videos Incrustados"
      title: "Responsividad de reproductores externos iframe"
      description: "Los reproductores de YouTube incrustados mediante etiquetas iframe vienen con dimensiones fijas en píxeles, lo que deforma el diseño en pantallas móviles."
      resolution: "Se envolvió el elemento en una capa con posicionamiento relativo y 'padding-bottom: 58%' para simular una relación de aspecto 16:9 fluida, forzando al iframe a expandirse de forma absoluta al 100% del contenedor."
    - kicker: "Desafío 2: Dirección de Arte en Pantallas Pequeñas"
      title: "Optimización de carga gráfica mediante la etiqueta picture"
      description: "Forzar la descarga de ilustraciones pesadas orientadas a monitores de escritorio en conexiones móviles lentas disminuye el rendimiento en smartphones."
      resolution: "Implementación del nodo estructurado '<picture>' de HTML5 junto con la regla multimedia 'media=(max-width: 640px)' para servir variantes gráficas compactas y optimizadas automáticamente según la pantalla."

features:
  - "Marcado estructurado semántico que garantiza consistencia y legibilidad del documento."
  - "Reproductor de video de YouTube completamente fluido adaptado a los límites horizontales."
  - "Lista de datos curiosos con marcadores personalizados usando caracteres Unicode mediante CSS."
  - "Carga local de tipografías externas especializadas a través de la directiva '@font-face'."
  - "Efectos visuales sutiles mediante sombras planas e interacciones de transición suave (hover)."
---

## Sobre el Proyecto

El **Mini Proyecto Android** es un sitio web estático simple construido exclusivamente utilizando conceptos fundamentales de HTML y CSS. Fue desarrollado como un ejercicio práctico en las fases iniciales de mi formación en programación, respondiendo a una de las tareas de maquetación del módulo de fundamentos de la plataforma *[Curso em Vídeo](https://www.cursoemvideo.com/)*.

La página expone de manera limpia y directa la historia y el proceso creativo que dio origen a la famosa mascota del sistema operativo de Google, el Bugdroid—recorriendo los borradores iniciales de Dan Morrill (los Dandroids) hasta el logotipo final icónico diseñado por Irina Blok.

## Arquitectura y Decisiones Técnicas

Al tratarse de una práctica de iniciación educativa, el objetivo principal fue comprender el comportamiento base de las reglas del navegador sin la capa de herramientas complejas:

* **Control de Contenedores y Bloques**: El texto de la sección principal está acotado en un bloque alineado con un ancho máximo de `800px` para asegurar una lectura cómoda. Los párrafos cuentan con espaciados calculados y alineación justificada para simular el diseño de un artículo editorial.
* **Viñetas Personalizadas**: El módulo lateral de notas informativas (`<aside>`) reemplaza los puntos de lista predeterminados por un ícono mecánico de engranaje, inyectando secuencias de escape Unicode directamente en la hoja de estilos (`list-style-type: '\2699\00A0'`).

{{< technologies >}}

## Desafíos de Ingeniería y Soluciones

El código se enfocó en mantener la adaptabilidad de los recursos de medios pesados en diferentes resoluciones:

{{< challenges >}}

## Impacto y Resultados

* **Estructura Elástica**: El diseño se adapta de forma orgánica desde pantallas anchas de ordenadores de escritorio hasta dispositivos táctiles pequeños de mano sin perder texto ni elementos de navegación.
* **Marcado Ligero**: La ausencia total de scripts en tiempo de ejecución permite que el sitio cargue de forma inmediata, ofreciendo un árbol semántico limpio y fácil de procesar para motores de búsqueda.