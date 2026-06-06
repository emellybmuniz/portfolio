---
title: "Hucha de Monedas en Java"
date: "2026-03-23"
featured: false
weight: 5
draft: false
description: "Aplicación basada en consola desarrollada en Java para simular el almacenamiento, gestión y conversión de divisas con persistencia JSON ad-hoc nativa."
imageCover: "cofrinho-java.webp"
imageCoverFallback: "cofrinho-java.png"
categories: 
  - "Backend"
technologies:
  - "Java"
  - "Maven"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/eb-cofrinho-java"

techReasons:
  Java: "Seleccionado para aplicar conceptos avanzados de Programación Orientada a Objetos (POO), polimorfismo y tipado estático en lógica financiera."
  Maven: "Utilizado como gestor de compilación para automatizar el ciclo de vida del proyecto y su empaquetado sin dependencias externas pesadas."

metadata:
  status: "En desarrollo"
  platform: "Console Application (CLI)"
  role: "Desarrolladora Java"
  industry: "Herramientas Utilitarias / Estudio"
  
  challenges:
    - kicker: "Desafío 1: Persistencia sin Dependencias"
      title: "Serialización JSON ad-hoc puramente nativa"
      description: "Guardar y cargar el estado de las monedas en un archivo físico (`cofrinho.json`) sin incluir librerías del ecosistema Java como Jackson o Gson."
      resolution: "Creación de un módulo de análisis (parser) manual dentro del repositorio de archivos, procesando los datos mediante la manipulación estructurada de cadenas de texto."
    - kicker: "Desafío 2: Extensibilidad de Dominios"
      title: "Inclusión de nuevas divisas sin alterar la lógica global"
      description: "Garantizar que añadir nuevos tipos de monedas (como Libra o Yen) no genere acoplamiento en las operaciones de balance del sistema."
      resolution: "Implementación de herencia desde una clase abstracta principal ('Moeda') enlazada a un catálogo maestro ('TipoMoeda'), permitiendo que el cálculo total se ejecute por polimorfismo dinámico."

features:
  - "Menú interactivo por consola de comandos para operaciones esenciales del sistema."
  - "Cálculo de equivalencias automáticas basado en tasas de conversión dinámicas."
  - "Estructura de seguridad perimetral mediante el uso de excepciones personalizadas."
  - "Base de datos en archivo local JSON con claves de indexación auto-incrementales."
---

## Sobre el Proyecto

La **Hucha de Monedas en Java** es una utilidad ejecutada desde la línea de comandos (CLI) diseñada con el propósito de ejercitar la lógica pura de programación utilizando las herramientas nativas del lenguaje Java. La aplicación simula las acciones de una hucha real, permitiendo depositar monedas de múltiples denominaciones (Real, Dólar y Euro), dar de baja registros mediante identificadores numéricos únicos y evaluar el balance total convertido a la divisa de referencia local (BRL).

## Arquitectura y Decisiones Técnicas

El código fuente está estructurado para asegurar un ordenamiento claro de tareas mediante capas delimitadas:

* **`model/`**: Gestiona las entidades operativas del sistema. La clase abstracta `Moeda` define las condiciones básicas que extienden `Real`, `Dolar` y `Euro`. El enum `TipoMoeda` consolida la información base de símbolos y tasas de cambio.
* **`repository/`**: Abstrae las estrategias de almacenamiento a través de la interfaz `CofrinhoRepository`, independizando las reglas lógicas del acceso a disco.
* **`exception/`**: Implementa la clase `invalidValueException`, actuando como un filtro protector que intercepta valores nulos o negativos antes de procesar operaciones.

{{< technologies >}}

## Desafíos de Ingeniería y Soluciones

Las prioridades en el diseño del software se enfocaron en resolver la persistencia de datos de forma autónoma:

{{< challenges >}}

## Impacto y Resultados

* **Estructura Escalable**: El diseño modular permite agregar nuevas divisas en pocos pasos, limitando los cambios a la creación de su propia clase y la extensión en los registros del enum de control.
* **Integridad del Almacenamiento**: Las validaciones en los constructores bloquean cualquier corrupción en el archivo físico `cofrinho.json`, garantizando la estabilidad de los datos guardados en cada ciclo de uso de la herramienta.