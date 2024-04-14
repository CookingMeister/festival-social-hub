import express from 'express';
const router = express.Router();
import authRoutes from './api/authRoutes.js';
import adminRoutes from './api/adminRoutes.js';

router.use('/api', authRoutes);
router.use('/api/admin', adminRoutes);

export default router;
