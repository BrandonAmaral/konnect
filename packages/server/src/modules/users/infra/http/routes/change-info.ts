import { Router } from 'express';

import ChangeUserInfoService from '@modules/users/services/ChangeUserInfoService';
import requireAuth from '@common/infra/http/middlewares/requireAuth';

const changeInfoRouter = Router();

changeInfoRouter.patch('/change', requireAuth, async (request, response) => {
  const { username, tag } = request.body;

  const changeInfo = new ChangeUserInfoService();

  const change = await changeInfo.execute({
    user_id: request.user.id,
    username,
    tag,
  });

  return response.status(200).send(change);
});

export default changeInfoRouter;
