import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    billNumber: Number,
    billId: String,
    id: String,
    clientId: String,
    clientName: String,
    billAmount: String,
    date: String,
    vers: Number,
    credit: Number,
  },

  { timestamps: true }
);

export default mongoose.model('Transaction', transactionSchema);
