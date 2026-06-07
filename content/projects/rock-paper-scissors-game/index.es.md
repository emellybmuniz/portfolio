---
title: "Piedra, Papel o Tijera - Juego Web Retro"
date: "2025-08-10"
featured: false
weight: 20
draft: false
description: "El clásico juego Piedra, Papel o Tijera construido con JavaScript puro, explorando manipulación asincrónica del DOM y animaciones temporizadas para crear una experiencia interactiva."
imageCover: "rock-paper-scissors.webp"
imageCoverFallback: "rock-paper-scissors.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/rock-paper-scissors-game/"
repositoryUrl: "https://github.com/emellybmuniz/rock-paper-scissors-game"

techReasons:
  JavaScript: "Utilizado para gestionar el estado del juego (puntuación, fin de partida), procesar eventos de clic y controlar el flujo asincrónico de las rondas mediante temporizadores nativos."
  HTML5: "Responsable del esqueleto de la aplicación, estructurando el marcador, el área de visualización de las manos y los botones de elección."
  CSS3: "Adoptado para la creación de la identidad visual con estilo retro, además de gestionar la animación de balanceo de las manos y efectos de brillo tras el resultado."

metadata:
  status: "Concluido"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Educación / Estudio Personal"
  
  challenges:
    - kicker: "Desafío 1: Sincronización de Animaciones"
      title: "Gestionar el flujo de tiempo entre la animación y el resultado"
      description: "Para crear suspenso, quería que los gráficos de las manos se balancearan antes de revelar la elección de la computadora, pero inicialmente el resultado final aparecía instantáneamente antes de que la animación terminara."
      resolution: "Implementé una lógica asincrónica utilizando 'setTimeout' configurado en 1200ms. Durante este intervalo, JavaScript cambia o actualiza el texto a 'Oponente está eligiendo...' y añade una clase de animación CSS. Solo tras terminar el tiempo se inyectan las imágenes finales y se actualiza el marcador."
      
    - kicker: "Desafío 2: Control de Estados Visuales y Fluidez"
      title: "Limpieza de efectos y control de clics sucesivos"
      description: "Al jugar varias rondas seguidas, las clases de brillo (victoria/derrota) del turno anterior se acumulaban en el HTML, generando errores visuales, sumado al riesgo de que el usuario hiciera clic durante la animación."
      resolution: "Creé un objeto de estado ('state') global que guarda la referencia exacta do último elemento modificado y su respectiva clase de brillo. Al inicio de cada ronda o al reiniciar, el script remueve de forma limpia estos efectos antiguos y valida si el juego terminó ('isGameOver') para bloquear nuevas interacciones."

features:
  - "Control de estado unificado (marcador, fin de partida y registro de clases visuales activas)"
  - "Animación de balanceo que simula una jugada real antes de mostrar el resultado de la ronda"
  - "Feedback visual inmediato mediante bordes de colores según el desenlace del turno"
  - "Diccionario de traducciones y reglas de juego mapeadas directamente en objetos limpios de JavaScript"
  - "Límite fijo de puntuación (15 puntos) con un botón dinámico para reiniciar la partida"
---

## Sobre el Proyecto
Este proyecto representó mi primer contacto con el desarrollo de juegos para la web. El objetivo principal fue ir más allá de las páginas estáticas tradicionales y construir una aplicación puramente interactiva aplicando las reglas del clásico "Piedra, Papel o Tijera". Busqué diseñar una interfaz entretenida bajo una estética visual inspirada en juegos retro.

Para hacer la experiencia más inmersiva, investigué formas de simular una jugada real, añadiendo un efecto visual donde las manos se agitan antes de que el oponente realice su elección de forma aleatoria.

## Estructura del Juego y Decisiones Técnicas
La ingeniería de la aplicación se planteó de manera modular, dependiendo únicamente de las tecnologías nativas del navegador. Toda la lógica del ciclo de juego se aisló en funciones específicas dentro de un archivo JavaScript puro, mientras que CSS se encargó de la responsabilidad del diseño y de los estados visuales de las interacciones.

{{< technologies >}}

## Dificultades de Implementación
Durante la construcción del código, las mayores barreras estuvieron ligadas a la organización de las reglas CSS de responsividad para alinear correctamente los bloques de opciones y en el control estricto de la puntuación para evitar fallas en el flujo asincrónico.

{{< challenges >}}

## Conclusión
El desarrollo de este proyecto fue clave para consolidar mi comprensión sobre la manipulación directa del DOM, el uso de funciones de temporización y el manejo de estados en microaplicaciones frontend. Aunque el desarrollo de videojuegos no es mi enfoque de carrera, la construcción de esta interfaz sirvió como un laboratorio práctico muy productivo para aprender cómo JavaScript puro aporta dinamismo en tiempo real.