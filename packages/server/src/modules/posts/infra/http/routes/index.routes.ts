import { Router } from 'express';

import create from '@modules/posts/infra/http/routes/create';

const routes = Router();

routes.use(create);

export default routes;
