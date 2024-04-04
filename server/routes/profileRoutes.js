import express from 'express';
import authMiddleware from '../utils/auth.js';
import { getUserProfile, updateUserProfile } from '../controllers/profileControllers/userController.js';

const router = express.Router();

// Get user profile
router.get('/profile', authMiddleware, getUserProfile);

// Update user profile
router.put('/profile', authMiddleware, updateUserProfile);

export default router;
