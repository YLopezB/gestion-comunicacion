import { Router } from "express";
import requireAuth from "../middleware/require-auth.js";
import isAdmin from "../middleware/isAdmin.js";
import { isAdmincontroller } from "../controllers/adminController.js";

const adminRouter = Router();

adminRouter.get("/", requireAuth, isAdmin, isAdmincontroller);

export default adminRouter;
