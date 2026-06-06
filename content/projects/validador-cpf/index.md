---
title: "Validador de CPF"
date: 2024-01-01
featured: false
weight: 10
draft: false
description: "Aplicação web que consome a regra matemática da Receita Federal para validar CPFs brasileiros."
imageCover: "validador-cpf.webp"
imageCoverFallback: "validador-cpf.png"
categories: 
  - frontend
technologies:
  - JavaScript
  - HTML5
  - CSS3
liveDemo: "https://emellybmuniz.github.io/validador-CPF/"
repositoryUrl: "https://github.com/emellybmuniz/validador-CPF"

techReasons:
  JavaScript: "Linguagem isolada no lado cliente para executar instantaneamente a verificação iterativa matemática dos dois últimos dígitos de segurança sem necessidade de requisições de servidor."
  HTML5: "Criação semântica limpa dos campos para coleta limpa das numerações."
  CSS3: "Feedback imediato de cor ao usuário demonstrando dinamicamente com base nas regras inseridas no DOM as validações em tons verdes e vermelhos."

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
Um painel de utilidade prática desenvolvido para atuar primariamente como validador assíncrono. Esta interface não salva ou repassa dados; ela destrói e aplica algoritmicamente o conceito por trás do documento CPF (Cadastro de Pessoas Físicas).

### Cálculo de Dígitos

Ao invés de verificar o formato em uma simples Regex, o projeto implementa em JavaScript puro a regra modular real dos dois últimos dígitos verificadores do documento brasileiro, validando toda a cadeia de arrays e filtrando pontuações e formatos incorretos enviados pelo usuário quase imediatamente. A resposta de erro ou acerto é renderizada em tela limpa sob um design centralizado agradável.

## Arquitetura e Decisões Técnicas
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Impacto e Resultados
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
