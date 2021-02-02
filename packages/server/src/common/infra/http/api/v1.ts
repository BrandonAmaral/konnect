import { Router } from 'express';

import users from '@modules/users/infra/http/routes/index.routes';
import posts from '@modules/posts/infra/http/routes/index.routes';

const v1Router = Router();

v1Router.use('/api/users', users);
v1Router.use('/api/posts', posts);

export default v1Router;
