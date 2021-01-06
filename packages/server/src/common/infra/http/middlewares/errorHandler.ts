import { Request, Response, NextFunction } from 'express';
import { CustomError } from '@common/errors/CustomError';
import { TokenExpiredError } from '@common/errors/TokenExpiredError';

export const errorHandler = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (err instanceof TokenExpiredError) {
    return response
      .status(err.statusCode)
      .send({ code: err.code, error: err.message });
  }

  if (err instanceof CustomError) {
    return response.status(err.statusCode).send({ error: err.message });
  }

  response.status(500).send({ error: 'Internal server error' });
};
