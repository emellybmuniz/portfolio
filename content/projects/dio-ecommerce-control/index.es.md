---
title: "Warehouse Microservice"
date: "2025-10-24"
featured: true
weight: 10
draft: false
description: "Microservicio de gestión de inventario con procesamiento asíncrono y sincronización en tiempo real mediante RabbitMQ."
imageCover: "assets/images/background.png"
imageCoverFallback: "assets/images/background.png"
categories: 
  - "Backend"
technologies:
  - "Java"
  - "Spring Boot"
  - "RabbitMQ"
  - "MapStruct"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/dio-ecommerce-control"

techReasons:
  Java 21: "Lo utilicé para aprovechar las ventajas de las versiones modernas del lenguaje, garantizando una base estable, tipado fuerte y alto rendimiento al gestionar el flujo de inventario."
  Spring Boot 3: "Lo elegí para acelerar la creación de la API RESTful, aprovechando la inyección de dependencias nativa y las facilidades de Spring Data JPA para interactuar con la base de datos."
  RabbitMQ: "Lo adopté como el broker de mensajería asíncrona para permitir la comunicación entre microservicios sin bloquear ni sobrecargar el flujo principal de compra."
  MapStruct: "Lo implementé para realizar el mapeo automático entre las entidades de la base de datos y los DTOs de forma limpia, eliminando la necesidad de escribir código repetitivo a mano."

metadata:
  status: "En desarrollo"
  platform: "Distributed API"
  role: "Desarrolladora Backend Solo"
  industry: "E-commerce"
  
  challenges:
    - kicker: "Desafío 1: Acoplamiento Rígido y Bloqueo de Flujos"
      title: "Sincronización de inventario sin comprometer la disponibilidad del sistema"
      description: "In las arquitecturas de comercio electrónico, si la actualización del inventario depende de llamadas HTTP directas y síncronas, el sistema puede volverse lento o caerse si alguno de los servicios falla."
      resolution: "Desarrollé un listener asíncrono conectado a la cola 'product.change.availability.queue'. Configurando el Jackson2JsonMessageConverter, logré consumir los eventos de cambio de estado en segundo plano, actualizando la base de datos mediante JPA sin interrumpir la experiencia del usuario."
      
features:
  - "Registro y consulta de productos en el inventario con ordenación nativa por nombre"
  - "Consumo asíncrono de mensajes JSON para actualizaciones de disponibilidad en tiempo real"
  - "Integración mediante API RESTful con el microservicio de vitrina externo (Storefront)"
  - "Documentación interactiva de API automatizada con Swagger UI y SpringDoc OpenAPI"
  - "Persistencia de datos configurada con Spring Data JPA y base de datos H2 para pruebas rápidas"
---

## Sobre el Proyecto

**Warehouse Microservice** es un sistema de backend enfocado en la gestión de inventario que diseñé y construí para formar parte de una arquitectura distribuida de comercio electrónico. El objetivo central del proyecto fue resolver el problema del acoplamiento rígido entre los sistemas de catálogo e inventario.

Antes de implementar este enfoque de microservicio asíncrono, cualquier inestabilidad en las consultas de productos afectaba directamente el flujo de pago. Con esta solución, descentralicé las responsabilidades, permitiendo que el inventario procese los cambios de estado de manera aislada y garantizando que la tienda siga operativa incluso durante picos de alta demanda.

## Arquitetura e Decisões Técnicas

Estructuré el diseño del proyecto separando estrictamente las responsabilidades en capas bien definidas (Controller → Service → Repository). Busqué herramientas modernas que evitaran código repetitivo y facilitaran el mantenimiento de forma autónoma:

{{< technologies >}}

## Desafíos y Soluções de Engenharia

Durante el desarrollo de los componentes de mensajería, me enfoqué principalmente en asegurar que el microservicio pudiera recibir datos externos e interpretar correctamente los cambios de disponibilidad sin provocar errores de persistencia.

{{< challenges >}}

## Impacto e Resultados

Por el momento, no he configurado herramientas de monitoreo de infraestructura (como Prometheus) ni pruebas de carga automatizadas en este repositorio. Sin embargo, los resultados técnicos y cualitativos que alcancé programando de forma individual fueron:
- **Reducción de Código Repetitivo:** Al combinar Lombok con MapStruct, reduje drásticamente la necesidad de escribir métodos de conversión de datos, getters y setters a mano, lo que me permitió concentrarme únicamente en la lógica de negocio.
- **Entorno de Inicio Rápido:** Configuré el entorno utilizando Gradle Wrapper y una base de datos en memoria H2, lo que permite clonar el repositorio y levantar la aplicación de inmediato con comandos sencillos, eliminando la necesidad de configurar bases de datos locales.