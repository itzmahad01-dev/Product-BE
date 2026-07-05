import express from "express";
import cors from "cors";

import expenseRoutes from "./routes/expenseRoutes.js";

const app = express();

app.use(cors({
  origin: [
    "https://product-fe-seven.vercel.app/",
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "http://localhost:5176"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Expense Tracker API Running...");
});


app.use("/api", expenseRoutes);

export default app;