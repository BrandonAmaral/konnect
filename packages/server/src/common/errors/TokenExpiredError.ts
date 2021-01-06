import { CustomError } from '@common/errors/CustomError';

export class TokenExpiredError extends CustomError {
  statusCode = 501;
  code = 'token.expired';

  constructor(message = 'Token Expired') {
    super(message);

    Object.setPrototypeOf(this, TokenExpiredError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
