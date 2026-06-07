---
title: "Pedra, Papel e Tesoura - Jogo Web Retrô"
date: "2025-08-10"
featured: false
weight: 20
draft: false
description: "O clássico jogo Pedra, Papel e Tesoura construído com JavaScript puro, explorando manipulação assíncrona do DOM e animações temporizadas para criar uma experiência interativa."
imageCover: "rock-paper-scissors.webp"
imageCoverFallback: "rock-paper-scissors.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/rock-paper-scissors-game/"
repositoryUrl: "https://github.com/emellybmuniz/rock-paper-scissors-game"

techReasons:
  JavaScript: "Utilizado para gerenciar o estado do jogo (pontuação, fim de jogo), tratar eventos de clique e controlar o fluxo assíncrono das rodadas com temporizadores nativos."
  HTML5: "Responsável pelo esqueleto da aplicação, estruturando o placar, a área de exibição das mãos e os botões de escolha."
  CSS3: "Adotado para a criação da identidade visual em estilo retrô, além do gerenciamento da animação de balanço das mãos e efeitos de brilho pós-resultado."

metadata:
  status: "Concluído"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Educação / Estudo Pessoal"
  
  challenges:
    - kicker: "Desafio 1: Sincronização de Animações"
      title: "Gerenciar o fluxo de tempo entre a animação e o resultado"
      description: "Para criar suspense, eu queria que as mãos balancassem antes de revelar a escolha do computador, mas no início o resultado aparecia instantaneamente antes da animação terminar."
      resolution: "Implementei uma lógica assíncrona utilizando 'setTimeout' configurado para 1200ms. Durante esse intervalo, o JavaScript altera o texto para 'Oponente está escolhendo...' e adiciona uma classe de animação CSS. Apenas após o término do tempo, as imagens finais de escolha são injetadas e o saldo é atualizado."
      
    - kicker: "Desafio 2: Controle de Estados Visuais e Fluidez"
      title: "Limpeza de efeitos e controle de cliques sucessivos"
      description: "Ao jogar várias rodadas seguidas, as classes de brilho (vitoria/derrota) da jogada anterior permaneciam acumuladas nos elementos do HTML, gerando bugs visuais, além do risco do usuário clicar enquanto a animação rodava."
      resolution: "Criei um objeto de estado ('state') global que armazena a referência exata do último elemento modificado e sua respectiva classe de brilho. No início de cada rodada ou ao reiniciar o jogo, o script remove cirurgicamente esses efeitos antigos e valida se o jogo já terminou ('isGameOver') para bloquear novas interações."

features:
  - "Controle de estado unificado (placar, controle de fim de jogo e histórico de classes visuais)"
  - "Animação de balanço simulando a jogada real antes da revelação do resultado"
  - "Feedback visual imediato através de bordas coloridas de acordo com o desfecho da rodada"
  - "Dicionário de traduções e regras de validação simples mapeadas diretamente em objetos JavaScript"
  - "Limite fixo de pontuação (15 pontos) com botão dinâmico para reiniciar a partida"
---

## Sobre o Projeto
Este foi o meu primeiro contato com o desenvolvimento de jogos para a web. O objetivo principal foi ir além das páginas estáticas e criar uma aplicação puramente interativa, aplicando o clássico "Pedra, Papel e Tesoura". Busquei criar uma interface divertida e com uma estética inspirada em jogos retrô.

Para tornar a experiência mais imersiva, pesquisei formas de simular a jogada real, adicionando um efeito visual onde as mãos balançam antes do oponente realizar a escolha dele de forma aleatória.

## Estrutura do Jogo e Decisões Técnicas
A engenharia da aplicação foi pensada de maneira modular, utilizando apenas as linguagens nativas do navegador. Toda a lógica do loop do jogo foi isolada em funções específicas dentro de um script JavaScript vanilla, enquanto o CSS ficou responsável pela responsividade e pelos estados visuais das interações.

{{< technologies >}}

## Dificuldades de Implementação
Durante a construção do projeto, as maiores barreiras estiveram ligadas à organização das regras de responsividade para alinhar os cards de escolha e no controle estrito da pontuação para evitar falhas no fluxo assíncrono das animações.

{{< challenges >}}

## Conclusão
O desenvolvimento deste projeto foi essencial para consolidar meu entendimento sobre manipulação direta do DOM, o uso de funções temporizadoras e a organização de estados em aplicações frontend simples. Embora o desenvolvimento de jogos não seja o meu foco de carreira, a construção desta interface serviu como um laboratório prático muito produtivo para entender o dinamismo do JavaScript na prática.