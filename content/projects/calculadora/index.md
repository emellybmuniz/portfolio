---
title: "Calculadora Web"
date: "2024-10-09"
featured: false
weight: 5
draft: false
description: "Uma aplicação front-end simples de calculadora construída para praticar manipulação do DOM e o padrão estrutural Factory Function em JavaScript."
imageCover: "calculadora.webp"
imageCoverFallback: "calculadora-web.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML"
  - "CSS"

liveDemo: "https://emellybmuniz.github.io/calculadora/"
repositoryUrl: "https://github.com/emellybmuniz/calculadora"

techReasons:
  JavaScript: "Utilizado para construir toda a lógica operacional da calculadora, capturar cliques na interface e processar as strings de equações matematicas."
  HTML: "Responsável pela estrutura de marcação básica do display e da tabela que organiza a grade de botões numéricos e de operadores."
  CSS: "Aplicado para fazer o alinhamento centralizado do componente em telas grandes e realizar um ajuste simples de tamanho para telas de celulares."

metadata:
  status: "Concluído"
  platform: "Web Application (Client-side)"
  role: "Desenvolvedora Frontend"
  industry: "Ferramentas Utilitárias"
  
  challenges:
    - kicker: "Desafio 1: Captura e Contexto de Eventos"
      title: "Manutenção do contexto dinâmico do JavaScript"
      description: "Evitar que o escopo do 'this' fosse perdido ao disparar funções de clique de dentro do ouvinte de eventos global do documento."
      resolution: "Foi utilizado o método '.bind(this)' dentro da função de delegação de eventos para amarrar o contexto correto da Factory Function."
    - kicker: "Desafio 2: Validação de Equações"
      title: "Tratamento de entradas inválidas no display"
      description: "Impedir que caracteres quebrados ou operações aritméticas impossíveis causassem erros fatais ou exibissem conteúdos estranhos ao usuário."
      resolution: "Criação de uma validação com bloco try/catch combinada com a função 'isFinite()' para identificar divisões por zero ou sintaxes corrompidas."

features:
  - "Operações aritméticas básicas e controle de precedência por parênteses."
  - "Navegação híbrida aceitando cliques em tela e entrada direta via teclado."
  - "Estrutura Javascript encapsulada através do padrão Factory Function."
  - "Validação de erro nativa com disparo de alertas em telas de falhas estruturais."
  - "Layout flexível com adaptação automática para visualização em smartphones."
---

## Sobre o Projeto

A **Calculadora Web** é um projeto de nível iniciante criado com o objetivo de fixar o aprendizado prático de manipulação estrutural de elementos da página (DOM) e organização de escopos em JavaScript nativo. O sistema funciona diretamente no navegador do cliente, oferecendo uma interface padrão para a resolução de contas cotidianas.

## Arquitetura e Decisões Técnicas

O desenvolvimento evitou o uso de bibliotecas pesadas ou frameworks complexos para focar estritamente na base do ecossistema web vanilla. A lógica interna está concentrada na arquitetura abaixo:

* **Delegação de Eventos (Event Delegation)**: Um único ouvinte de evento `click` mapeia o documento inteiro, filtrando os alvos pelos nomes de suas classes para reduzir o consumo de memória.
* **Factory Function (`createCalculator`)**: Estrutura orientada a objetos que encapsula as propriedades e agrupa as ações de inicialização, limpeza, exclusão de caracteres e exibição de resultados.

{{< technologies >}}

## Desafios e Soluções de Engenharia

Durante a escrita do script, o foco esteve em contornar pequenos comportamentos do interpretador e problemas de validação:

{{< challenges >}}

## Impacto e Resultados

* **Código Modular**: Divisão clara de tarefas onde as tags HTML apenas demarcam o esqueleto, o arquivo CSS dita a aparência visual dos botões e o arquivo JavaScript controla as ações.
* **Interface Direta**: O display se comporta conforme o padrão físico de calculadoras de mesa, aplicando alinhamento à direita e foco persistente na caixa de texto.