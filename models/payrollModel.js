import mongoose from "mongoose";

const payrollSchema = new mongoose.Schema(
  {
    workerId: String,
    date: String,
    workerName: String,
    desc: String,
    total: Number,
    payment: Number,
    credit: Number,
  },

  { timestamps: true }
);

export default mongoose.model("Payroll", payrollSchema);
