import News from '../models/mainModels/newsModel/news.js';

// GET all news
export const getNews = async (req, res) => {
  try {
    // You can fetch news from your database or any external API here
    // For now, let's assume we are fetching news from the database
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET news by ID
export const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
