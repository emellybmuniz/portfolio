---
title: "Weather Dashboard"
date: "2024-01-01"
featured: true
weight: 10
draft: false
description: "Painel meteorológico completo e intuitivo para consulta em tempo real e mapas interativos."
imageCover: "weather-dash.webp"
imageCoverFallback: "weather-dash.png"
categories: 
  - "Frontend"
technologies:
  - "HTML"
  - "CSS"
  - "JavaScript"
  - "Tailwind CSS"
liveDemo: "https://emellybmuniz.github.io/WeatherDash/public/"
repositoryUrl: "https://github.com/emellybmuniz/WeatherDash"

techReasons:
  JavaScript: "Lógica modular Vanilla JS usada de forma pura para gerenciar requisições assíncronas (fetch) e manipular os elementos da tela."
  Tailwind CSS: "Framework utilitário que facilitou a criação de uma interface moderna e responsiva sem a necessidade de escrever muitos arquivos CSS manuais."
  HTML: "Estruturação semântica utilizada para criar uma base sólida, organizada e acessível para exibição das informações."
  CSS: "Responsável pela aplicação de variáveis de estilo, transições suaves de layout e suporte ao controle dinâmico de temas."

metadata:
  status: "Concluído"
  platform: "Web Application"
  role: "Desenvolvedora Frontend"
  industry: "Tecnologia"
  
  challenges:
    - kicker: "Desafio 1: Integração de APIs Múltiplas"
      title: "Orquestração de múltiplos provedores de dados no cliente"
      description: "Buscar dados meteorológicos atuais, previsões estendidas e geocodificação ao mesmo tempo pode causar atrasos ou conflitos na renderização da tela."
      resolution: "Foi implementado um fluxo assíncrono encadeado com promessas (Promises), carregando primeiro a WeatherAPI e puxando os dados secundários de geolocalização e mapas em segundo plano."
    - kicker: "Desafio 2: Persistência Sem Servidor"
      title: "Armazenamento de preferências e cidades favoritas"
      description: "Manter as escolhas de tema (claro/escuro), unidades de medida e a lista de locais favoritados pelo usuário sem possuir um banco de dados backend."
      resolution: "Utilizou-se a API nativa do localStorage do navegador para salvar strings JSON, carregando e atualizando a interface automaticamente a cada inicialização."
      
features:
  - "Consulta de dados meteorológicos atuais em tempo real via WeatherAPI"
  - "Previsão do tempo detalhada para múltiplos dias através da integração com Open-Meteo"
  - "Mapa interativo com radar meteorológico integrado via Windy"
  - "Pesquisa de cidades com sistema de auto-completar integrado à API Nominatim"
  - "Sistema de favoritos com suporte a salvamento permanente no localStorage"
  - "Personalização de interface com Modo Claro/Escuro e 6 paletas de cores de destaque"
  - "Conversão dinâmica entre sistemas de unidades métricas e imperiais"
  - "Recomendações customizadas baseadas no clima geradas a partir de um arquivo JSON local"
  - "Captura de tela automatizada do painel usando a biblioteca html2canvas para compartilhamento"
---

## Sobre o Projeto

O Weather Dashboard é uma aplicação web rica desenvolvida para entregar dados meteorológicos em tempo real, acompanhados de recomendações e visualizações em mapas interativos. A interface foi planejada para simular a fluidez de um aplicativo nativo usando apenas tecnologias web abertas e front-end puro, eliminando completamente a necessidade de qualquer infraestrutura de backend.

Antes da criação do painel, a centralização de informações climáticas diversas exigia a consulta a diferentes portais isolados. O aplicativo unifica esses dados, transformando temperaturas brutas em contexto visual útil, como a mudança automática de componentes gráficos e a sugestão de ações práticas dependendo do clima selecionado.

## Arquitetura e Decisões Técnicas

O projeto foi construído utilizando uma arquitetura cliente pura (Single Page Application estática) organizada em diretórios separados para arquivos públicos de interface e códigos de comportamento técnico:
* **Public:** Contém os arquivos estruturais da interface (`index.html`, `settings.html`) e o arquivo de dados estáticos (`recomendations.json`).
* **Src:** Reúne a lógica de script pura da aplicação e os estilos adicionais que complementam as utilidades estruturais do Tailwind.

A lógica principal de comportamento foi concentrada em JavaScript Vanilla nativo. A manipulação do DOM e a reatividade da interface ocorrem de forma direta ao escutar eventos padrão do navegador. Quando o sistema de unidades é alterado nas configurações, um evento de escuta de armazenamento (`storage`) atualiza automaticamente os cálculos matemáticos de exibição sem exigir o recarregamento forçado da página inteira.

{{< technologies >}}

## Desafios e Soluções de Engenharia

Ao longo da implementação do painel frontend, houve a necessidade de contornar problemas relacionados ao fluxo de rede e ao armazenamento local de dados para garantir o bom funcionamento da aplicação.

{{< challenges >}}

## Impacto e Resultados

* **Dependência Zero de Infraestrutura:** Por rodar 100% no navegador, o projeto possui custo zero de manutenção de servidores e está pronto para deploys imediatos em plataformas como Vercel ou GitHub Pages.
* **Navegação Fluida Dinâmica:** A implementação de scroll assistido por JavaScript faz com que a transição entre o painel de clima, os gráficos de previsão e os mapas ocorra de forma suave dentro de um container controlado.
* **Resiliência de Dados Locais:** Os dados salvos pelo usuário permanecem preservados mesmo se o navegador for fechado, otimizando o carregamento inicial da aplicação ao reutilizar o último local pesquisado com sucesso.