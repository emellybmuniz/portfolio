---
title: "Cofrinho de Moedas em Java"
date: "2026-03-23"
featured: false
weight: 5
draft: false
description: "Aplicação baseada em console desenvolvida em Java para simular o armazenamento, gerenciamento e conversão de moedas estrangeiras com persistência JSON ad-hoc."
imageCover: "cofrinho-java.webp"
imageCoverFallback: "cofrinho-java.png"
categories: 
  - "Backend"
technologies:
  - "Java"
  - "Maven"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/eb-cofrinho-java"

techReasons:
  Java: "Linguagem escolhida para aplicar conceitos rigorosos de Orientação a Objetos (OO), polimorfismo e tipagem estática no domínio de regras de negócio financeiras."
  Maven: "Utilizado como gerenciador de build para automatizar o ciclo de vida da aplicação, compilação e empacotamento sem dependências de frameworks."

metadata:
  status: "Em desenvolvimento"
  platform: "Console Application (CLI)"
  role: "Desenvolvedora Java"
  industry: "Ferramentas Utilitárias / Estudo"
  
  challenges:
    - kicker: "Desafio 1: Persistência sem Dependências"
      title: "Serialização JSON ad-hoc nativa"
      description: "Persistir e carregar o estado das moedas em um arquivo local (`cofrinho.json`) sem introduzir bibliotecas externas de mercado (como Jackson ou Gson)."
      resolution: "Implementação de um parser e serializador manual baseado em manipulação direta de strings e mapeamento chave-valor no repositório de arquivos."
    - kicker: "Desafio 2: Extensibilidade de Domínio"
      title: "Inclusão de novas moedas sem refatoração estrutural"
      description: "Garantir que a adição de novas moedas (como Libra ou Iene) não gerasse acoplamento rígido na lógica de cálculo total do cofrinho."
      resolution: "Uso de herança a partir de uma classe abstrata comum ('Moeda') combinado com um 'enum' centralizador de taxas ('TipoMoeda'), permitindo que o método de cálculo opere via polimorfismo dinâmico."

features:
  - "Menu interativo via terminal para operações de CRUD de moedas."
  - "Cálculo automatizado de conversão monetária baseado em taxas flutuantes."
  - "Tratamento de exceções robusto através de barreira de validação personalizada."
  - "Persistência em arquivo JSON local com IDs auto-incrementais estáveis."
---

## Sobre o Projeto

O **Cofrinho Java** é uma aplicação utilitária executada via linha de comando (CLI) projetada para exercitar a lógica pura de programação com o ecossistema Java Vanilla. O software simula o comportamento de um cofrinho físico, permitindo ao usuário depositar moedas de diferentes nacionalidades (Real, Dólar e Euro), remover itens específicos através de identificadores únicos e consultar o saldo total consolidado e convertido para a moeda local (BRL).

## Arquitetura e Decisões Técnicas

O design de código prioriza a legibilidade e a separação clara de responsabilidades através de divisões de pacotes estruturadas:

* **`model/`**: Centraliza a lógica de dados. A classe abstrata `Moeda` dita o contrato que `Real`, `Dolar` e `Euro` estendem. O `enum` `TipoMoeda` armazena os metadados fixos de cada moeda, como símbolos e taxas base.
* **`repository/`**: Isola o acesso ao sistema de arquivos através da interface `CofrinhoRepository`, desacoplando a camada de regras da estratégia de gravação em disco.
* **`exception/`**: Define a classe `invalidValueException`, agindo como uma barreira de segurança que rejeita valores nulos, negativos ou inconsistentes em tempo de execução.

{{< technologies >}}

## Desafios e Soluções de Engenharia

Durante o desenho arquitetural do projeto, o foco residiu em contornar a ausência de bibliotecas prontas de persistência:

{{< challenges >}}

## Impacto e Resultados

* **Código Limpo e Escalável**: A adição de uma nova unidade monetária requer poucas linhas de alteração, restringindo-se à criação de sua classe e à atualização do mapeamento do enum.
* **Integridade dos Dados**: A aplicação de regras estritas no construtor e nas validações do parser impede a corrupção do arquivo físico `cofrinho.json`, garantindo que o estado da aplicação permaneça íntegro entre execuções consecutivas.