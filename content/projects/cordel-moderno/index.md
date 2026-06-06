---
title: "Projeto Cordel Moderno"
date: "2024-05-12"
featured: false
weight: 10
draft: false
description: "Página web simples desenvolvida para exercitar a aplicação de efeitos de rolagem parallax e tipografia fluida com CSS puro."
imageCover: "cordel-moderno-project-cover.webp"
imageCoverFallback: "cordel-moderno-project-cover.png"
categories: 
  - "Frontend"
technologies:
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/projeto-cordel/"
repositoryUrl: "https://github.com/emellybmuniz/projeto-cordel"

techReasons:
  HTML5: "Utilizado para a marcação estrutural semântica das seções e blocos de versos que compõem o poema."
  CSS3: "Responsável pela estilização visual, gerenciamento de fontes externas e pela fixação dos fundos para criar a ilusão de profundidade."

metadata:
  status: "Concluído"
  platform: "Web Estática"
  role: "Desenvolvedora Frontend"
  industry: "Educação / Portfólio"
  
  challenges:
    - kicker: "Desafio 1: Legibilidade sobre Imagens"
      title: "Contraste de texto em fundos complexos"
      description: "Exibir os versos do poema diretamente sobre imagens fotográficas detalhadas tornava a leitura confusa devido à variação de cores do fundo."
      resolution: "Adicionamos um contêiner com largura máxima de '50vw' e fundo escuro semi-transparente ('rgba(0, 0, 0, 0.392)') atrás dos textos, isolando as letras sem cobrir totalmente a imagem."
    - kicker: "Desafio 2: Escalonamento de Tipografia"
      title: "Adaptação de fontes sem quebras de linha artificiais"
      description: "Garantir que as estrofes do cordel mantivessem a estrutura original de quebras de linha ('<br>') em diferentes larguras de tela, sem estourar as margens."
      resolution: "Substituímos tamanhos fixos em pixels por unidades de viewport ('vw') nas propriedades de 'font-size', fazendo com que o texto encolha ou cresça proporcionalmente ao tamanho do navegador."

features:
  - "Efeito de profundidade parallax simples utilizando a propriedade 'background-attachment: fixed'."
  - "Tipografia fluida baseada em unidades de largura de tela ('vw') para manter a proporção do layout."
  - "Importação e aplicação de fontes personalizadas via Google Fonts para ambientação visual."
  - "Marcação semântica limpa dividida em blocos de conteúdo e blocos de imagem."
---

## Sobre o Projeto

O **Projeto Cordel Moderno** foi construído como um exercício focado em estilização de interfaces com foco em elementos visuais tradicionais. A página exibe o poema "Cordel Moderno" do autor Milton Duarte, utilizando a web como mídia para apresentar uma obra inspirada nos folhetos de cordel nordestinos tradicionais, contrastando a temática cultural com os hábitos tecnológicos atuais.

O desenvolvimento foi baseado em um desafio prático proposto no módulo de HTML5 e CSS3 do *Curso em Vídeo*, focado em explorar o comportamento de imagens estáticas em relação ao movimento de rolagem da tela.

## Arquitetura e Decisões Técnicas

A estrutura da aplicação é puramente estática e simplificada, focando no domínio de propriedades nativas de estilização:

* **Efeito Parallax no CSS**: Em vez de carregar scripts ou bibliotecas JavaScript externas para rastrear o scroll, a ilusão de profundidade é simulada exclusivamente através da combinação de `background-attachment: fixed`, `background-position` e `background-size: cover` nas seções configuradas com IDs de imagem.
* **Tipografia Temática**: Uso das fontes Google Fonts *Freeman* (para dar peso e destaque aos cabeçalhos) e *Dekko* (para simular a estética manuscrita ou impressa característica dos cordéis nos blocos de conteúdo).

{{< technologies >}}

## Desafios e Soluções de Engenharia

Durante a montagem da folha de estilos, os ajustes principais se concentraram em garantir que as decisões estéticas não prejudicassem a experiência de leitura:

{{< challenges >}}

## Impacto e Resultados

* **Interface Responsiva Sem Frameworks**: O layout se adapta a computadores e celulares sem a necessidade de grids complexos ou dependência de bibliotecas como Bootstrap, provando a eficácia do uso correto de unidades relativas modernas do CSS.
* **Preservação da Obra**: A disposição do texto respeita a métrica poética original do autor, garantindo legibilidade e uma navegação confortável por meio da rolagem vertical.