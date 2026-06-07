---
title: "Validador de CPF - Algoritmo Matemático"
date: "2024-12-23"
featured: false
weight: 10
draft: false
description: "Una herramienta sencilla en JavaScript puro desarrollada para validar números de CPF mediante la implementación práctica del algoritmo oficial de dígitos verificadores."
imageCover: "validador-cpf.webp"
imageCoverFallback: "validador-cpf.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/validador-cpf/"
repositoryUrl: "https://github.com/emellybmuniz/validador-CPF"

techReasons:
  JavaScript: "Utilizado para aplicar la lógica de limpieza de caracteres en la cadena de entrada y ejecutar los bucles numéricos que calculan los dígitos de verificación."
  HTML5: "Responsable de la estructura básica del formulario, proporcionando el campo de texto formateado para la interacción del usuario."
  CSS3: "Adoptado para diseñar una interfaz limpia y gestionar los colores de respuesta visual que avisan si el número ingresado é correcto."

metadata:
  status: "Concluido"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Educación / Estudio Personal"
  
  challenges:
    - kicker: "Desafío 1: Comprensión del Algoritmo de Validación"
      title: "Traducir reglas de cálculo algebraico en código funcional"
      description: "Como no tenía conocimiento de cómo funcionaba la fórmula real de validación matemática de un CPF, entender las reglas de multiplicación y residuos de división fue la mayor barrera al inicio."
      resolution: "Investigué y estudié la lógica oficial del cálculo (multiplicaciones regresivas por pesos de 10 a 2 para el primer dígito y de 11 a 2 para el segundo, seguidas por el residuo de la división por 11). Logré plasmar estos pasos teóricos en bucles de repetición 'for' dentro del script."
      
    - kicker: "Desafío 2: Sanitización de la Entrada de Datos"
      title: "Aislar solo los números para evitar fallos en los bucles"
      description: "Si el usuario ingresaba el documento conteniendo puntuaciones tradicionales (como puntos y guiones) o espacios, los cálculos basados en las posiciones del texto generarían resultados erróneos."
      resolution: "Implementé una rutina simple de limpieza utilizando el método nativo '.replace()' combinado con una expresión regular básica ('/\\D/g'). Esto remueve cualquier carácter no numérico antes de enviar la cadena limpia a la función de validación."

features:
  - "Validación estructurada fundamentada en la fórmula matemática oficial del documento"
  - "Respuesta visual inmediata en la interfaz que indica el estado válido o inválido"
  - "Tratamento automático del texto ingresado para limpiar puntos, espacios y guiones"
  - "Diseño responsivo adaptado para una visualización correcta en teléfonos móviles"
  - "Desarrollo nativo (Vanilla JS) libre de librerías o dependencias externas"
---

## Sobre el Proyecto
Desarrollé este validador de CPF como un ejercicio práctico dentro de mi curso de JavaScript. La propuesta consistía en crear una aplicación sencilla y directa, donde el usuario pudiera introducir un número de documento y comprobar de forma instantánea si cumple con las reglas matemáticas oficiales de emisión.

El enfoque de esta práctica fue ir más allá del diseño visual y comenzar a gestionar reglas de negocio lógicas en el código frontend, aprendiendo a limpiar datos del usuario y validar cadenas de texto en tiempo real.

## Organización de Archivos y Tecnologias
La interfaz del proyecto se diseñó para ser lo más directa posible, priorizando el funcionamiento correcto del script. Todo el dinamismo de la página se ejecuta en el lado del cliente (client-side) sin requerir procesamiento en servidores, organizando el código en archivos específicos para el marcado HTML, el estilo visual CSS y la lógica en JavaScript.

{{< technologies >}}

## Dificultades de Lógica y Soluciones
Durante la escritura de las funciones de validación, el enfoque principal estuvo en descifrar las reglas matemáticas del documento y estructurar la limpieza de los textos para proteger los bucles lógicos.

{{< challenges >}}

## Conclusión
Este proyecto fue muy importante porque me demostró en la práctica que el desarrollo frontend requiere un razonamiento lógico estructurado además de la maquetación visual. Descubrir cómo funcionaba la secuencia matemática detrás de los dígitos verificadores de un CPF y lograr traducirla en código limpio utilizando JavaScript puro representó un excelente ejercicio de aprendizaje para fortalecer mis fundamentos técnicos como desarrolladora.