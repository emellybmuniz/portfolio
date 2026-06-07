---
title: "Java Bank - Controle de Transações POO"
date: "2025-10-09"
featured: false
weight: 10
draft: false
description: "Um sistema bancário em console desenvolvido em Java puro para praticar os pilares de POO, repositórios desacoplados e tratamento rigoroso de exceções customizadas."
imageCover: "java-bank.webp"
imageCoverFallback: "java-bank.png"
categories: 
  - "Backend"
technologies:
  - "Java"
  - "Gradle"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/TransactionControlPOO"

techReasons:
  Java: "Escolhido por ser uma linguagem robusta e fortemente tipada, ideal para exercitar conceitos avançados de orientação a objetos, herança e polimorfismo."
  Gradle: "Utilizado como ferramenta de automação para estruturar o projeto, gerenciar o build e organizar o escopo das pastas de forma limpa."

metadata:
  status: "Concluído"
  platform: "Console Application (CLI)"
  role: "Backend Developer"
  industry: "Finanças / Estudo Técnico"
  
  challenges:
    - kicker: "Desafio 1: Modelagem de Domínio e Extensibilidade"
      title: "Organização de diferentes tipos de carteiras e regras"
      description: "O sistema precisava lidar com carteiras comuns de transações (AccountWallet) e carteiras focadas em ativos (InvestmentWallet) sem duplicar regras de saldo básicas herdadas de um modelo comum."
      resolution: "Desenvolvi uma estrutura de herança a partir da classe base 'Wallet', aplicando encapsulamento rígido através de modificadores de acesso protegidos e polimorfismo. Isso permitiu que o 'BankService' processe operações comuns de movimentação financeira independentemente da especialização da carteira."
      
    - kicker: "Desafio 2: Centralização do Fluxo de Erros"
      title: "Prevenção de estados inconsistentes nas transferências"
      description: "Operações financeiras simuladas (como Pix e investimentos) podiam falhar por diversos motivos lógicos, e o programa em console não podia encerrar de forma abrupta por causa de erros de digitação ou saldo insuficiente."
      resolution: "Criei um pacote dedicado de exceções de domínio mapeadas de forma cirúrgica (como 'NoFundsEnoughException', 'AccountNotFoundException' e 'PixInUseException'). A camada de serviço valida todas as pré-condições de saldo e chaves antes de alterar os repositórios, disparando esses erros de forma controlada para serem capturados e exibidos amigavelmente no loop da classe 'Main'."

features:
  - "Estrutura de domínio dividida em modelos claros (Wallet, Money, Investment, MoneyAudit)"
  - "Camada de repositório isolada para simular a busca e persistência de dados em memória"
  - "Sistema básico de auditoria financeira ('MoneyAudit') para rastreamento de movimentações"
  - "Regras de negócio isoladas em uma classe centralizada de serviços ('BankService')"
  - "Fluxo robusto de validação de dados com 6 tipos de exceções customizadas"
---

## Sobre o Projeto
Desenvolvi este sistema bancário interativo via terminal durante meus estudos de Java com o propósito claro de consolidar o entendimento prático de arquitetura modular e boas práticas de Programação Orientada a Objetos. A aplicação simula o ecossistema interno de um banco, permitindo a criação de contas, gerenciamento de investimentos, transferências entre carteiras e auditoria simples de saldos.

O objetivo principal aqui foi ir além dos exemplos teóricos simples da internet, criando um fluxo de backend realista que lida com validações pesadas de regras de negócio e simula o isolamento de camadas que encontramos em sistemas corporativos de verdade.

## Estrutura e Decisões Técnicas
A engenharia do software adota um padrão focado no desacoplamento de código. Em vez de concentrar toda a lógica no ponto de entrada do terminal, o projeto separa as responsabilidades de forma clara: os modelos contêm apenas as propriedades e comportamentos de domínio, os repositórios gerenciam os mapas de dados na memória, e a classe de serviço dita as regras lógicas de transação.

{{< technologies >}}

## Controle de Erros e Desafios de Código
Durante o desenvolvimento, o maior foco técnico esteve em garantir que as operações de movimentação monetária não permitissem furos lógicos, como saldos negativos não autorizados ou contas fantasmas.

{{< challenges >}}

## Conclusão
O desenvolvimento do Java Bank foi uma excelente experiência para entender na prática a importância do encapsulamento e do design de código defensivo. Conseguir estruturar múltiplos repositórios em memória e amarrar toda a lógica através de exceções personalizadas me deu uma base sólida de como construir códigos Java legíveis, organizados e fáceis de estender. Por ser uma aplicação console focada em lógica pura, o resultado cumpriu seu papel didático sem a necessidade de frameworks externos ou telas complexas.