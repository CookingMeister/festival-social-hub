// import {
//     generateToken,
//     hashPassword,
//     comparePassword,
//   } from '../../utils/auth.js';
  import User from './../models/profileModels/userModel/user.js';
  import Product from './../models/mainModels/productModel/product.js';

  const deleteUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      console.log('Deleted User:', user);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
const createProduct = async (req, res) => {
    try {
      const { name, description, price, category, availability, imageUrl } =
        req.body;
      const product = new Product({
        name,
        description,
        price,
        category,
        availability,
        imageUrl,
      });
      const savedProduct = await product.save();
      console.log('New Product:', savedProduct);
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

const updateProduct = async (req, res) => {
    try {
      const id = req.params.id;
      const { name, description, price, category, availability, imageUrl } =
        req.body;
      const product = await Product.findByIdAndUpdate(
        id,
        { name, description, price, category, availability, imageUrl },
        { new: true }
      );
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      console.log('Updated Product:', product);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const deleteProduct = async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      console.log('Deleted Product:', product);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  export { deleteUser, deleteProduct, updateProduct, createProduct }