import User, { UserDocument } from '@modules/users/infra/mongoose/schemas/User';

interface Request {
  user_id: string;
  username: string;
  tag: string;
}

class ChangeUserInfoService {
  public async execute({
    user_id,
    username,
    tag,
  }: Request): Promise<UserDocument | null> {
    const change = await User.findByIdAndUpdate(
      user_id,
      {
        $set: { username: username, tag: tag },
      },
      { useFindAndModify: false, new: true },
    );

    return change;
  }
}

export default ChangeUserInfoService;
