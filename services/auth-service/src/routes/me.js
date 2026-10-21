import { Router } from "express";
import requireAuth from "../middleware/require-auth.js";
import { meController } from "../controllers/me.js";

const meRouter = Router();

meRouter.get("/", requireAuth, meController);

export default meRouter;
