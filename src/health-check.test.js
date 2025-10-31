const { spawn } = require('child_process');
const path = require('path');

describe('Health Check Script', () => {
  it('should exit with code 1 when server is not running', (done) => {
    const healthCheck = spawn('node', [path.join(__dirname, 'health-check.js')]);
    
    healthCheck.on('close', (code) => {
      expect(code).toBe(1);
      done();
    });
  });
});