import request from 'supertest';

import app from '@common/infra/http/app';

describe('InfoRoute', () => {
  it('should be able to retrieve user info', async () => {
    const user = await request(app)
      .post('/api/users/create')
      .send({
        email: 'test@test.com',
        username: 'test',
        tag: 'test',
        password: 'password',
      })
      .expect(201);

    await request(app)
      .get(`/api/users/info/${user.body.user._id}`)
      .set('Authorization', `Bearer ${await user.body.token}`)
      .send({})
      .expect(200);
  });
});
