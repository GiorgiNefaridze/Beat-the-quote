import { Router } from "express";

import { getQuote } from "../controllers/quoteController.js";

const router = Router();

//Get all quotes
router.post("/getQuote", getQuote);

export default router;
