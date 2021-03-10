import { Router } from 'express';

import User from '@modules/users/infra/mongoose/schemas/User';

const searchRouter = Router();

searchRouter.get('/search/:user', async (request, response) => {
  const usernames = await User.find({
    username: { $regex: new RegExp('^' + request.params.user + '$', 'i') },
  }).populate(['followers', 'following']);

  return response.status(200).send(usernames);
});

export default searchRouter;
