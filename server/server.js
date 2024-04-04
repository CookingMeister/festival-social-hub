import express from 'express';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import connectDB from './config/connection.js';
// import authRoutes from './routes/authRoutes';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.use('/api', authRoutes);

// Serve static files from the dist folder
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

// Connect to MongoDB
connectDB();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Music Festival Hub API!');
});

// Catch-all route to serve index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
