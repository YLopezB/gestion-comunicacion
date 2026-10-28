import express from "express";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("corriendo");
});

try {
  app.listen(PORT, () => {
    console.log(`Company Service is running on port ${PORT}`);
  });
} catch (error) {
  console.error("Error al inicializar company service:", error);
  process.exit(1);
}
