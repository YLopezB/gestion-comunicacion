import { Router } from "express";
import { logOutController } from "../controllers/logOutController.js";

const logOutRouter = Router();

logOutRouter.post("/", logOutController);

export default logOutRouter;
