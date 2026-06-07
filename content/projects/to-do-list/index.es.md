---
title: "Lista de Tareas"
date: "2024-08-01"
featured: false
weight: 10
draft: false
description: "Una lista de tareas minimalista desarrollada con HTML, CSS y JavaScript puros, marcando mis primeros estudios sobre persistencia de datos en el navegador."
imageCover: "todo-list.webp"
imageCoverFallback: "todo-list.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/to-do-list/"
repositoryUrl: "https://github.com/emellybmuniz/to-do-list"

techReasons:
  JavaScript: "Utilizado para capturar las entradas del teclado, crear de forma dinámica los nuevos elementos de la lista en el HTML y gestionar el guardado de los datos."
  HTML5: "Responsable de proveer la estructura de formulario básica y la maquetación limpia del contenedor donde se insertan las tareas."
  CSS3: "Adoptado para la creación de una apariencia limpia, dividiendo las reglas estructurales y de responsividad en archivos específicos para facilitar la organización."

metadata:
  status: "Concluido"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Educación / Estudio Personal"
  
  challenges:
    - kicker: "Desafío 1: Persistencia com localStorage"
      title: "Guardar y cargar datos estructurados localmente"
      description: "Al ser uno de mis primeros contactos con el almacenamiento en caché del navegador, entender cómo salvar los textos sin perder la información al refrescar la página fue una dificultad inicial."
      resolution: "Implementé una lógica que transforma el arreglo de tareas en texto usando 'JSON.stringify()' antes de guardarlo. Al iniciar la página, el script ejecuta 'JSON.parse()' para leer esos datos de vuelta, asegurando que el usuario encuentre sus notas en la siguiente sesión."
      
    - kicker: "Desafío 2: Sincronización en la Eliminación de Ítems"
      title: "Quitar elementos del HTML y del almacenamiento al mismo tiempo"
      description: "Al pulsar el icono de papelera para borrar una tarea, era necesario asegurar que el elemento desapareciera de la pantalla y que el registro correcto también se borrara de la memoria local."
      resolution: "Organicé la creación de elementos vinculando un índice a cada tarea. Al activarse el evento de clic en la papelera, el código localiza la posición correcta dentro del arreglo, remueve el registro mediante 'splice()', actualiza el localStorage y limpia la vista para renderizar la lista actualizada."

features:
  - "Inclusión inmediata de nuevas actividades a través del campo de texto de entrada"
  - "Guardado automático en el navegador para evitar la pérdida de datos al cerrar la pestaña"
  - "Eliminación individual de tareas con actualización dinámica de la pantalla"
  - "Diseño responsivo construido con una hoja de estilos dedicada para pantallas pequeñas"
  - "Código desarrollado de forma nativa y pura (Vanilla JS) sin el uso de librerías externas"
---

## Sobre el Proyecto
Construí esta lista de tareas como un proyecto práctico para aplicar lo que venía aprendiendo en JavaScript sobre manipulación del DOM y almacenamiento local. La aplicación funciona de manera muy directa: un espacio donde es posible anotar obligaciones diarias y borrarlas a medida que se van cumpliendo.

El mayor objetivo de este ejercicio fue entender cómo dar vida a una página web, saliendo de las maquetaciones puramente visuales y estáticas para crear un sistema interactivo básico que conserva la información digitada por el usuario.

## Organización del Código y Estilos
El proyecto prioriza el uso de tecnologías nativas para mantener el aprendizaje enfocado en los pilares fundamentales del desarrollo frontend. En la parte visual, decidí separar as propiedades CSS de manera limpia: creé un archivo `main.css` enfocado en la estructura principal para pantallas grandes y un archivo `mobile.css` responsable exclusivo de las reglas de adaptación para teléfonos inteligentes.

{{< technologies >}}

## Dificultades Iniciales y Soluções
Durante el desarrollo de las funciones del script, los mayores desafíos se presentaron al gestionar arreglos de datos y coordinar de manera correcta lo que se mostraba en pantalla con lo que quedaba guardado en la memoria.

{{< challenges >}}

## Conclusión
Este proyecto de To-Do List fue muy importante para mi evolución inicial en el desarrollo frontend, ya que me dio claridad sobre cómo funciona el ciclo de vida de datos simples en el cliente. Lograr resolver problemas de conversión de datos y aplicar hojas de estilo separadas para la responsividad móvil me aportó más confianza para seguir creando interfaces dinámicas utilizando JavaScript.