# 🧪 QA Automation - API Farmácia

![Node.js](https://img.shields.io/badge/node.js-18.x-green)
![Mocha](https://img.shields.io/badge/test-Mocha-blue)
![Chai](https://img.shields.io/badge/assertion-Chai-yellow)
![Supertest](https://img.shields.io/badge/api-Supertest-orange)
![Status](https://img.shields.io/badge/status-active-success)

---

## 📌 Descrição do projeto

Este projeto consiste numa suíte de testes automatizados de API desenvolvida em **Node.js**, utilizando **Mocha, Chai e Supertest**, com o objetivo de simular um sistema de gestão de farmácia.

A API testada inclui funcionalidades como:
- Autenticação de utilizadores (JWT)
- Listagem de medicamentos
- Dispensação de medicamentos (transferências entre contas)

---

## 🎯 Objetivos

- Automatizar testes de API REST
- Validar regras de negócio de um sistema de farmácia
- Garantir segurança através de autenticação JWT
- Testar cenários positivos e negativos
- Simular ambiente real de QA Backend

---

## 🧪 Tecnologias utilizadas

- Node.js
- Mocha
- Chai
- Supertest
- API REST
- JWT Authentication

---

## 📂 Estrutura do projeto


api-qa-farmacia/
│
├── test/
│ ├── login.test.js
│ ├── medicamentos.test.js
│ └── dispensacao.test.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md


---


---

## 🔐 Autenticação

A API utiliza autenticação JWT.

### Credenciais de acesso:

```json
{
  "username": "julio.lima",
  "senha": "123456"
}

Após login, é retornado um token JWT que deve ser usado no header:

### Authorization: Bearer <token>
💊 Funcionalidades testadas
🔹 Login
Autenticação de utilizador
Geração de token JWT
Validação de credenciais
🔹 Medicamentos
Listagem de medicamentos disponíveis
Proteção de rota com token
Bloqueio de acesso sem autenticação
🔹 Dispensação de medicamentos
Transferência entre contas
Validação de regras de negócio
Testes de valores válidos e inválidos

##🚀 Como executar o projeto
1. Instalar dependências
npm install
2. Executar testes
npm test

###📊 Exemplo de execução
✔ Login API
✔ Listagem de medicamentos
✔ Acesso bloqueado sem token
✔ Dispensação validada

#🧠 Aprendizados
Testes automatizados de API REST
Uso de JWT em testes
Estruturação de testes por módulos
Validação de regras de negócio
Boas práticas de QA Backend

👩‍💻 Autor

Projeto desenvolvido por Camila Leite
QA Automation Portfolio Project
