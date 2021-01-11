import mongoose from 'mongoose';
import { randomBytes } from 'crypto';

import Post, { PostDocument } from '@modules/posts/infra/mongoose/schemas/Post';

interface Request {
  owner: string | mongoose.Schema.Types.ObjectId;
  content: string;
}

class CreatePostService {
  public async execute({ owner, content }: Request): Promise<PostDocument> {
    const contentHash = await randomBytes(12).toString('hex');

    const post = await Post.create({
      owner,
      content,
      content_slug: contentHash,
    });

    return post;
  }
}

export default CreatePostService;
