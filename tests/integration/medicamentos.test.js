const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');

describe('Medicamentos', () => {
  it('deve retornar lista de medicamentos', async () => {
    const res = await request(app).get('/medicamentos');

    expect(res.statusCode).to.equal(200);
    expect(res.body).to.be.an('array');
  });
});
