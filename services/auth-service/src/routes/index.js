import { Router } from "express";
import loginRouter from "./login.js";
import meRouter from "./me.js";
import logOutRouter from "./logout.js";
import userRouter from "./user.js";
import adminRouter from "./admin.js";

const router = Router();

router.use("/login", loginRouter);
router.use("/me", meRouter);
router.use("/logout", logOutRouter);
router.use("/user", userRouter);
router.use("/admin", adminRouter);

export default router;
