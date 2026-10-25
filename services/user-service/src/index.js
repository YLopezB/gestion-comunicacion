import express from "express";
import userRouter from "./routes/index.js";
import { initializeAdmin } from "./db/initialize-db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", userRouter);

async function startServer() {
  try {
    await initializeAdmin();

    app.listen(PORT, () => {
      console.log(`Users Service is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error al inicializar user Service:", error);
    process.exit(1);
  }
}

startServer();
