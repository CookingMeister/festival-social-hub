import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: {
    size: { type: String, enum: ['xtra small', 'small', 'medium', 'curvy', 'xtra curvy', '2xtracurvy', '3xtracurvy'] },
    style: { type: String, enum: ['crowns', 'clothes', 'costumes', 'accessories'] }
  },
  bestSeller: { 
    type: String, 
    enum: ['mermaid crowns', 'jeans jackets', 'flower crowns'], 
    default: null 
  },
  availability: { type: Boolean, default: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  stripePriceId: { type: String }, // Stripe Price ID
  stripeProductId: { type: String }, // Stripe Product ID
  stripeSkuId: { type: String }, // Optional: Stripe SKU ID
});

const Product = model('Product', productSchema);

async function seedProducts() {
  try {
    await Product.deleteMany(); // Clear existing products
    await Product.create([
      {
        name: 'Mermaid Crowns',
        description: 'Handcrafted crown adorned with shells and pearls',
        price: 100,
        category: { style: 'Accessories' }
      },
      {
        name: 'Flower Crowns',
        description: 'Forever flower crown made with assorted blooms',
        price: 50,
        category: { style: 'Accessories' }
      },
      {
        name: 'Kids Crowns',
        description: 'Assortment of playful crowns for children',
        price: 40,
        category: { style: 'Accessories' }
      },
      {
        name: 'Pet Crowns',
        description: 'Adorable flower crowns for pets',
        price: 25,
        category: { style: 'Accessories' }
      },
      {
        name: 'Jackets',
        description: 'Upcycled denim beauties ready to wear anywhere',
        price: 100,
        category: { style: 'Clothes' }
      },
      {
        name: 'Shorts',
        description: 'Upcycled Festival shorts where comfort meets fun',
        price: 50,
        category: { style: 'Clothes' }
      },
      {
        name: 'Jeans',
        description: 'Upcycled works of wearable art for events',
        price: 75,
        category: { style: 'Clothes' }
      },
      {
        name: 'Tops',
        description: 'Festival tops to build on any look',
        price: 50,
        category: { style: 'Clothes' }
      },
      {
        name: 'Cosplay',
        description: 'Intricate costumes for cosplay enthusiasts',
        price: 225,
        category: { style: 'Costumes' }
      },
      {
        name: 'Halloween',
        description: 'Detailed costumes for Halloween',
        price: 125,
        category: { style: 'Costumes' }
      },
      {
        name: 'Ravewear',
        description: 'Edgy and bold outfits for festivals',
        price: 100,
        category: { style: 'Costumes' }
      },
      {
        name: 'Hats',
        description: 'Weird and wonderful hats for festivals',
        price: 40,
        category: { style: 'Accessories' }
      },
      {
        name: 'Gloves',
        description: 'Statement gloves meant to add the wow factor',
        price: 50,
        category: { style: 'Accessories' }
      },
      {
        name: 'Masks',
        description: 'Various masks for any vibe',
        price: 50,
        category: { style: 'Accessories' }
      },
      {
        name: 'Belts',
        description: 'Festival belts that add fashion & function',
        price: 65,
        category: { style: 'Accessories' }
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
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  // Call the function to seed products
  seedProducts();
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
