// friendshipController.js
import Friendship from '../../models/profileModels/friendshipModel/friendship';

export const createFriendship = async (req, res) => {
  try {
    const friendship = await Friendship.create(req.body);
    res.status(201).json(friendship);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFriendships = async (req, res) => {
  try {
    const friendships = await Friendship.find();
    res.status(200).json(friendships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
