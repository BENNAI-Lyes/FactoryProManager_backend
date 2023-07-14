import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
    },
    netProfit: {
      type: Number,
    },
    number: Number,
  },

  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
