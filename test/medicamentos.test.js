const request = require('supertest');
const expect = require('chai').expect;
const { getToken } = require('./helpers/auth');

const baseURL = 'http://localhost:3000';

describe('Medicamentos', function () {

  let token;

  before(async () => {
    token = await getToken();
  });

  it('deve listar medicamentos disponíveis', async () => {
    const res = await request(baseURL)
      .get('/contas')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).to.equal(200);
    expect(res.body.contas).to.be.an('array');
  });

  it('não deve permitir acesso sem token', async () => {
    const res = await request(baseURL)
      .get('/contas');

    expect(res.status).to.be.oneOf([401, 403]);
  });

});