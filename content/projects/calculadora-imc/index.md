---
title: Calculadora de IMC
date: 2024-06-28
featured: false
weight: 5
draft: false
description: Uma ferramenta front-end simples para cálculo do Índice de Massa Corporal (IMC) com estilização condicional baseada nas faixas da OMS.
imageCover: calculadora-imc.webp
imageCoverFallback: calculadora-imc.png
categories:
  - frontend
technologies:
  - JavaScript
  - HTML5
  - CSS3
liveDemo: https://emellybmuniz.github.io/calculadora-imc/
repositoryUrl: https://github.com/emellybmuniz/calculadora-imc
metadata:
  status: Concluído
  platform: Web Application (Client-side)
  role: Desenvolvedora Frontend
  industry: Ferramentas Utilitárias
  challenges:
    - kicker: 'Desafio 1: Formatação de Decimais'
      title: Tratamento de vírgulas em inputs numéricos
      description: 'Evitar que a inserção de alturas ou pesos usando o padrão de pontuação brasileiro (ex: 1,75) gerasse valores do tipo NaN no método parseFloat.'
      resolution: Foi aplicado o método '.replace(',', '.')' nas strings capturadas dos elementos antes de realizar a conversão para ponto flutuante.
    - kicker: 'Desafio 2: Manipulação de Classes de Feedback'
      title: Alternância dinâmica de cores do estado de resultado
      description: Garantir que as classes de estilização anteriores fossem limpas a cada novo cálculo para evitar a sobreposição visual de cores de faixas diferentes.
      resolution: A propriedade 'resultadoImc.className' foi reiniciada no escopo das funções de renderização antes da inserção da nova classe de classificação.
features:
  - Cálculo matemático baseado na fórmula oficial da OMS.
  - Normalização automática de inputs contendo separadores decimais distintos.
  - Estilização condicional do painel de resposta baseada no status de peso.
  - Bloqueio preventivo de recarregamento de página via interceptação de submit.
  - Folha de estilo dedicada para telas menores com desativação de efeitos pesados.
techReasons:
  HTML: Responsável pela estruturação do formulário de captura e da tabela estática contendo os intervalos de referência.
  CSS: Aplicado para criar o fundo com gradiente radial e alternar as classes de cores do painel de resultado dinamicamente.
  JavaScript: Utilizado para interceptar o envio do formulário, normalizar a entrada de caracteres (vírgula para ponto) e processar o cálculo aritmético.
---

## Sobre o Projeto

A **Calculadora de IMC** é um utilitário front-end básico desenvolvido para exercitar a captura de dados de formulários, validação condicional de entradas numéricas e alteração dinâmica de elementos de estilo baseando-se no comportamento do usuário. 

## Arquitetura e Decisões Técnicas

O projeto segue uma estrutura puramente estática e client-side, dividida para facilitar pequenas manutenções na interface:

* **`src/js/main.js`**: Centraliza as funções puras de cálculo matemático (`calculoImc`), as estruturas condicionais de mapeamento (`getClassificacao`) e o escopo do ouvinte de evento.
* **`src/css/telasmenores.css`**: Isola regras de mídia (`max-width: 540px`) removendo o gradiente radial e as sombras do container principal para simplificar a renderização em dispositivos móveis.

{{< technologies >}}

## Desafios e Soluções de Engenharia

Durante o desenvolvimento do script, os ajustes principais focaram em consistência de dados e controle de estados da interface:

{{< challenges >}}

## Impacto e Resultados

* **Interface Limpa e Sem Recarregamento**: O uso do método `evento.preventDefault()` garante que o resultado seja calculado e injetado na tela instantaneamente, melhorando o fluxo de uso da aplicação.
* **Validação de Borda**: Entradas negativas, nulas ou strings de texto não numéricas são retidas na validação primária do script, disparando um estado visual de erro padronizado para o usuário.
