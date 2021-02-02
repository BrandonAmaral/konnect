import User from '@modules/users/infra/mongoose/schemas/User';

interface Request {
  user_id: string;
  target_user_id: string;
}

class FollowUserService {
  public async execute({ user_id, target_user_id }: Request): Promise<string> {
    await User.findByIdAndUpdate(
      target_user_id,
      {
        $push: { followers: user_id },
      },
      { useFindAndModify: false },
    );
    await User.findByIdAndUpdate(
      user_id,
      {
        $push: { following: target_user_id },
      },
      { useFindAndModify: false },
    );

    return 'OK';
  }
}

export default FollowUserService;
