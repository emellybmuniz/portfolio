---
title: "Portafolio Personal"
date: 2026-06-06
featured: true
weight: 10
draft: false
description: "Rediseño de portafolio enfocado en altísimo rendimiento, arquitectura escalable y fuerte garantía de calidad mediante E2E y CI/CD."
imageCover: "portfolio-project-cover.webp"
imageCoverFallback: "portfolio-project-cover.png"
categories: 
  - "Frontend"
technologies:
  - "Hugo"
  - "Sass"
  - "TypeScript"
  - "Playwright"
  - "GitHub Actions"
liveDemo: "https://emellybeatriz.pages.dev"
repositoryUrl: "https://github.com/emellybmuniz/portfolio"

techReasons:
  Hugo: "Generación estática ultrarrápida, excelente para SEO y sirve HTML puro directo en CDN."
  SCSS: "Permite una arquitectura robusta basada en Feature Co-location, con tokens globales."
  TypeScript: "Tipado estático para evitar ruptura de contratos de interfaz en tiempo de ejecución."
  Playwright: "Herramienta moderna para probar flujos críticos y asegurar regresión visual en cada commit."
  GitHub Actions: "Automatización total del pipeline, bloqueando deploys si el puntaje de Lighthouse baja."

metadata:
  status: "Completado"
  platform: "Web Application"
  role: "Desarrolladora Frontend"
  industry: "Tecnología / Diseño"
  
  challenges:
    - kicker: "Desafío 1: Escalabilidad vs Rendimiento"
      title: "Diseño premium sin frameworks pesados"
      description: "El mayor desafío técnico consistió en orquestar una interfaz rica en detalles visuales y micro-interacciones manteniendo un estricto presupuesto de rendimiento (Lighthouse > 90)."
      resolution: "En lugar de usar React/Next.js, modularicé la arquitectura en Feature Co-Location (HTML, SCSS y TS agrupados), reduciendo la carga del DOM y cargando solo el Vanilla JS estrictamente necesario."
    - kicker: "Desafío 2: Quality Assurance Automático"
      title: "Garantizando estabilidad sin pruebas unitarias exhaustivas"
      description: "Al ser un proyecto puramente visual, no tenía sentido escribir cientos de pruebas unitarias triviales, pero el sitio aún no podía romperse."
      resolution: "Implementé pruebas E2E y de Regresión Visual usando Playwright. Se configuró un pipeline de CI/CD (GitHub Actions) para validar el Typecheck y ejecutar Lighthouse automáticamente en cada Pull Request."
      
features:
  - "Renderizado estático altamente performante (Mínimo Time to First Byte)"
  - "Pruebas E2E de navegabilidad y regresión visual con Playwright"
  - "CI/CD integrado con Lighthouse para evitar construcciones deficientes"
  - "Gestión autónoma de dependencias a través de bot (Renovate)"
  - "Soporte nativo y fluido para Dark Mode con persistencia de estado"
---

## Sobre el Proyecto

El desarrollo de mi portafolio fue planeado como una demostración práctica de ingeniería front-end moderna. El enfoque central no fue solo crear un currículum en línea, sino construir un producto digital que reflejara madurez técnica: con tiempos de carga mínimos, ausencia de dependencias inútiles, accesibilidad y una sólida automatización de Calidad (QA).

## Arquitectura y Decisiones Técnicas

Para evitar la sobrecarga de procesamiento en el lado del cliente, abandoné los ecosistemas pesados y adopté la combinación de generación estática (SSG) con *Vanilla* TypeScript estricto.

{{< technologies >}}

## Desafíos y Soluciones de Ingeniería

A lo largo de la implementación, sorteé algunos problemas cruciales para garantizar la estabilidad del software.

{{< challenges >}}

## Impacto y Resultados

El proyecto hoy alcanza los puntajes máximos en las evaluaciones de Google (Lighthouse), con Accesibilidad, SEO y Mejores Prácticas en verde. Además, implementé un pipeline de pruebas automatizado que aseguró que cualquier alteración futura en el CSS esté blindada contra regresiones o rupturas de responsividad, ofreciendo una experiencia de código casi "a prueba de balas" para la escala del proyecto.
