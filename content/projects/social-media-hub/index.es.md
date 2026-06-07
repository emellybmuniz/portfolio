---
title: "Social Media Hub - Simulador de Pantalla Móvil"
date: "2024-05-20"
featured: false
weight: 10
draft: false
description: "Un proyecto práctico que simula la interfaz de un iPhone para navegar por perfiles de redes sociales utilizando HTML y CSS estructural."
imageCover: "social-media-hub.webp"
imageCoverFallback: "social-media-hub.png"
categories: 
  - "Frontend"
technologies:
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/social-media-hub/"
repositoryUrl: "https://github.com/emellybmuniz/social-media-hub"

techReasons:
  HTML5: "Utilizado para crear la estructura base de las páginas de previsualización y gestionar la dirección de los enlaces internos hacia la pantalla simulada."
  CSS3: "Utilizado para realizar el alineamiento centrado del mockup del móvil, el control del desbordamiento y los efectos visuales simples al pasar el cursor sobre los botones."

metadata:
  status: "Concluido"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Educación / Estudio Personal"
  
  challenges:
    - kicker: "Desafío 1: Navegación sin Recarga Total"
      title: "Actualizar la pantalla interna de forma dinámica"
      description: "Necesitaba lograr que al pulsar los botones laterales se cambiara el contenido visible dentro del dibujo del teléfono sin que toda la página web sufriera una recarga."
      resolution: "Utilicé la propiedad nativa 'target' en los enlaces de anclaje, apuntando directamente al atributo 'name' de un elemento iframe posicionado en el centro del móvil, permitiendo la carga aislada de las subpáginas."
      
    - kicker: "Desafío 2: Ajuste del Layout Absoluto"
      title: "Alinear el iframe sobre la imagen del iPhone"
      description: "Hacer que la ventana interna que contiene los sitios web quedara perfectamente superpuesta sobre el área de la pantalla del dispositivo simulado fue difícil al principio."
      resolution: "Combiné el uso de posicionamiento absoluto con coordenadas fijas en píxeles para delimitar la pantalla del móvil y adopté Media Queries sencillas para reajustar el tamaño de los iconos en pantallas más pequeñas."

features:
  - "Estructura de navegación interna basada en atributos iframe y destinos de enlace nativos"
  - "Estilizado visual que simula las proporciones físicas reales de un teléfono móvil"
  - "Menú lateral con iconos interactivos que incluyen pequeñas animaciones de transición"
  - "Código distribuido de forma modular con archivos HTML independientes para cada red social"
  - "Fondo de interfaz configurado con imagen fija para crear un efecto de profundidad"
---

## Sobre el Proyecto
Desarrollé este proyecto como parte de mis ejercicios prácticos durante el curso de HTML5 y CSS3 de Curso em Vídeo. La idea principal consistía en diseñar un concentrador de enlaces que imitara la navegación real desde la pantalla de un teléfono inteligente (iPhone).

El objetivo central de la práctica fue comprender las dinámicas de posicionamiento de los componentes en la interfaz y aprender a conectar la visualización de archivos locales con redirecciones externas en un mismo espacio de usuario.

## Estructura Visual y Decisiones Técnicas
La maquetación de la interfaz se basó por completo en etiquetas estándar y hojas de estilo limpias, evitando el uso de frameworks de diseño. La organización de archivos se estructuró de manera directa, asignando a cada red social su propio documento HTML ligero con su logotipo y un enlace de acceso al perfil.

{{< technologies >}}

## Dificultades de Maquetación y Soluciones
Durante la escritura del código, las principales correcciones estuvieron enfocadas en asegurar las proporciones visuales del dispositivo simulado para evitar que los elementos se desbordaran.

{{< challenges >}}

## Conclusión
Social Media Hub fue un excelente laboratorio de práctica para asimilar conceptos de posicionamiento absoluto, gestión de iframes y flujos básicos de navegación. Al ser un ejercicio sencillo desarrollado al inicio de mis estudios de frontend, cumplió perfectamente el rol de ayudarme a entender cómo el navegador interpreta el modelo de cajas y la superposición de capas en CSS, sirviendo como una buena base para crear diseños responsivos más avanzados en el futuro.