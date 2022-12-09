import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, uniqe: true },
  password: { type: String, required: true },
  image: { type: String },
});

export default model("user", UserSchema);
