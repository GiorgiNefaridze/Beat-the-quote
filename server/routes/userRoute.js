import { Router } from "express";

import { signUp, logIn, getUsers } from "../controllers/userController.js";

const router = Router();

//Get all user
router.get("/get-users", getUsers);

//Sign up
router.post("/sign-up", signUp);

//Log in
router.post("/log-in", logIn);

export default router;
