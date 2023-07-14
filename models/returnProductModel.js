import mongoose from 'mongoose';

const returnProductSchema = new mongoose.Schema(
  {
    billNumber: Number,
    bDate: String,
    rDate: String,
    clientId: String,
    clientName: String,
    returnProductId: String,
    products: {
      type: [
        {
          name: {
            type: String,
          },
          quantity: {
            type: Number,
          },
        },
      ],
    },
  },

  { timestamps: true }
);

export default mongoose.model('ReturnProduct', returnProductSchema);
