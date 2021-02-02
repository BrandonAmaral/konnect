import mongoose from 'mongoose';

import CreatePostService from '../CreatePostService';

describe('CreatePostService', () => {
  it('should be able to create a post', async () => {
    const service = new CreatePostService();

    const userId = mongoose.Types.ObjectId();

    const expected = await service.execute({
      content: 'test',
      owner: `${userId}`,
    });

    expect(expected).toHaveProperty('owner');
  });
});
