import { Router } from "express";
import requireAuth from "../middlewares/require-auth.js";
import isAdmin from "../middlewares/isAdmin.js";
import {
  createUserController,
  alluserController,
  userController,
  updateserController,
  restartUserCotroller
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/create", requireAuth, isAdmin, createUserController);
userRouter.get("/all", requireAuth, alluserController);
userRouter.get("/user", requireAuth, userController);
userRouter.post("/update", requireAuth, updateserController);
userRouter.post("/restart", requireAuth, isAdmin, restartUserCotroller)

export default userRouter;
