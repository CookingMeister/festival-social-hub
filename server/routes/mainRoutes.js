import express from 'express';
import authMiddleware from '../utils/auth.js';
import { getNews, getProducts } from '../controllers/mainControllers/mainController.js';

const router = express.Router();

// Get news
router.get('/news', authMiddleware, getNews);

// Get products
router.get('/products', authMiddleware, getProducts);

export default router;
