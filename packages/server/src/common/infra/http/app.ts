import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from '@common/infra/http/api/v1';
import { NotFoundError } from '@common/errors/NotFoundError';
import { errorHandler } from '@common/infra/http/middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.all('*', async (request, response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
