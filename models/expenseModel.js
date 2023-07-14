import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
  },

  { timestamps: true }
);

export default mongoose.model("Expense", expenseSchema);
