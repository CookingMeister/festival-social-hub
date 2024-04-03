const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who made the post
  content: { type: String, required: true }, // Content of the post
  createdAt: { type: Date, default: Date.now }, // Date and time when the post was created
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Users who liked the post
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }] // Comments on the post
});

module.exports = mongoose.model('Post', postSchema);
