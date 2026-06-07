---
title: "Validador de CPF - Algoritmo Matemático"
date: "2024-12-23"
featured: false
weight: 10
draft: false
description: "Uma ferramenta simples em JavaScript puro desenvolvida para validar números de CPF através da implementação prática do algoritmo oficial de dígitos verificadores."
imageCover: "validador-cpf.webp"
imageCoverFallback: "validador-cpf.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/validador-cpf/"
repositoryUrl: "https://github.com/emellybmuniz/validador-CPF"

techReasons:
  JavaScript: "Utilizado para aplicar a lógica de limpeza de caracteres da string de entrada e executar os laços numéricos que calculam os dígitos de checagem."
  HTML5: "Responsável pela estrutura de formulário básica, fornecendo o campo de texto estruturado para a entrada do usuário."
  CSS3: "Adotado para criar a interface limpa e gerenciar as cores de feedback visual que alertam se o número inserido está correto."

metadata:
  status: "Concluído"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Educação / Estudo Pessoal"
  
  challenges:
    - kicker: "Desafio 1: Compreensão do Algoritmo de Validação"
      title: "Traduzir regras de cálculo algébrico para código funcional"
      description: "Como eu não tinha nenhuma ideia de como funcionava a fórmula real de validação matemática de um CPF, entender os cálculos de pesos e divisões foi a maior barreira no início do código."
      resolution: "Pesquisei e estudei a lógica oficial do cálculo (multiplicações regressivas pelos pesos de 10 a 2 para o primeiro dígito e de 11 a 2 para o segundo, seguidas pelo cálculo do resto da divisão por 11). Consegui traduzir esses passos teóricos em laços de repetição 'for' encadeados dentro do script."
      
    - kicker: "Desafio 2: Sanitização da Entrada de Dados"
      title: "Isolar apenas os números para evitar falhas nos loops"
      description: "Se o usuário inserisse o CPF contendo pontuações tradicionais (como pontos e traços) ou espaços, os cálculos baseados nos índices de posições numéricas gerariam resultados incorretos."
      resolution: "Implementei uma rotina simples de limpeza utilizando o método nativo '.replace()' combinado com uma expressão regular básica ('/\\D/g'). Isso faz com que qualquer caractere que não seja um número seja descartado antes de enviar a string tratada para a função da fórmula."

features:
  - "Validação estruturada baseada na fórmula matemática oficial do documento"
  - "Feedback visual imediato indicando o estado de válido ou inválido"
  - "Tratamento automático da string digitada para remoção de pontos e traços"
  - "Layout responsivo adaptado para visualização simples em dispositivos móveis"
  - "Desenvolvimento nativo (Vanilla JS) livre de dependências ou pacotes externos"
---

## Sobre o Projeto
Desenvolvi este validador de CPF como um exercício prático dentro do meu curso de JavaScript. A proposta era criar uma aplicação simples e útil, onde o usuário pudesse digitar um número de documento e conferir de forma instantânea se ele obedece às regras matemáticas oficiais de emissão.

O foco desse projeto foi sair da manipulação puramente visual e começar a lidar com o tratamento de regras de negócio em código frontend, aprendendo a limpar dados inseridos e validar strings em tempo real.

## Organização e Escolhas Técnicas
A interface do projeto foi desenhada para ser o mais direta possível, focando no funcionamento limpo do script. Toda a dinâmica da página roda no lado do cliente (client-side) sem a necessidade de processamento em servidores, utilizando a separação tradicional em arquivos específicos para a marcação, o estilo visual e a lógica do script.

{{< technologies >}}

## Dificuldades Lógicas e Soluções
Durante a escrita das funções, o foco principal esteve em decifrar a lógica de validação de documentos e estruturar o tratamento de strings para evitar erros nos laços matemáticos.

{{< challenges >}}

## Conclusão
Este projeto foi muito gratificante porque me mostrou na prática que o desenvolvimento frontend exige raciocínio lógico claro além da estilização visual. Descobrir como funcionava a fórmula matemática por trás dos dígitos verificadores de um CPF e conseguir estruturar essa sequência de multiplicações e validações em JavaScript puro foi um excelente exercício de aprendizado para a minha base como desenvolvedora.