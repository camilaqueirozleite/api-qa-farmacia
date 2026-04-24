const request = require('supertest');
const expect = require('chai').expect;
const { getToken } = require('./helpers/auth');

const baseURL = 'http://localhost:3000';

describe('Dispensação de Medicamentos', function () {

  let token;

  before(async () => {
    token = await getToken();
  });

  it('deve permitir dispensação válida', async () => {

    const res = await request(baseURL)
      .post('/transferencias')
      .set('Authorization', `Bearer ${token}`)
      .send({
        contaOrigem: 1,
        contaDestino: 2,
        valor: 10
      });

    expect(res.status).to.be.oneOf([200, 201]);
  });

  it('não deve permitir valor abaixo do mínimo', async () => {

    const res = await request(baseURL)
      .post('/transferencias')
      .set('Authorization', `Bearer ${token}`)
      .send({
        contaOrigem: 1,
        contaDestino: 2,
        valor: 1
      });

    expect(res.status).to.be.oneOf([400, 422]);
  });

});