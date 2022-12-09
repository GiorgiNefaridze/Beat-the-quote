import { Router } from "express";

import { signUp, logIn } from "../controllers/userController.js";

const router = Router();

//Sign up
router.post("/sign-up", signUp);

//Log in
router.post("/log-in", logIn);

export default router;
