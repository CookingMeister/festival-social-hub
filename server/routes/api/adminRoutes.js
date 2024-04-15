import express from 'express';
import {
  generateToken,
  hashPassword,
  comparePassword,
  authMiddleware,
} from '../../utils/auth.js';
import {
  deleteUser,
  deleteProduct,
  updateProduct,
  createProduct,
} from '../../controllers/adminController.js';
import {
  updateUserProfile,
  createUserProfile,
} from '../../controllers/userController.js';

const router = express.Router();

// Admin Create and Update User Routes
router
  .route('/users/profile')
    .post(authMiddleware, createUserProfile)
    .put(authMiddleware, updateUserProfile);

// Admin Delete User Route
router.delete('/users/profile/:userId', authMiddleware, deleteUser);

// Admin Create Products Route
router.post('/products', authMiddleware, createProduct);

// Admin Update and Delete Products Route
router
  .route('/products/:id')
    .put(authMiddleware, updateProduct)
    .delete(authMiddleware, deleteProduct);

export default router;
