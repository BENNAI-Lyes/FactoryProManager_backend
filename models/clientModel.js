import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
    },
    profilePic: {
      type: String,
      default: '',
    },
    address: {
      type: String,
    },
    driver: {
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
    phone: {
      type: String,
    },
    credit: {
      type: Number,
      default: 0,
    },
    remise: {
      type: Number,
      default: 0,
    },
    activity: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Client', clientSchema);
