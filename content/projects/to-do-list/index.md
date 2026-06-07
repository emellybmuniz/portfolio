---
title: "Lista de Tarefas"
date: "2024-08-01"
featured: false
weight: 10
draft: false
description: "Uma lista de tarefas minimalista desenvolvida com HTML, CSS e JavaScript puros, marcando meus primeiros estudos de persistência de dados no navegador."
imageCover: "todo-list.webp"
imageCoverFallback: "todo-list.png"
categories: 
  - "Frontend"
technologies:
  - "JavaScript"
  - "HTML5"
  - "CSS3"
liveDemo: "https://emellybmuniz.github.io/to-do-list/"
repositoryUrl: "https://github.com/emellybmuniz/to-do-list"

techReasons:
  JavaScript: "Utilizado para capturar as entradas do teclado, criar dinamicamente os novos itens da lista no HTML e gerenciar o salvamento dos dados."
  HTML5: "Responsável pela estrutura de formulário básica e pela marcação limpa do container onde as tarefas são inseridas."
  CSS3: "Adotado para a criação do visual limpo, dividindo as regras estruturais e de responsividade em arquivos específicos para facilitar a organização."

metadata:
  status: "Concluído"
  platform: "Web Application"
  role: "Frontend Developer"
  industry: "Educação / Estudo Pessoal"
  
  challenges:
    - kicker: "Desafio 1: Persistência com localStorage"
      title: "Salvar e carregar dados estruturados localmente"
      description: "Por ser um dos meus primeiros contatos com armazenamento em cache no navegador, entender como salvar os textos sem perder as informações ao recarregar a página foi uma dificuldade inicial."
      resolution: "Implementei uma lógica que transforma o array de tarefas em texto usando 'JSON.stringify()' antes de salvá-lo. Ao iniciar a página, o script usa 'JSON.parse()' para ler esses dados de volta, garantindo que o usuário encontre suas notas salvas na próxima sessão."
      
    - kicker: "Desafio 2: Sincronização na Remoção de Itens"
      title: "Excluir elementos do HTML e do armazenamento ao mesmo tempo"
      description: "Ao clicar no ícone de lixeira para apagar uma tarefa, era necessário garantir que o elemento sumisse visualmente da tela e que o registro correto também fosse apagado do banco local."
      resolution: "Organizei a criação de elementos vinculando um índice para cada tarefa. Ao acionar o evento de clique na lixeira, o código localiza a posição correta dentro do array principal, remove o registro via 'splice()', atualiza o localStorage e limpa a tela para renderizar a lista atualizada."

features:
  - "Inclusão imediata de novas atividades através do campo de texto de entrada"
  - "Salvamento automático no navegador para evitar perda de dados ao fechar a aba"
  - "Exclusão individual de tarefas com atualização dinâmica da tela"
  - "Layout responsivo construído com folha de estilo dedicada para telas menores"
  - "Código construído de forma nativa e pura (Vanilla JS) sem o uso de bibliotecas prontas"
---

## Sobre o Projeto
Construí esta lista de tarefas como um projeto prático para aplicar o que vinha aprendendo em JavaScript sobre manipulação do DOM e armazenamento local. A aplicação funciona de maneira bem direta: um espaço onde é possível anotar obrigações diárias e excluí-las à medida que forem cumpridas.

O maior objetivo desse exercício foi entender como dar vida a uma página da web, saindo dos layouts puramente visuais e estáticos para criar um sistema interativo básico que guarda as informações digitadas pelo usuário.

## Organização do Código e Tecnologias
O projeto prioriza o uso de tecnologias nativas para manter o aprendizado focado nos pilares fundamentais da web. Na parte visual, decidi separar as propriedades CSS de maneira limpa: criei um arquivo `main.css` focado na estrutura principal para telas grandes e um arquivo `mobile.css` responsável exclusivo pelas regras de adaptação para smartphones.

{{< technologies >}}

## Dificuldades Iniciais e Soluções
Durante a montagem das funções do script, os maiores desafios envolveram o tratamento de arrays e a correta sincronização entre o que era visto na tela e o que ficava guardado na memória.

{{< challenges >}}

## Conclusão
Este projeto de To-Do List foi muito importante para a minha evolução inicial no frontend, pois me deu clareza sobre como funciona o ciclo de vida de dados simples no cliente. Conseguir resolver problemas de conversão de dados e aplicar folhas de estilo separadas para a responsividade mobile me deu mais confiança para continuar criando páginas dinâmicas utilizando JavaScript.