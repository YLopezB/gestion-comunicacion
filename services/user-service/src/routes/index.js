import { Router } from "express";
import requireAuth from "../middlewares/require-auth.js";
import isAdmin from "../middlewares/isAdmin.js";
import {
  createUserController,
  alluserController,
  userController,
  updateserController,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/create", requireAuth, isAdmin, createUserController);
userRouter.get("/all", requireAuth, alluserController);
userRouter.get("/user", requireAuth, userController);
userRouter.post("/update", requireAuth, updateserController);

export default userRouter;
