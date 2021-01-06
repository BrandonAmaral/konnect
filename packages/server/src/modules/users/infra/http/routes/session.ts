import { Router } from 'express';
import * as Yup from 'yup';

import User from '@modules/users/infra/mongoose/schemas/User';
import CreateUserService from '@modules/users/services/CreateUserService';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionRouter = Router();

// Create User
sessionRouter.post('/create', async (request, response) => {
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
    isAdmin: false,
  });

  return response.status(201).send(user);
});

// Authenticate User
sessionRouter.post('/auth', async (request, response) => {
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

// List All Users
sessionRouter.get('/list-all', async (request, response) => {
  const users = await User.find({});

  return response.status(200).send(users);
});

export default sessionRouter;
