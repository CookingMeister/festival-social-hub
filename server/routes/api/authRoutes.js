import express from 'express';
import {
  generateToken,
  hashPassword,
  comparePassword,
  authMiddleware,
} from '../../utils/auth.js';
import User from '../../models/profileModels/userModel/user.js';
import Product from '../../models/mainModels/productModel/product.js';

const router = express.Router();

// User registration route
router.post('/register', async (req, res) => {
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
});

// User login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const isPasswordValid = await comparePassword(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    // Generate a token for the user
    const token = generateToken(user._id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// User logout route
router.post('/logout', (req, res) => {
  try {
    // Clear the token from the client-side local storage
    // No server-side logout logic is required since using JWT
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ error: 'Logout failed' });
  }
});

// Protected routes
router.get('/users', authMiddleware, async (req, res) => {
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
});

export const updateUserProfile = async (req, res) => {
  try {
    const { name, socials, aboutMe, topFestivals } = req.body;
    const userId = req.userId;
    console.log('userId:', userId);

    // Find the user by ID and update the profile fields
    const user = await User.findByIdAndUpdate(
      userId,
      { name, socials, aboutMe, topFestivals },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log('Updated User:', user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Update user profile
router.put('/users/profile', authMiddleware, updateUserProfile);

// GET products
router.get('/products', authMiddleware, async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({ error: 'No products found' });
    }
    // console.log('Products:', products);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

//  PUT products
router.put('/products/:id', authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    console.log('id:', id);
    const { name, description, price, category} = req.body;
    const product = await Product.findByIdAndUpdate(
      id,
      { name, description, price, category },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    console.log('Updated Product:', product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});

// DELETE products
router.delete('/products/:id', authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    console.log('Deleted Product:', product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/users/profile', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    console.log('userId:', userId);
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log('Deleted User:', user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
