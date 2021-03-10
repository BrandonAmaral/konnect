import { Router } from 'express';

import Post from '@modules/posts/infra/mongoose/schemas/Post';

const searchRouter = Router();

searchRouter.get('/search/:post', async (request, response) => {
  const posts = await Post.find({
    content: { $regex: new RegExp(request.params.post + '*', 'i') },
  }).populate(['owner', 'likes']);

  return response.status(200).send(posts);
});

export default searchRouter;
