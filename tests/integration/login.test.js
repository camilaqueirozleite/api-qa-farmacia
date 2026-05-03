const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');

describe('Login', () => {
  it('deve fazer login com sucesso', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        username: 'julio.lima',
        senha: '123456'
      });

    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property('token');
  });

  it('não deve logar com credenciais inválidas', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        username: 'errado',
        senha: '000'
      });

    expect(res.statusCode).to.equal(401);
    expect(res.body).to.have.property('erro');
  });
});
