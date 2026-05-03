const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');

let token;

describe('Dispensação de Medicamentos', () => {

  before(async () => {
    const res = await request(app)
      .post('/login')
      .send({
        username: 'julio.lima',
        senha: '123456'
      });

    token = res.body.token;
  });

  it('deve realizar dispensação com sucesso', async () => {
    const res = await request(app)
      .post('/dispensacao')
      .set('Authorization', `Bearer ${token}`)
      .send({
        medicamentoId: 1,
        quantidade: 10
      });

    expect(res.statusCode).to.equal(201);
    expect(res.body).to.have.property('mensagem');
  });

  it('não deve permitir quantidade igual a zero', async () => {
    const res = await request(app)
      .post('/dispensacao')
      .set('Authorization', `Bearer ${token}`)
      .send({
        medicamentoId: 1,
        quantidade: 0
      });

    expect(res.statusCode).to.equal(400);
    expect(res.body).to.have.property('erro');
  });

  it('não deve permitir quantidade negativa', async () => {
    const res = await request(app)
      .post('/dispensacao')
      .set('Authorization', `Bearer ${token}`)
      .send({
        medicamentoId: 1,
        quantidade: -5
      });

    expect(res.statusCode).to.equal(400);
    expect(res.body).to.have.property('erro');
  });

  it('não deve permitir medicamento inexistente', async () => {
    const res = await request(app)
      .post('/dispensacao')
      .set('Authorization', `Bearer ${token}`)
      .send({
        medicamentoId: 999,
        quantidade: 5
      });

    expect(res.statusCode).to.equal(404);
    expect(res.body).to.have.property('erro');
  });

});
