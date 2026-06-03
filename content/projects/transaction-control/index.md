---
title: "Controle de Transações"
date: 2024-01-01
featured: false
weight: 10
draft: false
description: "Projeto Controle de Transações desenvolvido por Emelly Beatriz."
imageCover: "TransactionControlPOO.webp"
categories:
  - backend
technologies:
  - Java
  - Gradle
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/TransactionControlPOO"

metadata:
  status: "Concluído"
  platform: "Back-end / Desktop"
  focus: "Back-end"
---


Sistema bancário em Java para controle de contas, carteiras e investimentos. Permite criar contas, realizar transferências, investir, consultar saldo e histórico de operações. Focado em boas práticas de POO, tratamento de exceções e arquitetura modular.
---
## 🚀 Visão Geral do Projeto
Sistema bancário orientado a objetos, com suporte a múltiplas carteiras, contas e investimentos. Demonstra encapsulamento, herança, polimorfismo, tratamento de exceções customizadas e persistência em memória. Público-alvo: estudantes e desenvolvedores interessados em arquitetura Java e POO.
## 📂 Estrutura de Diretórios
```bash
📦 java-bank/
├── src/
│   └── main/
│       └── java/
│           └── br/com/dio/
│               ├── Main.java                # Ponto de entrada do sistema
│               ├── exception/               # Exceções customizadas
│               ├── model/                   # Modelos de domínio (Conta, Carteira, Investimento)
│               └── repository/              # Repositórios de dados
├── build.gradle.kts                        # Configuração do Gradle
├── README.md                               # Documentação
└── ...
```
## ✨ Destaques & Funcionalidades
### 🎯 **Gestão de Contas e Carteiras**
- Criação, consulta e remoção de contas e carteiras
- Transferências entre contas
- Investimentos e auditoria de operações
- Benefícios: organização financeira, histórico detalhado
- Utiliza: Java, Gradle, POO
### 🎨 **Design/Interface**
- Estrutura modular e clara
- Código bem comentado e organizado
- Foco em usabilidade via linha de comando
### 📱 **Compatibilidade/Responsividade**
- Suporte multiplataforma (Windows, Linux, Mac)
- Projeto console, sem interface gráfica
### ✅ **Validação/Segurança**
- Validação de saldo, existência de contas/carteiras
- Tratamento de exceções customizadas
- Segurança básica via encapsulamento
### 🔄 **Experiência do Usuário**
- Mensagens claras de erro e sucesso
- Operações rápidas e intuitivas
## 🛠️ Tecnologias Utilizadas
### Detalhes Técnicos:
- **Java**: Lógica principal, POO, exceções
- **Gradle**: Gerenciamento de dependências e build
## 1. Clone este repositório
$ git clone https://github.com/emellybmuniz/java-bank.git
## 2. Navegue até o diretório do projeto
$ cd java-bank
## 3. Compile o projeto
$ gradlew build
## 4. Execute o sistema
$ gradlew run
```
### Exemplos de Uso:
```java
// Criação de conta
AccountWallet conta = new AccountWallet("Emelly", ...);
// Transferência
bankService.transfer(contaOrigem, contaDestino, valor);
```
## 🛡️ Validação e Tratamento de Erros
### Validações Implementadas:
- Existência de conta/carteira
- Saldo suficiente
- Investimento válido
### Tratamento de Erros:
- Exceções customizadas (ex: AccountNotFoundException, NoFundsEnoughException)
- Mensagens claras ao usuário
## 🔌 API/Funcionalidades Avançadas
### Métodos Disponíveis:
| Método | Descrição | Parâmetros |
|--------|-----------|------------|
| criarConta | Cria nova conta | nome, dados |
| transferir | Transfere entre contas | origem, destino, valor |
| investir | Realiza investimento | conta, valor |
| consultarSaldo | Consulta saldo | conta |
### Funcionalidades Especiais:
- Auditoria de operações financeiras
- Suporte a múltiplos tipos de carteira
### Como contribuir:
1. **Fork** este repositório
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/java-bank.git`
3. **Crie uma branch** para sua feature: `git checkout -b feature/nova-funcionalidade`
4. **Faça suas alterações** e teste completamente
5. **Commit** suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
6. **Push** para a branch: `git push origin feature/nova-funcionalidade`
7. **Abra um Pull Request** com descrição detalhada das mudanças