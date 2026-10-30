import { Router } from "express";
import profileRouter  from "./profileRouter.js";

const indexRouter = Router();

indexRouter.use("/profile", profileRouter);

export default indexRouter;
