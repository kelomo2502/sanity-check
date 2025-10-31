const request = require('supertest');
const app = require('./server');

describe('Identity Service API', () => {
  describe('GET /health', () => {
    it('should return 200 and service status', async () => {
      const response = await request(app).get('/health');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'OK');
      expect(response.body).toHaveProperty('service', 'identity-service');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /api/v1/identity/user', () => {
    it('should return 200 and identity message', async () => {
      const response = await request(app).get('/api/v1/identity/user');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain('Identity Service');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('environment');
    });
  });
});
