---
title: "Modular Banking System"
date: "2026-01-07"
featured: true
weight: 11
draft: false
description: "Refactorización de un sistema bancario por CLI estructurado en diccionarios hacia una arquitectura orientada a objetos (POO) dividida en capas."
imageCover: "coursePortfolio.webp"
imageCoverFallback: "coursePortfolio.png"
categories: 
  - "Backend"
  - "CLI"
technologies:
  - "Python"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/modular-banking-system-python"

techReasons:
  Python: "Lenguaje utilizado para aplicar conceptos de orientación a objetos avanzada, herencia, encapsulamiento y polimorfismo a través de una estructura modular limpia."

metadata:
  status: "Concluido"
  platform: "CLI Application"
  role: "Desarrolladora Backend"
  industry: "Tecnología"
  
  challenges:
    - kicker: "Desafío 1: Migración de Paradigma"
      title: "Transición de datos estructurados en diccionarios a instancias de clases"
      description: "La antigua implementación de tipo procedural centralizaba los registros en diccionarios y tuplas primitivas, causando un alto acoplamiento y complejidad al validar reglas de negocio."
      resolution: "El dominio se mapeó siguiendo un modelo UML completo, encapsulando la información en objetos tipados (Client, Account, History) e aislando las operaciones con el patrón Command."
    - kicker: "Desafío 2: Coherencia del Historial Compartido"
      title: "Sincronización y propagación de transacciones entre múltiples cuentas del cliente"
      description: "Garantizar que todas las operaciones ejecutadas en distintas cuentas financieras se registraran y consultaran desde un único historial sin cruzar referencias de memoria."
      resolution: "Se adoptó un flujo de inicialización que vincula dinámicamente una única instancia de 'History' al cliente, haciendo que las nuevas cuentas hereden dicha referencia de forma transparente."
      
features:
  - "Modelado completo de clases de dominio (Cliente, Persona Física, Cuenta Corriente, Historial)"
  - "Encapsulamiento de depósitos y retiros mediante objetos que heredan de una clase de transacción abstracta"
  - "Capa de servicios independiente que aísla los flujos de negocio de las operaciones de la terminal"
  - "Implementación de repositorios en memoria basados en el patrón Singleton para simular la persistencia"
  - "Validación estricta de restricciones de dominio, como duplicación de CPF e identificadores de cuenta"
  - "Control de límites operativos en la cantidad de retiros dentro de la especialización de Cuenta Corriente"
  - "Interfaz de usuario en terminal dinámica gestionada mediante un bucle de menú interactivo"
  - "Suite completa de pruebas de integración funcionales estructurada con pytest"
---

## Sobre el Proyecto

Modular Banking System nació de la necesidad de evolucionar un sistema contable originalmente construido sobre estructuras de diccionarios y tuplas en Python puro hacia una aplicación de software verdaderamente modular y Orientada a Objetos. El propósito central del proyecto es demostrar la viabilidad de convertir una lógica de desarrollo funcional simple en una arquitectura de código extensible, limpia y alineada con las buenas prácticas de ingeniería de software.

La aplicación elimina el problema del acoplamiento de datos primitivos comunes en las etapas de aprendizaje iniciales. Antes del desarrollo de este sistema modular, reglas fundamentales como los límites de retiros o la verificación de saldo se encontraban dispersas dentro de los controladores de la interfaz de usuario, impidiendo la automatización de pruebas y el intercambio de componentes de almacenamiento.

## Arquitectura y Decisiones Técnicas

La estructura se organizó siguiendo el Principio de Responsabilidad Única (SRP), distribuyendo el código en capas funcionales bien delimitadas:
* **Domain (Modelos):** Contiene las entidades principales del negocio (`Client`, `Account`, `CheckingAccount`, `History`, `Transaction`). El acceso directo al saldo está protegido, quedando expuesto únicamente para lectura externa por medio de propiedades (`@property`).
* **Repository:** Sustituye variables globales por estructuras controladas de almacenamiento en memoria (`InMemoryClientRepository`, `InMemoryAccountRepository`), listas para ser reemplazadas por bases de datos relacionales sin alterar el resto del código.
* **Services:** Orquesta los flujos de comunicación entre los repositorios y las reglas del dominio (creación de cuentas, rutinas de depósitos y puntos de validación).
* **CLI:** Interfaz de línea de comandos aislada que consume exclusivamente las funciones expuestas en la capa de servicios para capturar y mostrar las acciones de la terminal.

La modularidad se reforzó mediante técnicas de inyección de dependencias. Los constructores de los servicios reciben las instancias de los repositorios, estableciendo el desacoplamiento necesario para ejecutar pruebas de integración deterministas.

{{< technologies >}}

## Desafíos y Soluciones de Ingeniería

A lo largo del desarrollo de la aplicación, resultó fundamental estructurar la lógica interna de herencia y resolver las limitaciones técnicas del manejo de datos temporales sin base de datos.

{{< challenges >}}

## Impacto y Resultados

* **Desacoplamiento de Interfaz:** El módulo visual por comandos de la terminal puede sustituirse por completo por una capa de API web sin la necesidad de modificar el código de la lógica de negocio ni de las entidades de dominio.
* **Cobertura de Excepciones:** Las pruebas automatizadas con pytest cubren con precisión flujos exitosos y escenarios de error, como intentos de retiro con saldo insuficiente o bloqueos por registros duplicados.
* **Garantía de Mantenibilidad:** La alineación con los diagramas UML reduce significativamente la complejidad para comprender el comportamiento técnico de las transacciones financieras.