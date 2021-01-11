import CreatePostService from '../CreatePostService';

describe('CreatePost', () => {
  it('should be able to create a post', async () => {
    const service = new CreatePostService();

    const expected = await service.execute({
      content: 'test',
      owner: '5ffb3c015abf9957f89509e8',
    });

    expect(expected).toHaveProperty('owner');
  });
});
