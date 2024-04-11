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
          imageUrl: 'mermaidcrown.jpg',
          category: { 
            style: 'accessories',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Flower Crowns',
          description: 'Forever flower crown made with assorted blooms',
          price: 50,
          imageUrl: 'flowercrown.jpg',
          category: { 
            style: 'accessories',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Kids Crowns',
          description: 'Assortment of playful crowns for children',
          price: 40,
          imageUrl: 'kidscrown.jpg',
          category: { 
            style: 'accessories',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Pet Crowns',
          description: 'Adorable flower crowns for pets',
          price: 25,
          imageUrl: 'petcrown.jpg',
          category: { 
            style: 'accessories',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Jean Jackets',
          description: 'Upcycled denim beauties ready to wear anywhere',
          price: 100,
          imageUrl: 'jacket.jpg',
          category: { 
            style: 'clothes',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Shorts',
          description: 'Upcycled Festival shorts where comfort meets fun',
          price: 50,
          imageUrl: 'logo.png',
          category: { 
            style: 'clothes',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Jeans',
          description: 'Upcycled works of wearable art for events',
          price: 75,
          imageUrl: 'logo.png',
          category: { 
            style: 'clothes',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Tops',
          description: 'Festival tops to build on any look',
          price: 50,
          imageUrl: 'logo.png',
          category: { 
            style: 'clothes',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Cosplay',
          description: 'Intricate costumes for cosplay enthusiasts',
          price: 225,
          imageUrl: 'costume.png',
          category: { 
            style: 'costumes',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Halloween',
          description: 'Detailed costumes for Halloween',
          price: 125,
          imageUrl: 'logo.png',
          category: { 
            style: 'costumes',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Ravewear',
          description: 'Edgy and bold outfits for festivals',
          price: 100,
          imageUrl: 'ravewear.png',
          category: { 
            style: 'costumes',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Hats',
          description: 'Weird and wonderful hats for festivals',
          price: 40,
          imageUrl: 'logo.png',
          category: { 
            style: 'accessories',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Gloves',
          description: 'Statement gloves meant to add the wow factor',
          price: 50,
          imageUrl: 'logo.png',
          category: { 
            style: 'accessories',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Masks',
          description: 'Various masks for any vibe',
          price: 50,
          imageUrl: 'logo.png',
          category: { 
            style: 'accessories',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
        },
        {
          name: 'Belts',
          description: 'Festival belts that add fashion & function',
          price: 65,
          imageUrl: 'belt.png',
          category: { 
            style: 'accessories',
            size: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy']
          }
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
  