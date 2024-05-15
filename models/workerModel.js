import mongoose from 'mongoose';

const workerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
		},
		password: {
			type: String,
		},

		address: {
			type: String,
		},
		phone: {
			type: String,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Worker', workerSchema);
