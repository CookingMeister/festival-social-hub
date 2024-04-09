import mongoose from 'mongoose';
import Product from '../models/mainModels/productModel/product.js';

async function seedProducts() {
    try {
      await Product.deleteMany(); // Clear existing products
      await Product.create([
        {
          name: 'Mermaid Crowns',
          description: 'Handcrafted crown adorned with shells and pearls',
          price: 100,
          category: { style: 'accessories' }
        },
        {
          name: 'Flower Crowns',
          description: 'Forever flower crown made with assorted blooms',
          price: 50,
          category: { style: 'accessories' }
        },
        {
          name: 'Kids Crowns',
          description: 'Assortment of playful crowns for children',
          price: 40,
          category: { style: 'accessories' }
        },
        {
          name: 'Pet Crowns',
          description: 'Adorable flower crowns for pets',
          price: 25,
          category: { style: 'accessories' }
        },
        {
          name: 'Jean Jackets',
          description: 'Upcycled denim beauties ready to wear anywhere',
          price: 100,
          category: { style: 'clothes' }
        },
        {
          name: 'Shorts',
          description: 'Upcycled Festival shorts where comfort meets fun',
          price: 50,
          category: { style: 'clothes' }
        },
        {
          name: 'Jeans',
          description: 'Upcycled works of wearable art for events',
          price: 75,
          category: { style: 'clothes' }
        },
        {
          name: 'Tops',
          description: 'Festival tops to build on any look',
          price: 50,
          category: { style: 'clothes' }
        },
        {
          name: 'Cosplay',
          description: 'Intricate costumes for cosplay enthusiasts',
          price: 225,
          category: { style: 'costumes' }
        },
        {
          name: 'Halloween',
          description: 'Detailed costumes for Halloween',
          price: 125,
          category: { style: 'costumes' }
        },
        {
          name: 'Ravewear',
          description: 'Edgy and bold outfits for festivals',
          price: 100,
          category: { style: 'costumes' }
        },
        {
          name: 'Hats',
          description: 'Weird and wonderful hats for festivals',
          price: 40,
          category: { style: 'accessories' }
        },
        {
          name: 'Gloves',
          description: 'Statement gloves meant to add the wow factor',
          price: 50,
          category: { style: 'accessories' }
        },
        {
          name: 'Masks',
          description: 'Various masks for any vibe',
          price: 50,
          category: { style: 'accessories' }
        },
        {
          name: 'Belts',
          description: 'Festival belts that add fashion & function',
          price: 65,
          category: { style: 'accessories' }
        },
      ]);
      console.log('Products seeded successfully');
    } catch (error) {
      console.error('Error seeding products:', error);
    } finally {
      mongoose.disconnect(); // Disconnect from MongoDB
    }
  }
  
  // Connect to MongoDB
  mongoose.connect('mongodb://localhost:27017/musicfestivalhub')
  .then(() => {
    console.log('Connected to MongoDB');
    // Call the function to seed products
    seedProducts();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  