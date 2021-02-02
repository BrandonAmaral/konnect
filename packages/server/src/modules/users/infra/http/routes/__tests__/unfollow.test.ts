import request from 'supertest';

import app from '@common/infra/http/app';

describe('UnfollowUserRoute', () => {
  it('should be able to unfollow a user', async () => {
    const userOne = await request(app)
      .post('/api/users/create')
      .send({
        email: 'test@test.com',
        username: 'test',
        tag: 'test',
        password: 'password',
      })
      .expect(201);

    const userTwo = await request(app)
      .post('/api/users/create')
      .send({
        email: 'test123@test.com',
        username: 'test',
        tag: 'test123',
        password: 'password',
      })
      .expect(201);

    await request(app)
      .put(`/api/users/follow/${userTwo.body.user._id}`)
      .send({})
      .set('Authorization', `Bearer ${await userOne.body.token}`)
      .expect(200);

    await request(app)
      .put(`/api/users/unfollow/${userTwo.body.user._id}`)
      .send({})
      .set('Authorization', `Bearer ${await userOne.body.token}`)
      .expect(200);
  });
});
