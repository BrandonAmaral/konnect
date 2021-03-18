import fs from 'fs';
import path from 'path';

import User, { UserDocument } from '@modules/users/infra/mongoose/schemas/User';
import uploadConfig from '@config/upload';

interface Request {
  user_id: string;
  profilePicture: string;
}

class ChangeProfilePictureService {
  public async execute({
    user_id,
    profilePicture,
  }: Request): Promise<UserDocument | null> {
    const user = await User.findById(user_id);

    if (user?.profilePicture !== 'default.png' || '') {
      const userPicturePath = path.join(
        uploadConfig.directory,
        user?.profilePicture!,
      );
      const userPictureExists = await fs.promises.stat(userPicturePath);

      if (userPictureExists) {
        await fs.promises.unlink(userPicturePath);
      }
    }

    const change = await User.findByIdAndUpdate(
      user_id,
      {
        $set: { profilePicture: profilePicture },
      },
      { useFindAndModify: false, new: true },
    );

    return change;
  }
}

export default ChangeProfilePictureService;
