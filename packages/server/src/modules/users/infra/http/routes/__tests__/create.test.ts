import request from 'supertest';

import app from '@common/infra/http/app';

describe('CreateUserRoute', () => {
  it('should be able to create a user', async () => {
    await request(app)
      .post('/api/users/create')
      .send({
        email: 'test@test.com',
        username: 'test',
        tag: 'test',
        password: 'password',
      })
      .expect(201);
  });

  it('should not be able to create a user with already existing email or tag', async () => {
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
      .post('/api/users/create')
      .send({
        email: 'test@test.com',
        username: 'test',
        tag: 'test123',
        password: 'password',
      })
      .expect(400);

    await request(app)
      .post('/api/users/create')
      .send({
        email: 'test123@test.com',
        username: 'test',
        tag: 'test',
        password: 'password',
      })
      .expect(400);
  });

  it('should not be able to create a user with invalid credentials (YUP)', async () => {
    await request(app)
      .post('/api/users/create')
      .send({
        email: 'test',
        username: 'test',
        tag: 'test',
        password: 'password',
      })
      .expect(400);
  });
});
