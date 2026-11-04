import { Router } from "express";
import {
  createCargoController,
  allCargoController,
  updateCargoController
} from "../controllers/cargoController.js";

const cargosRouter = Router();

cargosRouter.post("/create", createCargoController);
cargosRouter.get("/all", allCargoController);
cargosRouter.put("/update", updateCargoController);

export default cargosRouter;
