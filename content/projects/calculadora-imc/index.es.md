---
title: "Calculadora de IMC"
date: "2026-06-06"
featured: false
weight: 5
draft: false
description: "Una herramienta frontend sencilla para el cálculo del Índice de Masa Corporal (IMC) con diseño condicional basado en los rangos de la OMS."
imageCover: "calculadora-imc.webp"
imageCoverFallback: "calculadora-imc.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML"
  - "CSS"
liveDemo: "https://emellybmuniz.github.io/calculadora-imc/"
repositoryUrl: "https://github.com/emellybmuniz/calculadora-imc"

techReasons:
  JavaScript: "Utilizado para interceptar el envío del formulario, normalizar los separadores decimales de entrada y procesar la fórmula aritmética."
  HTML: "Responsable de estructurar los campos de captura del formulario y la tabla estática de referencia para las clasificaciones."
  CSS: "Aplicado para diseñar el fondo con gradiente radial y alternar las clases de color del bloque de resultados dinámicamente."

metadata:
  status: "Completado"
  platform: "Web Application (Client-side)"
  role: "Desarrolladora Frontend"
  industry: "Herramientas Utilitarias"
  
  challenges:
    - kicker: "Desafío 1: Formateo de Decimales"
      title: "Tratamiento de comas en entradas numéricas"
      description: "Evitar que la introducción de datos con comas de tipo decimal (ej: 1,75) causara errores de tipo NaN al ejecutar funciones de análisis numérico."
      resolution: "Se aplicó el método '.replace(',', '.')' en las cadenas de texto capturadas antes de pasarlas a la función parseFloat."
    - kicker: "Desafío 2: Limpieza de Estados de Estilo"
      title: "Alternancia dinámica de colores en el contenedor de resultados"
      description: "Garantizar que las clases de estilo de cálculos anteriores se borraran para evitar la acumulación visual de colores de diferentes rangos."
      resolution: "Se reinició la propiedad 'resultadoImc.className' en las funciones de renderizado justo antes de añadir la nueva clase de clasificación."

features:
  - "Cálculo matemático basado en la fórmula oficial de la OMS."
  - "Normalización automática de datos con diferentes separadores decimales."
  - "Estilo condicional del panel de respuestas basado en la puntuación obtenida."
  - "Bloqueo del comportamiento de recarga del formulario mediante control de eventos."
  - "Hoja de estilo simplificada y dedicada para optimizar la visualización en pantallas móviles."
---

## Sobre el Proyecto

La **Calculadora de IMC** es un utilitario frontend básico diseñado para practicar la captura de datos en formularios web, la validación condicional de entradas de datos y el cambio dinámico de estilos en el DOM basándose en las interacciones del usuario.

## Arquitectura y Decisiones Técnicas

El proyecto se mantiene con una estructura limpia de ejecución del lado del cliente, organizada para facilitar su mantenimiento:

* **`src/js/main.js`**: Centraliza la función de cálculo matemático (`calculoImc`), el mapeo lógico de rangos de peso (`getClassificacao`) y la gestión del evento de envío.
* **`src/css/telasmenores.css`**: Aísla las reglas multimedia (`max-width: 540px`), eliminando el gradiente radial de fondo y las sombras complejas del contenedor para mejorar el rendimiento en teléfonos móviles.

{{< technologies >}}

## Desafíos de Ingeniería y Soluciones

Durante el desarrollo del script, los objetivos principales consistieron en estabilizar la captura de datos y la vista de resultados:

{{< challenges >}}

## Impacto e Resultados

* **Interactividad Fluida sin Recargas**: El uso del método `evento.preventDefault()` retiene la vista de la página durante la operación, mostrando los datos en pantalla de manera inmediata y sin parpadeos.
* **Validación de Entradas**: Los valores numéricos negativos, nulos o textos alfabéticos inválidos quedan bloqueados en la primera fase del script, mostrando un diseño de error estandarizado y claro para el usuario.