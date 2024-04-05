import AIOutfit from '../models/designModels/aiOutfitModel/aiOutfit.js';

// GET all AI outfits
export const getAIOutfits = async (req, res) => {
  try {
    const aiOutfits = await AIOutfit.find();
    res.status(200).json(aiOutfits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET AI outfit by ID
export const getAIOutfitById = async (req, res) => {
  try {
    const aiOutfit = await AIOutfit.findById(req.params.id);
    if (!aiOutfit) {
      return res.status(404).json({ message: 'AI outfit not found' });
    }
    res.status(200).json(aiOutfit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST new AI outfit
export const createAIOutfit = async (req, res) => {
  try {
    const aiOutfit = await AIOutfit.create(req.body);
    res.status(201).json(aiOutfit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE AI outfit by ID
export const deleteAIOutfitById = async (req, res) => {
  try {
    const aiOutfit = await AIOutfit.findByIdAndDelete(req.params.id);
    if (!aiOutfit) {
      return res.status(404).json({ message: 'AI outfit not found' });
    }
    res.status(200).json({ message: 'AI outfit deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
