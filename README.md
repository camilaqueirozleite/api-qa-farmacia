# API QA Farmacia
API desenvolvida para estudos e praticas de QA, incluindo autenticacao, CRUD de medicamentos e registro de dispensacoes. Documentada com Swagger e estruturada em arquitetura MVC.

## Tecnologias Utilizadas
- Node.js
- Express
- Swagger (OpenAPI 3.0)
- Arquitetura MVC
- JavaScript

## Instalacao e Execucao

Clone o repositorio:

git clone https://github.com/camilaqueirozleite/api-qa-farmacia.git

Instale as dependencias:

npm install

Execute o servidor:

npm start

A API ficara disponivel em:

http://localhost:3001

## Documentacao Swagger

Acesse:

http://localhost:3001/api-docs

## Autenticacao - Login

POST /login

Body:

{
  "usuario": "admin",
  "senha": "123"
}

Retornos:
- 200 Login realizado com sucesso
- 401 Credenciais invalidas

## Medicamentos (CRUD Completo)

GET /medicamentos  
Lista todos os medicamentos.

POST /medicamentos  
Cria um novo medicamento.

Body:

{
  "nome": "Dipirona",
  "descricao": "Analgesico e antitermico",
  "preco": 12.50
}

GET /medicamentos/{id}  
Busca medicamento pelo ID.

PUT /medicamentos/{id}  
Atualiza um medicamento.

DELETE /medicamentos/{id}  
Remove um medicamento.

## Dispensacao

POST /dispensacao

Body:

{
  "medicamentoId": "123",
  "quantidade": 2,
  "paciente": "Joao da Silva"
}

Retorno:
- 201 Dispensacao registrada

## Estrutura do Projeto

api-qa-farmacia/
  src/
    controllers/
    middlewares/
    models/
    routes/
    services/
    config/
    swagger.json
    app.js
  tests/
    integration/
  package.json
  package-lock.json
  README.md

## Testes

Os testes podem ser realizados via:
- Swagger
- Thunder Client
- Postman
- Insomnia
