<<<<<<< HEAD
📘 API QA Farmácia
API desenvolvida para estudos e práticas de QA, incluindo autenticação, CRUD de medicamentos e registro de dispensações.
Documentada com Swagger e estruturada em arquitetura MVC.

🚀 Tecnologias Utilizadas
Node.js

Express

Swagger (OpenAPI 3.0)

Middleware de autenticação

Arquitetura MVC

JavaScript

📦 Instalação e Execução
Clone o repositório:

bash
git clone https://github.com/camilaqueirozleite/api-qa-farmacia.git
Instale as dependências:

bash
npm install
Execute o servidor:

bash
npm start
A API ficará disponível em:

Código
http://localhost:3001
📚 Documentação Swagger
Acesse a documentação completa da API:

Código
http://localhost:3001/api-docs
🔐 Autenticação — Login
POST /login
Body:

json
{
  "usuario": "admin",
  "senha": "123"
}
Retorno esperado:

200 → Login realizado com sucesso

401 → Credenciais inválidas

💊 Medicamentos (CRUD Completo)
GET /medicamentos
Lista todos os medicamentos.

POST /medicamentos
Cria um novo medicamento.

Body:

json
{
  "nome": "Dipirona",
  "descricao": "Analgésico e antitérmico",
  "preco": 12.50
}
GET /medicamentos/{id}
Busca medicamento pelo ID.

PUT /medicamentos/{id}
Atualiza um medicamento.

DELETE /medicamentos/{id}
Remove um medicamento.

💉 Dispensação
POST /dispensacao
Body:

json
{
  "medicamentoId": "123",
  "quantidade": 2,
  "paciente": "João da Silva"
}
Retorno:

201 → Dispensação registrada

🗂 Estrutura do Projeto
Código
api-qa-farmacia/
│
├── src/
│   ├── controllers/
│   │   ├── loginController.js
│   │   ├── medicamentosController.js
│   │   └── dispensacaoController.js
│   │
│   ├── middlewares/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   └── medicamentosModel.js
│   │
│   ├── routes/
│   │   ├── loginRoutes.js
│   │   ├── medicamentosRoutes.js
│   │   └── dispensacaoRoutes.js
│   │
│   ├── swagger.json
│   └── app.js
│
├── package.json
└── README.md
🧪 Testes
Os testes podem ser realizados diretamente pelo Swagger ou via ferramentas como:

Thunder Client

Postman

Insomnia
=======
# 🧪 QA Automation - API Farmácia

![Node.js](https://img.shields.io/badge/node.js-18.x-green)
![Mocha](https://img.shields.io/badge/test-Mocha-blue)
![Chai](https://img.shields.io/badge/assertion-Chai-yellow)
![Supertest](https://img.shields.io/badge/api-Supertest-orange)
![Status](https://img.shields.io/badge/status-active-success)

---

# 🧪 API QA Farmácia — Testes Automatizados de API

Este projeto consiste numa suíte de testes automatizados de API desenvolvida em **Node.js**, utilizando **Mocha, Chai e Supertest**, com o objetivo de validar um sistema fictício de **gestão de farmácia**. A API testada inclui funcionalidades como autenticação de utilizadores via JWT, listagem de medicamentos e dispensação de medicamentos através de transferências entre contas.

Os principais objetivos deste projeto são automatizar testes de API REST, validar regras de negócio de um sistema de farmácia, garantir segurança através de autenticação JWT, testar cenários positivos e negativos e simular um ambiente real de QA Backend. As tecnologias utilizadas incluem Node.js, Mocha, Chai, Supertest, API REST e JWT Authentication.

A estrutura do projeto está organizada da seguinte forma:

```
api-qa-farmacia/
│
├── test/
│   ├── login.test.js
│   ├── medicamentos.test.js
│   └── dispensacao.test.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

A autenticação é realizada através das seguintes credenciais:

```json
{
  "username": "julio.lima",
  "senha": "123456"
}
```

Após o login, a API retorna um **token JWT**, que deve ser enviado no header:

```
Authorization: Bearer <token>
```

As funcionalidades testadas incluem:  
**Login** — autenticação de utilizador, geração de token JWT e validação de credenciais.  
**Medicamentos** — listagem de medicamentos disponíveis, proteção de rota com token e bloqueio de acesso sem autenticação.  
**Dispensação de medicamentos** — transferência entre contas, validação de regras de negócio e testes com valores válidos e inválidos.

Para executar o projeto, basta instalar as dependências com:

```
npm install
```

E rodar os testes com:

```
npm test
```

Exemplo de execução:

```
✔ Login API
✔ Listagem de medicamentos
✔ Acesso bloqueado sem token
✔ Dispensação validada
```

Entre os principais aprendizados deste projeto estão testes automatizados de API REST, uso de JWT em testes, estruturação de testes por módulos, validação de regras de negócio e boas práticas de QA Backend.

**Projeto desenvolvido por Camila Leite — QA Automation Portfolio Project**
>>>>>>> 48b427b35ff605ae4fd01e7d492e0a8c8ab74db3
