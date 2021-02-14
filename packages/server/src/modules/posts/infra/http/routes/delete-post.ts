import { Router } from 'express';

import requireAuth from '@common/infra/http/middlewares/requireAuth';
import DeletePostService from '@modules/posts/services/DeletePostService';
import { BadRequestError } from '@common/errors/BadRequestError';

const deletePostRouter = Router();

deletePostRouter.delete(
  '/delete-post/:id',
  requireAuth,
  async (request, response) => {
    const service = new DeletePostService();

    const post = await service.execute({
      post_id: request.params.id,
      user_id: request.user.id,
    });

    if (post === 'ERROR') {
      throw new BadRequestError('Current user is not the owner of this post');
    }

    return response.status(200).send({ post });
  },
);

export default deletePostRouter;
