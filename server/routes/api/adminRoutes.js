import express from 'express';
import {
  generateToken,
  hashPassword,
  comparePassword,
  authMiddleware,
} from '../../utils/auth.js';
import { deleteUser, deleteProduct, updateProduct, createProduct } from '../../controllers/adminController.js';
import { updateUserProfile, createUserProfile } from '../../controllers/userController.js';

const router = express.Router();


// Admin Delete User Route
router.delete('/users/profile/:userId', authMiddleware, deleteUser);

// Admin Create User Profile
router.post('/users/profile', authMiddleware, createUserProfile);

// Admin Update user profile
router.put('/users/profile', authMiddleware, updateUserProfile);

// Admin Create Products Route
router.post('/products', authMiddleware, createProduct);

// Admin Update Products Route
router.put('/products/:id', authMiddleware, updateProduct);

// Admin Delete Products by ID Route
router.delete('/products/:id', authMiddleware, deleteProduct);

export default router;