import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { NotAuthorizedError } from '@common/errors/NotAuthorizedError';
import { TokenExpiredError } from '@common/errors/TokenExpiredError';
import authConfig from '@config/auth';

export default function requireAuth(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new NotAuthorizedError('Missing JWT token');
  }

  const [, token] = authHeader.split(' ');

  try {
    verify(token, authConfig.jwt.secret);

    return next();
  } catch {
    throw new TokenExpiredError('Invalid JWT token');
  }
}
