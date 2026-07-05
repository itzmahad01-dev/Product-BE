import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import expenseRoutes from "./src/routes/expenseRoutes.js";
import dns from "dns";

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", expenseRoutes);

app.get("/", (req, res) => {
  res.send("Expense Tracker API Running...");
});

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server Running on Port ${PORT}`);
// });
export default app