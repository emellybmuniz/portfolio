---
title: "Warehouse Microservice"
date: "2025-10-24"
featured: true
weight: 10
draft: false
description: "A stock management microservice using asynchronous processing and real-time synchronization via RabbitMQ."
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
  Java 21: "I used it to leverage the modern features of the language, ensuring a stable, strongly typed, and high-performance core to handle stock flows."
  Spring Boot 3: "I chose it to speed up the RESTful API creation, making full use of its native dependency injection and Spring Data JPA features to communicate with the database."
  RabbitMQ: "I adopted it as an asynchronous message broker to handle communication between microservices without blocking or overloading the main purchase flow."
  MapStruct: "I implemented it to automatically and cleanly map database entities to DTOs, eliminating the need to write boilerplate mapping code manually."

metadata:
  status: "In development"
  platform: "Distributed API"
  role: "Solo Backend Developer"
  industry: "E-commerce"
  
  challenges:
    - kicker: "Challenge 1: Tight Coupling and Flow Blocking"
      title: "Stock synchronization without disrupting system availability"
      description: "In e-commerce architectures, relying on synchronous HTTP calls to update stock can slow down or crash the application if one of the services fails."
      resolution: "I developed an asynchronous listener attached to the 'product.change.availability.queue'. By configuring the Jackson2JsonMessageConverter, I set up the service to consume status update events in the background, refreshing the database via JPA without freezing the user experience."
      
features:
  - "Product inventory registration and retrieval with native sorting by name"
  - "Asynchronous JSON message consumption for real-time availability updates"
  - "RESTful API integration with the external storefront microservice"
  - "Automated interactive API documentation powered by Swagger UI and SpringDoc OpenAPI"
  - "Data persistence configured using Spring Data JPA and an H2 database for rapid testing"
---

## About the Project

The **Warehouse Microservice** is a backend system focused on inventory management that I built to integrate into a distributed e-commerce architecture. The project's main purpose was to address the tight coupling issue between catalog and inventory systems.

Before implementing this asynchronous microservice approach, any instability during product queries would directly affect the checkout flow. With this solution, I decoupled the responsibilities, enabling the inventory system to process status changes in isolation and ensuring the storefront remains operational even during peak traffic periods.

## Architecture and Technical Decisions

I structured the project layout by strictly separating responsibilities into well-defined layers (Controller → Service → Repository). I targeted a modern stack that minimizes boilerplate and simplifies autonomous software maintenance:

{{< technologies >}}

## Engineering Challenges and Solutions

While developing the messaging components, I focused heavily on ensuring the microservice could correctly ingest external data payloads and interpret availability changes without causing persistence errors.

{{< challenges >}}

## Impact and Results

At this stage, I have not configured infrastructure tracking tools (such as Prometheus) or automated load testing inside this repository. However, the qualitative and technical results achieved from this solo development approach include:
- **Reduced Boilerplate Code:** By pairing Lombok with MapStruct, I drastically decreased the need to manually write getters, setters, and structural data conversion methods, allowing me to focus entirely on core business logic.
- **Frictionless Onboarding:** I configured the environment using Gradle Wrapper alongside an H2 in-memory database, which means you can clone the repository and run the application instantly using simple commands, without needing a local database setup.