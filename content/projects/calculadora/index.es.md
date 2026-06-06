---
title: "Calculadora Web Básica"
date: "2024-10-09"
featured: false
weight: 5
draft: false
description: "Una aplicación frontend sencilla de calculadora creada para practicar la manipulación del DOM y el patrón estructural Factory Function en JavaScript."
imageCover: "calculadora.webp"
imageCoverFallback: "calculadora-web.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML"
  - "CSS"

liveDemo: "https://emellybmuniz.github.io/calculadora/"
repositoryUrl: "https://github.com/emellybmuniz/calculadora"

techReasons:
  JavaScript: "Utilizado para construir toda la lógica operativa de la calculadora, capturar clics en la interfaz y procesar las cadenas de operaciones matemáticas."
  HTML: "Responsable de la estructura de marcado básica de la pantalla y de la tabla que organiza los botones numéricos y de operadores."
  CSS: "Aplicado para centrar el componente en pantallas de escritorio y realizar ajustes simples de dimensiones para pantallas de teléfonos móviles."

metadata:
  status: "Completado"
  platform: "Web Application (Client-side)"
  role: "Desarrolladora Frontend"
  industry: "Herramientas Utilitarias"
  
  challenges:
    - kicker: "Desafío 1: Contexto en la Captura de Eventos"
      title: "Mantenimiento del contexto dinámico en JavaScript"
      description: "Evitar que la referencia al elemento 'this' se perdiera al ejecutar funciones desde el escuchador de eventos global del documento."
      resolution: "Se utilizó el método '.bind(this)' dentro de la función de delegación de eventos para enlazar correctamente el objeto de la Factory Function."
    - kicker: "Desafío 2: Validación de Expresiones"
      title: "Tratamiento de entradas inválidas en la pantalla"
      description: "Impedir que caracteres dañados u operaciones imposibles causaran fallos críticos o mostraran resultados incorrectos en la interfaz."
      resolution: "Implementación de una estructura de validación try/catch combinada con la función 'isFinite()' para identificar divisiones por cero o errores sintácticos."

features:
  - "Operaciones aritméticas estándar y control de precedencia mediante paréntesis."
  - "Navegación híbrida que responde a clics en pantalla y entradas directas del teclado."
  - "Código de lógica encapsulado bajo el patrón de diseño Factory Function."
  - "Manejo nativo de excepciones que despliega alertas en caso de expresiones inválidas."
  - "Diseño elástico que adapta el tamaño de los botones en pantallas móviles."
---

## Sobre el Proyecto

La **Calculadora Web** es un proyecto de nivel inicial diseñado con el objetivo de consolidar el aprendizaje práctico sobre la manipulación de elementos de la página (DOM) y la organización de entornos en JavaScript puro. El sistema funciona directamente en el navegador del usuario, ofreciendo una solución estándar y ligera para cálculos rápidos del día a día.

## Arquitectura y Decisiones Técnicas

El desarrollo evitó el uso de librerías externas o frameworks pesados con el fin de priorizar las bases del desarrollo web clásico. La estructura interna responde a las siguientes decisiones:

* **Delegación de Eventos (Event Delegation)**: Un único escuchador de eventos `click` gestiona todo el documento, filtrando las interacciones mediante nombres de clases para optimizar el uso de memoria.
* **Factory Function (`createCalculator`)**: Estructura de programación orientada a objetos que empaqueta las propiedades de la pantalla y agrupa las rutinas de inicio, borrado total, eliminación de caracteres y cálculo.

{{< technologies >}}

## Desafíos de Ingeniería y Soluciones

Durante el desarrollo del código, las prioridades se centraron en corregir el flujo de datos del intérprete y asegurar la estabilidad de la pantalla:

{{< challenges >}}

## Impacto y Resultados

* **Estructura Separada**: División limpia de componentes donde el archivo HTML dicta las zonas estructurales, el CSS define los bordes y efectos visuales, y el código JavaScript rige las acciones.
* **Usabilidad Natural**: El campo de texto se comporta siguiendo los estándares de las calculadoras físicas, aplicando alineación de caracteres a la derecha y manteniendo el foco automático para una escritura continua.