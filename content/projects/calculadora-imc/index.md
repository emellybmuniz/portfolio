---
title: "Calculadora de IMC"
date: 2024-01-01
featured: false
weight: 10
draft: false
description: "Projeto Calculadora de IMC desenvolvido por Emelly Beatriz."
imageCover: "calculadora-imc.webp"
categories:
  - frontend
technologies:
  - HTML5
  - CSS3
  - JavaScript
liveDemo: "https://emellybmuniz.github.io/calculadora-imc/"
repositoryUrl: "https://github.com/emellybmuniz/calculadora-imc"

metadata:
  status: "Concluído"
  platform: "Web"
  focus: "Front-end"
---


[🇺🇸 English](./README.en.md) | [🇧🇷 Português](./README.md)

Uma calculadora de Índice de Massa Corporal (IMC) simples e responsiva, desenvolvida com HTML, CSS e JavaScript. Este projeto permite que os usuários insiram seu peso e altura para calcular seu IMC e receber uma classificação de acordo com os padrões internacionais de saúde da Organização Mundial da Saúde (OMS).

---

## 🚀 Visão Geral do Projeto

[![Project Demonstration](src/img/project-demo.gif)](https://emellybmuniz.github.io/calculadora-imc/)

A Calculadora de IMC é uma ferramenta web interativa que fornece uma maneira rápida e fácil de verificar o Índice de Massa Corporal. A interface é limpa, intuitiva e se adapta a diferentes dispositivos, garantindo uma ótima experiência do usuário em desktops, tablets e smartphones.

O projeto demonstra conceitos fundamentais de desenvolvimento web front-end, incluindo manipulação do DOM, validação de formulários, design responsivo e aplicação de gradientes CSS modernos.

## 📂 Estrutura de Diretórios

```bash
📦calculadora-imc/
├── src/
│   ├── css/
│   │   ├── main.css           # Estilos principais da aplicação
│   │   └── telasmenores.css   # Media queries para dispositivos móveis
│   ├── js/
│   │   └── main.js            # Lógica de cálculo e manipulação do DOM
│   └── img/
│       └── icon-balance.png   # Ícone da aplicação
├── .gitattributes             # Configurações do Git
├── index.html                 # Estrutura HTML principal
├── LICENSE                    # Licença MIT do projeto
└── README.md                  # Este arquivo
```

## ✨ Destaques & Funcionalidades

### 🎯 **Cálculo Preciso do IMC**
- Utiliza a fórmula padrão da OMS: `IMC = peso (kg) / altura² (m)`
- Resultado com duas casas decimais para maior precisão
- Classificação automática baseada nas faixas de IMC internacionais

### 🎨 **Design Moderno e Atrativo**
- Interface clean com gradiente verde elegante (`rgba(0,122,255,1)` → `rgba(0,51,102,1)`)
- Card centralizado com sombra suave para destaque
- Paleta de cores harmoniosa e profissional
- Tipografia legível (Arial, Helvetica, sans-serif)

### 📱 **Totalmente Responsivo**
- Layout adaptativo para diferentes tamanhos de tela
- Media queries para dispositivos com largura ≤ 540px
- Experiência otimizada tanto para desktop quanto mobile

### ✅ **Validação Robusta**
- Verificação de campos obrigatórios
- Tratamento de vírgulas como separadores decimais
- Validação de valores numéricos positivos
- Mensagens de erro claras para entradas inválidas

### 🔄 **Experiência do Usuário Aprimorada**
- Prevenção de reload da página no envio do formulário
- Feedback imediato após o cálculo
- Placeholders informativos nos campos de entrada
- Botão com efeito hover responsivo

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

### Detalhes Técnicos:
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Flexbox, gradientes lineares, media queries, sombras
- **JavaScript ES6+**: Arrow functions, template literals, event listeners

## 1. Clone este repositório
$ git clone https://github.com/emellybmuniz/calculadora-imc.git

## 2. Navegue até o diretório do projeto
$ cd calculadora-imc

## 3. Abra no seu navegador

## Linux
$ xdg-open index.html

## macOS
$ open index.html

## Windows
$ start index.html
```

**Alternativa:** Acesse a versão online hospedada no GitHub Pages: [emellybmuniz.github.io/calculadora-imc](https://emellybmuniz.github.io/calculadora-imc/)

### Exemplos de Entrada:
- **Peso**: `65`, `70.5`, `80,2` (aceita vírgula ou ponto decimal)
- **Altura**: `1.70`, `1,75`, `1.80` (aceita vírgula ou ponto decimal)

## 📐 Fórmula do IMC

O Índice de Massa Corporal é calculado usando a fórmula:

```
IMC = Peso (kg) / [Altura (m)]²
```

**Exemplo de cálculo:**
- Peso: 70 kg
- Altura: 1.75 m
- IMC = 70 / (1.75)² = 70 / 3.0625 = **22.86**

## 📊 Interpretação dos Resultados

| Faixa de IMC | Classificação | Cor do Indicador |
|--------------|---------------|------------------|
| < 18.5 | Abaixo do peso | 🔵 Azul |
| 18.5 - 24.9 | Peso normal | 🟢 Verde |
| 25.0 - 29.9 | Sobrepeso | 🟡 Amarelo |
| 30.0 - 34.9 | Obesidade grau 1 | 🟠 Laranja |
| 35.0 - 39.9 | Obesidade grau 2 | 🔴 Vermelho |
| ≥ 40.0 | Obesidade grau 3 | 🔴 Vermelho escuro |

> **Importante:** O IMC é uma ferramenta de triagem e não substitui a avaliação médica profissional. Consulte sempre um profissional de saúde para avaliação completa.

## 📱 Responsividade

A aplicação possui design responsivo implementado através de:

### Desktop (> 540px)
- Layout com card centralizado
- Gradiente de fundo completo
- Sombras e efeitos visuais aprimorados
- Espaçamento otimizado para telas maiores

### Mobile (≤ 540px)
- Fundo simplificado (branco)
- Remoção de sombras para melhor performance
- Ajuste automático do tamanho da fonte
- Layout otimizado para toque

## 🛡️ Validação e Tratamento de Erros

### Validações Implementadas:
- **Campos obrigatórios**: Todos os campos devem ser preenchidos
- **Valores numéricos**: Apenas números são aceitos
- **Valores positivos**: Peso e altura devem ser maiores que zero
- **Formato decimal**: Aceita tanto vírgula (,) quanto ponto (.) como separador

### Mensagens de Erro:
- `"Por favor, insira valores válidos."` - Exibida para entradas inválidas
- Feedback visual através do elemento `#Resultado`

### Como contribuir:

1. **Fork** este repositório
2. **Clone** seu fork: `git clone https://github.com/emellybmuniz/calculadora-imc.git`
3. **Crie uma branch** para sua feature: `git checkout -b feature/nova-funcionalidade`
4. **Faça suas alterações** e teste completamente
5. **Commit** suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
6. **Push** para a branch: `git push origin feature/nova-funcionalidade`
7. **Abra um Pull Request** com descrição detalhada das mudanças
