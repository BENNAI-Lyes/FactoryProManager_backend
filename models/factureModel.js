import mongoose from 'mongoose';

const factureSchema = new mongoose.Schema(
	{
		clientId: String,
		number: Number,
		date: String,
		totalPriceWords: String,
		totalPrice: Number,
		products: {
			type: [
				{
					name: {
						type: String,
					},
					quantity: {
						type: Number,
					},
					price: {
						type: Number,
					},
					total: {
						type: Number,
					},
				},
			],
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Facture', factureSchema);
