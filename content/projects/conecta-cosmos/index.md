---
title: "Conecta Cosmos"
date: "2026-06-05"
featured: true
weight: 10
draft: false
description: "Aplicação web interativa e educacional para exploração do Sistema Solar e validação de conhecimento com quiz dinâmico desenvolvida por mim."
imageCover: "conecta-cosmos.webp"
imageCoverFallback: "assets/images/background.png"
categories: 
  - "Frontend"
technologies:
  - "React"
  - "TypeScript"
  - "Tailwind CSS"
  - "Vite"
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/conecta-cosmos"

techReasons:
  React 19: "Escolhi o React 19 para construir uma interface declarativa, onde consegui modularizar os componentes visuais do Sistema Solar e controlar o estado do quiz de forma simples."
  TypeScript: "Adicionei no projeto para garantir tipagem estática nos modelos de dados dos planetas e nas perguntas do quiz, me ajudando a evitar erros de propriedade indefinida em tempo de execução."
  Tailwind CSS: "Foi o framework que escolhi para fazer a estilização responsiva de forma rápida, criando os efeitos visuais do espaço sem precisar encher o projeto com arquivos CSS separados."
  Vite: "Adotei como minha ferramenta de build para fugir de configurações complexas. Ele me deu um recarregamento muito rápido em desenvolvimento e gerou arquivos leves para a produção."

metadata:
  status: "Em desenvolvimento"
  platform: "Web"
  role: "Desenvolvedora Frontend Solo"
  industry: "Educação / Tecnologia"
  
  challenges:
    - kicker: "Desafio 1: Gerenciamento e Estruturação de Dados"
      title: "Organização das informações dos corpos celestes e do quiz"
      description: "No começo, percebi que colocar muitos dados sobre os planetas e perguntas direto nos componentes de tela ia deixar meu código confuso e ruim de mexer depois."
      resolution: "Eu resolvi isso separando e tipando todos os dados em arquivos '.ts' na pasta data, deixando meus componentes limpos e focados só em mostrar a interface."
      
features:
  - "Sistema Solar interativo com efeitos visuais ao passar o mouse (hover)"
  - "Exibição de dados astronômicos detalhados ao selecionar um corpo celeste"
  - "Quiz de múltipla escolha integrado para testar o conhecimento do usuário"
  - "Estrutura moderna baseada em componentes reutilizáveis e fortemente tipados"
---

## Sobre o Projeto

O **Conecta Cosmos** é uma aplicação web educacional que eu idealizei e construí sozinha para transformar o aprendizado sobre o Sistema Solar em algo visual e interativo. Eu queria resolver o problema de conteúdos didáticos tradicionais que costumam ser estáticos, criando um espaço onde quem está estudando possa clicar nos planetas, descobrir curiosidades e testar o que aprendeu na mesma hora com um quiz.

## Arquitetura e Decisões Técnicas

Eu montei o projeto usando uma arquitetura moderna voltada para o frontend, focando em deixar o código organizado para eu conseguir dar manutenção sozinha no futuro. Minhas escolhas priorizaram ferramentas que me dessem velocidade e segurança:

{{< technologies >}}

## Desafios e Soluções de Engenharia

Durante o desenvolvimento, foquei bastante em como organizar o fluxo de informações para garantir que a tela respondesse rápido quando o usuário clicasse em um planeta ou respondesse uma pergunta.

{{< challenges >}}

## Impacto e Resultados

Eu ainda não configurei ferramentas de métricas ou dados de acesso no repositório. Porém, avaliando o meu desenvolvimento e o código, os resultados que alcancei foram:
- **Código mais organizado:** Como eu separei os dados estruturados (planetas e perguntas) dos componentes visuais, ficou muito mais fácil se eu quiser sentar e adicionar novos conteúdos depois.
- **Ambiente de desenvolvimento rápido:** O uso do Vite me ajudou muito no dia a dia, porque as alterações que eu fazia no layout com Tailwind apareciam na tela instantaneamente.