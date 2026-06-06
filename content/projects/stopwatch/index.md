---
title: "Cronômetro"
date: 2024-01-01
featured: false
weight: 10
draft: false
description: "Aplicação simples de cronômetro operada inteiramente através de manipulação de tempo no JavaScript."
imageCover: "stopwatch.webp"
imageCoverFallback: "stopwatch.png"
categories: 
  - frontend
technologies:
  - HTML5
  - CSS3
  - JavaScript
liveDemo: "https://emellybmuniz.github.io/stopwatch/"
repositoryUrl: "https://github.com/emellybmuniz/stopwatch"

techReasons:
  JavaScript: "Orquestração matemática contínua utilizando métodos como `setInterval` e manipulação de milissegundos convertidos para o formato relógio."
  HTML5: "Marcação estrita e acessível dos botões de ação (Iniciar, Parar, Resetar) e do painel do display."
  CSS3: "Uso de fontes monoespaçadas no visor para garantir que os caracteres não saltem na tela a cada mudança de dígito, preservando a UX."

metadata:
  status: "Concluído"
  platform: "Web"
  role: "Desenvolvedora"
  industry: "Tecnologia"
  
  challenges:
    - kicker: "Desafio 1: Lorem Ipsum"
      title: "Lorem Ipsum"
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      resolution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      
features:
  - "Lorem ipsum dolor"
  - "Lorem ipsum dolor"
---

## Sobre o Projeto
O projeto de Cronômetro foi desenvolvido visando um caso de uso muito estrito: entender a fundo como a web lida com métodos nativos de tempo, lidando com os desvios causados pelo *Event Loop* do navegador.

### Lidando com o Tempo

Ao invés de depender de bibliotecas externas grandes como Moment.js ou Date-fns, o controle é puramente artesanal, rodando um loop contínuo e registrando instâncias de data crua e seus *deltas* em variáveis. A reatividade do display baseada nos botões de start/stop ocorre quase instantaneamente, refletindo uma manipulação direta e performática do DOM.

## Arquitetura e Decisões Técnicas
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Impacto e Resultados
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
