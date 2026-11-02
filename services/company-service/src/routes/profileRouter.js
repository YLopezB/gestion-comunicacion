import { Router } from "express";
import {
  profileController,
  updateProfileController,
} from "../controllers/profileController.js";

const profileRouter = Router();

profileRouter.get("/", profileController);
profileRouter.put("/", updateProfileController);

export default profileRouter;
