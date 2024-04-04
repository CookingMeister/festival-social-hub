// paintController.js
import PaintJSAI from '../models/paint';

export const createPaintJSAI = async (req, res) => {
  try {
    const paintJSAI = await PaintJSAI.create(req.body);
    res.status(201).json(paintJSAI);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPaintJSAIs = async (req, res) => {
  try {
    const paintJSAIs = await PaintJSAI.find();
    res.status(200).json(paintJSAIs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
