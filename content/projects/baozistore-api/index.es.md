---
title: "Baozi Store API"
date: "2026-05-10"
featured: false
weight: 10
draft: false
description: "API RESTful desarrollada con Spring Boot para la gestión de clientes, productos y pedidos en el dominio de comercio electrónico, diseñada con aislamiento de entornos y desacoplamiento de datos relacionales."
imageCover: "docs/baozistore_use_case.png"
imageCoverFallback: "To be confirmed"
categories: 
  - "Backend"
technologies:
  - "Java"
  - "Spring Boot"
  - "Spring Data JPA"
  - "H2 Database"
  - "MySQL"
liveDemo: "#"
repositoryUrl: "To be confirmed"

techReasons:
  Java: "Lenguaje de programación principal empleado en su versión 21, permitiendo el uso de capacidades modernas de concurrencia y tipado estático fuerte."
  Spring Boot: "Utilizado en su versión 4.0.6 para acelerar el arranque del ecosistema mediante autoconfiguraciones predefinidas e inyección estructurada de dependencias."
  Spring Data JPA: "Abstracción sobre la capa de persistencia elegida para remover código repetitivo de operaciones CRUD mediante la herencia limpia de JpaRepository."
  H2 Database: "Base de datos relacional en memoria integrada en el perfil predeterminado para agilizar pruebas locales y optimizar el onboarding técnico de nuevos ingenieros."
  MySQL: "Motor relacional persistente convencional configurado para entornos persistentes a través de archivos de propiedades aislados."

metadata:
  status: "Concluido"
  platform: "Backend API"
  role: "Desarrolladora Backend"
  industry: "E-commerce"
  
  challenges:
    - kicker: "Desafío 1: Acoplamiento de Datos"
      title: "Evitando trampas de carga en cascada en el mapeo relacional"
      description: "En lógicas de comercio electrónico, el uso excesivo de relaciones administradas por ORM entre Pedidos, Clientes y Productos genera sobrecostos de procesamiento debido a políticas incorrectas de carga (EAGER/LAZY) y dificulta la evolución del software."
      resolution: "Se removieron las relaciones directas gestionadas por Hibernate (como @ManyToOne). La entidad Pedido fue estructurada para almacenar clienteId y produtoId como atributos primitivos tipo UUID, reduciendo el costo transaccional de persistencia y preparando el sistema para una migración limpia hacia microservicios autónomos."
    - kicker: "Desafío 2: Configuración de Entornos"
      title: "Reducción de fricción en la inicialización del entorno de desarrollo"
      description: "La obligación de configurar y mantener servidores relacionales locales externos (como MySQL) ralentiza el despliegue inicial de los espacios de trabajo de los ingenieros."
      resolution: "Se implementó un aislamiento de infraestructura utilizando Spring Profiles. El perfil predeterminado arranca el sistema de manera efímera con H2 y la consola web (/h2-console) activa, mientras que el perfil 'mysql' activa la comunicación relacional convencional bajo demanda con ddl-auto en modo 'update'."
      
features:
  - "CRUD Completo de Clientes (Seguimiento de nombres y fechas de registro de usuarios)"
  - "CRUD Completo de Productos (Gestión de precios decimales de alta precisión y banderas de stock)"
  - "CRUD Completo de Pedidos asociados a través de identificadores universales estables (UUID)"
  - "Segmentación dinámica de entornos de base de datos ejecutada por Spring Profiles"
  - "Sincronización automática de esquemas relacionales mediante configuración Hibernate DDL"
  - "Documentación de requerimientos funcionales del sistema mediante diagramas PlantUML"
---

## Sobre o Projeto

La **Baozi Store API** es una solución de backend diseñada específicamente para el ámbito del comercio electrónico, estructurada con el fin de centralizar y procesar las operaciones de datos más críticas de un entorno comercial: el registro de usuarios compradores (Clientes), la administración del catálogo de inventario (Produtos) y el procesamiento de transacciones de venta (Pedidos).

Antes de la creación de este servicio, las rutinas de e-commerce carecían de una interfaz unificada que garantizara la cohesión estructural del modelo relacional y la separación estricta de las reglas de negocio. La aplicación solventa este reto proporcionando endpoints REST puros, permitiendo que interfaces de usuario o aplicaciones cliente interactúen de forma segura e intuitiva mediante contratos HTTP predecibles (`POST`, `GET`, `DELETE`).

## Arquitetura e Decisões Técnicas

El diseño del código fuente sitúa la mantenibilidad del software, el bajo acoplamiento de componentes y la experiencia del desarrollador (DevEx) en el centro de la estrategia de ingeniería:

* **Arquitectura en Capas (Layered Architecture):** Las responsabilidades están distribuidas de forma rigurosa en paquetes independientes: `controller` (gestión de rutas y respuestas HTTP), `model` (entidades de dominio con anotaciones JPA) y `repository` (capa lógica de acceso a datos), aplicando inyección de dependencias nativa por constructores.
* **Persistencia Abstraída:** La adopción de extensiones limpias de `JpaRepository` evita la necesidad de escribir manualmente consultas SQL relacionales para operaciones básicas de datos, delegando al framework el ciclo de vida transaccional.
* **Estrategia de Claves UUID Universales:** Se configuró `@UuidGenerator` de Hibernate para la gestión de las claves primarias de todas las entidades, eliminando ataques de enumeración secuencial en los identificadores expuestos en la red y previniendo colisiones lógicas en futuras réplicas de datos.

{{< technologies >}}

## Desafios e Soluções de Engenharia

Durante la implementación, se adoptaron cambios estratégicos de diseño para sortear bloqueos tradicionales de infraestructura local y sobrecostos de mapeo de bases de datos:

{{< challenges >}}

## Impacto e Resultados

No existen indicadores cuantitativos de rendimiento (solicitudes por segundo), porcentaje numérico de cobertura de pruebas unitarias o análisis de latencia registrados en los artefactos de documentación locales dentro del repositorio. Sin embargo, la entrega del software produce resultados prácticos y cualitativos verificables para la ingeniería y operación:

* **Onboarding de Desarrolladores Sin Configuración:** La inclusión de Maven Wrapper (`mvnw`) en la raíz del proyecto junto con el banco de datos en memoria preconfigurado permite compilar y levantar el servicio de forma inmediata ejecutando el comando simple `mvn spring-boot:run`. Esto elimina errores por incompatibilidades relacionales locales en los equipos.
* **Fiabilidad Operativa Validada Empíricamente:** Registros de ejecución detallados y capturas de pruebas funcionales en clientes REST (Postman/Insomnia) confirman un correcto manejo de respuestas, devolviendo códigos de estado HTTP estándar (200 OK para consultas exitosas y búsquedas directas por ID, y 204 No Content para la purga de registros).
* **Alineación de Requisitos y Código:** Los casos de uso técnicos se encuentran formalizados a nivel del repositorio mediante archivos PlantUML (`docs/use-case-baozistore.puml`), garantizando que las capacidades descritas a nivel de análisis de requisitos correspondan con total fidelidad con las rutas configuradas en la capa Spring.