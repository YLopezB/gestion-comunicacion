import { Router } from "express";
import profileRouter from "./profileRouter.js";
import cargosRouter from "./cargosRoutes.js";
import areaRouter from "./areasRoutes.js";
import asignacionRouter from "./asignacionRoutes.js";

const indexRouter = Router();

indexRouter.use("/profile", profileRouter);
indexRouter.use("/cargos", cargosRouter);
indexRouter.use("/areas", areaRouter);
indexRouter.use("/asignarCargo", asignacionRouter);

export default indexRouter;
