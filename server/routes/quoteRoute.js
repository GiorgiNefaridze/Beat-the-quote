import { Router } from "express";

import { getQuote } from "../controllers/quoteController.js";

const router = Router();

//Get all quotes
router.get("/getQuote", getQuote);

export default router;
