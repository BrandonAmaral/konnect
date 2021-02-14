import { Router } from 'express';

import UnfollowUserService from '@modules/users/services/UnfollowUserService';
import requireAuth from '@common/infra/http/middlewares/requireAuth';

const unfollowRouter = Router();

unfollowRouter.put('/unfollow/:id', requireAuth, async (request, response) => {
  const unfollowUser = new UnfollowUserService();

  const unfollow = await unfollowUser.execute({
    user_id: request.user.id,
    target_user_id: request.params.id,
  });

  return response.status(200).send({ unfollow });
});

export default unfollowRouter;
