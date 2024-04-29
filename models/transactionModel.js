import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
	{
		billNumber: Number,
		clientId: String,
		date: String,
		vers: Number,
		billAmount: String,
		credit: Number,
	},

	{ timestamps: true }
);

export default mongoose.model('Transaction', transactionSchema);
