import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("corriendo");
});

app.listen(PORT, () => {
  console.log(`Company Service is running on port ${PORT}`);
});
