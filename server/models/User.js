import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  userName: { type: String, required: true, uniqe: true, maxLength: 15 },
  email: { type: String, required: true, uniqe: true },
  password: { type: String, required: true },
  image: { type: String },
  score: { type: Number, default: 0 },
  quotes: {
    type: [
      {
        _id: String,
        text: String,
        author: String | null,
        difficult: String,
        point: Number,
      },
    ],
    default: [],
  },
});

export default model("user", UserSchema);
