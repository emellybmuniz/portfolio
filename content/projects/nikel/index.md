---
title: "Nikel - Gerenciador de Finanças Pessoais"
date: "2025-11-20"
featured: false
weight: 10
draft: false
description: "Uma aplicação simples de controle financeiro desenvolvida para um desafio técnico, marcando meu primeiro contato prático com o framework Bootstrap."
imageCover: "nikel.webp"
imageCoverFallback: "nikel.png"
categories: 
  - "Frontend"
technologies:
  - "Bootstrap"
  - "JavaScript"
liveDemo: "https://emellybmuniz.github.io/nikel/"
repositoryUrl: "https://github.com/emellybmuniz/nikel"

techReasons:
  Bootstrap: "Adotado por ser o requisito central do teste técnico da Growdev, servindo como base para a criação rápida da interface responsiva e componentes como modais."
  JavaScript: "Utilizado para dar vida à aplicação, controlando as ações do usuário, os cálculos de saldo e o salvamento dos dados no navegador."
  HTML5: "Responsável pela marcação e organização básica de todas as telas do sistema, como as páginas de login, painel e transações."
  CSS3: "Usado para aplicar estilos customizados e cores personalizadas além dos padrões entregues pelo Bootstrap."

metadata:
  status: "Concluído"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Finanças / Estudo Pessoal"
  
  challenges:
    - kicker: "Desafio 1: Primeiro Contato com Bootstrap"
      title: "Adaptação ao uso de um framework CSS em um teste prático"
      description: "Como eu nunca havia utilizado o Bootstrap antes deste desafio, compreender o funcionamento do sistema de grids e a correta configuração dos modais de cadastro foi um obstáculo no início."
      resolution: "Estudei a documentação oficial do Bootstrap 5 ao longo do desenvolvimento, aprendendo a combinar as classes de linhas e colunas (row/col) e a usar os atributos nativos de dados para abrir e fechar os modais de transação sem quebrar o layout."
      
    - kicker: "Desafio 2: Armazenamento e Separação de Dados"
      title: "Persistir informações de múltiplos usuários localmente"
      description: "O sistema precisava guardar os registros financeiros de forma que diferentes contas de e-mail pudessem se cadastrar e ver apenas as suas próprias movimentações, usando apenas o navegador."
      resolution: "Criei uma lógica em JavaScript que utiliza o e-mail cadastrado como chave única no LocalStorage. Os dados financeiros de cada conta ficam guardados dentro de um objeto estruturado, permitindo renderizar o histórico correto assim que o login é validado."

features:
  - "Painel principal com cálculo automático de saldo com base em entradas e saídas"
  - "Histórico completo com listagem e controle de todas as movimentações inseridas"
  - "Interface responsiva adaptada para celulares com menu colapsável nativo"
  - "Lógica de autenticação simulada que impede o acesso às páginas internas sem login ativo"
  - "Validação básica de campos como formato de e-mail e tamanho mínimo de senha"
---

## Sobre o Projeto
Desenvolvi este gerenciador financeiro para concluir o desafio técnico da VesteTech através do treinamento gratuito CODAÍ 2.0 da Growdev. A aplicação funciona como uma carteira digital simples, onde o objetivo é permitir que o usuário cadastre e acompanhe seus ganhos e despesas diárias de forma direta.

Este projeto representa um marco inicial importante nos meus estudos, pois foi a primeira vez que precisei transformar requisitos de uma avaliação técnica em uma interface funcional completa, lidando com prazos e com a necessidade de disponibilizar o código em um repositório público como regra do processo.

## Construção e Escolhas Técnicas
Por se tratar de um projeto frontend focado em fundamentos, a estrutura foi construída utilizando a base tradicional da web, eliminando ferramentas complexas de build. O diferencial técnico esteve na integração entre as interações do usuário e o armazenamento nativo do navegador para garantir que as informações inseridas continuassem salvas mesmo após fechar a aba.

{{< technologies >}}

## Dificuldades no Desenvolvimento e Soluções
Durante a escrita do código, o principal foco foi fazer com que a manipulação do DOM feita pelo JavaScript conversasse de forma limpa com as classes estruturais do framework visual.

{{< challenges >}}

## Conclusão
O desenvolvimento do Nikel foi fundamental para eu entender como funciona a dinâmica de frameworks CSS e como o JavaScript puro pode resolver problemas reais de lógica de negócios e persistência simples. Por ser meu primeiro contato com o Bootstrap e um dos meus primeiros testes técnicos, o resultado foi satisfatório por entregar todos os critérios obrigatórios pedidos no desafio, servindo como uma excelente base de aprendizado prático.