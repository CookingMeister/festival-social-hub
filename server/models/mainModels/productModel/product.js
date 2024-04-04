import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: {
    size: { type: String, enum: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy'] },
    style: { type: String, enum: ['ravewear', 'hippywear', 'countrywear', 'headpieces', 'accessories'] },
    bestSeller: { type: Boolean, default: false }
  },
  availability: { type: Boolean, default: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
});

export default model('Product', productSchema);