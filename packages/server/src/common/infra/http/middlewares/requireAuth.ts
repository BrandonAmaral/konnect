import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { NotAuthorizedError } from '@common/errors/NotAuthorizedError';
import { TokenExpiredError } from '@common/errors/TokenExpiredError';
import authConfig from '@config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  id: string;
}

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
    const decoded = verify(token, authConfig.jwt.secret);

    const { id } = decoded as TokenPayload;

    request.user = {
      id: id,
    };

    return next();
  } catch {
    throw new TokenExpiredError('Invalid JWT token');
  }
}
