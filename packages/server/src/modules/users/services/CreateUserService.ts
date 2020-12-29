import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User, { UserDocument } from '@modules/users/infra/mongoose/schemas/User';
import { BadRequestError } from '@common/errors/BadRequestError';
import authConfig from '@config/auth';

interface Request {
  email: string;
  username: string;
  tag: string;
  password: string;
  isAdmin: boolean;
}

interface Response {
  user: UserDocument;
  token: string;
}

class CreateUserService {
  public async execute({
    email,
    username,
    tag,
    password,
    isAdmin,
  }: Request): Promise<Response> {
    const checkEmail = await User.findOne({
      email,
    });

    if (checkEmail) {
      throw new BadRequestError('Email already in use');
    }

    const checkTag = await User.findOne({
      tag,
    });

    if (checkTag) {
      throw new BadRequestError('Tag already in use');
    }

    const hashedPassword = await hash(password, 8);

    const user = await User.create({
      email,
      username,
      tag,
      password: hashedPassword,
      isAdmin,
    });

    const token = sign({ id: user.id }, authConfig.jwt.secret, {
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default CreateUserService;
