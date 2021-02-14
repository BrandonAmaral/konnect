import { Router } from 'express';

import requireAuth from '@common/infra/http/middlewares/requireAuth';
import DislikePostService from '@modules/posts/services/DislikePostService';

const dislikeRouter = Router();

dislikeRouter.put('/dislike/:id', requireAuth, async (request, response) => {
  const service = new DislikePostService();

  const dislike = await service.execute({
    post_id: request.params.id,
    user_id: request.user.id,
  });

  return response.status(200).send(dislike);
});

export default dislikeRouter;
