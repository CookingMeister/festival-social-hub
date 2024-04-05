// postController.js

// Import necessary modules
import Post from '../models/profileModels/postModel/post';
import User from '../models/profileModels/userModel/user';

// Function to create a post
export const createPost = async (req, res) => {
  try {
    const { userId, content, image } = req.body;
    // Create a new post
    const post = await Post.create({ user: userId, content, image });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get all posts
export const getPosts = async (req, res) => {
  try {
    // Retrieve all posts from the database
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to delete a post by ID
export const deletePostById = async (req, res) => {
  try {
    const { postId } = req.params;
    // Find the post by ID and delete it
    const post = await Post.findByIdAndDelete(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to search for posts
export const searchPosts = async (req, res) => {
  try {
    const { keyword } = req.query;
    // Search for posts based on keyword in content
    const posts = await Post.find({ content: { $regex: keyword, $options: 'i' } });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get top posts
export const getTopPosts = async (req, res) => {
  try {
    // Retrieve top posts based on some criteria (e.g., likes, comments)
    // Implement your logic here to determine the top posts
    const topPosts = await Post.find().sort({ likes: -1 }).limit(10); // Example: Get top 10 posts based on likes
    res.status(200).json(topPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
