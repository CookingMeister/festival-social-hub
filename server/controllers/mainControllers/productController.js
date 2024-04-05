// productController.js

import Product from '../models/productModel';

export const createProduct = async (req, res) => {
  try {
    const { name, description, category, availability, price, imageUrl, bestSeller } = req.body;
    const product = await Product.create({
      name,
      description,
      category,
      availability,
      price,
      imageUrl,
      bestSeller
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalCount = await Product.countDocuments();
    const products = await Product.find().skip(skip).limit(limit);

    res.status(200).json({
      products,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      totalProducts: totalCount
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
