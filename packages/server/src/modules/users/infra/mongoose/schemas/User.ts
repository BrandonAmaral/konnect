import mongoose, { Document, Schema, Model } from 'mongoose';

export type UserAttributes = {
  email: string;
  username: string;
  tag: string;
  password: string;
  profilePicture: string;
  followers: string[];
  following: string[];
  isAdmin: boolean;
};

export type UserDocument = Document & UserAttributes;

type UserModel = Model<UserDocument>;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: true,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    ],
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: 'users',
  },
);

export default mongoose.model<UserDocument, UserModel>('User', UserSchema);
