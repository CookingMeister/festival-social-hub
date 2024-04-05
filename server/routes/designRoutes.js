import express from 'express';
import authMiddleware from '../utils/auth.js';
import { getAiOutfits, createAiOutfit } from '../controllers/designControllers/designController.js';
import { getPaintings, createPainting } from '../controllers/designControllers/paintController.js';

const router = express.Router();

// Get AI outfits
router.get('/ai-outfits', authMiddleware, getAiOutfits);

// Create AI outfit
router.post('/ai-outfits', authMiddleware, createAiOutfit);

// Get paintings
router.get('/paintings', authMiddleware, getPaintings);

// Create painting
router.post('/paintings', authMiddleware, createPainting);

export default router;
