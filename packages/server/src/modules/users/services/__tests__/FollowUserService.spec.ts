import FollowUserService from '../FollowUserService';
import CreateUserService from '../CreateUserService';

describe('FollowUserService', () => {
  it('should be able to follow a user', async () => {
    const userOne = new CreateUserService().execute({
      email: 'test@test.com',
      username: 'test',
      tag: 'test',
      password: 'password',
    });
    const userTwo = new CreateUserService().execute({
      email: 'test123@test.com',
      username: 'test',
      tag: 'test123',
      password: 'password',
    });

    const service = new FollowUserService();

    const expected = await service.execute({
      user_id: (await userOne).user._id,
      target_user_id: (await userTwo).user._id,
    });

    expect(expected).toBe('OK');
  });
});
