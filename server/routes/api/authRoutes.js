import express from 'express';
import {
  generateToken,
  hashPassword,
  comparePassword,
  authMiddleware,
} from '../../utils/auth.js';
import User from '../../models/profileModels/userModel/user.js';
import Product from '../../models/mainModels/productModel/product.js';
import {
  registerUser,
  loginUser,
  updateUserProfile,
  createUserProfile,
  logoutUser,
  deleteUser,
  getAllUsers,
  getUserById,
} from '../../controllers/userController.js';
import {
  updateProduct,
  createProduct,
} from '../../controllers/adminController.js';
import { deleteProduct, getProducts } from '../../controllers/productController.js';

const router = express.Router();

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// User logout route
router.post('/logout', logoutUser);

// Get user by ID
router.get('/users', authMiddleware, getUserById);

// Get all users
router.get('/users/all', authMiddleware, getAllUsers);

// User profile routes
router
  .route('/users/profile')
    .put(authMiddleware, updateUserProfile)
    .post(authMiddleware, createUserProfile)
    .delete(authMiddleware, deleteUser);

// Product routes
router
  .route('/products')
    .get(authMiddleware, getProducts)
    .post(authMiddleware, createProduct);

// Product ID routes
router
  .route('/products/:id')
    .put(authMiddleware, updateProduct)
    .delete(authMiddleware, deleteProduct);

export default router;
