import { Router } from "express";
import requireAuth from "../middleware/require-auth.js";
import isAdmin from "../middleware/isAdmin.js";
import {
  createUserController,
  updateUserController,
  allUsersController,
  activeUserController,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/create", requireAuth, isAdmin, createUserController);
userRouter.post("/update", requireAuth, updateUserController);
userRouter.post("/restart", requireAuth, isAdmin, updateUserController);
userRouter.get("/all", requireAuth, isAdmin, allUsersController);
userRouter.post("/active", requireAuth, isAdmin, activeUserController);

export default userRouter;
