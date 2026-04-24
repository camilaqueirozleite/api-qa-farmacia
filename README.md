# 🧪 QA Automation - API Farmácia

![Node.js](https://img.shields.io/badge/node.js-18.x-green)
![Mocha](https://img.shields.io/badge/test-Mocha-blue)
![Chai](https://img.shields.io/badge/assertion-Chai-yellow)
![Supertest](https://img.shields.io/badge/api-Supertest-orange)
![Status](https://img.shields.io/badge/status-active-success)

---

Claro, Camila — aqui está **um único texto contínuo**, completo, limpo e pronto para **copiar e colar diretamente no GitHub**, sem seções separadas ou instruções extras.

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
