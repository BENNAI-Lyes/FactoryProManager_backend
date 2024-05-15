import mongoose from 'mongoose';

const bonSchema = new mongoose.Schema(
	{
		clientId: String,
		date: String,
		number: Number,
		remise: Number,
		total: Number,
		totalRemise: Number,
		transport: Number,
		newSold: Number,
		oldSold: Number,

		vers: {
			type: [
				{
					amount: {
						type: Number,
					},
					date: {
						type: String,
					},
					id: {
						type: String,
					},
				},
			],
		},
		products: {
			type: [
				{
					name: {
						type: String,
					},
					quantity: {
						type: Number,
					},
					remise: {
						type: Number,
					},
					priceRemisé: {
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
		productsReturned: {
			type: [
				{
					name: {
						type: String,
					},
					quantity: {
						type: Number,
					},
					date: {
						type: String,
					},
				},
			],
		},
	},

	{ timestamps: true }
);

export default mongoose.model('Bon', bonSchema);
