// tipsController.js
import Tip from '../models/tips';

export const createTip = async (req, res) => {
  try {
    const tip = await Tip.create(req.body);
    res.status(201).json(tip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTips = async (req, res) => {
  try {
    const tips = await Tip.find();
    res.status(200).json(tips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
