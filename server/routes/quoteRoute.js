import { Router } from "express";

import { getQuote, saveQuote } from "../controllers/quoteController.js";

const router = Router();

//Get all quotes
router.post("/getQuote", getQuote);

//Save quote in users profile
router.post("/saveQuote", saveQuote);

export default router;
