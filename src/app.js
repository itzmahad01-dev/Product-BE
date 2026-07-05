import express from "express";
import cors from "cors";

import expenseRoutes from "./routes/expenseRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Expense Tracker API Running...");
});

app.use("/api", expenseRoutes);

export default app;