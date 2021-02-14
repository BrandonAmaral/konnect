import { Router } from 'express';

import create from '@modules/posts/infra/http/routes/create';
import timeline from '@modules/posts/infra/http/routes/timeline';
import like from '@modules/posts/infra/http/routes/like';
import dislike from '@modules/posts/infra/http/routes/dislike';
import deletePost from '@modules/posts/infra/http/routes/delete-post';

const routes = Router();

routes.use(create);
routes.use(timeline);
routes.use(like);
routes.use(dislike);
routes.use(deletePost);

export default routes;
