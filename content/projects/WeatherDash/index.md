---
title: "Weather Dashboard"
date: 2024-01-01
featured: true
weight: 10
draft: false
description: "Projeto Weather Dashboard desenvolvido por Emelly Beatriz."
imageCover: "weather-dash.webp"
categories:
  - frontend
technologies:
  - JavaScript
liveDemo: "https://emellybmuniz.github.io/WeatherDash/public/"
repositoryUrl: "https://github.com/emellybmuniz/WeatherDash"

metadata:
  status: "Concluído"
  platform: "Web/API"
  focus: "Front-end"
---


![Licença GitHub](https://img.shields.io/github/license/emellybmuniz/WeatherDash)
![Contagem de linguagens](https://img.shields.io/github/languages/count/emellybmuniz/WeatherDash)
![Último commit](https://img.shields.io/github/last-commit/emellybmuniz/WeatherDash)
![Tamanho do repositório](https://img.shields.io/github/repo-size/emellybmuniz/WeatherDash)
![Status do Projeto](https://img.shields.io/badge/Status%20-%20Concluído%20-%20%234BC21E)
![GitHub Stars](https://img.shields.io/github/stars/emellybmuniz/WeatherDash?style=social)

Uma aplicação de clima moderna e responsiva construída com HTML, CSS, Tailwind e JavaScript. Oferece previsões em tempo real, localização interativa no mapa e recomendações personalizadas baseadas nas condições climáticas.

---

### 📋 Índice

- [Visão Geral do Projeto](#-visão-geral-do-projeto)
- [Estrutura de Diretórios](#-estrutura-de-diretórios)
- [Destaques & Funcionalidades](#-destaques--funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Configuração](#-configuração)
- [Responsividade](#-responsividade)
- [APIs & Funcionalidades Avançadas](#-apis--funcionalidades-avançadas)
- [Contribuição](#-contribuição)
- [Melhorias Futuras](#-melhorias-futuras)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 🚀 Visão Geral do Projeto

Uma aplicação de previsão do tempo completa e intuitiva que oferece:

- **Dados em Tempo Real** - Informações climáticas atualizadas continuamente
- **Interface Agradável** - Design limpo e responsivo construído com Tailwind CSS
- **Personalização Total** - Temas, cores e unidades de temperatura customizáveis
- **Sem Dependências Backend** - 100% frontend, pronto para deploy estático
- **Experiência Fluida** - Navegação suave entre seções e recomendações inteligentes

### Benefícios Principais:

- ✅ Acesso rápido a informações meteorológicas
- ✅ Recomendações personalizadas baseadas no clima
- ✅ Salvamento de locais favoritos com sincronização local
- ✅ Visualização de mapa interativo integrado
- ✅ Performance otimizada com caching de assets

## 📂 Estrutura de Diretórios

```bash
weather-app/
├── public/                      # Arquivos servidos publicamente
│   ├── index.html              # Página principal
│   ├── settings.html           # Página de configurações e preferências
│   └── recomendations.json     # Banco de recomendações por clima
├── src/                        # Código fonte
│   ├── script.js               
│   └── style.css               
├── package.json                # Metadados e scripts do projeto
├── vercel.json                 # Configuração para deploy no Vercel
├── .gitignore                  
└── README.md                   # Este arquivo
```

## ✨ Destaques & Funcionalidades

### 🌡️ Previsão em Tempo Real

- Dados climáticos atualizados continuamente via WeatherAPI
- Informações detalhadas: temperatura, umidade, vento, pressão e índice UV
- Previsão de 7 dias com ícones intuitivos
- Índice de sensação térmica calculado automaticamente

### 🗺️ Mapa Interativo

- Integração com Windy para visualização de radar e mapas climáticos
- Atualização automática de coordenadas e altitude
- Visualização dinâmica baseada na localização selecionada
- Camadas de overlay (radar, nuvens, precipitation)

### 💾 Gerenciamento de Locais

- Salve seus locais favoritos para acesso instantâneo
- Reorganize locais com drag-and-drop intuitivo
- Sincronização com localStorage (sem perda de dados)
- Exibição de temperatura em tempo real para cada local salvo

### 🎨 Personalização Completa

- **Tema Claro/Escuro**: Alterne entre modos de acordo com sua preferência
- **Cores de Destaque**: 6 esquemas de cores para escolher
- **Unidades**: Alterne entre Celsius/Fahrenheit
- **Persistência**: Todas as preferências são salvas localmente

### 💡 Recomendações Inteligentes

- Sugestões contextualizadas baseadas no clima atual
- 8 categorias de clima: Claro, Chuva, Neve, Tempestade, Névoa, Frio, Quente, Padrão
- Ícones e cores associadas para melhor compreensão
- Recomendações práticas e motivacionais

### 📱 Design Responsivo

- Funciona perfeitamente em desktop, tablet e dispositivos móveis
- Menu lateral colapsável para telas pequenas
- Grid adaptativo para cards de previsão
- Otimizado para todas as resoluções de tela

### 📸 Compartilhamento

- Capture screenshots do painel de clima
- Compartilhe via redes sociais ou download direto

---

## 🛠️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2306B6D4.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Detalhes Técnicos:

- **HTML5**: Semântica moderna, acessibilidade e formulários
- **CSS3**: Grid, Flexbox, variáveis CSS, transições e animações
- **Tailwind CSS**: Framework de utility-first para estilização rápida
- **JavaScript Vanilla**: Sem dependências, lógica pura e modular
- **Material Icons**: Ícones vetoriais escaláveis e responsivos
- **API de Geolocalização**: Integração com navegadores modernos

## ⚙️ Pré-requisitos

Para executar este projeto, você precisa de:

**Ambiente Local:**

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Node.js 18+ (opcional, apenas para servidor local)
- Python 3+ (alternativa para servidor local)

**Online (Vercel):**

- Conta GitHub
- Conta Vercel (gratuita)

---

## 📦 Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/emellybmuniz/weather-app.git

# 2. Navegue para o diretório do projeto
cd weather-app

# 3. Inicie um servidor local com Node.js
npm run dev
# Ou com Python
python -m http.server 3000

# 4. Abra no navegador
# http://localhost:3000
```

## 💡 Como Usar

### Passos Básicos:

1. **Buscar uma Localidade**
   - Digite o nome da cidade na barra de pesquisa
   - Selecione a sugestão da lista
   - Os dados meteorológicos serão carregados automaticamente

2. **Visualizar Detalhes**
   - Observe as informações atuais no painel principal
   - Verifique temperatura, umidade, vento e pressão
   - Leia as recomendações personalizadas

3. **Consultar Previsão**
   - Role até a seção "Forecast"
   - Clique em um dia para ver detalhes completos
   - Máximo 6 dias de previsão disponível

4. **Verificar Mapa**
   - Acesse a seção "Map"
   - Visualize radar meteorológico em tempo real
   - Veja coordenadas e informações de localização

5. **Salvar Locais**
   - Clique no ícone de bookmark
   - Acesse seus locais salvos na barra lateral
   - Reorganize com drag-and-drop nas configurações

---

## ⚙️ Configuração

### Preferências de Usuário:

Acesse `settings.html` para personalizar:

**Tema da Interface:**

- Modo Claro (Light)
- Modo Escuro (Dark)

**Sistema de Unidades:**

- Métrico: °C, km/h, hPa
- Imperial: °F, mph, hPa

**Cores de Destaque:**

- Azul Oceano (padrão)
- Verde Esmeralda
- Amarelo Solar
- Vermelho Coral
- Roxo Violeta
- Teal

---

## 📱 Responsividade

### Desktop (> 1024px)

- Layout em 2 colunas
- Menu lateral persistente
- Previsão em 6 colunas
- Todas as funcionalidades visíveis

### Tablet (768px - 1024px)

- Layout adaptativo
- Menu lateral colapsável
- Previsão em 4 colunas
- Otimização para toque

### Mobile (≤ 768px)

- Layout vertical
- Menu hamburger
- Previsão em 2 colunas
- Elementos otimizados para dedos
- Economia de espaço

---

## 🔌 APIs & Funcionalidades Avançadas

### APIs Integradas:

| API                | Função                         | Endpoint                      | Status   |
| ------------------ | ------------------------------ | ----------------------------- | -------- |
| **WeatherAPI**     | Dados climáticos em tempo real | `api.weatherapi.com`          | ✅ Ativa |
| **Open-Meteo**     | Previsão de 7 dias             | `api.open-meteo.com`          | ✅ Ativa |
| **Nominatim**      | Geolocalização                 | `nominatim.openstreetmap.org` | ✅ Ativa |
| **Windy**          | Mapa meteorológico             | `embed.windy.com`             | ✅ Ativa |
| **Material Icons** | Ícones vetoriais               | `fonts.googleapis.com`        | ✅ Ativa |

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

### Como Contribuir:

1. **Faça um fork** do repositório
2. **Clone seu fork**: `git clone https://github.com/seu-usuario/weather-app.git`
3. **Crie uma branch**: `git checkout -b feature/MinhaFeature`
4. **Faça suas mudanças** e teste bem
5. **Commit**: `git commit -m 'Adiciona MinhaFeature'`
6. **Push**: `git push origin feature/MinhaFeature`
7. **Abra um Pull Request** com descrição detalhada

### Diretrizes:

- ✅ Mantenha o código limpo e bem comentado
- ✅ Siga o padrão de nomenclatura existente
- ✅ Teste em diferentes dispositivos
- ✅ Atualize a documentação se necessário
- ✅ Não altere `vercel.json` sem motivo

---

## 🔑 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

A licença MIT permite uso comercial, distribuição e modificação, com a condição de incluir a licença original e aviso de copyright.

---

## ✍️ Autor

Criado com ❤️ por **Emelly Beatriz**

📬 Entre em contato:

- 📧 Email: emellybmuniz@gmail.com
- 💼 LinkedIn: [linkedin.com/in/emellybmuniz](https://www.linkedin.com/in/emellybmuniz)
- 🐙 GitHub: [@emellybmuniz](https://github.com/emellybmuniz)

---

⭐ **Gostou do projeto?** Deixe uma estrela no repositório para apoiar o desenvolvimento!



