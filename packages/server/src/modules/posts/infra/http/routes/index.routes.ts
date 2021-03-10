import { Router } from 'express';

import createPost from '@modules/posts/infra/http/routes/create-post';
import timeline from '@modules/posts/infra/http/routes/timeline';
import like from '@modules/posts/infra/http/routes/like';
import dislike from '@modules/posts/infra/http/routes/dislike';
import deletePost from '@modules/posts/infra/http/routes/delete-post';
import info from '@modules/posts/infra/http/routes/info';
import search from '@modules/posts/infra/http/routes/search';

const routes = Router();

routes.use(createPost);
routes.use(timeline);
routes.use(like);
routes.use(dislike);
routes.use(deletePost);
routes.use(info);
routes.use(search);

export default routes;
