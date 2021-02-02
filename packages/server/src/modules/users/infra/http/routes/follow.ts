import { Router } from 'express';

import FollowUserService from '@modules/users/services/FollowUserService';
import requireAuth from '@common/infra/http/middlewares/requireAuth';

const followRouter = Router();

followRouter.put('/follow/:id', requireAuth, async (request, response) => {
  const followUser = new FollowUserService();

  const follow = await followUser.execute({
    user_id: request.user.id,
    target_user_id: request.params.id,
  });

  return response.status(200).send(follow);
});

export default followRouter;
