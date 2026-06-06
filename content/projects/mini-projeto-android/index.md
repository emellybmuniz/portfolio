---
title: "Mini Projeto Android"
date: "2024-05-11"
featured: false
weight: 10
draft: false
description: "Página estática básica desenvolvida no início da jornada de aprendizado para praticar semântica HTML5, embutimento de mídias e responsividade de imagens."
imageCover: "mini-projeto-android.webp"
imageCoverFallback: "mini-projeto-android.png"
categories: 
  - "Frontend"
technologies:
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/mini-projeto-android/"
repositoryUrl: "https://github.com/emellybmuniz/mini-projeto-android"

techReasons:
  HTML5: "Utilizado para construir uma estrutura semântica limpa, empregando tags como header, article, section, aside e footer para melhorar a acessibilidade."
  CSS3: "Responsável pela identidade visual verde temática, aplicação de gradientes lineares, sombras em blocos, carregamento de fontes locais via font-face e ajustes de responsividade."

metadata:
  status: "Concluído"
  platform: "Web Estática"
  role: "Desenvolvedora Frontend"
  industry: "Educação / Prática Inicial"
  
  challenges:
    - kicker: "Desafio 1: Proporção de Vídeos"
      title: "Responsividade de iframes externos"
      description: "Telas de reprodutores do YouTube incorporadas via iframe possuem largura e altura fixas em pixels por padrão, quebrando o layout em telas de celulares."
      resolution: "Foi criada uma div contêiner com posicionamento relativo e 'padding-bottom: 58%' para simular a proporção 16:9, forçando o iframe a se ajustar de forma absoluta a 100% do espaço disponível."
    - kicker: "Desafio 2: Otimização de Imagens"
      title: "Direção de arte com a tag picture"
      description: "Carregar imagens grandes e pesadas projetadas para monitores desktop em conexões móveis lentas de smartphones prejudica a performance."
      resolution: "Utilizei a tag nativa '<picture>' do HTML5 combinada com a diretiva 'media=(max-width: 640px)' para carregar variantes menores e otimizadas das ilustrações automaticamente em telas menores."

features:
  - "Marcação semântica estrita para melhor legibilidade do documento."
  - "Vídeo do YouTube perfeitamente fluido que acompanha a largura da tela."
  - "Lista customizada de curiosidades utilizando caracteres Unicode via CSS."
  - "Carregamento local de tipografia externa customizada através de '@font-face'."
  - "Estilização com sombras suaves e efeitos de transição suave ao passar o mouse (hover)."
---

## Sobre o Projeto

O **Mini Projeto Android** é uma página web simples criada puramente com HTML e CSS básicos. Ele foi desenvolvido como um estudo de caso prático logo no início dos meus estudos de programação, correspondendo a um dos desafios de layout do módulo de fundamentos do *[Curso em Vídeo](https://www.cursoemvideo.com/)*. 

O site apresenta de forma direta e limpa a história e curiosidades por trás da criação do famoso mascote do sistema operacional do Google, o Bugdroid, passando pelos primeiros rascunhos de Dan Morrill (os Dandroids) até o design final icônico de Irina Blok.

## Arquitetura e Decisões Técnicas

Por se tratar de um projeto didático inicial, o foco principal foi dominar o comportamento nativo dos elementos sem a interferência de ferramentas de abstração:

* **Manipulação de Mídias e Blocos**: O layout adota um contêiner centralizado com largura máxima de `800px` para garantir conforto de leitura. Os blocos de conteúdo utilizam recuos e alinhamentos justificados para simular a diagramação de um artigo de revista ou blog.
* **Estilização de Listas**: O painel lateral de curiosidades (`<aside>`) altera o marcador padrão de bolinhas da lista não ordenada para um caractere de engrenagem customizado via strings de escape Unicode no CSS (`list-style-type: '\2699\00A0'`).

{{< technologies >}}

## Desafios e Soluções de Engenharia

Durante a codificação, o maior cuidado foi garantir que mídias pesadas e elementos externos fossem flexíveis:

{{< challenges >}}

## Impacto e Resultados

* **Layout Fluido**: A página pode ser visualizada de forma confortável tanto em telas de monitores de alta resolução quanto em smartphones compactos, sem perda de conteúdo.
* **Performance e Semântica**: O uso exclusivo de CSS puro e sem scripts externos resulta em um carregamento instantâneo, mantendo uma estrutura de tags limpa e de fácil leitura por motores de busca e tecnologias assistivas.