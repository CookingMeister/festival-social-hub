import PaintJSAI from "../models/designModels/paintModel/paint.js";
import generateAIOutfit from "../utils/aiGeneration.js"; // Assuming you have a utility function to generate AI outfits

// POST new painting and generate AI outfit
export const createPainting = async (req, res) => {
  try {
    const { originalImage } = req.body;
    // generateAIOutfit is a function that generates AI outfit based on original image
    const generatedImage = await generateAIOutfit(originalImage);
    const painting = await PaintJSAI.create({ originalImage, generatedImage });
    res.status(201).json(painting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
