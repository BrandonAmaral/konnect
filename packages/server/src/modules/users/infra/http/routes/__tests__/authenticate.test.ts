import request from 'supertest';

import app from '@common/infra/http/app';

describe('AuthenticateUserRoute', () => {
  it('should be able to authenticate', async () => {
    await request(app)
      .post('/api/users/create')
      .send({
        email: 'test@test.com',
        username: 'test',
        tag: 'test',
        password: 'password',
      })
      .expect(201);

    await request(app)
      .post('/api/users/auth')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .expect(200);
  });

  it('should not be able to authenticate with incorrect credentials', async () => {
    await request(app)
      .post('/api/users/create')
      .send({
        email: 'test@test.com',
        username: 'test',
        tag: 'test',
        password: 'password',
      })
      .expect(201);

    await request(app)
      .post('/api/users/auth')
      .send({
        email: 'test123@test.com',
        password: 'password',
      })
      .expect(400);

    await request(app)
      .post('/api/users/auth')
      .send({
        email: 'test@test.com',
        password: 'password123',
      })
      .expect(400);
  });

  it('should not be able to authenticate with invalid credentials (YUP)', async () => {
    await request(app)
      .post('/api/users/create')
      .send({
        email: 'test@test.com',
        username: 'test',
        tag: 'test',
        password: 'password',
      })
      .expect(201);

    await request(app)
      .post('/api/users/auth')
      .send({
        email: 'test',
        password: 'password',
      })
      .expect(400);
  });
});
