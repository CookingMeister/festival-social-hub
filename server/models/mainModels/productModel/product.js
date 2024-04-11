import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: {
    size: [{ type: String, enum: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy'] }],
    style: { type: String, enum: ['crowns', 'clothes', 'costumes', 'accessories'] }
  },
  bestSeller: { 
    type: String, 
    enum: ['mermaid crowns', 'jeans jackets', 'flower crowns'], 
    default: null 
  },
  availability: { type: Boolean, default: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  stripePriceId: { type: String }, // Stripe Price ID
  stripeProductId: { type: String }, // Stripe Product ID
  stripeSkuId: { type: String }, // Optional: Stripe SKU ID
});

const Product = model('Product', productSchema);

export default Product;