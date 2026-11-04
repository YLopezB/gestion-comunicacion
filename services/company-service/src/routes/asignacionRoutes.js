import { Router } from "express";
import { createAsignController } from "../controllers/asignacionController.js";

const asignacionRouter = Router();

asignacionRouter.post("/create", createAsignController);

export default asignacionRouter;
