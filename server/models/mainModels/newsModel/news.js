import mongoose from 'mongoose';

const { Schema } = mongoose;

const newsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  source: { type: String },
  url: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  keywords: [{ type: String }]
});

const News = mongoose.model('News', newsSchema);

export default News;