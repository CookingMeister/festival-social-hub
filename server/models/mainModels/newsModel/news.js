// news.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  source: { type: String },
  url: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  keywords: [{ type: String }],
});

module.exports = mongoose.model('News', newsSchema);
