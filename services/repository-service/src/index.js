import express from "express";
import indexRouter from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Repository service is running on port ${PORT}`);
});
