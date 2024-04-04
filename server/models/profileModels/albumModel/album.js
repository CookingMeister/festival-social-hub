import mongoose from 'mongoose';

const { Schema } = mongoose;

const albumSchema = new Schema({
  name: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  visibility: { type: String, enum: ['public', 'private'], default: 'public' },
  images: [{ type: Schema.Types.ObjectId, ref: 'Image' }]
});

const Album = mongoose.model('Album', albumSchema);

export default Album;