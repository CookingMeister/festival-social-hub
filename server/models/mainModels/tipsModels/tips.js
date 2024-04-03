// tips.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true }, // URL of the article or blog
});

module.exports = mongoose.model('Tip', tipSchema);
