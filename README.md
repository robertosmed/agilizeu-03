﻿# Semana Agilizei 3.0
### Cypress na prática: do zero a integração contínua.
- Uso de seletores, Asserções, conhecendo comandos each, invoke, CypressDasboard, GitHub Actions

# Tecnologias
- Cypress@5.6.0
- NodeJS@10.20.1
- NPM@6.14.4

# Cenário de Teste
- Criar entradas
- Criar saídas
- Remover entradas e saídas

# Fluxo do Cenário
## Pré-condição: para entradas(receitas) números positivos e para saídas(despesas) números negativos
- Acessar o site https://devfinance-agilizei.netlify.app/
- Clicar em Nova Transação
- Descrever o tipo de transação
- Digitar o valor referente a essa transação
- Inserir a data
- Clicar em Salvar
- Clicar no ícone remover ⛔️

# Passos para executar o projeto
- Clonar o repositório
- Dentro da raiz do projeto executar o camando [npm install]
- Executar comando abaixo para execução dos testes pelo Cypress:
  - [npx cypress open]

# Assista o vídeo - Execucação dos Testes 
[![Semana Agilizei 3.0 - Cypress do zero a integração contínua](http://img.youtube.com/vi/kpt_-Et74kk/0.jpg)](http://www.youtube.com/watch?v=kpt_-Et74kk "Apresentação dos testes")
