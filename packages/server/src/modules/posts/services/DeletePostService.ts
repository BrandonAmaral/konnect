import Post from '@modules/posts/infra/mongoose/schemas/Post';

interface Request {
  post_id: string;
  user_id: string;
}

class DeletePostService {
  public async execute({ post_id, user_id }: Request): Promise<string> {
    const post = await Post.findById(post_id);

    if (String(post?.owner) === user_id) {
      await Post.findByIdAndDelete(post_id);

      return 'OK';
    }

    return 'ERROR';
  }
}

export default DeletePostService;
