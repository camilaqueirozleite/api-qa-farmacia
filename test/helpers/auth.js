const request = require('supertest');

const baseURL = 'http://localhost:3000';

async function getToken() {
  const res = await request(baseURL)
    .post('/login')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send({
      username: 'julio.lima',
      senha: '123456'
    });

  return res.body.token;
}

module.exports = { getToken };