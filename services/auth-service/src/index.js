import express from "express";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(cookieParser());

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Auth Service is running on port ${PORT}`);
});
