---
title: "Weather Dashboard"
date: "2025-09-09"
featured: true
weight: 10
draft: false
description: "Panel meteorológico completo e intuitivo para consultas en tiempo real y mapas interactivos."
imageCover: "weather-dash.webp"
imageCoverFallback: "weather-dash.png"
categories: 
  - "Frontend"
technologies:
  - "HTML"
  - "CSS"
  - "JavaScript"
  - "Tailwind CSS"
liveDemo: "https://emellybmuniz.github.io/WeatherDash/public/"
repositoryUrl: "https://github.com/emellybmuniz/WeatherDash"

techReasons:
  JavaScript: "Lógica modular Vanilla JS utilizada de forma pura para gestionar peticiones asíncronas (fetch) y manipular los componentes visuales de la pantalla."
  Tailwind CSS: "Framework utilitario que facilitó la creación de una interfaz moderna y responsiva sin la necesidad de escribir extensos archivos CSS manuales."
  HTML: "Estructuración semántica utilizada para crear una base sólida, organizada y accesible para mostrar la información climática."
  CSS: "Responsable de la aplicación de variables de diseño, transiciones de diseño fluidas y soporte para el control dinámico de temas."

metadata:
  status: "Concluido"
  platform: "Web Application"
  role: "Desarrolladora Frontend"
  industry: "Tecnología"
  
  challenges:
    - kicker: "Desafio 1: Integración de APIs Múltiples"
      title: "Orquestación de múltiples proveedores de datos en el cliente"
      description: "Consultar datos climáticos actuales, predicciones extendidas y geolocalización al mismo tiempo puede generar demoras o bloquear el renderizado de la interfaz."
      resolution: "Se implementó un flujo asíncrono encadenado mediante promesas (Promises), cargando primero la WeatherAPI y procesando los datos secundarios de geolocalización y mapas en segundo plano."
    - kicker: "Desafio 2: Persistencia Sin Servidor"
      title: "Almacenamiento de preferencias y ciudades favoritas"
      description: "Mantener las elecciones de tema (claro/escuro), unidades de medida y la lista de lugares guardados por el usuario sin disponer de una base de datos backend."
      resolution: "Se utilizó la API nativa de localStorage del navegador para guardar cadenas JSON, cargando y actualizando la interfaz automáticamente en cada inicio."
      
features:
  - "Consulta de datos meteorológicos actuales en tiempo real mediante WeatherAPI"
  - "Predicción del tiempo detallada para múltiples días a través de la integración con Open-Meteo"
  - "Mapa interactivo con radar meteorológico integrado mediante Windy"
  - "Búsqueda de ciudades con sistema de autocompletado conectado a la API Nominatim"
  - "Sistema de marcadores de ciudades con soporte permanente guardado en localStorage"
  - "Personalización de interfaz con Modo Claro/Oscuro y 6 esquemas de colores destacados"
  - "Conversión dinámica entre sistemas de unidades métricas e imperiales"
  - "Recomendaciones personalizadas según el clima actual extraídas de un archivo JSON local"
  - "Captura de pantalla automatizada del panel utilizando la biblioteca html2canvas para compartir"
---

## Sobre el Proyecto

Weather Dashboard es una aplicación web enriquecida diseñada para ofrecer datos meteorológicos en tiempo real, acompañados de recomendaciones inteligentes y visualizaciones en mapas interactivos. La interfaz fue planeada para simular la fluidez de una aplicación nativa utilizando únicamente tecnologías web abiertas y desarrollo front-end puro, eliminando por completo cualquier infraestructura de backend.

Antes del desarrollo de este panel, la centralización de datos climáticos requería consultar portales aislados. Este proyecto unifica dicha información, transformando temperaturas numéricas en contexto visual útil, como el cambio automático de componentes gráficos y sugerencias prácticas adaptadas al tipo de clima seleccionado.

## Arquitectura y Decisiones Técnicas

El proyecto se estructuró siguiendo una arquitectura cliente estática pura distribuida en directorios de operación independientes:
* **Public:** Aloja los documentos estructurales de la interfaz (`index.html`, `settings.html`) y el archivo de datos estáticos (`recomendations.json`).
* **Src:** Reúne la lógica de ejecución en script nativo y las hojas de estilo que complementan el sistema de utilidades de Tailwind CSS.

La lógica principal del comportamiento del sistema se programó en JavaScript Vanilla. Las actualizaciones del DOM y la reactividad de la pantalla ocurren de manera directa interceptando eventos estándar del navegador. Por ejemplo, cuando se modifica el sistema de unidades en las configuraciones, un escuchador del evento `storage` recalcula automáticamente los valores numéricos mostrados sin requerir una recarga completa de la página.

{{< technologies >}}

## Desafíos y Soluciones de Ingeniería

Durante la implementación de este panel frontend, se resolvieron problemas de flujo de datos en red y almacenamiento local para asegurar el correcto funcionamiento del software.

{{< challenges >}}

## Impacto y Resultados

* **Cero Costos de Infraestructura:** Al ejecutarse al 100% dentro del navegador del usuario, el proyecto no genera gastos de mantenimiento de servidores y está listo para desplegarse de inmediato en plataformas estáticas como Vercel o GitHub Pages.
* **Navegación Dinámica Fluida:** La combinación de listeners de scroll en JavaScript permite que el desplazamiento entre la pantalla principal, los gráficos de predicción y los radares de mapas ocurra de forma suave dentro de un contenedor controlado.
* **Resiliencia de Datos Locales:** Las ciudades guardadas por el usuario permanecen protegidas si se cierra la pestaña del navegador, optimizando el ciclo de inicio al restaurar la última ubicación consultada correctamente.