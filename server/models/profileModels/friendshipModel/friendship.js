import mongoose from 'mongoose';

const { Schema } = mongoose;

const friendshipSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  friend: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Friendship = mongoose.model('Friendship', friendshipSchema);

export default Friendship;