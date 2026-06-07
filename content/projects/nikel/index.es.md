---
title: "Nikel - Gestor de Finanzas Personales"
date: "2025-11-20"
featured: false
weight: 10
draft: false
description: "Una aplicación sencilla de control financiero desarrollada para una prueba técnica, marcando mi primer contacto práctico con el framework Bootstrap."
imageCover: "nikel.webp"
imageCoverFallback: "nikel.png"
categories: 
  - "Frontend"
technologies:
  - "Bootstrap"
  - "JavaScript"
liveDemo: "https://emellybmuniz.github.io/nikel/"
repositoryUrl: "https://github.com/emellybmuniz/nikel"

techReasons:
  Bootstrap: "Adoptado por ser el requisito central de la prueba técnica de Growdev, sirviendo como base para la creación rápida de la interfaz responsiva y componentes como modales."
  JavaScript: "Utilizado para dar vida a la aplicación, controlando as acciones del usuario, los cálculos de saldo y el guardado de datos en el navegador."
  HTML5: "Responsable de la maquetación y organización básica de todas las vistas del sistema, como las páginas de inicio de sesión, panel y transacciones."
  CSS3: "Usado para aplicar estilos personalizados y colores propios más allá de los estándares provistos por Bootstrap."

metadata:
  status: "Concluido"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Finanzas / Estudio Personal"
  
  challenges:
    - kicker: "Desafío 1: Primer Contacto con Bootstrap"
      title: "Adaptación al uso de un framework CSS en una prueba práctica"
      description: "Como nunca había utilizado Bootstrap antes de esta prueba, comprender el funcionamiento del sistema de rejillas y la correcta configuración de los modales de registro fue un obstáculo al principio."
      resolution: "Estudié la documentación oficial de Bootstrap 5 a lo largo del desarrollo, aprendiendo a combinar las clases de filas y columnas (row/col) y a usar los atributos nativos de datos para abrir e iniciar los modales de transacciones sin romper el diseño."
      
    - kicker: "Desafío 2: Almacenamiento y Separación de Datos"
      title: "Persistir información de múltiples usuarios localmente"
      description: "El sistema necesitaba guardar los registros financieros de manera que diferentes cuentas de correo electrónico pudieran registrarse y ver únicamente sus propios movimientos, utilizando solo el navegador."
      resolution: "Creé una lógica en JavaScript que utiliza el correo electrónico registrado como clave única en el LocalStorage. Los datos financieros de cada cuenta se guardan dentro de un objeto estructurado, permitiendo renderizar el historial correcto una vez que se valida el inicio de sesión."

features:
  - "Panel principal con cálculo automático de saldo basado en ingresos y egresos"
  - "Historial completo con listado y control de todos los movimientos introducidos"
  - "Interfaz responsiva adaptada para móviles con menú colapsable nativo"
  - "Lógica de autenticación simulada que impide el acceso a páginas internas sin sesión activa"
  - "Validación básica de campos como el formato del correo y longitud mínima de contraseña"
---

## Sobre el Proyecto
Desarrollé este gestor financiero para cumplir con el desafío técnico de VesteTech a través de la capacitación gratuita CODAÍ 2.0 de Growdev. La aplicación funciona como una billetera digital simple, donde el objetivo es permitir que el usuario registre y siga sus ingresos y gastos diarios de forma directa.

Este proyecto representa un paso inicial importante en mis estudios de programación, ya que fue la primera vez que tuve que transformar los requisitos de una evaluación técnica en una interfaz funcional completa, gestionando los tiempos de entrega y siguiendo la regla de subir el código en un repositorio público.

## Construcción y Decisiones Técnicas
Al tratarse de un proyecto frontend enfocado en los fundamentos, la estructura se construyó utilizando la base tradicional de la web, eliminando herramientas complejas de construcción. El punto técnico principal estuvo en la integración entre las acciones del usuario y el almacenamiento nativo del navegador para garantizar que la información introducida siguiera guardada incluso después de cerrar la pestaña.

{{< technologies >}}

## Dificultades en el Desarrollo y Soluciones
Durante la escritura del código, el enfoque principal fue lograr que la manipulación del DOM realizada por JavaScript se comunicara de forma limpia con las clases estructurales del framework de diseño.

{{< challenges >}}

## Conclusión
El desarrollo de Nikel fue fundamental para entender cómo funciona la dinámica de los frameworks CSS y cómo JavaScript puro puede resolver problemas reales de lógica de negocios y persistencia de datos simple. Al ser mi primer contacto con Bootstrap y una de mis primeras pruebas técnicas, el resultado final fue satisfactorio al cumplir con todos los criterios obligatorios solicitados en el desafío, sirviendo como una excelente base de aprendizaje práctico.