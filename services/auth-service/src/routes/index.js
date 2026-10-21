import { Router } from "express";
import loginRouter from "./login.js";
import meRouter from "./me.js";
import logOutRouter from "./logout.js";

const router = Router();

const sessions = new Map();

router.use("/login", loginRouter);
router.use("/me", meRouter);
router.use("/logout", logOutRouter);

export default router;
