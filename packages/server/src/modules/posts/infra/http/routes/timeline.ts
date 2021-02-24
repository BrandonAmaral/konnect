import { Router } from 'express';

import requireAuth from '@common/infra/http/middlewares/requireAuth';
import User from '@modules/users/infra/mongoose/schemas/User';
import Post from '@modules/posts/infra/mongoose/schemas/Post';

const listRouter = Router();

// Get Posts from User Timeline
listRouter.get('/timeline', requireAuth, async (request, response) => {
  const user = await User.findById(request.user.id);
  const search = [];

  search.push(user?._id);

  user?.following.map((follow) => {
    search.push(follow);
  });

  const posts = await Post.find({
    owner: { $in: search },
  })
    .populate('owner')
    .sort({ createdAt: 'descending' });

  return response.status(200).send(posts);
});

export default listRouter;
