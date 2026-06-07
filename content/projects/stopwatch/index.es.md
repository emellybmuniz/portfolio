---
title: "Cronómetro Minimalista"
date: "2024-07-25"
featured: false
weight: 10
draft: false
description: "Un cronómetro simple desarrollado con JavaScript puro durante mi curso de programación, contando con funciones de tiempo real y cambio a tema oscuro."
imageCover: "stopwatch.webp"
imageCoverFallback: "stopwatch.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/stopwatch/"
repositoryUrl: "https://github.com/emellybmuniz/stopwatch"

techReasons:
  JavaScript: "Utilizado para programar el motor del cronómetro mediante funciones de tiempo asincrónicas y gestionar el cambio de clases para el Dark Mode."
  HTML5: "Responsable de proveer los elementos semánticos estructurales para mostrar el visor numérico y los botones de acción."
  CSS3: "Adoptado para crear el diseño minimalista, gestionar el posicionamiento centrado y crear transiciones de color suaves al cambiar de tema."

metadata:
  status: "Concluido"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Educación / Estudio Personal"
  
  challenges:
    - kicker: "Desafío 1: Control de Tiempo Asincrónico"
      title: "Evitar la acumulación y aceleración indeseada de intervalos"
      description: "Durante las pruebas iniciales, si se pulsaba el botón de inicio repetidas veces sin pausar, JavaScript iniciaba múltiples contadores paralelos, haciendo que el tiempo corriera más rápido de lo normal."
      resolution: "Creé una validación simple de control que verifica se el temporizador ya está activo antes de lanzar el comando 'setInterval'. Si el usuario hace clic en pausar o reiniciar, la aplicación usa 'clearInterval' eliminando el proceso activo y estabilizando el conteo."
      
    - kicker: "Desafío 2: Formateo de los Dígitos del Visor"
      title: "Mantener el estándar de dos casillas numéricas en tiempo real"
      description: "Cuando los segundos o minutos eran menores que 10, el cronómetro mostraba solo un número único (como 0:0:5), rompiendo la alineación visual del diseño y restando prolijidad a la interfaz."
      resolution: "Implementé una pequeña función auxiliar que evalúa el valor numérico antes de renderizarlo en la pantalla. Si el número es menor que 10, el código concatena un carácter '0' a la izquierda por defecto, garantizando que el visor mantenga siempre el formato estable de dos dígitos (00:00:00)."

features:
  - "Control unificado mediante botones para iniciar, pausar y reiniciar el contador"
  - "Sistema de Dark Mode/Light Mode activado de forma simple mediante un clic en la parte superior"
  - "Visualización continua dividida por bloques de minutos, segundos y milisegundos"
  - "Diseño totalmente adaptable y responsivo para una visualización estable en pantallas pequeñas"
  - "Código desarrollado de forma pura (Vanilla JS) sin dependencias externas"
---

## Sobre el Proyecto
Construí este cronómetro como uno de los ejercicios prácticos principales de mi curso de JavaScript. La propuesta era crear una utilidad web simple y directa, enfocada en la medición precisa de intervalos de tiempo, manteniendo una presentación visual lo más limpia e intuitiva posible.

El objetivo real de esta actividad fue poner en práctica las mecánicas de gestión de tiempo en el navegador y aprender a manipular propiedades de estilo dinámicamente con base en las interacciones directas del usuario.

## Estructura y Decisiones Técnicas
Al tratarse de un proyecto orientado a fijar la lógica básica de frontend, la estructura se diseñó utilizando únicamente el ecosistema puro de la web. Decidí separar los scripts en dos archivos lógicos sencillos para facilitar la lectura: un archivo responsable estrictamente de las reglas matemáticas del cronómetro y otro encargado del cambio visual de colores.

{{< technologies >}}

## Dificultades Encontradas y Soluciones
Durante la escritura del código, lidiar con el sincronismo de los temporizadores nativos requirió un cuidado extra al crear bloqueos lógicos simples dentro de las funciones de clic.

{{< challenges >}}

## Conclusión
El desarrollo de Stopwatch fue un paso esencial para consolidar mis conocimientos prácticos sobre funciones asincrónicas de tiempo y manejo de clases CSS mediante JavaScript. Al ser un proyecto inicial de curso, el resultado fue muy positivo por entregar una aplicación estable, funcional y organizada, cumpliendo perfectamente con la meta de aprendizaje propuesta en ese momento.