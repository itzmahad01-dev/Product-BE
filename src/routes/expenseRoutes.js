import express from "express";

import {
  addExpense,
  getExpenses,
  deleteExpense,
} from "../controllers/expenseController.js";

const router = express.Router();

router.post("/expense", addExpense);

router.get("/expense", getExpenses);

router.delete("/expense/:id", deleteExpense);

export default router;