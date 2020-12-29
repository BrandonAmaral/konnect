import express from 'express';

import routes from '@common/infra/http/api/v1';
import { NotFoundError } from '@common/errors/NotFoundError';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(routes);

app.all('*', async (request, response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
