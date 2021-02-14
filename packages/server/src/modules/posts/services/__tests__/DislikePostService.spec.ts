import CreateUserService from '@modules/users/services/CreateUserService';
import CreatePostService from '../CreatePostService';
import LikePostService from '../LikePostService';
import DislikePostService from '../DislikePostService';

describe('DislikePostService', () => {
  it('should be able to like a post', async () => {
    const createUserService = new CreateUserService();
    const createPostService = new CreatePostService();
    const likePostService = new LikePostService();
    const dislikePostService = new DislikePostService();

    const user = await createUserService.execute({
      email: 'test@test.com',
      username: 'test',
      tag: 'test',
      password: 'password',
    });

    const post = await createPostService.execute({
      content: 'Test',
      owner: (await user).user._id,
    });

    await likePostService.execute({
      user_id: (await user).user._id,
      post_id: await post._id,
    });

    const expected = await dislikePostService.execute({
      user_id: (await user).user._id,
      post_id: await post._id,
    });

    expect(expected?.likes).toHaveLength(0);
  });
});
