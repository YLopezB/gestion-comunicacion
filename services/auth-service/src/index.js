import express from "express";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.js";
import { initializeAdmin } from "./db/initialize-db.js";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(cookieParser());

app.use("/", indexRouter);

async function startServer() {
  try {
    await initializeAdmin();

    app.listen(PORT, () => {
      console.log(`Auth Service is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error al inicializar Auth Service:", error);
    process.exit(1);
  }
}

startServer();
