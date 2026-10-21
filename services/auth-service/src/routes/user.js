import { Router } from "express";
import requireAuth from "../middleware/require-auth.js";
import isAdmin from "../middleware/isAdmin.js"
import { createUserController, deleteUser } from "../controllers/userController.js";


const userRouter = Router();

userRouter.post("/", requireAuth, isAdmin, createUserController)
userRouter.delete("/", requireAuth, isAdmin, deleteUser)

export default userRouter