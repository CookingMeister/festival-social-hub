import Friendship from '../models/profileModels/friendshipModel/friendship';
import User from '../models/profileModels/userModel/user';
//import EmailService from '../services/emailService'; // Import your email service module

// Function to search for friends
export const searchFriends = async (req, res) => {
  try {
    const { keyword } = req.query;
    // Search for users based on keyword
    const users = await User.find({ name: { $regex: keyword, $options: 'i' } });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to add a friend
export const addFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.body;
    // Check if friendship already exists
    const existingFriendship = await Friendship.findOne({ user: userId, friend: friendId });
    if (existingFriendship) {
      return res.status(400).json({ error: 'Friendship already exists' });
    }
    // Create a new friendship
    const friendship = await Friendship.create({ user: userId, friend: friendId });
    res.status(201).json(friendship);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* Function to send email invite
export const sendInvite = async (req, res) => {
  try {
    const { email, message } = req.body;
    // Call your email service to send the invite
    await EmailService.sendInvite(email, message);
    res.status(200).json({ message: 'Invite sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};*/
