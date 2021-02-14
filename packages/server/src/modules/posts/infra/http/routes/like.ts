import { Router } from 'express';

import requireAuth from '@common/infra/http/middlewares/requireAuth';
import LikePostService from '@modules/posts/services/LikePostService';

const likeRouter = Router();

likeRouter.put('/like/:id', requireAuth, async (request, response) => {
  const service = new LikePostService();

  const like = await service.execute({
    post_id: request.params.id,
    user_id: request.user.id,
  });

  return response.status(200).send(like);
});

export default likeRouter;
