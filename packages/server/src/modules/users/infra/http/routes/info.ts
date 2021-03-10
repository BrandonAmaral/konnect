import { Router } from 'express';

import User from '@modules/users/infra/mongoose/schemas/User';

const infoRouter = Router();

// Get User Info
infoRouter.get('/info/:tag', async (request, response) => {
  const user = await User.findOne({ tag: request.params.tag }).populate([
    'following',
    'followers',
  ]);

  return response.status(200).send(user);
});

export default infoRouter;
