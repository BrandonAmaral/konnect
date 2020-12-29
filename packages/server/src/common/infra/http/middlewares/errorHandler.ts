import { Request, Response, NextFunction } from 'express';
import { CustomError } from '@common/errors/CustomError';

export const errorHandler = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    return response.status(err.statusCode).send({ error: err.message });
  }

  response.status(500).send({ error: 'Internal server error' });
};
