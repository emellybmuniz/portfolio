---
title: "Java Bank - Control de Transacciones POO"
date: "2025-10-09"
featured: false
weight: 10
draft: false
description: "Un sistema bancario en consola desarrollado en Java puro para practicar los pilares de POO, repositorios desacoplados y un manejo riguroso de excepciones personalizadas."
imageCover: "java-bank.webp"
imageCoverFallback: "java-bank.png"
categories: 
  - "Backend"
technologies:
  - "Java"
  - "Gradle"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/TransactionControlPOO"

techReasons:
  Java: "Elegido por ser un lenguaje robusto y fuertemente tipado, ideal para ejercitar conceptos avanzados de orientación a objetos, herencia y polimorfismo."
  Gradle: "Utilizado como herramienta de automatización para estructurar el proyecto, gestionar la compilación y organizar el alcance de las carpetas de forma limpia."

metadata:
  status: "Concluido"
  platform: "Console Application (CLI)"
  role: "Backend Developer"
  industry: "Finanzas / Estudio Técnico"
  
  challenges:
    - kicker: "Desafío 1: Modelado de Dominio y Extensibilidad"
      title: "Organización de diferentes tipos de carteras y reglas"
      description: "El sistema debía gestionar carteras comunes de transacciones (AccountWallet) y carteras enfocadas en activos (InvestmentWallet) sin duplicar las reglas de saldo básicas heredadas de un modelo compartido."
      resolution: "Desarrollé una estructura de herencia a partir de la clase base 'Wallet', aplicando un encapsulamiento estricto mediante modificadores de acceso protegidos y polimorfismo. Esto permitió que 'BankService' procese operaciones comunes de movimiento financiero independientemente de la especialización de la cartera."
      
    - kicker: "Desafío 2: Centralización del Flujo de Errores"
      title: "Prevención de estados inconsistentes en las transferencias"
      description: "Las operaciones financieras simuladas (como Pix e inversiones) podían fallar por diversos motivos lógicos, y el programa en consola no podía cerrarse de forma abrupta por errores de digitación o saldo insuficiente."
      resolution: "Creé un paquete dedicado de excepciones de dominio mapeadas de forma precisa (como 'NoFundsEnoughException', 'AccountNotFoundException' y 'PixInUseException'). La capa de servicio valida todas las condiciones previas de saldo y claves antes de alterar los repositorios, lanzando estos errores de forma segura para ser capturados y mostrados amigablemente en el ciclo de la clase 'Main'."

features:
  - "Estructura de dominio dividida en modelos claros (Wallet, Money, Investment, MoneyAudit)"
  - "Capa de repositorio aislada para simular la búsqueda y persistencia de datos en memoria"
  - "Sistema básico de auditoría financiera ('MoneyAudit') para el seguimiento de movimientos"
  - "Reglas de negocio aisladas en una clase centralizada de servicios ('BankService')"
  - "Flujo robusto de validación de datos respaldado por 6 tipos de excepciones personalizadas"
---

## Sobre el Proyecto
Desarrollé este sistema bancario interactivo a través de la terminal durante mis estudios de Java con el propósito claro de consolidar la comprensión práctica de la arquitectura modular y las buenas prácticas de la Programación Orientada a Objetos. La aplicación simula el ecosistema interno de un banco, permitiendo la creación de cuentas, gestión de inversiones, transferencias entre carteras y auditorías simples de saldos.

El objetivo principal aquí fue ir más allá de los ejemplos teóricos sencillos de internet, diseñando un flujo de backend realista que gestiona validaciones estrictas de reglas de negocio y simula el aislamiento de capas que encontramos en los sistemas corporativos reales.

## Estructura del Código y Decisiones Técnicas
La ingeniería del software adopta un patrón enfocado en el desacoplamiento de código. En lugar de concentrar toda la lógica en el punto de entrada de la terminal, el proyecto separa las responsabilidades de forma clara: los modelos contienen solo las propiedades y comportamientos del dominio, los repositorios gestionan las estructuras de datos en la memoria, y la clase de servicio dicta las reglas lógicas de las transacciones.

{{< technologies >}}

## Control de Errores y Desafíos de Código
Durante el desarrollo, el mayor enfoque técnico estuvo en garantizar que las operaciones de movimiento monetario no permitieran fallos lógicos, como saldos negativos no autorizados o cuentas fantasma.

{{< challenges >}}

## Conclusión
El desarrollo de Java Bank fue una excelente experiencia para entender en la práctica la importancia del encapsulamiento y del diseño de código defensivo. Lograr estructurar múltiples repositorios en memoria y conectar toda la lógica a través de excepciones personalizadas me dio una base sólida sobre cómo construir código Java legible, organizado y fácil de extender. Al ser una aplicación de consola enfocada en lógica pura, el resultado cumplió con su rol didáctico sin la necesidad de frameworks externos ni interfaces complejas.