import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  }, // Name of the user
  username: {
    type: String,
    required: true,
    unique: true,
  }, // Username of the user
  email: {
    type: String,
    required: true,
    unique: true,
  }, // Email of the user
  password: {
    type: String,
    required: true,
  }, // Password of the user
  socials: [
    {
      type: String,
    },
  ], // Social media links (e.g., Facebook, Twitter, etc.)
  aboutMe: {
    type: String,
  }, // About me section
  topFestivals: [
    {
      type: String,
    },
  ], // Top 3 festivals attended by the user
});

const User = mongoose.model('User', userSchema);

export default User;
