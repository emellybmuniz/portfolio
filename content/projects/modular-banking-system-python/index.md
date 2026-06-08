---
title: "Modular Banking System"
date: "2026-01-07"
featured: true
weight: 11
draft: false
description: "Refatoração de um sistema bancário CLI estruturado em dicionários para uma arquitetura orientada a objetos (POO) com separação em camadas."
imageCover: "coursePortfolio.webp"
imageCoverFallback: "coursePortfolio.png"
categories: 
  - "Backend"
  - "CLI"
technologies:
  - "Python"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/modular-banking-system-python"

techReasons:
  Python: "Linguagem utilizada para aplicar os conceitos de orientação a objetos avançada, herança, encapsulamento e polimorfismo através de uma estrutura modular limpa."

metadata:
  status: "Concluído"
  platform: "CLI Application"
  role: "Desenvolvedora Backend"
  industry: "Tecnologia"
  
  challenges:
    - kicker: "Desafio 1: Migração de Paradigma"
      title: "Transição de dados estruturais em dicionários para instâncias de classes"
      description: "A antiga implementação procedural centralizava registros em dicionários e tuplas primitivas, gerando alto acoplamento e complexidade para validação de regras de negócio."
      resolution: "O domínio foi mapeado seguindo uma modelagem UML completa, encapsulando dados em objetos tipados (Client, Account, History) e isolando as transações por meio do padrão Command."
    - kicker: "Desafio 2: Coerência do Histórico Compartilhado"
      title: "Sincronização e propagação de transações entre múltiplas contas do cliente"
      description: "Garantir que todas as transações realizadas em diferentes contas financeiras fossem registradas e lidas em um histórico unificado sem misturar referências de memória."
      resolution: "Foi adotado um fluxo de inicialização que vincula dinamicamente uma única instância de 'History' ao cliente, fazendo com que as contas criadas herdem essa mesma referência de forma transparente."
      
features:
  - "Modelagem completa de classes de domínio (Cliente, Pessoa Física, Conta Corrente, Histórico)"
  - "Encapsulamento de depósito e saque através de objetos que herdam de uma classe abstrata de transações"
  - "Camada de serviços independente para isolar fluxos corporativos das ações do terminal"
  - "Implementação de repositórios em memória baseados no padrão Singleton para simular a persistência"
  - "Validação estrita de restrições de domínio, como duplicidade de CPF e contas com o mesmo identificador"
  - "Controle de limites operacionais em saques específicos para a especialização de Conta Corrente"
  - "Interface de usuário em terminal dinâmica baseada em looping de menu interativo"
  - "Suíte completa de testes de integração funcionais estruturada com pytest"
---

## Sobre o Projeto

O Modular Banking System nasceu da necessidade de evoluir um sistema contábil originalmente montado sobre estruturas de dicionários e tuplas em Python puro para uma aplicação de software verdadeiramente modular e Orientada a Objetos. O propósito central do projeto é demonstrar a viabilidade de se converter uma lógica procedural simples em uma arquitetura de código extensível, limpa e alinhada com boas práticas de engenharia de software.

A aplicação elimina o problema de acoplamento de dados primitivos comuns em roteiros de aprendizagem iniciantes. Antes do desenvolvimento desse sistema modular, regras fundamentais como limites de saques ou validação de saldo ficavam dispersas nas funções de interface com o usuário, inviabilizando a testabilidade automatizada e a troca futura de componentes de armazenamento.

## Arquitetura e Decisões Técnicas

A estrutura foi organizada seguindo o princípio da separação de responsabilidades (SRP), distribuindo o código em camadas funcionais bem delimitadas:
* **Domain (Modelos):** Contém as entidades principais do negócio (`Client`, `Account`, `CheckingAccount`, `History`, `Transaction`). O acesso ao saldo é protegido, sendo exposto apenas para leitura externa por meio de propriedades (`@property`).
* **Repository:** Substitui variáveis globais por estruturas controladas de armazenamento em memória (`InMemoryClientRepository`, `InMemoryAccountRepository`), prontas para serem substituídas por bancos de dados relacionais sem afetar o resto da aplicação.
* **Services:** Orquestra os fluxos que conectam os repositórios às regras de domínio (criação de contas, processamento de depósitos e validações cruzadas).
* **CLI:** Interface de linha de comando isolada que consome unicamente as funções expostas na camada de serviços para exibir os dados manipulados.

A modularidade foi reforçada através da injeção de dependências. Os serviços recebem as instâncias dos repositórios durante a construção, o que permitiu o desacoplamento necessário para o desenvolvimento de testes integrados estáveis.

{{< technologies >}}

## Desafios e Soluções de Engenharia

Ao longo do desenvolvimento da aplicação, foi essencial estruturar a lógica interna de herança e resolver gargalos de retenção de dados temporários.

{{< challenges >}}

## Impacto e Resultados

* **Desacoplamento de Interface:** A interface de usuário terminal pode ser inteiramente substituída por uma API web sem a necessidade de reescrever uma única linha da lógica de negócios ou do domínio.
* **Cobertura de Casos de Falha:** A automação com o pytest cobre com precisão fluxos felizes e exceções críticas, como tentativas de saques com saldos insuficientes ou cadastros duplicados.
* **Garantia de Manutenibilidade:** O alinhamento completo com o modelo UML reduz o tempo de onboarding para novos engenheiros entenderem o fluxo de transações financeiras.