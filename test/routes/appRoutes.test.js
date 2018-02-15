let app = require('../../app');
let request = require('supertest');

describe('Root path', () => {
  test('should respond to the GET method', (done) => {
    request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe('hello');
            done();
    });
  });
});
