import CreateUserService from '@modules/users/services/CreateUserService';
import CreatePostService from '../CreatePostService';
import DeletePostService from '../DeletePostService';

describe('DeletePostService', () => {
  it('should be able to delete a post', async () => {
    const createUserService = new CreateUserService();
    const createPostService = new CreatePostService();
    const deletePostService = new DeletePostService();

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

    const expected = await deletePostService.execute({
      post_id: (await post)._id,
      user_id: String(post.owner),
    });

    expect(expected).toEqual('OK');
  });
});
