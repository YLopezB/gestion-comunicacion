import express from "express";
import indexRouter from "./routes/index.js";
import { initialize } from "./db/initialize-db.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/", indexRouter);

async function startServer() {
  try {
    await initialize();
    app.listen(PORT, () => {
      console.log(`Company Service is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error al inicializar company service:", error);
    process.exit(1);
  }
}

startServer();
