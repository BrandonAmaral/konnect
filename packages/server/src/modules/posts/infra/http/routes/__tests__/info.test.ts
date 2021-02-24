import request from 'supertest';

import app from '@common/infra/http/app';

describe('InfoRouteTest', () => {
  it('should be able to fetch post info', async () => {
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
      .get(`/api/posts/info/${user.body.user.tag}/${post.body.slug}`)
      .send({})
      .expect(200);
  });
});
