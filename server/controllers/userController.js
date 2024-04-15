import {
  generateToken,
  hashPassword,
  comparePassword,
} from './../utils/auth.js';
import User from './../models/profileModels/userModel/user.js';

//  Register User
const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Generate a token for the user
    const token = generateToken(savedUser._id);

    // Send the token and user details in the response
    res.status(201).json({ token, user: savedUser });
  } catch (error) {
    console.error('Registration failed', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    if (users.length === 0) {
      return res.status(404).json({ error: 'No users found' });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Get User By ID
const getUserById = async (req, res) => {
  try {
    const userId = req.userId;
    console.log('userId:', userId);
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log('User:', user);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
};

//  Update User Profile
const updateUserProfile = async (req, res) => {
  try {
    const { name, username, password, socials, aboutMe, topFestivals } =
      req.body;
    const userId = req.userId;
    console.log('userId:', userId);

    const updateFields = { name, socials, aboutMe, topFestivals };

    if (username) {
      updateFields.username = username;
    }

    if (password) {
      updateFields.password = await hashPassword(password);
    }

    // Find the user by ID and update the profile fields
    const user = await User.findByIdAndUpdate(userId, updateFields, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log('Updated User:', user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUserProfile = async (req, res) => {
  try {
    const { password, ...userData } = req.body;
    // Hash the password
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ ...userData, password: hashedPassword });
    const savedUser = await newUser.save();
    console.log('New User:', savedUser);
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username' });
    }
    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    // Generate a token for the user
    const token = generateToken(user._id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log('Deleted User:', user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logoutUser = (req, res) => {
  try {
    // Clear the token from the client-side local storage
    // No server-side logout logic is required since using JWT
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ error: 'Logout failed' });
  }
};

export {
  registerUser,
  getAllUsers,
  getUserById,
  loginUser,
  updateUserProfile,
  createUserProfile,
  deleteUser,
  logoutUser,
};
