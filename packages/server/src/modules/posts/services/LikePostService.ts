import Post, { PostDocument } from '@modules/posts/infra/mongoose/schemas/Post';

interface Request {
  post_id: string;
  user_id: string;
}

class LikePostService {
  public async execute({
    post_id,
    user_id,
  }: Request): Promise<PostDocument | null> {
    const like = await Post.findByIdAndUpdate(
      post_id,
      { $push: { likes: user_id } },
      { useFindAndModify: false, new: true },
    );

    return like;
  }
}

export default LikePostService;
