import request from 'supertest';

import app from '@common/infra/http/app';

describe('CreatePostRoute', () => {
  it('should be able to create a post', async () => {
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
      .post('/api/posts/create')
      .send({
        owner: user.body.user._id,
        content: 'test',
      })
      .set('Authorization', `Bearer ${user.body.token}`)
      .expect(201);
  });
});
