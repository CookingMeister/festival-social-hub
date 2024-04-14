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

// Admin Delete User Route
router.delete('/users/profile/:userId', authMiddleware, async (req, res) => {
  try {
    const { userId } = req.params;
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

// Admin Delete Products by ID Route
router.delete('/products/:id', authMiddleware, async (req, res) => {
    console.log("admin delete product called");
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

export default router;
