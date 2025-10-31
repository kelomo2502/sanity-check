const request = require('supertest');
const { app } = require('./server');

describe('Identity Service', () => {
  it('should respond to health check', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
  });

  it('should respond to identity endpoint', async () => {
    const response = await request(app).get('/api/v1/identity/user');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toContain('Identity Service');
  });
});