import request from 'supertest';

import app from '@common/infra/http/app';

describe('TimelineRoute', () => {
  it('should be able to retrieve the timeline', async () => {
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
      .get('/api/posts/timeline')
      .set('Authorization', `Bearer ${await user.body.token}`)
      .send({})
      .expect(200);
  });
});
