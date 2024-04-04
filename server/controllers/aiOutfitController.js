// aiOutfitController.js
import AIOutfit from '../models/aiOutfit';

export const createAIOutfit = async (req, res) => {
  try {
    const aiOutfit = await AIOutfit.create(req.body);
    res.status(201).json(aiOutfit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAIOutfits = async (req, res) => {
  try {
    const aiOutfits = await AIOutfit.find();
    res.status(200).json(aiOutfits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
