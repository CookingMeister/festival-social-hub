import mongoose from 'mongoose';

const { Schema } = mongoose;

const playlistSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  tracks: [{ type: String }]
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;