import mongoose from 'mongoose';

const { Schema } = mongoose;

const aiOutfitSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  image: { type: String, required: true }, // URL of the rendered outfit image
  description: { type: String }, // Further description provided by the user
  visibility: { type: String, enum: ['public', 'private'], default: 'public' },
});

const AIOutfit = mongoose.model('AIOutfit', aiOutfitSchema);

export default AIOutfit;
