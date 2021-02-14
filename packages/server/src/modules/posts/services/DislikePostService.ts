import Post, { PostDocument } from '@modules/posts/infra/mongoose/schemas/Post';

interface Request {
  post_id: string;
  user_id: string;
}

class DislikePostService {
  public async execute({
    post_id,
    user_id,
  }: Request): Promise<PostDocument | null> {
    const dislike = await Post.findByIdAndUpdate(
      post_id,
      { $pull: { likes: user_id } },
      { useFindAndModify: false, new: true },
    );

    return dislike;
  }
}

export default DislikePostService;
