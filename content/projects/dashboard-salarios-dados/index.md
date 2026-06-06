---
title: "Dashboard de Análise de Salários em Dados"
date: "2025-08-09"
featured: true
weight: 10
draft: false
description: "Aplicação web interativa desenvolvida com Streamlit para exploração estatística e mapeamento de tendências salariais do mercado de dados."
imageCover: "dashboard-salarios-dados.webp"
imageCoverFallback: "dashboard-salarios-dados.png"
categories: 
  - "frontend"
technologies:
  - "Python"
  - "Streamlit"
  - "Pandas"
  - "Plotly"
liveDemo: "https://imersao-dados-python-alura-emellybmuniz.streamlit.app/"
repositoryUrl: "https://github.com/emellybmuniz/imersao-dados-python-alura"

techReasons:
  Python: "Linguagem base escolhida pela eficiência no ecossistema de análise de dados e manipulação de matrizes estruturadas."
  Streamlit: "Framework adotado para construir a interface web diretamente em Python, transformando scripts de dados em um dashboard responsivo de forma ágil."
  Pandas: "Biblioteca essencial utilizada para carregar o arquivo CSV, aplicar filtros dinâmicos multicritérios e calcular as métricas agregadas (KPIs) em tempo real."
  Plotly: "Ferramenta de visualização encarregada de renderizar os gráficos interativos e o mapa coroplético com redimensionamento automático de layout."

metadata:
  status: "Concluído"
  platform: "Web Application"
  role: "Desenvolvedora de Dados Frontend"
  industry: "Business Intelligence / EdTech"
  
  challenges:
    - kicker: "Desafio 1: Responsividade em Painéis de Dados"
      title: "Preservação da grade visual em telas compactas"
      description: "Dashboards complexos com múltiplas colunas de gráficos tendem a quebrar ou causar rolagem lateral excessiva em smartphones e tablets."
      resolution: "Configuramos o layout do Streamlit no modo 'wide' estruturando os containers através de componentes nativos de colunas flexíveis, garantindo o empilhamento vertical automático e ajuste dos zooms de toque do Plotly em viewports menores."
    - kicker: "Desafio 2: Validação de Filtros Cruzados vazios"
      title: "Tratamento de seleções mutáveis sem registros correspondentes"
      description: "Ao combinar múltiplos filtros estritos (ex: ano específico + senioridade executiva + empresa pequena), o dataframe resultante poderia retornar vazio, gerando erros de execução nos gráficos."
      resolution: "Implementamos uma verificação defensiva condicional utilizando o atributo '.empty' do Pandas. Caso nenhum registro seja encontrado, o sistema suspende a renderização e exibe um alerta visual instrutivo ao usuário."

features:
  - "Painel de controle com filtros simultâneos por ano, senioridade, contrato e tamanho da empresa."
  - "Cálculo instantâneo de KPIs financeiros com formatação monetária internacional."
  - "Mapeamento geográfico de distribuição salarial através de códigos ISO3 integrados."
  - "Visualizações dinâmicas com tooltips informativos e isolamento de variáveis por clique."
  - "Tabela granular de dados exposta de forma opcional no rodapé para auditoria detalhada."
---

## Sobre o Projeto

O **Dashboard de Análise de Salários em Dados** é um projeto prático desenvolvido durante a *Imersão Dados Python da Alura*. A aplicação foi desenhada para processar um conjunto de dados educacional contendo registros de remuneração da área de tecnologia, transformando linhas estáticas de planilhas em um ambiente interativo de Business Intelligence. 

A ferramenta permite que estudantes e profissionais em transição de carreira realizem análises exploratórias para identificar tendências, médias globais e distribuições geográficas de salários conforme o nível de experiência e tipo de contratação.

## Arquitetura e Decisões Técnicas

O desenvolvimento priorizou a simplicidade de infraestrutura (*serverless client-side feel*) e o aproveitamento máximo dos recursos do ecossistema Streamlit Community Cloud:

* **Manipulação em Memória**: O processamento e filtragem de dados ocorrem em tempo de execução através do Pandas, eliminando a necessidade de acoplar um banco de dados relacional para um volume de dados contido.
* **Layout Fluido**: A interface foi dividida em uma barra lateral reservada exclusivamente para os seletores de controle e uma área principal em grade que organiza os cartões de métricas e os blocos visuais de forma proporcional.

{{< technologies >}}

## Desafios e Soluções de Engenharia

Na construção de dashboards web, alinhar a performance de renderização com a adaptabilidade da tela é um ponto crítico:

{{< challenges >}}

## Impacto e Resultados

* **Responsividade Avançada**: O dashboard adapta-se a computadores, tablets e smartphones, reorganizando os gráficos dinamicamente para manter a usabilidade por mouse ou toque.
* **Interface Sem Fricção**: A reatividade nativa do Streamlit atualiza os gráficos instantaneamente a cada mudança de filtro, sem a necessidade de botões manuais de 'atualizar' ou recarregamentos completos de página.
* **Acessibilidade de Dados**: Dados tabulares complexos foram simplificados em indicadores visuais claros, permitindo extrair insights sobre o mercado de trabalho de forma intuitiva.