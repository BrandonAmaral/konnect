import { Router } from 'express';
import * as Yup from 'yup';

import CreateUserService from '@modules/users/services/CreateUserService';

const createRouter = Router();

// Create User
createRouter.post('/create', async (request, response) => {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    username: Yup.string().required(),
    tag: Yup.string().required(),
    password: Yup.string().required(),
  });

  if (!(await schema.isValid(request.body))) {
    return response.status(400).json({ error: 'Validation failed' });
  }

  const { email, username, tag, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    email,
    username,
    tag,
    password,
  });

  return response.status(201).send(user);
});

export default createRouter;
