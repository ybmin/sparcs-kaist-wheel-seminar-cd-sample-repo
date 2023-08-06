
const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return 200 OK', () => {
    return request(app).get('/')
      .expect(200);
  });
});

describe('GET /', () => {
  it('should return "Welcome to Sparcs-kaist server!"', () => {
    return request(app).get('/')
      .expect('Welcome to Sparcs-kaist server!');
  });
});

// describe('GET /', () => {
//   it('should return 404 (must fail)', () => {
//     return request(app).get('/')
//       .expect(404);
//   });
// });

// IN-LAB TODO: test script for /health-check
describe('GET /health-check', () => {
  it('should return "ok"', () => {
    return request(app).get('/health-check')
      .expect(200);
  });
});
describe('GET /health-check', () => {
  it('should return "ok"', () => {
    return request(app).get('/health-check')
      .expect('ok');
  });
});

// describe('GET /health-check', () => {
//   it('should return "must fail"', () => {
//     return request(app).get('/health-check')
//       .expect(404);
//   });
// });

// TODO : test script for /assignment
describe('GET /assignment', () => {
  it('should return "may be not found?"', () => {
    return request(app).get('/assignment')
      .expect(404);
  })});
