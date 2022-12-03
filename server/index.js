import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import QuoteRoutes from "./routes/quoteRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Database connected successfully"))
  .catch(() => console.log("Database connection failed"));

const app = express();

const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.use("/api/quote", QuoteRoutes);

app.listen(port, () => console.log("Server listening on port " + port));
