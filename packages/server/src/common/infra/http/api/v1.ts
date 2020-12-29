import { Router } from 'express';

import users from '@modules/users/infra/http/routes/session';

const v1Router = Router();

v1Router.use('/api/users', users);

export default v1Router;
