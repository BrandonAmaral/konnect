import { Router } from 'express';

import User from '@modules/users/infra/mongoose/schemas/User';
import Post from '@modules/posts/infra/mongoose/schemas/Post';
import requireAuth from '@common/infra/http/middlewares/requireAuth';

const listRouter = Router();

// Get Posts from User Timeline
listRouter.get('/timeline', requireAuth, async (request, response) => {
  const user = await User.findById(request.user.id);
  const posts = await Post.find({
    owner: { $in: [user?._id, user?.following] },
  })
    .populate('owner')
    .sort({ createdAt: 'descending' });

  return response.status(200).send(posts);
});

export default listRouter;
