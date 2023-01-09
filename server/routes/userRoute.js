import { Router } from "express";
import ExpressRateLimit from "express-rate-limit";

import {
  signUp,
  logIn,
  getUsers,
  getNumeration,
  getUser,
} from "../controllers/userController.js";

const router = Router();

const limitedRequests = ExpressRateLimit({
  windowMs: 15 * 60 * 1000,
  max: Number(process.env.MAX_REQUEST),
  message: "Too many requests.Try again later",
});

//Get all user
router.get("/get-users", getUsers);

//Get User
router.post("/get-user", getUser);

//Get user numeration
router.post("/get-numeration", getNumeration);

//Sign up
router.post("/sign-up", limitedRequests, signUp);

//Log in
router.post("/log-in", limitedRequests, logIn);

export default router;
