import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: {
    size: { type: String, enum: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy'] },
    style: { type: String, enum: ['ravewear', 'hippywear', 'countrywear', 'headpieces', 'accessories'] }
  },
  bestSeller: { 
    type: String, 
    enum: ['mermaid crowns', 'jeans jackets', 'flower crowns'], 
    default: null 
  },
  availability: { type: Boolean, default: true },
  price: { type: Number, required: true },
  imageUrl: { type: String }
});

const Product = model('Product', productSchema);

export default Product;
