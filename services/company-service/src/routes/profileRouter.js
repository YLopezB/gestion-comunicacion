import { Router } from "express";
import { profileController } from "../controllers/profileController.js";

const profileRouter = Router();

profileRouter.get("/", profileController);

export default profileRouter;
