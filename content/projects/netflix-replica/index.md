---
title: "Réplica da Landing Page da Netflix"
date: "2024-06-08"
featured: false
weight: 10
draft: false
description: "Um projeto prático de réplica da interface da Netflix feito com HTML e CSS puros para praticar a criação de páginas responsivas e o uso de tags semânticas."
imageCover: "netflix-replica.webp"
imageCoverFallback: "netflix-replica.png"
categories: 
  - "Frontend"
technologies:
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/netflix-replica/"
repositoryUrl: "https://github.com/emellybmuniz/netflix-replica"

techReasons:
  HTML5: "Utilizado para criar toda a estrutura da página, organizando os blocos de texto e imagens com tags semânticas nativas."
  CSS3: "Utilizado para aplicar a identidade visual do site original e configurar a adaptação do layout para diferentes resoluções usando Media Queries."

metadata:
  status: "Concluído"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Educação / Estudo Pessoal"
  
  challenges:
    - kicker: "Desafio 1: Responsividade"
      title: "Organização do layout para celulares e computadores"
      description: "O objetivo era fazer com que as seções alternassem a posição dos textos e imagens de forma organizada em telas grandes e ficassem empilhadas na vertical em telas menores."
      resolution: "Adotei um desenvolvimento focado primeiro em telas menores e organizei o estilo em arquivos separados (telapequena.css, telamedia.css e telagrande.css). Usei propriedades básicas do Flexbox e criei classes utilitárias para inverter o fluxo com 'flex-direction: row-reverse' a partir de 990px de largura."
    
    - kicker: "Desafio 2: Ajuste de Imagens e Componentes"
      title: "Evitar distorções ou quebras nas mídias"
      description: "As imagens da TV, dos dispositivos e o widget promocional precisavam mudar de tamanho proporcionalmente para não quebrar a estrutura visual do layout."
      resolution: "Defini o tamanho dos elementos utilizando porcentagens (como 90% do espaço disponível em telas pequenas e 40% em telas maiores), permitindo que os ativos visuais acompanhassem as mudanças da janela do navegador sem distorcer."

features:
  - "Estrutura básica organizada com tags semânticas comuns (header, main, section, footer)"
  - "Estilização dividida em arquivos separados para facilitar a organização das regras de tela"
  - "Uso de variáveis de CSS para centralizar os padrões de cores"
  - "Formulário simples com validações nativas do navegador (como e-mail obrigatório e limites de caracteres)"
  - "Seção de perguntas frequentes estruturada com listas nativas do HTML"
---

## Sobre o Projeto
Desenvolvi este site logo no início dos meus estudos de programação como um exercício prático de HTML e CSS. A ideia principal era tentar recriar o visual da página de apresentação da Netflix para testar minhas habilidades de estruturação e design. 

O foco desse trabalho foi aprender a organizar elementos em listas, adicionar mídias externas e, principalmente, fazer com que o site ficasse correto e legível tanto no celular quanto no computador, sem depender de nenhuma ferramenta ou framework pronto.

## Estrutura e Decisões Técnicas
Optei por construir a página usando apenas recursos nativos da web (HTML e CSS puros). Isso ajudou a fixar os conceitos mais básicos sem adicionar a complexidade de ferramentas externas. Para organizar os estilos, decidi separar as regras de layout de acordo com o tamanho da tela do usuário, vinculando os arquivos CSS diretamente no documento principal.

{{< technologies >}}

## Dificuldades Encontradas e Soluções
Durante a montagem do código, enfrentei alguns problemas para ajustar o comportamento dos elementos visuais, solucionados com ajustes na folha de estilo.

{{< challenges >}}

## Conclusão
Este projeto foi muito importante para consolidar minha base inicial de desenvolvimento frontend. Ele me deu a oportunidade de entender na prática o funcionamento do Flexbox, o comportamento das Media Queries e a importância de planejar a responsividade desde o início do código. Por ser um exercício focado em aprendizado inicial, o resultado atingido cumpriu o objetivo de validar o uso correto e simples do HTML e do CSS no desenvolvimento de interfaces.