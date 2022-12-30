import { Router } from "express";

import { signUp, logIn, getUsers, getNumeration } from "../controllers/userController.js";

const router = Router();

//Get all user
router.get("/get-users", getUsers);

//Get user numeration
router.post("/get-numeration", getNumeration)

//Sign up
router.post("/sign-up", signUp);

//Log in
router.post("/log-in", logIn);

export default router;
