---
title: "Réplica de la Landing Page de Netflix"
date: "2024-06-08"
featured: false
weight: 10
draft: false
description: "Un proyecto práctico de réplica de la página de inicio de Netflix hecho con HTML y CSS puros para practicar la creación de páginas responsivas y el uso de etiquetas semánticas."
imageCover: "netflix-replica.webp"
imageCoverFallback: "netflix-replica.png"
categories: 
  - "Frontend"
technologies:
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/netflix-replica/"
repositoryUrl: "https://github.com/emellybmuniz/netflix-replica"

techReasons:
  HTML5: "Utilizado para crear toda la estructura de la página, organizando los bloques de texto e imágenes con etiquetas semánticas nativas."
  CSS3: "Utilizado para aplicar la apariencia visual del sitio original y configurar la adaptación del diseño para diferentes resoluciones mediante Media Queries."

metadata:
  status: "Concluido"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Educación / Estudio Personal"
  
  challenges:
    - kicker: "Desafío 1: Responsividad"
      title: "Organización del diseño para móviles y computadoras"
      description: "El objetivo era hacer que las secciones alternaran la posición de los textos e imágenes de forma organizada en pantallas grandes y se apilaran de forma vertical en pantallas más pequeñas."
      resolution: "Adopté un desarrollo enfocado primero en pantallas pequeñas y organicé los estilos en archivos separados (telapequena.css, telamedia.css y telagrande.css). Usé propiedades básicas de Flexbox y creé clases utilitárias para invertir el flujo con 'flex-direction: row-reverse' a partir de los 990px de ancho."
    
    - kicker: "Desafío 2: Ajuste de Imágenes y Componentes"
      title: "Evitar distorciones o rupturas en los medios"
      description: "Las imágenes de la TV, de los dispositivos y el widget promocional necesitaban cambiar de tamaño de forma proporcional para no romper la estructura visual del diseño."
      resolution: "Definí el tamaño de los elementos utilizando porcentajes (como el 90% del espacio disponible en pantallas pequeñas y el 40% en pantallas más grandes), permitiendo que los recursos visuales acompañaran los cambios de la ventana del navegador sin distorsionarse."

features:
  - "Estructura básica organizada con etiquetas semánticas comunes (header, main, section, footer)"
  - "Estilización dividida en archivos separados para facilitar la organización de las reglas de pantalla"
  - "Uso de variables de CSS para centralizar los patrones de color"
  - "Formulario simple con validaciones nativas del navegador (como correo electrónico obligatorio y límites de caracteres)"
  - "Sección de preguntas frecuentes estructurada con listas nativas de HTML"
---

## Sobre el Proyecto
Desarrollé este sitio web justo al inicio de mis estudios de programación como un ejercicio práctico de HTML y CSS. La idea principal era intentar recrear el aspecto de la página de presentación de Netflix para poner a prueba mis habilidades de estructuración y diseño.

El enfoque de esta práctica fue aprender a organizar elementos en listas, añadir medios externos y, sobre todo, asegurar que el sitio web se vería correcto y legible tanto en el teléfono móvil como en la computadora, sin depender de ninguna herramienta o framework externo.

## Estructura y Decisiones Técnicas
Opté por construir la página utilizando únicamente recursos nativos de la web (HTML y CSS puros). Esto ayudó a fijar los conceptos más básicos sin añadir la complejidad de herramientas externas. Para organizar los estilos, decidí separar las reglas de diseño según el tamaño de la pantalla del usuario, vinculando los archivos CSS directamente en el documento principal.

{{< technologies >}}

## Dificultades Encontradas y Soluciones
Durante la escritura del código, enfrenté algunos problemas para ajustar el comportamiento de los elementos visuales, los cuales solucioné mediante ajustes en las hojas de estilo.

{{< challenges >}}

## Conclusión
Este proyecto fue muy importante para consolidar mi base inicial de desarrollo frontend. Me dio la oportunidad de entender en la práctica el funcionamiento de Flexbox, el comportamiento de las Media Queries y la importancia de planificar la responsividad desde el principio del código. Al ser un ejercicio enfocado en el aprendizaje inicial, el resultado alcanzado cumplió con mi objetivo de validar el uso correcto y sencillo de HTML y CSS en el desarrollo de interfaces.