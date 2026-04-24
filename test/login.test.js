const request = require('supertest');
const expect = require('chai').expect;

const baseURL = 'http://localhost:3000';

const request = require('supertest');
const expect = require('chai').expect;

const baseURL = 'http://localhost:3000';

describe('Login API', function () {

  it('deve autenticar e retornar token', async () => {
    const res = await request(baseURL)
      .post('/login')
      .send({
        username: 'julio.lima',
        senha: '123456'
      });

    expect(res.status).to.equal(200);
    expect(res.body.token).to.exist;
  });

});