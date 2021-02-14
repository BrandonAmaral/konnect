import request from 'supertest';

import app from '@common/infra/http/app';

describe('DeletePostRoute', () => {
  it('should be able to delete a post', async () => {
    const user = await request(app)
      .post('/api/users/create')
      .send({
        email: 'test@test.com',
        username: 'test',
        tag: 'test',
        password: 'password',
      })
      .expect(201);

    const post = await request(app)
      .post('/api/posts/create')
      .send({
        owner: user.body.user._id,
        content: 'test',
      })
      .set('Authorization', `Bearer ${user.body.token}`)
      .expect(201);

    await request(app)
      .delete(`/api/posts/delete-post/${await post.body._id}`)
      .send({
        post_id: await post.body._id,
        user_id: await user.body.user._id,
      })
      .set('Authorization', `Bearer ${user.body.token}`)
      .expect(200);
  });
});
