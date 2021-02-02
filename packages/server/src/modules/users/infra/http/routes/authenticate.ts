import { Router } from 'express';
import * as Yup from 'yup';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const authenticateRouter = Router();

// Authenticate User
authenticateRouter.post('/auth', async (request, response) => {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  if (!(await schema.isValid(request.body))) {
    return response.status(400).json({ error: 'Validation failed' });
  }

  const { email, password } = request.body;

  const authUser = new AuthenticateUserService();

  const user = await authUser.execute({
    email,
    password,
  });

  return response.status(200).send(user);
});

export default authenticateRouter;
