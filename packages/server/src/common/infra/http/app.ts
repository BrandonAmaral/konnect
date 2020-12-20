import express from 'express';

import { NotFoundError } from '@common/errors/NotFoundError';
import { errorHandler } from '@common/infra/http/middlewares/errorHandler';

const app = express();

app.use(express.json());

app.all('*', async (request, response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
