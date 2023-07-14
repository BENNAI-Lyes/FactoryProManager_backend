import mongoose from 'mongoose';

const factureSchema = new mongoose.Schema(
  {
    number: Number,
    date: String,
    credit: Number,
    clientName: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    chouffeure: {
      type: String,
    },
    nif: {
      type: String,
    },
    rc: {
      type: String,
    },
    na: {
      type: String,
    },
    totalString: {
      type: String,
    },
    factureN: {
      type: String,
    },
    total: {
      type: Number,
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
