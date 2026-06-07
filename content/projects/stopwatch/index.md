---
title: "Cronômetro Minimalista"
date: "2024-07-25"
featured: false
weight: 10
draft: false
description: "Um cronômetro simples desenvolvido com JavaScript puro durante meu curso de programação, contando com funções de tempo real e alternância de tema escuro."
imageCover: "stopwatch.webp"
imageCoverFallback: "stopwatch.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/stopwatch/"
repositoryUrl: "https://github.com/emellybmuniz/stopwatch"

techReasons:
  JavaScript: "Utilizado para programar o motor do cronômetro através de funções de tempo assíncronas e gerenciar a alternância de classes para o Dark Mode."
  HTML5: "Responsável por fornecer os elementos semânticos estruturais para exibir o visor numérico e os botões de ação."
  CSS3: "Adotado para criar o design minimalista, gerenciar o posicionamento centralizado e criar transições de cores suaves ao trocar de tema."

metadata:
  status: "Concluído"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Educação / Estudo Pessoal"
  
  challenges:
    - kicker: "Desafio 1: Controle de Tempo Assíncrono"
      title: "Evitar o acúmulo e aceleração indesejada de intervalos"
      description: "Durante os testes iniciais, se o botão de início fosse clicado repetidas vezes sem pausar, o JavaScript iniciava múltiplos contadores paralelos, fazendo o tempo correr mais rápido do que o normal."
      resolution: "Criei uma validação simples de controle que checa se o temporizador já está ativo antes de disparar o comando 'setInterval'. Caso o usuário clique em pausar ou reiniciar, a aplicação usa o 'clearInterval' limpando o processo ativo e estabilizando a contagem."
      
    - kicker: "Desafio 2: Formatação dos Dígitos do Visor"
      title: "Manter o padrão de duas casas numéricas em tempo real"
      description: "Quando os segundos ou minutos eram menores que 10, o cronômetro exibia apenas um número único (como 0:0:5), gerando quebras no alinhamento visual e tirando o visual polido da tela."
      resolution: "Implementei uma pequena função auxiliar que avalia o valor numérico antes de exibi-lo na tela. Se o número for menor que 10, o código concatena um caractere '0' à esquerda por padrão, garantindo que o visor mantenha sempre o formato estável de dois dígitos (00:00:00)."

features:
  - "Controle unificado através de botões para iniciar, pausar e reiniciar o contador"
  - "Sistema de Dark Mode/Light Mode ativado de forma simples por clique no topo da tela"
  - "Exibição contínua dividida por blocos de minutos, segundos e milissegundos"
  - "Layout totalmente adaptável e responsivo para visualização estável em telas pequenas"
  - "Código desenvolvido de forma pura (Vanilla JS) sem dependências externas"
---

## Sobre o Projeto
Construí este cronômetro como um dos exercícios práticos principais do meu curso de JavaScript. A proposta era criar uma utilidade web simples e direta, focada na medição precisa de intervalos de tempo, mantendo uma apresentação visual o mais limpa e intuitiva possível.

O real objetivo dessa atividade foi colocar em prática as mecânicas de gerenciamento de tempo no navegador e aprender a manipular propriedades de estilo dinamicamente com base nas interações diretas do usuário.

## Estrutura e Decisões Técnicas
Por se tratar de um projeto voltado à fixação de lógica básica de frontend, a estrutura foi desenhada utilizando apenas o ecossistema puro da web. Decidi separar os scripts em dois escopos lógicos simples para facilitar a leitura: um arquivo responsável estritamente pelas regras de matemática do cronômetro e outro encarregado apenas do chaveamento visual de cores.

{{< technologies >}}

## Dificuldades Encontradas e Soluções
Durante a escrita do código, lidar com o sincronismo dos temporizadores nativos exigiu um cuidado extra na criação de travas lógicas simples nas funções de clique.

{{< challenges >}}

## Conclusão
O desenvolvimento do Stopwatch foi um passo essencial para consolidar meus conhecimentos práticos sobre funções assíncronas de tempo e manipulação de classes no CSS através do JavaScript. Por ser um projeto inicial de curso, o resultado foi muito positivo por entregar uma aplicação estável, funcional e organizada, atingindo perfeitamente a meta de aprendizado proposta na época.