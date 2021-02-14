import request from 'supertest';

import app from '@common/infra/http/app';

describe('LikePostRoute', () => {
  it('should be able to like a post', async () => {
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

    const post = await request(app)
      .post('/api/posts/create')
      .send({
        owner: await userOne.body.user._id,
        content: 'test',
      })
      .set('Authorization', `Bearer ${await userOne.body.token}`)
      .expect(201);

    await request(app)
      .put(`/api/posts/like/${await post.body._id}`)
      .send({
        post_id: post.body._id,
        user_id: userTwo.body.user._id,
      })
      .set('Authorization', `Bearer ${await userTwo.body.token}`)
      .expect(200);
  });
});
