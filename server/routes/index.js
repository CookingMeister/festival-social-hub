import express from 'express';
const router = express.Router();
import authRoutes from './api/authRoutes.js';

router.use('/api', authRoutes);

export default router;
