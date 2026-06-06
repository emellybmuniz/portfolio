---
title: "Tablero de Análisis de Salarios en Datos"
date: "2025-08-09"
featured: true
weight: 10
draft: false
description: "Aplicación web interactiva desarrollada con Streamlit para la exploración estadística y el mapeo de tendencias salariales del mercado de datos."
imageCover: "dashboard-salarios-dados.webp"
imageCoverFallback: "dashboard-salarios-dados.png"
categories: 
  - "frontend"
technologies:
  - "Python"
  - "Streamlit"
  - "Pandas"
  - "Plotly"
liveDemo: "https://imersao-dados-python-alura-emellybmuniz.streamlit.app/"
repositoryUrl: "https://github.com/emellybmuniz/imersao-dados-python-alura"

techReasons:
  Python: "Lenguaje base seleccionado por su rendimiento en el ecosistema de análisis de datos y la manipulación de matrices estructuradas."
  Streamlit: "Framework adoptado para construir la interfaz web directamente en Python, transformando scripts de datos en un tablero responsivo de manera ágil."
  Pandas: "Biblioteca esencial utilizada para cargar los archivos CSV, aplicar máscaras de filtrado multicriterio y calcular los KPIs financieros en tiempo real."
  Plotly: "Motor gráfico encargado de renderizar los gráficos interactivos y el mapa de coropletas con autoescalado de dimensiones."

metadata:
  status: "Completado"
  platform: "Web Application"
  role: "Desarrolladora de Datos Frontend"
  industry: "Business Intelligence / EdTech"
  
  challenges:
    - kicker: "Desafío 1: Responsividad del Tablero"
      title: "Preservación de la cuadrícula visual en pantallas móviles"
      description: "Los paneles de control complejos con múltiples columnas de gráficos tienden a romperse o generar barras de desplazamiento horizontal incómodas en smartphones."
      resolution: "Configuramos el modo de diseño 'wide' en Streamlit acoplando contenedores de columnas elásticas nativas, lo que garantiza el apilamiento vertical automático y ajusta los acercamientos táctiles de Plotly en formatos pequeños."
    - kicker: "Desafío 2: Cascada de Excepciones por Filtros Vacíos"
      title: "Gestión de búsquedas cruzadas sin registros en el dataframe"
      description: "Al encadenar múltiples criterios restrictivos del usuario (ej. año específico + nivel ejecutivo + microempresa), el resultado podía quedar vacío, provocando errores críticos en los componentes gráficos."
      resolution: "Implementamos una validación condicional preventiva utilizando el atributo '.empty' de Pandas. Si no hay registros coincidentes, el procesamiento se detiene de forma limpia para mostrar una tarjeta de advertencia instructiva."

features:
  - "Consola de control con filtrado simultáneo por año, nivel de experiencia, tipo de contrato y tamaño de empresa."
  - "Cálculo en tiempo real de métricas clave (KPIs) con formato de moneda internacional."
  - "Mapeo geográfico de compensaciones mediante la integración de códigos de países ISO3."
  - "Gráficos dinámicos con etiquetas de información emergentes (tooltips) y aislamiento de variables con un clic."
  - "Visualizador opcional de datos tabulares en el pie de página para auditorías detalladas."
---

## Sobre el Proyecto

El **Tablero de Análisis de Salarios en Datos** es un proyecto práctico desarrollado durante la *Inmersión Datos Python de Alura*. La aplicación fue diseñada para procesar un conjunto de datos educativos con registros de nóminas del sector tecnológico, transformando filas estáticas de hojas de cálculo en un entorno vivo de Business Intelligence.

La herramienta permite a estudiantes y profesionales en transición de carrera realizar análisis exploratorios de datos (EDA) para identificar promedios de remuneración global, distribuciones macro y variaciones salariales según el nivel de experiencia.

## Arquitectura y Decisiones Técnicas

El diseño del software prioriza un flujo ágil del lado del cliente sin servidores dedicados, maximizando el rendimiento sobre la infraestructura de Streamlit Community Cloud:

* **Procesamiento en Memoria**: La carga y el filtrado de datos se ejecutan en tiempo real a través de Pandas, descartando la necesidad de conectar motores de bases de datos relacionales externos para este volumen de información.
* **Geometría de Interfaz Fluida**: La visualización se divide en una barra lateral reservada para los selectores de control y un área central organizada en cuadrículas proporcionales para tarjetas informativas y gráficos.

{{< technologies >}}

## Desafíos de Ingeniería y Soluciones

Al construir paneles de análisis web, sincronizar la velocidad de respuesta con la flexibilidad de la pantalla es fundamental:

{{< challenges >}}

## Impacto y Resultados

* **Adaptabilidad Móvil Avanzada**: La interfaz responde de forma elástica en smartphones, convirtiendo las distribuciones de filas anchas en listas verticales fluidas aptas para interacciones táctiles.
* **Interactividad sin Fricciones**: La reactividad nativa del sistema actualiza las vistas gráficas de inmediato ante cualquier cambio en los filtros, eliminando la necesidad de botones manuales de carga o refrescos de página completos.
* **Democratización de Datos**: Registros tabulares densos se sintetizan en indicadores gráficos claros, permitiendo interpretar las pautas del mercado laboral de manera intuitiva.