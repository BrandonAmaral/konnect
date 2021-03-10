import { Router } from 'express';
import multer from 'multer';

import ChangeProfilePictureService from '@modules/users/services/ChangeProfilePictureService';
import uploadConfig from '@config/upload';
import requireAuth from '@common/infra/http/middlewares/requireAuth';

const changeInfoRouter = Router();
const upload = multer(uploadConfig);

changeInfoRouter.patch(
  '/picture',
  requireAuth,
  upload.single('profilePicture'),
  async (request, response) => {
    const changeInfo = new ChangeProfilePictureService();

    const change = await changeInfo.execute({
      user_id: request.user.id,
      profilePicture: request.file.filename,
    });

    return response.status(200).send(change);
  },
);

export default changeInfoRouter;
