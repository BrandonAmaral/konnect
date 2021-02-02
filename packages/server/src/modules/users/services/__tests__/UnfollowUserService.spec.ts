import UnfollowUserService from '../UnfollowUserService';
import CreateUserService from '../CreateUserService';

describe('FollowUserService', () => {
  it('should be able to unfollow a user', async () => {
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

    const service = new UnfollowUserService();

    const expected = await service.execute({
      user_id: (await userOne).user._id,
      target_user_id: (await userTwo).user._id,
    });

    expect(expected).toBe('OK');
  });
});
