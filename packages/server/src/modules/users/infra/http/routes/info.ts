import { Router } from 'express';

import User from '@modules/users/infra/mongoose/schemas/User';

const userInfoRouter = Router();

// Get User Info
userInfoRouter.get('/info/:id', async (request, response) => {
  const user = await User.findById(request.params.id).populate([
    'following',
    'followers',
  ]);

  return response.status(200).send(user);
});

export default userInfoRouter;
