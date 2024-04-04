import mongoose from 'mongoose';

const { Schema } = mongoose;

const tipSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true } // URL of the article or blog
});

const Tip = mongoose.model('Tip', tipSchema);

export default Tip;