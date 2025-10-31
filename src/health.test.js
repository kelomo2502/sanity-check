const request = require('supertest');
const app = require('./server');

describe('Health Endpoints', () => {
  it('should return healthy status', async () => {
    const res = await request(app)
      .get('/health')
      .expect(200);
    
    expect(res.body).toHaveProperty('status', 'OK');
    expect(res.body).toHaveProperty('service', 'identity-service');
  });
});