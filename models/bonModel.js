import mongoose from 'mongoose';

const bonSchema = new mongoose.Schema(
  {
    number: Number,
    date: String,
    clientId: {
      type: String,
    },
    clientName: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    remise: { type: Number },
    total: { type: Number },
    totalRemise: { type: Number },
    credit: { type: Number },
    oldCredit: { type: Number },
    transport: { type: Number },
    driver: { type: String },
    returnProductId: { type: String },

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
        },
      ],
    },
  },

  { timestamps: true }
);

export default mongoose.model('Bon', bonSchema);
