const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  name: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  tracks: [{ type: String }] // Array of track IDs or URLs
});

module.exports = mongoose.model('Playlist', playlistSchema);
