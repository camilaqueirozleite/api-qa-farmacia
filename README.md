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