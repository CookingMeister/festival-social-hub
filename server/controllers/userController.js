import {
  generateToken,
  hashPassword,
  comparePassword,
  authMiddleware,
} from './../utils/auth.js';
import User from './../models/profileModels/userModel/user.js';

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
  }

  export {
    registerUser,
  };