const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  name: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  visibility: { type: String, enum: ['public', 'private'], default: 'public' },
  images: [{ type: Schema.Types.ObjectId, ref: 'Image' }]
});

module.exports = mongoose.model('Album', albumSchema);
