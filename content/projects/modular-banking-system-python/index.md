---
title: "Modular Banking System"
date: 2024-01-01
featured: true
weight: 10
draft: false
description: "Projeto Modular Banking System desenvolvido por Emelly Beatriz."
imageCover: "coursePortfolio.webp"
categories:
  - backend
technologies:
  - Python
liveDemo: "#"
repositoryUrl: "https://github.com/emellybmuniz/modular-banking-system-python"

metadata:
  status: "Concluído"
  platform: "Web/API"
  focus: "Back-end"
---

[🇺🇸 English](./README.en.md) | [🇧🇷 Português](./README.md)

![GitHub License](https://img.shields.io/github/license/emellybmuniz/modular-banking-system-python)
![GitHub language count](https://img.shields.io/github/languages/count/emellybmuniz/modular-banking-system-python)
![GitHub last commit](https://img.shields.io/github/last-commit/emellybmuniz/modular-banking-system-python)
![GitHub repo size](https://img.shields.io/github/repo-size/emellybmuniz/modular-banking-system-python)
![Project Status](https://img.shields.io/badge/Status%20-%20Finalizado%20-%20%234BC21E )

Este repositório contém uma implementação didática de um sistema bancário modular em Python. O objetivo foi transformar uma versão simples que usava dicionários para guardar clientes e contas, em um sistema orientado a objetos seguindo uma modelagem UML, com separação clara entre domínio, repositório, serviços e interface (CLI). O projeto foca em: modelagem de classes (clientes, contas, transações), operações bancárias (depósito, saque), repositório em memória e um menu CLI para interação.

---

### ✅ Checklist de atividades realizadas
- [x] Modelagem das classes do domínio (Cliente, Conta, Histórico, Transação, Conta Corrente).
- [x] Implementação de repositórios em memória para clientes e contas.
- [x] Serviços que encapsulam regras de negócio (criação de cliente/conta, depósito, saque, extrato, saldo).
- [x] CLI básico com menu para interagir com o sistema (criar usuário, criar conta, depositar, sacar, visualizar extrato e listar contas).
- [x] Atualização para armazenar dados em objetos (POO) seguindo o enunciado do bootcamp.
- [x] Testes automatizados (pytest) para validar fluxo principal e regras (arquivo `tests/test_integration.py`).

---

## 📋 Índice
- [Descrição do Desafio](#-descrição-do-desafio)
- [Visão Geral da Solução](#-visão-geral-da-solução)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Como Funciona (componentes)](#-como-funciona-componentes)
- [Como Executar (CLI e testes)](#-como-executar-cli-e-testes)
- [Pré-requisitos](#-pré-requisitos)
- [Contribuição](#-contribuição)
- [Licença e Autoria](#-licença-e-autoria)

---

## 📌 Descrição do Desafio
Fornecido pelo bootcamp Luizalabs - Back-end com Python (DIO):

Objetivo Geral
- Iniciar a modelagem do sistema bancário em POO. Adicionar classes para cliente e as operações bancárias: depósito e saque.

Desafio
- Atualizar a implementação do sistema bancário para armazenar os dados de clientes e contas bancárias em objetos (instâncias de classes) ao invés de dicionários.
- Seguir o modelo de classes UML fornecido (modelagem de domínio).
- Após concluir a modelagem das classes e a criação dos métodos, atualizar os métodos que tratam as opções do menu para funcionarem com as classes modeladas.

---

## 🧭 Visão Geral da Solução
A solução adotou uma arquitetura simples e modular com responsabilidades bem definidas:
- domain/: classes do modelo (Cliente, Conta, ContaCorrente, Histórico, Transação).
- repository/: repositório em memória (InMemory) e uma camada de persistência simples para obter repositórios (singleton in-memory durante a execução).
- services/: regras e orquestrações (AccountService, TransactionService, UserService).
- cli/: interface do usuário via terminal (menu e handlers que usam os serviços).
- tests/: testes automatizados (pytest) cobrindo os fluxos principais.

Princípios aplicados:
- Separação de responsabilidades (SRP): domínio, repositório, serviços e interface estão desacoplados.
- Injeção de dependências: serviços aceitam repositórios como argumentos para facilitar testes e troca de implementação.
- Orientação a objetos: objetos representam clientes, contas e histórico em vez de dicionários.

---

## 📂 Estrutura de Pastas (detalhada)
A raiz do projeto contém os módulos principais. Estrutura (resumida):

```
modular-banking-system-python/
├── app.py                     # Aplicação CLI - orquestra menu e serviços
├── cli/                       # Interface de linha de comando (menu)
│   └── menu.py
├── domain/                    # Modelos do domínio
│   ├── account.py
│   ├── checking_account.py
│   ├── client.py
│   ├── natural_person.py
│   ├── history.py
│   └── transaction.py
├── repository/                # Repositórios (in-memory) e helpers de persistência
│   ├── in_memory.py
│   └── persistence.py
├── services/                  # Serviços que expõem a API da aplicação
│   ├── account_service.py
│   ├── transaction_service.py
│   └── user_service.py
├── tests/                     # Testes automatizados (pytest)
│   └── test_integration.py
├── README.md
└── pytest.ini
```

---

## ⚙️ Como Funciona (componentes e responsabilidades)

Domain (modelos)
- Client / NaturalPerson: representam o titular do cadastro. Mantêm dados básicos e referência ao `History` (extrato) e suas contas.
- Account / CheckingAccount: representação de contas bancárias. Possuem atributos como `agency`, `number`, `_balance`, `history` e métodos de depósito/saque (que usam a implementação de `Transaction`).
- Transaction / Deposito / Saque: objetos que encapsulam valor, tipo, data e que sabem como se registrar em uma `Account` (ajustando saldo e adicionando um registro ao `History`).
- History: coleção de transações e gerador de extrato (string formatada).

Repository
- InMemoryClientRepository / InMemoryAccountRepository: implementações simples que mantêm objetos em dicionários/tuplas de memória durante a execução.
- persistence.py: fornece singletons para repositórios e função `reset_repos()` usada nos testes para garantir estado limpo entre execuções.

Services
- AccountService: cria clientes, cria contas, lista contas e busca contas por cliente. Ao criar cliente, um `History` é anexado para que transações fiquem registradas.
- TransactionService: controla depósito, saque, consulta de saldo, extrato e listagem de transações. Valida existência de conta e valores.
- UserService: alternativas para gerenciar usuários diretamente via repositório.

CLI
- `app.py` (classe `BankingCLI`) fornece um menu interativo com opções para criar usuário, criar conta, depositar, sacar, ver extrato, listar contas e remover usuário.
- O CLI consome os `services` e repositórios para executar operações. As entradas do usuário são validadas e exceções são tratadas com mensagens amigáveis.

---

## 🧪 Exemplos de fluxos (explicação passo a passo)

1) Criar um usuário e uma conta
- O CLI solicita CPF, nome, data de nascimento e endereço.
- `AccountService.create_customer()` valida se o CPF não existe e cria uma `NaturalPerson` com uma `History` anexa.
- `AccountService.create_checking_account()` cria uma `CheckingAccount` e a associa ao cliente (client.add_account → propaga history para a conta).

2) Depositar
- `TransactionService.deposit()` localiza a conta pelo `agency` e `number`, valida o valor e cria um `Deposito`.
- `Deposito.registrar()` atualiza o `_balance` da conta e adiciona a transação ao `History`.

3) Sacar
- `TransactionService.withdraw()` valida se existe saldo suficiente e cria um `Saque`.
- `Saque.registrar()` subtrai do `_balance` e registra no `History`.

4) Extrato
- `TransactionService.get_statement()` retorna o `history.statement()` (string com linhas formatadas das transações).

---

## 🚀 Como Executar
Siga os passos abaixo para rodar o CLI e os testes localmente.

### Pré-requisitos
- Python 3.10+ (recomendado)
- pip (gerenciador de pacotes)

### Instalar dependências para testes (opcional)
Este projeto usa apenas a stdlib e `pytest` para testes. Crie um ambiente virtual e instale pytest:

```bash
python -m venv .venv
# Windows PowerShell
.\.venv\Scripts\Activate.ps1
pip install -U pip
pip install pytest
```

### Executar a aplicação (CLI)
No Windows PowerShell, dentro da raiz do projeto:

```powershell
python app.py
```

Siga o menu interativo para criar usuários, contas e realizar operações.

### Executar os testes
```powershell
pytest -q
# Ou para relatório completo:
pytest -q -rA
```

---

## 🔍 Observações e decisões técnicas importantes
- A escolha por um repositório em memória foi feita para manter o projeto simples e didático; trocar para uma camada de persistência real (SQLite, Postgres) exigiria apenas a implementação de novos repositórios compatíveis com a API atual.
- As transações (Deposito/Saque) preferem manipular `_balance` diretamente ao registrar, garantindo desempenho simples; a validação de limites/exceções acontece no `TransactionService` e nas classes de transação.
- `AccountService.create_customer()` agora anexa um `History` ao cliente automaticamente — isso garante que todas as contas desse cliente herdem um histórico e que os extratos funcionem corretamente.

---

## ♻️ Testes e Qualidade
- Há um arquivo de testes de integração em `tests/test_integration.py` que cobre fluxos principais e validações.
- Use `reset_repos()` do `repository.persistence` nos testes para garantir um estado limpo entre casos.

---

## 🤝 Contribuição
Contribuições são bem-vindas. Sinta-se à vontade para abrir issues e enviar PRs.

Fluxo sugerido:
1. Fork o repositório
2. Crie uma branch para sua feature
3. Teste localmente antes de abrir PR

---

## 🔑 Licença
Este repositório é fornecido para fins didáticos. por isso, está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## ✍️ Autora

Desenvolvido por Emelly Beatriz com ❤️

📬 Entre em contato:

📧 emellybmuniz@gmail.com |
💼 [Linkedin](https://www.linkedin.com/in/emellybmuniz) |
🐙 [Github](https://github.com/emellybmuniz)

---

⭐ Gostou do projeto? Deixe uma estrela no repositório para apoiar o desenvolvimento!

