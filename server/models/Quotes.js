import { Schema, model } from "mongoose";

const QuoteSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String | null },
  difficulty: { type: String },
  score: { type: Number },
});

export default model("quotes", QuoteSchema);
