import { Router } from 'express';

import Post from '@modules/posts/infra/mongoose/schemas/Post';
import User from '@modules/users/infra/mongoose/schemas/User';

const infoRouter = Router();

infoRouter.get('/info/:user/:post', async (request, response) => {
  const user = await User.findOne({ tag: request.params.user }).populate([
    'followers',
    'following',
  ]);
  const post = await Post.findOne({ slug: request.params.post }).populate([
    'owner',
    'likes',
  ]);

  return response.status(200).send({ user, post });
});

export default infoRouter;
