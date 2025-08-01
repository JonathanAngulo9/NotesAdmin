const request = require('supertest');
const app = require('../src/app');

describe('Notes API', () => {
  it('should return empty array', async () => {
    const res = await request(app).get('/notes');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });

  it('should create a note', async () => {
    const res = await request(app)
      .post('/notes')
      .send({ content: 'Hello' });

    expect(res.statusCode).toEqual(201);
    expect(res.body.content).toBe('Hello');
  });
});
