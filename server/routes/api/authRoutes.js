import express from 'express';
import {
  generateToken,
  hashPassword,
  comparePassword,
  authMiddleware,
} from '../../utils/auth.js';
import User from '../../models/profileModels/userModel/user.js';
import Product from '../../models/mainModels/productModel/product.js';
import { registerUser, loginUser, updateUserProfile, createUserProfile, logoutUser } from '../../controllers/userController.js';
import { updateProduct, createProduct } from '../../controllers/adminController.js';

const router = express.Router();

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// User logout route
router.post('/logout', logoutUser);

// Get user by ID
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

// Get all users
router.get('/users/all', authMiddleware, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    if (users.length === 0) {
      return res.status(404).json({ error: 'No users found' });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Update user profile
router.put('/users/profile', authMiddleware, updateUserProfile);

// Create User Profile
router.post('/users/profile', authMiddleware, createUserProfile);

// Delete User Profile
router.delete('/users/profile/:id', authMiddleware, async (req, res) => {
  try {
    const userId = req.params.id;
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

//  Update products
router.put('/products/:id', authMiddleware, updateProduct);

// POST products
router.post('/products', authMiddleware, createProduct);

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

// DELETE user profile
router.delete('/users/profile', authMiddleware, async (req, res) => {
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
});

export default router;
