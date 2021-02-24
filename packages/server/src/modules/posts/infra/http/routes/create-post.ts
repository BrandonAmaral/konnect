import { Router } from 'express';

import requireAuth from '@common/infra/http/middlewares/requireAuth';
import CreatePostService from '@modules/posts/services/CreatePostService';

const createPostRouter = Router();

// Create Post
createPostRouter.post('/create', requireAuth, async (request, response) => {
  const { content } = request.body;

  const createPost = new CreatePostService();

  const post = await createPost.execute({
    owner: request.user.id,
    content,
  });

  return response.status(201).send(post);
});

export default createPostRouter;
