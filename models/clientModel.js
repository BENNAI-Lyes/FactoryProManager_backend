import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			unique: true,
		},
		credit: {
			type: Number,
			default: 0,
		},
		remise: {
			type: Number,
			default: 0,
		},
		email: String,
		address: String,
		driver: String,
		nif: String,
		rc: String,
		na: String,
		phone: String,
		activity: String,
	},
	{ timestamps: true }
);

export default mongoose.model('Client', clientSchema);
