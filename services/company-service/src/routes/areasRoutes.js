import { Router } from "express";
import {
  createAreaController,
  allAreasController,
  updateAreaController,
} from "../controllers/areaController.js";

const areaRouter = Router();

areaRouter.post("/create", createAreaController);
areaRouter.get("/all", allAreasController);
areaRouter.put("/update", updateAreaController);

export default areaRouter;
