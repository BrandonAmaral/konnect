import mongoose, { Document, Schema, Model } from 'mongoose';

export type PostAttributes = {
  owner: mongoose.Schema.Types.ObjectId;
  content: string;
  slug: string;
  likes: string[];
};

export type PostDocument = Document & PostAttributes;

type PostModel = Model<PostDocument>;

const PostSchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
    collection: 'posts',
  },
);

export default mongoose.model<PostDocument, PostModel>('Post', PostSchema);
