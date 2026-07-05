import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    day: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export  const Expense = mongoose.model("Expense", expenseSchema);

