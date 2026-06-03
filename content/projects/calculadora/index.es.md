---
title: "Calculadora"
date: 2024-01-01
featured: false
weight: 10
draft: false
description: "Projeto Calculadora desenvolvido por Emelly Beatriz."
imageCover: "calculadora.webp"
categories:
  - frontend
technologies:
  - HTML5
  - CSS3
  - JavaScript
liveDemo: "https://emellybmuniz.github.io/calculadora/"
repositoryUrl: "https://github.com/emellybmuniz/calculadora"

metadata:
  status: "Concluído"
  platform: "Web"
  focus: "Front-end"
---


[🇺🇸 English](./README.en.md) | [🇧🇷 Português](./README.md)

Uma calculadora web moderna e responsiva com interface intuitiva, desenvolvida com HTML5, CSS3 e JavaScript vanilla. Oferece operações matemáticas básicas com design profissional e experiência de usuário otimizada para desktop e dispositivos móveis.

---

## 🚀 Visão Geral do Projeto

[![Project Demonstration](src/images/project-demo.gif)](https://emellybmuniz.github.io/calculadora/)

A Calculadora Web é uma aplicação front-end que demonstra o desenvolvimento de interfaces interativas e funcionais utilizando tecnologias web fundamentais. O projeto foi criado para oferecer uma ferramenta de cálculos matemáticos acessível e responsiva, servindo tanto como uma calculadora funcional quanto como exemplo de boas práticas em desenvolvimento web.

**Principais benefícios:**

- Interface limpa e intuitiva com design moderno
- Suporte completo para operações matemáticas básicas e intermediárias
- Responsividade total para todos os dispositivos
- Navegação por teclado e clique
- Validação robusta de entrada e tratamento de erros
- Código limpo utilizando Factory Function pattern

**Conceitos técnicos demonstrados:**

- Factory Functions e encapsulamento
- Manipulação de DOM e eventos
- Design responsivo com CSS Grid e Flexbox
- Validação de entrada e tratamento de exceções
- Avaliação segura de expressões matemáticas

## 📂 Estrutura de Diretórios

```bash
📦 calculadora/
├── src/
│   ├── css/
│   │   └── main.css           # Estilos principais e responsividade
│   └── js/
│       └── script.js          # Lógica da calculadora com Factory Function
├── .gitattributes             # Configurações Git para normalização
├── index.html                 # Estrutura HTML principal da aplicação
├── LICENSE                    # Licença do projeto
└── README.md                  # Documentação completa do projeto
```

## ✨ Destaques & Funcionalidades

### 🧮 **Operações Matemáticas Completas**

- Operações básicas: adição (+), subtração (-), multiplicação (\*), divisão (/)
- Suporte a parênteses para controle de precedência
- Números decimais com validação automática
- Cálculos com múltiplas operações em sequência
- Avaliação segura usando Function constructor com validações

### 🎨 **Design Moderno e Atrativo**

- Paleta de cores em tons verdes com gradiente dinâmico
- Tipografia monospace para melhor legibilidade numérica
- Efeitos visuais com sombras e transições suaves
- Layout em grade otimizado para calculadoras
- Feedback visual nos botões com hover e active states

### 📱 **Responsividade Avançada**

- Breakpoint principal em 460px para dispositivos móveis
- Adaptação automática do layout para telas pequenas
- Botões redimensionados mantendo usabilidade
- Background adaptativo (gradiente/sólido) conforme dispositivo
- Interface otimizada para touch em smartphones

### ✅ **Validação e Segurança Robustas**

- Validação de expressões matemáticas antes da avaliação
- Verificação de resultados finitos (evita Infinity/NaN)
- Tratamento de erros com alertas informativos
- Prevenção contra injeção de código malicioso
- Limitação segura das operações permitidas

### 🔄 **Experiência do Usuário Agradável**

- Navegação híbrida: clique e teclado (Enter para calcular)
- Auto-foco no display para digitação imediata
- Botão de limpeza (C) e exclusão de caractere (←)
- Display com alinhamento à direita seguindo padrão de calculadoras
- Feedback imediato para todas as interações

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

### Detalhes Técnicos:

- **HTML5**: Estrutura semântica com tabelas para layout da calculadora
- **CSS3**: Estilização com Flexbox, Grid, gradientes e media queries responsivas
- **JavaScript ES6+**: Lógica implementada com Factory Functions e manipulação de DOM

## 1. Clone este repositório
$ git clone https://github.com/emellybmuniz/calculadora.git

## 2. Navegue até o diretório do projeto
$ cd calculadora

## Linux
$ xdg-open index.html

## macOS
$ open index.html

## Windows
$ start index.html
```

**Alternativa:** [Versão online disponível aqui](https://emellybmuniz.github.io/calculadora/)

### Exemplos de Uso:

```javascript
// Operações básicas
2 + 3 = 5
10 - 4 = 6
7 * 8 = 56
15 / 3 = 5

// Operações com decimais
2.5 + 1.7 = 4.2
10.5 / 2 = 5.25

// Operações com parênteses
(2 + 3) * 4 = 20
10 / (2 + 3) = 2
```

## ⚙️ Configuração

### Configurações de Display:

- **Alinhamento**: Texto alinhado à direita (padrão calculadoras)
- **Font**: Monospace para alinhamento consistente dos dígitos
- **Largura**: Responsiva com largura máxima de 20em

### Configurações de Estilo:

```css
/* Personalização da paleta de cores */
:root {
  --primary-gradient: linear-gradient(
    -40deg,
    #2c5049,
    #345e5c,
    #2c5046,
    #4c685f
  );
  --button-bg: #dfdfdf;
  --button-hover: #cdcdcd;
  --equal-button: #3d5745;
  --border-color: black;
}
```

## 📱 Responsividade

### Desktop (> 460px)

- Container centralizado com 600px de largura
- Botões com 85px de largura para clique confortável
- Background com gradiente dinâmico em tons verdes
- Layout em grade 4x5 otimizado para calculadoras

### Mobile (≤ 460px)

- Container com largura automática para se ajustar ao conteúdo
- Botões ajustados para 75px mantendo usabilidade
- Background sólido branco para melhor performance
- Alinhamento superior para facilitar o alcance do polegar
- Display mantém proporções para legibilidade

## 🛡️ Validação e Tratamento de Erros

### Validações Implementadas:

- **Expressões Matemáticas**: Verificação de sintaxe antes da avaliação
- **Resultados Numéricos**: Validação usando `isFinite()` para evitar Infinity/NaN
- **Caracteres Permitidos**: Apenas números, operadores e parênteses aceitos
- **Divisão por Zero**: Captura e tratamento específico

### Tratamento de Erros:

- Captura de exceções com try/catch durante avaliação
- Alertas informativos para o usuário ("Conta Inválida")
- Preservação do estado anterior em caso de erro
- Limpeza automática de entradas problemáticas

```javascript
// Exemplo de validação implementada
try {
  calculation = new Function("return " + calculation)();
  if (!isFinite(calculation)) {
    alert("Conta Inválida");
    return;
  }
} catch (e) {
  alert("Conta Inválida");
  return;
}
```

## 🏗️ Arquitetura e Padrões

### Padrão Factory Function:

A calculadora utiliza Factory Function para encapsulamento e organização:

```javascript
function createCalculator() {
  return {
    display: document.querySelector(".display"),
    // Métodos privados e públicos organizados
    start(), clickBtn(), displayResult()
  };
}
```

### Funcionalidades Principais:

- **Encapsulamento**: Propriedades e métodos organizados dentro do objeto
- **Event Delegation**: Uso de addEventListener para gerenciar eventos
- **Método Binding**: Contexto preservado com .bind(this)
- **Separação de Responsabilidades**: Métodos específicos para cada funcionalidade

### Como contribuir:

1. **Fork** este repositório
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/calculadora.git`
3. **Crie uma branch** para sua feature: `git checkout -b feature/nova-funcionalidade`
4. **Faça suas alterações** e teste completamente
5. **Commit** suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
6. **Push** para a branch: `git push origin feature/nova-funcionalidade`
7. **Abra um Pull Request** com descrição detalhada das mudanças
