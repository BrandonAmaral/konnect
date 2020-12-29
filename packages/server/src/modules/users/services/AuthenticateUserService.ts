import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User, { UserDocument } from '@modules/users/infra/mongoose/schemas/User';
import { BadRequestError } from '@common/errors/BadRequestError';
import authConfig from '@config/auth';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: UserDocument;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const user = await User.findOne({
      email,
    });

    if (!user) {
      throw new BadRequestError('Incorrect credentials');
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) {
      throw new BadRequestError('Incorrect credentials');
    }

    const token = sign({ id: user.id }, authConfig.jwt.secret, {
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
