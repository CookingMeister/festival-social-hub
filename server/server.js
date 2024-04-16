import express from 'express';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import connectDB from './config/connection.js';
import routes from './routes/index.js';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

// Serve static files from the dist folder (uncomment on build, comment out for dev)
const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, 'dist')));

// Connect to MongoDB
connectDB();

// Catch-all route to serve index.html for client-side routing

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html')); // (uncomment on build, comment out for dev)
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/', 'index.html'));  // (comment out on build, uncomment for dev)
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});