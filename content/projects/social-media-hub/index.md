---
title: "Social Media Hub - Simulador de Tela Mobile"
date: "2024-05-20"
featured: false
weight: 10
draft: false
description: "Um projeto prático que simula a interface de um iPhone para navegar por perfis de redes sociais usando HTML e CSS estruturais."
imageCover: "social-media-hub.webp"
imageCoverFallback: "social-media-hub.png"
categories: 
  - "Frontend"
technologies:
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/social-media-hub/"
repositoryUrl: "https://github.com/emellybmuniz/social-media-hub"

techReasons:
  HTML5: "Utilizado para criar o esqueleto das páginas de pré-visualização e gerenciar o direcionamento dos links internos para a tela simulada."
  CSS3: "Utilizado para fazer o alinhamento centralizado do mockup do celular, o controle de overflow e os efeitos visuais simples de foco nos botões."

metadata:
  status: "Concluído"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Educação / Estudo Pessoal"
  
  challenges:
    - kicker: "Desafio 1: Navegação sem Recarregamento"
      title: "Alimentar a tela interna de forma dinâmica"
      description: "Eu precisava fazer com que o clique nos botões laterais trocasse o conteúdo visível dentro do desenho do celular sem que a página inteira sofresse um refresh."
      resolution: "Utilizei a propriedade nativa 'target' nos links de ancoragem apontando diretamente para o atributo 'name' de um elemento iframe posicionado no centro do celular, permitindo o carregamento isolado das subpáginas."
      
    - kicker: "Desafio 2: Encaixe do Layout Absoluto"
      title: "Alinhar o iframe sobre a imagem do iPhone"
      description: "Fazer com que a janela interna contendo os sites ficasse perfeitamente sobreposta à tela do mockup do celular em diferentes resoluções foi difícil no começo."
      resolution: "Combinei o uso de posicionamento absoluto com coordenadas em pixels fixas para delimitar a tela do celular e adotei Media Queries simples para reajustar o tamanho dos ícones e do container geral nas telas de smartphones."

features:
  - "Estrutura de navegação interna baseada em iframe e alvos de links nativos"
  - "Estilização visual simulando as proporções físicas de um celular"
  - "Menu lateral de ícones interativos com pequenas animações de hover"
  - "Código dividido de forma modular com páginas HTML simples para cada rede social"
  - "Fundo de tela configurado com imagem fixa para criar efeito de profundidade"
---

## Sobre o Projeto
Desenvolvi este projeto como parte das minhas práticas durante o curso de HTML5 e CSS3 do Curso em Vídeo. A proposta era criar uma espécie de hub ou centralizador de links que simulasse a navegação real por dentro de um aparelho celular (iPhone).

O foco do exercício foi entender as dinâmicas de posicionamento de elementos na tela e aprender a trabalhar com carregamento de conteúdos locais e externos de forma integrada na mesma interface de usuário.

## Organização e Escolhas Técnicas
A construção da interface baseou-se inteiramente no uso de tags padrão e folhas de estilo limpas, sem o uso de bibliotecas visuais. A arquitetura de arquivos foi pensada de maneira simples, onde cada rede social possui seu próprio arquivo HTML com uma imagem representativa e um link direto para o respectivo perfil.

{{< technologies >}}

## Dificuldades Práticas e Soluções
Durante a organização do código, os principais pontos de ajuste foram relacionados à manutenção das proporções visuais do dispositivo simulado para evitar que o conteúdo vazasse.

{{< challenges >}}

## Conclusão
O Social Media Hub foi um excelente laboratório prático para fixar conceitos de posicionamento absoluto, uso de iframes e fluxos básicos de navegação estrutural. Por ser um projeto simples feito no início do meu aprendizado, ele cumpriu bem o papel de me ajudar a compreender visualmente como o navegador lida com caixas e sobreposições de camadas no CSS, servindo como degrau para a criação de layouts futuros mais complexos.